import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { PageHero } from "@/components/templates/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { IotFeatureTabs } from "@/components/IotFeatureTabs";
import { IotTrustGrid } from "@/components/IotTrustGrid";
import { iotShop } from "@/lib/content";
import { basePath } from "@/lib/basePath";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/iot",
  title: "IoT / M2M Shop — newSIM",
  description: iotShop.hero.tagline,
  image: `/${iotShop.hero.image}`,
});

export default function IotPage() {
  const { hero, featureTabs, trust } = iotShop;

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          tagline={hero.tagline}
          bullets={hero.bullets}
          image={hero.image}
          ctaLabel={hero.primaryCtaLabel}
          ctaHref={hero.primaryCtaHref}
          secondaryCtaLabel={hero.secondaryCtaLabel}
          secondaryCtaHref={hero.secondaryCtaHref}
        />

        <section className="bg-background py-20 sm:py-28">
          <Container>
            <Reveal className="max-w-xl">
              <p className="text-sm font-medium tracking-wide text-primary-ink uppercase">Plattform</p>
              <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Sichere &amp; zuverlässige IoT-Verbindungen
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <IotFeatureTabs tabs={featureTabs} />
            </Reveal>
          </Container>
        </section>

        <section className="bg-dark py-20 text-white sm:py-28">
          <Container>
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-primary uppercase">{trust.eyebrow}</p>
              <h2 className="font-heading balance mt-3 max-w-xl text-2xl font-bold tracking-tight sm:text-3xl">
                {trust.title}
              </h2>
            </Reveal>

            <IotTrustGrid points={trust.points} />

            <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-3">
              <div className="inline-flex w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/BMWi_Fz_2021_WebSVG_de.svg`}
                  alt="Gefördert durch: Bundesministerium für Wirtschaft und Klimaschutz"
                  width={172}
                  height={175}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              </div>
              <div className="inline-flex w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-sm">
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
            </Reveal>
          </Container>
        </section>

        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
              <Reveal>
                <h2 className="font-heading balance text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Jetzt individuelles IoT-Angebot anfragen.
                </h2>
                <p className="mt-4 max-w-lg text-ink-soft">
                  In drei kurzen Schritten schicken Sie uns Ihr Projekt — wir melden uns zeitnah bei Ihnen.
                </p>
                <Link
                  href={hero.primaryCtaHref}
                  className="font-heading mt-7 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
                >
                  {hero.primaryCtaLabel}
                </Link>
              </Reveal>
              <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
                <Image
                  src={`${basePath}/${hero.image}`}
                  alt="newSIM IoT-Konnektivität"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
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
