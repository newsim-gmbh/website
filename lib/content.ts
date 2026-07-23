// Inhaltliche Single-Source-of-Truth für die newSIM-Website.
// Grundlage: newSIM Unternehmenspräsentation "Mobilfunk Opportunität", Stand Juni 2026.
// Zahlen/Fakten bewusst nah am Original gehalten. Preise/Konditionen siehe `pricing`
// weiter unten — bewusst als eigener, leicht austauschbarer Block gehalten.

export const site = {
  name: "newSIM",
  legalName: "newSIM GmbH",
  domain: "newsim.de",
  locations: "Marburg · Hamburg",
  claim: "Ihre Mobilfunkmarke. So viel Kontrolle, wie Sie wollen.",
  descriptor:
    "Von vollständig gemanagt bis zur eigenen MVNO-Plattform — die White-Label-Mobilfunkplattform für Carrier, Stadtwerke und ISPs.",
  primaryCta: "Gespräch vereinbaren",
  calendlyUrl: "#kontakt",
};

export const nav = [
  { label: "Modelle", href: "#modelle" },
  { label: "Plattform", href: "#plattform" },
  { label: "Lösungen", href: "#loesungen" },
  { label: "Tarife", href: "#tarife" },
  { label: "FAQ", href: "#faq" },
];

export const proofPoints = [
  { value: "30+", label: "Kooperationspartner unter Vertrag" },
  { value: "200+", label: "Tarife im White-Label-Portfolio" },
  { value: "5–500", suffix: "GB", label: "Datenpakete, Allnetflat & SMS-Flat" },
  { value: "4–6", suffix: "Wochen", label: "bis zum kommerziellen Launch" },
] as const;

export const hero = {
  eyebrow: "Diskussionspapier · Mobilfunk Opportunität",
  headline: "Ihre Mobilfunkmarke.\nSo viel Kontrolle, wie Sie wollen.",
  sub: "Vom vollständig gemanagten Full Service bis zur eigenen White-Label-MVNO-Plattform: newSIM ist Diensteanbieter gemäß TKG und MVNO im Netz von Telefónica — mit voller regulatorischer Abdeckung und ohne Mindest-Kommitment.",
};

export const businessValue = {
  eyebrow: "Warum Mobilfunk?",
  title: "Mobilfunk ist mehr als ein Zusatzprodukt — es ist ein Kundenbindungshebel.",
  intro:
    "Als Mobilfunkspezialist mit eigener Mobile-as-a-Service-Plattform übernimmt newSIM die komplexen Teile — Netz, Regulierung, Billing —, damit Carrier, Stadtwerke und ISPs ihr Portfolio um ein eigenes Mobilfunk- und IoT/M2M-Angebot erweitern können.",
  points: [
    {
      title: "Ohne Mindest-Kommitment",
      body: "Start ohne Volumen-Kommitment, Skalierung nach realem Bedarf — das kaufmännische Risiko bleibt kalkulierbar.",
    },
    {
      title: "Volle regulatorische Abdeckung",
      body: "newSIM ist Diensteanbieter gemäß TKG und übernimmt Support bei allen regulatorischen Themen bei der BNetzA.",
    },
    {
      title: "Eigene Mobile-as-a-Service-Plattform",
      body: "Als MVNO im Netz der Telefónica betreibt newSIM die Telnology®-Plattform als Enabling-Plattform & BSS für Partner.",
    },
  ],
};

export type ModelId = "full-service" | "branded-reseller" | "white-label-reseller" | "white-label-mvno";

export interface BusinessModel {
  id: ModelId;
  step: number;
  name: string;
  sourceName?: string;
  tagline: string;
  description: string;
  idealFor?: string;
  newSimResponsibilities: string[];
  partnerResponsibilities: string[];
  keyBenefits?: { title: string; body: string }[];
  ownershipLevel: number; // 1–4, für die visuelle Vergleichsleiste
}

