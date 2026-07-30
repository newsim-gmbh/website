"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { mainNav, contacts } from "@/lib/content";

const topics = [...mainNav.map((n) => n.label), "Sonstiges"];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    topic: topics[0],
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Bitte Name, E-Mail und Nachricht ausfüllen.");
      return;
    }
    setError(null);

    const subject = `Kontaktanfrage (${form.topic}) — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      form.company && `Firma: ${form.company}`,
      `E-Mail: ${form.email}`,
      form.phone && `Telefon: ${form.phone}`,
      `Thema: ${form.topic}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${contacts[1].email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-primary";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-surface p-8 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Name *</label>
          <input required value={form.name} onChange={update("name")} className={inputClass} placeholder="Vor- und Nachname" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Firma</label>
          <input value={form.company} onChange={update("company")} className={inputClass} placeholder="Unternehmen" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">E-Mail *</label>
          <input required type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="name@firma.de" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Telefon</label>
          <input value={form.phone} onChange={update("phone")} className={inputClass} placeholder="Optional" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink">Thema</label>
          <select value={form.topic} onChange={update("topic")} className={inputClass}>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink">Nachricht *</label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={update("message")}
            className={inputClass}
            placeholder="Wie können wir helfen?"
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      {sent && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-sm text-primary-ink"
        >
          Ihr E-Mail-Programm öffnet sich mit einer vorausgefüllten Nachricht — bitte dort absenden.
        </motion.p>
      )}

      <button
        type="submit"
        className="font-heading mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
      >
        Nachricht senden
      </button>
    </form>
  );
}
