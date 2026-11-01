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
export const useCases: typeof de.useCases = [
  {
    slug: "mobilfunk-fachhandel",
    name: "Mobile Retailers",
    image: "usecase-mobilfunk-fachhandel.webp",
    icon: "smartphone",
    heroTagline: "Simply extend your mobile portfolio with your own brand — and control the margin yourself.",
    challenge:
      "In the classic contract-renewal business (VVL) run by the major network operators, specialty retailers earn a comparatively simple commission — and often lose the customer afterwards to the operators' own online channels.",
    solution:
      "Via the Telnology® platform, newSIM offers your own tariff portfolio, run under your dealer brand, with several additional, parallel revenue streams — the customer stays with you for good.",
    painPoints: [
      "In the classic VVL business, it usually comes down to a single, comparatively simple commission — additional revenue levers go unused.",
      "Contract renewals are increasingly migrating to the operators' own online channels — retailers lose their customer base.",
      "A plan under someone else's network-operator brand creates no customer loyalty to your own store.",
    ],
    solutionSteps: [
      "Several additional, parallel revenue streams: ongoing airtime commission, a volume-based margin lever, and a signup commission per plan.",
      "newSIM handles network connectivity, regulatory compliance, and platform operations in the background.",
    ],
    revenueStreams: {
      eyebrow: "Value Proposition for Retailers",
      title: "Four revenue streams for your mobile business",
      items: [
        {
          icon: "invoice",
          title: "Ongoing airtime commission",
          body: "Monthly, for as long as the customer stays active — not just a one-time payment at signup.",
        },
        {
          icon: "chart",
          title: "Volume-based margin lever",
          body: "An additional lever above the plan's base rate, scaling with the plan chosen.",
        },
        {
          icon: "tariff",
          title: "One-time signup commission",
          body: "Tiered by plan size, paid directly at signup.",
        },
        {
          icon: "sliders",
          title: "Share of the provisioning fee",
          body: "Additionally adjustable via discount codes.",
        },
      ],
    },
    nonMonetaryBenefits: [
      "Your own plan names and your logo on the invoice — the customer experiences your retail brand.",
      "Full customer management directly via the Telnology® platform: up-/downsell, renewals, and documents — no hotline of your own required.",
      "Contract renewals happen in your own store — not in a network operator's online channel.",
      "Your hardware margin stays untouched: newSIM plans are SIM-only, and you keep selling devices from your own range.",
    ],
    audience: ["Mobile Phone Shops", "Chain Retailers", "Consumer Electronics Retailers"],
    exampleLabel: "Your Shop · Your Plan",
    exampleCaption:
      "Your own plan names and your logo on the invoice — the customer experiences your retail brand, not the operator's.",
    faq: [
      {
        q: "Do I only earn once, at signup?",
        a: "No — on top of the one-time signup commission, you also earn an ongoing airtime commission for as long as the customer stays active, plus a volume-based margin lever.",
      },
      {
        q: "Do I lose the customer to the network operator at contract renewal?",
        a: "No — the contract renewal takes place directly in your store, not in a network operator's online channel.",
      },
      {
        q: "What happens to my hardware margin?",
        a: "It stays untouched — newSIM plans are SIM-only, and you keep selling devices from your own range.",
      },
    ],
    recommendedModelIds: ["branded-reseller", "white-label-reseller"],
  },
  {
    slug: "stadtwerke-isp-glasfaser",
    name: "Utilities, ISPs & Fiber Providers",
    image: "usecase-stadtwerke-isp-glasfaser.webp",
    icon: "building",
    heroTagline: "Mobile as a natural and necessary complement to your fiber portfolio — and a lever for ARPU uplift per customer.",
    challenge:
      "Placeholder: Municipal utilities and regional ISPs want to extend their fiber portfolio with mobile to bind customers holistically — classically a high regulatory and technical barrier to entry.",
    solution:
      "Placeholder: newSIM handles network connectivity, regulatory compliance, and platform operations, while the partner markets their portfolio under their own brand — including the Flying Start fiber solution to bridge the gap until FTTH activation.",
    painPoints: [
      "National providers like Telekom, Vodafone, Telefónica, 1&1, and freenet sell internet, landline, TV, and mobile all from a single source — with a bundle discount.",
      "Once Open Access opens your own network to competitors, the complete package decides the end customer — not the line itself.",
      "Without mobile, bundling revenue is missing from your customer base, and churn risk rises at every fiber contract's end.",
    ],
    solutionSteps: [
      "Mobile becomes the fourth pillar alongside internet, landline, and TV — from triple play to quad play.",
      "newSIM handles network connectivity, regulatory compliance, and platform operations in the background.",
      "Mobile Broadband — the Flying Start fiber solution bridges the time until FTTH activation.",
    ],
    audience: ["Municipal Utilities", "Regional ISPs", "Fiber Providers"],
    exampleLabel: "Your Fiber Bundle",
    exampleCaption:
      "Mobile becomes the fourth pillar alongside internet, landline, and TV — from triple play to quad play.",
    quadPlay: {
      eyebrow: "The Challenge",
      title: "Without mobile, the fourth pillar is missing in Open Access competition.",
      subtitle:
        "National providers sell complete packages; regional network operators typically offer only three of the four services.",
      triplePlay: ["TV", "Telephony", "Internet"],
      quadPlay: ["Mobile", "TV", "Telephony", "Internet"],
      quadPlayLabel: "with newSIM",
      points: [
        {
          title: "Complete portfolios from national service providers",
          body: "Telekom, Vodafone, Telefónica, 1&1, and freenet sell internet, landline, TV, and mobile all from a single source — with a bundle discount.",
        },
        {
          title: "Open Access opens your own network to competitors",
          body: "Once national providers gain access to the regional network, the complete package decides the end customer — not the line itself.",
        },
        {
          title: "Missing mobile costs you twice",
          body: "Mobile complements your product range both as a service and as an access alternative. No bundling revenue in your base, and higher churn risk at every fiber contract's end.",
        },
      ],
    },
    faq: [
      {
        q: "What is Open Access?",
        a: "The regulatorily mandated opening of your own fiber network to other providers — once this applies, the complete package decides the end customer, not the line alone.",
      },
      {
        q: "Is the Mobile Broadband solution flexible in contract term?",
        a: "Yes, the solution was designed together with Telefónica and can be ended at the point of fiber activation.",
      },
      {
        q: "Can the customer stream every day, and is the data volume enough for that?",
        a: "Yes, the solution offers 100 Mbit/s download speed with up to 500 GB of data per month. That lets the customer stream up to 3 hours of TV every day.",
      },
    ],
    recommendedModelIds: ["white-label-reseller", "white-label-mvno"],
  },
  {
    slug: "itk-systemhaeuser",
    name: "ICT System Integrators",
    image: "usecase-itk-systemhaeuser.webp",
    icon: "chip",
    heroTagline: "Mobile as a building block in your B2B portfolio for specialized business-customer solutions.",
    challenge:
      "Placeholder: ICT system integrators serve business customers holistically — mobile is often missing as a standalone, high-margin building block in the portfolio.",
    solution:
      "Placeholder: Custom B2B plans and IoT/M2M connectivity can be integrated directly into existing customer relationships, without your own network infrastructure.",
    painPoints: [
      "Mobile connectivity is missing as a standalone, high-margin building block in the B2B portfolio.",
      "No network infrastructure of your own to offer mobile directly.",
      "Business customers expect holistic support from a single source, with the ability to manage their plans themselves.",
    ],
    solutionSteps: [
      "Design custom B2B plans and integrate them into your customer solution.",
      "Generate additional margin and keep full commercial ownership.",
      "newSIM handles network connectivity and platform operations in the background.",
    ],
    audience: ["System Integrators", "IT Service Providers", "Telecom Resellers"],
    exampleLabel: "Your B2B Plan",
    exampleCaption:
      "Custom B2B plans under your own brand — integrated directly into your existing customer relationships.",
    faq: [
      {
        q: "Can we also offer IoT/M2M connectivity for our customers?",
        a: "Yes. The Telnology® platform gives you your own white-label IoT/M2M portfolio — including SIM Diversity, Secure Data Cloud, and Dynamic Datapooling, ideal for connectivity and smart-building projects for your business customers.",
      },
      {
        q: "What does the margin structure look like?",
        a: "In the White Label Reseller model, you set your own end-customer prices and, with that, your own margin — you keep full commercial ownership of your pricing.",
      },
    ],
    recommendedModelIds: ["full-service", "white-label-reseller"],
  },
  {
    slug: "banken-versicherungen",
    name: "Banks & Insurers",
    image: "usecase-banken-versicherungen.webp",
    icon: "shield",
    heroTagline: "Mobile as a cross-selling and customer-retention product.",
    challenge:
      "Placeholder: Banks and insurers are looking for additional, everyday-relevant products for customer retention — with high requirements for regulatory compliance and brand presentation.",
    solution:
      "Placeholder: A fully white-label-capable mobile product can be offered under your own brand and within your own compliance framework, while newSIM provides the regulatory and technical foundation.",
    painPoints: [
      "How can your own customer base be extended with additional, everyday-relevant products for customer retention, and how can retention be improved?",
      "How can I ideally round out my own product range and add a genuine benefit to the customer account?",
      "A third-party product without your own branding doesn't feel trustworthy enough.",
    ],
    solutionSteps: [
      "A fully white-label-capable mobile product under your own brand.",
      "Full integration into the customer journey via API.",
      "newSIM provides the regulatory and technical foundation.",
    ],
    audience: ["Banks", "Insurers", "Financial Service Providers"],
    exampleLabel: "Your Brand · Your Mobile",
    exampleCaption:
      "A fully white-label-capable mobile product under your own brand.",
    faq: [
      {
        q: "Who bears regulatory responsibility toward the BNetzA?",
        a: "newSIM is regulated by the BNetzA as a service provider under the TKG and takes on regulatory responsibility in the background — you offer the product entirely under your own brand, without having to act as a telecommunications provider yourself.",
      },
      {
        q: "Does the mobile product appear to our customers as our own product?",
        a: "Yes. As a fully white-label-capable product, only your brand appears to the end customer — newSIM provides network connectivity, regulatory compliance, and technology in the background.",
      },
    ],
    recommendedModelIds: ["white-label-reseller", "white-label-mvno"],
  },
  {
    slug: "influencer",
    name: "Influencers",
    image: "usecase-influencer.webp",
    icon: "link",
    heroTagline: "Your own mobile plan for your own community.",
    challenge:
      "Placeholder: Creators with a large reach want to offer their own, credible product for their community — without building their own telecommunications company.",
    solution:
      "Placeholder: A Branded Reseller plan is ready to launch within a few weeks and can be marketed entirely under your own name and look & feel.",
    painPoints: [
      "Your community expects a genuine, credible offer — not an interchangeable advertising partnership.",
      "Building your own telecommunications company is far too complex, both regulatorily and technically.",
      "Without genuine brand control, a third-party plan doesn't feel authentic to your own brand.",
    ],
    solutionSteps: [
      "A Branded Reseller plan under your own name and look & feel.",
      "Ready to launch in a few weeks instead of months.",
      "newSIM handles operations, billing, and support in the background.",
    ],
    audience: ["Content Creators", "Social Media Brands", "Community Brands"],
    exampleLabel: "Live in 4 Weeks · Your Brand",
    exampleCaption: "A Branded Reseller plan under your own name and look & feel.",
    whyItPays: {
      eyebrow: "Subscription Product",
      title: "Your own mobile plan",
      points: [
        {
          title: "Recurring revenue",
          body: "Every customer pays every month, for the entire contract term of up to 24 months — not just once.",
        },
        {
          title: "Hype-resistant",
          body: "The contract term secures revenue well beyond the launch hype.",
        },
        {
          title: "Zero operations",
          body: "newSIM handles service, billing, SIM logistics, and regulatory compliance in the background.",
        },
        {
          title: "A real asset",
          body: "Your customer base has a market value of its own — as the well-known example of Mint Mobile shows.",
        },
      ],
    },
    faq: [
      {
        q: "How quickly is my own plan ready to launch?",
        a: "As a Branded Reseller, typically within 4 weeks.",
      },
      {
        q: "How much do I earn per contract?",
        a: "As a Branded Reseller, you earn a monthly airtime commission on every active contract, plus a one-time signup commission.",
      },
    ],
    recommendedModelIds: ["branded-reseller"],
  },
  {
    slug: "vereine",
    name: "Clubs & Associations",
    image: "usecase-vereine.webp",
    icon: "flag",
    heroTagline: "Mobile benefits for members and fans.",
    challenge:
      "Clubs are looking for new ways to bind members and fans more closely beyond the season — and for additional, recurring revenue streams beyond membership fees and one-off merchandise sales.",
    solution:
      "A mobile plan under your own club brand becomes another merchandising product — one that members use every day, and that the club can offer without any operational effort of its own.",
    painPoints: [
      "Classic merchandise like jerseys or fan gear only creates a one-off bond — what's missing for lasting fan closeness is a product that accompanies members every day.",
      "Additional, recurring revenue streams beyond membership fees and ticketing are in demand.",
      "Building a mobile offering of your own is far too complex for the club, both regulatorily and administratively.",
    ],
    solutionSteps: [
      "A mobile plan under your club brand — another piece of fan merchandise that members hold in their hand every day.",
      "The club's name accompanies members and fans through everyday life — noticeably closer than a scarf in the closet.",
      "newSIM handles operations, billing, and support in the background — no extra administrative effort for the club.",
    ],
    audience: ["Sports Clubs", "Associations", "Fan Clubs"],
    exampleLabel: "Your Club Plan",
    exampleImage: "fancell_fenertalk_phone-1.png.webp",
    exampleCaption:
      "This is what a mobile plan under a club brand looks like in practice — the example of fenertalk, the plan from Turkish top-flight club Fenerbahçe.",
    whyItPays: {
      eyebrow: "Merchandising Product",
      title: "Your mobile plan as fan merchandise",
      points: [
        {
          title: "Recurring revenue",
          body: "Every member pays monthly for the entire contract term — an additional, predictable revenue stream alongside membership fees and merchandise.",
        },
        {
          title: "Closer to fans",
          body: "The club's name accompanies members and fans on their smartphone every day — more visible and more present than most merchandise.",
        },
        {
          title: "Zero operations",
          body: "newSIM handles service, billing, SIM logistics, and regulatory compliance in the background — no extra work for the club or its office.",
        },
      ],
    },
    faq: [
      {
        q: "Does the club face any extra administrative effort?",
        a: "No. newSIM handles plan operations, billing, SIM logistics, and support in the background — the club faces no extra effort.",
      },
      {
        q: "How does the club benefit financially?",
        a: "As a Branded Reseller, you earn a monthly airtime commission on every active contract, plus a one-time signup commission — on top of the intangible value of stronger fan loyalty.",
      },
    ],
    recommendedModelIds: ["full-service", "branded-reseller"],
  },
];

