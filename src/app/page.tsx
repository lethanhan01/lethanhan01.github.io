"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import {
  about,
  contact,
  experiences,
  hero,
  projects,
  skillCategories,
} from "@/data/content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
    FileText,
    Github,
    LayoutGrid,
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
  shoppingCart: ShoppingCart,
  listChecks: ListChecks,
  messageSquare: MessageSquare,
  fileText: FileText,
  code: Wand2,
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <Navbar />
      <main className="pt-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function HeroSection() {
  return (
    <Section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-blue-600 via-violet-600 to-pink-500 py-28"
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
          Xin chào, tôi là{" "}
          <span className="text-yellow-300">{hero.name}</span>
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

function AboutSection() {
  return (
    <Section id="about" className="bg-white text-slate-900 dark:bg-slate-900">
      <SectionHeading
        title={about.title}
        subtitle="Một chút thông tin nhanh về tôi"
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-10 shadow-lg dark:from-slate-800 dark:via-slate-800 dark:to-slate-800"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_45%)]" />
          <div className="relative flex h-full flex-col justify-center gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 text-blue-600 shadow dark:bg-slate-900/70 dark:text-blue-400">
              <UserRound className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              {about.headline}
            </h3>
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-slate-600 dark:text-slate-200"
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
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function SkillsSection() {
  return (
    <Section
      id="skills"
      className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    >
      <SectionHeading title="Kỹ Năng" subtitle="Những gì tôi sử dụng hằng ngày" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="mt-4 space-y-4">
                {category.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
                      <span>{item.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {item.level}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
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

function ExperienceSection() {
  return (
    <Section
      id="experience"
      className="bg-white text-slate-900 dark:bg-slate-900"
    >
      <SectionHeading
        title="Kinh Nghiệm Làm Việc"
        subtitle="Hành trình phát triển nghề nghiệp"
      />
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 h-full w-px bg-gradient-to-b from-blue-400 to-pink-500 md:left-1/2" />
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35 }}
              className={cn(
                "relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950",
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
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {exp.company}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-200">
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

function ProjectsSection() {
  return (
    <Section
      id="projects"
      className="bg-slate-50 text-slate-900 dark:bg-slate-950"
    >
      <SectionHeading title="Dự Án Nổi Bật" subtitle="Một vài sản phẩm gần đây" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = iconMap[project.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-pink-500/5 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {project.tags.join(" · ")}
                  </p>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-200">
                {project.description}
              </p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
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

function ContactSection() {
  return (
    <Section id="contact" className="bg-white text-slate-900 dark:bg-slate-900">
      <SectionHeading title="Liên Hệ" subtitle="Hãy liên lạc với tôi!" />
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
        >
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-200">
            {contact.message}
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <ContactItem icon={<Mail className="h-4 w-4" />} label="Email" value={contact.email} />
            <ContactItem icon={<Phone className="h-4 w-4" />} label="Điện thoại" value={contact.phone} />
            <ContactItem icon={<MapPin className="h-4 w-4" />} label="Địa chỉ" value={contact.location} />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            form.reset();
            alert("Cảm ơn bạn đã liên hệ! (Form demo, chưa gởi đến server)");
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Họ và tên" name="name" />
            <Input label="Email" name="email" type="email" />
          </div>
          <Input className="mt-4" label="Chủ đề" name="subject" />
          <div className="mt-4">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Tin nhắn
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-blue-500 transition focus:bg-white focus:ring-2 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:focus:bg-slate-900"
              placeholder="Nội dung bạn muốn trao đổi..."
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
          >
            <Mail className="h-4 w-4" />
            Gửi tin nhắn
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
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-300">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <p className="font-semibold text-slate-900 dark:text-white">{value}</p>
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

function Footer() {
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
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-sm text-slate-300">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-center sm:text-left">
          © 2024 {hero.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {footerLinks.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-white/10"
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
