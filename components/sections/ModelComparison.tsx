"use client";

import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup } from "../Reveal";
import { OwnershipScale } from "./OwnershipScale";
import { ModelCard } from "./ModelCard";
import { ComparisonTable } from "./ComparisonTable";
import { models } from "@/lib/content";

export function ModelComparison() {
  return (
    <section id="modelle" className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Geschäftsmodelle"
          title="Wie viel möchten Sie selbst übernehmen?"
          body="Vier Modelle für die Vermarktung — vom schlanken Full Service bis zur kompletten MVNO-Plattform, passend zu Ihrem Ambitionslevel."
        />

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
