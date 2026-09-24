"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container";
import { PhoneMockup } from "../PhoneMockup";
import { site } from "@/lib/content";
import { basePath } from "@/lib/basePath";

export function PageHero({
  eyebrow,
  title,
  tagline,
  image,
  imageAlt,
  phoneLabel,
  ctaLabel,
  ctaHref,
  bullets,
  secondaryCtaLabel,
  secondaryCtaHref,
}: {
  eyebrow: string;
  title: string;
  tagline: string;
  image?: string;
  imageAlt?: string;
  phoneLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
  bullets?: string[];
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-dark pt-36 pb-20 text-white sm:pt-40 sm:pb-24">
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
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 uppercase">
              {eyebrow}
            </p>
            <h1 className="font-heading balance max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="balance mt-6 max-w-xl text-lg leading-relaxed text-white/70">{tagline}</p>

            {bullets && bullets.length > 0 && (
              <ul className="mt-6 max-w-xl space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[15px] leading-snug text-white/85">
                    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.5 8.5l3 3 6-7" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={ctaHref ?? site.calendlyUrl}
                className="font-heading inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-primary"
              >
                {ctaLabel ?? site.primaryCta}
              </Link>
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="font-heading inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          </motion.div>

          {image ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative aspect-square overflow-hidden rounded-[2rem] border border-dark-line sm:rounded-[2.5rem]"
            >
              <Image
                src={`${basePath}/${image}`}
                alt={imageAlt ?? title}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </motion.div>
          ) : (
            phoneLabel && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="hidden lg:block"
              >
                <PhoneMockup tone="dark" label={phoneLabel} className="aspect-[9/16] w-full" />
              </motion.div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}
