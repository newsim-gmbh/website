"use client";

import clsx from "clsx";
import { StepNav } from "./StepNav";
import { MODELS, selectedTariffs, type ModelId, type TariffState } from "@/lib/markenbaukasten";

export function StepTariffs({
  model,
  tariffs,
  onToggle,
  onRename,
  onBack,
  onNext,
}: {
  model: ModelId;
  tariffs: TariffState[];
  onToggle: (id: string) => void;
  onRename: (id: string, name: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const m = MODELS[model];
  const visible = tariffs.filter((t) => m.home || !t.home);
  const n = selectedTariffs(tariffs).length;

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Ihre Tarife</h2>
      <p className="mt-1.5 text-ink-soft">
        {model === "starter"
          ? "Im Starter wählen Sie 3 Mobilfunktarife."
          : "Im Branded Reseller stehen Ihnen alle 6 Mobilfunk- und 2 Home-Tarife zur Verfügung."}{" "}
        Den Tarifnamen bestimmen Sie.
      </p>

      <div className="mt-5 grid gap-2.5">
        {visible.map((t) => (
          <div
            key={t.id}
            className={clsx(
              "grid grid-cols-[auto_56px_1fr] items-center gap-3 rounded-2xl border p-2.5 sm:grid-cols-[auto_64px_1fr]",
              t.on ? "border-primary-ink" : "border-line"
            )}
          >
            <input
              id={`mb-tariff-${t.id}`}
              type="checkbox"
              checked={t.on}
              onChange={() => onToggle(t.id)}
              aria-label={`Tarif ${t.label} wählen`}
              className="h-[18px] w-[18px] accent-primary-ink"
            />
            <label htmlFor={`mb-tariff-${t.id}`} className="font-heading cursor-pointer text-[15px] leading-tight font-bold text-ink">
              {t.label}
              <small className="block text-[11.5px] font-normal text-ink-soft">{t.gb}</small>
            </label>
            <input
              type="text"
              value={t.name}
              maxLength={24}
              disabled={!t.on}
              onChange={(e) => onRename(t.id, e.target.value)}
              aria-label={`Name für Tarif ${t.label}`}
              className="w-full rounded-lg border border-line bg-background px-2.5 py-2 text-sm text-ink outline-none focus:border-primary-ink disabled:opacity-45"
            />
          </div>
        ))}
      </div>

      <p className="mt-2.5 text-sm text-ink-soft">
        {n} von {m.max} gewählt
      </p>
      {n === 0 && (
        <p className="mt-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-800">Wählen Sie mindestens einen Tarif.</p>
      )}

      <StepNav onBack={onBack} onNext={onNext} nextDisabled={n === 0} />
    </div>
  );
}
