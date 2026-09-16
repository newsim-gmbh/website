"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "../Container";
import { Reveal } from "../Reveal";
import type { LegalPageContent, LegalParagraph } from "@/lib/content";

const URL_REGEX = /(https?:\/\/[^\s]+)/g;

function linkify(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let i = 0;
  let match: RegExpExecArray | null;
  URL_REGEX.lastIndex = 0;
  while ((match = URL_REGEX.exec(text))) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const raw = match[0];
    const trailingPunctuation = raw.match(/[.,;]+$/)?.[0] ?? "";
    const url = trailingPunctuation ? raw.slice(0, -trailingPunctuation.length) : raw;
    nodes.push(
      <a
        key={`${keyPrefix}-link-${i++}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-white"
      >
        {url}
      </a>
    );
    if (trailingPunctuation) nodes.push(trailingPunctuation);
    lastIndex = match.index + raw.length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function renderLine(text: string, keyPrefix: string): ReactNode[] {
  return linkify(text, keyPrefix);
}

function LegalParagraphView({ paragraph, pKey }: { paragraph: LegalParagraph; pKey: string }) {
  if (typeof paragraph === "string") {
    const lines = paragraph.split("\n");
    return (
      <p className="text-[15px] leading-relaxed text-white/70">
        {lines.map((line, i) => (
          <span key={i}>
            {renderLine(line, `${pKey}-${i}`)}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p className="text-[15px] leading-relaxed text-white/70">
      {paragraph.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{renderLine(part, `${pKey}-${i}`)}</span>
        ) : part.href.startsWith("/") ? (
          <Link
            key={i}
            href={part.href}
            className="text-primary underline underline-offset-2 hover:text-white"
          >
            {part.text}
          </Link>
        ) : (
          <a
            key={i}
            href={part.href}
            target={part.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={part.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="text-primary underline underline-offset-2 hover:text-white"
          >
            {part.text}
          </a>
        )
      )}
    </p>
  );
}

export function LegalPage({ content }: { content: LegalPageContent }) {
  return (
    <section className="relative overflow-hidden bg-dark pt-36 pb-24 text-white sm:pt-40 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 15% 10%, rgba(148,184,233,0.2), transparent 60%)",
        }}
      />
      <Container className="relative max-w-3xl">
        <Reveal>
          <h1 className="font-heading balance text-4xl font-bold tracking-tight sm:text-5xl">
            {content.title}
          </h1>
        </Reveal>

        {content.intro && (
          <Reveal delay={0.05} className="mt-8 space-y-4">
            {content.intro.map((p, i) => (
              <LegalParagraphView key={i} paragraph={p} pKey={`intro-${i}`} />
            ))}
          </Reveal>
        )}

        <div className="mt-14 space-y-10 border-t border-dark-line pt-10">
          {content.sections.map((section, si) => (
            <Reveal key={si} delay={Math.min(si * 0.02, 0.3)}>
              {section.heading && (
                <h2
                  className={
                    section.small
                      ? "font-heading text-base font-bold text-white/90"
                      : "font-heading text-xl font-bold text-white"
                  }
                >
                  {section.heading}
                </h2>
              )}
              {section.paragraphs && (
                <div className={section.heading ? "mt-3 space-y-4" : "space-y-4"}>
                  {section.paragraphs.map((p, pi) => (
                    <LegalParagraphView key={pi} paragraph={p} pKey={`s${si}-${pi}`} />
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
