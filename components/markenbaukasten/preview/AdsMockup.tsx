import { BrandMark } from "./BrandMark";
import { LockOverlay } from "./LockOverlay";
import type { TariffState } from "@/lib/markenbaukasten";

export function AdsMockup({
  own,
  isWL,
  brand,
  claim,
  color,
  logoDataUrl,
  selected,
  onUpgrade,
}: {
  own: boolean;
  isWL: boolean;
  brand: string;
  claim: string;
  color: string;
  logoDataUrl: string | null;
  selected: TariffState[];
  onUpgrade: () => void;
}) {
  const a = selected[0] ?? { name: `${brand} M`, gb: "50 GB", price: 25 };
  const b = selected[1] ?? a;
  const from = selected.length ? Math.min(...selected.map((t) => t.price)) : isWL ? 0 : 25;
  const pr = (v: number) => (isWL ? "Ihr Preis" : `${v} €`);
  const mark = <BrandMark brand={brand} color={color} logoDataUrl={logoDataUrl} />;

  return (
    <div className="relative">
      <div className="flex w-full flex-wrap items-end justify-center gap-4.5">
        <figure className="m-0 flex flex-col items-center gap-2">
          <div className="flex w-[120px] flex-col items-center">
            <div className="flex w-[120px] justify-center rounded-t-[10px] bg-white px-2 py-2.5">{mark}</div>
            <div className="flex h-[170px] w-[120px] flex-col gap-1 rounded-b-md p-3 text-white" style={{ background: color }}>
              <b className="font-heading text-[15px] leading-tight font-extrabold">Jetzt zu {brand} wechseln</b>
              <span className="mt-auto text-[10px] opacity-85">Tarife ab</span>
              <strong className="font-heading text-[26px] leading-none font-extrabold">
                {isWL ? "Ihr Preis" : `${from} €`}
              </strong>
              <em className="text-[9.5px] not-italic opacity-85">Rufnummer mitnehmen</em>
            </div>
            <div className="flex w-[100px] justify-between">
              <i className="h-6.5 w-1.5 rounded-sm bg-[#5c5c5c] not-italic" />
              <i className="h-6.5 w-1.5 rounded-sm bg-[#5c5c5c] not-italic" />
            </div>
          </div>
          <figcaption className="text-center text-[12.5px] font-semibold text-ink">
            Kundenstopper
            <small className="block font-normal text-ink-soft">auf Anfrage</small>
          </figcaption>
        </figure>

        <figure className="m-0 flex flex-col items-center gap-2">
          <div className="flex h-[198px] w-[140px] flex-col gap-1.5 overflow-hidden rounded-md bg-white px-3 pb-2.5 text-[#191919] shadow-[0_10px_24px_rgba(20,20,20,0.14)]">
            <div className="-mx-3 h-2 shrink-0" style={{ background: color }} />
            {mark}
            <b className="font-heading text-sm leading-tight font-extrabold">Mobilfunk von {brand}</b>
            <p className="text-[9.5px] text-[#6b6b68]">{claim || "Ihr Tarif, Ihr Ansprechpartner vor Ort"}</p>
            <div className="mt-auto flex justify-between gap-1.5 border-t border-[#e6e5e2] pt-1 text-[10px]">
              <span>{a.name}</span>
              <span className="font-bold">{pr(a.price)}</span>
            </div>
            <div className="flex justify-between gap-1.5 text-[10px]">
              <span>{b.name}</span>
              <span className="font-bold">{pr(b.price)}</span>
            </div>
            <small className="text-[8.5px] text-[#6b6b68]">Im Netz von Telefónica</small>
          </div>
          <figcaption className="text-center text-[12.5px] font-semibold text-ink">
            Flyer
            <small className="block font-normal text-ink-soft">Starterkit</small>
          </figcaption>
        </figure>

        <figure className="m-0 flex flex-col items-center gap-2">
          <div
            className="flex h-[192px] w-[136px] flex-col gap-1 rounded-md p-3 text-white shadow-[0_10px_24px_rgba(20,20,20,0.14)]"
            style={{ background: color }}
          >
            <div className="self-start rounded-lg bg-white px-2 py-1.5 text-[#191919]">{mark}</div>
            <b className="font-heading mt-auto text-[34px] leading-none font-extrabold">{pr(a.price)}</b>
            <span className="text-[10.5px] opacity-90">
              {a.name} · {a.gb}
            </span>
            <em className="mt-1.5 text-[10px] font-semibold not-italic">Jetzt im Laden</em>
          </div>
          <figcaption className="text-center text-[12.5px] font-semibold text-ink">
            Poster
            <small className="block font-normal text-ink-soft">Starterkit</small>
          </figcaption>
        </figure>

        <figure className="m-0 flex flex-col items-center gap-2">
          <div className="flex flex-col items-center gap-2.5">
            <div className="flex h-22 w-[150px] flex-col justify-between rounded-md bg-white p-2.5 text-[#191919] shadow-[0_8px_18px_rgba(20,20,20,0.12)]">
              {mark}
              <span className="text-[9.5px] text-[#6b6b68]">Ihr Mobilfunk-Ansprechpartner</span>
            </div>
            <div
              className="font-heading grid h-21 w-21 place-items-center rounded-full p-2 text-center text-xs leading-tight font-extrabold text-white shadow-[0_8px_18px_rgba(20,20,20,0.14)]"
              style={{ background: color }}
            >
              {brand}
            </div>
          </div>
          <figcaption className="text-center text-[12.5px] font-semibold text-ink">
            Visitenkarte & Sticker
            <small className="block font-normal text-ink-soft">Starterkit</small>
          </figcaption>
        </figure>
      </div>
      {!own && (
        <LockOverlay
          title="Werbematerial ist im Starter nicht enthalten."
          body="Mit dem Branded Reseller bekommen Sie das Starterkit mit Ihrem Logo: Flyer, Poster, Visitenkarten und Sticker."
          onUpgrade={onUpgrade}
        />
      )}
    </div>
  );
}
