import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { PageHero } from "@/components/templates/PageHero";
import { HubGrid } from "@/components/templates/HubGrid";
import { mainNav } from "@/lib/content";

const item = mainNav.find((n) => n.href === "/developer")!;

export const metadata: Metadata = {
  title: "Developer — newSIM",
  description: "API und Telnology®-Plattform: die technische Anbindung an die newSIM Enabling-Plattform.",
};

export default function DeveloperPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Developer"
          title="Technisch angebunden an die Telnology®-Plattform."
          tagline={item.intro ?? ""}
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
