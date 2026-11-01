// Platzhalter-Inhalte fuer "English": aktuell 1:1 Durchreichung der deutschen Inhalte (lib/content.ts).
// Wird schrittweise Abschnitt fuer Abschnitt durch echte Uebersetzungen ersetzt.
// Gleiche Form/Typen wie lib/content.ts (siehe ContentModule in lib/i18n/config.ts).
import * as de from "@/lib/content";

export const site: typeof de.site = {
  ...de.site,
  claim: "Your mobile brand. As much control as you want.",
  descriptor:
    "From fully managed to your own MVNO platform — the white-label mobile platform for carriers, utilities, and ISPs.",
  primaryCta: "Schedule a call",
};

export const mainNav: typeof de.mainNav = [
  {
    label: "Products",
    href: "/produkte",
    intro: "Four models, one modular system to match your ambition.",
    children: [
      {
        label: "Business Solutions",
        href: "/produkte/business-solutions",
        description: "Custom B2B plans, fully operated by newSIM.",
        icon: "support",
      },
      {
        label: "Branded Reseller",
        href: "/produkte/branded-reseller",
        description: "Your own brand in 4 weeks, minimal effort.",
        icon: "flag",
        featured: true,
      },
      {
        label: "White Label Reseller",
        href: "/produkte/white-label-reseller",
        description: "Your own pricing, maximum flexibility.",
        icon: "sliders",
        featured: true,
      },
      {
        label: "White Label MVNE Platform",
        href: "/produkte/white-label-mvne",
        description: "Full customer ownership, newSIM delivers the core platform.",
        icon: "crown",
      },
    ],
  },
  {
    label: "Use Cases",
    href: "/use-cases",
    intro: "The right solution for your industry.",
    children: [
      {
        label: "Mobile Retail",
        href: "/use-cases/mobilfunk-fachhandel",
        description: "Your own mobile portfolio, in-store and online.",
        icon: "smartphone",
      },
      {
        label: "Utilities, ISPs & Fiber Providers",
        href: "/use-cases/stadtwerke-isp-glasfaser",
        description: "Mobile as a complement to your fiber portfolio.",
        icon: "building",
      },
      {
        label: "IT & Telecom System Integrators",
        href: "/use-cases/itk-systemhaeuser",
        description: "Mobile in the B2B portfolio for business customers.",
        icon: "chip",
      },
      {
        label: "Banks & Insurance",
        href: "/use-cases/banken-versicherungen",
        description: "Mobile as a cross-selling product.",
        icon: "shield",
      },
      {
        label: "Influencers",
        href: "/use-cases/influencer",
        description: "Your own mobile plan for your own community.",
        icon: "link",
      },
      {
        label: "Clubs & Associations",
        href: "/use-cases/vereine",
        description: "Mobile benefits for members and fans.",
        icon: "flag",
      },
    ],
  },
  {
    label: "Our Brands",
    href: "/eigenmarken",
    intro: "An overview of our own brands.",
    children: [
      {
        label: "easyTEL",
        href: "https://www.easytel.de",
        description: "Our own mobile app for consumers.",
        icon: "smartphone",
        external: true,
        mockupImage: "easytel-mockup.webp",
      },
      {
        label: "One Mobile World",
        href: "https://onemobile.world",
        description: "Travel eSIM for over 200 countries.",
        icon: "wifi",
        external: true,
        mockupImage: "onemobile-mockup.webp",
      },
      {
        label: "Hardware Shop",
        href: "#",
        description: "Devices & accessories — coming soon.",
        icon: "chip",
        comingSoon: true,
      },
      {
        label: "IoT / M2M Shop",
        href: "/iot",
        description: "IoT connectivity for your devices.",
        icon: "layers",
        mockupImage: "IoT-Shop.jpg",
      },
    ],
  },
  {
    label: "Developer",
    href: "/developer",
    intro: "Technical integration with the Telnology® platform.",
    children: [
      {
        label: "Telnology®",
        href: "/developer/telnology",
        description: "The enabling platform and its architecture.",
        icon: "layers",
      },
      {
        label: "API",
        href: "/developer/api",
        description: "Order management, reporting & BSS/OSS interfaces.",
        icon: "chip",
      },
    ],
  },
  {
    label: "Consulting",
    href: "/consulting",
    intro: "Strategic consulting for mobile & fiber.",
    children: [
      {
        label: "G2M Strategy for MVNOs",
        href: "/consulting/g2m-strategie-mvno",
        description: "Go-to-market strategy for launching your own mobile brand.",
        icon: "chart",
      },
      {
        label: "Market Potential Analysis: Mobile & Fiber",
        href: "/consulting/potentialanalyse-mobilfunk-glasfaser",
        description: "Assess the market potential for your portfolio.",
        icon: "pulse",
      },
      {
        label: "Sales Strategy: Online & Offline",
        href: "/consulting/sales-strategie-online-offline",
        description: "A sales strategy across every channel.",
        icon: "link",
      },
      {
        label: "Copper-to-Fiber Transformation",
        href: "/consulting/kupfer-glasfaser-transformation",
        description: "Mobile as a bridge during network transformation.",
        icon: "tower",
      },
    ],
  },
];

