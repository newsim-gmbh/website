"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { platform, businessAreas } from "@/lib/content";

export function Platform() {
  return (
    <section id="plattform" className="bg-dark py-24 text-white sm:py-32">
      <Container>
        <SectionHeading eyebrow={platform.eyebrow} title={platform.title} body={platform.intro} dark />

        <div className="mt-16 overflow-hidden rounded-3xl border border-dark-line bg-dark-surface">
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
              <motion.div key={c.title} variants={revealItem} className="bg-dark-surface p-6 sm:p-8">
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

        <div className="mt-24">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-primary/80 uppercase">
              {businessAreas.eyebrow}
            </p>
            <h3 className="balance max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
              {businessAreas.title}
            </h3>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 lg:grid-cols-3">
            {businessAreas.areas.map((area) => (
              <motion.div
                key={area.title}
                variants={revealItem}
                className="rounded-3xl border border-dark-line bg-dark-surface p-7"
              >
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-white/60 uppercase">
                  {area.badge}
                </span>
                <h4 className="mt-4 text-lg font-semibold text-white">{area.title}</h4>
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
