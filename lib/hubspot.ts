// HubSpot-Anbindung für den Markenbaukasten-Lead.
//
// WICHTIG — vor Go-live auszufüllen:
// HUBSPOT_PORTAL_ID und HUBSPOT_FORM_ID sind hier bewusst leer. Ohne beide
// Werte kann kein Lead übertragen werden (siehe hasHubSpotConfig()).
// Die Property-Namen unten (firstname, lastname, company, email, phone,
// partner_modell, marke_name, marke_farbe, marke_logo, tarife,
// neukunden_monat, provision_jahr1, wl_bestandskunden, wl_sims_jahr1,
// wl_service, security_esim_interesse, lead_quelle, utm_source, utm_medium,
// utm_campaign, einwilligung) müssen als interne Namen auf dem HubSpot-
// Formular (bzw. als Kontakt-/Deal-Eigenschaften) existieren — sonst
// ignoriert HubSpot sie kommentarlos. Für den Logo-Upload braucht das
// Formular ein Datei-Feld mit dem internen Namen "logo".
export const HUBSPOT_PORTAL_ID = "";
export const HUBSPOT_FORM_ID = "";
/** Falls ein HubSpot-Meetings-Link vorliegt, hier eintragen (z. B. "https://meetings.hubspot.com/max/partnergespraech"). */
export const HUBSPOT_MEETINGS_URL = "";

export function hasHubSpotFormConfig(): boolean {
  return Boolean(HUBSPOT_PORTAL_ID && HUBSPOT_FORM_ID);
}

export function hasHubSpotMeetingsConfig(): boolean {
  return Boolean(HUBSPOT_MEETINGS_URL);
}

function readHubspotutkCookie(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
  return match?.[1];
}

export interface HubSpotField {
  name: string;
  value: string;
}

export interface SubmitLeadParams {
  fields: HubSpotField[];
  logoFile?: File | null;
}

export type SubmitLeadResult = { ok: true } | { ok: false; error: string };

/**
 * Übermittelt den Lead an die HubSpot Forms API. Nutzt multipart/form-data,
 * sobald ein Logo angehängt ist (von der JSON-Submission der Forms API nicht
 * unterstützt), sonst JSON.
 * https://developers.hubspot.com/docs/api/marketing/forms
 */
export async function submitHubSpotLead({ fields, logoFile }: SubmitLeadParams): Promise<SubmitLeadResult> {
  if (!hasHubSpotFormConfig()) {
    return { ok: false, error: "not_configured" };
  }

  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
  const context = {
    pageUri: typeof window !== "undefined" ? window.location.href : undefined,
    pageName: "Markenbaukasten",
    hutk: readHubspotutkCookie(),
  };

  try {
    let res: Response;
    if (logoFile) {
      const formData = new FormData();
      fields.forEach((f) => formData.append(f.name, f.value));
      formData.append("hs_context", JSON.stringify(context));
      formData.append("logo", logoFile, logoFile.name);
      res = await fetch(endpoint, { method: "POST", body: formData });
    } else {
      res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields, context }),
      });
    }
    if (!res.ok) {
      return { ok: false, error: `http_${res.status}` };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "network" };
  }
}
