type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-pink-500" />
      {subtitle ? (
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
