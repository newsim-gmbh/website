"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Container } from "../Container";
import { PageHero } from "./PageHero";
import { PhoneMockup } from "../PhoneMockup";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { FaqAccordion } from "../FaqAccordion";
import type { UseCase } from "@/lib/content";
import { models, site } from "@/lib/content";
import { basePath } from "@/lib/basePath";

export function UseCaseDetail({ useCase }: { useCase: UseCase }) {
  const recommended = models.filter((m) => useCase.recommendedModelIds.includes(m.id));
  const painPoints = useCase.painPoints ?? [useCase.challenge];
  const solutionSteps = useCase.solutionSteps ?? [useCase.solution];

  return (
    <>
      <PageHero eyebrow="Use Case" title={useCase.name} tagline={useCase.heroTagline} image={useCase.image} />

      {useCase.audience && useCase.audience.length > 0 && (
        <section className="bg-dark pt-8 pb-8 text-white sm:pt-10">
          <Container>
            <Reveal className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-medium tracking-wide text-white/40 uppercase">Passt zu</span>
              {useCase.audience.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/80"
                >
                  {a}
                </span>
              ))}
            </Reveal>
          </Container>
        </section>
      )}

      {useCase.revenueStreams && (
        <section className="bg-dark border-t border-dark-line py-20 text-white sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary uppercase">
                {useCase.revenueStreams.eyebrow}
              </p>
              <h2 className="font-heading balance mt-3 max-w-xl text-2xl font-bold tracking-tight sm:text-3xl">
                {useCase.revenueStreams.title}
              </h2>
            </Reveal>
            <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {useCase.revenueStreams.items.map((r) => (
                <motion.div
                  key={r.title}
                  variants={revealItem}
                  className="rounded-3xl border border-dark-line card-dark-gradient p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-primary">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </div>
                  <p className="font-heading mt-4 text-base font-bold text-white">{r.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{r.body}</p>
                </motion.div>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      {useCase.nonMonetaryBenefits && useCase.nonMonetaryBenefits.length > 0 && (
        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Weitere Vorteile</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Vorteile einer Eigenmarke
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2">
              {useCase.nonMonetaryBenefits.map((b) => (
                <motion.div
                  key={b}
                  variants={revealItem}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-background p-5 text-[15px] leading-relaxed text-ink-soft"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.5 8.5l3 3 6-7" />
                    </svg>
                  </span>
                  <span>{b}</span>
                </motion.div>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      <section className="bg-background py-24 sm:py-32">
        <Container>
          <RevealGroup className="grid gap-6 lg:grid-cols-2">
            <motion.div variants={revealItem} className="rounded-3xl bg-sky p-8">
              <p className="font-heading text-lg font-bold text-ink">Kennen Sie das?</p>
              <ul className="mt-4 space-y-3">
                {painPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={revealItem} className="rounded-3xl bg-cream p-8">
              <p className="font-heading text-lg font-bold text-ink">Wie newSIM hilft</p>
              <ul className="mt-4 space-y-3">
                {solutionSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.5 8.5l3 3 6-7" />
                      </svg>
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </RevealGroup>
        </Container>
      </section>

      {useCase.whyItPays && (
        <section className="bg-background pb-24 sm:pb-32">
          <Container>
            <Reveal className="rounded-3xl bg-cream p-8 sm:p-10">
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">
                {useCase.whyItPays.eyebrow}
              </p>
              <h3 className="font-heading mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {useCase.whyItPays.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {useCase.whyItPays.points.map((p) => (
                  <li key={p.title} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.5 8.5l3 3 6-7" />
                      </svg>
                    </span>
                    <span>
                      <span className="font-semibold text-ink">{p.title}</span> — {p.body}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      )}

      {useCase.quadPlay && (
        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <Reveal className="max-w-2xl">
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">
                {useCase.quadPlay.eyebrow}
              </p>
              <h2 className="font-heading balance mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {useCase.quadPlay.title}
              </h2>
              <p className="balance mt-4 text-base leading-relaxed text-ink-soft">{useCase.quadPlay.subtitle}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 rounded-3xl border border-line bg-background p-8 sm:p-10">
              <p className="text-xs font-medium tracking-wide text-ink-soft uppercase">Portfolio im Vergleich</p>
              <div className="mt-6 grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-8">
                <div>
                  <p className="font-heading text-sm font-bold text-ink">Triple Play</p>
                  <p className="text-xs text-ink-soft">Carrier</p>
                  <div className="mt-3 space-y-2">
                    {useCase.quadPlay.triplePlay.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl bg-line/50 px-4 py-3 text-center text-sm font-medium text-ink-soft"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <span aria-hidden className="text-2xl text-ink-soft/60">
                    →
                  </span>
                </div>

                <div>
                  <p className="font-heading text-sm font-bold text-ink">Quad Play</p>
                  <p className="text-xs text-primary-ink">{useCase.quadPlay.quadPlayLabel}</p>
                  <div className="mt-3 space-y-2">
                    {useCase.quadPlay.quadPlay.map((item) => (
                      <div
                        key={item}
                        className={clsx(
                          "rounded-xl px-4 py-3 text-center text-sm font-medium",
                          item === "Mobilfunk" ? "bg-sky text-ink" : "bg-line/50 text-ink-soft"
                        )}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-3">
              {useCase.quadPlay.points.map((point, i) => (
                <motion.div
                  key={point.title}
                  variants={revealItem}
                  className="rounded-2xl border border-line bg-background p-6"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="font-heading mt-3 text-sm font-bold text-ink">{point.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{point.body}</p>
                </motion.div>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      <section className="bg-dark py-20 text-white sm:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="flex justify-center lg:justify-start">
              {useCase.exampleImage ? (
                <div className="relative aspect-[9/16] w-full max-w-[240px]">
                  <Image
                    src={`${basePath}/${useCase.exampleImage}`}
                    alt={useCase.exampleLabel ?? useCase.name}
                    fill
                    sizes="240px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <PhoneMockup
                  tone="sky"
                  label={useCase.exampleLabel ?? "Ihre Marke · Ihr Tarif"}
                  className="aspect-[9/16] w-full max-w-[240px]"
                />
              )}
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm font-medium tracking-wide text-white/50 uppercase">Konkretes Beispiel</p>
              <h2 className="font-heading balance mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                So könnte Ihr Angebot aussehen
              </h2>
              <p className="balance mt-4 max-w-lg text-base leading-relaxed text-white/70">
                {useCase.exampleCaption ??
                  "Platzhalter: beispielhafte Darstellung — reale Screenshots aus Ihrem individuellen Branding folgen."}
              </p>
              {!useCase.exampleImage && (
                <p className="mt-3 text-xs text-white/40">
                  Beispielhafte Darstellung — reale Screenshots aus Ihrem individuellen Branding folgen.
                </p>
              )}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Empfehlung</p>
            <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Passendes Modell für {useCase.name}
            </h2>
          </Reveal>

          {recommended.length === 1 ? (
            <Reveal delay={0.1} className="mt-10">
              <Link
                href={`/produkte/${recommended[0].slug}`}
                className="group flex flex-col gap-6 rounded-3xl border border-line bg-surface p-8 transition-colors hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                    <Icon name={recommended[0].icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-heading text-xl font-bold text-ink">{recommended[0].navLabel}</p>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">
                      {recommended[0].tagline}
                    </p>
                  </div>
                </div>
                <span className="font-heading inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-colors group-hover:bg-primary group-hover:text-ink">
                  Modell ansehen
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ) : (
            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
              {recommended.map((m) => (
                <motion.div key={m.id} variants={revealItem}>
                  <Link
                    href={`/produkte/${m.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-primary/40"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-ink">
                      <Icon name={m.icon} className="h-5 w-5" />
                    </div>
                    <p className="font-heading mt-4 text-lg font-bold text-ink">{m.navLabel}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-ink">
                      Modell ansehen
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </RevealGroup>
          )}
        </Container>
      </section>

      {useCase.faq && useCase.faq.length > 0 && (
        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">FAQ</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Häufige Fragen
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 max-w-3xl">
              <FaqAccordion items={useCase.faq} />
            </Reveal>
          </Container>
        </section>
      )}

      <section className="bg-dark py-20 text-white sm:py-28">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-heading balance mx-auto max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              Passt das zu Ihnen?
            </h2>
            <p className="balance mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
              Lassen Sie uns in einem unverbindlichen Gespräch klären, wie {useCase.name} für Sie aussehen kann.
            </p>
            <Link
              href={site.calendlyUrl}
              className="font-heading mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-primary"
            >
              {site.primaryCta}
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
