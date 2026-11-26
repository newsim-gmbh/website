import { CampaignHeader } from "@/components/CampaignHeader";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { RoadshowForm } from "@/components/RoadshowForm";
import { ROADSHOW_DATES } from "@/lib/roadshow";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/roadshow",
  title: "Partner-Roadshow 2027: Ihre eigene Mobilfunkmarke — newSIM",
  description:
    "Partner werden und in 4 Wochen mit eigener Mobilfunkmarke starten. Kostenloser Beratungstermin — persönlich auf der Roadshow in acht Städten oder online zum Wunschtermin.",
  image: "/hero-phone.webp",
});

const heroChecklist = [
  "Roadshow Jan./Feb. 2027 · jeweils 13–18 Uhr",
  "Online-Termine jederzeit möglich",
  "Im Netz von Telefónica · keine Mindestabnahme",
];

const brandBenefits = [
  "Unabhängig werden",
  "Kundenstamm aufbauen",
  "Kunden selbst verwalten",
  "Preise selbst festlegen",
  "Jeden Monat mitverdienen",
];

const steps = [
  { title: "Termin anfragen", text: "Roadshow in Ihrer Stadt oder online – kostenlos und unverbindlich." },
  { title: "Marke & Ertrag durchrechnen", text: "Wir zeigen Ihre Marke im Entwurf und rechnen Ihr Potenzial durch." },
  { title: "In 4 Wochen starten", text: "Vertrag, Einrichtung, Schulung – dann verkaufen Sie unter eigener Marke." },
];

function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export default function RoadshowPage() {
  return (
    <>
      <CampaignHeader ctaLabel="Termin anfragen" />
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
                <p className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 uppercase">
                  Neu · Partnerkonzept Branded Reseller
                </p>
                <h1 className="font-heading balance max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
                  Ihre eigene Mobilfunkmarke.
                  <br />
                  <span className="text-primary">In 4 Wochen am Start.</span>
                </h1>
                <p className="balance mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                  Partner werden – starten Sie mit einem kostenlosen Beratungstermin: persönlich auf der
                  Partner-Roadshow in acht Städten oder online zum Wunschtermin.
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
                  <RoadshowForm />
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-sky py-20 sm:py-24">
          <Container>
            <Reveal>
              <p className="text-xs font-semibold tracking-wide text-primary-ink uppercase">Partner-Roadshow 2027</p>
              <h2 className="font-heading mt-2 max-w-xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Acht Städte. Jeweils 13 bis 18 Uhr.
              </h2>
              <p className="mt-4 max-w-xl text-ink-soft">
                Im Termin sehen Sie Ihre eigene Marke im Entwurf und wir rechnen gemeinsam Ihr Ertragspotenzial durch.
                Die Plätze je Stadt sind begrenzt.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {ROADSHOW_DATES.map((d) => (
                <div key={d.city} className="rounded-2xl border border-line bg-surface p-4">
                  <p className="text-xs font-medium text-primary-ink">{d.date}</p>
                  <p className="font-heading mt-1 text-base font-bold text-ink">{d.city}</p>
                  <p className="mt-0.5 text-xs text-ink-soft">13–18 Uhr</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.15} className="mt-4 flex flex-col items-start gap-4 rounded-2xl bg-dark p-5 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-heading font-bold">Keine Zeit vor Ort?</p>
                <p className="mt-0.5 text-sm text-white/70">Online-Termin zum Wunschzeitpunkt – ab sofort buchbar.</p>
              </div>
              <a
                href="#form"
                className="font-heading inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-white"
              >
                Online-Termin anfragen
              </a>
            </Reveal>
          </Container>
        </section>

        <section className="bg-background py-20 sm:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <h2 className="font-heading max-w-md text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  Ihre Marke. Ihre Kunden. Ihr Ertrag.
                </h2>
                <ul className="mt-6 space-y-3">
                  {brandBenefits.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-ink-soft">
                      <Check className="h-4 w-4 shrink-0 text-primary-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#form"
                  className="font-heading mt-7 inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
                >
                  In 4 Wochen startklar
                </a>
              </Reveal>

              <Reveal delay={0.1} className="rounded-3xl bg-gradient-to-br from-sky to-primary/30 p-8 sm:p-10">
                <div className="mx-auto max-w-[260px] rounded-2xl border border-line bg-surface p-5 shadow-xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">
                    Ihre Marke
                  </span>
                  <p className="font-heading mt-4 text-sm font-bold text-ink">Tarif L · 100 GB</p>
                  <p className="text-xs text-ink-soft">Allnet-Flat · im Netz von Telefónica</p>
                  <p className="font-heading mt-3 text-2xl font-bold text-ink">
                    20 € <span className="text-sm font-medium text-ink-soft">/ Monat</span>
                  </p>
                  <div className="mt-4 rounded-lg bg-background px-3 py-2 text-xs text-ink-soft">Ihr Aufsteller im Shop</div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-sky py-20 sm:py-24">
          <Container>
            <Reveal>
              <h2 className="font-heading max-w-lg text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                In drei Schritten zur eigenen Marke
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 grid gap-5 sm:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.title} className="rounded-2xl border border-line bg-surface p-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="font-heading mt-4 font-bold text-ink">{s.title}</p>
                  <p className="mt-1.5 text-sm text-ink-soft">{s.text}</p>
                </div>
              ))}
            </Reveal>
          </Container>
        </section>

        <section className="bg-background py-20 sm:py-24">
          <Container>
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="font-heading text-xl leading-relaxed text-ink sm:text-2xl">
                „Mit der eigenen Mobilfunkmarke bleibt der Kunde dort, wo er hingehört: bei dem Händler, der ihn
                berät.“
              </p>
              <p className="mt-4 text-sm text-ink-soft">Matthias Engelke, Geschäftsführer der newSIM GmbH</p>
            </Reveal>
          </Container>
        </section>

        <section className="bg-dark py-16 text-center text-white sm:py-20">
          <Container>
            <Reveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Sichern Sie sich Ihren Termin.</h2>
              <p className="mx-auto mt-3 max-w-md text-white/70">
                Die Plätze je Stadt sind begrenzt. Online-Termine sind jederzeit möglich.
              </p>
              <a
                href="#form"
                className="font-heading mt-7 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-white"
              >
                Termin anfragen →
              </a>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
