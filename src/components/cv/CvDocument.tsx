"use client";

import type { ReactNode } from "react";
import { CV, CV_ACCENT } from "@/lib/cv";

function renderRichText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-neutral-950">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function ContactLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="underline-offset-2 hover:underline"
      style={{ color: CV_ACCENT }}
    >
      {children}
    </a>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-[0.78rem] font-bold tracking-[0.08em] uppercase"
      style={{ color: CV_ACCENT }}
    >
      {children}
    </h2>
  );
}

export function CvDocument() {
  const contactParts: ReactNode[] = [CV.location];

  contactParts.push(
    <ContactLink key="email" href={`mailto:${CV.email}`}>
      {CV.email}
    </ContactLink>,
  );

  contactParts.push(
    <ContactLink key="phone" href={`tel:${CV.phone.replace(/\s/g, "")}`}>
      {CV.phone}
    </ContactLink>,
  );

  if (CV.links.linkedin.href) {
    contactParts.push(
      <ContactLink key="linkedin" href={CV.links.linkedin.href}>
        {CV.links.linkedin.label}
      </ContactLink>,
    );
  }

  if (CV.links.github.href) {
    contactParts.push(
      <ContactLink key="github" href={CV.links.github.href}>
        {CV.links.github.label}
      </ContactLink>,
    );
  }

  if (CV.links.portfolio.href) {
    contactParts.push(
      <ContactLink key="portfolio" href={CV.links.portfolio.href}>
        {CV.links.portfolio.label}
      </ContactLink>,
    );
  }

  return (
    <div className="min-h-full bg-neutral-100 text-neutral-900 print:bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 print:hidden sm:px-6">
        <a
          href="/"
          className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
        >
          ← Back to portfolio
        </a>
        <button
          type="button"
          onClick={() => typeof window !== "undefined" && window.print()}
          className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400"
        >
          Print / Save as PDF
        </button>
      </div>

      <article className="cv-sheet mx-auto mb-10 max-w-3xl bg-white px-8 py-10 shadow-sm print:mb-0 print:max-w-none print:px-0 print:py-0 print:shadow-none sm:px-12 sm:py-12">
        <header className="border-b border-neutral-200 pb-4 print:pb-3">
          <h1 className="text-[1.85rem] font-bold tracking-tight text-neutral-950 sm:text-[2.1rem]">
            {CV.name}
          </h1>
          <p className="mt-1 text-base font-medium text-neutral-700">
            {CV.title}
          </p>
          <p className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] leading-relaxed text-neutral-700 print:mt-2">
            {contactParts.map((part, index) => (
              <span key={index} className="inline-flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden className="text-neutral-300">
                    |
                  </span>
                ) : null}
                {part}
              </span>
            ))}
          </p>
        </header>

        <section className="mt-5 print:mt-5">
          <SectionHeading>Professional Summary</SectionHeading>
          <div className="mt-2 space-y-2.5 text-[0.9rem] leading-relaxed text-neutral-800">
            {CV.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{renderRichText(paragraph)}</p>
            ))}
          </div>
        </section>

        <section className="mt-5 print:mt-5">
          <SectionHeading>Technical Skills</SectionHeading>
          <dl className="mt-2 grid grid-cols-[max-content_1fr] gap-x-3 gap-y-1.5 text-[0.9rem] leading-relaxed text-neutral-800">
            {CV.skills.map((group) => (
              <div key={group.category} className="contents">
                <dt className="font-semibold text-neutral-950">
                  {group.category}:
                </dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-5 print:mt-5">
          <SectionHeading>Professional Experience</SectionHeading>
          <div className="mt-3 space-y-5 print:mt-3.5 print:space-y-5">
            {CV.experience.map((company) => (
              <div key={`${company.company}-${company.dates}`}>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3
                    className="text-[0.95rem] font-bold"
                    style={{ color: CV_ACCENT }}
                  >
                    {company.company}
                    {company.location ? ` — ${company.location}` : null}
                  </h3>
                  <p className="shrink-0 text-[0.8125rem] font-medium text-neutral-600">
                    {company.dates}
                  </p>
                </div>

                <div className="mt-3 space-y-4 print:mt-3.5 print:space-y-5">
                  {company.roles.map((role) => (
                    <div key={`${role.title}-${role.dates}`}>
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <h4 className="text-[0.92rem] font-bold text-neutral-950">
                          {role.title}
                        </h4>
                        <p className="shrink-0 text-[0.8125rem] font-medium text-neutral-600">
                          {role.dates}
                        </p>
                      </div>
                      {role.summary ? (
                        <p className="mt-1.5 text-[0.875rem] leading-relaxed text-neutral-700 italic">
                          {role.summary}
                        </p>
                      ) : null}
                      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.875rem] leading-relaxed text-neutral-800">
                        {role.achievements.map((item) => (
                          <li key={item.slice(0, 48)}>
                            {renderRichText(item)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 print:mt-5">
          <SectionHeading>Selected Enterprise Products</SectionHeading>
          <div className="mt-3 space-y-4 print:mt-3.5 print:space-y-4">
            {CV.products.map((product) => (
              <div key={product.name}>
                <h3 className="text-[0.95rem] font-bold text-neutral-950">
                  {product.name}
                </h3>
                <p className="mt-1 text-[0.875rem] leading-relaxed text-neutral-700 italic">
                  {product.description}
                </p>
                <ul className="mt-1.5 list-disc space-y-1.5 pl-5 text-[0.875rem] leading-relaxed text-neutral-800">
                  {product.highlights.map((item) => (
                    <li key={item}>{renderRichText(item)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 print:mt-5">
          <SectionHeading>Education</SectionHeading>
          <div className="mt-2 print:mt-2.5">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-[0.95rem] font-bold text-neutral-950">
                {CV.education.school}
              </h3>
              <p className="shrink-0 text-[0.8125rem] font-medium text-neutral-600">
                {CV.education.dates}
              </p>
            </div>
            <p className="mt-0.5 text-[0.9rem] text-neutral-800">
              {CV.education.degree} · {CV.education.field}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
