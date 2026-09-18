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
}: {
  eyebrow: string;
  title: string;
  tagline: string;
  image?: string;
  imageAlt?: string;
  phoneLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
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
            <Link
              href={ctaHref ?? site.calendlyUrl}
              className="font-heading mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-primary"
            >
              {ctaLabel ?? site.primaryCta}
            </Link>
          </motion.div>

          {image ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden aspect-square overflow-hidden rounded-[2.5rem] border border-dark-line lg:block"
            >
              <Image
                src={`${basePath}/${image}`}
                alt={imageAlt ?? title}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
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
