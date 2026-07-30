"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, revealItem, Reveal } from "../Reveal";
import { pricing } from "@/lib/content";

export function Tariffs() {
  const { tariffPortfolio, flyingStart, commercial, disclaimer } = pricing;

  return (
    <section id="tarife" className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Tarifportfolio"
          title={tariffPortfolio.title}
          body={tariffPortfolio.subtitle}
        />

        <Reveal className="mt-12">
          <div className="rounded-3xl border border-line bg-surface p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="text-sm font-medium text-ink-soft">
                Verfügbare Datenvolumina (GB), Auszug aus dem Portfolio
              </p>
              <div className="flex gap-2">
                {tariffPortfolio.bandwidthTiers.map((b) => (
                  <span key={b} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-ink">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {tariffPortfolio.availableVolumesGb.map((gb) => (
                <span
                  key={gb}
                  className="flex h-11 min-w-11 items-center justify-center rounded-full bg-line px-3 text-sm font-medium text-ink"
                >
                  {gb} GB
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-3 border-t border-line pt-6 text-sm sm:grid-cols-2">
              <p className="text-ink-soft">
                <span className="font-medium text-ink">DATA-Promo: </span>
                {tariffPortfolio.dataPromo}
              </p>
              <p className="text-ink-soft">
                <span className="font-medium text-ink">DATA-Option: </span>
                {tariffPortfolio.dataOption}
              </p>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Provision", items: tariffPortfolio.conditions.provision },
            { title: "Flexibilität", items: tariffPortfolio.conditions.flexibilitaet },
            { title: "Weiterentwicklung", items: tariffPortfolio.conditions.weiterentwicklung },
          ].map((group) => (
            <motion.div
              key={group.title}
              variants={revealItem}
              className="rounded-3xl border border-line bg-surface p-7"
            >
              <p className="text-sm font-semibold text-ink">{group.title}</p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </RevealGroup>

        <div className="mt-24">
          <Reveal>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {flyingStart.title}
            </h3>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2">
            {flyingStart.packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                variants={revealItem}
                className="rounded-3xl border border-line bg-surface p-8"
              >
                <div className="flex items-baseline justify-between">
                  <h4 className="font-heading text-lg font-bold text-ink">{pkg.name}</h4>
                  <span className="text-sm text-ink-soft">{pkg.product}</span>
                </div>
                <p className="mt-6 text-3xl font-semibold tracking-tight text-ink">
                  {pkg.basePrice}
                  <span className="ml-2 text-sm font-normal text-ink-soft">Grundtarif</span>
                </p>
                <p className="mt-2 text-sm text-ink-soft">{pkg.totalPrice}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-ink-soft">
                  <li>{pkg.inclusiveGb} GB inklusive · {pkg.rebookable}</li>
                  <li>{pkg.bandwidth}</li>
                  <li>{pkg.streamingHint}</li>
                  <li>Laufzeit: {pkg.term}</li>
                </ul>
              </motion.div>
            ))}
          </RevealGroup>

          <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-2">
            {flyingStart.hardware.map((hw) => (
              <motion.div
                key={hw.name}
                variants={revealItem}
                className="rounded-3xl bg-cream p-7"
              >
                <p className="font-semibold text-ink">{hw.name}</p>
                <p className="mt-1 text-sm text-ink-soft">{hw.router}</p>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="rounded-xl bg-white/70 p-3">
                    <p className="text-base font-semibold text-ink">{hw.oneTime}</p>
                    <p className="mt-1 text-ink-soft">Einmalzahlung</p>
                  </div>
                  <div className="rounded-xl bg-white/70 p-3">
                    <p className="text-base font-semibold text-ink">{hw.logistics}</p>
                    <p className="mt-1 text-ink-soft">Logistik</p>
                  </div>
                  <div className="rounded-xl bg-white/70 p-3">
                    <p className="text-base font-semibold text-ink">{hw.refurbishment}</p>
                    <p className="mt-1 text-ink-soft">Refurbishment</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-ink-soft">
                  {hw.inclusiveGb} GB inklusive · {hw.tariffHint}
                </p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-24">
          <Reveal>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {commercial.title}
            </h3>
            <p className="mt-3 max-w-2xl text-ink-soft">{commercial.subtitle}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-line text-left text-xs font-medium tracking-wide text-ink-soft uppercase">
                    <th className="px-6 py-4">Position</th>
                    <th className="px-6 py-4">Standard</th>
                    <th className="px-6 py-4">BREKO eG</th>
                    <th className="px-6 py-4">Leistung</th>
                  </tr>
                </thead>
                <tbody>
                  {commercial.tiers.map((tier) => (
                    <tr key={tier.label} className="border-b border-line last:border-0">
                      <td className="px-6 py-4 align-top font-medium text-ink">
                        {tier.label}
                        <div className="mt-1 text-xs font-normal text-ink-soft">{tier.cadence}</div>
                      </td>
                      <td className="px-6 py-4 align-top font-semibold text-ink">{tier.standard}</td>
                      <td className="px-6 py-4 align-top font-semibold text-primary-ink">{tier.breko}</td>
                      <td className="px-6 py-4 align-top text-ink-soft">{tier.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-line px-6 py-5 text-sm font-medium text-ink">
              {commercial.footnote}
            </p>
          </Reveal>
        </div>

        <p className="mt-10 text-sm text-ink-soft">{disclaimer}</p>
      </Container>
    </section>
  );
}
