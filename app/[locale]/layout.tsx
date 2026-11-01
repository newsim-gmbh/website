import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/lib/i18n/config";
import { LocaleProvider } from "@/lib/i18n/context";

export function generateStaticParams() {
  return locales.filter((l) => l !== "de").map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "de") notFound();

  return <LocaleProvider locale={locale as Locale}>{children}</LocaleProvider>;
}
