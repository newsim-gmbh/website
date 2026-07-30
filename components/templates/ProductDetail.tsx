"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { PageHero } from "./PageHero";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { Icon } from "../Icon";
import type { BusinessModel } from "@/lib/content";
import { models } from "@/lib/content";

export function ProductDetail({ model }: { model: BusinessModel }) {
  const otherModels = models.filter((m) => m.id !== model.id);

  return (
    <>
      <PageHero
        eyebrow="Produkte"
        title={model.navLabel}
        tagline={model.tagline}
        phoneLabel={model.navLabel}
      />

      <section className="bg-background py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Im Detail</p>
                <p className="balance mt-4 text-xl leading-relaxed text-ink">{model.description}</p>
              </Reveal>

              {model.idealFor && (
                <Reveal delay={0.05} className="mt-8 rounded-2xl bg-cream p-6">
                  <p className="text-sm font-medium text-ink">Ideal für</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{model.idealFor}</p>
                </Reveal>
              )}

              {model.keyBenefits && (
                <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2">
                  {model.keyBenefits.map((b) => (
                    <motion.div
                      key={b.title}
                      variants={revealItem}
                      className="rounded-2xl border border-line bg-surface p-5"
                    >
                      <p className="font-heading text-sm font-bold text-ink">{b.title}</p>
                      <p className="mt-1.5 text-sm text-ink-soft">{b.body}</p>
                    </motion.div>
                  ))}
                </RevealGroup>
              )}
            </div>

            <Reveal delay={0.1} className="h-fit rounded-3xl border border-line bg-surface p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
                  <Icon name={model.icon} className="h-5 w-5" />
                </div>
                <p className="font-heading text-lg font-bold text-ink">Verantwortungs-Split</p>
              </div>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-medium text-ink">newSIM übernimmt</p>
                  <ul className="mt-3 space-y-2 text-ink-soft">
                    {model.newSimResponsibilities.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-ink">Sie übernehmen</p>
                  <ul className="mt-3 space-y-2 text-ink-soft">
                    {model.partnerResponsibilities.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

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
    </>
  );
}
