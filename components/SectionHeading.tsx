import clsx from "clsx";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={clsx(
              "mb-4 text-sm font-medium tracking-wide uppercase",
              dark ? "text-primary/80" : "text-primary"
            )}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={clsx(
            "balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]",
            dark ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.1}>
          <p
            className={clsx(
              "balance mt-5 text-lg leading-relaxed",
              dark ? "text-white/70" : "text-ink-soft"
            )}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
