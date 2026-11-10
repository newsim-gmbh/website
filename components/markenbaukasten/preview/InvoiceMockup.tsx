import { BrandMark } from "./BrandMark";
import { DocFrame } from "./DocFrame";
import { NET, formatEur } from "@/lib/markenbaukasten";

export function InvoiceMockup({
  brand,
  color,
  logoDataUrl,
  isWL,
  firstTariff,
}: {
  brand: string;
  color: string;
  logoDataUrl: string | null;
  isWL: boolean;
  firstTariff?: { name: string; price: number };
}) {
  const t = firstTariff ?? { name: `${brand} Tarif`, price: 25 };
  const p = isWL ? 29 : t.price;
  const net = p * NET;
  const today = new Date().toLocaleDateString("de-DE");

  return (
    <DocFrame>
      <div className="flex items-start justify-between gap-3 border-b-2 pb-3" style={{ borderColor: color }}>
        <BrandMark brand={brand} color={color} logoDataUrl={logoDataUrl} />
        <div className="text-right text-[9.5px] text-[#6b6b68]">
          {brand} · Musterstraße 1 · 12345 Musterstadt
          <br />
          Ein Mobilfunkangebot im Netz von Telefónica
        </div>
      </div>
      <h4 className="font-heading mt-3.5 mb-1 text-[15px] font-bold">Rechnung</h4>
      <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[10px] text-[#6b6b68]">
        <span>Rechnungsnr.</span>
        <span>2026-000123</span>
        <span>Datum</span>
        <span>{today}</span>
        <span>Kunde</span>
        <span>Max Mustermann</span>
      </div>
      <table className="mt-3 w-full border-collapse text-[10.5px]">
        <thead>
          <tr>
            <th className="border-b border-[#e6e5e2] py-1.5 text-left font-semibold text-[#6b6b68]">Leistung</th>
            <th className="border-b border-[#e6e5e2] py-1.5 text-right font-semibold text-[#6b6b68]">Betrag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-[#e6e5e2] py-1.5">
              {isWL ? `${brand} Plus` : t.name} · Grundgebühr Monat
            </td>
            <td className="border-b border-[#e6e5e2] py-1.5 text-right tabular-nums">{formatEur(net)}</td>
          </tr>
          <tr>
            <td className="border-b border-[#e6e5e2] py-1.5">Verbindungen (in der Flatrate)</td>
            <td className="border-b border-[#e6e5e2] py-1.5 text-right tabular-nums">{formatEur(0)}</td>
          </tr>
          <tr>
            <td className="border-b border-[#e6e5e2] py-1.5">MwSt. 19 %</td>
            <td className="border-b border-[#e6e5e2] py-1.5 text-right tabular-nums">{formatEur(p - net)}</td>
          </tr>
          <tr className="font-bold">
            <td className="py-1.5">Gesamt</td>
            <td className="py-1.5 text-right tabular-nums">{formatEur(p)}</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-3 text-[10px] text-[#6b6b68]">Der Betrag wird per SEPA-Lastschrift eingezogen.</p>
      <div className="mt-auto border-t border-[#e6e5e2] pt-2 text-[8.5px] text-[#6b6b68]">
        {brand} ist eine Marke Ihres Fachhändlers. Abrechnung und Forderungseinzug: newSIM GmbH.
      </div>
    </DocFrame>
  );
}
