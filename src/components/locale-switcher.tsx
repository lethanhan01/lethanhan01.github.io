"use client";

import { cn } from "@/lib/utils";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const options = [
  { value: "vi", label: "VI" },
  { value: "en", label: "EN" },
  { value: "ja", label: "JA" },
];

const LOCALE_COOKIE = "portfolio-locale";

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  // Escape regex special chars in cookie name
  const escaped = name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  const match = document.cookie.match(new RegExp(`(?:^|; )${escaped}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function LocaleSwitcher() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [locale, setLocale] = useState<(typeof options)[number]["value"]>("vi");

  // Close the dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const saved = getCookie(LOCALE_COOKIE);
    if (saved && options.some((o) => o.value === saved)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocale(saved);
    }
  }, []);

  const currentLabel = options.find((opt) => opt.value === locale)?.label ?? "VI";

  return (
    <div className="relative inline-flex" ref={wrapperRef}>
      <button
        type="button"
        aria-label="Choose language"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur transition",
        "border-[color:var(--color-border)] bg-[color:var(--color-card)]/90 text-[color:var(--color-foreground)] hover:-translate-y-0.5 hover:bg-[color:var(--color-card)] hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[color:var(--color-background)]",
        )}
      >
        <Globe className="h-4 w-4" />
        <span>{currentLabel}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            open ? "rotate-180" : "rotate-0",
          )}
        />
      </button>

      <div
        role="listbox"
        aria-label="Languages"
        className={cn(
          "absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border p-1 shadow-lg transition-all duration-150 ease-out",
        "border-[color:var(--color-border)] bg-[color:var(--color-card)]/95 backdrop-blur-lg",
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0",
        )}
      >
        {options.map((opt) => {
          const active = opt.value === locale;
          return (
            <button
              key={opt.value}
              role="option"
              aria-selected={active}
              onClick={() => {
                setLocale(opt.value);
                document.cookie = `${LOCALE_COOKIE}=${encodeURIComponent(opt.value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
                setOpen(false);
                router.refresh();
              }}
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition",
                active
                ? "bg-[color:var(--color-primary-weak)]/30 text-[color:var(--color-primary)]"
                : "text-[color:var(--color-foreground)] hover:bg-[color:var(--color-border)]/15",
              )}
            >
              {opt.label}
              {active ? <Check className="h-4 w-4" /> : <span className="h-4 w-4" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
