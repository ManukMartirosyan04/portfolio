import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { cn } from "@/lib/cn";

type CaseStudyViewProps = {
  study: CaseStudy;
};

export function CaseStudyView({ study }: CaseStudyViewProps) {
  return (
    <article className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_0%,rgba(125,207,182,0.08),transparent_55%)]"
      />

      <div className="relative mx-auto w-full max-w-3xl px-5 pb-24 pt-10 sm:px-8 sm:pb-28 sm:pt-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span aria-hidden>←</span>
          Back to projects
        </Link>

        <header className="mt-10 border-b border-border pb-10">
          <p className="font-mono text-sm tracking-[0.18em] text-accent/80">
            {study.number} · Case Study
          </p>
          <h1 className="font-display mt-4 text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {study.subtitle}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {study.highlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border bg-foreground/[0.025] px-4 py-4"
              >
                <p className="text-sm font-medium leading-snug tracking-tight text-foreground">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
                Role
              </dt>
              <dd className="mt-1 text-sm text-foreground">{study.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
                Focus
              </dt>
              <dd className="mt-1 text-sm text-foreground">{study.focus}</dd>
            </div>
          </dl>

          <ul className="mt-6 flex flex-wrap gap-2">
            {study.tech.map((item) => (
              <li key={item}>
                <span className="inline-flex rounded-full border border-border bg-foreground/[0.02] px-3 py-1 text-xs tracking-tight text-muted-strong">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </header>

        <p className="mt-10 text-base leading-relaxed text-muted-strong sm:text-[1.0625rem] sm:leading-8">
          {study.summary}
        </p>

        {study.performance ? (
          <aside
            aria-labelledby={`${study.slug}-performance`}
            className="mt-10 overflow-hidden rounded-2xl border border-accent/25 bg-accent-soft/40"
          >
            <div className="grid gap-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="border-b border-accent/20 px-5 py-6 md:border-b-0 md:border-r md:px-6 md:py-7">
                <p
                  id={`${study.slug}-performance`}
                  className="text-xs font-medium tracking-[0.14em] text-accent uppercase"
                >
                  {study.performance.title}
                </p>
                <p className="mt-4 font-display text-[clamp(1.6rem,3vw,2.1rem)] font-semibold tracking-tight text-foreground">
                  {study.performance.metricValue}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {study.performance.metricLabel}
                </p>
              </div>
              <ul className="space-y-3 px-5 py-6 md:px-6 md:py-7">
                {study.performance.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm leading-relaxed text-muted-strong"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        ) : null}

        <div className="mt-14 space-y-10">
          {study.sections.map((section, index) => (
            <section
              key={section.title}
              aria-labelledby={`section-${study.slug}-${index}`}
              className={cn(
                section.variant === "emphasis"
                  ? "rounded-2xl border border-border bg-foreground/[0.02] px-5 py-6 sm:px-6"
                  : "border-t border-border pt-8",
              )}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs tracking-wider text-accent/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2
                  id={`section-${study.slug}-${index}`}
                  className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
                >
                  {section.title}
                </h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted sm:leading-8">
                {section.body}
              </p>
              {section.bullets ? (
                <ul className="mt-5 space-y-3 border-l border-border pl-5">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative text-sm leading-relaxed text-muted-strong sm:text-[0.975rem] sm:leading-7"
                    >
                      <span
                        aria-hidden
                        className="absolute -left-[1.35rem] top-[0.55em] h-1 w-1 rounded-full bg-accent/70"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            ← Back to selected work
          </Link>
        </div>
      </div>
    </article>
  );
}
