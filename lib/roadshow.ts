// Städte/Termine der newSIM-Roadshow. Eigenes, server-sicheres Modul (statt
// Export aus RoadshowForm.tsx), weil Konstanten aus "use client"-Dateien beim
// Prerendering nicht zuverlässig in Server Components importierbar sind.
export interface RoadshowDate {
  city: string;
  date: string;
}

export const ROADSHOW_DATES: RoadshowDate[] = [
  { city: "Hamburg", date: "Di, 19.01.2027" },
  { city: "Berlin", date: "Mi, 20.01.2027" },
  { city: "Nürnberg", date: "Mo, 25.01.2027" },
  { city: "Leipzig", date: "Di, 26.01.2027" },
  { city: "Düsseldorf", date: "Di, 02.02.2027" },
  { city: "Frankfurt", date: "Mi, 03.02.2027" },
  { city: "Stuttgart", date: "Di, 09.02.2027" },
  { city: "München", date: "Mi, 10.02.2027" },
];

export const ROADSHOW_ONLINE_OPTION = "Online-Termin";

export function roadshowOptionLabel(d: RoadshowDate): string {
  return `${d.city} (${d.date})`;
}
