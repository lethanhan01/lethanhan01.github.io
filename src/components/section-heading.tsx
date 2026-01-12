type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="section-header text-center">
      <h2 className="heading-2">
        {title}
      </h2>
      <div className="section-underline mx-auto mt-3 rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)]" />
      {subtitle ? (
        <p className="mt-4 text-body text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
