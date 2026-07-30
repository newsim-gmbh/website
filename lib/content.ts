import type { IconName } from "@/components/Icon";

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
  calendlyUrl: "/kontakt",
  loginUrl: "https://cms.newsim.de",
};

export interface NavChild {
  label: string;
  href: string;
  description: string;
  icon: IconName;
  external?: boolean;
  comingSoon?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  intro?: string;
  children?: NavChild[];
}

export const mainNav: NavItem[] = [
  {
    label: "Produkte",
    href: "/produkte",
    intro: "Vier Modelle, ein Ambitionslevel-Baukasten.",
    children: [
      {
        label: "Business Solutions",
        href: "/produkte/business-solutions",
        description: "Individuelle B2B-Tarife, newSIM übernimmt den Betrieb.",
        icon: "support",
      },
      {
        label: "Branded Reseller",
        href: "/produkte/branded-reseller",
        description: "Eigene Marke in 4 Wochen, minimaler Aufwand.",
        icon: "flag",
      },
      {
        label: "White Label Reseller",
        href: "/produkte/white-label-reseller",
        description: "Eigenes Pricing, maximaler Gestaltungsspielraum.",
        icon: "sliders",
      },
      {
        label: "White Label MVNE Plattform",
        href: "/produkte/white-label-mvne",
        description: "Volle Customer Ownership, newSIM liefert die Kernplattform.",
        icon: "crown",
      },
    ],
  },
  {
    label: "Use Cases",
    href: "/use-cases",
    intro: "Passende Lösungen für Ihre Branche.",
    children: [
      {
        label: "Mobilfunk Fachhandel",
        href: "/use-cases/mobilfunk-fachhandel",
        description: "Eigenes Mobilfunk-Portfolio im Laden und online.",
        icon: "smartphone",
      },
      {
        label: "Stadtwerke, ISP & Glasfaseranbieter",
        href: "/use-cases/stadtwerke-isp-glasfaser",
        description: "Mobilfunk als Ergänzung zum Glasfaser-Portfolio.",
        icon: "building",
      },
      {
        label: "ITK Systemhäuser",
        href: "/use-cases/itk-systemhaeuser",
        description: "Mobilfunk im B2B-Portfolio für Geschäftskunden.",
        icon: "chip",
      },
      {
        label: "Banken & Versicherungen",
        href: "/use-cases/banken-versicherungen",
        description: "Mobilfunk als Cross-Selling-Produkt.",
        icon: "shield",
      },
      {
        label: "Influencer",
        href: "/use-cases/influencer",
        description: "Eigener Mobilfunktarif für die eigene Community.",
        icon: "link",
      },
      {
        label: "Vereine",
        href: "/use-cases/vereine",
        description: "Mobilfunk-Vorteile für Mitglieder und Fans.",
        icon: "flag",
      },
    ],
  },
  {
    label: "Eigenmarken",
    href: "/eigenmarken",
    intro: "Unsere eigenen Marken im Überblick.",
    children: [
      {
        label: "easyTEL",
        href: "https://www.easytel.de",
        description: "Eigene Mobilfunk-App für Endkunden.",
        icon: "smartphone",
        external: true,
      },
      {
        label: "One Mobile World",
        href: "https://onemobile.world",
        description: "Reise-eSIM für über 200 Länder.",
        icon: "wifi",
        external: true,
      },
      {
        label: "Hardware Shop",
        href: "#",
        description: "Endgeräte & Zubehör — in Kürze.",
        icon: "chip",
        comingSoon: true,
      },
      {
        label: "IoT / M2M Shop",
        href: "#",
        description: "IoT-Konnektivität — in Kürze.",
        icon: "layers",
        comingSoon: true,
      },
    ],
  },
  {
    label: "Developer",
    href: "/developer",
    intro: "Technische Anbindung an die Telnology®-Plattform.",
    children: [
      {
        label: "API",
        href: "/developer/api",
        description: "Order Management, Reporting & BSS/OSS-Schnittstellen.",
        icon: "chip",
      },
      {
        label: "Telnology®",
        href: "/developer/telnology",
        description: "Die Enabling-Plattform und ihre Architektur.",
        icon: "layers",
      },
    ],
  },
  {
    label: "Consulting",
    href: "/consulting",
    intro: "Strategische Beratung rund um Mobilfunk & Glasfaser.",
    children: [
      {
        label: "G2M-Strategie für MVNO",
        href: "/consulting/g2m-strategie-mvno",
        description: "Go-to-Market-Strategie für den eigenen Mobilfunk-Start.",
        icon: "chart",
      },
      {
        label: "Potentialanalyse Mobilfunk & Glasfaser",
        href: "/consulting/potentialanalyse-mobilfunk-glasfaser",
        description: "Marktpotential für Ihr Portfolio einschätzen.",
        icon: "pulse",
      },
      {
        label: "Sales-Strategie Online & Offline",
        href: "/consulting/sales-strategie-online-offline",
        description: "Vertriebsstrategie über alle Kanäle hinweg.",
        icon: "link",
      },
      {
        label: "Kupfer-Glasfaser-Transformation",
        href: "/consulting/kupfer-glasfaser-transformation",
        description: "Mobilfunk als Brücke bei der Netz-Transformation.",
        icon: "tower",
      },
    ],
  },
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
      icon: "sliders" as const,
    },
    {
      title: "Volle regulatorische Abdeckung",
      body: "newSIM ist Diensteanbieter gemäß TKG und übernimmt Support bei allen regulatorischen Themen bei der BNetzA.",
      icon: "shield" as const,
    },
    {
      title: "Eigene Mobile-as-a-Service-Plattform",
      body: "Als MVNO im Netz der Telefónica betreibt newSIM die Telnology®-Plattform als Enabling-Plattform & BSS für Partner.",
      icon: "layers" as const,
    },
  ],
};

