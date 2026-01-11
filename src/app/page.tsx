"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { useLocaleContent } from "@/providers/locale-provider";
import { motion } from "framer-motion";
import {
  Building,
  Database,
  FileText,
  Gamepad,
  Github,
  Hotel,
  Instagram,
  LayoutGrid,
  Layers,
  Linkedin,
  ListChecks,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Server,
  ShoppingCart,
  Twitter,
  UserRound,
  Wand2,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  instagram: Instagram,
  shoppingCart: ShoppingCart,
  listChecks: ListChecks,
  messageSquare: MessageSquare,
  fileText: FileText,
  code: Wand2,
  layers: Layers,
  database: Database,
  building: Building,
  gamepad: Gamepad,
  hotel: Hotel,
  server: Server,
  wrench: Wrench,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Home() {
  const { content, locale } = useLocaleContent();
  const { hero, about, skills, experience, projects, contact, footer } = content;

  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <Navbar />
      <main className="pt-24">
        <HeroSection hero={hero} />
        <AboutSection about={about} />
        <SkillsSection skills={skills} />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <ContactSection contact={contact} />
      </main>
      <Footer footer={footer} heroName={hero.name} locale={locale} />
      <ScrollToTop />
    </div>
  );
}

function HeroSection({ hero }: { hero: ReturnType<typeof useLocaleContent>["content"]["hero"] }) {
  return (
    <Section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[color:var(--color-primary)] via-[color:var(--color-secondary)] to-[color:var(--color-accent)] py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_40%)]" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer}
        className="relative"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur"
        >
          <UserRound className="h-4 w-4" />
          {hero.title}
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-semibold leading-tight text-white sm:text-5xl"
        >
          {hero.greeting} <span className="text-yellow-300">{hero.name}</span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-5 max-w-2xl text-lg text-slate-100/90"
        >
          {hero.description}
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Link
            href={hero.primaryCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:translate-y-[-2px] hover:shadow-xl"
          >
            <LayoutGrid className="h-4 w-4" />
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
            {hero.secondaryCta.label}
          </Link>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex items-center gap-4 text-white/80"
        >
          {hero.socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </motion.div>
      </motion.div>
    </Section>
  );
}

