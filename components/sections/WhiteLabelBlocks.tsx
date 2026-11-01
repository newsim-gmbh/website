"use client";

import { LocalizedLink as Link } from "../LocalizedLink";
import { Container } from "../Container";
import { Reveal } from "../Reveal";
import { WhiteLabelBlocksGrid } from "../WhiteLabelBlocksGrid";
import { useLocale } from "@/lib/i18n/context";
import { useStrings } from "@/lib/i18n/strings";

export function WhiteLabelBlocks() {
  const { content } = useLocale();
  const { whiteLabelBuildingBlocksSection } = content;
  const t = useStrings().whiteLabelBlocks;
  return (
    <section className="bg-dark py-24 text-white sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            {whiteLabelBuildingBlocksSection.eyebrow}
          </p>
          <h2 className="font-heading balance mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {whiteLabelBuildingBlocksSection.title}
          </h2>
          <p className="balance mt-4 text-base leading-relaxed text-white/70">
            {whiteLabelBuildingBlocksSection.intro}
          </p>
        </Reveal>

        <div className="mt-12">
          <WhiteLabelBlocksGrid />
        </div>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          <Link
            href="/produkte/branded-reseller#bausteine"
            className="text-sm font-medium text-primary transition-colors hover:text-white"
          >
            {t.viewAtBrandedReseller}
          </Link>
          <Link
            href="/produkte/white-label-reseller#bausteine"
            className="text-sm font-medium text-primary transition-colors hover:text-white"
          >
            {t.viewAtWhiteLabelReseller}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