export type ModelId = "full-service" | "branded-reseller" | "white-label-reseller" | "white-label-mvno";

export interface BusinessModel {
  id: ModelId;
  slug: string;
  navLabel: string; // Bezeichnung im Menü/als Seitentitel — kann von `name` abweichen
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
  icon: IconName;
}

export const models: BusinessModel[] = [
  {
    id: "full-service",
    slug: "business-solutions",
    navLabel: "Business Solutions",
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
    icon: "support",
  },
  {
    id: "branded-reseller",
    slug: "branded-reseller",
    navLabel: "Branded Reseller",
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
    icon: "flag",
  },
  {
    id: "white-label-reseller",
    slug: "white-label-reseller",
    navLabel: "White Label Reseller",
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
    icon: "sliders",
  },
  {
    id: "white-label-mvno",
    slug: "white-label-mvne",
    navLabel: "White Label MVNE Plattform",
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
    icon: "crown",
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
    { title: "Netz", body: "MVNO im Netz der Telefónica, LTE/5G, bundesweite Abdeckung.", icon: "wifi" as const },
    { title: "Tarife", body: "200+ Tarife im White-Label-Portfolio, 5–500 GB, Allnetflat & SMS-Flat.", icon: "tariff" as const },
    { title: "Billing", body: "Billing & Rating inkl. CDR, Rufnummern-Verwaltung, Inkasso.", icon: "invoice" as const },
    { title: "SIM / eSIM", body: "SIM-Karten-Logistik, Aktivierung, Refurbishment & Retoure.", icon: "simCard" as const },
    { title: "MNP", body: "Rufnummernportierung und Aktivierungsprozesse End-to-End.", icon: "portability" as const },
    { title: "Support", body: "1st & 2nd Level Support, Endkunden-Hotline, technische Eskalation.", icon: "support" as const },
    { title: "Regulierung", body: "Diensteanbieter-Status gemäß TKG, BNetzA, TR-AAV, SARV-Server, Roaming.", icon: "shield" as const },
    { title: "Order Management", body: "Aktivierung, MNP und SIM-Logistik über die Telnology®-Plattform.", icon: "clipboard" as const },
    { title: "Reporting / API", body: "BSS/OSS-Schnittstellen mit Web-Interface und API-Anbindung.", icon: "chart" as const },
  ],
};

