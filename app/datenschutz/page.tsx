import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { LegalPage } from "@/components/templates/LegalPage";
import { datenschutz } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/datenschutz",
  title: "Datenschutz — newSIM",
  description: "Datenschutzhinweise der newsim GmbH.",
});

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
