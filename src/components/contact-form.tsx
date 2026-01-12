"use client";

import { Mail } from "lucide-react";

type ContactFormProps = {
  labels: {
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
  };
  demoNotice?: string;
};

export function ContactForm({ labels, demoNotice }: ContactFormProps) {
  return (
    <form
      className="surface-card rounded-2xl p-6 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
        alert(demoNotice ?? "Thanks! (Demo form, not connected to a server)");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label={labels.name} name="name" />
        <Input label={labels.email} name="email" type="email" />
      </div>
      <Input className="mt-4" label={labels.subject} name="subject" />
      <div className="mt-4">
        <label className="text-sm font-medium text-heading">
          {labels.message}
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-2 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3 text-sm text-[color:var(--color-foreground)] outline-none ring-[color:var(--color-primary)] transition focus:bg-white focus:ring-2"
          placeholder={labels.message}
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-foreground)] shadow-lg transition hover:bg-white/90 hover:shadow-xl dark:border-white/20 dark:bg-black dark:hover:bg-black/90"
      >
        <Mail className="h-4 w-4" />
        {labels.submit}
      </button>
    </form>
  );
}

function Input({
  label,
  name,
  type = "text",
  className,
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-heading">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3 text-sm text-[color:var(--color-foreground)] outline-none ring-[color:var(--color-primary)] transition focus:bg-white focus:ring-2"
        placeholder={label}
      />
    </div>
  );
}

