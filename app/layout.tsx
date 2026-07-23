import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink">{children}</body>
    </html>
  );
}
