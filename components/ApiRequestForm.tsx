"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/context";
import { useStrings } from "@/lib/i18n/strings";
import { EMAIL_REGEX, isPlausiblePhone } from "@/lib/formValidation";
import { ContactSuccessModal } from "./ContactSuccessModal";

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

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsAccessKey,
          subject: `API-Dokumentation anfragen — ${form.name}`,
          from_name: "newSIM API-Anfrage",
          name: form.name,
          Firma: form.company,
          Position: form.position || undefined,
          email: form.email,
          replyto: form.email,
          Telefon: form.phone,
          message: form.message || undefined,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm(emptyForm);
        setShowSuccessModal(true);
      } else {
        throw new Error(data.message || "Unbekannter Fehler");
      }
    } catch {
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