export const developerPages: typeof de.developerPages = [
  {
    slug: "api",
    name: "API",
    image: "developer-api.webp",
    icon: "chip",
    heroTagline: "The external gateway to the Telnology® platform — for your own systems.",
    overview:
      "The newSIM API offers the same functional scope as the Telnology® platform — it's the external, programmatic gateway through which partner systems address newSIM directly and receive responses in real time.",
    capabilities: [
      "Order Management & Activation",
      "MNP Processes",
      "Billing & Rating (CDR)",
      "Reporting & Data Export",
    ],
  },
  {
    slug: "telnology",
    name: "Telnology®",
    image: "developer-telnology.webp",
    icon: "layers",
    heroTagline: "The enabling platform behind every newSIM model.",
    overview:
      "Telnology® is the enabling platform and Business Support System (BSS) behind every newSIM model — it connects sales channels, order management, billing, and customer service with Telefónica network connectivity, for B2C and B2B alike.",
    capabilities: [
      "Billing & Rating (CDR, phone numbers, collections)",
      "Customer Service (1st & 2nd level)",
      "Order Management (activation, MNP, SIM logistics)",
      "Reporting & API",
    ],
    faq: [
      {
        q: "Is Telnology® an app for end customers?",
        a: "No. Telnology® is the Business Support System and enabling platform in the background — it combines order management, billing, customer service, and network connectivity for all sales channels, independent of any particular end-customer app or website.",
      },
      {
        q: "Which sales channels does Telnology® connect?",
        a: "Consumer customers, business customers, ISP carriers and municipal utilities, mobile partners, and ICT system integrators all run through the same platform — B2C, B2B, and B2B2C.",
      },
      {
        q: "Which network is Telnology® connected to?",
        a: "The Telefónica network (LTE/5G as well as IoT/M2M) — with BNetzA service-provider status under the TKG and TR-AAV, plus API, web-interface, and SFTP connectivity.",
      },
    ],
  },
];

