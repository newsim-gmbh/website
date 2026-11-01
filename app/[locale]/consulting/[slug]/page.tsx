import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { ConsultingDetail } from "@/components/templates/ConsultingDetail";
import { consultingServices } from "@/lib/content";
import { getContent, isLocale, type Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return consultingServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const service = getContent(loc).consultingServices.find((s) => s.slug === slug);
  return pageMetadata({
    path: `/${loc}/consulting/${slug}`,
    canonicalPath: `/consulting/${slug}`,
    title: service ? `${service.name} — newSIM Consulting` : "Consulting — newSIM",
    description: service?.heroTagline,
    image: service ? `/${service.image}` : undefined,
  });
}

export default async function LocaleConsultingSubPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const service = getContent(loc).consultingServices.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main>
        <ConsultingDetail service={service} />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
