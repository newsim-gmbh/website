"use client";

import { useState } from "react";
import { LocalizedLink as Link } from "./LocalizedLink";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Icon, type IconName } from "./Icon";
import { ContactTile } from "./ContactTile";
import { useLocale } from "@/lib/i18n/context";
import { useStrings } from "@/lib/i18n/strings";
import { EMAIL_REGEX, isPlausiblePhone } from "@/lib/formValidation";

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

const benefitIcons: IconName[] = ["tower", "shield", "sliders", "wifi", "link", "layers", "support"];

export function IotRequestForm() {
  const { content } = useLocale();
  const { site, contacts } = content;
  const allStrings = useStrings();
  const t = allStrings.forms.iotRequest;
  const contactTileHeading = allStrings.contactTile.heading;
  const steps: { key: "email" | "projekt" | "kontakt"; label: string; icon: IconName }[] = [
    { key: "email", label: t.stepEmail, icon: "mail" },
    { key: "projekt", label: t.stepProject, icon: "clipboard" },
    { key: "kontakt", label: t.stepContact, icon: "userCircle" },
  ];
  const benefits = benefitIcons.map((icon, i) => ({ icon, text: t.benefits[i] }));
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
        setError(!form.email ? t.missingEmail : t.invalidEmail);
        return false;
      }
    }

    if (step.key === "projekt") {
      const required = ["useCase", "simCount", "countries"] as const;
      const missing = required.filter((key) => !form[key]);
      setInvalidFields(new Set(missing));
      if (missing.length > 0) {
        setError(t.missingRequired);
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
            ? t.missingRequired
            : t.invalidPhone
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

  const handleSubmit = async () => {
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
          "Durchschnittlicher Datenverbrauch je SIM": form.avgDataUsage || undefined,
          "Einsatzlaender der SIM-Karten": form.countries,
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
      setError(t.sendError(site.contactFormEmail));
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
        <h3 className="font-heading mt-6 text-2xl font-bold tracking-tight text-ink">{t.successTitle}</h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
          {t.successBody}
        </p>
        <Link
          href="/iot"
          className="font-heading mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
        >
          {t.backToIotOverview}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.6fr]">
      <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
        <div className="grid h-full gap-6 sm:grid-cols-[auto_1fr]">
          <div className="flex h-full flex-col">
            {steps.map((s, i) => {
              const isLast = i === steps.length - 1;
              return (
                <div key={s.key} className={clsx("flex items-start gap-3", isLast && "flex-1")}>
                  <div className={clsx("flex flex-col items-center", isLast && "h-full")}>
                    <span
                      className={clsx(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                        i <= stepIndex ? "bg-primary text-sky" : "bg-primary/15 text-primary-ink"
                      )}
                    >
                      <Icon name={s.icon} className="h-4 w-4" />
                    </span>
                    <span
                      className={clsx(
                        "my-1 w-px",
                        isLast ? "flex-1" : "h-6",
                        i < stepIndex ? "bg-primary" : "bg-line"
                      )}
                    />
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
              );
            })}
          </div>

          <form onSubmit={(e) => e.preventDefault()} noValidate className="flex flex-col">
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
                  <h3 className="font-heading text-xl font-bold tracking-tight text-ink">{t.emailStepTitle}</h3>
                  <p className="mt-2 text-sm text-ink-soft">
                    {t.emailStepNote}
                  </p>
                  <div className="mt-6">
                    <label htmlFor="iot-email" className="mb-1.5 block text-sm font-medium text-ink">{t.businessEmailLabel}</label>
                    <input
                      id="iot-email"
                      autoFocus
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      className={fieldClass("email")}
                      placeholder={t.businessEmailPlaceholder}
                    />
                  </div>
                </div>
              )}

              {step.key === "projekt" && (
                <div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-ink">{t.projectStepTitle}</h3>
                  <div className="mt-6 grid gap-5">
                    <div>
                      <label htmlFor="iot-usecase" className="mb-1.5 block text-sm font-medium text-ink">{t.useCaseLabel}</label>
                      <textarea
                        id="iot-usecase"
                        autoFocus
                        required
                        rows={3}
                        value={form.useCase}
                        onChange={update("useCase")}
                        className={fieldClass("useCase")}
                        placeholder={t.useCasePlaceholder}
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="iot-simcount" className="mb-1.5 block text-sm font-medium text-ink">{t.simCountLabel}</label>
                        <input
                          id="iot-simcount"
                          required
                          value={form.simCount}
                          onChange={update("simCount")}
                          className={fieldClass("simCount")}
                          placeholder={t.simCountPlaceholder}
                        />
                      </div>
                      <div>
                        <label htmlFor="iot-datausage" className="mb-1.5 block text-sm font-medium text-ink">{t.avgDataUsageLabel}</label>
                        <input
                          id="iot-datausage"
                          value={form.avgDataUsage}
                          onChange={update("avgDataUsage")}
                          className={inputClass}
                          placeholder={t.avgDataUsagePlaceholder}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="iot-countries" className="mb-1.5 block text-sm font-medium text-ink">{t.countriesLabel}</label>
                      <input
                        id="iot-countries"
                        required
                        value={form.countries}
                        onChange={update("countries")}
                        className={fieldClass("countries")}
                        placeholder={t.countriesPlaceholder}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step.key === "kontakt" && (
                <div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-ink">{t.contactStepTitle}</h3>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="iot-company" className="mb-1.5 block text-sm font-medium text-ink">{t.companyLabel}</label>
                      <input
                        id="iot-company"
                        autoFocus
                        required
                        value={form.company}
                        onChange={update("company")}
                        className={fieldClass("company")}
                        placeholder={t.companyPlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="iot-firstname" className="mb-1.5 block text-sm font-medium text-ink">{t.firstNameLabel}</label>
                      <input id="iot-firstname" required value={form.firstName} onChange={update("firstName")} className={fieldClass("firstName")} placeholder={t.firstNamePlaceholder} />
                    </div>
                    <div>
                      <label htmlFor="iot-lastname" className="mb-1.5 block text-sm font-medium text-ink">{t.lastNameLabel}</label>
                      <input id="iot-lastname" required value={form.lastName} onChange={update("lastName")} className={fieldClass("lastName")} placeholder={t.lastNamePlaceholder} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="iot-phone" className="mb-1.5 block text-sm font-medium text-ink">{t.phoneLabel}</label>
                      <input
                        id="iot-phone"
                        required
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        className={fieldClass("phone")}
                        placeholder={t.phonePlaceholder}
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          <div className="mt-auto pt-8 flex items-center justify-between">
            {stepIndex > 0 ? (
              <button
                type="button"
                onClick={goBack}
                className="font-heading inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-background"
              >
                {t.back}
              </button>
            ) : (
              <span />
            )}

            {step.key === "kontakt" ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "submitting"}
                className="font-heading inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? t.submitting : t.submit}
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                className="font-heading inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
              >
                {t.next}
              </button>
            )}
          </div>
          </form>
        </div>
      </div>

      <div className="rounded-3xl border border-line bg-surface p-6 sm:p-7">
        <p className="font-heading text-sm font-bold text-ink">{t.sidebarTitle}</p>
        <ul className="mt-3.5 space-y-2">
          {benefits.map((b) => (
            <li key={b.text} className="flex items-center gap-2.5 text-[13px] leading-snug text-ink-soft">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-ink">
                <Icon name={b.icon} className="h-3 w-3" />
              </span>
              {b.text}
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-line pt-4">
          <ContactTile contact={contacts[0]} heading={contactTileHeading} />
        </div>
      </div>
    </div>
  );
}
