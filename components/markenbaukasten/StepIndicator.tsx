"use client";

import clsx from "clsx";

export function StepIndicator({
  labels,
  current,
  onSelect,
}: {
  labels: string[];
  current: number;
  onSelect: (index: number) => void;
}) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Schritte">
      {labels.map((label, i) => (
        <button
          key={label}
          type="button"
          onClick={() => onSelect(i)}
          aria-current={i === current ? "step" : undefined}
          className={clsx(
            "flex items-center gap-2 rounded-full border py-1.5 pr-3.5 pl-1.5 text-sm font-medium transition-colors",
            i === current ? "border-ink text-ink" : "border-line text-ink-soft hover:border-ink/40"
          )}
        >
          <i
            className={clsx(
              "font-heading grid h-6 w-6 place-items-center rounded-full text-[13px] font-bold not-italic",
              i === current ? "bg-ink text-white" : i < current ? "bg-sky text-primary-ink" : "bg-surface text-ink-soft"
            )}
          >
            {i + 1}
          </i>
          {label}
        </button>
      ))}
    </nav>
  );
}
