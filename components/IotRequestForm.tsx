"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Icon, type IconName } from "./Icon";
import { BenefitTiles } from "./BenefitTiles";
import { ContactTile } from "./ContactTile";
import { site, contacts } from "@/lib/content";
import { EMAIL_REGEX, isPlausiblePhone } from "@/lib/formValidation";

const steps: { key: "email" | "projekt" | "kontakt"; label: string; icon: IconName }[] = [
  { key: "email", label: "E-Mail", icon: "mail" },
  { key: "projekt", label: "Projektinfos", icon: "clipboard" },
  { key: "kontakt", label: "Kontaktdaten", icon: "userCircle" },
];

const emptyForm = {
  email: "",
  useCase: "",
  simCount: "",
  avgDataUsage: "",
  countries: "",
  company: "",
  firstName: "",
  lastName: "",
  phone: "",
  botcheck: "",
};

const benefits = [
  { icon: "tower" as const, text: "LTE/5G & IoT/M2M auf dem Telefónica-Netz" },
  { icon: "shield" as const, text: "BNetzA-reguliert gemäß TKG & TR-AAV" },
  { icon: "sliders" as const, text: "Dynamisches Datenpooling" },
  { icon: "wifi" as const, text: "Nationales Roaming" },
  { icon: "link" as const, text: "Individueller APN" },
  { icon: "layers" as const, text: "Skalierbar vom Pilotprojekt bis zur Großflotte" },
  { icon: "support" as const, text: "Persönlicher Ansprechpartner aus Deutschland" },
];

