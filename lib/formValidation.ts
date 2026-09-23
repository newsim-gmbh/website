// Gleiches Muster, das Browser intern für <input type="email"> verwenden (WHATWG-Spezifikation).
export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const PHONE_CHARS_REGEX = /^\+?[0-9()\-\s/]{6,20}$/;

/**
 * Grobe Plausibilitätsprüfung statt echter Formatvalidierung: filtert Buchstaben-Eingaben
 * ("abc") und offensichtliche Fake-Nummern (Wiederholungs- oder Zähl-Muster wie "1234567",
 * "0000000") heraus, ohne echte, unterschiedlich formatierte Rufnummern abzulehnen.
 */
export function isPlausiblePhone(raw: string): boolean {
  const trimmed = raw.trim();
  if (!PHONE_CHARS_REGEX.test(trimmed)) return false;

  const digits = trimmed.replace(/\D/g, "");
  if (digits.length < 6 || digits.length > 15) return false;
  if (/^(\d)\1+$/.test(digits)) return false;

  const d = digits.split("").map(Number);
  const isAscending = d.every((n, i) => i === 0 || n === (d[i - 1] + 1) % 10);
  const isDescending = d.every((n, i) => i === 0 || n === (d[i - 1] + 9) % 10);
  if (isAscending || isDescending) return false;

  return true;
}
