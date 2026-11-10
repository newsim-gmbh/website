"use client";

import clsx from "clsx";
import { LandingpageMockup } from "./preview/LandingpageMockup";
import { InvoiceMockup } from "./preview/InvoiceMockup";
import { OrderFormMockup } from "./preview/OrderFormMockup";
import { PortalMockup } from "./preview/PortalMockup";
import { AdsMockup } from "./preview/AdsMockup";
import { isWhiteLabel, selectedTariffs, tariffsForPreview, type ModelId, type TariffState } from "@/lib/markenbaukasten";
import type { PreviewTab } from "./types";

const TABS: { key: PreviewTab; label: string }[] = [
  { key: "lp", label: "Landingpage" },
  { key: "inv", label: "Rechnung" },
  { key: "af", label: "Auftragsformular" },
  { key: "portal", label: "Kundenportal" },
  { key: "ads", label: "Werbematerial" },
];

export function PreviewPanel({
  model,
  brand,
  claim,
  color,
  logoDataUrl,
  tariffs,
  tab,
  onTabChange,
  onUpgrade,
}: {
  model: ModelId;
  brand: string;
  claim: string;
  color: string;
  logoDataUrl: string | null;
  tariffs: TariffState[];
  tab: PreviewTab;
  onTabChange: (tab: PreviewTab) => void;
  onUpgrade: () => void;
}) {
  const isWL = isWhiteLabel(model);
  const isStarter = model === "starter";
  const own = model !== "starter";
  const sel = selectedTariffs(tariffs);
  const preview = tariffsForPreview(model, brand, tariffs);

  let who: string | null = null;
  let note = "";
  let stage: React.ReactNode = null;

  if (tab === "lp") {
    who = isStarter ? null : "Ihr Branding";
    note = isStarter
      ? "Starter: Verkauf im Laden über das Händlerportal."
      : "Landingpage Basic inklusive, Pro gegen Aufpreis.";
    stage = (
      <LandingpageMockup
        brand={brand}
        claim={claim}
        color={color}
        logoDataUrl={logoDataUrl}
        isWL={isWL}
        isStarter={isStarter}
        tariffs={preview}
        onUpgrade={onUpgrade}
      />
    );
  } else if (tab === "inv") {
    who = "Ihr Logo";
    note = isWL
      ? "White Label: Rechnung im eigenen Design, Abrechnung wahlweise über newSIM."
      : "Rechnung mit Ihrem Logo – in Starter und Branded Reseller.";
    stage = <InvoiceMockup brand={brand} color={color} logoDataUrl={logoDataUrl} isWL={isWL} firstTariff={sel[0]} />;
  } else if (tab === "af") {
    who = "Ihr Logo";
    note = "Auftragsformular und Vertragszusammenfassung entstehen automatisch mit Ihrem Logo.";
    stage = <OrderFormMockup brand={brand} color={color} logoDataUrl={logoDataUrl} firstTariff={sel[0]} />;
  } else if (tab === "portal") {
    who = own ? "Ihr Branding" : "newSIM-Branding";
    note = own
      ? "Branded Reseller: Kundenportal, Hotline und E-Mails mit Ihrem Branding."
      : "Starter: Kundenportal, Hotline und E-Mails laufen im newSIM-Design. Mit Branded Reseller in Ihrem Branding.";
    stage = <PortalMockup own={own} brand={brand} color={color} logoDataUrl={logoDataUrl} firstTariff={sel[0]} />;
  } else if (tab === "ads") {
    who = own ? "Ihr Branding" : null;
    note = own
      ? "Starterkit mit Ihrem Logo und Ihren Tarifen: Flyer, Poster, Visitenkarten, Sticker. Kundenstopper und Aufsteller auf Anfrage."
      : "Starter: kein Werbematerial enthalten.";
    stage = (
      <AdsMockup
        own={own}
        isWL={isWL}
        brand={brand}
        claim={claim}
        color={color}
        logoDataUrl={logoDataUrl}
        selected={sel}
        onUpgrade={onUpgrade}
      />
    );
  }

  return (
    <aside className="lg:sticky lg:top-6" aria-label="Vorschau">
      <div className="flex flex-wrap gap-1.5" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            onClick={() => onTabChange(t.key)}
            className={clsx(
              "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
              tab === t.key ? "bg-ink text-white" : "bg-surface text-ink-soft hover:text-ink"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="relative mt-3 min-h-[420px] rounded-3xl bg-surface p-5 sm:min-h-[560px] sm:p-6">
        {who && (
          <span
            className={clsx(
              "absolute top-3.5 left-3.5 rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide uppercase",
              who === "newSIM-Branding" ? "bg-background text-ink-soft" : "bg-ink text-white"
            )}
          >
            {who}
          </span>
        )}
        <div className="flex min-h-[380px] items-center justify-center sm:min-h-[520px]">{stage}</div>
      </div>
      <p className="mt-2.5 text-[12.5px] text-ink-soft">{note}</p>
    </aside>
  );
}
