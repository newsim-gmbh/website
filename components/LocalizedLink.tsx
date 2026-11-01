"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "@/lib/i18n/context";
import { localizedPath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";

function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/")) return href;
  const [path, hash] = href.split("#");
  const localized = localizedPath(path || "/", locale);
  return hash ? `${localized}#${hash}` : localized;
}

/**
 * Drop-in-Ersatz für next/link: präfixiert interne Pfade (aus lib/content
 * stammende hrefs sind bewusst sprachneutral/unpräfixiert) automatisch mit
 * der aktuellen Locale, damit Navigation innerhalb einer Sprachversion
 * bleibt. Externe URLs, mailto:/tel: und reine Anker ("#faq") bleiben
 * unverändert.
 */
export function LocalizedLink({ href, ...props }: ComponentProps<typeof Link>) {
  const { locale } = useLocale();
  const hrefStr = typeof href === "string" ? href : href.pathname || "/";
  return <Link href={localizeHref(hrefStr, locale)} {...props} />;
}
