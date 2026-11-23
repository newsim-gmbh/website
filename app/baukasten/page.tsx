import type { Metadata } from "next";
import { ClientRedirect } from "@/components/markenbaukasten/ClientRedirect";

// Feste Zielseite für den QR-Code im telecom-handel-Jahrbuch (Druck Dezember 2026).
// /baukasten bleibt dauerhaft bestehen und leitet mit UTM-Parametern weiter, damit
// Leads aus dem Jahrbuch in HubSpot als eigene Quelle sichtbar sind. Die eigentliche
// Seite liegt unter /markenbaukasten; interne Links verweisen direkt dorthin.
//
// Hinweis zur Weiterleitungsart: Als statisch exportierte Seite (GitHub Pages, kein
// eigener Server) kann hier kein echter HTTP-301 ausgeliefert werden – Next.js'
// `redirects()`/Proxy-Mechanismen setzen einen Server voraus. Diese Seite leitet
// stattdessen sofort per JavaScript weiter (clientseitig quasi augenblicklich) und
// trägt zusätzlich ein Meta-Refresh sowie einen sichtbaren Link als Fallback für
// Clients ohne JavaScript. Für eine serverseitige 301-Weiterleitung müsste die
// Weiterleitung auf einer vorgeschalteten Ebene (z. B. Cloudflare Page Rule/Worker)
// konfiguriert werden, falls eine solche vor newsim.de hängt.
const TARGET = "/markenbaukasten?utm_source=telecom-handel&utm_medium=print&utm_campaign=jahrbuch";

export const metadata: Metadata = {
  title: "Markenbaukasten — newSIM",
  description: "Diese Seite wurde verschoben zu newsim.de/markenbaukasten.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/markenbaukasten" },
};

export default function BaukastenRedirectPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      {/* React 19 hoists head-only tags (title/meta/link) rendered anywhere in the
          tree into <head> automatically — no custom <head> needed here. */}
      <meta httpEquiv="refresh" content={`0;url=${TARGET}`} />
      <ClientRedirect to={TARGET} />
      <p className="text-ink-soft">
        Sie werden weitergeleitet zum{" "}
        <a href={TARGET} className="font-medium text-primary-ink underline">
          Markenbaukasten
        </a>
        .
      </p>
    </main>
  );
}
