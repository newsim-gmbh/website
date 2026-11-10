export function BrandMark({ brand, color, logoDataUrl }: { brand: string; color: string; logoDataUrl: string | null }) {
  if (logoDataUrl) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={logoDataUrl} alt={brand} className="max-h-7 max-w-[110px]" />;
  }
  return (
    <span className="font-heading flex min-w-0 items-center gap-2 text-base font-extrabold text-[#191919]">
      <span className="h-5.5 w-5.5 shrink-0 rounded-[7px]" style={{ background: color }} />
      {brand}
    </span>
  );
}
