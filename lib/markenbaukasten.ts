import type { IconName } from "@/components/Icon";

// Datenmodell und Provisionsrechnung für /markenbaukasten.
// 1:1 aus dem freigegebenen Prototyp (newSIM_Markenbaukasten.html) übernommen —
// Netto-Basis (Preis ÷ 1,19) und Formeln bewusst unverändert, da sie den
// Partnern reale Beispielwerte zeigen.

export const NET = 1 / 1.19;
/** Einmalige Bereitstellungsgebühr (brutto), zur Hälfte Teil der Aktivierungsprämie. */
export const BEREITSTELLUNG = 20;

export type ModelId = "starter" | "br" | "wl";

export interface Tariff {
  id: string;
  label: string;
  gb: string;
  /** Preisuntergrenze (= Grundprovisionsbasis), brutto pro Monat. */
  lo: number;
  /** Preisobergrenze, brutto pro Monat. */
  hi: number;
  /** Einmalige Abschlusskommission (Signup Activation Commission). */
  sac: number;
  home?: boolean;
}

export const TARIFFS: Tariff[] = [
  { id: "xs", label: "XS", gb: "5 GB", lo: 5, hi: 15, sac: 10 },
  { id: "s", label: "S", gb: "25 GB", lo: 10, hi: 20, sac: 12 },
  { id: "m", label: "M", gb: "50 GB", lo: 15, hi: 30, sac: 20 },
  { id: "l", label: "L", gb: "100 GB", lo: 20, hi: 40, sac: 25 },
  { id: "xl", label: "XL", gb: "120 GB", lo: 25, hi: 45, sac: 30 },
  { id: "xxl", label: "XXL", gb: "150 GB", lo: 30, hi: 50, sac: 35 },
  { id: "h1", label: "Home 1", gb: "300 GB", lo: 50, hi: 70, sac: 35, home: true },
  { id: "h2", label: "Home 2", gb: "500 GB", lo: 60, hi: 80, sac: 35, home: true },
];

export interface ModelDef {
  id: ModelId;
  name: string;
  icon: IconName;
  fee: number | null;
  feeTxt: string;
  feeSub: string;
  desc: string;
  /** Maximal wählbare Tarife (0 = individuell, kein fixes Tarifportfolio). */
  max: number;
  home: boolean;
}

export const MODELS: Record<ModelId, ModelDef> = {
  starter: {
    id: "starter",
    name: "Branded Reseller Starter",
    icon: "smartphone",
    fee: 0,
    feeTxt: "0 €",
    feeSub: "ohne Grundgebühr",
    desc: "Ihre Marke auf Tarif und Rechnung. 3 Tarife, Verkauf im Laden über das Händlerportal.",
    max: 3,
    home: false,
  },
  br: {
    id: "br",
    name: "Branded Reseller",
    icon: "flag",
    fee: 500,
    feeTxt: "500 €",
    feeSub: "pro Monat, rabattierbar",
    desc: "Ihre Marke überall: Landingpage, Bestellstrecke, Kundenportal und Starterkit. Alle 8 Tarife.",
    max: 8,
    home: true,
  },
  wl: {
    id: "wl",
    name: "White Label Reseller",
    icon: "sliders",
    fee: null,
    feeTxt: "Individuell",
    feeSub: "Setup und Plattform laut Angebot",
    desc: "Eigene Tarife auf Basis unserer Vorleistung, eigene Preise, Kundenbeziehung beim Partner.",
    max: 0,
    home: true,
  },
};

export const MODEL_ORDER: ModelId[] = ["starter", "br", "wl"];

export const BRAND_COLORS = ["#0f766e", "#1d4ed8", "#b42318", "#7c3aed", "#c2410c", "#191919"];

export function isWhiteLabel(model: ModelId): boolean {
  return model === "wl";
}

export interface TariffState extends Tariff {
  on: boolean;
  name: string;
  price: number;
}