export const models: BusinessModel[] = [
  {
    id: "full-service",
    step: 1,
    name: "Full Service",
    sourceName: "Business Solutions",
    tagline: "Minimaler Aufwand — newSIM übernimmt praktisch alles.",
    description:
      "Individuelle Tarifangebote für den Geschäftskundenbereich. Flexible Laufzeiten mit Upgrade- und Downgrade-Möglichkeiten ganz nach Kundenwunsch — newSIM betreibt Tarif-Portfolio, Rufnummern-Management und SIM-Karten-Logistik direkt für den Geschäftskunden.",
    idealFor: "Geschäftskunden mit individuellem Mobilfunkbedarf, ohne eigenen Reseller-Aufwand",
    newSimResponsibilities: ["Tarif-Portfolio", "Rufnummern-Management", "SIM-Karten-Logistik"],
    partnerResponsibilities: ["Aktivierung / Deaktivierung", "Endkundenbeziehung"],
    ownershipLevel: 1,
  },
  {
    id: "branded-reseller",
    step: 2,
    name: "Branded Reseller",
    tagline: "Eigene Marke in 4 Wochen — newSIM trägt den Großteil der Wertschöpfung.",
    description:
      "Eigene Mobilfunkmarke in nur 4 Wochen startklar. newSIM übernimmt den Großteil der Wertschöpfung — der Partner liefert Brand und Vertrieb.",
    idealFor: "ISPs und Carrier zum Start — einfache Bestellstrecke, fertige Provision",
    newSimResponsibilities: ["Customer Service 1st Level", "Billing & Inkasso", "Tarif-Portfolio"],
    partnerResponsibilities: ["Brand / Marke", "Marketing & Sales", "Endkundenbeziehung"],
    keyBenefits: [
      { title: "Live in 4 Wochen", body: "Schnellster Weg zur eigenen Marke" },
      { title: "10% Marge", body: "Fixierte Abschlussprovision pro Vertrag" },
      { title: "Niedrige Komplexität", body: "newSIM übernimmt fast die gesamte Wertschöpfung" },
      { title: "Fertige Bausteine", body: "Landingpage, Bestellstrecke, Support gerouted" },
    ],
    ownershipLevel: 2,
  },
  {
    id: "white-label-reseller",
    step: 3,
    name: "White Label Reseller",
    sourceName: "White Label Modell / White Label Partner",
    tagline: "Eigener Brand, eigenes Pricing, maximaler Gestaltungsspielraum.",
    description:
      "Customizing in Look & Feel mit voller Commercial Ownership. Der Partner gestaltet das Tarif-Portfolio aktiv mit und hat maximalen Marge- und Gestaltungsspielraum.",
    idealFor: "ISPs & Carrier, die ihr FTTH-Portfolio um Mobilfunk in Eigenregie erweitern wollen",
    newSimResponsibilities: ["Billing & Inkasso", "2nd Level Support", "Plattform-Betrieb", "Regulierung BNetzA"],
    partnerResponsibilities: [
      "Commercial Ownership / Pricing",
      "1st Level Support",
      "Brand, Marketing & Sales",
      "Billing & Forderungseinzugsmanagement",
    ],
    keyBenefits: [
      { title: "Tarifpreise frei wählbar", body: "Eigene Pricing-Logik mit individueller Marge" },
      { title: "Eigener Brand & Look", body: "Vollständig im eigenen CI vermarktet" },
      { title: "Direkter Kundenkontakt", body: "Kundenhotline beim Partner gerouted" },
      { title: "Skalierbar", body: "B2C, B2B und Projektgeschäft kombinierbar" },
    ],
    ownershipLevel: 3,
  },
  {
    id: "white-label-mvno",
    step: 4,
    name: "White Label MVNO Plattform",
    tagline: "Volle Customer Ownership — newSIM liefert nur die Kernplattform.",
    description:
      "Volle Customer Ownership beim Partner — newSIM stellt nur die Kernplattform im Hintergrund und die Telefónica-Anbindung.",
    idealFor: "Partner mit eigenem Ambitionslevel als vollwertiger virtueller Mobilfunkanbieter",
    newSimResponsibilities: ["Plattform-Betrieb", "Telefónica-Anbindung"],
    partnerResponsibilities: [
      "Customer Ownership als MVNO",
      "Tarif-Portfolio",
      "Customer Service End-to-End",
      "Regulierung BNetzA",
    ],
    ownershipLevel: 4,
  },
];

