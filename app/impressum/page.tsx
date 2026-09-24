import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { LegalPage } from "@/components/templates/LegalPage";
import { impressum } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/impressum",
  title: "Impressum — newSIM",
  description: "Impressum der newsim GmbH.",
});

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
