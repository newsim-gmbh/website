// Gemeinsame HubSpot-Anbindung für alle Lead-Formulare der Seite
// (Kontakt, API-Anfrage, IoT-Anfrage, Markenbaukasten).
//
// WICHTIG — vor Go-live auszufüllen:
// HUBSPOT_PORTAL_ID und die Einträge in HUBSPOT_FORM_IDS sind bewusst leer.
// Ohne beide Werte kann für das jeweilige Formular kein Lead übertragen
// werden (siehe hasHubSpotFormConfig()). Alle Formulare teilen sich einen
// Portal/Hub, aber jeder Anwendungsfall braucht ein eigenes HubSpot-Formular
// (eigene Formular-ID), weil die Felder unterschiedlich sind.
//
// Die Property-Namen unten müssen als interne Namen auf dem jeweiligen
// HubSpot-Formular existieren — sonst ignoriert HubSpot sie kommentarlos:
//   contact:          firstname, lastname, company, jobtitle, email, phone,
//                      produkt_interesse, breko_mitglied, nachricht
//   apiRequest:        firstname, lastname, company, jobtitle, email, phone,
//                      nachricht
//   iotRequest:        firstname, lastname, company, email, phone,
//                      iot_einsatzbereich, iot_sim_karten_pro_jahr,
//                      iot_datenverbrauch, iot_einsatzlaender
//   markenbaukasten:   firstname, lastname, company, email, phone,
//                      partner_modell, marke_name, marke_farbe, marke_logo,
//                      tarife, neukunden_monat, provision_jahr1,
//                      wl_bestandskunden, wl_sims_jahr1, wl_service,
//                      security_esim_interesse, lead_quelle, utm_source,
//                      utm_medium, utm_campaign, einwilligung
//   roadshow:          firstname, lastname, company, email, phone,
//                      roadshow_termin_wunsch, nachricht, lead_quelle, seite,
//                      utm_source, utm_medium, utm_campaign, utm_content
//   markenbaukastenVormerken (Vorab-Seite "Platz vormerken", solange der
//   eigentliche Markenbaukasten-Baukasten noch nicht live ist):
//                      firstname, lastname, company, email, phone,
//                      beratungstermin_gewuenscht, lead_quelle, seite,
//                      utm_source, utm_medium, utm_campaign, utm_content
// Für den Logo-Upload (Markenbaukasten) braucht das Formular zusätzlich ein
// Datei-Feld mit dem internen Namen "logo".
//
// Damit Einsendungen weiterhin an kontakt@newsim.de gehen: pro Formular in
// HubSpot unter Optionen > Benachrichtigungen die Adresse eintragen — das ist
// eine reine HubSpot-Einstellung, dafür ist kein Code nötig.
export const HUBSPOT_PORTAL_ID = "149728908";

export const HUBSPOT_FORM_IDS = {
  contact: "062bb44b-a804-4ac5-9ffb-e115e9abb0e0",
  apiRequest: "24ef9d34-1609-4a0c-a283-fa716c8487c8",
  iotRequest: "f9e5ab75-97b4-4ba0-880c-d8e19d7ff59b",
  markenbaukasten: "",
  roadshow: "5dc9e629-ccec-48a4-97a0-d23a37e0408a",
  markenbaukastenVormerken: "34503d45-442e-4841-9b51-c56028e8138a",
} as const;

/**
 * Das Portal liegt im EU-Rechenzentrum (sichtbar am data-region="eu1" im
 * HubSpot-Einbettungscode) — die Forms API braucht dafür den EU-Hostnamen,
 * sonst schlagen Einsendungen fehl.
 */
const HUBSPOT_FORMS_API_HOST = "api-eu1.hsforms.com";

export type HubSpotFormKey = keyof typeof HUBSPOT_FORM_IDS;

/** Falls ein HubSpot-Meetings-Link vorliegt, hier eintragen (z. B. "https://meetings.hubspot.com/max/partnergespraech"). */
export const HUBSPOT_MEETINGS_URL = "";

export function hasHubSpotFormConfig(formKey: HubSpotFormKey): boolean {
  return Boolean(HUBSPOT_PORTAL_ID && HUBSPOT_FORM_IDS[formKey]);
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
  formKey: HubSpotFormKey;
  pageName: string;
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
export async function submitHubSpotLead({
  formKey,
  pageName,
  fields,
  logoFile,
}: SubmitLeadParams): Promise<SubmitLeadResult> {
  if (!hasHubSpotFormConfig(formKey)) {
    return { ok: false, error: "not_configured" };
  }

  const formId = HUBSPOT_FORM_IDS[formKey];
  const endpoint = `https://${HUBSPOT_FORMS_API_HOST}/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`;
  const context = {
    pageUri: typeof window !== "undefined" ? window.location.href : undefined,
    pageName,
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
