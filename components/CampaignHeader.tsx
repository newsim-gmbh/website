import { LocalizedLink as Link } from "./LocalizedLink";
import { Container } from "./Container";
import { Logo } from "./Logo";

/**
 * Schlanker Header für fokussierte Kampagnen-Landingpages (Roadshow,
 * Markenbaukasten-Vormerkung) — bewusst ohne Hauptnavigation, damit der
 * Besucher nicht von der einen gewünschten Aktion abgelenkt wird.
 */
export function CampaignHeader({ ctaLabel, ctaHref = "#form" }: { ctaLabel: string; ctaHref?: string }) {
  return (
    <header className="relative z-50 border-b border-dark-line bg-dark">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="newSIM" className="text-white">
            <Logo className="h-12 w-auto" />
          </Link>
          <a
            href={ctaHref}
            className="font-heading inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-white"
          >
            {ctaLabel}
          </a>
        </div>
      </Container>
    </header>
  );
}
