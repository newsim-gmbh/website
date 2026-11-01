import * as de from "@/lib/content";
import * as en from "./en";
import * as es from "./es";
import * as fr from "./fr";

/** Alle technisch vorbereiteten Sprachen (Typ-Ebene) — inkl. noch nicht übersetzter. */
export const allLocales = ["de", "en", "es", "fr"] as const;
export type Locale = (typeof allLocales)[number];

/**
 * Tatsächlich veröffentlichte Sprachen: Routing, Sitemap, hreflang und der
 * Sprachumschalter zeigen nur diese an. Spanisch/Französisch sind technisch
 * vorbereitet (siehe lib/i18n/es.ts, fr.ts), aber inhaltlich noch nicht
 * übersetzt — deshalb hier bewusst ausgeklammert, bis das fertig ist.
 * Einfach wieder aktivierbar, indem "es"/"fr" hier ergänzt werden.
 */
export const locales = ["de", "en"] as const satisfies readonly Locale[];
export const defaultLocale: Locale = "de";

export const localeLabels: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français",
};

const modules = { de, en, es, fr };

/** impressum/companyLegal/datenschutz bleiben bewusst Deutsch-only (siehe lib/content.ts) und sind nicht Teil der sprachabhängigen Inhalte. */
export type ContentModule = Omit<typeof de, "impressum" | "companyLegal" | "datenschutz">;

export function getContent(locale: Locale): ContentModule {
  return modules[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
