import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { ProductDetail } from "@/components/templates/ProductDetail";
import { models } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const model = models.find((m) => m.slug === slug);
  return pageMetadata({
    path: `/produkte/${slug}`,
    title: model ? `${model.navLabel} — newSIM Produkte` : "Produkt — newSIM",
    description: model?.tagline,
    image: model ? `/${model.image}` : undefined,
  });
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const model = models.find((m) => m.slug === slug);
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
