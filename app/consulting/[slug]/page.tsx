import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { ConsultingDetail } from "@/components/templates/ConsultingDetail";
import { consultingServices } from "@/lib/content";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return consultingServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = consultingServices.find((s) => s.slug === slug);
  return {
    title: service ? `${service.name} — newSIM Consulting` : "Consulting — newSIM",
    description: service?.heroTagline,
  };
}

export default async function ConsultingSubPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = consultingServices.find((s) => s.slug === slug);
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
