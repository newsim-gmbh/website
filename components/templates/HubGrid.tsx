"use client";

import Link from "next/link";
import clsx from "clsx";
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
  comingSoon?: boolean;
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
    <section className="bg-dark pt-16 pb-24 text-white sm:pt-24 sm:pb-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} body={intro} dark />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item) => {
            const cardClassName = clsx(
              "group flex h-full flex-col overflow-hidden rounded-3xl border border-dark-line card-dark-gradient p-8 transition-all",
              item.comingSoon ? "opacity-60" : "hover:-translate-y-1"
            );
            const content = (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-primary">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-heading mt-5 text-xl font-bold tracking-tight text-white">{item.label}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">{item.description}</p>
                {item.comingSoon ? (
                  <span className="font-heading mt-5 inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/50">
                    Bald verfügbar
                  </span>
                ) : (
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Mehr erfahren
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                )}
              </>
            );

            return (
              <motion.div key={item.href} variants={revealItem}>
                {item.comingSoon ? (
                  <div className={cardClassName}>{content}</div>
                ) : (
                  <Link href={item.href} className={cardClassName}>
                    {content}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
