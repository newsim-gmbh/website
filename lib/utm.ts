// Liest UTM-Parameter einmalig aus der Browser-URL (für Kampagnen-Landingpages
// wie /roadshow und /markenbaukasten), damit sie beim Formular-Submit als
// versteckte Felder an HubSpot mitgegeben werden können.
export function readUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const next: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_content"].forEach((key) => {
    const v = params.get(key);
    if (v) next[key] = v;
  });
  return next;
}
