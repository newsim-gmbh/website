"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { faq } from "@/lib/content";

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-line py-2">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-4 text-left"
      >
        <span className="text-base font-medium text-ink sm:text-lg">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-line text-lg text-ink-soft"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-[15px] leading-relaxed text-ink-soft">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Häufige Fragen vor der Entscheidung"
          body="Die Antworten, die im Sales-Gespräch am häufigsten gefragt werden."
        />

        <Reveal className={clsx("mt-14 max-w-3xl")}>
          {faq.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