export const comparisonTable = {
  title: "Branded Reseller vs. White Label Partner im direkten Vergleich",
  note: '"optional" = beim White Label Modell wählbar',
  columns: ["Funktion", "Branded Reseller", "White Label Partner", "Anmerkung"],
  rows: [
    ["Commercial Ownership", "newSIM", "Partner", "Wer besitzt die Kundenbeziehung"],
    ["Forderungseinzug", "newSIM", "Partner", "Inkasso & Mahnwesen"],
    ["Tarif-Portfolio", "newSIM", "Partner", "GB-Volumen / Bandbreite"],
    ["Brand (Logo)", "Partner", "Partner", "Logo / Tarifname"],
    ["1st Level Support", "newSIM", "optional", "Eigene Kundenhotline beim Partner"],
    ["2nd Level Support", "newSIM", "newSIM", "Technische Eskalation"],
    ["Order Management", "newSIM", "optional", "Web-Interface oder API"],
    ["Billing & Rechnung", "newSIM", "optional", "Rechnungsservice & Versand"],
    ["Landing Page", "newSIM", "optional", "Bestellstrecke"],
    ["Marketing & Sales", "Partner", "Partner", "Abschlussprovision an Partner"],
  ],
};

export const capabilities = {
  eyebrow: "Was newSIM übernimmt",
  title: "Die komplette Betriebs- und Regulierungslast — Sie liefern Marke und Vertrieb.",
  items: [
    { title: "Netz", body: "MVNO im Netz der Telefónica, LTE/5G, bundesweite Abdeckung." },
    { title: "Tarife", body: "200+ Tarife im White-Label-Portfolio, 5–500 GB, Allnetflat & SMS-Flat." },
    { title: "Billing", body: "Billing & Rating inkl. CDR, Rufnummern-Verwaltung, Inkasso." },
    { title: "SIM / eSIM", body: "SIM-Karten-Logistik, Aktivierung, Refurbishment & Retoure." },
    { title: "MNP", body: "Rufnummernportierung und Aktivierungsprozesse End-to-End." },
    { title: "Support", body: "1st & 2nd Level Support, Endkunden-Hotline, technische Eskalation." },
    { title: "Regulierung", body: "Diensteanbieter-Status gemäß TKG, BNetzA, TR-AAV, SARV-Server, Roaming." },
    { title: "Order Management", body: "Aktivierung, MNP und SIM-Logistik über die Telnology®-Plattform." },
    { title: "Reporting / API", body: "BSS/OSS-Schnittstellen mit Web-Interface und API-Anbindung." },
  ],
};

export const platform = {
  eyebrow: "Telnology® Plattform",
  title: "Eine Enabling-Plattform & BSS für alle Vertriebskanäle.",
  intro:
    "Die newSIM Telnology®-Plattform ist die Enabling-Plattform und das Business Support System (BSS) im Hintergrund — für B2C und B2B, über alle Vertriebskanäle hinweg.",
  channels: ["Online Shop", "CRM / Order", "White Label App", "API / Web Interface"],
  core: [
    { title: "Billing & Rating", body: "CDR · Rufnummern · Inkasso" },
    { title: "Customer Service", body: "1st & 2nd Level Support" },
    { title: "Order Management", body: "Activation · MNP · SIM-Logistik" },
    { title: "Reporting & API", body: "BSS / OSS · Schnittstellen" },
  ],
  network: [
    "Telefónica Netzwerk (LTE/5G)",
    "BNetzA Diensteanbieter-Status",
    "TR-AAV · SARV-Server · Roaming",
  ],
};

