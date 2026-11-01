import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { DeveloperDetail } from "@/components/templates/DeveloperDetail";
import { developerPages } from "@/lib/content";
import { getContent, isLocale, type Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return developerPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const page = getContent(loc).developerPages.find((p) => p.slug === slug);
  return pageMetadata({
    path: `/${loc}/developer/${slug}`,
    canonicalPath: `/developer/${slug}`,
    title: page ? `${page.name} — newSIM Developer` : "Developer — newSIM",
    description: page?.heroTagline,
    image: page ? `/${page.image}` : undefined,
  });
}

export default async function LocaleDeveloperSubPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const page = getContent(loc).developerPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <Header />
      <main>
        <DeveloperDetail page={page} />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
