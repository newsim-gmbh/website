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
    path: `/${loc}/produkte`,
    canonicalPath: "/produkte",
    title: "Produkte — newSIM",
    description: "Vier Mobilfunk-Modelle, ein Ambitionslevel-Baukasten: von Business Solutions bis zur eigenen White-Label-MVNE-Plattform.",
    image: "/produkt-white-label-mvne.webp",
  });
}

export default async function LocaleProduktePage({ params }: { params: Params }) {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const { mainNav } = getContent(loc);
  const item = mainNav.find((n) => n.href === "/produkte")!;

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Produkte"
          title="Vier Modelle. Ein Ambitionslevel-Baukasten."
          tagline={item.intro ?? ""}
          image="produkt-white-label-mvne.webp"
        />
        <HubGrid
          eyebrow="Alle Produkte"
          title="Welches Modell passt zu Ihnen?"
          intro="Vom vollständig gemanagten Full Service bis zur eigenen White-Label-MVNE-Plattform — jedes Modell im Detail."
          items={item.children ?? []}
        />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
