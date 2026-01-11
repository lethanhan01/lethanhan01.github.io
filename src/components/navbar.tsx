"use client";

import { cn } from "@/lib/utils";
import { useLocaleContent } from "@/providers/locale-provider";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const { content } = useLocaleContent();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 transition-all",
        scrolled
          ? "bg-white/90 shadow-lg backdrop-blur dark:bg-slate-950/80"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="text-lg font-semibold text-blue-600 dark:text-blue-400"
        >
          LTA
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {content.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300"
            >
              {link.label}
            </Link>
          ))}
          <LocaleSwitcher />
          <ThemeToggle />
        </nav>
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-slate-200 bg-white/95 px-6 pb-4 shadow-sm backdrop-blur transition-all dark:border-slate-800 dark:bg-slate-950/90 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0",
        )}
      >
        <div className="container mx-auto flex max-w-6xl flex-col gap-2 pt-3">
          {content.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-blue-300"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