export const businessAreas = {
  eyebrow: "Drei Geschäftsbereiche unter einem Dach",
  title: "White-Label-Mobilfunk, eigene Endkunden-App und internationale Reise-eSIM.",
  areas: [
    {
      badge: "B2B2C · White Label",
      title: "White-Label Mobilfunk",
      body: "Mit BREKO eG und Telefónica entwickelt — ohne Mindest-Kommitment. Carrier und Stadtwerke bieten ein eigenes Mobilfunk- und IoT/M2M-Portfolio an.",
      tags: ["Mobilfunk", "IoT / M2M", "Voice & Daten"],
    },
    {
      badge: "B2C · Marke",
      title: "easyTEL App",
      body: "Eigene Mobilfunk-App: Handyverträge vollständig per App abschließen, wechseln, kündigen und managen — als digitale Bestellstrecke im White-Label-Format.",
      tags: ["End-to-End", "Self-Service", "White-Label fähig"],
    },
    {
      badge: "International",
      title: "One Mobile World",
      body: "Günstige Reise-eSIM für mehr als 200 Länder mit individuellen Datenpaketen — als PrePaid-Produkt jederzeit wiederaufladbar.",
      tags: ["200+ Länder", "eSIM", "PrePaid"],
    },
  ],
};

export const socialProof = {
  eyebrow: "Referenzen",
  title: "30+ White-Label-Partner unter Vertrag",
  body: "Stadtwerke, regionale ISPs, Energieversorger und etablierte Carrier vertrauen auf die Telnology®-Plattform — jeder mit eigener Marke vermarktet.",
  disclaimer: "Logo-Darstellung als Platzhalter. Originale Partner-Logos auf Anfrage und mit Freigabe einsetzbar.",
};

export const solutions = {
  eyebrow: "Solutions",
  title: "Vier Lösungen für Ihr Portfolio.",
  items: [
    {
      title: "Flying Start Glasfaser",
      badge: "B2B Special",
      body: "Internet-Ersatzprodukt Mobil überbrückt die Zeit bis zum aktiven Glasfaseranschluss — 500 GB, 100 Mbit/s Download im 5G-Netz, Aktivierung bei Glasfaser-Abschluss ohne Wartezeit.",
      points: ["Flexibel einsetzbar", "Keine Wartezeit", "Sofortige Aktivierung", "Passgenaue Laufzeit in Eigenregie"],
    },
    {
      title: "B2B Connectivity",
      badge: "Business Solutions",
      body: "Individuelle Tarifangebote für den Geschäftskundenbereich mit flexiblen Laufzeiten sowie Upgrade- und Downgrade-Möglichkeiten ganz nach Kundenwunsch.",
      points: ["Flexible Laufzeiten", "Upgrade & Downgrade", "Individuell konfigurierbar"],
    },
    {
      title: "IoT / M2M",
      badge: "White-Label Konnektivität",
      body: "Eigenes IoT-Portfolio für Konnektivitäts-Dienstleistungen in B2B, B2B2B und B2B2C — auf der Telnology®-Plattform mit eigener APN-Verbindung und maximaler Sicherheit.",
      points: ["SIM Diversity", "Secure Data Cloud", "National Roaming", "Private Networking", "Dynamic Datapooling"],
    },
    {
      title: "White Label App",
      badge: "Digital Distribution",
      body: "End-to-End Bestell- und Aktivierungsprozess auf easyTEL-Basis: Der Endkunde managt seinen Dienst vollständig selbst, der Partner vermarktet mit eigenem Brand im App Store und bei Google Play.",
      points: ["Eigene Tarife", "Eigenes Logo & Design", "Bestellen · Aktivieren · Verwalten · Kündigen"],
    },
  ],
};

