import type { MetadataRoute } from "next";
import { models, useCases, developerPages, consultingServices } from "@/lib/content";
import { siteUrl } from "@/lib/seo";
import { locales } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

export const dynamic = "force-static";

// Nur Deutsch — siehe lib/i18n: Impressum/Datenschutz werden bewusst nicht übersetzt.
const germanOnlyRoutes = [
  { path: "/impressum", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/markenbaukasten", priority: 0.6, changeFrequency: "monthly" as const },
];

// In allen Sprachen verfügbare Routen (kanonischer, deutscher Pfad).
const translatedRoutes = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/produkte", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/use-cases", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/developer", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/consulting", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/eigenmarken", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/iot", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/iot/anfrage", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/kontakt", priority: 0.6, changeFrequency: "yearly" as const },
  ...[
    ...models.map((m) => `/produkte/${m.slug}`),
    ...useCases.map((u) => `/use-cases/${u.slug}`),
    ...developerPages.map((d) => `/developer/${d.slug}`),
    ...consultingServices.map((c) => `/consulting/${c.slug}`),
  ].map((path) => ({ path, priority: 0.6, changeFrequency: "monthly" as const })),
];

function absoluteUrl(path: string): string {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = germanOnlyRoutes.map((r) => ({
    url: absoluteUrl(r.path),
    priority: r.priority,
    changeFrequency: r.changeFrequency,
  }));

  for (const route of translatedRoutes) {
    const languages: Record<string, string> = {};
    for (const loc of locales) {
      languages[loc] = absoluteUrl(localizedPath(route.path, loc));
    }

    for (const loc of locales) {
      entries.push({
        url: absoluteUrl(localizedPath(route.path, loc)),
        priority: route.priority,
        changeFrequency: route.changeFrequency,
        alternates: { languages },
      });
    }
  }

  return entries;
}
