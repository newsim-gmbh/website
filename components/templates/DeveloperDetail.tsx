"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { PageHero } from "./PageHero";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { FaqAccordion } from "../FaqAccordion";
import { PlatformArchitecture } from "../PlatformArchitecture";
import { ApiRequestForm } from "../ApiRequestForm";
import type { DeveloperPage } from "@/lib/content";
import { developerPages, platform, site } from "@/lib/content";

export function DeveloperDetail({ page }: { page: DeveloperPage }) {
  const otherPages = developerPages.filter((p) => p.slug !== page.slug);
  const isTelnology = page.slug === "telnology";
  const isApi = page.slug === "api";

  return (
    <>
      <PageHero eyebrow="Developer" title={page.name} tagline={page.heroTagline} image={page.image} />

      {isTelnology && (
        <section className="bg-dark py-14 text-white">
          <Container>
            <div className="grid grid-cols-3 gap-x-8 gap-y-10">
              <div>
                <p className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
                  {platform.channelsLayer.items.length} Vertriebskanäle
                </p>
                <p className="mt-2 text-sm leading-snug text-white/60">B2C · B2B · B2B2C</p>
              </div>
              <div>
                <p className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
                  {platform.core.length} Kernfunktionen
                </p>
                <p className="mt-2 text-sm leading-snug text-white/60">Order · Product · Service · Billing</p>
              </div>
              <div>
                <p className="font-heading text-xl font-bold tracking-tight sm:text-2xl">1 Plattform</p>
                <p className="mt-2 text-sm leading-snug text-white/60">Für alle Vertriebskanäle</p>
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className={isTelnology ? "bg-background py-16 sm:py-20" : "bg-background py-24 sm:py-32"}>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Überblick</p>
              <p className="balance mt-4 text-xl leading-relaxed text-ink">{page.overview}</p>
              <Link
                href={isApi ? "#api-anfrage" : "/kontakt"}
                className="font-heading mt-8 inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
              >
                {isApi ? "Dokumentation anfragen" : "Zugang anfragen"}
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

      {isTelnology && (
        <section className="bg-dark border-t border-dark-line py-20 text-white sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary uppercase">Architektur</p>
              <h2 className="font-heading balance mt-3 max-w-xl text-2xl font-bold tracking-tight sm:text-3xl">
                {platform.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <PlatformArchitecture />
            </Reveal>
          </Container>
        </section>
      )}

      {isApi && (
        <section id="api-anfrage" className="scroll-mt-24 bg-surface py-20 sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">API-Zugang</p>
              <h2 className="font-heading mt-3 max-w-xl text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                API-Dokumentation anfragen
              </h2>
              <p className="mt-3 max-w-xl text-ink-soft">
                Wir schicken Ihnen die technische Dokumentation zu Endpunkten, Authentifizierung und Datenmodellen zu.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 max-w-2xl">
              <ApiRequestForm />
            </Reveal>
          </Container>
        </section>
      )}

      {page.faq && page.faq.length > 0 && (
        <section className="bg-background py-20 sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">FAQ</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Häufige Fragen zu {page.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 max-w-3xl">
              <FaqAccordion items={page.faq} />
            </Reveal>
          </Container>
        </section>
      )}

      {otherPages.length > 0 && (
        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Weitere Themen</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Passt ein anderes Thema besser?
              </h2>
            </Reveal>
            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-3">
              {otherPages.map((p) => (
                <motion.div key={p.slug} variants={revealItem}>
                  <Link
                    href={`/developer/${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-colors hover:border-primary/40"
                  >
                    <Icon name={p.icon} className="h-5 w-5 text-primary-ink" />
                    <p className="font-heading mt-3 text-base font-bold text-ink">{p.name}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{p.heroTagline}</p>
                  </Link>
                </motion.div>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      <section className="bg-dark py-20 text-white sm:py-28">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-heading balance mx-auto max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              Zugang zu {page.name} anfragen
            </h2>
            <p className="balance mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
              Unverbindliches Gespräch vereinbaren.
            </p>
            <Link
              href={site.calendlyUrl}
              className="font-heading mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-primary"
            >
              Gespräch vereinbaren
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
