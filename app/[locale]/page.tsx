import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { MobileCta } from "@/components/MobileCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { BusinessValue } from "@/components/sections/BusinessValue";
import { ModelComparison } from "@/components/sections/ModelComparison";
import { Capabilities } from "@/components/sections/Capabilities";
import { WhiteLabelBlocks } from "@/components/sections/WhiteLabelBlocks";
import { Platform } from "@/components/sections/Platform";
import { SocialProof } from "@/components/sections/SocialProof";
import { UseCaseTeaser } from "@/components/sections/UseCaseTeaser";
import { Tariffs } from "@/components/sections/Tariffs";
import { LaunchProcess } from "@/components/sections/LaunchProcess";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { getContent, isLocale, type Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "de") as Locale;
  const { site } = getContent(loc);
  return pageMetadata({
    path: `/${loc}`,
    canonicalPath: "/",
    title: site.name + " — " + site.claim,
    description: site.descriptor,
  });
}

export default function LocaleHome() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <BusinessValue />
        <ModelComparison />
        <Capabilities />
        <WhiteLabelBlocks />
        <Platform />
        <SocialProof />
        <UseCaseTeaser />
        <Tariffs />
        <LaunchProcess />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
