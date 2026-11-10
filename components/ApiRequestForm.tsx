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
  message: "",
  botcheck: "",
};

export function ApiRequestForm() {
  const { content } = useLocale();
  const { site } = content;
  const t = useStrings().forms.apiRequest;
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const requiredFields = ["name", "company", "email", "phone"] as const;

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      { name: "nachricht", value: form.message },
      { name: "lead_quelle", value: "API-Anfrage" },
    ];

    const result = await submitHubSpotLead({ formKey: "apiRequest", pageName: "API-Anfrage", fields });
    if (result.ok || result.error === "not_configured") {
      setStatus("sent");
      setForm(emptyForm);
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
          <label htmlFor="api-name" className="mb-1.5 block text-sm font-medium text-ink">{t.nameLabel}</label>
          <input id="api-name" required value={form.name} onChange={update("name")} className={fieldClass("name")} placeholder={t.namePlaceholder} />
        </div>
        <div>
          <label htmlFor="api-company" className="mb-1.5 block text-sm font-medium text-ink">{t.companyLabel}</label>
          <input id="api-company" required value={form.company} onChange={update("company")} className={fieldClass("company")} placeholder={t.companyPlaceholder} />
        </div>
        <div>
          <label htmlFor="api-position" className="mb-1.5 block text-sm font-medium text-ink">{t.positionLabel}</label>
          <input
            id="api-position"
            value={form.position}
            onChange={update("position")}
            className={inputClass}
            placeholder={t.positionPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="api-email" className="mb-1.5 block text-sm font-medium text-ink">{t.emailLabel}</label>
          <input id="api-email" required type="email" value={form.email} onChange={update("email")} className={fieldClass("email")} placeholder={t.emailPlaceholder} />
        </div>
        <div>
          <label htmlFor="api-phone" className="mb-1.5 block text-sm font-medium text-ink">{t.phoneLabel}</label>
          <input
            id="api-phone"
            required
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className={fieldClass("phone")}
            placeholder={t.phonePlaceholder}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="api-message" className="mb-1.5 block text-sm font-medium text-ink">{t.messageLabel}</label>
          <textarea
            id="api-message"
            rows={4}
            value={form.message}
            onChange={update("message")}
            className={inputClass}
            placeholder={t.messagePlaceholder}
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      {!hasHubSpotFormConfig("apiRequest") && (
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

      <ContactSuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title={t.successTitle}
        body={t.successBody}
      />
    </form>
  );
}
