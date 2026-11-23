"use client";

import { StepNav } from "./StepNav";
import { LeadForm } from "./LeadForm";
import { Booking } from "./Booking";
import { ResultChart } from "./ResultChart";
import {
  MODELS,
  breakEvenMonth,
  calcCommission,
  formatEur,
  selectedTariffs,
  type ModelId,
  type TariffState,
} from "@/lib/markenbaukasten";
import type { HubSpotField } from "@/lib/hubspot";
import type { LeadData } from "./types";

export function StepResult({
  model,
  tariffs,
  perMonth,
  onPerMonthChange,
  brand,
  color,
  logoFile,
  utm,
  leadSubmitted,
  onLeadSuccess,
  onBack,
}: {
  model: ModelId;
  tariffs: TariffState[];
  perMonth: number;
  onPerMonthChange: (value: number) => void;
  brand: string;
  color: string;
  logoFile: File | null;
  utm: Record<string, string>;
  leadSubmitted: boolean;
  onLeadSuccess: (lead: LeadData) => void;
  onBack: () => void;
}) {
  const sel = selectedTariffs(tariffs);
  const result = calcCommission(tariffs, perMonth, model);

  if (!result) {
    return (
      <div>
        <p className="rounded-xl bg-amber-50 p-3.5 text-sm text-amber-800">Bitte zuerst Tarife wählen.</p>
        <StepNav onBack={onBack} hideNext />
      </div>
    );
  }

  const breakEven = breakEvenMonth(result);

  const extraFields: HubSpotField[] = [
    { name: "partner_modell", value: MODELS[model].name },
    { name: "marke_name", value: brand },
    { name: "marke_farbe", value: color },
    { name: "marke_logo", value: logoFile ? "hochgeladen" : "–" },
    { name: "tarife", value: sel.map((t) => `${t.name} (${t.label}) ${t.price} €`).join(", ") },
    { name: "neukunden_monat", value: String(perMonth) },
    { name: "provision_jahr1", value: formatEur(result.y1, 0) },
    { name: "lead_quelle", value: "Markenbaukasten" },
    { name: "utm_source", value: utm.utm_source ?? "" },
    { name: "utm_medium", value: utm.utm_medium ?? "" },
    { name: "utm_campaign", value: utm.utm_campaign ?? "" },
  ];

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Was Sie verdienen</h2>
      <p className="mt-1.5 text-ink-soft">Provision auf Nettobasis, Durchschnitt über Ihre {sel.length} Tarife.</p>

      <div className="mt-5">
        <label htmlFor="mb-permonth" className="mb-1.5 block text-sm font-semibold text-ink">
          Neukunden pro Monat: <output className="tabular-nums">{perMonth}</output>
        </label>
        <input
          id="mb-permonth"
          type="range"
          min={5}
          max={150}
          step={5}
          value={perMonth}
          onChange={(e) => onPerMonthChange(Number(e.target.value))}
          className="w-full accent-ink"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        <div className="rounded-2xl bg-surface p-3.5">
          <span className="text-[12.5px] text-ink-soft">Pro Kunde über 24 Monate</span>
          <b className="font-heading mt-1 block text-2xl font-extrabold text-ink tabular-nums">
            {formatEur(result.cust24, 0)}
          </b>
        </div>
        <div className="rounded-2xl bg-surface p-3.5">
          <span className="text-[12.5px] text-ink-soft">Provision im Monat 12</span>
          <b className="font-heading mt-1 block text-2xl font-extrabold text-ink tabular-nums">
            {formatEur(result.month12, 0)}
          </b>
        </div>
        <div className="rounded-2xl bg-ink p-3.5 text-white">
          <span className="text-[12.5px] opacity-75">Summe im ersten Jahr</span>
          <b className="font-heading mt-1 block text-2xl font-extrabold tabular-nums">{formatEur(result.y1, 0)}</b>
        </div>
      </div>

      <div className="mt-4.5">
        <ResultChart result={result} />
        <p className="mt-1.5 text-[12.5px] text-ink-soft">
          Provision je Monat, Monat 1 bis 24
          {result.fee > 0 &&
            ` · gestrichelt: Grundgebühr ${formatEur(result.fee, 0)} – ab Monat ${breakEven ?? "> 24"} liegt die Provision darüber`}
        </p>
      </div>

      <p className="mt-3.5 text-xs text-ink-soft">
        Ø je Kunde: {formatEur(result.m)} monatlich (Grund- und Aufschlagprovision) + {formatEur(result.o)} einmalig
        (Aktivierungsprämie und 50 % Bereitstellung). Ohne Kündigungen gerechnet, Laufzeit 24 Monate. Beispielwerte –
        gültige Konditionen laut Angebot.
      </p>

      <h2 className="font-heading mt-7 text-[21px] font-bold tracking-tight text-ink">Ihr Markenpaket anfordern</h2>
      <p className="mt-1.5 text-ink-soft">
        Wir schicken Ihnen Vorschau, Rechnung und Auftragsformular mit Ihrem Logo als PDF und melden uns für ein
        kurzes Gespräch.
      </p>

      {leadSubmitted ? (
        <>
          <p className="mt-4 rounded-2xl bg-[#ebf6e4] px-4 py-3.5 font-medium text-[#56634f]">
            Danke! Ihr Ergebnis ist bei unserem Partnerteam angekommen.
          </p>
          <Booking />
        </>
      ) : (
        <LeadForm submitLabel="Markenpaket anfordern" extraFields={extraFields} logoFile={logoFile} onSuccess={onLeadSuccess} />
      )}

      <StepNav onBack={onBack} hideNext />
    </div>
  );
}
