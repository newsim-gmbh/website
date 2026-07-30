"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem } from "../Reveal";
import { ImagePlaceholder } from "../ImagePlaceholder";
import { solutions } from "@/lib/content";

export function Solutions() {
  return (
    <section id="loesungen" className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={solutions.eyebrow} title={solutions.title} />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {solutions.items.map((item) => (
            <motion.div
              key={item.title}
              variants={revealItem}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-3xl border border-line bg-surface p-8"
            >
              <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium tracking-wide text-primary-ink uppercase">
                {item.badge}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{item.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.points.map((p) => (
                  <span
                    key={p}
                    className="rounded-full bg-line px-3 py-1.5 text-xs text-ink-soft"
                  >
                    {p}
                  </span>
                ))}
              </div>
              {item.title === "White Label App" && (
                <ImagePlaceholder label="App-Mockup / Ihr Branding" tone="sky" className="mt-6 h-40" />
              )}
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
