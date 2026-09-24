import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { PageHero } from "@/components/templates/PageHero";
import { HubGrid } from "@/components/templates/HubGrid";
import { mainNav } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const item = mainNav.find((n) => n.href === "/consulting")!;

export const metadata = pageMetadata({
  path: "/consulting",
  title: "Consulting — newSIM",
  description: "Strategische Beratung rund um Mobilfunk & Glasfaser: G2M-Strategie, Potentialanalyse, Sales-Strategie, Netz-Transformation.",
  image: "/consulting-potentialanalyse.webp",
});

export default function ConsultingPage() {
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
