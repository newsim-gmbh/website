import { Icon, type IconName } from "./Icon";

export function BenefitTiles({ items }: { items: { icon: IconName; text: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((b) => (
        <div
          key={b.text}
          className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-background p-4 text-center"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary-ink">
            <Icon name={b.icon} className="h-4.5 w-4.5" />
          </span>
          <span className="text-xs leading-snug font-medium text-ink">{b.text}</span>
        </div>
      ))}
    </div>
  );
}
