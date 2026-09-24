"use client";

import Image from "next/image";
import { Container } from "../Container";
import { Reveal } from "../Reveal";
import { socialProof } from "@/lib/content";
import { basePath } from "@/lib/basePath";

export function SocialProof() {
  const track = [...socialProof.logos, ...socialProof.logos];

  return (
    <section className="border-y border-line bg-surface py-20 sm:py-28">
      <Container>
        <div>
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">{socialProof.eyebrow}</p>
              <h2 className="font-heading balance mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {socialProof.title}
              </h2>
              <p className="balance mt-4 text-base leading-relaxed text-ink-soft">{socialProof.body}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
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
                {track.map((logo, i) => (
                  <div
                    key={`${logo.file}-${i}`}
                    className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-line bg-white p-4"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={`${basePath}/partner-logos/${logo.file}`}
                        alt={logo.name}
                        fill
                        sizes="160px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
