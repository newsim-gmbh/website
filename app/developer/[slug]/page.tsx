import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { DeveloperDetail } from "@/components/templates/DeveloperDetail";
import { developerPages } from "@/lib/content";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return developerPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const page = developerPages.find((p) => p.slug === slug);
  return {
    title: page ? `${page.name} — newSIM Developer` : "Developer — newSIM",
    description: page?.heroTagline,
  };
}

export default async function DeveloperSubPage({ params }: { params: Params }) {
  const { slug } = await params;
  const page = developerPages.find((p) => p.slug === slug);
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
