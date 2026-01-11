"use client";

import {
  translations,
  type Locale,
  type PortfolioContent,
} from "@/data/translations";
import { createContext, useContext, useMemo, useState } from "react";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: PortfolioContent;
};

const LocaleContext = createContext<LocaleContextType | null>(null);
const LOCALE_KEY = "portfolio-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LOCALE_KEY) as Locale | null;
      if (saved && translations[saved]) return saved;
    }
    return "vi";
  });

  const setLocale = (loc: Locale) => {
    setLocaleState(loc);
    localStorage.setItem(LOCALE_KEY, loc);
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      content: translations[locale],
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocaleContent() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocaleContent must be used within LocaleProvider");
  }
  return ctx;
}
