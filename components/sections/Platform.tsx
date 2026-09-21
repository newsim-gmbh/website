"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { PlatformArchitecture } from "../PlatformArchitecture";
import { platform, businessAreas } from "@/lib/content";

export function Platform() {
  return (
    <section id="plattform" className="bg-dark border-t border-dark-line py-24 text-white sm:py-32">
      <Container>
        <SectionHeading eyebrow={platform.eyebrow} title={platform.title} body={platform.intro} dark />

        <div className="mt-16">
          <PlatformArchitecture />
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
