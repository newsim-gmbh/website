import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { UseCaseDetail } from "@/components/templates/UseCaseDetail";
import { useCases } from "@/lib/content";
import { getContent, isLocale, type Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const useCase = getContent(loc).useCases.find((u) => u.slug === slug);
  return pageMetadata({
    path: `/${loc}/use-cases/${slug}`,
    canonicalPath: `/use-cases/${slug}`,
    title: useCase ? `${useCase.name} — newSIM Use Cases` : "Use Case — newSIM",
    description: useCase?.heroTagline,
    image: useCase ? `/${useCase.image}` : undefined,
  });
}

export default async function LocaleUseCasePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const useCase = getContent(loc).useCases.find((u) => u.slug === slug);
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
