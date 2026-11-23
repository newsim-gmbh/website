"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { type Locale, locales, defaultLocale } from "@/lib/i18n/config";
import { isGermanOnlyPath, localizedPath, stripLocale } from "@/lib/i18n/paths";

const STORAGE_KEY = "newsim-locale-choice";

function localeFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  if (segment && (locales as readonly string[]).includes(segment)) return segment as Locale;
  return defaultLocale;
}

function detectBrowserLocale(): Locale | null {
  const candidates = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const raw of candidates) {
    const short = raw.slice(0, 2).toLowerCase();
    if ((locales as readonly string[]).includes(short) && short !== defaultLocale) {
      return short as Locale;
    }
  }
  return null;
}

/**
 * Leitet Erstbesucher ohne gespeicherte Sprachwahl anhand der Browser-Sprache
 * auf die passende Sprachversion um. Respektiert eine einmal getroffene Wahl
 * (manuell über den Umschalter oder durch Verbleiben auf Deutsch) dauerhaft.
 *
 * Ermittelt die aktuelle Locale bewusst selbst aus der URL (nicht aus einer
 * Prop) — läuft im Root-Layout auf jeder Route gleich zuverlässig, auch
 * innerhalb des verschachtelten app/[locale]-Baums.
 */
export function LocaleRedirect() {
  const pathname = usePathname() || "/";
  const router = useRouter();

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {}

    if (stored) return;
    if (isGermanOnlyPath(stripLocale(pathname))) return;

    const currentLocale = localeFromPath(pathname);
    if (currentLocale !== defaultLocale) return;

    const detected = detectBrowserLocale();
    if (!detected) return;

    try {
      localStorage.setItem(STORAGE_KEY, detected);
    } catch {}

    const suffix = typeof window !== "undefined" ? window.location.search + window.location.hash : "";
    router.replace(localizedPath(stripLocale(pathname), detected) + suffix);
  }, [pathname, router]);

  return null;
}
