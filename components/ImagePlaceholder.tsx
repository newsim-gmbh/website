import clsx from "clsx";

/**
 * Steht an den Stellen, an denen im Design (Phone-Mockups, Portraits) echte
 * Bilder sitzen. Wird ersetzt, sobald die finalen Assets vorliegen.
 */
export function ImagePlaceholder({
  label,
  tone = "dark",
  className,
}: {
  label: string;
  tone?: "dark" | "sky" | "cream";
  className?: string;
}) {
  const tones: Record<string, string> = {
    dark: "card-dark-gradient border-white/10 text-white/40",
    sky: "bg-sky border-primary/20 text-primary-ink/60",
    cream: "bg-cream border-ink/10 text-ink-soft",
  };

  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-3xl border border-dashed p-6 text-center text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {label}
    </div>
  );
}
