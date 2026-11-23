export function LockOverlay({
  title,
  body,
  onUpgrade,
}: {
  title: string;
  body: string;
  onUpgrade: () => void;
}) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-[color-mix(in_srgb,var(--line)_72%,transparent)] p-6 backdrop-blur-[3px]">
      <div className="max-w-80 rounded-2xl border border-line bg-background p-5">
        <p className="font-heading text-[17px] font-bold text-ink">{title}</p>
        <p className="mt-1.5 text-sm text-ink-soft">{body}</p>
        <button
          type="button"
          onClick={onUpgrade}
          className="font-heading mt-3 inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
        >
          Auf Branded Reseller wechseln
        </button>
      </div>
    </div>
  );
}