export const platform = {
  eyebrow: "Telnology® Plattform",
  title: "Eine Enabling-Plattform & BSS für alle Vertriebskanäle.",
  intro:
    "Die newSIM Telnology®-Plattform ist die Enabling-Plattform und das Business Support System (BSS) im Hintergrund — für B2C und B2B, über alle Vertriebskanäle hinweg.",
  channels: ["Online Shop", "CRM / Order", "White Label App", "API / Web Interface"],
  core: [
    { title: "Billing & Rating", body: "CDR · Rufnummern · Inkasso", icon: "invoice" as const },
    { title: "Customer Service", body: "1st & 2nd Level Support", icon: "support" as const },
    { title: "Order Management", body: "Activation · MNP · SIM-Logistik", icon: "clipboard" as const },
    { title: "Reporting & API", body: "BSS / OSS · Schnittstellen", icon: "chart" as const },
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
      icon: "pulse" as const,
    },
    {
      title: "B2B Connectivity",
      badge: "Business Solutions",
      body: "Individuelle Tarifangebote für den Geschäftskundenbereich mit flexiblen Laufzeiten sowie Upgrade- und Downgrade-Möglichkeiten ganz nach Kundenwunsch.",
      points: ["Flexible Laufzeiten", "Upgrade & Downgrade", "Individuell konfigurierbar"],
      icon: "link" as const,
    },
    {
      title: "IoT / M2M",
      badge: "White-Label Konnektivität",
      body: "Eigenes IoT-Portfolio für Konnektivitäts-Dienstleistungen in B2B, B2B2B und B2B2C — auf der Telnology®-Plattform mit eigener APN-Verbindung und maximaler Sicherheit.",
      points: ["SIM Diversity", "Secure Data Cloud", "National Roaming", "Private Networking", "Dynamic Datapooling"],
      icon: "chip" as const,
    },
    {
      title: "White Label App",
      badge: "Digital Distribution",
      body: "End-to-End Bestell- und Aktivierungsprozess auf easyTEL-Basis: Der Endkunde managt seinen Dienst vollständig selbst, der Partner vermarktet mit eigenem Brand im App Store und bei Google Play.",
      points: ["Eigene Tarife", "Eigenes Logo & Design", "Bestellen · Aktivieren · Verwalten · Kündigen"],
      icon: "smartphone" as const,
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

// ---------------------------------------------------------------------------
// UNTERSEITEN — Use Cases, Developer, Consulting
// Platzhalterinhalte: bewusst allgemein gehalten, keine erfundenen Zahlen/
// Kundenreferenzen. Werden im nächsten Schritt durch finale Texte ersetzt.
// ---------------------------------------------------------------------------

export interface UseCase {
  slug: string;
  name: string;
  icon: IconName;
  heroTagline: string;
  challenge: string;
  solution: string;
  recommendedModelIds: ModelId[];
}

export const useCases: UseCase[] = [
  {
    slug: "mobilfunk-fachhandel",
    name: "Mobilfunk Fachhandel",
    icon: "smartphone",
    heroTagline: "Das eigene Mobilfunk-Portfolio im Laden und online erweitern.",
    challenge:
      "Platzhalter: Fachhändler brauchen ein wettbewerbsfähiges Mobilfunk-Portfolio, ohne selbst Netzbetreiber-Know-how oder eigene Regulierungs-Zulassung aufzubauen.",
    solution:
      "Platzhalter: Über die Telnology®-Plattform lässt sich ein eigenes Tarif-Portfolio direkt in die bestehende Verkaufsstrecke integrieren — im Laden wie im Online-Shop.",
    recommendedModelIds: ["branded-reseller", "white-label-reseller"],
  },
  {
    slug: "stadtwerke-isp-glasfaser",
    name: "Stadtwerke, ISP & Glasfaseranbieter",
    icon: "building",
    heroTagline: "Mobilfunk als natürliche Ergänzung zum Glasfaser-Portfolio.",
    challenge:
      "Platzhalter: Stadtwerke und regionale ISPs wollen ihr Glasfaser-Portfolio um Mobilfunk erweitern, um Kunden ganzheitlich zu binden — klassischerweise ein hoher regulatorischer und technischer Einstiegsaufwand.",
    solution:
      "Platzhalter: newSIM übernimmt Netzanbindung, Regulierung und Plattform-Betrieb, während der Partner sein Portfolio unter eigener Marke vermarktet — inklusive Flying-Start-Glasfaser-Lösung als Überbrückung bis zur FTTH-Aktivierung.",
    recommendedModelIds: ["white-label-reseller", "white-label-mvno"],
  },
  {
    slug: "itk-systemhaeuser",
    name: "ITK Systemhäuser",
    icon: "chip",
    heroTagline: "Mobilfunk als Baustein im B2B-Portfolio für Geschäftskunden.",
    challenge:
      "Platzhalter: ITK-Systemhäuser betreuen Geschäftskunden ganzheitlich — Mobilfunk fehlt oft als eigenständiger, margenstarker Baustein im Portfolio.",
    solution:
      "Platzhalter: Individuelle B2B-Tarife und IoT/M2M-Konnektivität lassen sich direkt in bestehende Kundenbeziehungen integrieren, ohne eigene Netzinfrastruktur.",
    recommendedModelIds: ["full-service", "branded-reseller"],
  },
  {
    slug: "banken-versicherungen",
    name: "Banken & Versicherungen",
    icon: "shield",
    heroTagline: "Mobilfunk als Cross-Selling- und Bindungsprodukt.",
    challenge:
      "Platzhalter: Banken und Versicherungen suchen nach zusätzlichen, alltagsrelevanten Produkten zur Kundenbindung — mit hohen Anforderungen an Regulierung und Markenauftritt.",
    solution:
      "Platzhalter: Ein vollständig White-Label-fähiges Mobilfunkprodukt lässt sich unter eigener Marke und im eigenen Compliance-Rahmen anbieten, während newSIM die regulatorische und technische Basis stellt.",
    recommendedModelIds: ["white-label-reseller", "white-label-mvno"],
  },
  {
    slug: "influencer",
    name: "Influencer",
    icon: "link",
    heroTagline: "Der eigene Mobilfunktarif für die eigene Community.",
    challenge:
      "Platzhalter: Creator mit großer Reichweite wollen ein eigenes, glaubwürdiges Produkt für ihre Community anbieten — ohne selbst ein Telekommunikationsunternehmen aufzubauen.",
    solution:
      "Platzhalter: Ein Branded-Reseller-Tarif ist in wenigen Wochen startklar und lässt sich vollständig unter eigenem Namen und Look & Feel vermarkten.",
    recommendedModelIds: ["branded-reseller"],
  },
  {
    slug: "vereine",
    name: "Vereine",
    icon: "flag",
    heroTagline: "Mobilfunk-Vorteile für Mitglieder und Fans.",
    challenge:
      "Platzhalter: Vereine suchen nach zusätzlichen Mitgliedervorteilen und Einnahmequellen, ohne eigenen administrativen Mehraufwand.",
    solution:
      "Platzhalter: Ein einfacher, unter Vereinsmarke vermarkteter Mobilfunktarif schafft einen Mitgliedervorteil mit geringem Betriebsaufwand für den Verein selbst.",
    recommendedModelIds: ["full-service", "branded-reseller"],
  },
];

export interface DeveloperPage {
  slug: string;
  name: string;
  icon: IconName;
  heroTagline: string;
  overview: string;
  capabilities: string[];
}

export const developerPages: DeveloperPage[] = [
  {
    slug: "api",
    name: "API",
    icon: "chip",
    heroTagline: "Order Management, Reporting und BSS/OSS-Schnittstellen.",
    overview:
      "Platzhalter: Die newSIM API bindet Order Management, Aktivierung, MNP und Reporting direkt an Ihre bestehenden Systeme an — als Alternative oder Ergänzung zum Web-Interface.",
    capabilities: [
      "Order Management & Aktivierung",
      "MNP-Prozesse",
      "Reporting & Datenexport",
      "BSS/OSS-Schnittstellen",
    ],
  },
  {
    slug: "telnology",
    name: "Telnology®",
    icon: "layers",
    heroTagline: "Die Enabling-Plattform hinter allen newSIM-Modellen.",
    overview:
      "Platzhalter: Telnology® ist die Business-Support-System- und Enabling-Plattform, die Vertriebskanäle, Billing, Customer Service und die Netzanbindung an Telefónica miteinander verbindet.",
    capabilities: [
      "Billing & Rating (CDR, Rufnummern, Inkasso)",
      "Customer Service (1st & 2nd Level)",
      "Order Management (Activation, MNP, SIM-Logistik)",
      "Reporting & API",
    ],
  },
];

export interface ConsultingService {
  slug: string;
  name: string;
  icon: IconName;
  heroTagline: string;
  forWhom: string;
  phases: { title: string; body: string }[];
  deliverables: string[];
}

export const consultingServices: ConsultingService[] = [
  {
    slug: "g2m-strategie-mvno",
    name: "G2M-Strategie für MVNO",
    icon: "chart",
    heroTagline: "Go-to-Market-Strategie für den eigenen Mobilfunk-Start.",
    forWhom: "Platzhalter: Für Unternehmen, die den Einstieg in ein eigenes Mobilfunk-Angebot strategisch vorbereiten wollen.",
    phases: [
      { title: "Analyse", body: "Platzhalter: Ausgangslage, Zielgruppe und Ambitionslevel klären." },
      { title: "Strategie", body: "Platzhalter: Modellwahl, Positionierung und Preislogik entwickeln." },
      { title: "Umsetzung", body: "Platzhalter: Launch-Fahrplan gemeinsam mit dem newSIM-Onboarding abstimmen." },
    ],
    deliverables: ["G2M-Strategiepapier", "Modell- und Positionierungsempfehlung", "Launch-Fahrplan"],
  },
  {
    slug: "potentialanalyse-mobilfunk-glasfaser",
    name: "Potentialanalyse Mobilfunk & Glasfaser",
    icon: "pulse",
    heroTagline: "Marktpotential für Ihr Portfolio einschätzen.",
    forWhom: "Platzhalter: Für Carrier, Stadtwerke und ISPs, die vor der Entscheidung stehen, ob und wie sich Mobilfunk in ihr Portfolio integrieren lässt.",
    phases: [
      { title: "Bestandsaufnahme", body: "Platzhalter: Bestehendes Portfolio und Kundenbasis analysieren." },
      { title: "Potentialbewertung", body: "Platzhalter: Marktpotential und Modelloptionen einordnen." },
      { title: "Empfehlung", body: "Platzhalter: Konkrete Handlungsempfehlung mit Modellvorschlag." },
    ],
    deliverables: ["Potentialanalyse-Report", "Modellempfehlung", "Wirtschaftlichkeitseinschätzung"],
  },
  {
    slug: "sales-strategie-online-offline",
    name: "Sales-Strategie Online & Offline",
    icon: "link",
    heroTagline: "Vertriebsstrategie über alle Kanäle hinweg.",
    forWhom: "Platzhalter: Für Partner, die ihr Mobilfunk-Portfolio sowohl online als auch über den stationären Vertrieb erfolgreich vermarkten wollen.",
    phases: [
      { title: "Kanalanalyse", body: "Platzhalter: Bestehende Vertriebskanäle und deren Potential bewerten." },
      { title: "Konzept", body: "Platzhalter: Vertriebsstrategie über Online- und Offline-Kanäle entwickeln." },
      { title: "Rollout", body: "Platzhalter: Umsetzung gemeinsam mit dem Vertriebsteam begleiten." },
    ],
    deliverables: ["Vertriebsstrategie-Konzept", "Kanal-Priorisierung", "Rollout-Plan"],
  },
  {
    slug: "kupfer-glasfaser-transformation",
    name: "Kupfer-Glasfaser-Transformation",
    icon: "tower",
    heroTagline: "Mobilfunk als Brücke bei der Netz-Transformation.",
    forWhom: "Platzhalter: Für Netzbetreiber, die Kunden während der Migration von Kupfer- auf Glasfaseranschlüsse überbrücken müssen.",
    phases: [
      { title: "Analyse", body: "Platzhalter: Betroffene Kundensegmente und Migrationszeitplan erfassen." },
      { title: "Konzept", body: "Platzhalter: Mobilfunk-Überbrückungslösung (z. B. Flying Start Glasfaser) einplanen." },
      { title: "Begleitung", body: "Platzhalter: Kommunikation und Rollout gemeinsam begleiten." },
    ],
    deliverables: ["Transformationskonzept", "Kommunikationsleitfaden", "Rollout-Begleitung"],
  },
];
