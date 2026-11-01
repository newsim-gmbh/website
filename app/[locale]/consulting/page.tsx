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
  const t = strings[loc].pages.consulting;
  return pageMetadata({
    path: `/${loc}/consulting`,
    canonicalPath: "/consulting",
    title: t.metaTitle,
    description: t.metaDescription,
    image: "/consulting-potentialanalyse.webp",
  });
}

export default async function LocaleConsultingPage({ params }: { params: Params }) {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const { mainNav } = getContent(loc);
  const item = mainNav.find((n) => n.href === "/consulting")!;
  const t = strings[loc].pages.consulting;

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Consulting"
          title={t.heroTitle}
          tagline={item.intro ?? ""}
          image="consulting-potentialanalyse.webp"
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
