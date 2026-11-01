import { type Locale, defaultLocale, locales } from "./config";

/** Entfernt ein vorhandenes Locale-Präfix (/en/..., /es/..., /fr/...) und liefert den "kanonischen" (deutschen) Pfad zurück. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];
  if (maybeLocale && (locales as readonly string[]).includes(maybeLocale) && maybeLocale !== defaultLocale) {
    const rest = "/" + segments.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/$/, "") || "/";
  }
  return pathname === "" ? "/" : pathname;
}

/** Baut aus einem kanonischen (deutschen) Pfad den Pfad für die angegebene Locale. */
export function localizedPath(canonicalPath: string, locale: Locale): string {
  const clean = canonicalPath === "/" ? "" : canonicalPath;
  if (locale === defaultLocale) return clean === "" ? "/" : clean;
  return `/${locale}${clean}`;
}
