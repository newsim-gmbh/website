"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { PageHero } from "./PageHero";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import type { ConsultingService } from "@/lib/content";

export function ConsultingDetail({ service }: { service: ConsultingService }) {
  return (
    <>
      <PageHero
        eyebrow="Consulting"
        title={service.name}
        tagline={service.heroTagline}
        ctaLabel="Beratungsgespräch anfragen"
      />

      <section className="bg-background py-24 sm:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Für wen</p>
            <p className="balance mt-4 text-xl leading-relaxed text-ink">{service.forWhom}</p>
          </Reveal>

          <div className="mt-16">
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Vorgehen</p>
            </Reveal>
            <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-3">
              {service.phases.map((phase, i) => (
                <motion.div
                  key={phase.title}
                  variants={revealItem}
                  className="rounded-3xl border border-line bg-surface p-7"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="font-heading mt-4 text-base font-bold text-ink">{phase.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{phase.body}</p>
                </motion.div>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.1} className="mt-16 rounded-3xl bg-cream p-8">
            <p className="font-heading text-lg font-bold text-ink">Ergebnisse</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <Link
              href="/kontakt"
              className="font-heading inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
            >
              Beratungsgespräch anfragen
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