export const iot = {
  eyebrow: "IoT-Modell",
  title: "Mobile Access, Mobile Back-up und M2M-Konnektivität.",
  concept:
    "newSIM stellt IoT- und M2M-Tarife auf der Telnology®-Plattform als White-Label-Modell zur Verfügung. Die Cloud-Infrastruktur bietet APN-Verbindungen mit maximaler Sicherheit für jeden Anwendungsfall.",
  features: [
    { title: "SIM Diversity", body: "Standard · M2M · Industrial · Embedded SIM" },
    { title: "Secure Data Cloud", body: "Eigene APN-Verbindung mit Verschlüsselung" },
    { title: "IoT Connectivity", body: "Anbindung von Devices über das Telefónica-Netz" },
    { title: "National Roaming", body: "Backup über alle deutschen Netze" },
    { title: "SMS Lock & Project Pricing", body: "Klassen-Restriktion & projektbezogene Preise" },
    { title: "Private Networking", body: "Auf Wunsch isolierte Netzsegmente pro Use Case" },
    { title: "Dynamic Datapooling", body: "Volumenoptimierung über das gesamte Portfolio" },
  ],
};

export const launchProcess = {
  eyebrow: "Launch-Prozess",
  title: "Einfacher kommerzieller Launch in 4–6 Wochen — live!",
  newsim: [
    "NDA für Vertrag & API",
    "Angebot Tarife & Provisionen",
    "Erstellung Vertragsentwurf",
    "Tarif-Templates & Produktinfoblätter",
    "Onboarding-Termin & Systemschulung (Webportal)",
    "Absprache Aktivierungsprozess (API oder Web)",
  ],
  partner: [
    "Ansprechpartner aus GF (Vertrag)",
    "Ansprechpartner aus Produktmanagement (Tarife)",
    "Ansprechpartner aus IT (API-Anbindung)",
    "Erst-Termin per Teams",
    "Bestellung SIM-Karten",
    "Starttermin: Launch Web / API",
  ],
};

export const legal = {
  eyebrow: "Rechtlicher Rahmen",
  title: "Klare Vertragsbeziehungen, ein direktes Endkundenverhältnis.",
  body: "newSIM ist Diensteanbieter gemäß TKG und hat ein direktes Endkundenverhältnis. Der Dienstleistungsvertrag zu Telefónica läuft im Namen und auf Rechnung der newSIM, Forderungseinzug und Inkasso liegen bei newSIM.",
  flows: [
    { title: "Vertragsbeziehung", body: "Endkunde ↔ newSIM (Endkundenvertrag) · newSIM ↔ Partner (White-Label-Vertrag)" },
    { title: "Rechnungsstrom", body: "Endkundenrechnung durch newSIM · Provisionsabrechnung an Partner" },
    { title: "Zahlungsstrom", body: "Einzug/Überweisung durch newSIM · Provisionszahlung an Partner" },
  ],
  note: "Provision ab 12 bzw. 24 Monaten Vertragslaufzeit.",
};

