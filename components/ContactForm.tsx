"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/context";
import { useStrings } from "@/lib/i18n/strings";
import { EMAIL_REGEX, isPlausiblePhone } from "@/lib/formValidation";
import { hasHubSpotFormConfig, submitHubSpotLead, type HubSpotField } from "@/lib/hubspot";
import { ContactSuccessModal } from "./ContactSuccessModal";

function splitName(fullName: string): { firstname: string; lastname: string } {
  const trimmed = fullName.trim();
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex === -1) return { firstname: trimmed, lastname: "" };
  return { firstname: trimmed.slice(0, spaceIndex), lastname: trimmed.slice(spaceIndex + 1) };
}

const emptyForm = {
  name: "",
  company: "",
  position: "",
  email: "",
  phone: "",
  product: "",
  brekoMember: "",
  message: "",
  botcheck: "",
};

export function ContactForm() {
  const { content } = useLocale();
  const { models, site } = content;
  const t = useStrings().forms.contact;
  const brekoOptions = t.brekoOptions;
  const products = [...models.map((m) => m.navLabel), t.otherProduct];
  const [form, setForm] = useState({ ...emptyForm, brekoMember: brekoOptions[0] });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const requiredFields = ["name", "company", "email", "phone", "message"] as const;

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (e.target.value && invalidFields.has(key)) {
      setInvalidFields((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.botcheck) return;
    const missing = requiredFields.filter((key) => !form[key]);
    const invalidEmail = !missing.includes("email") && !EMAIL_REGEX.test(form.email);
    const invalidPhone = !missing.includes("phone") && !isPlausiblePhone(form.phone);

    if (missing.length > 0 || invalidEmail || invalidPhone) {
      const invalid = new Set([...missing, ...(invalidEmail ? ["email"] : []), ...(invalidPhone ? ["phone"] : [])]);
      setInvalidFields(invalid);
      setError(
        missing.length > 0
          ? t.missingRequired
          : invalidEmail && invalidPhone
            ? t.invalidEmailAndPhone
            : invalidEmail
              ? t.invalidEmail
              : t.invalidPhone
      );
      return;
    }
    setInvalidFields(new Set());
    setError(null);
    setStatus("submitting");

    const { firstname, lastname } = splitName(form.name);
    const fields: HubSpotField[] = [
      { name: "firstname", value: firstname },
      { name: "lastname", value: lastname },
      { name: "company", value: form.company },
      { name: "jobtitle", value: form.position },
      { name: "email", value: form.email },
      { name: "phone", value: form.phone },
      { name: "produkt_interesse", value: form.product },
      { name: "breko_mitglied", value: form.brekoMember !== brekoOptions[0] ? form.brekoMember : "" },
      { name: "nachricht", value: form.message },
      { name: "lead_quelle", value: "Kontaktformular" },
    ];

    const result = await submitHubSpotLead({ formKey: "contact", pageName: "Kontakt", fields });
    if (result.ok || result.error === "not_configured") {
      setStatus("sent");
      setForm({ ...emptyForm, brekoMember: brekoOptions[0] });
      setShowSuccessModal(true);
    } else {
      setStatus("error");
      setError(t.sendError(site.contactFormEmail));
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-primary";
  const fieldClass = (key: (typeof requiredFields)[number]) =>
    invalidFields.has(key) ? `${inputClass} border-red-500 focus:border-red-500` : inputClass;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-surface p-8 sm:p-10">
      <input
        type="text"
        name="botcheck"
        value={form.botcheck}
        onChange={update("botcheck")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">{t.nameLabel}</label>
          <input id="contact-name" required value={form.name} onChange={update("name")} className={fieldClass("name")} placeholder={t.namePlaceholder} />
        </div>
        <div>
          <label htmlFor="contact-company" className="mb-1.5 block text-sm font-medium text-ink">{t.companyLabel}</label>
          <input id="contact-company" required value={form.company} onChange={update("company")} className={fieldClass("company")} placeholder={t.companyPlaceholder} />
        </div>
        <div>
          <label htmlFor="contact-position" className="mb-1.5 block text-sm font-medium text-ink">{t.positionLabel}</label>
          <input
            id="contact-position"
            value={form.position}
            onChange={update("position")}
            className={inputClass}
            placeholder={t.positionPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink">{t.emailLabel}</label>
          <input id="contact-email" required type="email" value={form.email} onChange={update("email")} className={fieldClass("email")} placeholder={t.emailPlaceholder} />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-ink">{t.phoneLabel}</label>
          <input
            id="contact-phone"
            required
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className={fieldClass("phone")}
            placeholder={t.phonePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="contact-product" className="mb-1.5 block text-sm font-medium text-ink">{t.productLabel}</label>
          <select id="contact-product" value={form.product} onChange={update("product")} className={inputClass}>
            <option value="">{t.productSelectPlaceholder}</option>
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-breko" className="mb-1.5 block text-sm font-medium text-ink">{t.brekoLabel}</label>
          <select id="contact-breko" value={form.brekoMember} onChange={update("brekoMember")} className={inputClass}>
            {brekoOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">{t.messageLabel}</label>
          <textarea
            id="contact-message"
            required
            rows={5}
            value={form.message}
            onChange={update("message")}
            className={fieldClass("message")}
            placeholder={t.messagePlaceholder}
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      {!hasHubSpotFormConfig("contact") && (
        <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
          Entwicklungsvorschau: Die HubSpot-Formular-ID fehlt noch. Anfragen werden erst nach Verknüpfung tatsächlich
          übertragen.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-heading mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? t.submitting : t.submit}
      </button>

      <ContactSuccessModal open={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </form>
  );
}
