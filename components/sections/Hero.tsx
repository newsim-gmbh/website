"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container";
import { hero, proofPoints, site } from "@/lib/content";
import { basePath } from "@/lib/basePath";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-dark pt-36 pb-20 text-white sm:pt-40 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 15% 10%, rgba(148,184,233,0.25), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
            <h1 className="font-heading balance whitespace-pre-line text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {hero.headline}
            </h1>

            <p className="balance mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">{hero.sub}</p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href={site.calendlyUrl}
                className="font-heading inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-primary"
              >
                {site.primaryCta}
              </Link>
              <a
                href="#modelle"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 px-7 py-3.5 text-sm font-medium text-white/90 transition-colors hover:bg-primary/10"
              >
                Die 4 Modelle ansehen
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative aspect-square overflow-hidden rounded-[2rem] border border-dark-line sm:rounded-[2.5rem]"
            style={{ backgroundImage: "linear-gradient(to right, #a7bce3, #c9dbea)" }}
          >
            <Image
              src={`${basePath}/hero-phone.webp`}
              alt="newSIM App auf dem Smartphone: In 4 Wochen zum eigenen Mobilfunkbrand"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
              className="object-contain object-bottom"
            />
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4"
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
