"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { launchProcess } from "@/lib/content";

export function LaunchProcess() {
  return (
    <section className="bg-dark py-24 text-white sm:py-32">
      <Container>
        <SectionHeading eyebrow={launchProcess.eyebrow} title={launchProcess.title} body={launchProcess.subtitle} dark />

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {launchProcess.phases.map((phase, i) => (
            <motion.div key={phase.week} variants={revealItem} className="flex flex-col">
              <div className="rounded-2xl bg-white/10 px-4 py-2.5 text-center text-sm font-semibold text-white">
                {phase.week}
              </div>

              <div className="mt-4 flex flex-1 flex-col rounded-3xl border border-dark-line card-dark-gradient p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <p className="font-heading mt-4 text-base font-bold text-white">{phase.title}</p>
                <ul className="mt-3 space-y-1.5">
                  {phase.newsim.map((step) => (
                    <li key={step} className="text-sm leading-relaxed text-white/60">
                      {step}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-[11px] font-medium tracking-wide text-primary uppercase">Sie stellen</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/80">{phase.partner}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>

        <div className="mt-6 grid gap-4 sm:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.1} className="rounded-3xl border border-dark-line card-dark-gradient p-7">
            <p className="text-sm font-medium tracking-wide text-white/50 uppercase">Aufwand auf Partnerseite</p>
            <p className="mt-3 text-base leading-relaxed text-white/80">{launchProcess.partnerEffort}</p>
          </Reveal>
          <Reveal delay={0.15} className="rounded-3xl border border-primary/30 bg-primary/10 p-7">
            <p className="text-sm font-medium tracking-wide text-white/50 uppercase">Meilenstein</p>
            <p className="mt-3 font-heading text-3xl font-bold text-primary">{launchProcess.milestone.duration}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/70">{launchProcess.milestone.body}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
