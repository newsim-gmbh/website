"use client";

import { useState } from "react";
import { models, site } from "@/lib/content";
import { EMAIL_REGEX, isPlausiblePhone } from "@/lib/formValidation";
import { ContactSuccessModal } from "./ContactSuccessModal";

const products = [...models.map((m) => m.navLabel), "Sonstiges"];
const brekoOptions = ["Keine Angabe", "Ja", "Nein"];

const emptyForm = {
  name: "",
  company: "",
  position: "",
  email: "",
  phone: "",
  product: "",
  brekoMember: brekoOptions[0],
  message: "",
  botcheck: "",
};

export function ContactForm() {
  const [form, setForm] = useState(emptyForm);
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

    const subject = form.product ? `Kontaktanfrage (${form.product}) — ${form.name}` : `Kontaktanfrage — ${form.name}`;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsAccessKey,
          subject,
          from_name: "newSIM Kontaktformular",
          name: form.name,
          Firma: form.company,
          Position: form.position || undefined,
          email: form.email,
          replyto: form.email,
          Telefon: form.phone,
          Produkt: form.product || undefined,
          "BREKO-Mitglied": form.brekoMember !== brekoOptions[0] ? form.brekoMember : undefined,
          message: form.message,
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
        `Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an ${site.contactFormEmail}.`
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
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">Name *</label>
          <input id="contact-name" required value={form.name} onChange={update("name")} className={fieldClass("name")} placeholder="Vor- und Nachname" />
        </div>
        <div>
          <label htmlFor="contact-company" className="mb-1.5 block text-sm font-medium text-ink">Firma *</label>
          <input id="contact-company" required value={form.company} onChange={update("company")} className={fieldClass("company")} placeholder="Unternehmen" />
        </div>
        <div>
          <label htmlFor="contact-position" className="mb-1.5 block text-sm font-medium text-ink">Position im Unternehmen</label>
          <input
            id="contact-position"
            value={form.position}
            onChange={update("position")}
            className={inputClass}
            placeholder="z. B. Geschäftsführung, Einkauf"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink">E-Mail *</label>
          <input id="contact-email" required type="email" value={form.email} onChange={update("email")} className={fieldClass("email")} placeholder="name@firma.de" />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-ink">Telefon *</label>
          <input
            id="contact-phone"
            required
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className={fieldClass("phone")}
            placeholder="+49 151 23456789"
          />
        </div>
        <div>
          <label htmlFor="contact-product" className="mb-1.5 block text-sm font-medium text-ink">Produkt</label>
          <select id="contact-product" value={form.product} onChange={update("product")} className={inputClass}>
            <option value="">Bitte auswählen</option>
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-breko" className="mb-1.5 block text-sm font-medium text-ink">BREKO-Mitglied</label>
          <select id="contact-breko" value={form.brekoMember} onChange={update("brekoMember")} className={inputClass}>
            {brekoOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">Nachricht *</label>
          <textarea
            id="contact-message"
            required
            rows={5}
            value={form.message}
            onChange={update("message")}
            className={fieldClass("message")}
            placeholder="Wie können wir helfen?"
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-heading mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Wird gesendet…" : "Nachricht senden"}
      </button>

      <ContactSuccessModal open={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </form>
  );
}
