// Vorab-Seite "Platz vormerken", solange der eigentliche Markenbaukasten
// (components/markenbaukasten/MarkenbaukastenBuilder.tsx, lib/markenbaukasten.ts)
// noch nicht live ist. Der fertige Baukasten bleibt unverändert im Code —
// zum Go-live hier einfach wieder <MarkenbaukastenBuilder /> statt dieser
// Vorab-Seite rendern (siehe Git-Historie dieser Datei für die vorherige
// Fassung).
import { CampaignHeader } from "@/components/CampaignHeader";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { MarkenbaukastenPrelaunchForm } from "@/components/MarkenbaukastenPrelaunchForm";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/markenbaukasten",
  title: "Markenbaukasten: Ihre eigene Mobilfunkmarke — newSIM",
  description:
    "Gestalten Sie Ihre eigene Mobilfunkmarke in wenigen Minuten. Der Markenbaukasten startet in Kürze — tragen Sie sich ein und wir schalten Sie als Erste frei.",
  image: "/hero-phone.webp",
});

const heroChecklist = ["Kostenlos und unverbindlich", "Ergebnis als Entwurf für Ihre eigene Marke", "In 4 Wochen am Markt – im Netz von Telefónica"];

const steps = [
  { n: 1, title: "Modell", text: "Branded Reseller oder White Label wählen." },
  { n: 2, title: "Marke", text: "Logo hochladen, Farben und Namen festlegen." },
  { n: 3, title: "Tarife", text: "Aus über 250 Tarif-Kombinationen wählen." },
  { n: 4, title: "Preise", text: "Endkundenpreise selbst festlegen." },
  { n: 5, title: "Ergebnis", text: "Ihre Marke im Entwurf – mit Ertragsrechnung." },
];

const previewChecklist = ["Landingpage mit Ihrem Logo", "Rechnung und Auftragsformular", "Kundenportal für Ihre Kunden", "Werbematerial: Flyer, Poster, Aufsteller"];

function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export default function MarkenbaukastenPage() {
  return (
    <>
      <CampaignHeader ctaLabel="Platz vormerken" />
      <main>
        <section className="relative overflow-hidden bg-dark pt-16 pb-16 text-white sm:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(600px circle at 15% 10%, rgba(148,184,233,0.25), transparent 60%)",
            }}
          />
          <Container className="relative py-12 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
              <Reveal>
                <p className="mb-5 inline-flex items-center rounded-full bg-cream px-4 py-1.5 text-xs font-medium tracking-wide text-ink uppercase">
                  Bald verfügbar · Markenbaukasten
                </p>
                <h1 className="font-heading balance max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
                  Gestalten Sie Ihre eigene Mobilfunkmarke.
                  <br />
                  <span className="text-primary">In wenigen Minuten.</span>
                </h1>
                <p className="balance mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                  Logo hochladen, Tarife wählen, Preise festlegen – und sofort sehen, wie Ihre Marke auf
                  Landingpage, Rechnung, Kundenportal und Werbematerial aussieht. Der Markenbaukasten startet in
                  Kürze: Tragen Sie sich ein, und wir schalten Sie als Erste frei.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {heroChecklist.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div id="form">
                <Reveal delay={0.1}>
                  <MarkenbaukastenPrelaunchForm />
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-sky py-20 sm:py-24">
          <Container>
            <Reveal>
              <p className="text-xs font-semibold tracking-wide text-primary-ink uppercase">Markenbaukasten</p>
              <h2 className="font-heading mt-2 max-w-lg text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                In fünf Schritten zu Ihrer Marke
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 grid gap-4 sm:grid-cols-5">
              {steps.map((s) => (
                <div key={s.title} className="rounded-2xl border border-line bg-surface p-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                    {s.n}
                  </span>
                  <p className="font-heading mt-4 font-bold text-ink">{s.title}</p>
                  <p className="mt-1.5 text-sm text-ink-soft">{s.text}</p>
                </div>
              ))}
            </Reveal>
          </Container>
        </section>

        <section className="bg-background py-20 sm:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <h2 className="font-heading max-w-md text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  Sehen Sie sofort, wie Ihre Marke aussieht
                </h2>
                <p className="mt-4 max-w-md text-ink-soft">Der Baukasten zeigt Ihre Marke live auf allen Kontaktpunkten:</p>
                <ul className="mt-6 space-y-3">
                  {previewChecklist.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-ink-soft">
                      <Check className="h-4 w-4 shrink-0 text-primary-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1} className="rounded-3xl bg-gradient-to-br from-sky to-primary/30 p-8 sm:p-10">
                <p className="font-heading text-xl font-bold text-ink">
                  Ihre Marke.
                  <br />
                  Ihr Tarif.
                  <br />
                  Ihre Marge.
                </p>
                <p className="mt-1 text-sm text-ink-soft">Für Fachhändler und Systemhäuser</p>
                <div className="mx-auto mt-6 max-w-[220px] rounded-2xl border border-line bg-surface p-5 shadow-xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">
                    Ihr Logo
                  </span>
                  <p className="font-heading mt-4 text-sm font-bold text-ink">Tarif L · 100 GB</p>
                  <p className="text-xs text-ink-soft">Allnet-Flat · im Netz von Telefónica</p>
                  <div className="mt-3 rounded-lg bg-background px-3 py-2 text-xs text-ink-soft">Ihre Marge einstellbar</div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-dark py-16 text-white sm:py-20">
          <Container>
            <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">Lieber gleich persönlich?</h2>
                <p className="mt-2 max-w-md text-white/70">
                  Partner-Roadshow im Januar und Februar 2027 in acht Städten, jeweils 13–18 Uhr – oder online zum
                  Wunschtermin.
                </p>
              </div>
              <Link
                href="/roadshow"
                className="font-heading inline-flex shrink-0 items-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-white"
              >
                Zur Roadshow →
              </Link>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
