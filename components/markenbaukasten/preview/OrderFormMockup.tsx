import { BrandMark } from "./BrandMark";
import { DocFrame } from "./DocFrame";
import type { TariffState } from "@/lib/markenbaukasten";

export function OrderFormMockup({
  brand,
  color,
  logoDataUrl,
  firstTariff,
}: {
  brand: string;
  color: string;
  logoDataUrl: string | null;
  firstTariff?: TariffState;
}) {
  return (
    <DocFrame>
      <div className="flex items-start justify-between gap-3 border-b-2 pb-3" style={{ borderColor: color }}>
        <BrandMark brand={brand} color={color} logoDataUrl={logoDataUrl} />
        <div className="text-right text-[9.5px] text-[#6b6b68]">
          Auftragsformular
          <br />
          Mobilfunkvertrag
        </div>
      </div>

      <p className="mt-3.5 text-[10.5px] font-bold tracking-wide uppercase" style={{ color }}>
        Kunde
      </p>
      <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
        {["Vorname, Nachname", "Geburtsdatum", "Straße, Nr.", "PLZ, Ort", "E-Mail", "Telefon"].map((f) => (
          <div key={f} className="border-b border-[#e6e5e2] pt-2.5 pb-0.5 text-[9px] text-[#6b6b68]">
            {f}
          </div>
        ))}
      </div>

      <p className="mt-3 text-[10.5px] font-bold tracking-wide uppercase" style={{ color }}>
        Tarif
      </p>
      <table className="mt-1.5 w-full border-collapse text-[10.5px]">
        <tbody>
          <tr>
            <td className="border-b border-[#e6e5e2] py-1.5">
              {firstTariff ? firstTariff.name : `${brand} Plus`} · {firstTariff ? firstTariff.gb : ""}
            </td>
            <td className="border-b border-[#e6e5e2] py-1.5 text-right tabular-nums">
              {firstTariff ? `${firstTariff.price} € / Monat` : "Ihr Preis"}
            </td>
          </tr>
          <tr>
            <td className="border-b border-[#e6e5e2] py-1.5">Mindestlaufzeit</td>
            <td className="border-b border-[#e6e5e2] py-1.5 text-right tabular-nums">24 Monate</td>
          </tr>
          <tr>
            <td className="py-1.5">Bereitstellung einmalig</td>
            <td className="py-1.5 text-right tabular-nums">20,00 €</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-3 text-[10.5px] font-bold tracking-wide uppercase" style={{ color }}>
        SEPA-Lastschriftmandat
      </p>
      <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
        {["Kontoinhaber", "IBAN"].map((f) => (
          <div key={f} className="border-b border-[#e6e5e2] pt-2.5 pb-0.5 text-[9px] text-[#6b6b68]">
            {f}
          </div>
        ))}
      </div>

      <div className="mt-2.5 flex items-center gap-1.5 text-[10px]">
        <i className="inline-block h-2.5 w-2.5 border border-[#191919] not-italic" />
        Ich habe die Vertragszusammenfassung erhalten.
      </div>

      <div className="mt-auto grid grid-cols-2 gap-4.5 pt-4">
        <div className="border-t border-[#191919] pt-1 text-[9px] text-[#6b6b68]">
          Ort, Datum, Unterschrift Kunde
        </div>
        <div className="border-t border-[#191919] pt-1 text-[9px] text-[#6b6b68]">
          Unterschrift Kontoinhaber (SEPA)
        </div>
      </div>
      <div className="mt-2 border-t border-[#e6e5e2] pt-2 text-[8.5px] text-[#6b6b68]">
        Wird im Händlerportal erzeugt, unterschrieben hochgeladen – dann aktiviert {brand} den Vertrag.
      </div>
    </DocFrame>
  );
}
