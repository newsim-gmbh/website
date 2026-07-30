"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem } from "../Reveal";
import { Icon } from "../Icon";
import { capabilities } from "@/lib/content";

export function Capabilities() {
  return (
    <section className="bg-dark py-24 text-white sm:py-32">
      <Container>
        <SectionHeading eyebrow={capabilities.eyebrow} title={capabilities.title} dark />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((item) => (
            <motion.div
              key={item.title}
              variants={revealItem}
              className="rounded-3xl border border-dark-line card-dark-gradient p-7 transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-primary">
                <Icon name={item.icon} />
              </div>
              <h3 className="font-heading text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
