import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { ProductDetail } from "@/components/templates/ProductDetail";
import { models } from "@/lib/content";
import { getContent, isLocale, type Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const model = getContent(loc).models.find((m) => m.slug === slug);
  return pageMetadata({
    path: `/${loc}/produkte/${slug}`,
    canonicalPath: `/produkte/${slug}`,
    title: model ? `${model.navLabel} — newSIM Produkte` : "Produkt — newSIM",
    description: model?.tagline,
    image: model ? `/${model.image}` : undefined,
  });
}

export default async function LocaleProductPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const model = getContent(loc).models.find((m) => m.slug === slug);
  if (!model) notFound();

  return (
    <>
      <Header />
      <main>
        <ProductDetail model={model} />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
