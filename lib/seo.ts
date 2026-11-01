import type { Metadata } from "next";
import { locales } from "./i18n/config";
import { localizedPath } from "./i18n/paths";

/**
 * Live-Domain (GitHub Pages Custom Domain, Auslieferung unter der Domain-Root).
 * Muss mit next.config.ts (basePath: "") und der GitHub-Pages-Custom-Domain-
 * Einstellung im Repository übereinstimmen.
 */
export const siteUrl = "https://newsim.de";

function absoluteUrl(path: string): string {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

/**
 * Baut Title/Description/Canonical/OG/Twitter-Metadaten aus bereits
 * vorhandenem Seiteninhalt zusammen. Erfindet nichts — `image` muss auf ein
 * tatsächlich auf der Seite verwendetes Bild verweisen.
 *
 * `canonicalPath` (optional): der sprachneutrale (deutsche) Pfad, z.B.
 * "/produkte/branded-reseller" — wird genutzt, um hreflang-Alternates auf
 * die jeweils andere Sprachversion dieser Seite zu verlinken. Fehlt dieser
 * Wert, wird `path` selbst verwendet (keine Sprachalternates).
 */
export function pageMetadata({
  path,
  title,
  description,
  image,
  canonicalPath,
}: {
  path: string;
  title: string;
  description?: string;
  image?: string;
  canonicalPath?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const images = image ? [{ url: image }] : undefined;

  let languages: Record<string, string> | undefined;
  if (canonicalPath) {
    languages = {};
    for (const loc of locales) {
      languages[loc] = absoluteUrl(localizedPath(canonicalPath, loc));
    }
    languages["x-default"] = absoluteUrl(canonicalPath);
  }

  return {
    title,
    description,
    alternates: { canonical: path, languages },
    openGraph: {
      title,
      description,
      url,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

