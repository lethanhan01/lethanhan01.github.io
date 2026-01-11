"use client";

import { useLocaleContent } from "@/providers/locale-provider";
import { Globe } from "lucide-react";

const options = [
  { value: "vi", label: "VI" },
  { value: "en", label: "EN" },
  { value: "ja", label: "JA" },
];

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocaleContent();

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100">
      <Globe className="h-4 w-4" />
      <select
        aria-label="Choose language"
        value={locale}
        onChange={(e) => setLocale(e.target.value as typeof locale)}
        className="bg-transparent text-xs font-semibold outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
