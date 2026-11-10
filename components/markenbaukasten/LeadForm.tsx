"use client";

import { useState } from "react";
import { LocalizedLink as Link } from "../LocalizedLink";
import { EMAIL_REGEX, isPlausiblePhone } from "@/lib/formValidation";
import { hasHubSpotFormConfig, submitHubSpotLead, type HubSpotField } from "@/lib/hubspot";
import type { LeadData } from "./types";

export function LeadForm({
  submitLabel,
  extraFields,
  logoFile,
  onSuccess,
}: {
  submitLabel: string;
  extraFields: HubSpotField[];
  logoFile: File | null;
  onSuccess: (lead: LeadData) => void;
}) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!first.trim() || !last.trim() || !company.trim() || !EMAIL_REGEX.test(email)) {
      setError("Bitte Vorname, Nachname, Firma und eine gültige E-Mail-Adresse angeben.");
      return;
    }
    if (phone.trim() && !isPlausiblePhone(phone)) {
      setError("Bitte eine gültige Telefonnummer eingeben oder das Feld leer lassen.");
      return;
    }
    if (!consent) {
      setError("Bitte bestätigen Sie die Einwilligung.");
      return;
    }
    setError(null);
    setStatus("submitting");

    const fields: HubSpotField[] = [
      { name: "firstname", value: first },
      { name: "lastname", value: last },
      { name: "company", value: company },
      { name: "email", value: email },
      { name: "phone", value: phone },
      ...extraFields,
    ];
    const result = await submitHubSpotLead({
      formKey: "markenbaukasten",
      pageName: "Markenbaukasten",
      fields,
      logoFile,
    });
    setStatus("idle");
    if (!result.ok && result.error !== "not_configured") {
      setError("Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.");
      return;
    }
    onSuccess({ first, last, company, email, phone });
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid gap-x-3 gap-y-0 sm:grid-cols-2">
        <div className="mt-4">
          <label htmlFor="mb-first" className="mb-1.5 block text-sm font-semibold text-ink">
            Vorname
          </label>
          <input
            id="mb-first"
            type="text"
            autoComplete="given-name"
            required
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            className="w-full rounded-xl border border-line bg-background px-3.5 py-3 text-sm text-ink outline-none focus:border-primary-ink"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="mb-last" className="mb-1.5 block text-sm font-semibold text-ink">
            Nachname
          </label>
          <input
            id="mb-last"
            type="text"
            autoComplete="family-name"
            required
            value={last}
            onChange={(e) => setLast(e.target.value)}
            className="w-full rounded-xl border border-line bg-background px-3.5 py-3 text-sm text-ink outline-none focus:border-primary-ink"
          />
        </div>
        <div className="col-span-full mt-4">
          <label htmlFor="mb-company" className="mb-1.5 block text-sm font-semibold text-ink">
            Firma
          </label>
          <input
            id="mb-company"
            type="text"
            autoComplete="organization"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full rounded-xl border border-line bg-background px-3.5 py-3 text-sm text-ink outline-none focus:border-primary-ink"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="mb-email" className="mb-1.5 block text-sm font-semibold text-ink">
            E-Mail
          </label>
          <input
            id="mb-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-line bg-background px-3.5 py-3 text-sm text-ink outline-none focus:border-primary-ink"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="mb-phone" className="mb-1.5 block text-sm font-semibold text-ink">
            Telefon
          </label>
          <input
            id="mb-phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-line bg-background px-3.5 py-3 text-sm text-ink outline-none focus:border-primary-ink"
          />
        </div>
      </div>

      <label className="mt-4 flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-primary-ink"
        />
        <span>
          Ich bin einverstanden, dass newSIM mich zu meiner Anfrage kontaktiert. Ich habe die Rechte am hochgeladenen
          Logo. Hinweise zur Verarbeitung meiner Daten:{" "}
          <Link href="/datenschutz" className="font-medium text-primary-ink underline">
            Datenschutzerklärung
          </Link>
          .
        </span>
      </label>

      {error && <p className="mt-2.5 text-sm text-red-600">{error}</p>}
      {!hasHubSpotFormConfig("markenbaukasten") && (
        <p className="mt-2.5 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
          Entwicklungsvorschau: Die HubSpot-Formular-ID fehlt noch. Anfragen werden erst nach Verknüpfung tatsächlich
          übertragen.
        </p>
      )}

      <div className="mt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="font-heading inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Wird gesendet…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