export const iotShop: typeof de.iotShop = {
  hero: {
    eyebrow: "IoT & M2M",
    title: "IoT connectivity that fits your business.",
    tagline:
      "SIM cards for connected devices — on the Telefónica network, white-label capable, and managed directly via the Telnology® platform.",
    bullets: [
      "M2M SIM for LTE/5G and dedicated IoT/M2M on the Telefónica network.",
      "BNetzA-regulated as a service provider under the TKG & TR-AAV.",
      "Scalable from pilot project to large fleet — white-label capable for B2B, B2B2B, and B2B2C.",
    ],
    image: "developer-api.webp",
    primaryCtaLabel: "Request IoT Offer",
    primaryCtaHref: "/iot/anfrage",
    secondaryCtaLabel: "View IoT Plans",
    secondaryCtaHref: "/#iot-m2m",
  },
  featureTabs: [
    {
      key: "sim",
      label: "M2M SIM",
      icon: "simCard",
      title: "One SIM for your entire device portfolio",
      body: "Your devices connect on the Telefónica network — LTE/5G as well as dedicated IoT/M2M. One SIM generation for pilot project and rollout.",
      points: ["LTE/5G as well as IoT/M2M", "BNetzA service provider under the TKG & TR-AAV", "Scalable from test quantities to large fleets"],
    },
    {
      key: "portal",
      label: "Portal",
      icon: "monitor",
      title: "Management via the Telnology® platform",
      body: "Activate, monitor, and manage SIM cards — via the web interface or directly through API or SFTP connectivity into your own systems.",
      points: ["Activation & monitoring in the web interface", "API and SFTP connectivity", "White-label capable for your own systems"],
    },
    {
      key: "sicherheit",
      label: "Security",
      icon: "shield",
      title: "Secure for B2B, B2B2B, and B2B2C",
      body: "SIM Diversity, Secure Data Cloud, and Dynamic Datapooling protect your connectivity — regardless of your business model.",
      points: ["SIM Diversity", "Secure Data Cloud", "Dynamic Datapooling"],
    },
  ],
  trust: {
    eyebrow: "Why newSIM",
    title: "Regulated connectivity with a personal touch.",
    points: [
      { icon: "shield", title: "BNetzA-regulated", body: "Service provider under the TKG and TR-AAV." },
      { icon: "tower", title: "Telefónica network", body: "LTE/5G as well as dedicated IoT/M2M." },
      { icon: "support", title: "Support from Germany", body: `Your personal contact in ${site.locations}.` },
    ],
  },
};

