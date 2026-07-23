"use client";

import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem } from "../Reveal";
import { motion } from "framer-motion";
import { businessValue } from "@/lib/content";

export function BusinessValue() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={businessValue.eyebrow}
          title={businessValue.title}
          body={businessValue.intro}
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-3">
          {businessValue.points.map((point, i) => (
            <motion.div
              key={point.title}
              variants={revealItem}
              className="rounded-3xl border border-line bg-surface p-8 transition-shadow hover:shadow-[0_20px_60px_-30px_rgba(13,15,20,0.25)]"
            >
              <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{point.body}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
