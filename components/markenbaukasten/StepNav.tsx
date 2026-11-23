"use client";

export function StepNav({
  onBack,
  onNext,
  backDisabled,
  nextLabel = "Weiter",
  hideNext,
  nextDisabled,
}: {
  onBack: () => void;
  onNext?: () => void;
  backDisabled?: boolean;
  nextLabel?: string;
  hideNext?: boolean;
  nextDisabled?: boolean;
}) {
  return (
    <div className="mt-7 flex flex-wrap justify-between gap-3">
      <button
        type="button"
        onClick={onBack}
        disabled={backDisabled}
        className="font-heading inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-ink ring-1 ring-inset ring-line transition-colors hover:bg-surface disabled:cursor-default disabled:opacity-40"
      >
        Zurück
      </button>
      {!hideNext && (
        <button
          type="button"
          onClick={onNext}
          disabled={nextDisabled}
          className="font-heading inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink disabled:cursor-default disabled:opacity-40"
        >
          {nextLabel}
        </button>
      )}
    </div>
  );
}
