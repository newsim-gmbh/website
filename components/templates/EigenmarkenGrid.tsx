"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { Reveal, RevealGroup, revealItem } from "../Reveal";
import { PhoneMockup } from "../PhoneMockup";
import type { NavChild } from "@/lib/content";

export function EigenmarkenGrid({ items }: { items: NavChild[] }) {
  return (
    <section className="bg-dark pt-36 pb-24 text-white sm:pt-40 sm:pb-32">
      <Container>
        <Reveal className="max-w-xl">
          <p className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 uppercase">
            Eigenmarken
          </p>
          <h1 className="font-heading balance text-4xl font-bold tracking-tight sm:text-5xl">
            Unsere eigenen Marken.
          </h1>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={revealItem}
              className="flex flex-col overflow-hidden rounded-3xl border border-dark-line card-dark-gradient p-8"
            >
              <PhoneMockup
                tone={item.comingSoon ? "dark" : "sky"}
                label={item.label}
                className="h-52"
              />
              <h2 className="font-heading mt-6 text-xl font-bold text-white">{item.label}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>

              {item.comingSoon ? (
                <span className="font-heading mt-6 inline-flex w-fit items-center rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold text-white/50">
                  Bald verfügbar
                </span>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading mt-6 inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-xs font-bold text-ink transition-colors hover:bg-primary"
                >
                  Zur Website ↗
                </a>
              )}
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
