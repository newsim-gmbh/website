export function ContactTile({
  contact,
  heading = "Lieber direkt sprechen?",
}: {
  contact: { name: string; role: string; email: string; phone?: string };
  heading?: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-background p-5">
      <p className="text-xs font-medium tracking-wide text-ink-soft uppercase">{heading}</p>
      <p className="mt-2 text-sm font-semibold text-ink">
        {contact.name} · {contact.role}
      </p>
      <a href={`mailto:${contact.email}`} className="mt-1 block text-sm font-medium text-primary-ink">
        {contact.email}
      </a>
      {contact.phone && (
        <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-1 block text-sm font-medium text-primary-ink">
          {contact.phone}
        </a>
      )}
    </div>
  );
}
