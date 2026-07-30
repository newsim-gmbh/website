"use client";

import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem } from "../Reveal";
import { Icon } from "../Icon";
import { motion } from "framer-motion";
import { businessValue, proofPoints } from "@/lib/content";

export function BusinessValue() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={businessValue.eyebrow}
          title={businessValue.title}
          body={businessValue.intro}
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessValue.points.map((point) => (
            <motion.div
              key={point.title}
              variants={revealItem}
              className="rounded-3xl bg-cream p-8 transition-shadow hover:shadow-[0_20px_60px_-30px_rgba(25,25,25,0.18)]"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
                <Icon name={point.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink">{point.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{point.body}</p>
            </motion.div>
          ))}

          <motion.div
            variants={revealItem}
            className="flex flex-col justify-center rounded-3xl bg-dark p-8 text-white"
          >
            <p className="font-heading text-4xl font-bold tracking-tight">{proofPoints[0].value}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{proofPoints[0].label}</p>
          </motion.div>
        </RevealGroup>
      </Container>
    </section>
  );
}