export function IotRequestForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState(emptyForm);
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const step = steps[stepIndex];

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const validateStep = (): boolean => {
    if (step.key === "email") {
      const invalid = new Set<string>();
      if (!form.email) invalid.add("email");
      else if (!EMAIL_REGEX.test(form.email)) invalid.add("email");
      setInvalidFields(invalid);
      if (invalid.size > 0) {
        setError(!form.email ? "Bitte Ihre geschäftliche E-Mail-Adresse eingeben." : "Bitte eine gültige E-Mail-Adresse eingeben.");
        return false;
      }
    }

    if (step.key === "projekt") {
      const required = ["useCase", "simCount", "countries"] as const;
      const missing = required.filter((key) => !form[key]);
      setInvalidFields(new Set(missing));
      if (missing.length > 0) {
        setError("Bitte alle rot markierten Pflichtfelder ausfüllen.");
        return false;
      }
    }

    if (step.key === "kontakt") {
      const required = ["company", "firstName", "lastName", "phone"] as const;
      const missing = required.filter((key) => !form[key]);
      const invalidPhone = !missing.includes("phone") && !isPlausiblePhone(form.phone);
      const invalid = new Set<string>([...missing, ...(invalidPhone ? ["phone"] : [])]);
      setInvalidFields(invalid);
      if (invalid.size > 0) {
        setError(
          missing.length > 0
            ? "Bitte alle rot markierten Pflichtfelder ausfüllen."
            : "Bitte eine gültige Telefonnummer eingeben."
        );
        return false;
      }
    }

    setError(null);
    setInvalidFields(new Set());
    return true;
  };

  const goNext = () => {
    if (!validateStep()) return;
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  };

  const goBack = () => {
    setError(null);
    setInvalidFields(new Set());
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.botcheck) return;
    if (!validateStep()) return;
    setStatus("submitting");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsAccessKey,
          subject: `IoT-Angebot anfragen — ${form.firstName} ${form.lastName} (${form.company})`,
          from_name: "newSIM IoT-Anfrage",
          name: `${form.firstName} ${form.lastName}`,
          Firma: form.company,
          email: form.email,
          replyto: form.email,
          Telefon: form.phone,
          Einsatzbereich: form.useCase,
          "SIM-Karten pro Jahr": form.simCount,
          "Ø Datenverbrauch je SIM": form.avgDataUsage || undefined,
          "Einsatzländer der SIM-Karten": form.countries,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
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

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-line bg-surface p-8 text-center sm:p-14">
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
        <h3 className="font-heading mt-6 text-2xl font-bold tracking-tight text-ink">Anfrage gesendet!</h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
          Vielen Dank für Ihr Interesse an newSIM IoT — wir melden uns zeitnah bei Ihnen zu Ihrem Projekt.
        </p>
        <Link
          href="/iot"
          className="font-heading mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
        >
          Zurück zur IoT-Übersicht
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.6fr] lg:items-start">
      <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-[auto_1fr]">
          <div className="flex flex-col">
            {steps.map((s, i) => (
              <div key={s.key} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <span
                    className={clsx(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      i <= stepIndex ? "bg-primary text-sky" : "bg-primary/15 text-primary-ink"
                    )}
                  >
                    <Icon name={s.icon} className="h-4 w-4" />
                  </span>
                  {i < steps.length - 1 && (
                    <span className={clsx("my-1 h-6 w-px flex-1", i < stepIndex ? "bg-primary" : "bg-line")} />
                  )}
                </div>
                <span
                  className={clsx(
                    "pt-1.5 text-sm font-semibold whitespace-nowrap",
                    i <= stepIndex ? "text-ink" : "text-ink-soft"
                  )}
                >
                  {i + 1}. {s.label}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} noValidate>
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

          <AnimatePresence mode="wait">
            <motion.div
              key={step.key}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
            >
              {step.key === "email" && (
                <div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-ink">Jetzt IoT-Angebot anfragen</h3>
                  <p className="mt-2 text-sm text-ink-soft">
                    Bitte beachten Sie: Wir verkaufen weder einzelne SIM-Karten noch an Privatpersonen.
                  </p>
                  <div className="mt-6">
                    <label className="mb-1.5 block text-sm font-medium text-ink">Geschäftliche E-Mail-Adresse *</label>
                    <input
                      autoFocus
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      className={fieldClass("email")}
                      placeholder="anna.muster@musterfirma.de"
                    />
                  </div>
                </div>
              )}

              {step.key === "projekt" && (
                <div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-ink">Erzählen Sie uns von Ihrem Projekt</h3>
                  <div className="mt-6 grid gap-5">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink">Einsatzbereich — kurze Beschreibung *</label>
                      <textarea
                        autoFocus
                        required
                        rows={3}
                        value={form.useCase}
                        onChange={update("useCase")}
                        className={fieldClass("useCase")}
                        placeholder="z. B. GPS-Tracker für Fuhrpark, Smart Metering, Vending-Automaten"
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-ink">Benötigte SIM-Karten pro Jahr *</label>
                        <input
                          required
                          value={form.simCount}
                          onChange={update("simCount")}
                          className={fieldClass("simCount")}
                          placeholder="z. B. 500"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-ink">Ø Datenverbrauch je SIM/Monat</label>
                        <input
                          value={form.avgDataUsage}
                          onChange={update("avgDataUsage")}
                          className={inputClass}
                          placeholder="Optional — z. B. 100 MB"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink">Länder, in denen die SIM-Karten eingesetzt werden *</label>
                      <input
                        required
                        value={form.countries}
                        onChange={update("countries")}
                        className={fieldClass("countries")}
                        placeholder="z. B. Deutschland, EU"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step.key === "kontakt" && (
                <div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-ink">Ihre Kontaktdaten</h3>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium text-ink">Name der Firma *</label>
                      <input
                        autoFocus
                        required
                        value={form.company}
                        onChange={update("company")}
                        className={fieldClass("company")}
                        placeholder="Musterfirma GmbH"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink">Vorname *</label>
                      <input required value={form.firstName} onChange={update("firstName")} className={fieldClass("firstName")} placeholder="Anna" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink">Nachname *</label>
                      <input required value={form.lastName} onChange={update("lastName")} className={fieldClass("lastName")} placeholder="Schmidt" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium text-ink">Telefonnummer *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        className={fieldClass("phone")}
                        placeholder="+49 151 23456789"
                      />
                    </div>
                  </div>
                  <p className="mt-5 text-xs leading-relaxed text-ink-soft">
                    Mit dem Absenden willigen Sie ein, dass newSIM Ihre Daten gemäß unserer{" "}
                    <Link href="/datenschutz" className="text-primary-ink underline">
                      Datenschutzerklärung
                    </Link>{" "}
                    verarbeitet.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          <div className="mt-8 flex items-center justify-between">
            {stepIndex > 0 ? (
              <button
                type="button"
                onClick={goBack}
                className="font-heading inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-background"
              >
                ← Zurück
              </button>
            ) : (
              <span />
            )}

            {step.key === "kontakt" ? (
              <button
                type="submit"
                disabled={status === "submitting"}
                className="font-heading inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Wird gesendet…" : "IoT-Angebot anfragen"}
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                className="font-heading inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
              >
                Weiter →
              </button>
            )}
          </div>
          </form>
        </div>
      </div>

      <div className="rounded-3xl border border-line bg-surface p-6 sm:p-7">
        <p className="font-heading text-sm font-bold text-ink">Ihre Vorteile mit newSIM IoT</p>
        <div className="mt-4">
          <BenefitTiles items={benefits} />
        </div>
        <div className="mt-6 border-t border-line pt-5">
          <ContactTile contact={contacts[0]} />
        </div>
      </div>
    </div>
  );
}
