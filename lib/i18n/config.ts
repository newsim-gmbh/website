import * as de from "@/lib/content";
import * as en from "./en";
import * as es from "./es";
import * as fr from "./fr";

export const locales = ["de", "en", "es", "fr"] as const;
export type Locale = (typeof locales)[number];
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
