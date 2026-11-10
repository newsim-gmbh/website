"use client";

import { StepNav } from "./StepNav";
import { LeadForm } from "./LeadForm";
import { Booking } from "./Booking";
import { MODELS } from "@/lib/markenbaukasten";
import type { HubSpotField } from "@/lib/hubspot";
import type { LeadData, WlProject } from "./types";

export function StepMeeting({
  brand,
  color,
  logoFile,
  wl,
  utm,
  leadSubmitted,
  onLeadSuccess,
  onBack,
}: {
  brand: string;
  color: string;
  logoFile: File | null;
  wl: WlProject;
  utm: Record<string, string>;
  leadSubmitted: boolean;
  onLeadSuccess: (lead: LeadData) => void;
  onBack: () => void;
}) {
  const extraFields: HubSpotField[] = [
    { name: "partner_modell", value: MODELS.wl.name },
    { name: "marke_name", value: brand },
    { name: "marke_farbe", value: color },
    { name: "marke_logo", value: logoFile ? "hochgeladen" : "–" },
    { name: "wl_bestandskunden", value: wl.base },
    { name: "wl_sims_jahr1", value: wl.sims },
    { name: "wl_service", value: wl.service },
    { name: "security_esim_interesse", value: wl.security },
    { name: "lead_quelle", value: "Markenbaukasten" },
    { name: "utm_source", value: utm.utm_source ?? "" },
    { name: "utm_medium", value: utm.utm_medium ?? "" },
    { name: "utm_campaign", value: utm.utm_campaign ?? "" },
  ];

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Gespräch vereinbaren</h2>
      <p className="mt-1.5 text-ink-soft">
        Wir rechnen Ihr White-Label-Angebot und zeigen Ihnen die Plattform in 30 Minuten.
      </p>

      {leadSubmitted ? (
        <>
          <p className="mt-4 rounded-2xl bg-[#ebf6e4] px-4 py-3.5 font-medium text-[#56634f]">
            Danke! Ihre Anfrage ist bei unserem Partnerteam angekommen.
          </p>
          <Booking />
        </>
      ) : (
        <LeadForm submitLabel="Gespräch anfragen" extraFields={extraFields} logoFile={logoFile} onSuccess={onLeadSuccess} />
      )}

      <StepNav onBack={onBack} hideNext />
    </div>
  );
}
