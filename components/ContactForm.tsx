"use client";

import { useState } from "react";
import { models, site } from "@/lib/content";
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
};

export function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const requiredFields = ["name", "company", "email", "message"] as const;

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
    const missing = requiredFields.filter((key) => !form[key]);
    if (missing.length > 0) {
      setInvalidFields(new Set(missing));
      setError("Bitte alle rot markierten Pflichtfelder ausfüllen.");
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
          Telefon: form.phone || undefined,
          Produkt: form.product || undefined,
          "BREKO-Mitglied": form.brekoMember !== brekoOptions[0] ? form.brekoMember : undefined,
          message: form.message,
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
            placeholder="z. B. Geschäftsführung, Einkauf"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">E-Mail *</label>
          <input required type="email" value={form.email} onChange={update("email")} className={fieldClass("email")} placeholder="name@firma.de" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Telefon</label>
          <input value={form.phone} onChange={update("phone")} className={inputClass} placeholder="Optional" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Produkt</label>
          <select value={form.product} onChange={update("product")} className={inputClass}>
            <option value="">Bitte auswählen</option>
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">BREKO-Mitglied</label>
          <select value={form.brekoMember} onChange={update("brekoMember")} className={inputClass}>
            {brekoOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink">Nachricht *</label>
          <textarea
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
