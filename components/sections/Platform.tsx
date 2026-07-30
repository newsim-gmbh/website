"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { platform, businessAreas } from "@/lib/content";

export function Platform() {
  return (
    <section id="plattform" className="bg-dark py-24 text-white sm:py-32">
      <Container>
        <SectionHeading eyebrow={platform.eyebrow} title={platform.title} body={platform.intro} dark />

        <div className="mt-16 overflow-hidden rounded-3xl border border-dark-line card-dark-gradient">
          <div className="border-b border-dark-line p-6 sm:p-8">
            <p className="mb-4 text-xs font-medium tracking-wide text-white/40 uppercase">
              Vertriebskanäle · B2C · B2B
            </p>
            <div className="flex flex-wrap gap-3">
              {platform.channels.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <RevealGroup className="grid gap-px border-b border-dark-line bg-dark-line sm:grid-cols-2 lg:grid-cols-4">
            {platform.core.map((c) => (
              <motion.div key={c.title} variants={revealItem} className="card-dark-gradient p-6 sm:p-8">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-primary">
                  <Icon name={c.icon} className="h-4.5 w-4.5" />
                </div>
                <p className="text-sm font-semibold text-white">{c.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/50">{c.body}</p>
              </motion.div>
            ))}
          </RevealGroup>

          <div className="p-6 sm:p-8">
            <p className="mb-4 text-xs font-medium tracking-wide text-white/40 uppercase">
              Netz & Regulierung
            </p>
            <div className="flex flex-wrap gap-3">
              {platform.network.map((n) => (
                <span key={n} className="rounded-full bg-primary/15 px-4 py-2 text-sm text-primary/90">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
          <Reveal className="flex flex-col justify-center rounded-3xl border border-dark-line card-dark-gradient p-8">
            <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">Architektur</p>
            <h3 className="font-heading text-xl font-bold text-white">Sauber getrennte Schichten</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Vertriebskanäle, Enabling-Plattform/BSS und Netz &amp; Regulierung sind klar getrennt — Sie
              docken dort an, wo Sie Kontrolle übernehmen wollen.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl border border-dark-line card-dark-gradient p-8">
            <div className="relative flex h-full min-h-40 flex-col items-center justify-center gap-3">
              {["Vertriebskanäle", "Telnology® BSS", "Netz & Regulierung"].map((label, i) => (
                <div
                  key={label}
                  className="flex w-full max-w-sm items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-medium text-white/70"
                  style={{ transform: `translateX(${(i - 1) * 10}px)` }}
                >
                  <span>{label}</span>
                  <Icon name="layers" className="h-4 w-4 text-primary" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-primary/80 uppercase">
              {businessAreas.eyebrow}
            </p>
            <h3 className="font-heading balance max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
              {businessAreas.title}
            </h3>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 lg:grid-cols-3">
            {businessAreas.areas.map((area) => (
              <motion.div
                key={area.title}
                variants={revealItem}
                className="rounded-3xl border border-dark-line card-dark-gradient p-7"
              >
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-white/60 uppercase">
                  {area.badge}
                </span>
                <h4 className="font-heading mt-4 text-lg font-bold text-white">{area.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{area.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {area.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
