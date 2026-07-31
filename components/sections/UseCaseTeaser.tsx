"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { useCases } from "@/lib/content";

export function UseCaseTeaser() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Use Cases"
            title="Für jede Branche das passende Modell."
            body="Ob Fachhandel, Stadtwerke oder Bank — sechs Zielgruppen, sechs unterschiedliche Herausforderungen."
          />
          <Reveal delay={0.1}>
            <Link
              href="/use-cases"
              className="hidden shrink-0 text-sm font-medium text-primary-ink sm:inline-flex"
            >
              Alle Use Cases ansehen →
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <motion.div key={uc.slug} variants={revealItem}>
              <Link
                href={`/use-cases/${uc.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_rgba(148,184,233,0.6)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-ink">
                  <Icon name={uc.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-heading mt-4 text-base font-bold text-ink">{uc.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{uc.heroTagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary-ink">
                  Mehr erfahren
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal className="mt-8 sm:hidden">
          <Link href="/use-cases" className="text-sm font-medium text-primary-ink">
            Alle Use Cases ansehen →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
