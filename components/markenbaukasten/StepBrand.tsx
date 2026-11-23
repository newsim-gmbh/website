"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import { StepNav } from "./StepNav";
import { BRAND_COLORS } from "@/lib/markenbaukasten";

const MAX_LOGO_BYTES = 2 * 1024 * 1024;

export function StepBrand({
  brand,
  claim,
  color,
  logoDataUrl,
  onBrandChange,
  onClaimChange,
  onColorChange,
  onLogoChange,
  onBack,
  onNext,
}: {
  brand: string;
  claim: string;
  color: string;
  logoDataUrl: string | null;
  onBrandChange: (value: string) => void;
  onClaimChange: (value: string) => void;
  onColorChange: (value: string) => void;
  onLogoChange: (file: File | null, dataUrl: string | null) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const [logoError, setLogoError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | undefined) => {
    setLogoError(null);
    if (!file) return;
    if (file.size > MAX_LOGO_BYTES) {
      setLogoError("Die Datei ist größer als 2 MB. Bitte eine kleinere Version hochladen.");
      if (fileRef.current) fileRef.current.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => onLogoChange(file, typeof reader.result === "string" ? reader.result : null);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Ihre Marke</h2>
      <p className="mt-1.5 text-ink-soft">Name, Logo und Farbe erscheinen sofort in der Vorschau.</p>

      <div className="mt-5">
        <label htmlFor="mb-brand" className="mb-1.5 block text-sm font-semibold text-ink">
          Markenname
        </label>
        <input
          id="mb-brand"
          type="text"
          maxLength={28}
          value={brand}
          onChange={(e) => onBrandChange(e.target.value)}
          className="w-full rounded-xl border border-line bg-background px-3.5 py-3 text-sm text-ink outline-none focus:border-primary-ink"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="mb-claim" className="mb-1.5 block text-sm font-semibold text-ink">
          Claim (optional)
        </label>
        <input
          id="mb-claim"
          type="text"
          maxLength={60}
          value={claim}
          onChange={(e) => onClaimChange(e.target.value)}
          placeholder="Ihr Tarif, Ihr Ansprechpartner vor Ort"
          className="w-full rounded-xl border border-line bg-background px-3.5 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/60 focus:border-primary-ink"
        />
      </div>

      <div className="mt-4">
        <span className="mb-1.5 block text-sm font-semibold text-ink">Logo</span>
        <div className="flex flex-wrap items-center gap-3.5">
          <div className="grid h-18 w-18 shrink-0 place-items-center overflow-hidden rounded-2xl border border-dashed border-line bg-white text-center text-[11px] text-ink-soft">
            {logoDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logoDataUrl} alt="Ihr Logo" className="max-h-[90%] max-w-[90%]" />
            ) : (
              "Kein Logo"
            )}
          </div>
          <div className="min-w-0">
            <input
              ref={fileRef}
              type="file"
              accept="image/png,image/jpeg,image/svg+xml,image/webp"
              onChange={(e) => handleFile(e.target.files?.[0])}
              className="block text-sm text-ink-soft file:mr-3 file:rounded-full file:border-0 file:bg-surface file:px-3.5 file:py-2 file:text-sm file:font-semibold file:text-ink hover:file:bg-line/60"
            />
            <p className="mt-1.5 text-xs text-ink-soft">
              PNG, JPG oder SVG, max. 2 MB. Ohne Logo nutzen wir Ihren Markennamen.
            </p>
          </div>
        </div>
        {logoError && <p className="mt-2 text-sm text-red-600">{logoError}</p>}
      </div>

      <div className="mt-4">
        <span className="mb-1.5 block text-sm font-semibold text-ink">Markenfarbe</span>
        <div className="flex flex-wrap items-center gap-2.5">
          {BRAND_COLORS.map((c) => (
            <button
              key={c}
              type="button"
              aria-label={`Farbe ${c}`}
              aria-pressed={color === c}
              onClick={() => onColorChange(c)}
              style={{ background: c }}
              className={clsx(
                "h-8.5 w-8.5 rounded-full border-[3px] border-background shadow-[0_0_0_1.5px_var(--line)]",
                color === c && "shadow-[0_0_0_2.5px_var(--ink)]"
              )}
            />
          ))}
          <input
            type="color"
            aria-label="Eigene Farbe"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="h-9 w-11 cursor-pointer border-0 bg-transparent p-0"
          />
        </div>
      </div>

      <StepNav onBack={onBack} onNext={onNext} />
    </div>
  );
}
