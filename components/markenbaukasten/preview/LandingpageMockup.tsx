import { PhoneFrame } from "./PhoneFrame";
import { BrandMark } from "./BrandMark";
import { LockOverlay } from "./LockOverlay";
import type { PreviewTariff } from "@/lib/markenbaukasten";

export function LandingpageMockup({
  brand,
  claim,
  color,
  logoDataUrl,
  isWL,
  isStarter,
  tariffs,
  onUpgrade,
}: {
  brand: string;
  claim: string;
  color: string;
  logoDataUrl: string | null;
  isWL: boolean;
  isStarter: boolean;
  tariffs: PreviewTariff[];
  onUpgrade: () => void;
}) {
  return (
    <div className="relative">
      <PhoneFrame>
        <div className="flex items-center justify-between px-4 py-2">
          <BrandMark brand={brand} color={color} logoDataUrl={logoDataUrl} />
          <span className="text-[11px] text-[#6b6b68]">Tarife</span>
        </div>
        <div className="px-4 pt-3.5 pb-4 text-white" style={{ background: color }}>
          <h3 className="font-heading text-[22px] leading-tight font-bold text-white">Mobilfunk von {brand}</h3>
          <p className="mt-1.5 text-xs opacity-85">{claim || "Ihr Tarif, Ihr Ansprechpartner vor Ort"}</p>
        </div>
        <div className="flex-1 overflow-auto px-3 pt-3">
          <div className="grid gap-2">
            {tariffs.length === 0 ? (
              <p className="text-xs text-[#6b6b68]">Noch keine Tarife gewählt.</p>
            ) : (
              tariffs.map((t) => (
                <div
                  key={t.name}
                  className="grid grid-cols-[1fr_auto] items-center gap-x-2 gap-y-0.5 rounded-2xl border border-[#e6e5e2] px-3 py-2.5"
                >
                  <b className="font-heading min-w-0 overflow-hidden text-sm font-bold text-ellipsis whitespace-nowrap">
                    {t.name}
                  </b>
                  <span className="row-span-2 text-right font-heading text-lg font-extrabold">
                    {t.price}
                    {!isWL && <small className="block text-[10px] font-normal text-[#6b6b68]">pro Monat</small>}
                  </span>
                  <span className="text-[11px] text-[#6b6b68]">{t.gb}</span>
                </div>
              ))
            )}
          </div>
        </div>
        <div
          className="mx-3 mt-2.5 mb-2 rounded-full py-2.5 text-center text-[13px] font-semibold text-white"
          style={{ background: color }}
        >
          Jetzt Tarif wählen
        </div>
        <p className="pb-2.5 text-center text-[10px] text-[#6b6b68]">Im Netz von Telefónica</p>
      </PhoneFrame>
      {isStarter && (
        <LockOverlay
          title="Landingpage und Bestellstrecke sind im Starter nicht enthalten."
          body="Ihre Kunden schließen bei Ihnen im Laden ab. Mit dem Branded Reseller bekommen Sie Ihre eigene Seite mit Online-Bestellung."
          onUpgrade={onUpgrade}
        />
      )}
    </div>
  );
}
