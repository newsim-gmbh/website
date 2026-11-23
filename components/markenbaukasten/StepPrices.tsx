"use client";

import { StepNav } from "./StepNav";
import { selectedTariffs, type TariffState } from "@/lib/markenbaukasten";

export function StepPrices({
  tariffs,
  onPriceChange,
  onBack,
  onNext,
}: {
  tariffs: TariffState[];
  onPriceChange: (id: string, price: number) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const sel = selectedTariffs(tariffs);

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Ihre Preise</h2>
      <p className="mt-1.5 text-ink-soft">
        Sie legen den Endkundenpreis im Korridor fest, in Ein-Euro-Schritten. Jeder Euro über der Untergrenze erhöht
        Ihre Provision.
      </p>

      <div className="mt-2">
        {sel.map((t) => (
          <div key={t.id} className="border-t border-line py-3.5 first:border-t-0">
            <div className="flex items-baseline justify-between gap-2.5">
              <p className="font-heading text-[15px] font-bold text-ink">
                {t.name} <span className="font-sans text-sm font-normal text-ink-soft">· {t.gb}</span>
              </p>
              <output className="font-heading text-[22px] leading-none font-extrabold text-ink tabular-nums">
                {t.price} €
              </output>
            </div>
            <input
              type="range"
              min={t.lo}
              max={t.hi}
              step={1}
              value={t.price}
              onChange={(e) => onPriceChange(t.id, Number(e.target.value))}
              aria-label={`Preis ${t.name}`}
              className="mt-2 w-full accent-ink"
            />
            <div className="flex justify-between text-xs text-ink-soft tabular-nums">
              <span>{t.lo} € Untergrenze</span>
              <span className="font-medium text-[#56634f]">+ {t.price - t.lo} € Aufschlag</span>
              <span>{t.hi} € Obergrenze</span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3.5 text-xs text-ink-soft">Preise brutto pro Monat · Beispieltarife zur Übersicht.</p>

      <StepNav onBack={onBack} onNext={onNext} nextLabel="Ergebnis ansehen" />
    </div>
  );
}
