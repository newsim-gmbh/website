import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { contacts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt — newSIM",
  description: "Sprechen Sie mit uns über Ihr Mobilfunk-Vorhaben — wir melden uns zeitnah zurück.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-dark pt-36 pb-16 text-white sm:pt-40 sm:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(600px circle at 15% 10%, rgba(148,184,233,0.25), transparent 60%)",
            }}
          />
          <Container className="relative">
            <Reveal>
              <p className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 uppercase">
                Kontakt
              </p>
              <h1 className="font-heading balance max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
                Lassen Sie uns sprechen.
              </h1>
              <p className="balance mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                Egal ob Produkt, Use Case, Developer-Zugang oder Consulting — schreiben Sie uns, wir melden
                uns zeitnah zurück.
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="bg-background py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr]">
              <Reveal>
                <ContactForm />
              </Reveal>

              <Reveal delay={0.1} className="space-y-6">
                {contacts.map((c) => (
                  <div key={c.email} className="rounded-3xl border border-line bg-surface p-6">
                    <p className="font-heading text-base font-bold text-ink">{c.name}</p>
                    <p className="mt-1 text-sm text-ink-soft">{c.role}</p>
                    <a href={`mailto:${c.email}`} className="mt-3 block text-sm text-primary-ink">
                      {c.email}
                    </a>
                    <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="mt-1 block text-sm text-primary-ink">
                      {c.phone}
                    </a>
                  </div>
                ))}
              </Reveal>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
