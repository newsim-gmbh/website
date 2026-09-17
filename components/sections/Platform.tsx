"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { platform, businessAreas } from "@/lib/content";

export function Platform() {
  return (
    <section id="plattform" className="bg-dark border-t border-dark-line py-24 text-white sm:py-32">
      <Container>
        <SectionHeading eyebrow={platform.eyebrow} title={platform.title} body={platform.intro} dark />

        <div className="mt-16 overflow-hidden rounded-3xl border border-dark-line">
          {/* Schicht 1: Vertriebskanäle */}
          <div className="card-dark-gradient border-b border-dark-line p-6 sm:p-8">
            <p className="mb-4 text-xs font-medium tracking-wide text-white/40 uppercase">
              {platform.channelsLayer.label}
            </p>
            <div className="flex flex-wrap gap-3">
              {platform.channelsLayer.items.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Schicht 2: Enabling-Plattform / BSS */}
          <div className="bg-dark p-6 sm:p-8">
            <p className="mb-3 text-xs font-medium tracking-wide text-primary uppercase">{platform.coreLabel}</p>
            <h3 className="font-heading text-lg font-bold text-white sm:text-xl">{platform.coreTitle}</h3>

            <RevealGroup className="mt-6 grid gap-px overflow-hidden rounded-2xl bg-dark-line sm:grid-cols-2 lg:grid-cols-4">
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
          </div>

          {/* Schicht 3: Netz, Regulierung, Schnittstellen */}
          <div className="card-dark-gradient border-t border-dark-line p-6 sm:p-8">
            <p className="mb-4 text-xs font-medium tracking-wide text-white/40 uppercase">
              {platform.networkLayer.label}
            </p>
            <div className="flex flex-wrap gap-3">
              {platform.networkLayer.items.map((n) => (
                <span key={n} className="rounded-full bg-primary/15 px-4 py-2 text-sm text-primary/90">
                  {n}
                </span>
              ))}
            </div>
          </div>
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