function AboutSection({
  about,
}: {
  about: ReturnType<typeof useLocaleContent>["content"]["about"];
}) {
  return (
    <Section id="about" className="bg-white text-slate-900 dark:bg-slate-900">
      <SectionHeading
        title={about.title}
        subtitle={about.subtitle}
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--color-primary-weak)] via-[color:var(--color-secondary)]/15 to-[color:var(--color-accent)]/20 p-10 shadow-lg"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_45%)]" />
          <div className="relative flex h-full flex-col justify-center gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 text-[color:var(--color-primary)] shadow">
              <UserRound className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-semibold text-heading">
              {about.headline}
            </h3>
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {about.info.map((item) => (
            <div
              key={item.label}
              className="surface-card rounded-2xl p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-wide text-muted">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-heading">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function SkillsSection({
  skills,
}: {
  skills: ReturnType<typeof useLocaleContent>["content"]["skills"];
}) {
  return (
    <Section
      id="skills"
      className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    >
      <SectionHeading title={skills.title} subtitle={skills.subtitle} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.categories.map((category) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35 }}
              className="surface-card rounded-2xl p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-primary-weak)] text-[color:var(--color-primary)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-heading">
                  {category.title}
                </h3>
              </div>
              <div className="mt-4 space-y-4">
                {category.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between text-sm font-medium text-heading">
                      <span>{item.name}</span>
                      <span className="text-muted">
                        {item.level}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-[color:var(--color-border)]">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function ExperienceSection({
  experience,
}: {
  experience: ReturnType<typeof useLocaleContent>["content"]["experience"];
}) {
  return (
    <Section
      id="experience"
      className="bg-white text-slate-900 dark:bg-slate-900"
    >
      <SectionHeading title={experience.title} subtitle={experience.subtitle} />
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 h-full w-px bg-gradient-to-b from-blue-400 to-pink-500 md:left-1/2" />
        <div className="space-y-10">
          {experience.items.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35 }}
              className={cn(
                "relative rounded-2xl surface-card p-6 shadow-sm",
                "md:w-[calc(50%-24px)]",
                index % 2 === 0
                  ? "md:ml-auto md:pl-12"
                  : "md:mr-auto md:pr-12 md:text-right",
              )}
            >
              <div
                className={cn(
                  "absolute top-7 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-pink-500 shadow-md dark:border-slate-950",
                  index % 2 === 0 ? "-left-8 md:left-[-18px]" : "left-[unset] right-[-18px] md:right-[-18px]",
                  index % 2 !== 0 && "md:left-auto",
                )}
              />
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">
                {exp.period}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-sm text-muted">
                {exp.company}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {exp.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProjectsSection({
  projects,
}: {
  projects: ReturnType<typeof useLocaleContent>["content"]["projects"];
}) {
  return (
    <Section
      id="projects"
      className="bg-slate-50 text-slate-900 dark:bg-slate-950"
    >
      <SectionHeading title={projects.title} subtitle={projects.subtitle} />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.items.map((project, index) => {
          const Icon = iconMap[project.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl surface-card p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-pink-500/5 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-primary-weak)] text-[color:var(--color-primary)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-heading">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {project.tags.join(" · ")}
                  </p>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[color:var(--color-primary-weak)]/60 px-3 py-1 text-xs font-semibold text-heading"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="relative mt-5 flex gap-3 text-sm font-semibold">
                {project.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-1 text-blue-600 transition hover:text-pink-500 dark:text-blue-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function ContactSection({
  contact,
}: {
  contact: ReturnType<typeof useLocaleContent>["content"]["contact"];
}) {
  return (
    <Section id="contact" className="bg-white text-slate-900 dark:bg-slate-900">
      <SectionHeading title={contact.title} subtitle={contact.subtitle} />
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35 }}
          className="surface-card rounded-2xl p-6 shadow-sm"
        >
          <p className="text-base leading-relaxed text-muted">
            {contact.message}
          </p>
          <div className="mt-6 space-y-3 text-sm text-heading">
            <ContactItem icon={<Mail className="h-4 w-4" />} label={contact.labels.email} value={contact.email} />
            <ContactItem icon={<Phone className="h-4 w-4" />} label={contact.labels.phone} value={contact.phone} />
            <ContactItem icon={<MapPin className="h-4 w-4" />} label={contact.labels.location} value={contact.location} />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35 }}
          className="surface-card rounded-2xl p-6 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            form.reset();
            alert("Cảm ơn bạn đã liên hệ! (Form demo, chưa gởi đến server)");
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label={contact.form.name} name="name" />
            <Input label={contact.form.email} name="email" type="email" />
          </div>
          <Input className="mt-4" label={contact.form.subject} name="subject" />
          <div className="mt-4">
            <label className="text-sm font-medium text-heading">
              {contact.form.message}
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="mt-2 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3 text-sm text-[color:var(--color-foreground)] outline-none ring-blue-500 transition focus:bg-white focus:ring-2"
              placeholder={contact.form.message}
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
          >
            <Mail className="h-4 w-4" />
            {contact.form.submit}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-primary-weak)] text-[color:var(--color-primary)]">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted">
          {label}
        </p>
        <p className="font-semibold text-heading">{value}</p>
      </div>
    </div>
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
      <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-blue-500 transition focus:bg-white focus:ring-2 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:focus:bg-slate-900"
        placeholder={label}
      />
    </div>
  );
}

function Footer({
  footer,
  heroName,
  locale,
}: {
  footer: ReturnType<typeof useLocaleContent>["content"]["footer"];
  heroName: string;
  locale: string;
}) {
  const footerLinks = [
    { href: "https://github.com/lethanhan01", label: "GitHub", Icon: Github },
    {
      href: "https://linkedin.com/in/lethanhan",
      label: "LinkedIn",
      Icon: Linkedin,
    },
    { href: "https://twitter.com/lethanhan", label: "Twitter", Icon: Twitter },
  ];

  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-background)] py-10 text-sm text-muted">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-[color:var(--color-foreground)] sm:flex-row">
        <p className="text-center sm:text-left">
          © 2024 {heroName}. {footer.copyright} ({locale.toUpperCase()})
        </p>
        <div className="flex items-center gap-3">
          {footerLinks.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-primary-weak)] text-[color:var(--color-primary)] transition hover:brightness-95"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
