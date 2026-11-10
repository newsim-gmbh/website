import { PhoneFrame } from "./PhoneFrame";
import { BrandMark } from "./BrandMark";
import type { TariffState } from "@/lib/markenbaukasten";

export function PortalMockup({
  own,
  brand,
  color,
  logoDataUrl,
  firstTariff,
}: {
  own: boolean;
  brand: string;
  color: string;
  logoDataUrl: string | null;
  firstTariff?: TariffState;
}) {
  const name = own ? brand : "newSIM";
  const accent = own ? color : "#191919";

  return (
    <PhoneFrame>
      <div className="flex items-center justify-between px-4 py-2">
        {own ? (
          <BrandMark brand={brand} color={color} logoDataUrl={logoDataUrl} />
        ) : (
          <span className="font-heading flex items-center gap-2 text-base font-extrabold text-[#191919]">
            <span className="h-5.5 w-5.5 rounded-[7px] bg-[#a7bce3]" />
            newSIM
          </span>
        )}
        <span className="text-[11px] text-[#6b6b68]">Mein Konto</span>
      </div>
      <div className="px-4 pt-3.5 pb-4 text-white" style={{ background: accent }}>
        <p className="text-xs opacity-80">Hallo Max</p>
        <h3 className="font-heading text-[22px] leading-tight font-bold text-white">
          {firstTariff ? firstTariff.name : `${name} Plus`}
        </h3>
        <p className="mt-1.5 text-xs opacity-85">{firstTariff ? firstTariff.gb : ""}</p>
      </div>
      <div className="flex-1 overflow-auto px-3 pt-3">
        <div className="grid gap-2">
          <div className="rounded-2xl border border-[#e6e5e2] px-3 py-2.5">
            <b className="font-heading text-sm font-bold">Datenverbrauch</b>
            <span className="block text-[11px] text-[#6b6b68]">12,4 GB von {firstTariff ? firstTariff.gb : "50 GB"}</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-x-2 rounded-2xl border border-[#e6e5e2] px-3 py-2.5">
            <b className="font-heading text-sm font-bold">Nächste Rechnung</b>
            <span className="font-heading text-lg font-extrabold">{firstTariff ? `${firstTariff.price} €` : ""}</span>
            <span className="text-[11px] text-[#6b6b68]">01.12.2026</span>
          </div>
          <div className="rounded-2xl border border-[#e6e5e2] px-3 py-2.5">
            <b className="font-heading text-sm font-bold">Hilfe & Kontakt</b>
            <span className="block text-[11px] text-[#6b6b68]">Hotline und E-Mail von {name}</span>
          </div>
        </div>
      </div>
      <p className="pt-2.5 pb-3 text-center text-[10px] text-[#6b6b68]">Im Netz von Telefónica</p>
    </PhoneFrame>
  );
}
