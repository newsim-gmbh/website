"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LocalizedLink as Link } from "./LocalizedLink";
import { EMAIL_REGEX, isPlausiblePhone } from "@/lib/formValidation";
import { hasHubSpotFormConfig, submitHubSpotLead, type HubSpotField } from "@/lib/hubspot";
import { ROADSHOW_DATES, ROADSHOW_ONLINE_OPTION, roadshowOptionLabel } from "@/lib/roadshow";
import { readUtmParams } from "@/lib/utm";

const emptyForm = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  wunsch: "",
  consent: false,
  botcheck: "",
};

export function RoadshowForm() {
  const [form, setForm] = useState(emptyForm);
  // Einmaliger, rein lesender Zugriff auf die Browser-URL (Lazy-Initializer statt
  // Effekt, siehe MarkenbaukastenBuilder) — die UTM-Werte fließen erst beim
  // Formular-Submit in den HubSpot-Payload ein.
  const [utm] = useState<Record<string, string>>(readUtmParams);
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const requiredFields = ["firstName", "lastName", "company", "email", "wunsch"] as const;

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
      setForm((f) => ({ ...f, [key]: value }));
      if (value && invalidFields.has(key)) {
        setInvalidFields((prev) => {
          const next = new Set(prev);
          next.delete(key);
          return next;
        });
      }
    };

  const inputClass =
    "w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-primary";
  const fieldClass = (key: string) => (invalidFields.has(key) ? `${inputClass} border-red-500 focus:border-red-500` : inputClass);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.botcheck) return;

    const missing = requiredFields.filter((key) => !form[key]);
    const invalidEmail = !missing.includes("email") && !EMAIL_REGEX.test(form.email);
    const invalidPhone = Boolean(form.phone) && !isPlausiblePhone(form.phone);

    if (missing.length > 0 || invalidEmail || invalidPhone || !form.consent) {
      const invalid = new Set<string>([...missing, ...(invalidEmail ? ["email"] : []), ...(invalidPhone ? ["phone"] : [])]);
      setInvalidFields(invalid);
      setError(
        missing.length > 0
          ? "Bitte füllen Sie alle Pflichtfelder aus."
          : invalidEmail
            ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
            : invalidPhone
              ? "Bitte geben Sie eine gültige Telefonnummer ein oder lassen Sie das Feld leer."
              : "Bitte bestätigen Sie die Datenschutzhinweise."
      );
      return;
    }

    setInvalidFields(new Set());
    setError(null);
    setStatus("submitting");

    const fields: HubSpotField[] = [
      { name: "firstname", value: form.firstName },
      { name: "lastname", value: form.lastName },
      { name: "company", value: form.company },
      { name: "email", value: form.email },
      { name: "phone", value: form.phone },
      { name: "roadshow_termin_wunsch", value: form.wunsch },
      { name: "lead_quelle", value: "Sponsored Post telecom handel" },
      { name: "seite", value: "roadshow" },
      { name: "utm_source", value: utm.utm_source ?? "" },
      { name: "utm_medium", value: utm.utm_medium ?? "" },
      { name: "utm_campaign", value: utm.utm_campaign ?? "" },
      { name: "utm_content", value: utm.utm_content ?? "" },
    ];

    const result = await submitHubSpotLead({ formKey: "roadshow", pageName: "Roadshow", fields });
    if (result.ok || result.error === "not_configured") {
      setStatus("sent");
    } else {
      setStatus("error");
      setError("Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns an kontakt@newsim.de.");
    }
  };

  if (status === "sent") {
    const isOnline = form.wunsch === ROADSHOW_ONLINE_OPTION;
    return (
      <div className="rounded-3xl border border-line bg-surface p-8 text-center sm:p-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary-ink"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4.5 4.5L19 7" />
          </svg>
        </motion.div>
        <h3 className="font-heading mt-6 text-2xl font-bold tracking-tight text-ink">Vielen Dank! Ihre Anfrage ist da.</h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
          Wir melden uns innerhalb von zwei Werktagen mit Ihrem Termin. Eine Bestätigung ist unterwegs in Ihr Postfach.
        </p>
        <div className="mt-6 rounded-2xl border border-line bg-background p-4 text-left">
          <p className="text-xs font-medium tracking-wide text-ink-soft uppercase">Ihr Wunschtermin</p>
          <p className="mt-1 text-sm font-semibold text-ink">
            {form.wunsch}
            {!isOnline && " · 13–18 Uhr"}
          </p>
        </div>
        <Link
          href="/markenbaukasten"
          className="mt-6 inline-block text-sm font-medium text-primary-ink underline underline-offset-2"
        >
          Schon jetzt ausprobieren: Gestalten Sie Ihre Marke im Markenbaukasten →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-surface p-8 sm:p-10">
      <input
        type="text"
        name="botcheck"
        value={form.botcheck}
        onChange={(e) => setForm((f) => ({ ...f, botcheck: e.target.value }))}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />
      <h3 className="font-heading text-xl font-bold tracking-tight text-ink">Termin anfragen</h3>
      <p className="mt-1.5 text-sm text-ink-soft">Kostenlos und unverbindlich – persönlich in Ihrer Stadt oder online.</p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="rs-firstname" className="mb-1.5 block text-sm font-medium text-ink">Vorname</label>
          <input id="rs-firstname" required value={form.firstName} onChange={update("firstName")} className={fieldClass("firstName")} placeholder="Max" />
        </div>
        <div>
          <label htmlFor="rs-lastname" className="mb-1.5 block text-sm font-medium text-ink">Nachname</label>
          <input id="rs-lastname" required value={form.lastName} onChange={update("lastName")} className={fieldClass("lastName")} placeholder="Mustermann" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="rs-company" className="mb-1.5 block text-sm font-medium text-ink">Firma</label>
          <input id="rs-company" required value={form.company} onChange={update("company")} className={fieldClass("company")} placeholder="Mustermann Mobilfunk GmbH" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="rs-email" className="mb-1.5 block text-sm font-medium text-ink">E-Mail</label>
          <input id="rs-email" required type="email" value={form.email} onChange={update("email")} className={fieldClass("email")} placeholder="name@firma.de" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="rs-phone" className="mb-1.5 block text-sm font-medium text-ink">Telefon (optional)</label>
          <input id="rs-phone" type="tel" value={form.phone} onChange={update("phone")} className={fieldClass("phone")} placeholder="0171 1234567" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="rs-wunsch" className="mb-1.5 block text-sm font-medium text-ink">Wunschtermin</label>
          <select id="rs-wunsch" required value={form.wunsch} onChange={update("wunsch")} className={fieldClass("wunsch")}>
            <option value="">Stadt oder Online-Termin wählen</option>
            {ROADSHOW_DATES.map((d) => (
              <option key={d.city} value={roadshowOptionLabel(d)}>
                {roadshowOptionLabel(d)}
              </option>
            ))}
            <option value={ROADSHOW_ONLINE_OPTION}>{ROADSHOW_ONLINE_OPTION}</option>
          </select>
        </div>
      </div>

      <label className="mt-5 flex items-start gap-2.5 text-sm text-ink-soft">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={update("consent")}
          className="mt-0.5 h-4 w-4 accent-primary-ink"
        />
        <span>
          Ich habe die{" "}
          <Link href="/datenschutz" className="font-medium text-primary-ink underline">
            Datenschutzhinweise
          </Link>{" "}
          gelesen und bin einverstanden, dass newSIM mich zur Terminabstimmung kontaktiert. *
        </span>
      </label>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      {!hasHubSpotFormConfig("roadshow") && (
        <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
          Entwicklungsvorschau: Die HubSpot-Formular-ID fehlt noch. Anfragen werden erst nach Verknüpfung tatsächlich
          übertragen.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-heading mt-6 inline-flex w-full items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Wird gesendet…" : "Termin anfragen →"}
      </button>
      <p className="mt-3 text-center text-xs text-ink-soft">Wir melden uns innerhalb von zwei Werktagen. Plätze je Stadt begrenzt.</p>
    </form>
  );
}
