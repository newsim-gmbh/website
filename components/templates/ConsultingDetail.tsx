"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { PageHero } from "./PageHero";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { FaqAccordion } from "../FaqAccordion";
import type { ConsultingService } from "@/lib/content";
import { consultingServices, models, site } from "@/lib/content";

export function ConsultingDetail({ service }: { service: ConsultingService }) {
  const otherServices = consultingServices.filter((s) => s.slug !== service.slug);
  const relatedModels = models.filter((m) => service.relatedModelIds?.includes(m.id));

  return (
    <>
      <PageHero
        eyebrow="Consulting"
        title={service.name}
        tagline={service.heroTagline}
        image={service.image}
        ctaLabel="Beratungsgespräch anfragen"
      />

      <section className="bg-dark py-14 text-white">
        <Container>
          <div className="grid grid-cols-3 gap-x-8 gap-y-10">
            <div>
              <p className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
                {service.phases.length} Phasen
              </p>
              <p className="mt-2 text-sm leading-snug text-white/60">Strukturiertes Vorgehen</p>
            </div>
            <div>
              <p className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
                {service.deliverables.length} Deliverables
              </p>
              <p className="mt-2 text-sm leading-snug text-white/60">Konkrete Ergebnisse</p>
            </div>
            <div>
              <p className="font-heading text-xl font-bold tracking-tight sm:text-2xl">{service.duration}</p>
              <p className="mt-2 text-sm leading-snug text-white/60">Dauer</p>
            </div>
          </div>
        </Container>
      </section>

      {service.overview && (
        <section className="bg-background pt-16 sm:pt-20">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Leistung</p>
              <p className="balance mt-4 max-w-3xl text-xl leading-relaxed text-ink">{service.overview}</p>
            </Reveal>
          </Container>
        </section>
      )}

      <section className={service.overview ? "bg-background py-16 sm:py-20" : "bg-background pt-16 sm:pt-20"}>
        <Container>
          <Reveal className="rounded-3xl bg-sky p-8 sm:p-10">
            <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Für wen</p>
            <p className="balance mt-3 max-w-2xl text-xl font-medium leading-relaxed text-ink">
              {service.forWhom}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Vorgehen</p>
            <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              So läuft die Beratung ab
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3">
            {service.phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                variants={revealItem}
                className="rounded-3xl border border-line bg-surface p-7"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <p className="font-heading mt-4 text-base font-bold text-ink">{phase.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{phase.body}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {service.serviceBlocks && (
        <section className="bg-dark py-20 text-white sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary uppercase">Leistungsbausteine</p>
              <h2 className="font-heading balance mt-3 max-w-xl text-2xl font-bold tracking-tight sm:text-3xl">
                Was die Beratung im Detail umfasst.
              </h2>
            </Reveal>
            <RevealGroup className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-3">
              {service.serviceBlocks.map((block) => (
                <motion.div key={block.title} variants={revealItem}>
                  <Icon name={block.icon} className="h-8 w-8 text-primary" />
                  <p className="font-heading mt-4 border-t border-white/20 pt-3 text-lg font-bold text-white">
                    {block.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{block.body}</p>
                </motion.div>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      <section className="bg-background py-16 sm:py-20">
        <Container>
          <Reveal className="rounded-3xl bg-cream p-8">
            <p className="font-heading text-lg font-bold text-ink">Ergebnisse</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="bg-dark py-20 text-white sm:py-28">
        <Container>
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-primary uppercase">Warum newSIM</p>
            <h2 className="font-heading balance mt-3 max-w-xl text-2xl font-bold tracking-tight sm:text-3xl">
              Beratung von denen, die die Plattform selbst betreiben.
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Kein reines Theoriepapier",
                body: "Wir beraten nicht nur — wir betreiben die Enabling-Plattform, Order Management und Netzanbindung selbst.",
              },
              {
                title: "Direkter Anschluss",
                body: "Empfehlungen basieren auf Systemen, die Sie danach auch tatsächlich nutzen würden.",
              },
              {
                title: "Nahtloser Übergang",
                body: "Aus der Beratung wird bei Bedarf ein laufendes Produkt — ohne Systemwechsel oder neuen Partner.",
              },
            ].map((point) => (
              <motion.div
                key={point.title}
                variants={revealItem}
                className="rounded-3xl border border-dark-line card-dark-gradient p-7"
              >
                <p className="font-heading text-base font-bold text-white">{point.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{point.body}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {relatedModels.length > 0 && (
        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Anschluss</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Passende Produkte für {service.name}
              </h2>
            </Reveal>
            <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2">
              {relatedModels.map((m) => (
                <motion.div key={m.id} variants={revealItem}>
                  <Link
                    href={`/produkte/${m.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-colors hover:border-primary/40"
                  >
                    <Icon name={m.icon} className="h-5 w-5 text-primary-ink" />
                    <p className="font-heading mt-3 text-base font-bold text-ink">{m.navLabel}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{m.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary-ink">
                      Modell ansehen
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      {service.faq && service.faq.length > 0 && (
        <section className="bg-background py-20 sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">FAQ</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Häufige Fragen zu {service.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 max-w-3xl">
              <FaqAccordion items={service.faq} />
            </Reveal>
          </Container>
        </section>
      )}

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Andere Themen</p>
            <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Passt ein anderes Thema besser?
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-3">
            {otherServices.map((s) => (
              <motion.div key={s.slug} variants={revealItem}>
                <Link
                  href={`/consulting/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-colors hover:border-primary/40"
                >
                  <Icon name={s.icon} className="h-5 w-5 text-primary-ink" />
                  <p className="font-heading mt-3 text-base font-bold text-ink">{s.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{s.heroTagline}</p>
                </Link>
              </motion.div>
            ))}
          </RevealGroup>
          <Reveal delay={0.15} className="mt-8">
            <Link href="/consulting" className="text-sm font-medium text-primary-ink">
              Alle Consulting-Leistungen →
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-dark py-20 text-white sm:py-28">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-heading balance mx-auto max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              Bereit für {service.name}?
            </h2>
            <p className="balance mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
              Unverbindliches Beratungsgespräch anfragen.
            </p>
            <Link
              href={site.calendlyUrl}
              className="font-heading mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-primary"
            >
              Beratungsgespräch anfragen
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
