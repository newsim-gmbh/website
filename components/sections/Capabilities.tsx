"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem } from "../Reveal";
import { capabilities } from "@/lib/content";

export function Capabilities() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={capabilities.eyebrow} title={capabilities.title} />

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((item) => (
            <motion.div
              key={item.title}
              variants={revealItem}
              className="group bg-surface p-7 transition-colors hover:bg-background"
            >
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
