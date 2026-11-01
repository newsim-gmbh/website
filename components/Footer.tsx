"use client";

import Link from "next/link";
import { LocalizedLink } from "./LocalizedLink";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { companyLegal } from "@/lib/content";
import { useLocale } from "@/lib/i18n/context";
import { useStrings } from "@/lib/i18n/strings";
import { basePath } from "@/lib/basePath";

export function Footer() {
  const { content } = useLocale();
  const { site, mainNav, contacts } = content;
  const t = useStrings().footer;
  return (
    <footer className="border-t border-dark-line bg-dark text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {site.legalName} · Mobile as a Service · {site.locations}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-white/40 uppercase tracking-wide">{t.pageColumn}</p>
            <ul className="mt-4 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <LocalizedLink href={item.href} className="text-sm text-white/70 hover:text-white">
                    {item.label}
                  </LocalizedLink>
                </li>
              ))}
              <li>
                <LocalizedLink href="/kontakt" className="text-sm text-white/70 hover:text-white">
                  {t.kontakt}
                </LocalizedLink>
              </li>
              <li>
                <a
                  href={site.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white"
                >
                  {t.login}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white/40 uppercase tracking-wide">{t.brandsColumn}</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://www.easytel.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white"
                >
                  easyTEL
                </a>
              </li>
              <li>
                <a
                  href="https://onemobile.world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white"
                >
                  One Mobile World
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white/40 uppercase tracking-wide">{t.contactColumn}</p>
            <ul className="mt-4 space-y-4">
              {contacts.map((c) => (
                <li key={c.email} className="text-sm">
                  <p className="text-white/90">{c.name}</p>
                  <p className="text-white/50">{c.role}</p>
                  <a href={`mailto:${c.email}`} className="text-white/70 hover:text-white">
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-dark-line pt-8 text-xs leading-relaxed text-white/50 sm:grid-cols-3">
          <div>
            <p className="text-white/70">{companyLegal.left.heading}</p>
            {companyLegal.left.lines.map((line, i) => (line ? <p key={i}>{line}</p> : <br key={i} />))}
          </div>
          <div>
            <p className="text-white/70">{companyLegal.right.heading}</p>
            {companyLegal.right.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className="flex items-start gap-3 sm:justify-end">
            <div className="inline-flex w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/BMWi_Fz_2021_WebSVG_de.svg`}
                alt="Gefördert durch: Bundesministerium für Wirtschaft und Klimaschutz, aufgrund eines Beschlusses des Deutschen Bundestages"
                width={172}
                height={175}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </div>
            <div className="inline-flex w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/breko-eg-guetesiegel.webp`}
                alt="BREKO Einkaufsgemeinschaft eG — zertifizierter Listungspartner"
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-dark-line pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {t.rightsReserved}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/impressum" className="hover:text-white/70">
              {t.impressum}
            </Link>
            <Link href="/datenschutz" className="hover:text-white/70">
              {t.datenschutz}
            </Link>
            <p>{site.domain}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
