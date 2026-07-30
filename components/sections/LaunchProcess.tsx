"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { launchProcess } from "@/lib/content";

function Steps({ label, steps }: { label: string; steps: readonly string[] }) {
  return (
    <motion.div
      variants={revealItem}
      className="rounded-3xl border border-dark-line card-dark-gradient p-8"
    >
      <p className="text-sm font-medium tracking-wide text-white/50 uppercase">{label}</p>
      <ol className="mt-5 space-y-4">
        {steps.map((step, i) => (
          <li key={step} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
              {i + 1}
            </span>
            <span className="pt-0.5 text-sm leading-relaxed text-white/70">{step}</span>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

export function LaunchProcess() {
  return (
    <section className="bg-dark py-24 text-white sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={launchProcess.eyebrow}
          title={launchProcess.title}
          body="Paralleles Onboarding auf beiden Seiten — von NDA und Vertragsentwurf bis zum Starttermin."
          dark
        />

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-2">
          <Steps label="Auf Seiten newSIM" steps={launchProcess.newsim} />
          <Steps label="Auf Seiten Carrier / Partner" steps={launchProcess.partner} />
        </RevealGroup>

        <Reveal
          delay={0.15}
          className="mt-6 flex items-center justify-center gap-4 rounded-3xl border border-primary/30 bg-primary/10 px-8 py-8 text-center"
        >
          <p className="text-lg font-semibold text-white sm:text-xl">
            Einfacher kommerzieller Launch in <span className="text-primary">4–6 Wochen</span> live!
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
