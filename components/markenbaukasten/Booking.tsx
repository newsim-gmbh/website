"use client";

import Script from "next/script";
import { LocalizedLink as Link } from "../LocalizedLink";
import { HUBSPOT_MEETINGS_URL, hasHubSpotMeetingsConfig } from "@/lib/hubspot";

export function Booking() {
  if (!hasHubSpotMeetingsConfig()) {
    return (
      <div className="mt-4 rounded-2xl border border-line p-4">
        <p className="font-heading text-base font-bold text-ink">Jetzt Termin vereinbaren</p>
        <p className="mt-1 text-sm text-ink-soft">
          30 Minuten mit dem Partnerteam — wir gehen Ihre Marke gemeinsam durch.
        </p>
        <Link
          href="/kontakt"
          className="font-heading mt-3 inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-2xl border border-line p-4">
      <p className="font-heading text-base font-bold text-ink">Jetzt Termin vereinbaren</p>
      <p className="mt-1 text-sm text-ink-soft">
        30 Minuten mit dem Partnerteam — wir gehen Ihre Marke gemeinsam durch.
      </p>
      <div className="meetings-iframe-container mt-3" data-src={`${HUBSPOT_MEETINGS_URL}?embed=true`} />
      <Script src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" strategy="lazyOnload" />
    </div>
  );
}
