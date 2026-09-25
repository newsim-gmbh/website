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
  contactFormEmail: "max@newsim.de",
  contactFormCc: "service@newsim.de",
  web3formsAccessKey: "8c8823ab-072e-4aad-ad72-846019d14409",
};

export interface NavChild {
  label: string;
  href: string;
  description: string;
  icon: IconName;
  external?: boolean;
  comingSoon?: boolean;
  featured?: boolean;
  mockupImage?: string;
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
        featured: true,
      },
      {
        label: "White Label Reseller",
        href: "/produkte/white-label-reseller",
        description: "Eigenes Pricing, maximaler Gestaltungsspielraum.",
        icon: "sliders",
        featured: true,
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
        mockupImage: "easytel-mockup.webp",
      },
      {
        label: "One Mobile World",
        href: "https://onemobile.world",
        description: "Reise-eSIM für über 200 Länder.",
        icon: "wifi",
        external: true,
        mockupImage: "onemobile-mockup.webp",
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
        href: "/iot",
        description: "IoT-Konnektivität für Ihre Devices.",
        icon: "layers",
      },
    ],
  },
  {
    label: "Developer",
    href: "/developer",
    intro: "Technische Anbindung an die Telnology®-Plattform.",
    children: [
      {
        label: "Telnology®",
        href: "/developer/telnology",
        description: "Die Enabling-Plattform und ihre Architektur.",
        icon: "layers",
      },
      {
        label: "API",
        href: "/developer/api",
        description: "Order Management, Reporting & BSS/OSS-Schnittstellen.",
        icon: "chip",
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
  image: string;
  sourceName?: string;
  tagline: string;
  description: string;
  idealFor?: string;
  newSimResponsibilities: string[];
  partnerResponsibilities: string[];
  keyBenefits?: { title: string; body: string }[];
  process?: string[];
  faq?: { q: string; a: string }[];
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
    image: "produkt-business-solutions.webp",
    tagline: "Minimaler Aufwand — newSIM übernimmt praktisch alles.",
    description:
      "Individuelle Tarifangebote für den Geschäftskundenbereich. Flexible Laufzeiten mit Upgrade- und Downgrade-Möglichkeiten ganz nach Kundenwunsch — newSIM betreibt Tarif-Portfolio, Rufnummern-Management und SIM-Karten-Logistik direkt für den Geschäftskunden.",
    idealFor: "Geschäftskunden mit individuellem Mobilfunkbedarf, ohne eigenen Reseller-Aufwand",
    newSimResponsibilities: ["Tarif-Portfolio", "Rufnummern-Management", "SIM-Karten-Logistik"],
    partnerResponsibilities: ["Aktivierung / Deaktivierung", "Endkundenbeziehung"],
    process: [
      "Erstgespräch zur Abstimmung des Tarifbedarfs",
      "Individuelles Tarifportfolio wird für den Geschäftskundenbereich konfiguriert",
      "Rufnummern-Management und SIM-Karten-Logistik werden eingerichtet",
      "Aktivierung und Deaktivierung einzelner Verträge liegen ab sofort bei Ihnen",
    ],
    faq: [
      {
        q: "Wer betreut die Endkunden im Alltag?",
        a: "newSIM betreibt Tarif-Portfolio, Rufnummern-Management und SIM-Karten-Logistik direkt für den Geschäftskunden — Sie übernehmen Aktivierung, Deaktivierung und die Kundenbeziehung.",
      },
    ],
    ownershipLevel: 1,
    icon: "support",
  },
  {
    id: "branded-reseller",
    slug: "branded-reseller",
    navLabel: "Branded Reseller",
    step: 2,
    name: "Branded Reseller",
    image: "produkt-branded-reseller.webp",
    tagline: "Eigene Marke in 4 Wochen — newSIM trägt den Großteil der Wertschöpfung.",
    description:
      "Eigene Mobilfunkmarke in nur 4 Wochen startklar. newSIM übernimmt den Großteil der Wertschöpfung — der Partner liefert Brand und Vertrieb.",
    idealFor: "Mobilfunkfachhändler und Carrier zum Start — einfache Bestellstrecke, fertige Provision",
    newSimResponsibilities: ["Netzanbindung (Telefónica)", "Customer Service 1st Level", "Billing & Inkasso", "Tarif-Portfolio"],
    partnerResponsibilities: ["Brand / Marke", "Marketing & Sales", "Endkundenbeziehung"],
    keyBenefits: [
      { title: "Live in 4 Wochen", body: "Schnellster Weg zur eigenen Marke" },
      { title: "Airtime pro Monat", body: "Zzgl. einmaliger Abschlussprovision pro Vertrag" },
      { title: "Niedrige Komplexität", body: "newSIM übernimmt fast die gesamte Wertschöpfung" },
      { title: "Fertige Bausteine", body: "Landingpage, Bestellstrecke, Support gerouted" },
    ],
    process: [
      "Kickoff & Vertragsabschluss",
      "Branding: Landingpage und Bestellstrecke im eigenen Look & Feel",
      "Tarif-Portfolio und Provisionsmodell (Airtime-Provision + Abschlussprovision) werden eingerichtet",
      "Live-Start nach 4 Wochen",
    ],
    faq: [
      {
        q: "Wie schnell ist mein Tarif live?",
        a: "In der Regel innerhalb von 4 Wochen ab Vertragsabschluss.",
      },
      {
        q: "Wie verdiene ich als Branded Reseller?",
        a: "Über eine monatliche Airtime-Provision auf jeden aktiven Vertrag sowie eine einmalige Abschlussprovision pro Vertragsabschluss.",
      },
      {
        q: "Was muss ich selbst übernehmen?",
        a: "Sie liefern Marke, Marketing & Sales sowie die Endkundenbeziehung — newSIM übernimmt Netzanbindung, Customer Service 1st Level, Billing & Inkasso und das Tarif-Portfolio.",
      },
      {
        q: "Brauche ich eine eigene Kundenhotline?",
        a: "Nein. newSIM übernimmt den kompletten Customer Service im 1st Level für Ihre Endkunden.",
      },
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
    image: "produkt-white-label-reseller.webp",
    tagline: "Eigener Brand, eigenes Pricing, maximaler Gestaltungsspielraum.",
    description:
      "Customizing in Look & Feel mit voller Commercial Ownership. Der Partner gestaltet das Tarif-Portfolio aktiv mit und hat maximalen Marge- und Gestaltungsspielraum.",
    idealFor: "ISPs & Carrier, die ihr FTTH-Portfolio um Mobilfunk in Eigenregie erweitern wollen",
    newSimResponsibilities: [
      "Netzanbindung & Plattform-Betrieb (Telefónica)",
      "Billing & Inkasso",
      "2nd Level Support",
      "Regulierung BNetzA",
    ],
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
    process: [
      "Kickoff & Abstimmung Commercial Ownership",
      "Eigenes Pricing und Tarif-Portfolio werden gestaltet",
      "1st-Level-Support-Prozesse werden beim Partner aufgesetzt",
      "Live-Start, sobald Pricing, Support und Billing-Anbindung stehen",
    ],
    faq: [
      {
        q: "Wer legt die Tarifpreise fest?",
        a: "Sie — mit eigener Pricing-Logik und individueller Marge.",
      },
      {
        q: "Wer übernimmt den Support?",
        a: "1st Level Support liegt bei Ihnen, 2nd Level Support, Plattform-Betrieb und Regulierung (BNetzA) übernimmt newSIM.",
      },
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
    image: "produkt-white-label-mvne.webp",
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
    process: [
      "Kickoff & technische Anbindung",
      "Telefónica-Netzanbindung wird eingerichtet",
      "Eigenes Tarif-Portfolio und Customer-Service-Prozesse werden aufgebaut",
      "Live-Start, sobald Tarif-Portfolio, Customer Service und BNetzA-Regulierung stehen",
    ],
    faq: [
      {
        q: "Was liefert newSIM bei diesem Modell?",
        a: "Nur die Kernplattform im Hintergrund und die Telefónica-Anbindung — die volle Customer Ownership bleibt bei Ihnen.",
      },
      {
        q: "Wer übernimmt Regulierung und Support?",
        a: "Beides liegt vollständig bei Ihnen: Customer Service End-to-End sowie die Regulierung gegenüber der BNetzA.",
      },
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
    ["Brand (Logo)", "Partner", "Partner", "Logo / Tarifname"],
    ["Tarif-Portfolio", "newSIM", "Partner", "GB-Volumen / Bandbreite"],
    ["Landing Page", "newSIM", "optional", "Bestellstrecke"],
    ["Marketing & Sales", "Partner", "Partner", "Abschlussprovision an Partner"],
    ["Order Management", "newSIM", "optional", "Web-Interface oder API"],
    ["1st Level Support", "newSIM", "optional", "Eigene Kundenhotline beim Partner"],
    ["2nd Level Support", "newSIM", "newSIM", "Technische Eskalation"],
    ["Billing & Rechnung", "newSIM", "optional", "Rechnungsservice & Versand"],
    ["Forderungseinzug", "newSIM", "Partner", "Inkasso & Mahnwesen"],
    ["Commercial Ownership", "newSIM", "Partner", "Wer besitzt die Kundenbeziehung"],
  ],
};

export interface WhiteLabelBuildingBlock {
  id: string;
  title: string;
  body: string;
  icon: IconName;
}

export const whiteLabelBuildingBlocksSection = {
  eyebrow: "Optionale Bausteine",
  title: "Nicht nur die Plattform — auch die komplette Customer Journey.",
  intro:
    "Bestellstrecke, Website, App und Kundenportal lassen sich einzeln oder kombiniert dazubuchen — vollständig individualisierbar in Farben, Typographie, Logo/Icons/Bildern und Tonalität.",
};

export const whiteLabelBuildingBlocks: WhiteLabelBuildingBlock[] = [
  {
    id: "bestellstrecke",
    title: "Bestellstrecke",
    body: "Vollständiger Checkout in 5 Schritten — Warenkorb, Rufnummer, Bezahlung, Daten, Übersicht. Inklusive Express-Checkout (PayPal, Apple Pay), eSIM und Freunde-Code.",
    icon: "cart",
  },
  {
    id: "website",
    title: "Website",
    body: "Eigene Marken-Website mit Tarifübersicht, Vorteilen, FAQ und Support-Bereich — vollständig im eigenen Look & Feel.",
    icon: "monitor",
  },
  {
    id: "app",
    title: "App",
    body: "White-Label-App zur Tarifverwaltung: Datenvolumen, Rechnungen, Family-SIM, Freunde werben — im eigenen Branding für iOS und Android.",
    icon: "smartphone",
  },
  {
    id: "kundenportal",
    title: "Kundenportal",
    body: "Web-Login für Endkunden ohne App-Installation — Vertrag, Verbrauch und Optionen direkt im Browser verwalten.",
    icon: "userCircle",
  },
];

export const capabilities = {
  eyebrow: "Was newSIM übernimmt",
  title: "Sie liefern Marke und Vertrieb – newSIM übernimmt den Rest.",
  items: [
    { title: "Netz", body: "MVNO im Netz der Telefónica, LTE/5G, bundesweite Abdeckung.", icon: "wifi" as const },
    { title: "Tarife", body: "200+ Tarife im White-Label-Portfolio, 5–500 GB, Allnetflat & SMS-Flat.", icon: "tariff" as const },
    { title: "Billing", body: "Rating & Billing inkl. der CDR, Rufnummern-Verwaltung.", icon: "invoice" as const },
    { title: "SIM / eSIM", body: "SIM-Karten-Verwaltung und Endkundenlogistik & Retourenmanagement.", icon: "simCard" as const },
    { title: "MNP", body: "Rufnummernportierung und Aktivierungsprozesse End-to-End.", icon: "portability" as const },
    { title: "Support", body: "1st & 2nd Level Support, Endkunden-Hotline, technische Eskalation.", icon: "support" as const },
    { title: "Regulierung", body: "Diensteanbieter-Status gemäß TKG, BNetzA, TR-AAV, SARV-Server, Roaming.", icon: "shield" as const },
    { title: "Order Management", body: "Aktivierung, MNP und SIM-Logistik über die Telnology®-Plattform.", icon: "clipboard" as const },
    { title: "Partnerportal / API", body: "Web-Interface und API-Anbindung für die Kundenverwaltung.", icon: "chart" as const },
  ],
};

export const platform = {
  eyebrow: "Telnology® Plattform",
  title: "Ein System für Produkt, Bestellung, Service und Abrechnung für alle Vertriebskanäle.",
  intro:
    "Die newSIM Telnology®-Plattform ist die Enabling-Plattform und das Business Support System (BSS) im Hintergrund — für B2C und B2B, über alle Vertriebskanäle hinweg.",
  channelsLayer: {
    label: "Vertriebskanäle · B2C · B2B · B2B2C",
    items: ["Privatkunden", "Geschäftskunden", "ISP Carrier · Stadtwerke", "Mobilfunk Partner", "ITK Systemhäuser"],
  },
  coreLabel: "newSIM Telnology® Plattform",
  coreTitle: "Enabling-Plattform & Business Support System (BSS)",
  core: [
    { title: "Order Management", body: "Activation · MNP · SIM-Logistik · Lettershop", icon: "clipboard" as const },
    { title: "Product Management", body: "Tarife · Datenpromo · Roaming · Travel · IoT", icon: "tariff" as const },
    { title: "Customer Service", body: "1st & 2nd Level Support · Self-Service-Portal", icon: "support" as const },
    { title: "Billing & Rating", body: "CDR · Bonität · Inkasso · Reporting", icon: "invoice" as const },
  ],
  networkLayer: {
    label: "Netz · Regulierung · Schnittstellen",
    items: ["Telefónica Netzwerk (LTE/5G · IoT/M2M)", "BNetzA Diensteanbieter · TR-AAV", "API · Web Interface · SFTP"],
  },
};

export const businessAreas = {
  eyebrow: "Drei Geschäftsbereiche unter einem Dach",
  title: "White-Label-Mobilfunk, eigene Endkunden-App und internationale Reise-eSIM.",
  areas: [
    {
      badge: "B2B2C · White Label",
      title: "White-Label Mobilfunk",
      body: "Mit der Telefónica ohne Mindest-Kommitment konzipiert. Alle Partner bieten ihr eigenes Mobilfunk-Portfolio an.",
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
  body: "Stadtwerke, regionale ISPs, Mobilfunkhändler, Energieversorger und etablierte Carrier vertrauen auf die Telnology®-Plattform — jeder vermarktet seinen eigenen Brand.",
  logos: [
    { name: "4YOU", file: "4YOU.png" },
    { name: "ANTEC Servicepool", file: "ANTEC.png" },
    { name: "EVF", file: "EVF.png" },
    { name: "EnoCom", file: "Enocom.png" },
    { name: "evoxa new media", file: "Evoxa.png" },
    { name: "GIGA5", file: "GIGA5.png" },
    { name: "Stadtwerke Geesthacht", file: "Geesthacht.png" },
    { name: "Stadtwerke Rostock", file: "Rostock.png" },
    { name: "Stiegeler", file: "Stiegeler.png" },
    { name: "TeGe Deutschland", file: "TeGe.png" },
    { name: "Telefónica", file: "Telefonica.png" },
    { name: "Telgea", file: "Telga.png" },
    { name: "Waldfunk", file: "Waldfunk-Logo_positiv.svg" },
    { name: "easyTEL", file: "easytel_transparent_logo.svg" },
    { name: "fenertalk", file: "fenertalk.png" },
    { name: "galatalk", file: "galatalk.png" },
    { name: "K-NET Telekommunikation", file: "k-net.png" },
    { name: "mps communication", file: "mps.png" },
    { name: "One Mobile", file: "one-mobile.png" },
    { name: "read+talk", file: "read+talk.png" },
    { name: "Stadtwerke Neuwied", file: "swn.png" },
    { name: "SWN — Stadtwerke Neumünster", file: "swn2.png" },
    { name: "SWP", file: "swp.png" },
  ],
};

export const launchProcess = {
  eyebrow: "Launch-Prozess",
  title: "Kommerzieller Launch — paralleles Onboarding",
  subtitle: "Exemplarischer Projektablauf mit Meilensteinen und den Ressourcen, die Sie als Partner stellen.",
  phases: [
    {
      week: "Woche 0–1",
      title: "Vertragsbasis",
      newsim: ["NDA für Vertrag & API", "Angebot Tarife & Provisionen"],
      partner: "Ansprechpartner aus der Geschäftsleitung",
    },
    {
      week: "Woche 2–3",
      title: "Tarife",
      newsim: ["Tarife, Retailpricing, Provisionen, Bestellstrecke"],
      partner: "Ansprechpartner aus dem Produktmanagement",
    },
    {
      week: "Woche 3–4",
      title: "Onboarding",
      newsim: ["Webportaleinrichtung, Systemschulung Telnology und API"],
      partner: "Ansprechpartner aus der IT",
    },
    {
      week: "Woche 4–6",
      title: "Launch",
      newsim: ["Schulung Aktivierungs- und Kundenprozesse zum Vermarktungsstart"],
      partner: "Ansprechpartner aus dem Vertrieb für einen Teamcall",
    },
  ],
  partnerEffort:
    "Drei benannte Ansprechpartner (Geschäftsführung, Produktmanagement, IT) — keine eigene Technik, keine eigene Regulierung, keine SIM-Logistik.",
  milestone: {
    duration: "4–6 Wochen",
    body: "Vom unterzeichneten NDA bis zum kommerziellen Launch der eigenen Mobilfunkmarke.",
  },
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
    title: "Vorleistungstarife bis 500 GB",
    subtitle: "Allnet Voice- & SMS-Flat — sofort verfügbar, mit DATA-Promos und individuellen Snacks",
    maxGb: 300,
    maxGbWithOption: 500,
    minGb: 5,
    bandwidthTiers: ["50 Mbit/s", "100 Mbit/s"],
    availableVolumesGb: [5, 15, 20, 25, 30, 35, 40, 45, 60, 120, 150, 300],
    dataPromo: "+5 GB · +10 GB · +15 GB",
    dataOption: "+100 GB (bis zu 2× buchbar)",
    conditions: {
      provision: [
        "Aktivierungsprovision einmalig bei Abschluss",
        "Branded-Reseller-Modell: fixe monatliche Airtime-Provision auf jeden aktiven Vertrag",
        "White-Label-Modell: variable Airtime-Provision je nach definiertem eigenen Retailpreis",
      ],
      flexibilitaet: [
        "Keine Mindestabnahme",
        "Tariflaufzeiten frei wählbar zwischen 1 und 24 Monaten",
        "Start ohne Volumen-Kommitment, Skalierung nach realem Bedarf",
        "Tarifwechsel Up-/Downgrade-Möglichkeit",
      ],
      weiterentwicklung: [
        "Jährlich neue Vorleistungsprodukte",
        "Daten-Promos für Vertriebsaktionen",
        "Daten-Snacks nachbuchbar",
        "Internationale Roaming-Optionen",
        "Extra Reise-eSIM buchbar",
      ],
    },
  },

  flyingStart: {
    title: "Flying Start Glasfaser — Mobile Broadband",
    subtitle:
      "Die Komplett-Lösung überbrückt die Zeit bis zum aktiven Glasfaseranschluss. Konkrete Preise besprechen wir gerne im persönlichen Gespräch — hier der Leistungsumfang im Überblick.",
    highlights: [
      {
        title: "Flexibel einsetzbar",
        points: ["Keine Wartezeit", "Sofortige Aktivierung", "Passgenaue Laufzeit in Eigenregie"],
        icon: "bolt" as const,
      },
      { title: "5G Router", points: ["FRITZ!", "TP-Link"], icon: "wifi" as const },
      {
        title: "Telefónica-Netz",
        points: ["50 bis 150 Mbit/s Download", "Bundesweite Abdeckung"],
        icon: "tower" as const,
      },
      {
        title: "Für alle Kunden",
        points: ["B2C – Ersatzlösung bis FTTH aktiv", "B2B – Backup Internet temporär", "Projekte – Mobile Router Lösungen"],
        icon: "layers" as const,
      },
      {
        title: "Endkundenlogistik",
        points: ["Direktversand", "Router Service", "Refurbishment"],
        icon: "portability" as const,
      },
      {
        title: "Commercial Ownership",
        points: ["Volle Kontrolle beim Partner", "Upgrade-Optionen für Endkunden"],
        icon: "crown" as const,
      },
    ],
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
        volumeHint: "300 GB od. 500 GB wahlweise",
        tariffHint: "inkl. Versandlogistik, Retourenmanagement & Refurbishment-Service",
      },
      {
        name: "FRITZ! Komplettpaket",
        router: "FRITZ! 6850 5G (5G · Wi-Fi 6, Standard)",
        volumeHint: "300 GB od. 500 GB wahlweise",
        tariffHint: "inkl. Versandlogistik, Retourenmanagement & Refurbishment-Service",
      },
    ],
  },

  iotM2m: {
    title: "IoT- & M2M-Plattform",
    subtitle:
      "newSIM stellt IoT- und M2M-Tarife auf der Telnology®-Plattform als White-Label-Modell zur Verfügung — für Konnektivitäts-Dienstleistungen im B2B, B2B2B und B2B2C. Unabhängig vom gewählten Geschäftsmodell: Branded Reseller, White Label Reseller oder White Label MVNO-Plattform.",
    highlights: [
      { title: "SIM Diversity", points: ["Standard · M2M · Industrial · Embedded SIM"], icon: "simCard" as const },
      { title: "IoT Connectivity", points: ["Anbindung von Devices über das Telefónica-Netz"], icon: "wifi" as const },
      { title: "Secure Data Cloud", points: ["Eigene APN-Verbindung mit Verschlüsselung"], icon: "shield" as const },
      { title: "Private Networking", points: ["Auf Wunsch isolierte Netzsegmente pro Use Case"], icon: "layers" as const },
      { title: "National Roaming", points: ["Backup über alle deutschen Netze"], icon: "tower" as const },
      { title: "Dynamic Datapooling", points: ["Volumenoptimierung über das gesamte Portfolio"], icon: "sliders" as const },
      { title: "SMS Lock & Project Pricing", points: ["Klassen-Restriktion & projektbezogene Preise"], icon: "tariff" as const },
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
    a: "Rechtlich ist newSIM als Diensteanbieter gemäß TKG bis zur White-Label-MVNO-Plattform der direkte Vertragspartner des Endkunden — Endkundenvertrag und Rechnung laufen im Namen newSIM, der Partner erhält dafür Provision. Was sich unterscheidet, ist die Commercial Ownership (Marke, Pricing): Beim Branded Reseller liegt sie bei newSIM, beim White Label Reseller beim Partner. Erst bei der White-Label-MVNO-Plattform übernimmt der Partner als eigener Diensteanbieter auch den direkten Endkundenvertrag selbst.",
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
    a: "Das Rating und Billing der CDRs erfolgt über die Telnology®-Plattform. Je nach Modell übernimmt entweder newSIM (Branded Reseller) oder der Partner (White Label) das Forderungseinzugsmanagement — beim Partner erfolgen Rechnungsservice und Forderungseinzugsmanagement dabei im Namen von newSIM.",
  },
  {
    q: "Was kostet der Einstieg?",
    a: "Die Konditionen bestehen aus einem einmaligen Set-up, einer monatlichen Betriebspauschale und optionalem Managed Service — Details dazu im Tarif-Bereich. Genaue Konditionen besprechen wir im persönlichen Gespräch.",
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

export const contacts: { name: string; role: string; email: string; phone?: string }[] = [
  {
    name: "newSIM",
    role: "Partnermanagement",
    email: "service@newsim.de",
    phone: "(06421) 620 36 111",
  },
];

// ---------------------------------------------------------------------------
// UNTERSEITEN — Use Cases, Developer, Consulting
// Platzhalterinhalte: bewusst allgemein gehalten, keine erfundenen Zahlen/
// Kundenreferenzen. Werden im nächsten Schritt durch finale Texte ersetzt.
// ---------------------------------------------------------------------------

export interface QuadPlayComparison {
  eyebrow: string;
  title: string;
  subtitle: string;
  triplePlay: string[];
  quadPlay: string[];
  quadPlayLabel: string;
  points: { title: string; body: string }[];
}

export interface UseCase {
  slug: string;
  name: string;
  image: string;
  icon: IconName;
  heroTagline: string;
  challenge: string;
  solution: string;
  painPoints?: string[];
  solutionSteps?: string[];
  revenueStreams?: {
    eyebrow: string;
    title: string;
    items: { icon: IconName; title: string; body: string }[];
  };
  nonMonetaryBenefits?: string[];
  whyItPays?: {
    eyebrow: string;
    title: string;
    points: { title: string; body: string }[];
  };
  audience?: string[];
  exampleLabel?: string;
  exampleCaption?: string;
  exampleImage?: string;
  quadPlay?: QuadPlayComparison;
  faq?: { q: string; a: string }[];
  recommendedModelIds: ModelId[];
}

export const useCases: UseCase[] = [
  {
    slug: "mobilfunk-fachhandel",
    name: "Mobilfunk Fachhandel",
    image: "usecase-mobilfunk-fachhandel.webp",
    icon: "smartphone",
    heroTagline: "Das eigene Mobilfunk-Portfolio mit einer Eigenmarke einfach ergänzen und den Ertrag selbst steuern.",
    challenge:
      "Im klassischen Vertragsverlängerungsgeschäft (VVL) der großen Netzbetreiber verdienen Fachhändler über eine vergleichsweise einfache Provision — und verlieren den Kunden danach oft an die eigenen Online-Kanäle der Netzbetreiber.",
    solution:
      "Über die Telnology®-Plattform bietet newSIM ein eigenes, unter der Händlermarke geführtes Tarif-Portfolio mit mehreren zusätzlichen, parallelen Ertragsquellen — der Kunde bleibt dauerhaft bei Ihnen.",
    painPoints: [
      "Im klassischen VVL-Geschäft bleibt es meist bei einer einzelnen, vergleichsweise einfachen Provision — zusätzliche Ertragshebel bleiben ungenutzt.",
      "Vertragsverlängerungen wandern zunehmend in die eigenen Online-Kanäle der Netzbetreiber ab — der Handel verliert den Bestand.",
      "Ein Tarif unter fremder Netzbetreiber-Marke schafft keine Kundenbindung an den eigenen Laden.",
    ],
    solutionSteps: [
      "Mehrere zusätzliche, parallele Ertragsquellen: laufende Airtime-Provision, volumenabhängiger Margenhebel und Abschlussprovision je Tarif.",
      "newSIM übernimmt Netzanbindung, Regulierung und Plattform-Betrieb im Hintergrund.",
    ],
    revenueStreams: {
      eyebrow: "Value Proposition Händler",
      title: "Vier Ertragsquellen für Ihr Mobilfunkgeschäft",
      items: [
        {
          icon: "invoice",
          title: "Laufende Airtime-Provision",
          body: "Monatlich, solange der Kunde aktiv ist — nicht nur einmalig bei Vertragsabschluss.",
        },
        {
          icon: "chart",
          title: "Volumenabhängiger Margenhebel",
          body: "Zusätzlicher Hebel oberhalb der Tarif-Untergrenze, skaliert mit dem gewählten Tarif.",
        },
        {
          icon: "tariff",
          title: "Einmalige Abschlussprovision",
          body: "Nach Tarifgröße gestaffelt, direkt bei Vertragsabschluss.",
        },
        {
          icon: "sliders",
          title: "Anteil am Bereitstellungspreis",
          body: "Zusätzlich flexibel steuerbar über Rabattcodes.",
        },
      ],
    },
    nonMonetaryBenefits: [
      "Eigene Tarifnamen und Ihr Logo auf der Rechnung — der Kunde erlebt Ihre Handelsmarke.",
      "Volle Kundenverwaltung direkt über die Telnology®-Plattform: Up-/Downsell, Verlängerung und Dokumente, ohne eigene Hotline.",
      "Vertragsverlängerung findet bei Ihnen im Laden statt — nicht im Onlinekanal eines Netzbetreibers.",
      "Hardware-Marge bleibt unberührt: newSIM-Tarife sind SIM-only, Geräte verkaufen Sie weiterhin aus Ihrem eigenen Sortiment.",
    ],
    audience: ["Mobilfunk-Shops", "Filialisten", "Elektronikfachhandel"],
    exampleLabel: "Ihr Shop · Ihr Tarif",
    exampleCaption:
      "Eigene Tarifnamen und Ihr Logo auf der Rechnung — der Kunde erlebt Ihre Handelsmarke, nicht die des Netzbetreibers.",
    faq: [
      {
        q: "Verdiene ich nur einmalig bei Vertragsabschluss?",
        a: "Nein — zur einmaligen Abschlussprovision kommt eine laufende Airtime-Provision hinzu, solange der Kunde aktiv ist, sowie ein volumenabhängiger Margenhebel.",
      },
      {
        q: "Verliere ich den Kunden bei der Vertragsverlängerung an den Netzbetreiber?",
        a: "Nein — die Vertragsverlängerung findet direkt bei Ihnen im Laden statt, nicht im Onlinekanal eines Netzbetreibers.",
      },
      {
        q: "Was passiert mit meiner Hardware-Marge?",
        a: "Die bleibt unberührt — newSIM-Tarife sind SIM-only, Geräte verkaufen Sie weiterhin aus Ihrem eigenen Sortiment.",
      },
    ],
    recommendedModelIds: ["branded-reseller", "white-label-reseller"],
  },
  {
    slug: "stadtwerke-isp-glasfaser",
    name: "Stadtwerke, ISP & Glasfaseranbieter",
    image: "usecase-stadtwerke-isp-glasfaser.webp",
    icon: "building",
    heroTagline: "Mobilfunk als natürliche und notwendige Ergänzung zum Glasfaser-Portfolio.",
    challenge:
      "Platzhalter: Stadtwerke und regionale ISPs wollen ihr Glasfaser-Portfolio um Mobilfunk erweitern, um Kunden ganzheitlich zu binden — klassischerweise ein hoher regulatorischer und technischer Einstiegsaufwand.",
    solution:
      "Platzhalter: newSIM übernimmt Netzanbindung, Regulierung und Plattform-Betrieb, während der Partner sein Portfolio unter eigener Marke vermarktet — inklusive Flying-Start-Glasfaser-Lösung als Überbrückung bis zur FTTH-Aktivierung.",
    painPoints: [
      "Nationale Anbieter wie Telekom, Vodafone, Telefónica, 1&1 und freenet verkaufen Internet, Festnetz, TV und Mobilfunk aus einer Hand — mit Bundle-Rabatt.",
      "Sobald Open Access das eigene Netz für den Wettbewerb öffnet, entscheidet das Gesamtpaket über den Endkunden — nicht die Leitung.",
      "Ohne Mobilfunk fehlt Bundling-Umsatz im Bestand, und das Churn-Risiko steigt bei jedem Vertragsende des Glasfaseranschlusses.",
    ],
    solutionSteps: [
      "Mobilfunk wird zur vierten Säule direkt neben Internet, Festnetz und TV — vom Triple Play zum Quad Play.",
      "newSIM übernimmt Netzanbindung, Regulierung und Plattform-Betrieb im Hintergrund.",
      "Mobile Broadband - Flying-Start-Glasfaser-Lösung überbrückt die Zeit bis zur FTTH-Aktivierung.",
    ],
    audience: ["Stadtwerke", "Regionale ISPs", "Glasfaseranbieter"],
    exampleLabel: "Ihr Glasfaser-Bundle",
    exampleCaption:
      "Mobilfunk wird zur vierten Säule direkt neben Internet, Festnetz und TV — vom Triple Play zum Quad Play.",
    quadPlay: {
      eyebrow: "Die Herausforderung",
      title: "Ohne Mobilfunk fehlt die vierte Säule im Open-Access-Wettbewerb.",
      subtitle:
        "Nationale Anbieter verkaufen Komplettpakete, regionale Netzbetreiber in der Regel nur drei von vier Diensten.",
      triplePlay: ["TV", "Telefonie", "Internet"],
      quadPlay: ["Mobilfunk", "TV", "Telefonie", "Internet"],
      quadPlayLabel: "mit newSIM",
      points: [
        {
          title: "Komplettportfolio der nationalen Diensteanbieter",
          body: "Telekom, Vodafone, Telefónica, 1&1 und freenet verkaufen Internet, Festnetz, TV und Mobilfunk aus einer Hand — mit Bundle-Rabatt.",
        },
        {
          title: "Open Access öffnet das eigene Netz für den Wettbewerb",
          body: "Sobald nationale Anbieter auf das regionale Netz dürfen, entscheidet das Gesamtpaket über den Endkunden — nicht die Leitung.",
        },
        {
          title: "Fehlender Mobilfunk kostet doppelt",
          body: "Mobilfunk ergänzt das Produktsortiment als Dienst und Access-Alternative. Kein Bundling-Umsatz im Bestand und höhere Churn-Gefahr bei jedem Vertragsende des Glasfaseranschlusses.",
        },
      ],
    },
    faq: [
      {
        q: "Was ist Open Access?",
        a: "Regulatorisch verpflichtete Öffnung des eigenen Glasfasernetzes für andere Anbieter — sobald das gilt, entscheidet das Gesamtpaket über den Endkunden, nicht mehr die Leitung allein.",
      },
      {
        q: "Ist die Mobile Broadband-Lösung flexibel in der Laufzeit?",
        a: "Ja, die Lösung wurde zusammen mit der Telefónica konzipiert und kann zum Zeitpunkt der Glasfaser-Aktivierung beendet werden.",
      },
      {
        q: "Kann der Kunde jeden Tag streamen und ist das Datenvolumen dafür ausreichend?",
        a: "Ja, die Lösung bietet eine 100-Mbit/s-Download-Geschwindigkeit mit max. 500 GB Datenvolumen im Monat. Damit kann der Kunde täglich bis zu 3 Stunden TV streamen.",
      },
    ],
    recommendedModelIds: ["white-label-reseller", "white-label-mvno"],
  },
  {
    slug: "itk-systemhaeuser",
    name: "ITK Systemhäuser",
    image: "usecase-itk-systemhaeuser.webp",
    icon: "chip",
    heroTagline: "Mobilfunk als Baustein im B2B-Portfolio für spezielle Lösungen für Geschäftskunden.",
    challenge:
      "Platzhalter: ITK-Systemhäuser betreuen Geschäftskunden ganzheitlich — Mobilfunk fehlt oft als eigenständiger, margenstarker Baustein im Portfolio.",
    solution:
      "Platzhalter: Individuelle B2B-Tarife und IoT/M2M-Konnektivität lassen sich direkt in bestehende Kundenbeziehungen integrieren, ohne eigene Netzinfrastruktur.",
    painPoints: [
      "Mobilfunk Konnektivität fehlt als eigenständiger, margenstarker Baustein im B2B-Portfolio.",
      "Keine eigene Netzinfrastruktur vorhanden, um Mobilfunk selbst anzubieten.",
      "Geschäftskunden erwarten ganzheitliche Betreuung aus einer Hand mit der Möglichkeit die Tarife selbst zu managen.",
    ],
    solutionSteps: [
      "Individuelle B2B-Tarife gestalten und in die Kunden-Lösung integrieren.",
      "Zusätzliche Margen generieren und kommerzielle Ownership behalten.",
      "newSIM übernimmt Netzanbindung und Plattform-Betrieb im Hintergrund.",
    ],
    audience: ["Systemhäuser", "IT-Dienstleister", "TK-Reseller"],
    exampleLabel: "Ihr B2B-Tarif",
    exampleCaption:
      "Individuelle B2B-Tarife unter Ihrer Marke — direkt in Ihre bestehenden Kundenbeziehungen integriert.",
    faq: [
      {
        q: "Können wir auch IoT/M2M-Konnektivität für unsere Kunden anbieten?",
        a: "Ja. Über die Telnology®-Plattform steht Ihnen ein eigenes White-Label-IoT/M2M-Portfolio zur Verfügung — inklusive SIM Diversity, Secure Data Cloud und Dynamic Datapooling, ideal für Connectivity- und Smart-Building-Projekte Ihrer Geschäftskunden.",
      },
      {
        q: "Wie sieht die Margenstruktur aus?",
        a: "Im White-Label-Reseller-Modell definieren Sie Ihre Endkundenpreise selbst und damit auch Ihre eigene Marge — Sie behalten die volle kommerzielle Ownership über Ihr Pricing.",
      },
    ],
    recommendedModelIds: ["full-service", "white-label-reseller"],
  },
  {
    slug: "banken-versicherungen",
    name: "Banken & Versicherungen",
    image: "usecase-banken-versicherungen.webp",
    icon: "shield",
    heroTagline: "Mobilfunk als Cross-Selling- und Kundenbindungsprodukt.",
    challenge:
      "Platzhalter: Banken und Versicherungen suchen nach zusätzlichen, alltagsrelevanten Produkten zur Kundenbindung — mit hohen Anforderungen an Regulierung und Markenauftritt.",
    solution:
      "Platzhalter: Ein vollständig White-Label-fähiges Mobilfunkprodukt lässt sich unter eigener Marke und im eigenen Compliance-Rahmen anbieten, während newSIM die regulatorische und technische Basis stellt.",
    painPoints: [
      "Wie kann der eigene Kundenstamm mit zusätzlichen, alltagsrelevanten Produkten zur Kundenbindung ergänzt und die Retention erhöht werden?",
      "Wie kann ich das eigene Produktsortiment ideal ergänzen und das Kundenkonto mit einem Vorteil versehen?",
      "Ein Fremdprodukt ohne eigenes Branding wirkt nicht vertrauenswürdig genug.",
    ],
    solutionSteps: [
      "Vollständig White-Label-fähiges Mobilfunkprodukt unter eigener Marke.",
      "Volle Integration per API in die Customer Journey.",
      "newSIM stellt die regulatorische und technische Basis.",
    ],
    audience: ["Banken", "Versicherungen", "Finanzdienstleister"],
    exampleLabel: "Ihre Marke · Ihr Mobilfunk",
    exampleCaption:
      "Vollständig White-Label-fähiges Mobilfunkprodukt unter Ihrer eigenen Marke.",
    faq: [
      {
        q: "Wer trägt die regulatorische Verantwortung gegenüber der BNetzA?",
        a: "newSIM ist als Diensteanbieter gemäß TKG bei der BNetzA reguliert und übernimmt die regulatorische Verantwortung im Hintergrund — Sie bieten das Produkt vollständig unter Ihrer eigenen Marke an, ohne selbst als Telekommunikationsanbieter aufzutreten.",
      },
      {
        q: "Ist das Mobilfunkprodukt für unsere Kunden als eigenes Produkt erkennbar?",
        a: "Ja. Als vollständig White-Label-fähiges Produkt tritt ausschließlich Ihre Marke gegenüber dem Endkunden auf — newSIM stellt Netzanbindung, Regulierung und Technik im Hintergrund.",
      },
    ],
    recommendedModelIds: ["white-label-reseller", "white-label-mvno"],
  },
  {
    slug: "influencer",
    name: "Influencer",
    image: "usecase-influencer.webp",
    icon: "link",
    heroTagline: "Der eigene Mobilfunktarif für die eigene Community.",
    challenge:
      "Platzhalter: Creator mit großer Reichweite wollen ein eigenes, glaubwürdiges Produkt für ihre Community anbieten — ohne selbst ein Telekommunikationsunternehmen aufzubauen.",
    solution:
      "Platzhalter: Ein Branded-Reseller-Tarif ist in wenigen Wochen startklar und lässt sich vollständig unter eigenem Namen und Look & Feel vermarkten.",
    painPoints: [
      "Ihre Community erwartet ein eigenes, glaubwürdiges Angebot — keine austauschbare Werbepartnerschaft.",
      "Ein eigenes Telekommunikationsunternehmen aufzubauen ist regulatorisch und technisch viel zu aufwändig.",
      "Ohne echte Markenkontrolle wirkt ein fremder Tarif nicht authentisch für die eigene Marke.",
    ],
    solutionSteps: [
      "Ein Branded-Reseller-Tarif unter Ihrem eigenen Namen und Look & Feel.",
      "Startklar in wenigen Wochen statt Monaten.",
      "newSIM übernimmt Betrieb, Abrechnung und Support im Hintergrund.",
    ],
    audience: ["Content Creator", "Social-Media-Marken", "Community-Brands"],
    exampleLabel: "In 4 Wochen live · Ihre Marke",
    exampleCaption: "Ein Branded-Reseller-Tarif unter Ihrem eigenen Namen und Look & Feel.",
    whyItPays: {
      eyebrow: "Abo-Produkt",
      title: "Ihr eigener Mobilfunktarif",
      points: [
        {
          title: "Wiederkehrender Umsatz",
          body: "Jeder Kunde zahlt über die gesamte Vertragslaufzeit von bis zu 24 Monaten, jeden Monat — nicht nur einmalig.",
        },
        {
          title: "Hype-resistent",
          body: "Die Vertragslaufzeit sichert Umsatz weit über den Launch-Hype hinaus.",
        },
        {
          title: "Null Operations",
          body: "newSIM übernimmt Service, Billing, SIM-Logistik und Regulierung im Hintergrund.",
        },
        {
          title: "Echtes Asset",
          body: "Ihre Kundenbasis hat einen eigenen Marktwert — wie das öffentlich bekannte Beispiel Mint Mobile zeigt.",
        },
      ],
    },
    faq: [
      {
        q: "Wie schnell ist mein eigener Tarif startklar?",
        a: "Als Branded Reseller in der Regel innerhalb von 4 Wochen.",
      },
      {
        q: "Wie viel verdiene ich pro Vertrag?",
        a: "Als Branded Reseller erhalten Sie eine monatliche Airtime-Provision auf jeden aktiven Vertrag sowie eine einmalige Abschlussprovision.",
      },
    ],
    recommendedModelIds: ["branded-reseller"],
  },
  {
    slug: "vereine",
    name: "Vereine",
    image: "usecase-vereine.webp",
    icon: "flag",
    heroTagline: "Mobilfunk-Vorteile für Mitglieder und Fans.",
    challenge:
      "Vereine suchen nach neuen Wegen, Mitglieder und Fans über die Saison hinaus enger an den Verein zu binden — und nach zusätzlichen, wiederkehrenden Einnahmequellen jenseits von Mitgliedsbeiträgen und einmaligen Fanartikel-Verkäufen.",
    solution:
      "Ein Mobilfunktarif unter der eigenen Vereinsmarke wird zu einem weiteren Merchandising-Produkt — eines, das Mitglieder täglich nutzen und das der Verein ohne eigenen Betriebsaufwand anbietet.",
    painPoints: [
      "Klassisches Merchandising wie Trikots oder Fanartikel bindet nur einmalig — für dauerhafte Fannähe fehlt ein Produkt, das Mitglieder täglich begleitet.",
      "Zusätzliche, wiederkehrende Einnahmequellen neben Mitgliedsbeiträgen und Ticketing sind gefragt.",
      "Ein eigenes Mobilfunkangebot aufzubauen ist regulatorisch und administrativ viel zu aufwändig für den Verein.",
    ],
    solutionSteps: [
      "Ein Mobilfunktarif unter Ihrer Vereinsmarke — ein weiteres Fanartikel, das Mitglieder jeden Tag in der Hand halten.",
      "Der Vereinsname begleitet Mitglieder und Fans im Alltag — spürbar mehr Nähe als ein Schal im Schrank.",
      "newSIM übernimmt Betrieb, Abrechnung und Support im Hintergrund — kein administrativer Mehraufwand für den Verein.",
    ],
    audience: ["Sportvereine", "Verbände", "Fanclubs"],
    exampleLabel: "Ihre Vereins-Flat",
    exampleImage: "fancell_fenertalk_phone-1.png.webp",
    exampleCaption:
      "So sieht ein Mobilfunktarif unter Vereinsmarke in der Praxis aus — am Beispiel fenertalk, dem Tarif des türkischen Erstligisten Fenerbahçe.",
    whyItPays: {
      eyebrow: "Merchandising-Produkt",
      title: "Ihr Mobilfunktarif als Fanartikel",
      points: [
        {
          title: "Wiederkehrender Umsatz",
          body: "Jedes Mitglied zahlt über die gesamte Vertragslaufzeit monatlich — eine zusätzliche, planbare Einnahmequelle neben Mitgliedsbeiträgen und Fanartikeln.",
        },
        {
          title: "Mehr Fannähe",
          body: "Der Vereinsname begleitet Mitglieder und Fans jeden Tag auf dem Smartphone — sichtbarer und präsenter als die meisten Fanartikel.",
        },
        {
          title: "Null Operations",
          body: "newSIM übernimmt Service, Billing, SIM-Logistik und Regulierung im Hintergrund — kein Mehraufwand für Verein oder Geschäftsstelle.",
        },
      ],
    },
    faq: [
      {
        q: "Entsteht für den Verein zusätzlicher administrativer Aufwand?",
        a: "Nein. newSIM übernimmt Tarif-Betrieb, Abrechnung, SIM-Logistik und Support im Hintergrund — für den Verein entsteht kein zusätzlicher Aufwand.",
      },
      {
        q: "Wie profitiert der Verein finanziell?",
        a: "Als Branded Reseller erhalten Sie eine monatliche Airtime-Provision auf jeden aktiven Vertrag sowie eine einmalige Abschlussprovision — zusätzlich zum ideellen Wert der stärkeren Fanbindung.",
      },
    ],
    recommendedModelIds: ["full-service", "branded-reseller"],
  },
];

export interface DeveloperPage {
  slug: string;
  name: string;
  image: string;
  icon: IconName;
  heroTagline: string;
  overview: string;
  capabilities: string[];
  faq?: { q: string; a: string }[];
}

export const developerPages: DeveloperPage[] = [
  {
    slug: "api",
    name: "API",
    image: "developer-api.webp",
    icon: "chip",
    heroTagline: "Der externe Zugang zur Telnology®-Plattform — für Ihre eigenen Systeme.",
    overview:
      "Die newSIM API bietet denselben Funktionsumfang wie die Telnology®-Plattform — sie ist der externe, programmatische Zugang, über den Partner-Systeme newSIM direkt ansprechen und die Rückmeldungen in Echtzeit erhalten.",
    capabilities: [
      "Order Management & Aktivierung",
      "MNP-Prozesse",
      "Billing & Rating (CDR)",
      "Reporting & Datenexport",
    ],
  },
  {
    slug: "telnology",
    name: "Telnology®",
    image: "developer-telnology.webp",
    icon: "layers",
    heroTagline: "Die Enabling-Plattform hinter allen newSIM-Modellen.",
    overview:
      "Telnology® ist die Enabling-Plattform und das Business Support System (BSS) im Hintergrund aller newSIM-Modelle — sie verbindet Vertriebskanäle, Order Management, Billing und Customer Service mit der Netzanbindung an Telefónica, für B2C und B2B gleichermaßen.",
    capabilities: [
      "Billing & Rating (CDR, Rufnummern, Inkasso)",
      "Customer Service (1st & 2nd Level)",
      "Order Management (Activation, MNP, SIM-Logistik)",
      "Reporting & API",
    ],
    faq: [
      {
        q: "Ist Telnology® eine App für Endkunden?",
        a: "Nein. Telnology® ist die Business-Support-System- und Enabling-Plattform im Hintergrund — sie bündelt Order Management, Billing, Customer Service und Netzanbindung für alle Vertriebskanäle, unabhängig von der jeweiligen Endkunden-App oder -Website.",
      },
      {
        q: "Welche Vertriebskanäle bindet Telnology® an?",
        a: "Privatkunden, Geschäftskunden, ISP-Carrier und Stadtwerke, Mobilfunk-Partner sowie ITK-Systemhäuser laufen über dieselbe Plattform — B2C, B2B und B2B2C.",
      },
      {
        q: "An welches Netz ist Telnology® angebunden?",
        a: "An das Telefónica-Netzwerk (LTE/5G sowie IoT/M2M) — mit BNetzA-Diensteanbieter-Status gemäß TKG und TR-AAV sowie API-, Web-Interface- und SFTP-Anbindung.",
      },
    ],
  },
];

export interface IotFeatureTab {
  key: string;
  label: string;
  icon: IconName;
  title: string;
  body: string;
  points: string[];
}

export const iotShop = {
  hero: {
    eyebrow: "IoT & M2M",
    title: "IoT-Konnektivität, die zu Ihrem Business passt.",
    tagline:
      "SIM-Karten für vernetzte Devices — auf dem Telefónica-Netz, White-Label-fähig und direkt über die Telnology®-Plattform verwaltet.",
    bullets: [
      "M2M-SIM für LTE/5G und dediziertes IoT/M2M auf dem Telefónica-Netz.",
      "BNetzA-reguliert als Diensteanbieter gemäß TKG & TR-AAV.",
      "Skalierbar vom Pilotprojekt bis zur Großflotte — White-Label-fähig für B2B, B2B2B und B2B2C.",
    ],
    image: "developer-api.webp",
    primaryCtaLabel: "IoT-Angebot anfragen",
    primaryCtaHref: "/iot/anfrage",
    secondaryCtaLabel: "IoT-Tarife ansehen",
    secondaryCtaHref: "/#iot-m2m",
  },
  featureTabs: [
    {
      key: "sim",
      label: "M2M-SIM",
      icon: "simCard",
      title: "Eine SIM für Ihr gesamtes Device-Portfolio",
      body: "Ihre Devices funken auf dem Telefónica-Netz — LTE/5G sowie dediziertes IoT/M2M. Eine SIM-Generation für Pilotprojekt und Rollout.",
      points: ["LTE/5G sowie IoT/M2M", "BNetzA-Diensteanbieter gemäß TKG & TR-AAV", "Skalierbar von Testmenge bis Großflotte"],
    },
    {
      key: "portal",
      label: "Portal",
      icon: "monitor",
      title: "Verwaltung über die Telnology®-Plattform",
      body: "SIM-Karten aktivieren, überwachen und verwalten — über das Web-Interface oder direkt per API- bzw. SFTP-Anbindung in Ihre eigenen Systeme.",
      points: ["Aktivierung & Monitoring im Web-Interface", "API- und SFTP-Anbindung", "White-Label-fähig für eigene Systeme"],
    },
    {
      key: "sicherheit",
      label: "Sicherheit",
      icon: "shield",
      title: "Sicher für B2B, B2B2B und B2B2C",
      body: "SIM Diversity, Secure Data Cloud und Dynamic Datapooling schützen Ihre Konnektivität — unabhängig vom Geschäftsmodell.",
      points: ["SIM Diversity", "Secure Data Cloud", "Dynamic Datapooling"],
    },
  ] as IotFeatureTab[],
  trust: {
    eyebrow: "Warum newSIM",
    title: "Regulierte Konnektivität mit persönlichem Service.",
    points: [
      { icon: "shield" as const, title: "BNetzA-reguliert", body: "Diensteanbieter gemäß TKG und TR-AAV." },
      { icon: "tower" as const, title: "Telefónica-Netz", body: "LTE/5G sowie dediziertes IoT/M2M." },
      { icon: "support" as const, title: "Support aus Deutschland", body: `Persönlicher Ansprechpartner aus ${site.locations}.` },
    ],
  },
};

export interface ConsultingService {
  slug: string;
  name: string;
  image: string;
  icon: IconName;
  heroTagline: string;
  overview?: string;
  forWhom: string;
  phases: { title: string; body: string }[];
  serviceBlocks?: { title: string; body: string; icon: IconName }[];
  deliverables: string[];
  duration?: string;
  relatedModelIds?: ModelId[];
  faq?: { q: string; a: string }[];
}

export const consultingServices: ConsultingService[] = [
  {
    slug: "g2m-strategie-mvno",
    name: "G2M-Strategie für MVNO",
    image: "consulting-g2m-strategie.webp",
    icon: "chart",
    heroTagline: "Go-to-Market-Strategie für den eigenen Mobilfunk-Start.",
    overview:
      "Wir beraten und entwickeln für Unternehmen Konzepte für einen erfolgreichen Markteintritt mit Mobilfunktarifen und begleiten die Etablierung am deutschen Markt. Wir analysieren das Marktpotential und entwickeln für Ihr Unternehmen den End-to-End-Prozess von Neuprodukten im Offline- und Online-Bereich, optional unterstützt durch eine App-basierte digitale Customer Journey und inklusive Aufbau eines Ökosystems mit den passenden digitalen Services, Bundles, Up- und Cross-Selling. Feste Bestandteile unseres Leistungsspektrums sind zielorientierte Vermarktungskonzepte, messbare Ergebnisse sowie maßgeschneiderte und bedarfsorientierte Lösungen.",
    forWhom:
      "Für Unternehmen, die mit Mobilfunktarifen erfolgreich in den deutschen Markt eintreten und sich dort langfristig etablieren wollen.",
    phases: [
      { title: "Analyse", body: "Wir analysieren das Marktpotential und Ihre Ausgangslage für den Markteintritt mit Mobilfunktarifen." },
      { title: "Strategie", body: "Modellwahl, Positionierung und Preislogik für einen langfristigen Erfolg im Mobilfunkmarkt entwickeln." },
      { title: "Umsetzung", body: "Tarifkonzept, App-basierte Customer Journey und Anbindung an die Mobilfunk-as-a-Service-Plattform werden gemeinsam umgesetzt." },
    ],
    serviceBlocks: [
      { title: "Potentialanalyse", body: "Markt- und Wettbewerb.", icon: "pulse" },
      { title: "Business Case", body: "3–5 Jahres Planung.", icon: "chart" },
      { title: "Go-to-Market Konzept", body: "Planung erfolgreiche Produkt- und Vertriebsstrategie.", icon: "link" },
    ],
    deliverables: ["G2M-Strategiepapier", "Modell- und Positionierungsempfehlung", "Launch-Fahrplan"],
    relatedModelIds: ["branded-reseller", "white-label-reseller"],
    faq: [
      {
        q: "Ist die Erstberatung kostenpflichtig?",
        a: "Nein. Das Erstgespräch ist unverbindlich und kostenfrei — wir lernen Ihr Vorhaben kennen und geben eine erste Einschätzung, bevor über den weiteren Beratungsumfang gesprochen wird.",
      },
      {
        q: "Bin ich nach der Beratung zu einem Modell verpflichtet?",
        a: "Nein. Die Strategie liefert eine Empfehlung — die Entscheidung für ein Modell treffen Sie unabhängig davon.",
      },
    ],
  },
  {
    slug: "potentialanalyse-mobilfunk-glasfaser",
    name: "Potentialanalyse Mobilfunk & Glasfaser",
    image: "consulting-potentialanalyse.webp",
    icon: "pulse",
    heroTagline: "Marktpotential für Ihr Portfolio einschätzen und bewerten für Ihre Geschäftsplanung.",
    forWhom:
      "Für Unternehmen und Netzanbieter, die ihr Produktportfolio und das Kundenangebot für Glasfaser und Mobilfunk optimieren und neu ausrichten.",
    phases: [
      { title: "Bestandsaufnahme", body: "Bestehendes Portfolio und Vertriebsprozesse analysieren." },
      { title: "Potentialbewertung", body: "Markt- und Kundenpotential auf Ertrag und Wettbewerbsfähigkeit überprüfen." },
      { title: "Handlungsempfehlung", body: "Konkrete Maßnahmenplanung zur Umsatz- und Ertragssteigerung auf Produkt- und Vertriebsebene." },
    ],
    serviceBlocks: [
      { title: "Potentialanalyse", body: "Markt- und Wettbewerb.", icon: "pulse" },
      { title: "Sales und Marketing Planung", body: "G2M-Konzept und Initiativen.", icon: "chart" },
      { title: "Transformation", body: "Neuausrichtung und Monitoring sämtlicher Sales-Aktivitäten.", icon: "layers" },
    ],
    deliverables: ["Maßnahmenplanung Vertriebsinitiativen", "Modellempfehlung", "Wirtschaftlichkeitseinschätzung"],
    relatedModelIds: ["white-label-reseller", "white-label-mvno"],
    faq: [
      {
        q: "Brauche ich dafür bereits Mobilfunk-Erfahrung?",
        a: "Nein. Die Potentialanalyse setzt genau da an, wo Sie heute stehen — auch ohne bisherige Mobilfunk-Erfahrung.",
      },
      {
        q: "Was, wenn sich kein Potential zeigt?",
        a: "Unsere Erfahrungen haben gezeigt, dass es in der Regel immer ein Potential zur Vertriebseffizienzsteigerung gibt.",
      },
    ],
  },
  {
    slug: "sales-strategie-online-offline",
    name: "Sales-Strategie Online & Offline",
    image: "consulting-sales-strategie.webp",
    icon: "link",
    heroTagline: "Vertriebsstrategie über alle Kanäle hinweg.",
    forWhom:
      "Für Unternehmen und Netzanbieter, die ihr Mobilfunk-Portfolio im B2C-E-Commerce, im B2B2C-Retail sowie im B2B-Geschäftskundenvertrieb erfolgreich vermarkten wollen.",
    phases: [
      { title: "Kanalanalyse", body: "Bestehende Kanäle in B2C-E-Commerce, B2B2C-Retail und B2B-Geschäftskundenvertrieb werden erfasst und bewertet." },
      { title: "Konzept", body: "Vertriebsstrategie für die Neukundengewinnung im B2C (Telesales & Retail) und B2B (SME) für Online- und Offline-Kanäle." },
      { title: "Rollout", body: "Implementierung und Umsetzung der Vertriebsinitiativen mit dem Team." },
    ],
    serviceBlocks: [
      { title: "Vertriebsstrategie", body: "Where to play und how to win.", icon: "chart" },
      { title: "Effizienzsteigerung", body: "Prozesse, Organisation, Zielsysteme, Monitoring.", icon: "sliders" },
      { title: "Kundenbindung", body: "Retention, Cross- und Upselling, Loyalitätsprogramme.", icon: "link" },
    ],
    deliverables: ["Planung der Vertriebsziele und -strategie", "Kanal-Priorisierung", "Maßnahmenplanung Neukunden und Cross- / Upsell"],
    relatedModelIds: ["branded-reseller", "full-service"],
    faq: [
      {
        q: "Deckt das auch den stationären Vertrieb ab?",
        a: "Ja — die Strategie berücksichtigt sowohl Online- als auch Offline-Kanäle wie den stationären Handel.",
      },
      {
        q: "Begleitet newSIM auch die Umsetzung?",
        a: "Ja, newSIM begleitet im Beratungsprojekt auch die Implementierung und Umsetzung der Strategie.",
      },
      {
        q: "Kann newSIM auch die Bestellstrecke im E-Commerce zur Verfügung stellen?",
        a: "newSIM stellt optional eine White-Label-Bestellstrecke und die dazugehörige Webseite für den Partner zur Verfügung.",
      },
    ],
  },
  {
    slug: "kupfer-glasfaser-transformation",
    name: "Kupfer-Glasfaser-Transformation",
    image: "consulting-kupfer-glasfaser-transformation.webp",
    icon: "tower",
    heroTagline: "Digitalisierung basiert in der Zukunft auf Glasfaser und Mobilfunk. Wir beraten bei der Netz-Transformation.",
    forWhom:
      "Für Netzanbieter, die ihre kupferbasierten Dienste im Portfolio bereinigen wollen, damit die operativen Betriebskosten zügig gesenkt werden und die Wettbewerbsfähigkeit in Zukunft erhalten bleibt.",
    phases: [
      { title: "Bestandsaufnahme", body: "Bestehendes Portfolio und Bestandskunden analysieren." },
      { title: "IT und Plattform Check", body: "Prüfen der technischen Möglichkeiten und Schnittstellenanbindungen für die Zielprodukte." },
      { title: "Projektleitung", body: "Verantwortliche Übernahme der Projektleitung in der Organisation für die End-to-End-Transformation." },
    ],
    serviceBlocks: [
      {
        title: "Konzeptionelle Beratung",
        body: "Entwicklung eines zielgruppen- und produktgerechten Marktangangs auf Basis des bestehenden xDSL-Portfolios.",
        icon: "pulse",
      },
      {
        title: "Projektleitung End-to-End",
        body: "Gesamtheitliche Leitung aller relevanten Stakeholder und Prozess-Owner.",
        icon: "clipboard",
      },
      {
        title: "Transformation",
        body: "Kontinuierliches Nachhalten des Projektfortschritts und Prüfung der bestehenden Verträge mit Anbietern bzw. Dienstleistern.",
        icon: "layers",
      },
    ],
    deliverables: [
      "Transformationskonzept zur Migration der Kundenbasis xDSL",
      "Kostensenkungspotential erreichen",
      "Anbindung neuer Anbieter (Open Access)",
    ],
    relatedModelIds: ["white-label-reseller", "white-label-mvno"],
    faq: [
      {
        q: "Was ist Flying Start Glasfaser genau?",
        a: "Eine Mobile-Broadband-Lösung, die Kunden während der Migration von Kupfer- auf Glasfaseranschlüsse überbrückt.",
      },
      {
        q: "Begleitet newSIM auch die Umsetzung der Kupfer-Glasfaser-Transformation?",
        a: "Ja, newSIM begleitet im Beratungsprojekt auch die Implementierung und Umsetzung der Strategie.",
      },
      {
        q: "Ist newSIM auch vor Ort, um das Projekt zu leiten?",
        a: "newSIM stellt sicher, dass das Projekt durchgängig begleitet wird, und ist selbstverständlich auch vor Ort.",
      },
    ],
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
