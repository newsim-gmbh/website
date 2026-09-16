import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { LegalPage } from "@/components/templates/LegalPage";
import { impressum } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum — newSIM",
  description: "Impressum der newsim GmbH.",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage content={impressum} />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
