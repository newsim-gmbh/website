import clsx from "clsx";

export type IconName =
  | "wifi"
  | "tariff"
  | "invoice"
  | "simCard"
  | "portability"
  | "support"
  | "shield"
  | "clipboard"
  | "chart"
  | "link"
  | "chip"
  | "smartphone"
  | "building"
  | "bolt"
  | "pulse"
  | "tower"
  | "layers"
  | "flag"
  | "crown"
  | "sliders";

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Path({ name }: { name: IconName }) {
  switch (name) {
    case "wifi":
      return (
        <>
          <path d="M5 9a11 11 0 0 1 14 0" {...common} />
          <path d="M8 12.5a6.5 6.5 0 0 1 8 0" {...common} />
          <circle cx="12" cy="17" r="1.2" fill="currentColor" stroke="none" />
        </>
      );
    case "tariff":
      return (
        <>
          <rect x="4" y="6" width="16" height="12" rx="2" {...common} />
          <line x1="4" y1="10.5" x2="20" y2="10.5" {...common} />
        </>
      );
    case "invoice":
      return (
        <>
          <rect x="6" y="3" width="12" height="18" rx="1.5" {...common} />
          <line x1="9" y1="8" x2="15" y2="8" {...common} />
          <line x1="9" y1="12" x2="15" y2="12" {...common} />
          <line x1="9" y1="16" x2="13" y2="16" {...common} />
        </>
      );
    case "simCard":
      return (
        <>
          <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" {...common} />
          <line x1="9" y1="12" x2="15" y2="12" {...common} />
          <line x1="9" y1="15" x2="15" y2="15" {...common} />
        </>
      );
    case "portability":
      return (
        <>
          <path d="M4 8h13" {...common} />
          <path d="M14 5l3 3-3 3" {...common} />
          <path d="M20 16H7" {...common} />
          <path d="M10 13l-3 3 3 3" {...common} />
        </>
      );
    case "support":
      return (
        <>
          <path d="M4 14a8 8 0 0 1 16 0" {...common} />
          <rect x="3" y="13" width="3" height="6" rx="1.5" {...common} />
          <rect x="18" y="13" width="3" height="6" rx="1.5" {...common} />
        </>
      );
    case "shield":
      return <path d="M12 3 19 6 19 12 12 21 5 12 5 6 12 3Z" {...common} />;
    case "clipboard":
      return (
        <>
          <rect x="5" y="4" width="14" height="17" rx="2" {...common} />
          <rect x="9" y="2.5" width="6" height="3" rx="1" {...common} />
          <path d="M8 10.5h8M8 14h8M8 17.5h5" {...common} />
        </>
      );
    case "chart":
      return (
        <>
          <path d="M4 4v16h16" {...common} />
          <path d="M6 17l4-5 3.5 3L19 8" {...common} />
        </>
      );
    case "link":
      return (
        <>
          <circle cx="9" cy="12" r="6" {...common} />
          <circle cx="15" cy="12" r="6" {...common} />
        </>
      );
    case "chip":
      return (
        <>
          <rect x="7" y="7" width="10" height="10" rx="1.5" {...common} />
          <line x1="9" y1="3" x2="9" y2="7" {...common} />
          <line x1="15" y1="3" x2="15" y2="7" {...common} />
          <line x1="9" y1="17" x2="9" y2="21" {...common} />
          <line x1="15" y1="17" x2="15" y2="21" {...common} />
          <line x1="3" y1="9" x2="7" y2="9" {...common} />
          <line x1="3" y1="15" x2="7" y2="15" {...common} />
          <line x1="17" y1="9" x2="21" y2="9" {...common} />
          <line x1="17" y1="15" x2="21" y2="15" {...common} />
        </>
      );
    case "smartphone":
      return (
        <>
          <rect x="7" y="2" width="10" height="20" rx="2" {...common} />
          <line x1="11" y1="19" x2="13" y2="19" {...common} />
        </>
      );
    case "building":
      return (
        <>
          <rect x="5" y="3" width="14" height="18" rx="1" {...common} />
          <rect x="8" y="6.5" width="2" height="2" fill="currentColor" stroke="none" />
          <rect x="14" y="6.5" width="2" height="2" fill="currentColor" stroke="none" />
          <rect x="8" y="11" width="2" height="2" fill="currentColor" stroke="none" />
          <rect x="14" y="11" width="2" height="2" fill="currentColor" stroke="none" />
          <rect x="8" y="15.5" width="2" height="2" fill="currentColor" stroke="none" />
          <rect x="14" y="15.5" width="2" height="2" fill="currentColor" stroke="none" />
        </>
      );
    case "bolt":
      return <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" {...common} />;
    case "pulse":
      return <path d="M2 12h4l2-6 4 12 4-9 2 3h4" {...common} />;
    case "tower":
      return (
        <>
          <path d="M12 3 4 21M12 3 20 21M7 13h10M9 17h6" {...common} />
          <circle cx="12" cy="3" r="1.1" fill="currentColor" stroke="none" />
        </>
      );
    case "layers":
      return (
        <>
          <path d="M4 8 12 4 20 8 12 12 4 8Z" {...common} />
          <path d="M4 13 12 17 20 13" {...common} />
          <path d="M4 17 12 21 20 17" {...common} />
        </>
      );
    case "flag":
      return <path d="M6 21V4M6 4h12l-3 4 3 4H6" {...common} />;
    case "crown":
      return <path d="M4 17h16l-1-9-4 4-3-6-3 6-4-4-1 9Z" {...common} />;
    case "sliders":
      return (
        <>
          <line x1="6" y1="4" x2="6" y2="20" {...common} />
          <circle cx="6" cy="9" r="2" fill="currentColor" stroke="none" />
          <line x1="12" y1="4" x2="12" y2="20" {...common} />
          <circle cx="12" cy="15" r="2" fill="currentColor" stroke="none" />
          <line x1="18" y1="4" x2="18" y2="20" {...common} />
          <circle cx="18" cy="7" r="2" fill="currentColor" stroke="none" />
        </>
      );
  }
}

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={clsx("h-5 w-5", className)}
      aria-hidden
    >
      <Path name={name} />
    </svg>
  );
}
