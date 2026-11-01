"use client";

import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup } from "../Reveal";
import { OwnershipScale } from "./OwnershipScale";
import { ModelCard } from "./ModelCard";
import { ComparisonTable } from "./ComparisonTable";
import { useLocale } from "@/lib/i18n/context";
import { useStrings } from "@/lib/i18n/strings";

export function ModelComparison() {
  const { content } = useLocale();
  const { models } = content;
  const t = useStrings().modelComparison;
  return (
    <section id="modelle" className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} body={t.body} />

        <OwnershipScale />

        <RevealGroup className="mt-10 grid gap-6 lg:grid-cols-4">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </RevealGroup>

        <ComparisonTable />
      </Container>
    </section>
  );
}
