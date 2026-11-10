import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { MarkenbaukastenBuilder } from "@/components/markenbaukasten/MarkenbaukastenBuilder";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/markenbaukasten",
  title: "Markenbaukasten — newSIM",
  description:
    "Bauen Sie Ihre eigene Mobilfunkmarke: Modell wählen, Logo hochladen, Tarife und Preise festlegen — und sofort sehen, was Sie verdienen.",
  image: "/hero-phone.webp",
});

export default function MarkenbaukastenPage() {
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
              <h1 className="font-heading balance max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
                Bauen Sie Ihre eigene Mobilfunkmarke.
              </h1>
              <p className="balance mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                In fünf Schritten zu Ihrer Marke im Netz von Telefónica: Modell wählen, Logo hochladen, Tarife
                benennen, Preise festlegen. Rechts sehen Sie sofort, wie Ihre Landingpage, Rechnung, Ihr
                Auftragsformular und Ihr Werbematerial aussehen — und was Sie verdienen.
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="bg-background pb-24 sm:pb-32">
          <Container>
            <MarkenbaukastenBuilder />
          </Container>
        </section>
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
