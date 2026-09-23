"use client";

import { useState } from "react";
import { site } from "@/lib/content";
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
          ? "Bitte alle rot markierten Pflichtfelder ausfüllen."
          : invalidEmail && invalidPhone
            ? "Bitte eine gültige E-Mail-Adresse und Telefonnummer eingeben."
            : invalidEmail
              ? "Bitte eine gültige E-Mail-Adresse eingeben."
              : "Bitte eine gültige Telefonnummer eingeben."
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
      setError(
        `Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an ${site.contactFormEmail}.`
      );
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
          <label className="mb-1.5 block text-sm font-medium text-ink">Name *</label>
          <input required value={form.name} onChange={update("name")} className={fieldClass("name")} placeholder="Vor- und Nachname" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Firma *</label>
          <input required value={form.company} onChange={update("company")} className={fieldClass("company")} placeholder="Unternehmen" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Position im Unternehmen</label>
          <input
            value={form.position}
            onChange={update("position")}
            className={inputClass}
            placeholder="z. B. IT, Entwicklung"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">E-Mail *</label>
          <input required type="email" value={form.email} onChange={update("email")} className={fieldClass("email")} placeholder="name@firma.de" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Telefon *</label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className={fieldClass("phone")}
            placeholder="+49 151 23456789"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink">Anmerkungen</label>
          <textarea
            rows={4}
            value={form.message}
            onChange={update("message")}
            className={inputClass}
            placeholder="Optional — z. B. geplanter Anwendungsfall oder Systemumgebung"
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-heading mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Wird gesendet…" : "API-Dokumentation anfragen"}
      </button>

      <ContactSuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Anfrage gesendet!"
        body="Vielen Dank für Ihr Interesse — wir schicken Ihnen die API-Dokumentation zeitnah zu."
      />
    </form>
  );
}
