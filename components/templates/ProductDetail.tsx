"use client";

import { LocalizedLink as Link } from "../LocalizedLink";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { PageHero } from "./PageHero";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { StepList } from "../StepList";
import { FaqAccordion } from "../FaqAccordion";
import { WhiteLabelBlocksGrid } from "../WhiteLabelBlocksGrid";
import { ComparisonTable } from "../sections/ComparisonTable";
import type { BusinessModel } from "@/lib/content";
import { useLocale } from "@/lib/i18n/context";
import { useStrings } from "@/lib/i18n/strings";

const whiteLabelEligible: BusinessModel["id"][] = ["branded-reseller", "white-label-reseller"];

export function ProductDetail({ model }: { model: BusinessModel }) {
  const { content } = useLocale();
  const { models, useCases, site, whiteLabelBuildingBlocksSection } = content;
  const t = useStrings().productDetail;
  const otherModels = models.filter((m) => m.id !== model.id);
  const relatedUseCases = useCases.filter((uc) => uc.recommendedModelIds.includes(model.id));

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={model.navLabel} tagline={model.tagline} image={model.image} />

      {model.keyBenefits && (
        <section className="bg-dark py-14 text-white">
          <Container>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {model.keyBenefits.map((b) => (
                <div key={b.title}>
                  <p className="font-heading text-xl font-bold tracking-tight sm:text-2xl">{b.title}</p>
                  <p className="mt-2 text-sm leading-snug text-white/60">{b.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {model.idealFor && (
        <section className="bg-background pt-16 sm:pt-20">
          <Container>
            <Reveal className="rounded-3xl bg-sky p-8 sm:p-10">
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">{t.idealFor}</p>
              <p className="balance mt-3 max-w-2xl text-xl font-medium leading-relaxed text-ink">
                {model.idealFor}
              </p>
            </Reveal>
          </Container>
        </section>
      )}

      {model.process && (
        <section className="bg-background py-16 sm:py-20">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">{t.process}</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {t.processTitle}
              </h2>
            </Reveal>
            <div className="mt-10">
              <StepList steps={model.process} />
            </div>
          </Container>
        </section>
      )}

      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">{t.inDetail}</p>
              <p className="balance mt-4 text-xl leading-relaxed text-ink">{model.description}</p>
            </Reveal>

            <Reveal delay={0.1} className="h-fit rounded-3xl border border-line bg-surface p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
                  <Icon name={model.icon} className="h-5 w-5" />
                </div>
                <p className="font-heading text-lg font-bold text-ink">{t.responsibilitySplit}</p>
              </div>

              {(() => {
                const newSimCount = model.newSimResponsibilities.length;
                const partnerCount = model.partnerResponsibilities.length;
                const total = newSimCount + partnerCount;
                const newSimShare = Math.round((newSimCount / total) * 100);
                return (
                  <>
                    <div className="flex h-2 w-full overflow-hidden rounded-full bg-line">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: `${newSimShare}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-primary"
                      />
                      <span className="h-full flex-1 bg-ink" />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs font-medium text-ink-soft">
                      <span>
                        newSIM · {newSimCount} {newSimCount === 1 ? t.task : t.tasks}
                      </span>
                      <span>
                        {t.you} · {partnerCount} {partnerCount === 1 ? t.task : t.tasks}
                      </span>
                    </div>
                  </>
                );
              })()}

              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink">{t.newSimHandles}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {model.newSimResponsibilities.map((r) => (
                      <span
                        key={r}
                        className="inline-flex rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary-ink"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink">{t.youHandle}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {model.partnerResponsibilities.map((r) => (
                      <span key={r} className="inline-flex rounded-full bg-ink px-2.5 py-1 text-xs font-medium text-white">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {whiteLabelEligible.includes(model.id) && (
        <section className="bg-background py-16 sm:py-20">
          <Container>
            <Reveal className="max-w-2xl">
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">{t.classification}</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {t.twoWaysTitle}
              </h2>
              <p className="balance mt-4 text-base leading-relaxed text-ink-soft">
                {t.twoWaysBody}
              </p>
            </Reveal>
            <ComparisonTable />
          </Container>
        </section>
      )}

      {whiteLabelEligible.includes(model.id) && (
        <section id="bausteine" className="bg-dark py-20 text-white sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary uppercase">
                {whiteLabelBuildingBlocksSection.eyebrow}
              </p>
              <h2 className="font-heading balance mt-3 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
                {whiteLabelBuildingBlocksSection.title}
              </h2>
              <p className="balance mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                {whiteLabelBuildingBlocksSection.intro}
              </p>
            </Reveal>
            <div className="mt-10">
              <WhiteLabelBlocksGrid />
            </div>
          </Container>
        </section>
      )}

      {relatedUseCases.length > 0 && (
        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">{t.application}</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {t.usedIn(model.navLabel)}
              </h2>
            </Reveal>
            <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedUseCases.map((uc) => (
                <motion.div key={uc.slug} variants={revealItem}>
                  <Link
                    href={`/use-cases/${uc.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-colors hover:border-primary/40"
                  >
                    <Icon name={uc.icon} className="h-5 w-5 text-primary-ink" />
                    <p className="font-heading mt-3 text-base font-bold text-ink">{uc.name}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{uc.heroTagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary-ink">
                      {t.viewUseCase}
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      {model.faq && model.faq.length > 0 && (
        <section className="bg-background py-20 sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">{t.faq}</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {t.faqFor(model.navLabel)}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 max-w-3xl">
              <FaqAccordion items={model.faq} />
            </Reveal>
          </Container>
        </section>
      )}

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">{t.otherModels}</p>
            <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {t.otherModelsTitle}
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-3">
            {otherModels.map((m) => (
              <motion.div key={m.id} variants={revealItem}>
                <Link
                  href={`/produkte/${m.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-colors hover:border-primary/40"
                >
                  <Icon name={m.icon} className="h-5 w-5 text-primary-ink" />
                  <p className="font-heading mt-3 text-base font-bold text-ink">{m.navLabel}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{m.tagline}</p>
                </Link>
              </motion.div>
            ))}
          </RevealGroup>
          <Reveal delay={0.15} className="mt-8">
            <Link href="/produkte" className="text-sm font-medium text-primary-ink">
              {t.allModelsCompare}
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-dark py-20 text-white sm:py-28">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-heading balance mx-auto max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              {t.readyFor(model.navLabel)}
            </h2>
            <p className="balance mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
              {t.noCommitment}
            </p>
            <Link
              href={site.calendlyUrl}
              className="font-heading mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-primary"
            >
              {site.primaryCta}
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
