"use client";

import { Container } from "../Container";
import { Reveal } from "../Reveal";
import { Icon, type IconName } from "../Icon";
import { socialProof } from "@/lib/content";

const placeholderCategories: { label: string; icon: IconName }[] = [
  { label: "Stadtwerk", icon: "building" },
  { label: "Regionaler ISP", icon: "wifi" },
  { label: "Energieversorger", icon: "bolt" },
  { label: "Carrier", icon: "tower" },
  { label: "Stadtwerk", icon: "building" },
  { label: "Regionaler ISP", icon: "wifi" },
  { label: "Energieversorger", icon: "bolt" },
  { label: "Carrier", icon: "tower" },
];

export function SocialProof() {
  const track = [...placeholderCategories, ...placeholderCategories];

  return (
    <section className="border-y border-line bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">{socialProof.eyebrow}</p>
            <h2 className="font-heading balance mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {socialProof.title}
            </h2>
            <p className="balance mt-4 text-base leading-relaxed text-ink-soft">{socialProof.body}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent"
              />
              <div className="flex w-max animate-marquee gap-4">
                {track.map((item, i) => (
                  <div
                    key={i}
                    className="flex h-20 w-40 shrink-0 flex-col items-center justify-center gap-1.5 rounded-2xl border border-line bg-line/40 text-center text-xs font-medium text-ink-soft"
                  >
                    <Icon name={item.icon} className="h-5 w-5 text-primary-ink" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-xs text-ink-soft/70">{socialProof.disclaimer}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
