import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { PageHero } from "@/components/templates/PageHero";
import { HubGrid } from "@/components/templates/HubGrid";
import { mainNav } from "@/lib/content";

const item = mainNav.find((n) => n.href === "/use-cases")!;

export const metadata: Metadata = {
  title: "Use Cases — newSIM",
  description: "Passende Mobilfunk-Lösungen für Fachhandel, Stadtwerke, Systemhäuser, Banken, Influencer und Vereine.",
};

export default function UseCasesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Use Cases"
          title="Für jede Branche das passende Modell."
          tagline={item.intro ?? ""}
          phoneLabel="Ihre Marke"
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
