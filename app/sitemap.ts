import type { MetadataRoute } from "next";
import { models, useCases, developerPages, consultingServices } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/produkte", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/use-cases", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/developer", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/consulting", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/eigenmarken", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/iot", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/iot/anfrage", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/kontakt", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/impressum", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicRoutes = [
    ...models.map((m) => `/produkte/${m.slug}`),
    ...useCases.map((u) => `/use-cases/${u.slug}`),
    ...developerPages.map((d) => `/developer/${d.slug}`),
    ...consultingServices.map((c) => `/consulting/${c.slug}`),
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticRoutes.map((r) => ({
      url: r.path === "/" ? siteUrl : `${siteUrl}${r.path}`,
      priority: r.priority,
      changeFrequency: r.changeFrequency,
    })),
    ...dynamicRoutes,
  ];
}