export const consultingServices: typeof de.consultingServices = [
  {
    slug: "g2m-strategie-mvno",
    name: "G2M Strategy for MVNOs",
    image: "consulting-g2m-strategie.webp",
    icon: "chart",
    heroTagline: "Go-to-market strategy for launching your own mobile business.",
    overview:
      "We advise and develop concepts for companies seeking a successful market entry with mobile plans, and support their establishment in the German market. We analyze market potential and develop the end-to-end process for new products across offline and online channels for your company, optionally supported by an app-based digital customer journey and including the build-out of an ecosystem with the right digital services, bundles, and up- and cross-selling. Goal-oriented marketing concepts, measurable results, and tailored, needs-based solutions are a fixed part of our service offering.",
    forWhom:
      "For companies that want to enter the German market successfully with mobile plans and establish themselves there for the long term.",
    phases: [
      { title: "Analysis", body: "We analyze the market potential and your starting position for entering the market with mobile plans." },
      { title: "Strategy", body: "Develop model choice, positioning, and pricing logic for long-term success in the mobile market." },
      { title: "Implementation", body: "Plan concept, app-based customer journey, and connection to the Mobile-as-a-Service platform are implemented together." },
    ],
    serviceBlocks: [
      { title: "Potential Analysis", body: "Market and competition.", icon: "pulse" },
      { title: "Business Case", body: "3–5 year planning.", icon: "chart" },
      { title: "Go-to-Market Concept", body: "Planning a successful product and sales strategy.", icon: "link" },
    ],
    deliverables: ["G2M strategy paper", "Model and positioning recommendation", "Launch roadmap"],
    relatedModelIds: ["branded-reseller", "white-label-reseller"],
    faq: [
      {
        q: "Is the initial consultation chargeable?",
        a: "No. The initial conversation is non-binding and free of charge — we get to know your project and give an initial assessment before discussing the further scope of consulting.",
      },
      {
        q: "Am I committed to a model after the consultation?",
        a: "No. The strategy delivers a recommendation — the decision for a model is yours to make independently.",
      },
    ],
  },
  {
    slug: "potentialanalyse-mobilfunk-glasfaser",
    name: "Potential Analysis Mobile & Fiber",
    image: "consulting-potentialanalyse.webp",
    icon: "pulse",
    heroTagline: "Assess and evaluate the market potential for your portfolio as part of your business planning.",
    forWhom:
      "For companies and network operators who want to optimize and realign their product portfolio and customer offering for fiber and mobile.",
    phases: [
      { title: "Assessment", body: "Analyze the existing portfolio and sales processes." },
      { title: "Potential Evaluation", body: "Review market and customer potential for revenue and competitiveness." },
      { title: "Recommendations", body: "Concrete action planning to increase revenue and margin at the product and sales level." },
    ],
    serviceBlocks: [
      { title: "Potential Analysis", body: "Market and competition.", icon: "pulse" },
      { title: "Sales & Marketing Planning", body: "G2M concept and initiatives.", icon: "chart" },
      { title: "Transformation", body: "Realignment and monitoring of all sales activities.", icon: "layers" },
    ],
    deliverables: ["Action plan for sales initiatives", "Model recommendation", "Economic feasibility assessment"],
    relatedModelIds: ["white-label-reseller", "white-label-mvno"],
    faq: [
      {
        q: "Do I need prior mobile experience for this?",
        a: "No. The potential analysis starts exactly where you stand today — even without prior mobile experience.",
      },
      {
        q: "What if no potential is found?",
        a: "Our experience has shown that there is generally always potential to increase sales efficiency.",
      },
    ],
  },
  {
    slug: "sales-strategie-online-offline",
    name: "Sales Strategy Online & Offline",
    image: "consulting-sales-strategie.webp",
    icon: "link",
    heroTagline: "Sales strategy across every channel.",
    forWhom:
      "For companies and network operators who want to successfully market their mobile portfolio across B2C e-commerce, B2B2C retail, and B2B business-customer sales.",
    phases: [
      { title: "Channel Analysis", body: "Existing channels in B2C e-commerce, B2B2C retail, and B2B business-customer sales are captured and evaluated." },
      { title: "Concept", body: "Sales strategy for new-customer acquisition in B2C (telesales & retail) and B2B (SME) across online and offline channels." },
      { title: "Rollout", body: "Implementation and execution of the sales initiatives together with the team." },
    ],
    serviceBlocks: [
      { title: "Sales Strategy", body: "Where to play and how to win.", icon: "chart" },
      { title: "Efficiency Gains", body: "Processes, organization, target systems, monitoring.", icon: "sliders" },
      { title: "Customer Retention", body: "Retention, cross- and upselling, loyalty programs.", icon: "link" },
    ],
    deliverables: ["Sales goal and strategy planning", "Channel prioritization", "Action plan for new customers and cross-/upsell"],
    relatedModelIds: ["branded-reseller", "full-service"],
    faq: [
      {
        q: "Does this also cover brick-and-mortar sales?",
        a: "Yes — the strategy takes both online and offline channels into account, including brick-and-mortar retail.",
      },
      {
        q: "Does newSIM also support the implementation?",
        a: "Yes, as part of the consulting project, newSIM also supports the implementation and execution of the strategy.",
      },
      {
        q: "Can newSIM also provide the e-commerce order flow?",
        a: "newSIM can optionally provide a white-label order flow and the corresponding website for the partner.",
      },
    ],
  },
  {
    slug: "kupfer-glasfaser-transformation",
    name: "Copper-to-Fiber Transformation",
    image: "consulting-kupfer-glasfaser-transformation.webp",
    icon: "tower",
    heroTagline: "The digital future runs on fiber and mobile. We advise on network transformation.",
    forWhom:
      "For network operators who want to phase out copper-based services from their portfolio, so that operating costs come down quickly and competitiveness is preserved for the future.",
    phases: [
      { title: "Assessment", body: "Analyze the existing portfolio and customer base." },
      { title: "IT & Platform Check", body: "Review the technical capabilities and interface connections for the target products." },
      { title: "Project Management", body: "Taking responsible project leadership within the organization for the end-to-end transformation." },
    ],
    serviceBlocks: [
      {
        title: "Conceptual Consulting",
        body: "Development of a market approach tailored to target group and product, based on the existing xDSL portfolio.",
        icon: "pulse",
      },
      {
        title: "End-to-End Project Management",
        body: "Holistic leadership of all relevant stakeholders and process owners.",
        icon: "clipboard",
      },
      {
        title: "Transformation",
        body: "Continuous tracking of project progress and review of existing contracts with providers and service partners.",
        icon: "layers",
      },
    ],
    deliverables: [
      "Transformation concept for migrating the xDSL customer base",
      "Realizing cost-reduction potential",
      "Connecting new providers (Open Access)",
    ],
    relatedModelIds: ["white-label-reseller", "white-label-mvno"],
    faq: [
      {
        q: "What exactly is Flying Start Fiber?",
        a: "A mobile broadband solution that bridges customers during the migration from copper to fiber connections.",
      },
      {
        q: "Does newSIM also support the implementation of the copper-to-fiber transformation?",
        a: "Yes, as part of the consulting project, newSIM also supports the implementation and execution of the strategy.",
      },
      {
        q: "Is newSIM also on-site to lead the project?",
        a: "newSIM ensures the project is supported throughout, and is of course also on-site.",
      },
    ],
  },
];
