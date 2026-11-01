"use client";

import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { FaqAccordion } from "../FaqAccordion";
import { useLocale } from "@/lib/i18n/context";

export function FAQ() {
  const { content } = useLocale();
  const { faq } = content;
  return (
    <section id="faq" className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Häufige Fragen vor der Entscheidung"
          body="Die Antworten, die im Sales-Gespräch am häufigsten gefragt werden."
        />

        <Reveal className="mt-14 max-w-3xl">
          <FaqAccordion items={faq} />
        </Reveal>
      </Container>
    </section>
  );
}