// ---------------------------------------------------------------------------
// PRICING — bewusst als eigener Block gehalten: leicht austauschbar/konfigurierbar,
// ohne dass Layout-Komponenten angefasst werden müssen. Werte 1:1 aus der
// Unternehmenspräsentation (Stand Juni 2026), exkl. MwSt. Auf der Website
// durchgängig als Richtwerte / Beispielkonditionen gekennzeichnet.
// ---------------------------------------------------------------------------
export const pricing = {
  disclaimer: "Beispielkonditionen exkl. MwSt., Stand Juni 2026 — unverbindliche Richtwerte für ein individuelles Angebot im persönlichen Gespräch.",

  tariffPortfolio: {
    title: "Vorleistungstarife bis 300 GB",
    subtitle: "Allnet Voice- & SMS-Flat — sofort verfügbar, mit DATA-Promos und individuellen Snacks",
    maxGb: 300,
    minGb: 5,
    bandwidthTiers: ["50 Mbit/s", "100 Mbit/s"],
    availableVolumesGb: [5, 15, 20, 25, 30, 35, 40, 45, 60, 120, 150, 300],
    dataPromo: "+5 GB · +10 GB · +15 GB",
    dataOption: "+100 GB",
    conditions: {
      provision: ["Aktivierungsprovision einmalig bei Abschluss"],
      flexibilitaet: [
        "Keine Mindestabnahme",
        "Wahlweise 12 oder 24 Monate Laufzeit",
        "Start ohne Volumen-Kommitment, Skalierung nach realem Bedarf",
        "Tarifwechsel Up-/Downgrade jederzeit innerhalb der Laufzeit möglich",
      ],
      weiterentwicklung: [
        "Jährlich neue Vorleistungsprodukte",
        "DATA-Promos an 26 Wochen im Jahr",
        "DATA-Snacks monatlich mehrfach buchbar",
      ],
    },
  },

  flyingStart: {
    title: "Flying Start Glasfaser — Tarifpakete",
    packages: [
      {
        name: "Basis",
        product: "SIM Only 300GB",
        inclusiveGb: 300,
        rebookable: "2× 100 GB je 12,61 € nachbuchbar",
        streamingHint: "ca. 60 Std. HD-Streaming/Monat",
        bandwidth: "100 Mbit/s (5G-Netz)",
        basePrice: "33,61 € mtl.",
        totalPrice: "58,82 € netto (inkl. 2× Nachbuchung, 500 GB gesamt)",
        term: "Flexibel",
      },
      {
        name: "Premium",
        product: "SIM Only 500GB",
        inclusiveGb: 500,
        rebookable: "2× 100 GB je 12,61 € nachbuchbar",
        streamingHint: "ca. 150 Std. HD-Streaming/Monat",
        bandwidth: "100 Mbit/s (5G-Netz)",
        basePrice: "50,42 € mtl.",
        totalPrice: "75,64 € netto (inkl. 2× Nachbuchung, 700 GB gesamt)",
        term: "Flexibel",
      },
    ],
    hardware: [
      {
        name: "TP-Link Komplettpaket",
        router: "TP-Link Archer NX200 (Standard)",
        inclusiveGb: 300,
        oneTime: "185,00 €",
        logistics: "15 €",
        refurbishment: "25 €",
        tariffHint: "zzgl. monatlicher Tarif ab 33,61 € mtl.",
      },
      {
        name: "FRITZ! Komplettpaket",
        router: "FRITZ! 6850 5G (5G · Wi-Fi 6, Standard)",
        inclusiveGb: 300,
        oneTime: "285,00 €",
        logistics: "15 €",
        refurbishment: "25 €",
        tariffHint: "zzgl. monatlicher Tarif ab 33,61 € mtl.",
      },
    ],
  },

  commercial: {
    title: "Kommerzielle Rahmenbedingungen",
    subtitle: "Klare Kostenstruktur — Break-Even ab ca. 500 aktiven Kunden im Full-Managed-Service",
    tiers: [
      {
        label: "Set Up",
        cadence: "einmalig",
        description: "Telnology-Plattform Bereitstellung, Anmeldung im Netz, Tarifeinrichtung",
        standard: "3.000 €",
        breko: "2.500 €",
      },
      {
        label: "Betrieb",
        cadence: "monatlich",
        description: "Betrieb der Plattform, 2nd Level Support, Clearing Services, MNP, Reporting",
        standard: "500 €",
        breko: "375 €",
      },
      {
        label: "Managed Service",
        cadence: "optional, pauschal",
        description: "1st & 2nd Level Support, Endkunden-Hotline, Aktivierungs-Service, Rechnungsservice, iFrame-Integration",
        standard: "275 €",
        breko: "225 €",
      },
      {
        label: "Launch-Paket",
        cadence: "einmalig",
        description: "Onboarding bis 500 Kunden inkl. Landingpage Branded Reseller",
        standard: "Nach Aufwand",
        breko: "Nach Aufwand",
      },
    ],
    footnote: "Break-Even ab ca. 500 aktiven Kunden · Full Managed Service bereits ab 600 € monatlich.",
  },

  brandedResellerMargin: "10% Marge (fixierte Abschlussprovision pro Vertrag)",
};

