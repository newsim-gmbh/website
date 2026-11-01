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
    path: `/${loc}/use-cases`,
    canonicalPath: "/use-cases",
    title: "Use Cases — newSIM",
    description: "Passende Mobilfunk-Lösungen für Fachhandel, Stadtwerke, Systemhäuser, Banken, Influencer und Vereine.",
    image: "/hub-use-cases.webp",
  });
}

export default async function LocaleUseCasesPage({ params }: { params: Params }) {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const { mainNav } = getContent(loc);
  const item = mainNav.find((n) => n.href === "/use-cases")!;

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Use Cases"
          title="Für jede Branche das passende Modell."
          tagline={item.intro ?? ""}
          image="hub-use-cases.webp"
        />
        <HubGrid
          eyebrow="Alle Use Cases"
          title="Welche Branche passt zu Ihnen?"
          intro="Sechs Zielgruppen, sechs unterschiedliche Herausforderungen — mit passender Modellempfehlung."
          items={item.children ?? []}
        />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
