import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

const halcom = localFont({
  variable: "--font-halcom",
  display: "swap",
  src: [{ path: "../public/fonts/Halcom-Bold.otf", weight: "700", style: "normal" }],
});

const title = "newSIM — Ihre Mobilfunkmarke. So viel Kontrolle, wie Sie wollen.";
const description =
  "newSIM ist die White-Label-Mobilfunkplattform für Carrier, Stadtwerke und ISPs — vom vollständig gemanagten Full Service bis zur eigenen MVNO-Plattform. Diensteanbieter gemäß TKG, MVNO im Netz der Telefónica.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: site.name,
    locale: "de_DE",
    type: "website",
    images: [{ url: "/hero-phone.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero-phone.webp"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: siteUrl,
  logo: `${siteUrl}/logo-newsim-positive.svg`,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${halcom.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
