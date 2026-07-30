"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem } from "../Reveal";
import { Icon, type IconName } from "../Icon";

export interface HubGridItem {
  label: string;
  href: string;
  description: string;
  icon: IconName;
}

export function HubGrid({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: HubGridItem[];
}) {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} body={intro} />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <motion.div key={item.href} variants={revealItem}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_rgba(148,184,233,0.6)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-ink">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-heading mt-5 text-xl font-bold tracking-tight text-ink">{item.label}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-ink">
                  Mehr erfahren
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
