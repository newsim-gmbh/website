import type { ModelId, TariffState } from "@/lib/markenbaukasten";

export type PreviewTab = "lp" | "inv" | "af" | "portal" | "ads";

export interface WlProject {
  base: string;
  sims: string;
  service: string;
  security: string;
}

export interface LeadData {
  first: string;
  last: string;
  company: string;
  email: string;
  phone: string;
}

export interface BuilderState {
  step: number;
  model: ModelId;
  brand: string;
  claim: string;
  color: string;
  logoDataUrl: string | null;
  logoFile: File | null;
  tariffs: TariffState[];
  perMonth: number;
  tab: PreviewTab;
  wl: WlProject;
  lead: LeadData | null;
  leadSubmitted: boolean;
}

export const WL_PROJECT_OPTIONS = {
  base: ["unter 1.000", "1.000–10.000", "10.000–100.000", "über 100.000"],
  sims: ["unter 1.000", "1.000–5.000", "5.000–20.000", "über 20.000"],
  service: ["Partner", "newSIM", "noch offen"],
  security: ["ja", "nein", "später"],
} as const;
