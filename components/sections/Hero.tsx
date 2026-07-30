"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { PhoneMockup } from "../PhoneMockup";
import { Icon } from "../Icon";
import { hero, proofPoints, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-dark pt-40 pb-24 text-white sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 15% 20%, rgba(148,184,233,0.28), transparent 60%), radial-gradient(500px circle at 85% 0%, rgba(148,184,233,0.12), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 uppercase"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading balance max-w-4xl whitespace-pre-line text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="balance mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
            >
              {hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={site.calendlyUrl}
                className="font-heading inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-primary"
              >
                {site.primaryCta}
              </a>
              <a
                href="#modelle"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 px-7 py-3.5 text-sm font-medium text-white/90 transition-colors hover:bg-primary/10"
              >
                Die 4 Modelle ansehen
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(148,184,233,0.35), transparent 70%)" }}
            />
            <PhoneMockup tone="dark" label="Ihre Marke" className="aspect-[9/16] w-full" />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -left-8 top-10 flex items-center gap-2 rounded-2xl border border-white/10 bg-dark-surface/90 px-3 py-2.5 text-xs font-medium text-white/80 shadow-xl backdrop-blur"
            >
              <Icon name="shield" className="h-4 w-4 text-primary" />
              Diensteanbieter gem. TKG
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="absolute -right-6 bottom-16 flex items-center gap-2 rounded-2xl border border-white/10 bg-dark-surface/90 px-3 py-2.5 text-xs font-medium text-white/80 shadow-xl backdrop-blur"
            >
              <Icon name="wifi" className="h-4 w-4 text-primary" />
              MVNO · Telefónica
            </motion.div>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-4"
        >
          {proofPoints.map((p) => (
            <div key={p.label}>
              <dt className="sr-only">{p.label}</dt>
              <dd className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                {p.value}
                {"suffix" in p && p.suffix && (
                  <span className="ml-1 text-lg font-medium text-white/50">{p.suffix}</span>
                )}
              </dd>
              <p className="mt-2 text-sm leading-snug text-white/50">{p.label}</p>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
