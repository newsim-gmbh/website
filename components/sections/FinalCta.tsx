"use client";

import { motion } from "framer-motion";
import { LocalizedLink as Link } from "../LocalizedLink";
import { Container } from "../Container";
import { useLocale } from "@/lib/i18n/context";

export function FinalCta() {
  const { content } = useLocale();
  const { finalCta, site } = content;
  return (
    <section id="kontakt" className="relative overflow-hidden bg-dark py-28 text-white sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(700px circle at 50% 0%, rgba(148,184,233,0.3), transparent 60%)",
        }}
      />
      <Container className="relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading balance mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl"
        >
          {finalCta.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="balance mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70"
        >
          {finalCta.body}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href={site.calendlyUrl}
            className="font-heading inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-primary"
          >
            {site.primaryCta}
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