export const proofPoints: typeof de.proofPoints = [
  { value: "30+", label: "Partners under contract" },
  { value: "200+", label: "Plans in the white-label portfolio" },
  { value: "5–500", suffix: "GB", label: "Data plans, unlimited calls & SMS" },
  { value: "4–6", suffix: "weeks", label: "to commercial launch" },
];

export const trustBar: typeof de.trustBar = [
  { icon: "shield", text: "Licensed under German telecom law (TKG)" },
  { icon: "wifi", text: "MVNO on the Telefónica network" },
  { icon: "link", text: "30+ partners under contract" },
];

export const hero: typeof de.hero = {
  headline: "Your mobile brand.\nAs much control as you want.",
  sub: "newSIM offers mobile concepts as a managed, white-label service for partners on the Telefónica network. From a fully managed Full Service as a Branded Reseller to your own white-label MVNO platform — with full regulatory coverage and no minimum commitment.",
};

export const businessValue: typeof de.businessValue = {
  eyebrow: "Why mobile?",
  title: "Mobile is more than an add-on product — it's a customer retention lever.",
  intro:
    "On our Mobile-as-a-Service platform, our partners can design a tailored tariff portfolio for the needs of every customer segment — for both consumer and business solutions.",
  points: [
    {
      title: "No minimum commitment",
      body: "Start without a volume commitment and scale according to real demand — commercial risk stays calculable.",
      icon: "sliders",
    },
    {
      title: "Full regulatory coverage",
      body: "newSIM is a licensed service provider under the German Telecom Act (TKG) and handles all regulatory matters with the Bundesnetzagentur (BNetzA).",
      icon: "shield",
    },
    {
      title: "Our own Mobile-as-a-Service platform",
      body: "As an MVNO on the Telefónica network, newSIM operates the Telnology® platform as an enabling platform and BSS for partners.",
      icon: "layers",
    },
  ],
};

