import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { PageHero } from "@/components/templates/PageHero";
import { HubGrid } from "@/components/templates/HubGrid";
import { mainNav } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const item = mainNav.find((n) => n.href === "/produkte")!;

export const metadata = pageMetadata({
  path: "/produkte",
  title: "Produkte — newSIM",
  description: "Vier Mobilfunk-Modelle, ein Ambitionslevel-Baukasten: von Business Solutions bis zur eigenen White-Label-MVNE-Plattform.",
  image: "/produkt-white-label-mvne.webp",
});

export default function ProduktePage() {
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
