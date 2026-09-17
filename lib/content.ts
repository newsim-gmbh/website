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

// Trust-Leiste direkt unter dem Hero — sofortiger Vertrauensbeweis, bevor
// Zweifel entstehen (Qonto-Prinzip: Beweis vor Erklärung).
export const trustBar: { icon: IconName; text: string }[] = [
  { icon: "shield", text: "Diensteanbieter gemäß TKG" },
  { icon: "wifi", text: "MVNO im Netz der Telefónica" },
  { icon: "link", text: "30+ Kooperationspartner unter Vertrag" },
];

export const hero = {
  headline: "Ihre Mobilfunkmarke.\nSo viel Kontrolle – wie Sie wollen.",
  sub: "newSIM bietet Mobilfunk Konzepte als Managed Service im White-Label Format für die Partner im Netz der Telefónica an. Vom vollständig gemanagten Full Service als Branded Reseller bis zur eigenen White-Label-MVNO-Plattform — mit voller regulatorischer Abdeckung und ohne Mindest-Kommitment.",
};

export const businessValue = {
  eyebrow: "Warum Mobilfunk?",
  title: "Mobilfunk ist mehr als ein Zusatzprodukt — es ist ein Kundenbindungshebel.",
  intro:
    "Auf unserer Mobilfunk-as-a-Service-Plattform haben unsere Partner die Möglichkeit, ein individuelles Tarifportfolio für die Anforderungen aus jedem Kundensegment zu gestalten. Das gilt für Lösungen im Privatkunden- und Geschäftskundenbereich.",
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
  coreTitle: "Enabling-Plattform & Business Support System (BSS)",
  coreSubtitle: "Ein System für Produkt, Bestellung, Service und Abrechnung",
  core: [
    { title: "Product Management", body: "Tarife · Datenpromo · Roaming · Travel · IoT", icon: "tariff" as const },
    { title: "Order Management", body: "Activation · MNP · SIM-Logistik · Lettershop", icon: "clipboard" as const },
    { title: "Customer Service", body: "1st & 2nd Level Support · Self-Service-Portal", icon: "support" as const },
    { title: "Billing & Rating", body: "CDR · Bonität · Inkasso · Reporting", icon: "invoice" as const },
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
  disclaimer: "Alle Angaben zu Volumina, Bandbreiten und Leistungsumfang ohne Gewähr — individuelle Konditionen und Preise besprechen wir gerne im persönlichen Gespräch.",

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
      provision: [
        "Aktivierungsprovision einmalig bei Abschluss",
        "Branded-Reseller-Modell: laufende Airtime-Provision auf jeden aktiven Vertrag",
        "White-Label-Modell: Airtime-Provision zzgl. frei definierbarer eigener Marge",
      ],
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
    subtitle: "Konkrete Preise besprechen wir gerne im persönlichen Gespräch — hier der Leistungsumfang im Überblick.",
    packages: [
      {
        name: "Basis",
        product: "SIM Only 300GB",
        inclusiveGb: 300,
        rebookable: "2× 100 GB nachbuchbar",
        streamingHint: "ca. 60 Std. HD-Streaming/Monat",
        bandwidth: "100 Mbit/s (5G-Netz)",
        term: "Flexibel",
      },
      {
        name: "Premium",
        product: "SIM Only 500GB",
        inclusiveGb: 500,
        rebookable: "2× 100 GB nachbuchbar",
        streamingHint: "ca. 150 Std. HD-Streaming/Monat",
        bandwidth: "100 Mbit/s (5G-Netz)",
        term: "Flexibel",
      },
    ],
    hardware: [
      {
        name: "TP-Link Komplettpaket",
        router: "TP-Link Archer NX200 (Standard)",
        inclusiveGb: 300,
        tariffHint: "inkl. Versandlogistik & Refurbishment-Service",
      },
      {
        name: "FRITZ! Komplettpaket",
        router: "FRITZ! 6850 5G (5G · Wi-Fi 6, Standard)",
        inclusiveGb: 300,
        tariffHint: "inkl. Versandlogistik & Refurbishment-Service",
      },
    ],
  },

  commercial: {
    title: "Kommerzielle Rahmenbedingungen",
    subtitle: "Transparente Kostenstruktur mit Vorzugskonditionen für BREKO eG-Mitglieder — Details im persönlichen Gespräch.",
    tiers: [
      {
        label: "Set Up",
        cadence: "einmalig",
        description: "Telnology-Plattform Bereitstellung, Anmeldung im Netz, Tarifeinrichtung",
      },
      {
        label: "Betrieb",
        cadence: "monatlich",
        description: "Betrieb der Plattform, 2nd Level Support, Clearing Services, MNP, Reporting",
      },
      {
        label: "Managed Service",
        cadence: "optional, pauschal",
        description: "1st & 2nd Level Support, Endkunden-Hotline, Aktivierungs-Service, Rechnungsservice, iFrame-Integration",
      },
      {
        label: "Launch-Paket",
        cadence: "einmalig",
        description: "Onboarding bis 500 Kunden inkl. Landingpage Branded Reseller",
      },
    ],
    footnote: "BREKO eG-Mitglieder erhalten Vorzugskonditionen — individuelles Angebot im persönlichen Gespräch.",
  },
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

// ---------------------------------------------------------------------------
// RECHTLICHES — Impressum & Datenschutz. Generisches Section/Paragraph-Schema,
// da beide Texte als rechtsverbindliche Vorgabe 1:1 übernommen werden.
// ---------------------------------------------------------------------------

export interface LegalLinkPart {
  text: string;
  href: string;
}
export type LegalParagraph = string | (string | LegalLinkPart)[];

export interface LegalSection {
  heading?: string;
  small?: boolean; // kleinere Zwischenüberschrift (z.B. a), b), Unterabschnitte)
  paragraphs?: LegalParagraph[];
}

export interface LegalPageContent {
  title: string;
  intro?: LegalParagraph[];
  sections: LegalSection[];
}

export const impressum: LegalPageContent = {
  title: "Impressum",
  sections: [
    {
      heading: "Herausgeber",
      paragraphs: [
        "newsim GmbH\nWehrdaer Straße 120\n35041 Marburg",
        ["E-Mail: ", { text: "Kontaktformular", href: "/kontakt" }],
        ["Internet: ", { text: "newsim.de", href: "https://newsim.de" }],
        "Telefon: (06421) 620 36 111 (Kosten für ein Festnetzgespräch entsprechend Ihres Telefontarifes)",
      ],
    },
    {
      heading: "Geschäftsführer",
      paragraphs: ["Matthias Engelke, Norbert Schüppler"],
    },
    {
      heading: "Gesellschaft",
      paragraphs: [
        "Sitz der Gesellschaft: Marburg",
        "Amtsgericht – Registergericht: Marburg – HRB 6197",
        "Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE286456457",
      ],
    },
    {
      heading: "Urheberrechte und Haftung",
      paragraphs: ["Urheberrechte und Haftung liegen bei der newsim GmbH"],
    },
    {
      heading: "Aufsichtsbehörde",
      paragraphs: [
        "Bundesnetzagentur für Elektrizität, Gas, Telekommunikation, Post und Eisenbahnen\nTulpenfeld 4\n53113 Bonn",
      ],
    },
    {
      heading: "Online-Streitbeilegung",
      paragraphs: [
        [
          "Plattform der EU-Kommission zur Online-Streitbeilegung: ",
          { text: "http://ec.europa.eu/consumers/odr", href: "http://ec.europa.eu/consumers/odr" },
        ],
      ],
    },
    {
      heading: "Quelle-Icons",
      paragraphs: [
        "Pin map Icons erstellt von MansyGraphics – Flaticon; Route icons created by Freepik – Flaticon; Camera icons created by setiawanap – Flaticon; Privacy icons created by Freepik – Flaticon; Netzwerk icons created by Nualnoi Kinkaeo – Flaticon; Medical icons created by monkik – Flaticon; Industry 4.0 icons created by Freepik – Flaticon; Grüne energie icons created by Dreamstale – Flaticon; Tractor icons created by mavadee – Flaticon; Smart lock icons created by zero_wing – Flaticon; Home automation icons created by xnimrodx – Flaticon; Smart devices icons created by Warangkhana Sookruay – Flaticon; Smart car icons created by Freepik – Flaticon; Shop icons created by Payungkead – Flaticon",
      ],
    },
  ],
};

// Kompakte Fassung derselben Pflichtangaben für den Footer (2 Spalten).
export const companyLegal = {
  left: {
    heading: "Vertretungsberechtigte Geschäftsführer:",
    lines: [
      "Matthias Engelke, Norbert Schüppler",
      "",
      "Amtsgericht Marburg HRB 6197",
      "Sitz der Gesellschaft: Marburg",
      "Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE286456457",
    ],
  },
  right: {
    heading: "Aufsichtsbehörde:",
    lines: [
      "Bundesnetzagentur für Elektrizität, Gas, Telekommunikation, Post und Eisenbahnen",
      "Tulpenfeld 4 | 53113 Bonn",
    ],
  },
};

export const datenschutz: LegalPageContent = {
  title: "Datenschutzhinweise",
  intro: [
    "Die newsim GmbH nimmt den Schutz der privaten Daten ernst. Die besondere Beachtung der Privatsphäre bei der Verarbeitung persönlicher Daten ist daher ein wichtiges Anliegen.",
    "Die Zusammenstellung der Informationen auf unserem Webauftritt oder App erfolgt mit der gebotenen Sorgfalt. Gleichwohl übernehmen wir keinerlei Haftung, aus welchem Rechtsgrund auch immer, für die Richtigkeit, Aktualität und Vollständigkeit der übermittelten Informationen. Wir behalten uns das Recht vor, die auf dieser Website angebotenen Informationen, Produkte oder Dienstleistungen ohne gesonderte Ankündigung jederzeit zu verändern oder zu aktualisieren.",
  ],
  sections: [
    {
      heading: "1. Links zu anderen Websites",
      paragraphs: [
        "Unser Online-Angebot enthält Links zu Webseiten anderer Anbieter, auf die sich diese Datenschutzerklärung nicht erstreckt. Wir haben Links zu anderen Seiten gelegt. Für alle Links gilt, dass wir keinen Einfluss auf die Gestaltung und die Inhalte dieser Seiten haben. Wir distanzieren uns hiermit ausdrücklich von allen Inhalten aller gelinkten Seiten auf unserer Homepage oder der easyTel Webseite bzw. App und machen uns ihre Inhalte nicht zu Eigen. Diese Erklärung gilt für alle auf unserer Homepage und der easyTel Webseite/App angebrachten Links zu externen Seiten.",
      ],
    },
    {
      heading: "2. Verantwortliche Stelle",
      paragraphs: [
        "Für die gesetzeskonforme Verarbeitung ihrer personenbezogenen Informationen ist die folgende Stelle verantwortlich:",
        "newsim GmbH\nWehrdaer Str.120\n35041 Marburg",
      ],
    },
    {
      heading: "3. Personen bezogene Daten und Verwendungszweck",
      paragraphs: [
        "Personen bezogene Daten sind Daten, welche auf eine natürliche Person rückschließen lassen. Beispiele hierfür sind: Name, Adresse, Postanschrift, Telefonnummer, E-Mail-Adresse etc.",
        "Diese Daten werden im Zusammenhang mit dem Vertragsabschluss erhoben. Mit Ihrer Unterschrift willigen Sie in die Verarbeitung der Daten zur Vertragserfüllung freiwillig ein. Solche personenbezogenen Daten (Bestandsdaten) werden ausschließlich zur Abwicklung eines Vertragsverhältnisses erhoben.",
        "Verkehrsdaten werden erhoben, um in Anspruch genommene Dienste technisch durchzuführen und abzurechnen.",
        "Für den Betroffenen besteht die Verpflichtung, die erforderlichen personenbezogenen Daten im gesetzlichen Rahmen bereitzustellen, da ansonsten die Durchführung des Vertragsverhältnisses mit der verantwortlichen Stelle nicht durchgeführt werden kann.",
      ],
    },
    {
      heading: "4. Dauer der Speicherung personenbezogener Daten",
      paragraphs: [
        "Personenbezogene Daten werden nur solange vorgehalten, wie es der genannte Zweck vorsieht oder dies gesetzliche Aufbewahrungsfristen vorschreiben. Nach Ablauf der Aufbewahrungsfrist werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind oder es andere gesetzliche Vorgaben greifen.",
      ],
    },
    {
      heading: "5. Rechtsgrundlage der Verarbeitung",
      paragraphs: [
        "Persönliche Daten werden unter anderem gemäß den Bestimmungen der EU-DSGVO, des BDSG, des TKG sowie des Telemediengesetzes verarbeitet. Wir beziehen uns dabei auf die schriftliche Einwilligung des Betroffenen sowie die Erfüllung eines Vertragsverhältnisses. Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des Wohlergehens unserer Mitarbeiter und unseres Unternehmens.",
      ],
    },
    {
      heading: "6. Weitergabe personenbezogener Daten",
      paragraphs: [
        "Je nach angebotenem Service können Sie personenbezogene Daten über unser Portal abrufen. Wir geben die Informationen ausschließlich im Zuge der erforderlichen Vertragserfüllung weiter. Übermittlungen Ihrer personenbezogenen Daten an Adresshändler etc. erfolgen grundsätzlich nicht. Übermittlungen personenbezogener Daten an staatliche Einrichtungen und Behörden erfolgen ausschließlich im Rahmen zwingender Rechtsvorschriften.",
      ],
    },
    {
      heading: "7. Bestehen einer automatisierten Entscheidungsfindung",
      paragraphs: [
        "Unser Unternehmen verzichtet auf eine automatische Entscheidungsfindung oder ein Profiling auf der Basis Ihrer personenbezogenen Daten.",
      ],
    },
    {
      heading: "8. Einsatz von Cookies",
      paragraphs: [
        "Wir setzen Cookies – kleine Dateien mit Konfigurationsinformationen – ein. Sie helfen dabei, benutzerindividuelle Einstellungen zu ermitteln und spezielle Benutzerfunktionen zu realisieren. Sie können durch die Einstellung in Ihrem Browser die Nutzung von Cookies verhindern. Dies begrenzt allerdings einige benutzerdefinierten Eigenschaften und Einstellungen. Wir verwenden auf unserer Website darüber hinaus Cookies, die eine Analyse Ihres Surfverhaltens ermöglichen. Die in diesem Rahmen erhobenen Daten werden durch technische Vorkehrungen pseudonymisiert. Auf diese Weise können folgende Daten übermittelt werden:",
        "– Häufigkeit von Seitenaufrufen\n– Inanspruchnahme von Website-Funktionen",
        "Die Verwendung der Analyse-Cookies erfolgt zu dem Zweck, die Qualität unserer Website und ihre Inhalte zu verbessern. Durch die Analyse-Cookies erfahren wir, wie die Website genutzt wird und können so unser Angebot stetig optimieren. Wir setzen dabei Analyse-Software von Matomo auf der Website ein. Wir benutzen diese Informationen, um die Nutzung unseres Onlineangebotes auszuwerten, um Reports über die Aktivitäten innerhalb dieses Onlineangebotes zusammenzustellen und um weitere mit der Nutzung dieses Onlineangebotes und der Internetnutzung verbundene Dienstleistungen zu erbringen. Dabei können aus den verarbeiteten Daten pseudonyme Nutzungsprofile erstellt werden. Wir setzen Matomo nur mit aktivierter IP-Anonymisierung ein und respektieren die Do-not-Track Einstellung Ihres Browsers. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern.",
      ],
    },
    {
      heading: "Einwilligung mit Borlabs Cookie",
      paragraphs: [
        "Unsere Website nutzt die Consent-Technologie von Borlabs Cookie, um Ihre Einwilligung zur Speicherung bestimmter Cookies in Ihrem Browser oder zum Einsatz bestimmter Technologien einzuholen und diese datenschutzkonform zu dokumentieren. Anbieter dieser Technologie ist Borlabs – Benjamin A. Bornschein, Rübenkamp 32, 22305 Hamburg (im Folgenden Borlabs). Wenn Sie unsere Website betreten, wird ein Borlabs-Cookie in Ihrem Browser gespeichert, in dem die von Ihnen erteilten Einwilligungen oder der Widerruf dieser Einwilligungen gespeichert werden. Diese Daten werden nicht an den Anbieter von Borlabs Cookie weitergegeben. Die erfassten Daten werden gespeichert, bis Sie uns zur Löschung auffordern bzw. das Borlabs-Cookie selbst löschen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt. Details zur Datenverarbeitung von Borlabs Cookie finden Sie unter https://de.borlabs.io/kb/welche-daten-speichert-borlabs-cookie/.",
        "Der Einsatz der Borlabs-Cookie-Consent-Technologie erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz von Cookies einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.",
      ],
    },
    {
      heading: "9. Downloads",
      paragraphs: [
        "Der Download von Programmen aus dem Download-Bereich, sowie von anderen Seiten, erfolgt auf eigene Gefahr. Bitte prüfen Sie zu Ihrer Sicherheit geladene Programme nochmals mit Ihrem Virenscanner. Eine Haftung für Schäden und Beeinträchtigungen ist ausgeschlossen. Ein Anspruch auf Schadenersatz, sowie für Folgeschäden jeglicher Art, ist ausgeschlossen.",
      ],
    },
    {
      heading: "10. Externe Beiträge",
      paragraphs: [
        "Die Beiträge auf unserer Seite sind für jeden zugänglich. Beiträge müssen vor einer Veröffentlichung sorgfältig darauf überprüft werden, ob sie vertrauliche personenbezogene Angaben, Geschäftsinterna, rassistische, gewalttätige oder sexuell denunzierende Inhalte enthalten. Diese Beiträge werden möglicherweise in Suchmaschinen und Social Networks unkontrolliert verbreitet, erfasst und auch ohne gezielten Aufruf dieser Website weltweit zugreifbar.",
      ],
    },
    {
      heading: "11. Betroffenenrechte",
      paragraphs: [
        "Die Datenschutzgrundverordnung (DS-GVO) räumt Betroffenen zahlreiche Rechte ein, die die Verarbeitung der sie betreffenden Daten transparent machen und den Betroffenen zudem eine Kontrolle darüber geben sollen, welche Daten über sie verarbeitet werden. Insbesondere im elektronischen Verkehr ist zu beachten, dass die Informationen über einen Betroffenen nur dem jeweils tatsächlich Betroffenen zustehen. Die Rechte, die Betroffene gegenüber dem Verantwortlichen geltend machen können, ergeben sich aus den Art. 15 bis 22 DS-GVO.",
      ],
    },
    {
      heading: "a) Auskunftsrecht",
      small: true,
      paragraphs: [
        "Jede natürliche Person hat das Recht grundsätzlich innerhalb eines Monats nach Eingang der Anfrage beim Verantwortlichen eine Auskunft zu verlangen. Soweit die Übermittlung einer Datenkopie Rechte Dritter berührt, ist sie zu unterlassen. Auskünfte sind schriftlich auf dem Postweg anzufordern.",
      ],
    },
    {
      heading: "b) Recht auf Datenübertragbarkeit",
      small: true,
      paragraphs: [
        "Der Betroffene hat das Recht, von dem Verantwortlichen die Herausgabe seiner personenbezogenen Daten, welche der Betroffene dem Verantwortlichen bereitgestellt hat, zu verlangen, sofern die Datenverarbeitung auf einer Einwilligung oder einer vertraglichen Vereinbarung mit dem Betroffenen beruht.",
      ],
    },
    {
      heading: "c) Berichtigungsrecht",
      small: true,
      paragraphs: [
        "Der Betroffene hat das Recht, die Berichtigung seiner personenbezogenen Daten zu verlangen, sofern diese unrichtig sind. Die Berichtigung ist dem Betroffenen mitzuteilen. Soweit ein Datensatz mit Blick auf den Verarbeitungszweck unvollständig ist, kann ein Betroffener verlangen, dass weitere Daten gespeichert werden.",
      ],
    },
    {
      heading: "d) Recht auf Löschung („Recht auf Vergessenwerden“)",
      small: true,
      paragraphs: [
        "Der Betroffene hat das Recht, unter bestimmten Voraussetzungen vom Verantwortlichen die unverzügliche Löschung aller ihn betreffenden personenbezogenen Daten (auch von Kopien) zu verlangen.",
      ],
    },
    {
      heading: "e) Recht auf Einschränkung der Datenverarbeitung",
      small: true,
      paragraphs: [
        "Der Betroffene hat das Recht auf Einschränkung der Datenverarbeitung (d.h. die Markierung der gespeicherten personenbezogenen Daten zwecks Begrenzung ihrer künftigen Verarbeitung, so dass sie regelmäßig nur noch gespeichert nicht aber weiterverarbeitet werden dürfen).",
      ],
    },
    {
      heading: "f) Widerspruchsrecht (Art. 7 Abs. 3 DS-GVO und Art. 21 DS-GVO)",
      small: true,
      paragraphs: [
        "aa) Einwilligung: Der Betroffene hat das Recht, seine Einwilligung jederzeit frei für die Zukunft zu widerrufen. Damit fällt die darauf beruhende Rechtfertigung der Datenverarbeitung weg.",
        "bb) Widerspruchrecht nach Art. 21 DS-GVO: Soweit Daten gem. Art. 6 Abs.1 lit. f DS-GVO auf Grund berechtigter Interessen verarbeitet werden, können Betroffene unter Angabe konkreter Gründe, die sich aus ihrer besonderen Situation ergeben, hiergegen Widerspruch einlegen. Sofern Daten zur Durchführung von Direktwerbung verarbeitet werden, kann ein Betroffener auch ohne Angabe von Gründen widersprechen. Die weitere Verarbeitung zu Zwecken der Direktwerbung ist dann ausgeschlossen. Die Daten müssen auf Verlangen des Betroffenen gelöscht werden.",
      ],
    },
    {
      heading: "12. Hinweis",
      paragraphs: [
        "Die Betroffenen werden hiermit auf die Möglichkeit einer Beschwerde bei einer Aufsichtsbehörde und das Bestehen eines gerichtlichen Rechtsbehelfs hingewiesen.",
      ],
    },
    {
      heading: "13. Datenschutzbeauftragter",
      paragraphs: [
        "Als Datenschutzbeauftragter der newsim GmbH ist bestellt:",
        "de-bit Computer-Service GmbH\nSeestraße 11\n63571 Gelnhausen",
        ["E-Mail: ", { text: "datenschutz@de-bit.de", href: "mailto:datenschutz@de-bit.de" }],
      ],
    },
    {
      heading: "Analyse-Tools und Werbung",
    },
    {
      heading: "Google Tag Manager",
      small: true,
      paragraphs: [
        "Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking- oder Statistik-Tools und andere Technologien auf unserer Website einbinden können. Der Google Tag Manager selbst erstellt keine Nutzerprofile, speichert keine Cookies und nimmt keine eigenständigen Analysen vor. Er dient lediglich der Verwaltung und Ausspielung der über ihn eingebundenen Tools. Der Google Tag Manager erfasst jedoch Ihre IP-Adresse, die auch an das Mutterunternehmen von Google in die Vereinigten Staaten übertragen werden kann. Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer schnellen und unkomplizierten Einbindung und Verwaltung verschiedener Tools auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.",
      ],
    },
    {
      heading: "Google Analytics",
      small: true,
      paragraphs: [
        "Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers. Diese Daten werden von Google ggf. in einem Profil zusammengefasst, das dem jeweiligen Nutzer bzw. dessen Endgerät zugeordnet ist. Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z. B. Cookies oder Device-Fingerprinting).",
        "Die von Google erfassten Informationen über die Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: https://privacy.google.com/businesses/controllerterms/mccs/ .",
      ],
    },
    {
      heading: "IP Anonymisierung",
      small: true,
      paragraphs: [
        "Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IPAdresse wird nicht mit anderen Daten von Google zusammengeführt.",
      ],
    },
    {
      heading: "Browser Plugin",
      small: true,
      paragraphs: [
        "Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de.",
        "Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: https://support.google.com/analytics/answer/6004245?hl=de.",
      ],
    },
    {
      heading: "Auftragsverarbeitung",
      small: true,
      paragraphs: [
        "Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.",
      ],
    },
    {
      heading: "Google Remarketing",
      small: true,
      paragraphs: [
        "Diese Website nutzt die Funktionen von Google Analytics Remarketing. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Google Remarketing analysiert Ihr Nutzerverhalten auf unserer Website (z. B. Klick auf bestimmte Produkte), um Sie in bestimmte Werbe-Zielgruppen einzuordnen und Ihnen anschließend beim Besuch von anderen Onlineangeboten passende Webebotschaften auszuspielen (Remarketing bzw. Retargeting). Des Weiteren können die mit Google Remarketing erstellten Werbe-Zielgruppen mit den geräteübergreifenden Funktionen von Google verknüpft werden. Auf diese Weise können interessenbezogene, personalisierte Werbebotschaften, die in Abhängigkeit Ihres früheren Nutzungs- und Surfverhaltens auf einem Endgerät (z. B. Handy) an Sie angepasst wurden auch auf einem anderen Ihrer Endgeräte (z. B. Tablet oder PC) angezeigt werden. Wenn Sie über einen Google-Account verfügen, können Sie der personalisierten Werbung unter folgendem Link widersprechen: https://www.google.com/settings/ads/onweb/.",
        "Die Nutzung von Google Remarketing erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst effektiven Vermarktung seiner Produkte. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar. Weitergehende Informationen und die Datenschutzbestimmungen finden Sie in der Datenschutzerklärung von Google unter: https://policies.google.com/technologies/ads?hl=de.",
      ],
    },
    {
      heading: "Facebook Pixel",
      small: true,
      paragraphs: [
        "Diese Website nutzt zur Konversionsmessung der Besucheraktions-Pixel von Facebook. Anbieter dieses Dienstes ist die Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen. So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch können die Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden.",
        "Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten für eigene Werbezwecke, entsprechend der Facebook-Datenverwendungsrichtlinie verwenden kann. Dadurch kann Facebook das Schalten von Werbeanzeigen auf Seiten von Facebook sowie außerhalb von Facebook ermöglichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.",
        "Die Nutzung von Facebook-Pixel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an effektiven Werbemaßnahmen unter Einschluss der sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: https://www.facebook.com/legal/EU_data_transfer_addendum und https://de-de.facebook.com/help/566994660333381.",
        "Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook weitergeleitet werden, sind wir und die Facebook Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung der Daten und deren Weitergabe an Facebook. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter: https://www.facebook.com/legal/controller_addendum.",
        "Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die Datensicherheit der Facebook-Produkte ist Facebook verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten. In den Datenschutzhinweisen von Facebook finden Sie weitere Hinweise zum Schutz Ihrer Privatsphäre: https://de-de.facebook.com/about/privacy/.",
        "Sie können außerdem die Remarketing-Funktion „Custom Audiences“ im Bereich Einstellungen für Werbeanzeigen unter https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen deaktivieren.",
        "Dazu müssen Sie bei Facebook angemeldet sein. Wenn Sie kein Facebook Konto besitzen, können Sie nutzungsbasierte Werbung von Facebook auf der Website der European Interactive Digital Advertising Alliance deaktivieren: http://www.youronlinechoices.com/de/praferenzmanagement/.",
      ],
    },
  ],
};