export function initialTariffState(brandFirstName: string): TariffState[] {
  const preselected = new Set(["s", "m", "l", "xl"]);
  return TARIFFS.map((t) => ({
    ...t,
    on: preselected.has(t.id),
    name: `${brandFirstName} ${t.label}`,
    price: Math.round((t.lo + t.hi) / 2),
  }));
}

export function selectedTariffs(tariffs: TariffState[]): TariffState[] {
  return tariffs.filter((t) => t.on);
}

export interface CommissionResult {
  /** Ø monatliche Provision je Kunde (Grund- + Aufschlagprovision), netto. */
  m: number;
  /** Ø einmalige Provision je Kunde (Abschlusskommission + 50% Bereitstellung), netto anteilig. */
  o: number;
  /** Provision pro Kunde über 24 Monate. */
  cust24: number;
  /** Provision im Monat 12 (alle bis dahin gewonnenen Kunden). */
  month12: number;
  /** Provisionssumme im ersten Jahr (Monat 1–12). */
  y1: number;
  /** Monatliche Grundgebühr des gewählten Modells (0 bei Starter, null→0 bei White Label). */
  fee: number;
  /** Provision je Monat, Monat 1 bis 24 (kumulativ nach Kundenbestand). */
  months: number[];
}

/**
 * Durchschnittsprovision über die gewählten Tarife, hochgerechnet auf die
 * angegebenen Neukunden pro Monat. Aufschlagprovision = 70% des Aufpreises
 * über der Preisuntergrenze, jeweils auf Nettobasis (Preis ÷ 1,19).
 */
export function calcCommission(
  tariffs: TariffState[],
  perMonth: number,
  model: ModelId
): CommissionResult | null {
  const ts = selectedTariffs(tariffs);
  if (!ts.length) return null;

  let m = 0;
  let o = 0;
  ts.forEach((t) => {
    m += 0.1 * t.lo * NET + 0.7 * (t.price - t.lo) * NET;
    o += t.sac + 0.5 * BEREITSTELLUNG * NET;
  });
  m /= ts.length;
  o /= ts.length;

  const N = perMonth;
  const fee = MODELS[model].fee || 0;
  const months: number[] = [];
  let y1 = 0;
  for (let k = 1; k <= 24; k++) {
    const v = N * k * m + N * o;
    months.push(v);
    if (k <= 12) y1 += v;
  }

  return { m, o, cust24: 24 * m + o, month12: months[11], y1, fee, months };
}

/** Erster Monat (1-basiert), ab dem die monatliche Provision die Grundgebühr übersteigt. */
export function breakEvenMonth(result: CommissionResult): number | null {
  for (let i = 0; i < result.months.length; i++) {
    if (result.months[i] >= result.fee) return i + 1;
  }
  return null;
}

export function formatEur(value: number, decimals = 2): string {
  return value.toLocaleString("de-DE", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + " €";
}

export interface PreviewTariff {
  name: string;
  gb: string;
  price: string;
}

/**
 * Tarife für die Live-Vorschau: bei White Label gibt es noch kein festes
 * Portfolio, daher drei generische Platzhaltertarife mit "Ihr Preis" statt
 * echter Zahlen.
 */
export function tariffsForPreview(model: ModelId, brand: string, tariffs: TariffState[]): PreviewTariff[] {
  if (isWhiteLabel(model)) {
    return [
      { name: `${brand} Basic`, gb: "Ihr Volumen", price: "Ihr Preis" },
      { name: `${brand} Plus`, gb: "Ihr Volumen", price: "Ihr Preis" },
      { name: `${brand} Max`, gb: "Ihr Volumen", price: "Ihr Preis" },
    ];
  }
  return selectedTariffs(tariffs).map((t) => ({
    name: t.name,
    gb: t.gb + (t.home ? " · Home" : " · Allnet-Flat"),
    price: `${t.price} €`,
  }));
}
