"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem } from "../Reveal";
import { Icon } from "../Icon";
import { PhoneMockup } from "../PhoneMockup";
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
              className="relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface p-8"
            >
              <Icon
                name={item.icon}
                className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 text-primary/[0.07]"
              />

              <div className="relative flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-ink">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <span className="inline-flex w-fit rounded-full bg-line px-3 py-1 text-[11px] font-medium tracking-wide text-ink-soft uppercase">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-heading relative mt-5 text-xl font-bold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="relative mt-3 text-[15px] leading-relaxed text-ink-soft">{item.body}</p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {item.points.map((p) => (
                  <span key={p} className="rounded-full bg-line px-3 py-1.5 text-xs text-ink-soft">
                    {p}
                  </span>
                ))}
              </div>
              {item.title === "White Label App" && (
                <PhoneMockup tone="sky" label="Ihr Branding" className="relative mt-6 h-44" />
              )}
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
