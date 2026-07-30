"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { PageHero } from "./PageHero";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { Icon } from "../Icon";
import type { DeveloperPage } from "@/lib/content";

export function DeveloperDetail({ page }: { page: DeveloperPage }) {
  return (
    <>
      <PageHero eyebrow="Developer" title={page.name} tagline={page.heroTagline} />

      <section className="bg-background py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Überblick</p>
              <p className="balance mt-4 text-xl leading-relaxed text-ink">{page.overview}</p>
              <Link
                href="/kontakt"
                className="font-heading mt-8 inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
              >
                Zugang anfragen
              </Link>
            </Reveal>

            <RevealGroup className="grid gap-3">
              {page.capabilities.map((c) => (
                <motion.div
                  key={c}
                  variants={revealItem}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4"
                >
                  <Icon name={page.icon} className="h-4.5 w-4.5 shrink-0 text-primary-ink" />
                  <span className="text-sm font-medium text-ink">{c}</span>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>
    </>
  );
}
