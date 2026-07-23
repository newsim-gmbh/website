# newSIM — Website Relaunch

Relaunch von newsim.de als B2B-SaaS-Website für die White-Label-Mobilfunkplattform.
Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

Inhaltliche Grundlage ist die newSIM-Unternehmenspräsentation "Mobilfunk Opportunität"
(Stand Juni 2026) — sämtliche Fakten, Modelle und Konditionen leben zentral in
`lib/content.ts`. Preise/Konditionen sind dort bewusst in einem eigenen, leicht
austauschbaren Block (`pricing`) gehalten.

## Entwicklung

```bash
npm install
npm run dev
```

Seite ist danach unter [http://localhost:3000](http://localhost:3000) erreichbar.

```bash
npm run build   # Production-Build
npm run lint     # ESLint
```

## Struktur

- `app/` — Next.js App Router (Layout, Homepage)
- `components/` — Header, Footer, Sticky Mobile CTA
- `components/sections/` — Homepage-Sektionen (Hero, Modellvergleich, Plattform, Tarife, FAQ, …)
- `lib/content.ts` — Single Source of Truth für alle Texte, Zahlen und Preise
