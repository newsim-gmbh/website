import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { LegalPage } from "@/components/templates/LegalPage";
import { datenschutz } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutz — newSIM",
  description: "Datenschutzhinweise der newsim GmbH.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage content={datenschutz} />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
