import Link from "next/link";
import { Container } from "./Container";
import { site, mainNav, contacts } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-dark-line bg-dark text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
          <div>
            <p className="font-heading text-lg font-bold tracking-tight">
              {site.name}
              <span className="text-primary">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {site.legalName} · Mobile as a Service · {site.locations}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-white/40 uppercase tracking-wide">Seite</p>
            <ul className="mt-4 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/kontakt" className="text-sm text-white/70 hover:text-white">
                  Kontakt
                </Link>
              </li>
              <li>
                <a
                  href={site.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white/40 uppercase tracking-wide">Eigenmarken</p>
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
            <p className="text-sm font-medium text-white/40 uppercase tracking-wide">Kontakt</p>
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

        <div className="mt-16 flex flex-col gap-4 border-t border-dark-line pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <p>{site.domain}</p>
        </div>
      </Container>
    </footer>
  );
}
