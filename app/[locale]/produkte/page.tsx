import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { PageHero } from "@/components/templates/PageHero";
import { HubGrid } from "@/components/templates/HubGrid";
import { getContent, isLocale, type Locale } from "@/lib/i18n/config";
import { strings } from "@/lib/i18n/strings";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const t = strings[loc].pages.produkte;
  return pageMetadata({
    path: `/${loc}/produkte`,
    canonicalPath: "/produkte",
    title: t.metaTitle,
    description: t.metaDescription,
    image: "/produkt-white-label-mvne.webp",
  });
}

export default async function LocaleProduktePage({ params }: { params: Params }) {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const { mainNav } = getContent(loc);
  const item = mainNav.find((n) => n.href === "/produkte")!;
  const t = strings[loc].pages.produkte;

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={t.eyebrow}
          title={t.heroTitle}
          tagline={item.intro ?? ""}
          image="produkt-white-label-mvne.webp"
        />
        <HubGrid
          eyebrow={t.gridEyebrow}
          title={t.gridTitle}
          intro={t.gridIntro}
          items={item.children ?? []}
        />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
