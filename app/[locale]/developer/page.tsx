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
    path: `/${loc}/developer`,
    canonicalPath: "/developer",
    title: "Developer — newSIM",
    description: "API und Telnology®-Plattform: die technische Anbindung an die newSIM Enabling-Plattform.",
    image: "/developer-telnology.webp",
  });
}

export default async function LocaleDeveloperPage({ params }: { params: Params }) {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const { mainNav } = getContent(loc);
  const item = mainNav.find((n) => n.href === "/developer")!;

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
