"use client";

import { useState } from "react";
import { StepIndicator } from "./StepIndicator";
import { StepModel } from "./StepModel";
import { StepBrand } from "./StepBrand";
import { StepTariffs } from "./StepTariffs";
import { StepPrices } from "./StepPrices";
import { StepResult } from "./StepResult";
import { StepProject } from "./StepProject";
import { StepMeeting } from "./StepMeeting";
import { PreviewPanel } from "./PreviewPanel";
import {
  BRAND_COLORS,
  MODELS,
  initialTariffState,
  isWhiteLabel,
  selectedTariffs,
  type ModelId,
} from "@/lib/markenbaukasten";
import type { BuilderState, PreviewTab, WlProject } from "./types";

const DEFAULT_BRAND = "Ihre Marke";

const NON_WL_STEPS = ["Modell", "Marke", "Tarife", "Preise", "Ergebnis"];
const WL_STEPS = ["Modell", "Marke", "Projekt", "Gespräch"];

function initialState(): BuilderState {
  return {
    step: 0,
    model: "br",
    brand: DEFAULT_BRAND,
    claim: "",
    color: BRAND_COLORS[0],
    logoDataUrl: null,
    logoFile: null,
    tariffs: initialTariffState(DEFAULT_BRAND),
    perMonth: 20,
    tab: "lp",
    wl: { base: "unter 1.000", sims: "1.000–5.000", service: "Partner", security: "ja" },
    lead: null,
    leadSubmitted: false,
  };
}

