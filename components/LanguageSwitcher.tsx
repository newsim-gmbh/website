"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { locales, localeLabels } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/context";
import { isGermanOnlyPath, stripLocale, localizedPath } from "@/lib/i18n/paths";

export function LanguageSwitcher({ onDark = false }: { onDark?: boolean }) {
  const { locale } = useLocale();
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const canonical = stripLocale(pathname);
  const isUntranslatedPage = isGermanOnlyPath(canonical);
  const targetPath = (loc: (typeof locales)[number]) =>
    isUntranslatedPage ? localizedPath("/", loc) : localizedPath(canonical, loc);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Sprache wechseln"
        aria-expanded={open}
        className={clsx(
          "flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors",
          onDark ? "text-white/80 hover:text-white" : "text-ink-soft hover:text-ink"
        )}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
        </svg>
        {locale.toUpperCase()}
        <svg viewBox="0 0 24 24" className={clsx("h-3.5 w-3.5 transition-transform", open && "rotate-180")} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-line bg-background py-2 shadow-xl">
          {locales.map((loc) => (
            <a
              key={loc}
              href={targetPath(loc)}
              onClick={() => {
                try {
                  localStorage.setItem("newsim-locale-choice", loc);
                } catch {}
                setOpen(false);
              }}
              className={clsx(
                "flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-line/60",
                loc === locale ? "font-semibold text-ink" : "text-ink-soft"
              )}
            >
              {localeLabels[loc]}
              <span className="text-xs text-ink-soft/70 uppercase">{loc}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
