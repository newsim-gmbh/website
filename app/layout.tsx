import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const halcom = localFont({
  variable: "--font-halcom",
  display: "swap",
  src: [{ path: "../public/fonts/Halcom-Bold.otf", weight: "700", style: "normal" }],
});

export const metadata: Metadata = {
  title: "newSIM — Ihre Mobilfunkmarke. So viel Kontrolle, wie Sie wollen.",
  description:
    "newSIM ist die White-Label-Mobilfunkplattform für Carrier, Stadtwerke und ISPs — vom vollständig gemanagten Full Service bis zur eigenen MVNO-Plattform. Diensteanbieter gemäß TKG, MVNO im Netz der Telefónica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${halcom.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-ink">{children}</body>
    </html>
  );
}
