"use client";

import { StepNav } from "./StepNav";
import { WL_PROJECT_OPTIONS } from "./types";
import type { WlProject } from "./types";

const FIELDS: { key: keyof WlProject; label: string; id: string }[] = [
  { key: "base", label: "Bestehende Kunden (Internet, IT oder Mobilfunk)", id: "mb-wl-base" },
  { key: "sims", label: "Geplante SIMs im ersten Jahr", id: "mb-wl-sims" },
  { key: "service", label: "Kundenservice und Abrechnung", id: "mb-wl-service" },
  { key: "security", label: "Interesse an der Security-eSIM", id: "mb-wl-security" },
];

export function StepProject({
  wl,
  onChange,
  onBack,
  onNext,
}: {
  wl: WlProject;
  onChange: (key: keyof WlProject, value: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Ihr Projekt</h2>
      <p className="mt-1.5 text-ink-soft">Damit wir Ihr White-Label-Angebot passend rechnen.</p>

      <div className="mt-5 grid gap-4">
        {FIELDS.map((f) => (
          <div key={f.key}>
            <label htmlFor={f.id} className="mb-1.5 block text-sm font-semibold text-ink">
              {f.label}
            </label>
            <select
              id={f.id}
              value={wl[f.key]}
              onChange={(e) => onChange(f.key, e.target.value)}
              className="w-full rounded-xl border border-line bg-background px-3.5 py-3 text-sm text-ink outline-none focus:border-primary-ink"
            >
              {WL_PROJECT_OPTIONS[f.key].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}
