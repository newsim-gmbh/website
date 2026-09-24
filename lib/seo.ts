import type { Metadata } from "next";

/**
 * Live-Domain (GitHub Pages Custom Domain, Auslieferung unter der Domain-Root).
 * Muss mit next.config.ts (basePath: "") und der GitHub-Pages-Custom-Domain-
 * Einstellung im Repository übereinstimmen.
 */
export const siteUrl = "https://newsim.de";

/**
 * Baut Title/Description/Canonical/OG/Twitter-Metadaten aus bereits
 * vorhandenem Seiteninhalt zusammen. Erfindet nichts — `image` muss auf ein
 * tatsächlich auf der Seite verwendetes Bild verweisen.
 */
export function pageMetadata({
  path,
  title,
  description,
  image,
}: {
  path: string;
  title: string;
  description?: string;
  image?: string;
}): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const images = image ? [{ url: image }] : undefined;

  return {
    title,
    description,
    alternates: { canonical: path },
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
