"use client";

import clsx from "clsx";
import { Icon } from "../Icon";
import { StepNav } from "./StepNav";
import { MODEL_ORDER, MODELS, isWhiteLabel, type ModelId } from "@/lib/markenbaukasten";

export function StepModel({
  model,
  onChange,
  onNext,
}: {
  model: ModelId;
  onChange: (model: ModelId) => void;
  onNext: () => void;
}) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Welches Modell passt zu Ihnen?</h2>
      <p className="mt-1.5 text-ink-soft">Sie können später jederzeit wechseln.</p>

      <div className="mt-5 grid gap-3" role="radiogroup" aria-label="Modell">
        {MODEL_ORDER.map((id) => {
          const m = MODELS[id];
          const checked = model === id;
          return (
            <label
              key={id}
              className={clsx(
                "grid cursor-pointer grid-cols-[auto_1fr_auto] items-start gap-3.5 rounded-2xl border p-4 transition-colors sm:p-4.5",
                checked ? "border-primary-ink bg-sky" : "border-line hover:border-ink/30"
              )}
            >
              <input
                type="radio"
                name="model"
                checked={checked}
                onChange={() => onChange(id)}
                className="mt-1 h-[18px] w-[18px] accent-primary-ink"
              />
              <span className="min-w-0">
                <span className="font-heading flex items-center gap-2 text-lg font-bold text-ink">
                  <Icon name={m.icon} className="h-4.5 w-4.5 shrink-0 text-primary-ink" />
                  {m.name}
                </span>
                <span className="mt-1 block text-sm text-ink-soft">{m.desc}</span>
              </span>
              <span className="text-right whitespace-nowrap">
                <span className="font-heading block text-base font-bold text-ink">{m.feeTxt}</span>
                <span className="block text-xs text-ink-soft">{m.feeSub}</span>
              </span>
            </label>
          );
        })}
      </div>

      {isWhiteLabel(model) && (
        <p className="mt-4 rounded-xl bg-surface p-3.5 text-sm text-ink-soft">
          White Label läuft verkürzt: Sie gestalten Ihre Marke, beschreiben Ihr Projekt und wir rechnen Ihr Angebot
          individuell.
        </p>
      )}

      <StepNav onBack={() => {}} backDisabled onNext={onNext} />
    </div>
  );
}
