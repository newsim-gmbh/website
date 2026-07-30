import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { UseCaseDetail } from "@/components/templates/UseCaseDetail";
import { useCases } from "@/lib/content";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const useCase = useCases.find((u) => u.slug === slug);
  return {
    title: useCase ? `${useCase.name} — newSIM Use Cases` : "Use Case — newSIM",
    description: useCase?.heroTagline,
  };
}

export default async function UseCasePage({ params }: { params: Params }) {
  const { slug } = await params;
  const useCase = useCases.find((u) => u.slug === slug);
  if (!useCase) notFound();

  return (
    <>
      <Header />
      <main>
        <UseCaseDetail useCase={useCase} />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
