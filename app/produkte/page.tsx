import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { PageHero } from "@/components/templates/PageHero";
import { HubGrid } from "@/components/templates/HubGrid";
import { mainNav } from "@/lib/content";

const item = mainNav.find((n) => n.href === "/produkte")!;

export const metadata: Metadata = {
  title: "Produkte — newSIM",
  description: "Vier Mobilfunk-Modelle, ein Ambitionslevel-Baukasten: von Business Solutions bis zur eigenen White-Label-MVNE-Plattform.",
};

export default function ProduktePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Produkte"
          title="Vier Modelle. Ein Ambitionslevel-Baukasten."
          tagline={item.intro ?? ""}
          phoneLabel="Ihre Marke"
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