export const faq = [
  {
    q: "Brauchen wir eine eigene Netzinfrastruktur oder Regulierungs-Lizenz?",
    a: "Nein. newSIM ist bereits Diensteanbieter gemäß TKG und MVNO im Netz der Telefónica. Sie nutzen die bestehende regulatorische Abdeckung und das LTE/5G-Netz mit — ohne eigene BNetzA-Anmeldung.",
  },
  {
    q: "Wie lange dauert der Launch wirklich?",
    a: "Ein einfacher kommerzieller Launch ist in 4–6 Wochen live, parallel laufen NDA, Vertrag, Tarif-Templates und Onboarding auf beiden Seiten. Eine eigene Marke im Branded-Reseller-Modell ist in nur 4 Wochen startklar.",
  },
  {
    q: "Was, wenn wir zunächst nur wenig Risiko eingehen wollen?",
    a: "Alle Modelle starten ohne Mindest-Kommitment und ohne Volumen-Verpflichtung — Sie skalieren nach realem Bedarf. Das Branded-Reseller-Modell hat zusätzlich die geringste Komplexität, da newSIM fast die gesamte Wertschöpfung übernimmt.",
  },
  {
    q: "Wer hat die Kundenbeziehung — wir oder newSIM?",
    a: "Das hängt vom gewählten Modell ab. Im Branded-Reseller-Modell liegt die Endkundenbeziehung beim Partner, Commercial Ownership bei newSIM. Im White-Label- und MVNO-Modell liegt die Customer Ownership vollständig beim Partner.",
  },
  {
    q: "Können wir später von einem Modell ins nächste wechseln?",
    a: "Die vier Modelle sind als steigende Ausbaustufen konzipiert — von Full Service über Branded Reseller und White Label Reseller bis zur White Label MVNO Plattform. Der genaue Wechselpfad wird individuell im Gespräch geklärt.",
  },
  {
    q: "Was passiert mit Support-Anfragen unserer Endkunden?",
    a: "Je nach Modell übernimmt newSIM 1st- und/oder 2nd-Level-Support vollständig oder stellt ihn optional zur Verfügung, während der Partner die Kundenhotline im eigenen Namen betreibt — siehe Modellvergleich für die genaue Aufteilung.",
  },
  {
    q: "Wie werden Endkunden abgerechnet?",
    a: "Billing & Rating inkl. CDR, Rufnummern und Inkasso laufen über die Telnology®-Plattform. Je nach Modell rechnet newSIM im eigenen Namen ab (Branded Reseller) oder der Partner übernimmt Rechnungsservice und Forderungseinzug selbst (White Label).",
  },
  {
    q: "Was kostet der Einstieg?",
    a: "Die Konditionen bestehen aus einem einmaligen Set-up, einer monatlichen Betriebspauschale und optionalem Managed Service — Details dazu im Tarif-Bereich. Der Break-Even liegt bei ca. 500 aktiven Kunden im Full-Managed-Service. Genaue Konditionen besprechen wir im persönlichen Gespräch.",
  },
  {
    q: "Ist auch IoT/M2M-Konnektivität möglich, nicht nur klassischer Mobilfunk?",
    a: "Ja. Über die Telnology®-Plattform steht ein eigenes White-Label-IoT/M2M-Portfolio für B2B, B2B2B und B2B2C zur Verfügung — inklusive SIM Diversity, Secure Data Cloud und Dynamic Datapooling.",
  },
] as const;

export const finalCta = {
  title: "Bereit für Ihre eigene Mobilfunkmarke?",
  body: "In einem kurzen Gespräch klären wir, welches Modell zu Ihrem Ambitionslevel passt — vom Full Service bis zur eigenen MVNO-Plattform.",
};

export const contacts = [
  {
    name: "Matthias P. Engelke",
    role: "Geschäftsführer",
    email: "mpe@newsim.de",
    phone: "+49 178 5546622",
  },
  {
    name: "Alexandra Burger",
    role: "Sales & Business Development",
    email: "burger@newsim.de",
    phone: "+49 176 55904313",
  },
];
