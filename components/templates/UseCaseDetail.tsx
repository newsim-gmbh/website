"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { PageHero } from "./PageHero";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { Icon } from "../Icon";
import type { UseCase } from "@/lib/content";
import { models } from "@/lib/content";

export function UseCaseDetail({ useCase }: { useCase: UseCase }) {
  const recommended = models.filter((m) => useCase.recommendedModelIds.includes(m.id));

  return (
    <>
      <PageHero eyebrow="Use Case" title={useCase.name} tagline={useCase.heroTagline} phoneLabel={useCase.name} />

      <section className="bg-background py-24 sm:py-32">
        <Container>
          <RevealGroup className="grid gap-6 lg:grid-cols-2">
            <motion.div variants={revealItem} className="rounded-3xl bg-cream p-8">
              <p className="font-heading text-lg font-bold text-ink">Die Herausforderung</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{useCase.challenge}</p>
            </motion.div>
            <motion.div variants={revealItem} className="rounded-3xl bg-sky p-8">
              <p className="font-heading text-lg font-bold text-ink">Wie newSIM hilft</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{useCase.solution}</p>
            </motion.div>
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Empfehlung</p>
            <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Passende Modelle für {useCase.name}
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {recommended.map((m) => (
              <motion.div key={m.id} variants={revealItem}>
                <Link
                  href={`/produkte/${m.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-background p-7 transition-colors hover:border-primary/40"
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
        </Container>
      </section>
    </>
  );
}
