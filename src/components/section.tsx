import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20",
        "bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100",
        className,
      )}
    >
      <div className="container mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
