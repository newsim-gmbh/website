import { Header } from "@/components/Header";
import { MobileCta } from "@/components/MobileCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { BusinessValue } from "@/components/sections/BusinessValue";
import { ModelComparison } from "@/components/sections/ModelComparison";
import { Capabilities } from "@/components/sections/Capabilities";
import { Platform } from "@/components/sections/Platform";
import { SocialProof } from "@/components/sections/SocialProof";
import { Solutions } from "@/components/sections/Solutions";
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
        <BusinessValue />
        <ModelComparison />
        <Capabilities />
        <Platform />
        <SocialProof />
        <Solutions />
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