export function MarkenbaukastenBuilder() {
  const [state, setState] = useState<BuilderState>(initialState);
  // Einmaliger, rein lesender Zugriff auf die Browser-URL (Lazy-Initializer statt
  // Effekt): die UTM-Werte aus /baukasten werden nie wieder gelesen und fließen
  // erst beim Formular-Submit in den HubSpot-Payload ein, kein sichtbares DOM
  // hängt davon ab — daher unproblematisch für die Hydration.
  const [utm] = useState<Record<string, string>>(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    const next: Record<string, string> = {};
    ["utm_source", "utm_medium", "utm_campaign"].forEach((key) => {
      const v = params.get(key);
      if (v) next[key] = v;
    });
    return next;
  });

  const steps = isWhiteLabel(state.model) ? WL_STEPS : NON_WL_STEPS;
  const step = Math.min(state.step, steps.length - 1);

  const goToStep = (i: number) => setState((s) => ({ ...s, step: i }));
  const goBack = () => setState((s) => ({ ...s, step: Math.max(0, s.step - 1) }));
  const goNext = () => setState((s) => ({ ...s, step: Math.min(steps.length - 1, s.step + 1) }));

  const setModel = (model: ModelId) =>
    setState((s) => {
      let tariffs = s.tariffs;
      if (model === "starter") {
        let kept = 0;
        tariffs = s.tariffs.map((t) => {
          if (t.home) return { ...t, on: false };
          if (t.on) {
            kept++;
            return kept > 3 ? { ...t, on: false } : t;
          }
          return t;
        });
        if (!selectedTariffs(tariffs).length) {
          tariffs = tariffs.map((t, i) => (i >= 1 && i <= 3 ? { ...t, on: true } : t));
        }
      }
      return { ...s, model, tariffs };
    });

  const setBrand = (brand: string) =>
    setState((s) => {
      const oldFirst = (s.brand || DEFAULT_BRAND).split(" ")[0];
      const newBrand = brand || DEFAULT_BRAND;
      const newFirst = newBrand.split(" ")[0];
      const tariffs = s.tariffs.map((t) =>
        t.name.startsWith(`${oldFirst} `) ? { ...t, name: `${newFirst} ${t.label}` } : t
      );
      return { ...s, brand, tariffs };
    });

  const setClaim = (claim: string) => setState((s) => ({ ...s, claim }));
  const setColor = (color: string) => setState((s) => ({ ...s, color }));
  const setLogo = (file: File | null, dataUrl: string | null) =>
    setState((s) => ({ ...s, logoFile: file, logoDataUrl: dataUrl }));

  const toggleTariff = (id: string) =>
    setState((s) => {
      const max = MODELS[s.model].max;
      const isOn = s.tariffs.find((t) => t.id === id)?.on;
      if (!isOn && selectedTariffs(s.tariffs).length >= max) return s;
      return { ...s, tariffs: s.tariffs.map((t) => (t.id === id ? { ...t, on: !t.on } : t)) };
    });

  const renameTariff = (id: string, name: string) =>
    setState((s) => ({ ...s, tariffs: s.tariffs.map((t) => (t.id === id ? { ...t, name: name || "Tarif" } : t)) }));

  const setPrice = (id: string, price: number) =>
    setState((s) => ({ ...s, tariffs: s.tariffs.map((t) => (t.id === id ? { ...t, price } : t)) }));

  const setPerMonth = (perMonth: number) => setState((s) => ({ ...s, perMonth }));
  const setTab = (tab: PreviewTab) => setState((s) => ({ ...s, tab }));
  const setWlField = (key: keyof WlProject, value: string) =>
    setState((s) => ({ ...s, wl: { ...s.wl, [key]: value } }));

  const onLeadSuccess = (lead: BuilderState["lead"]) => setState((s) => ({ ...s, lead, leadSubmitted: true }));

  const upgradeToBrandedReseller = () => setModel("br");

  const stepName = steps[step];

  return (
    <div>
      <StepIndicator labels={steps} current={step} onSelect={goToStep} />

      <div className="mt-5.5 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
        <section className="min-w-0 rounded-3xl border border-line bg-background p-6 sm:p-7" aria-live="polite">
          {stepName === "Modell" && <StepModel model={state.model} onChange={setModel} onNext={goNext} />}
          {stepName === "Marke" && (
            <StepBrand
              brand={state.brand}
              claim={state.claim}
              color={state.color}
              logoDataUrl={state.logoDataUrl}
              onBrandChange={setBrand}
              onClaimChange={setClaim}
              onColorChange={setColor}
              onLogoChange={setLogo}
              onBack={goBack}
              onNext={goNext}
            />
          )}
          {stepName === "Tarife" && (
            <StepTariffs
              model={state.model}
              tariffs={state.tariffs}
              onToggle={toggleTariff}
              onRename={renameTariff}
              onBack={goBack}
              onNext={goNext}
            />
          )}
          {stepName === "Preise" && (
            <StepPrices tariffs={state.tariffs} onPriceChange={setPrice} onBack={goBack} onNext={goNext} />
          )}
          {stepName === "Ergebnis" && (
            <StepResult
              model={state.model}
              tariffs={state.tariffs}
              perMonth={state.perMonth}
              onPerMonthChange={setPerMonth}
              brand={state.brand}
              color={state.color}
              logoFile={state.logoFile}
              utm={utm}
              leadSubmitted={state.leadSubmitted}
              onLeadSuccess={onLeadSuccess}
              onBack={goBack}
            />
          )}
          {stepName === "Projekt" && (
            <StepProject wl={state.wl} onChange={setWlField} onBack={goBack} onNext={goNext} />
          )}
          {stepName === "Gespräch" && (
            <StepMeeting
              brand={state.brand}
              color={state.color}
              logoFile={state.logoFile}
              wl={state.wl}
              utm={utm}
              leadSubmitted={state.leadSubmitted}
              onLeadSuccess={onLeadSuccess}
              onBack={goBack}
            />
          )}
        </section>

        <PreviewPanel
          model={state.model}
          brand={state.brand}
          claim={state.claim}
          color={state.color}
          logoDataUrl={state.logoDataUrl}
          tariffs={state.tariffs}
          tab={state.tab}
          onTabChange={setTab}
          onUpgrade={upgradeToBrandedReseller}
        />
      </div>
    </div>
  );
}
