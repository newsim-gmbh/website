import clsx from "clsx";

/**
 * Reines CSS/SVG-Phone-Mockup als Platzhalter für echte App-Screenshots.
 * Zeigt einen Geräterahmen mit brand-farbigem Screen-Gradient.
 */
export function PhoneMockup({
  label,
  tone = "dark",
  className,
}: {
  label?: string;
  tone?: "dark" | "sky";
  className?: string;
}) {
  const screen =
    tone === "sky"
      ? "linear-gradient(155deg, #ffffff 0%, #e1ecf8 55%, #94b8e9 100%)"
      : "linear-gradient(155deg, #585858 0%, #242424 60%, #191919 100%)";

  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <div className="relative flex h-full aspect-[9/16] max-w-[220px] flex-col rounded-[1.8rem] border-[3px] border-white/15 bg-black/80 p-1.5 shadow-2xl">
        <div
          className="relative flex flex-1 flex-col items-center justify-end overflow-hidden rounded-[1.4rem] px-4 pb-5"
          style={{ background: screen }}
        >
          <div className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-black/70" />
          {label && (
            <p
              className={clsx(
                "font-heading relative text-center text-sm font-bold leading-tight",
                tone === "sky" ? "text-ink" : "text-white"
              )}
            >
              {label}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
