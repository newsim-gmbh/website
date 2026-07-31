import { Header } from "@/components/Header";
import { MobileCta } from "@/components/MobileCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { BusinessValue } from "@/components/sections/BusinessValue";
import { ModelComparison } from "@/components/sections/ModelComparison";
import { Capabilities } from "@/components/sections/Capabilities";
import { Platform } from "@/components/sections/Platform";
import { SocialProof } from "@/components/sections/SocialProof";
import { UseCaseTeaser } from "@/components/sections/UseCaseTeaser";
import { Tariffs } from "@/components/sections/Tariffs";
import { LaunchProcess } from "@/components/sections/LaunchProcess";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <BusinessValue />
        <ModelComparison />
        <Capabilities />
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
