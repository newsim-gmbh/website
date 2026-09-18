"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { PageHero } from "./PageHero";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { StepList } from "../StepList";
import { FaqAccordion } from "../FaqAccordion";
import type { BusinessModel } from "@/lib/content";
import { models, useCases, site } from "@/lib/content";

export function ProductDetail({ model }: { model: BusinessModel }) {
  const otherModels = models.filter((m) => m.id !== model.id);
  const relatedUseCases = useCases.filter((uc) => uc.recommendedModelIds.includes(model.id));

  return (
    <>
      <PageHero eyebrow="Produkte" title={model.navLabel} tagline={model.tagline} image={model.image} />

      {model.keyBenefits && (
        <section className="border-t border-white/10 bg-dark py-14 text-white">
          <Container>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {model.keyBenefits.map((b) => (
                <div key={b.title}>
                  <p className="font-heading text-xl font-bold tracking-tight sm:text-2xl">{b.title}</p>
                  <p className="mt-2 text-sm leading-snug text-white/60">{b.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {model.idealFor && (
        <section className="bg-background pt-16 sm:pt-20">
          <Container>
            <Reveal className="rounded-3xl bg-sky p-8 sm:p-10">
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Ideal für</p>
              <p className="balance mt-3 max-w-2xl text-xl font-medium leading-relaxed text-ink">
                {model.idealFor}
              </p>
            </Reveal>
          </Container>
        </section>
      )}

      {model.process && (
        <section className="bg-background py-16 sm:py-20">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Ablauf</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                So kommen Sie live
              </h2>
            </Reveal>
            <div className="mt-10">
              <StepList steps={model.process} />
            </div>
          </Container>
        </section>
      )}

      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Im Detail</p>
              <p className="balance mt-4 text-xl leading-relaxed text-ink">{model.description}</p>
            </Reveal>

            <Reveal delay={0.1} className="h-fit rounded-3xl border border-line bg-surface p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
                  <Icon name={model.icon} className="h-5 w-5" />
                </div>
                <p className="font-heading text-lg font-bold text-ink">Verantwortungs-Split</p>
              </div>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="min-w-0">
                  <p className="font-medium text-ink">newSIM übernimmt</p>
                  <ul className="mt-3 space-y-2 text-ink-soft">
                    {model.newSimResponsibilities.map((r) => (
                      <li key={r} className="flex min-w-0 gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span className="min-w-0 break-words hyphens-auto">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-ink">Sie übernehmen</p>
                  <ul className="mt-3 space-y-2 text-ink-soft">
                    {model.partnerResponsibilities.map((r) => (
                      <li key={r} className="flex min-w-0 gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                        <span className="min-w-0 break-words hyphens-auto">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {relatedUseCases.length > 0 && (
        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Anwendung</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Wo {model.navLabel} eingesetzt wird
              </h2>
            </Reveal>
            <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedUseCases.map((uc) => (
                <motion.div key={uc.slug} variants={revealItem}>
                  <Link
                    href={`/use-cases/${uc.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-colors hover:border-primary/40"
                  >
                    <Icon name={uc.icon} className="h-5 w-5 text-primary-ink" />
                    <p className="font-heading mt-3 text-base font-bold text-ink">{uc.name}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{uc.heroTagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary-ink">
                      Use Case ansehen
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      {model.faq && model.faq.length > 0 && (
        <section className="bg-background py-20 sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">FAQ</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Häufige Fragen zu {model.navLabel}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 max-w-3xl">
              <FaqAccordion items={model.faq} />
            </Reveal>
          </Container>
        </section>
      )}

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Andere Modelle</p>
            <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Passt ein anderes Modell besser?
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-3">
            {otherModels.map((m) => (
              <motion.div key={m.id} variants={revealItem}>
                <Link
                  href={`/produkte/${m.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-colors hover:border-primary/40"
                >
                  <Icon name={m.icon} className="h-5 w-5 text-primary-ink" />
                  <p className="font-heading mt-3 text-base font-bold text-ink">{m.navLabel}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{m.tagline}</p>
                </Link>
              </motion.div>
            ))}
          </RevealGroup>
          <Reveal delay={0.15} className="mt-8">
            <Link href="/produkte" className="text-sm font-medium text-primary-ink">
              Alle Produkte im Vergleich →
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-dark py-20 text-white sm:py-28">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-heading balance mx-auto max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              Bereit für {model.navLabel}?
            </h2>
            <p className="balance mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
              Unverbindliches Gespräch vereinbaren — ohne Mindest-Kommitment.
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
