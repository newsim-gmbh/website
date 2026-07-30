import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { EigenmarkenGrid } from "@/components/templates/EigenmarkenGrid";
import { mainNav } from "@/lib/content";

const item = mainNav.find((n) => n.href === "/eigenmarken")!;

export const metadata: Metadata = {
  title: "Eigenmarken — newSIM",
  description: "easyTEL, One Mobile World und mehr — die eigenen Marken der newSIM GmbH.",
};

export default function EigenmarkenPage() {
  return (
    <>
      <Header />
      <main>
        <EigenmarkenGrid items={item.children ?? []} />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
