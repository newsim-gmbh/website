import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { IotRequestForm } from "@/components/IotRequestForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/iot/anfrage",
  title: "IoT-Angebot anfragen — newSIM",
  description: "In drei kurzen Schritten Ihr individuelles IoT-/M2M-SIM-Angebot anfragen.",
});

export default function IotAnfragePage() {
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
                IoT-Angebot
              </p>
              <h1 className="font-heading balance max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
                Jetzt Ihr individuelles IoT-Angebot anfragen.
              </h1>
              <p className="balance mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                Drei kurze Schritte — wir melden uns zeitnah bei Ihnen zu Ihrem Projekt.
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <Container>
            <Reveal delay={0.1}>
              <IotRequestForm />
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
