import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { EigenmarkenGrid } from "@/components/templates/EigenmarkenGrid";
import { getContent, isLocale, type Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  return pageMetadata({
    path: `/${loc}/eigenmarken`,
    canonicalPath: "/eigenmarken",
    title: "Eigenmarken — newSIM",
    description: "easyTEL, One Mobile World und mehr — die eigenen Marken der newSIM GmbH.",
    image: "/hero-phone.webp",
  });
}

export default async function LocaleEigenmarkenPage({ params }: { params: Params }) {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const { mainNav } = getContent(loc);
  const item = mainNav.find((n) => n.href === "/eigenmarken")!;

  return (
    <>
      <Header />
      <main>
        <EigenmarkenGrid items={item.children ?? []} />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