export const models: typeof de.models = [
  {
    id: "full-service",
    slug: "business-solutions",
    navLabel: "Business Solutions",
    step: 1,
    name: "Full Service",
    image: "produkt-business-solutions.webp",
    tagline: "Minimal effort — newSIM handles practically everything.",
    description:
      "Custom plan offers for the business segment. Flexible contract terms with upgrade and downgrade options tailored to customer needs — newSIM runs the tariff portfolio, number management, and SIM card logistics directly for the business customer.",
    idealFor: "Business customers with individual mobile needs, without their own reseller effort",
    newSimResponsibilities: ["Tariff portfolio", "Number management", "SIM card logistics"],
    partnerResponsibilities: ["Activation / deactivation", "End-customer relationship"],
    process: [
      "Initial consultation to align on tariff requirements",
      "A custom tariff portfolio is configured for the business segment",
      "Number management and SIM card logistics are set up",
      "Activation and deactivation of individual contracts is now in your hands",
    ],
    faq: [
      {
        q: "Who handles day-to-day end-customer support?",
        a: "newSIM runs the tariff portfolio, number management, and SIM card logistics directly for the business customer — you handle activation, deactivation, and the customer relationship.",
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
    tagline: "Your own brand in 4 weeks — newSIM carries most of the value chain.",
    description:
      "Your own mobile brand, ready to launch in just 4 weeks. newSIM handles most of the value chain — the partner provides the brand and sales.",
    idealFor: "Mobile retailers and carriers getting started — a simple order flow, ready-made commission model",
    newSimResponsibilities: ["Network connectivity (Telefónica)", "1st-level customer service", "Billing & collections", "Tariff portfolio"],
    partnerResponsibilities: ["Brand", "Marketing & sales", "End-customer relationship"],
    keyBenefits: [
      { title: "Live in 4 weeks", body: "The fastest way to your own brand" },
      { title: "Airtime per month", body: "Plus a one-time signup commission per contract" },
      { title: "Low complexity", body: "newSIM handles nearly the entire value chain" },
      { title: "Ready-made building blocks", body: "Landing page, order flow, support routed for you" },
    ],
    process: [
      "Kickoff & contract signing",
      "Branding: landing page and order flow in your own look & feel",
      "Tariff portfolio and commission model (airtime commission + signup commission) are set up",
      "Live launch after 4 weeks",
    ],
    faq: [
      {
        q: "How quickly is my plan live?",
        a: "Typically within 4 weeks of signing the contract.",
      },
      {
        q: "How do I earn as a Branded Reseller?",
        a: "Through a monthly airtime commission on every active contract, plus a one-time signup commission per contract.",
      },
      {
        q: "What do I need to handle myself?",
        a: "You provide the brand, marketing & sales, and the end-customer relationship — newSIM handles network connectivity, 1st-level customer service, billing & collections, and the tariff portfolio.",
      },
      {
        q: "Do I need my own customer hotline?",
        a: "No. newSIM handles all 1st-level customer service for your end customers.",
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
    tagline: "Your own brand, your own pricing, maximum creative freedom.",
    description:
      "Full customization of look & feel with full commercial ownership. The partner actively shapes the tariff portfolio and has maximum margin and creative freedom.",
    idealFor: "ISPs & carriers who want to independently extend their FTTH portfolio with mobile",
    newSimResponsibilities: [
      "Network connectivity & platform operations (Telefónica)",
      "Billing & collections",
      "2nd-level support",
      "BNetzA regulatory compliance",
    ],
    partnerResponsibilities: [
      "Commercial ownership / pricing",
      "1st-level support",
      "Brand, marketing & sales",
      "Billing & receivables management",
    ],
    keyBenefits: [
      { title: "Freely set your prices", body: "Your own pricing logic with individual margin" },
      { title: "Your own brand & look", body: "Marketed entirely under your own corporate identity" },
      { title: "Direct customer contact", body: "Customer hotline routed to the partner" },
      { title: "Scalable", body: "B2C, B2B, and project business can be combined" },
    ],
    process: [
      "Kickoff & alignment on commercial ownership",
      "Your own pricing and tariff portfolio are designed",
      "1st-level support processes are set up at the partner",
      "Live launch once pricing, support, and billing integration are in place",
    ],
    faq: [
      {
        q: "Who sets the tariff prices?",
        a: "You do — with your own pricing logic and individual margin.",
      },
      {
        q: "Who handles support?",
        a: "1st-level support is yours; newSIM handles 2nd-level support, platform operations, and regulatory compliance (BNetzA).",
      },
    ],
    ownershipLevel: 3,
    icon: "sliders",
  },
  {
    id: "white-label-mvno",
    slug: "white-label-mvne",
    navLabel: "White Label MVNE Platform",
    step: 4,
    name: "White Label MVNO Platform",
    image: "produkt-white-label-mvne.webp",
    tagline: "Full customer ownership — newSIM provides only the core platform.",
    description:
      "Full customer ownership stays with the partner — newSIM provides only the core platform in the background and the Telefónica connectivity.",
    idealFor: "Partners with the ambition to become a full-fledged virtual mobile operator",
    newSimResponsibilities: ["Platform operations", "Telefónica connectivity"],
    partnerResponsibilities: [
      "Customer ownership as an MVNO",
      "Tariff portfolio",
      "End-to-end customer service",
      "BNetzA regulatory compliance",
    ],
    process: [
      "Kickoff & technical integration",
      "Telefónica network connectivity is set up",
      "Your own tariff portfolio and customer service processes are built",
      "Live launch once the tariff portfolio, customer service, and BNetzA regulatory compliance are in place",
    ],
    faq: [
      {
        q: "What does newSIM provide in this model?",
        a: "Only the core platform in the background and the Telefónica connectivity — full customer ownership stays with you.",
      },
      {
        q: "Who handles regulation and support?",
        a: "Both are entirely yours: end-to-end customer service as well as regulatory compliance with the BNetzA.",
      },
    ],
    ownershipLevel: 4,
    icon: "crown",
  },
];
export const comparisonTable: typeof de.comparisonTable = {
  title: "Branded Reseller vs. White Label Partner — a direct comparison",
  note: '"optional" = selectable in the White Label model',
  columns: ["Function", "Branded Reseller", "White Label Partner", "Note"],
  rows: [
    ["Brand (logo)", "Partner", "Partner", "Logo / plan name"],
    ["Tariff portfolio", "newSIM", "Partner", "GB volume / bandwidth"],
    ["Landing page", "newSIM", "optional", "Order flow"],
    ["Marketing & Sales", "Partner", "Partner", "Signup commission to partner"],
    ["Order Management", "newSIM", "optional", "Web interface or API"],
    ["1st-level support", "newSIM", "optional", "Own customer hotline at the partner"],
    ["2nd-level support", "newSIM", "newSIM", "Technical escalation"],
    ["Billing & invoicing", "newSIM", "optional", "Invoicing service & dispatch"],
    ["Receivables collection", "newSIM", "Partner", "Collections & dunning"],
    ["Commercial Ownership", "newSIM", "Partner", "Who owns the customer relationship"],
  ],
};

export const whiteLabelBuildingBlocksSection: typeof de.whiteLabelBuildingBlocksSection = {
  eyebrow: "Optional building blocks",
  title: "Not just the platform — the complete customer journey too.",
  intro:
    "Order flow, website, app, and customer portal can be added individually or combined — fully customizable in colors, typography, logo/icons/images, and tone of voice.",
};

export const whiteLabelBuildingBlocks: typeof de.whiteLabelBuildingBlocks = [
  {
    id: "bestellstrecke",
    title: "Order flow",
    body: "A complete 5-step checkout — cart, phone number, payment, details, summary. Including express checkout (PayPal, Apple Pay), eSIM, and referral codes.",
    icon: "cart",
  },
  {
    id: "website",
    title: "Website",
    body: "Your own brand website with plan overview, benefits, FAQ, and support area — fully in your own look & feel.",
    icon: "monitor",
  },
  {
    id: "app",
    title: "App",
    body: "White-label app for plan management: data usage, invoices, family SIM, refer-a-friend — in your own branding, for iOS and Android.",
    icon: "smartphone",
  },
  {
    id: "kundenportal",
    title: "Customer portal",
    body: "Web login for end customers with no app install — manage contract, usage, and options directly in the browser.",
    icon: "userCircle",
  },
];

export const capabilities: typeof de.capabilities = {
  eyebrow: "What newSIM handles",
  title: "You provide the brand and sales — newSIM handles the rest.",
  items: [
    { title: "Network", body: "MVNO on the Telefónica network, LTE/5G, nationwide coverage.", icon: "wifi" },
    { title: "Tariffs", body: "200+ plans in the white-label portfolio, 5–500 GB, unlimited calls & SMS.", icon: "tariff" },
    { title: "Billing", body: "Rating & billing including CDRs, number management.", icon: "invoice" },
    { title: "SIM / eSIM", body: "SIM card management and end-customer logistics & returns management.", icon: "simCard" },
    { title: "MNP", body: "Number portability and end-to-end activation processes.", icon: "portability" },
    { title: "Support", body: "1st & 2nd-level support, end-customer hotline, technical escalation.", icon: "support" },
    { title: "Regulatory", body: "Licensed service provider status under TKG, BNetzA, TR-AAV, SARV server, roaming.", icon: "shield" },
    { title: "Order Management", body: "Activation, MNP, and SIM logistics via the Telnology® platform.", icon: "clipboard" },
    { title: "Partner portal / API", body: "Web interface and API integration for customer management.", icon: "chart" },
  ],
};

export const platform: typeof de.platform = {
  eyebrow: "Telnology® Platform",
  title: "One system for product, ordering, service, and billing across every sales channel.",
  intro:
    "The newSIM Telnology® platform is the enabling platform and Business Support System (BSS) behind the scenes — for B2C and B2B, across every sales channel.",
  channelsLayer: {
    label: "Sales channels · B2C · B2B · B2B2C",
    items: ["Consumers", "Business customers", "ISP carriers · utilities", "Mobile partners", "IT & telecom system integrators"],
  },
  coreLabel: "newSIM Telnology® Platform",
  coreTitle: "Enabling platform & Business Support System (BSS)",
  core: [
    { title: "Order Management", body: "Activation · MNP · SIM logistics · letter shop", icon: "clipboard" },
    { title: "Product Management", body: "Tariffs · data promos · roaming · travel · IoT", icon: "tariff" },
    { title: "Customer Service", body: "1st & 2nd-level support · self-service portal", icon: "support" },
    { title: "Billing & Rating", body: "CDR · credit checks · collections · reporting", icon: "invoice" },
  ],
  networkLayer: {
    label: "Network · regulation · interfaces",
    items: ["Telefónica network (LTE/5G · IoT/M2M)", "BNetzA licensed service provider · TR-AAV", "API · web interface · SFTP"],
  },
};

export const businessAreas: typeof de.businessAreas = {
  eyebrow: "Three business areas under one roof",
  title: "White-label mobile, our own consumer app, and international travel eSIM.",
  areas: [
    {
      badge: "B2B2C · White Label",
      title: "White-Label Mobile",
      body: "Designed with Telefónica with no minimum commitment. Every partner offers their own mobile portfolio.",
      tags: ["Mobile", "IoT / M2M", "Voice & Data"],
    },
    {
      badge: "B2C · Brand",
      title: "easyTEL App",
      body: "Our own mobile app: sign up for, switch, cancel, and manage mobile contracts entirely via app — a digital order flow in white-label format.",
      tags: ["End-to-end", "Self-service", "White-label capable"],
    },
    {
      badge: "International",
      title: "One Mobile World",
      body: "Affordable travel eSIM for more than 200 countries with custom data packages — a prepaid product, rechargeable anytime.",
      tags: ["200+ countries", "eSIM", "Prepaid"],
    },
  ],
};
export const socialProof: typeof de.socialProof = {
  eyebrow: "References",
  title: "30+ white-label partners under contract",
  body: "Utilities, regional ISPs, mobile retailers, energy providers, and established carriers rely on the Telnology® platform — each marketing their own brand.",
  logos: de.socialProof.logos,
};

export const launchProcess: typeof de.launchProcess = {
  eyebrow: "Launch process",
  title: "Commercial launch — parallel onboarding",
  subtitle: "A sample project timeline with milestones and the resources you provide as a partner.",
  phases: [
    {
      week: "Week 0–1",
      title: "Contract basis",
      newsim: ["NDA for contract & API", "Tariff & commission proposal"],
      partner: "A contact from senior management",
    },
    {
      week: "Week 2–3",
      title: "Tariffs",
      newsim: ["Tariffs, retail pricing, commissions, order flow"],
      partner: "A contact from product management",
    },
    {
      week: "Week 3–4",
      title: "Onboarding",
      newsim: ["Web portal setup, Telnology and API system training"],
      partner: "A contact from IT",
    },
    {
      week: "Week 4–6",
      title: "Launch",
      newsim: ["Training on activation and customer processes for market launch"],
      partner: "A contact from sales for a team call",
    },
  ],
  partnerEffort:
    "Three named contacts (management, product management, IT) — no technology of your own, no regulatory burden, no SIM logistics.",
  milestone: {
    duration: "4–6 weeks",
    body: "From signed NDA to the commercial launch of your own mobile brand.",
  },
};

export const legal = de.legal;
export const pricing: typeof de.pricing = {
  disclaimer:
    "All figures on volumes, bandwidths, and scope of services are provided without guarantee — we're happy to discuss individual terms and pricing in a personal conversation.",

  tariffPortfolio: {
    title: "Wholesale tariffs up to 500 GB",
    subtitle: "Unlimited calls & SMS across all networks — available immediately, with data promos and custom data snacks",
    maxGb: 300,
    maxGbWithOption: 500,
    minGb: 5,
    bandwidthTiers: ["50 Mbit/s", "100 Mbit/s"],
    availableVolumesGb: [5, 15, 20, 25, 30, 35, 40, 45, 60, 120, 150, 300],
    dataPromo: "+5 GB · +10 GB · +15 GB",
    dataOption: "+100 GB (bookable up to 2×)",
    conditions: {
      provision: [
        "One-time activation commission upon signup",
        "Branded Reseller model: fixed monthly airtime commission on every active contract",
        "White Label model: variable airtime commission based on your own defined retail price",
      ],
      flexibilitaet: [
        "No minimum purchase",
        "Contract terms freely selectable between 1 and 24 months",
        "Start without a volume commitment, scale according to real demand",
        "Plan changes: upgrade/downgrade option",
      ],
      weiterentwicklung: [
        "New wholesale products every year",
        "Data promos for sales campaigns",
        "Data snacks available as add-ons",
        "International roaming options",
        "Extra travel eSIM available",
      ],
    },
  },

  flyingStart: {
    title: "Flying Start Fiber — Mobile Broadband",
    subtitle:
      "The all-in-one solution bridges the gap until your fiber connection is active. We're happy to discuss specific pricing in a personal conversation — here's an overview of what's included.",
    highlights: [
      {
        title: "Flexible to use",
        points: ["No waiting time", "Immediate activation", "Custom-fit term, managed by you"],
        icon: "bolt",
      },
      { title: "5G Router", points: ["FRITZ!", "TP-Link"], icon: "wifi" },
      {
        title: "Telefónica network",
        points: ["50 to 150 Mbit/s download", "Nationwide coverage"],
        icon: "tower",
      },
      {
        title: "For every customer",
        points: ["B2C – interim solution until FTTH is active", "B2B – temporary backup internet", "Projects – mobile router solutions"],
        icon: "layers",
      },
      {
        title: "End-customer logistics",
        points: ["Direct shipping", "Router service", "Refurbishment"],
        icon: "portability",
      },
      {
        title: "Commercial Ownership",
        points: ["Full control with the partner", "Upgrade options for end customers"],
        icon: "crown",
      },
    ],
    packages: [
      {
        name: "Basic",
        product: "SIM Only 300GB",
        inclusiveGb: 300,
        rebookable: "2× 100 GB available as add-on",
        streamingHint: "approx. 60 hrs of HD streaming/month",
        bandwidth: "100 Mbit/s (5G network)",
        term: "Flexible",
      },
      {
        name: "Premium",
        product: "SIM Only 500GB",
        inclusiveGb: 500,
        rebookable: "2× 100 GB available as add-on",
        streamingHint: "approx. 150 hrs of HD streaming/month",
        bandwidth: "100 Mbit/s (5G network)",
        term: "Flexible",
      },
    ],
    hardware: [
      {
        name: "TP-Link complete package",
        router: "TP-Link Archer NX200 (standard)",
        volumeHint: "300 GB or 500 GB, your choice",
        tariffHint: "incl. shipping logistics, returns management & refurbishment service",
      },
      {
        name: "FRITZ! complete package",
        router: "FRITZ! 6850 5G (5G · Wi-Fi 6, standard)",
        volumeHint: "300 GB or 500 GB, your choice",
        tariffHint: "incl. shipping logistics, returns management & refurbishment service",
      },
    ],
  },

  iotM2m: {
    title: "IoT & M2M Platform",
    subtitle:
      "newSIM provides IoT and M2M tariffs on the Telnology® platform as a white-label model — for connectivity services in B2B, B2B2B, and B2B2C. Regardless of the chosen business model: Branded Reseller, White Label Reseller, or White Label MVNO platform.",
    highlights: [
      { title: "SIM Diversity", points: ["Standard · M2M · Industrial · Embedded SIM"], icon: "simCard" },
      { title: "IoT Connectivity", points: ["Connecting devices via the Telefónica network"], icon: "wifi" },
      { title: "Secure Data Cloud", points: ["Your own encrypted APN connection"], icon: "shield" },
      { title: "Private Networking", points: ["Isolated network segments per use case, on request"], icon: "layers" },
      { title: "National Roaming", points: ["Backup across all German networks"], icon: "tower" },
      { title: "Dynamic Datapooling", points: ["Volume optimization across the entire portfolio"], icon: "sliders" },
      { title: "SMS Lock & Project Pricing", points: ["Class restriction & project-based pricing"], icon: "tariff" },
    ],
  },

  commercial: {
    title: "Commercial Terms",
    subtitle: "A transparent cost structure with preferred terms for BREKO eG members — details in a personal conversation.",
    tiers: [
      {
        label: "Set Up",
        cadence: "one-time",
        description: "Telnology platform provisioning, network registration, tariff setup",
      },
      {
        label: "Operations",
        cadence: "monthly",
        description: "Platform operations, 2nd-level support, clearing services, MNP, reporting",
      },
      {
        label: "Managed Service",
        cadence: "optional, flat-rate",
        description: "1st & 2nd-level support, end-customer hotline, activation service, invoicing service, iFrame integration",
      },
      {
        label: "Launch package",
        cadence: "one-time",
        description: "Onboarding for up to 500 customers incl. Branded Reseller landing page",
      },
    ],
    footnote: "BREKO eG members receive preferred terms — individual offer in a personal conversation.",
  },
};
export const faq: typeof de.faq = [
  {
    q: "Do we need our own network infrastructure or regulatory license?",
    a: "No. newSIM is already a licensed service provider under the TKG and an MVNO on the Telefónica network. You benefit from our existing regulatory coverage and LTE/5G network — without your own BNetzA registration.",
  },
  {
    q: "How long does the launch really take?",
    a: "A simple commercial launch goes live in 4–6 weeks, with NDA, contract, tariff templates, and onboarding running in parallel on both sides. Your own brand under the Branded Reseller model is ready to launch in just 4 weeks.",
  },
  {
    q: "What if we want to start with minimal risk?",
    a: "All models start without a minimum commitment and without a volume obligation — you scale according to real demand. The Branded Reseller model also has the lowest complexity, since newSIM handles nearly the entire value chain.",
  },
  {
    q: "Who owns the customer relationship — us or newSIM?",
    a: "Legally, newSIM — as a licensed service provider under the TKG — remains the end customer's direct contracting party up to the White Label MVNO platform model; the end-customer contract and invoice run in newSIM's name, and the partner receives a commission for it. What differs is commercial ownership (brand, pricing): with Branded Reseller it sits with newSIM, with White Label Reseller it sits with the partner. Only with the White Label MVNO platform does the partner, as its own service provider, also take on the direct end-customer contract itself.",
  },
  {
    q: "Can we switch from one model to the next later on?",
    a: "The four models are designed as increasing stages of expansion — from Full Service through Branded Reseller and White Label Reseller to the White Label MVNO platform. The exact migration path is worked out individually in conversation.",
  },
  {
    q: "What happens with support requests from our end customers?",
    a: "Depending on the model, newSIM either fully handles 1st- and/or 2nd-level support or offers it optionally, while the partner operates the customer hotline under its own name — see the model comparison for the exact breakdown.",
  },
  {
    q: "How are end customers billed?",
    a: "Rating and billing of CDRs runs through the Telnology® platform. Depending on the model, either newSIM (Branded Reseller) or the partner (White Label) handles receivables management — for the partner, invoicing and receivables management are carried out in newSIM's name.",
  },
  {
    q: "What does getting started cost?",
    a: "Terms consist of a one-time setup fee, a monthly operations flat rate, and an optional managed service — details in the pricing section. We'll discuss exact terms in a personal conversation.",
  },
  {
    q: "Is IoT/M2M connectivity possible too, not just classic mobile?",
    a: "Yes. The Telnology® platform provides its own white-label IoT/M2M portfolio for B2B, B2B2B, and B2B2C — including SIM Diversity, Secure Data Cloud, and Dynamic Datapooling.",
  },
];

export const finalCta: typeof de.finalCta = {
  title: "Ready for your own mobile brand?",
  body: "In a short conversation, we'll find out which model fits your level of ambition — from Full Service to your own MVNO platform.",
};

export const contacts: typeof de.contacts = [
  {
    name: "newSIM",
    role: "Partner Management",
    email: "service@newsim.de",
    phone: "(06421) 620 36 111",
  },
];
export const useCases = de.useCases;
export const developerPages = de.developerPages;
export const iotShop = de.iotShop;
export const consultingServices = de.consultingServices;
