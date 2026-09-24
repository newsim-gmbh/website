import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { PageHero } from "@/components/templates/PageHero";
import { HubGrid } from "@/components/templates/HubGrid";
import { mainNav } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const item = mainNav.find((n) => n.href === "/developer")!;

export const metadata = pageMetadata({
  path: "/developer",
  title: "Developer — newSIM",
  description: "API und Telnology®-Plattform: die technische Anbindung an die newSIM Enabling-Plattform.",
  image: "/developer-telnology.webp",
});

export default function DeveloperPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Developer"
          title="Technisch angebunden an die Telnology®-Plattform."
          tagline={item.intro ?? ""}
          image="developer-telnology.webp"
        />
        <HubGrid
          eyebrow="Ressourcen"
          title="API & Plattform-Architektur"
          intro="Die technische Basis für Order Management, Billing und Reporting."
          items={item.children ?? []}
        />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
