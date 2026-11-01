import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { PageHero } from "@/components/templates/PageHero";
import { HubGrid } from "@/components/templates/HubGrid";
import { getContent, isLocale, type Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  return pageMetadata({
    path: `/${loc}/consulting`,
    canonicalPath: "/consulting",
    title: "Consulting — newSIM",
    description: "Strategische Beratung rund um Mobilfunk & Glasfaser: G2M-Strategie, Potentialanalyse, Sales-Strategie, Netz-Transformation.",
    image: "/consulting-potentialanalyse.webp",
  });
}

export default async function LocaleConsultingPage({ params }: { params: Params }) {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const { mainNav } = getContent(loc);
  const item = mainNav.find((n) => n.href === "/consulting")!;

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Consulting"
          title="Strategische Beratung rund um Mobilfunk & Glasfaser."
          tagline={item.intro ?? ""}
          image="consulting-potentialanalyse.webp"
        />
        <HubGrid
          eyebrow="Leistungen"
          title="Womit können wir Sie unterstützen?"
          intro="Vier Beratungsleistungen, jeweils zugeschnitten auf Ihre Ausgangslage."
          items={item.children ?? []}
        />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
