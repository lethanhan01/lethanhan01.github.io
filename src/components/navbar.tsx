"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

type NavbarProps = {
  navLinks: { href: string; label: string }[];
};

const LocaleSwitcher = dynamic(
  () => import("./locale-switcher").then((m) => m.LocaleSwitcher),
  { ssr: false },
);
const ThemeToggle = dynamic(
  () => import("./theme-toggle").then((m) => m.ThemeToggle),
  { ssr: false },
);

export function Navbar({ navLinks }: NavbarProps) {
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
          ? "bg-[color:var(--color-card)]/90 shadow-lg backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="text-lg font-semibold text-[color:var(--color-primary)]"
        >
          LTA
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[color:var(--color-foreground)] transition hover:text-[color:var(--color-primary)]"
            >
              {link.label}
            </Link>
          ))}
          <LocaleSwitcher />
          <ThemeToggle />
        </nav>
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-[color:var(--color-foreground)] hover:bg-[color:var(--color-border)]/20 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-[color:var(--color-border)] bg-[color:var(--color-card)]/95 px-6 pb-4 shadow-sm backdrop-blur transition-all md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0",
        )}
      >
        <div className="container mx-auto flex max-w-6xl flex-col gap-2 pt-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[color:var(--color-foreground)] transition hover:bg-[color:var(--color-border)]/20 hover:text-[color:var(--color-primary)]"
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
