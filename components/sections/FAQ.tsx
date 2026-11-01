"use client";

import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { FaqAccordion } from "../FaqAccordion";
import { useLocale } from "@/lib/i18n/context";
import { useStrings } from "@/lib/i18n/strings";

export function FAQ() {
  const { content } = useLocale();
  const { faq } = content;
  const t = useStrings().faq;
  return (
    <section id="faq" className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} body={t.body} />

        <Reveal className="mt-14 max-w-3xl">
          <FaqAccordion items={faq} />
        </Reveal>
      </Container>
    </section>
  );
}
