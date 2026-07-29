"use client";

import { motion, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { CV } from "@/lib/cv";
import { EXPERIENCE_SECTION } from "@/lib/experience";

const ease = [0.22, 1, 0.36, 1] as const;

function stripBold(text: string): string {
  return text.replace(/\*\*/g, "");
}

export function Experience() {
  const reduceMotion = usePrefersReducedMotion();
  const animate = !reduceMotion;

  const reveal: Variants = {
    hidden: animate ? { opacity: 0, y: 28 } : { opacity: 1, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animate ? 0.6 : 0,
        ease,
      },
    },
  };

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: animate ? 0.08 : 0,
        delayChildren: animate ? 0.05 : 0,
      },
    },
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_10%,rgba(125,207,182,0.06),transparent_55%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        <motion.header
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl"
        >
          <motion.p
            variants={reveal}
            className="mb-5 inline-flex items-center gap-3 text-sm font-medium tracking-[0.08em] text-accent uppercase sm:text-[0.8125rem]"
          >
            <span aria-hidden className="inline-block h-px w-8 bg-accent/70" />
            {EXPERIENCE_SECTION.label}
          </motion.p>

          <motion.h2
            id="experience-heading"
            variants={reveal}
            className="font-display text-[clamp(1.85rem,3.6vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground"
          >
            {EXPERIENCE_SECTION.heading}
          </motion.h2>
        </motion.header>

        <div className="mt-14 space-y-14 sm:mt-16 lg:mt-20">
          {CV.experience.map((company) => (
            <motion.article
              key={`${company.company}-${company.dates}`}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="border-t border-border pt-10"
            >
              <motion.div
                variants={reveal}
                className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <h3 className="font-display text-xl font-semibold tracking-tight text-accent sm:text-2xl">
                  {company.company}
                </h3>
                <p className="font-mono text-sm tracking-wide text-muted">
                  {company.dates}
                </p>
              </motion.div>

              <div className="mt-10 space-y-12">
                {company.roles.map((role) => (
                  <motion.div key={`${role.title}-${role.dates}`} variants={reveal}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <h4 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {role.title}
                      </h4>
                      <p className="text-sm text-muted-strong">{role.dates}</p>
                    </div>

                    {role.summary ? (
                      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
                        {role.summary}
                      </p>
                    ) : null}

                    <ul className="mt-6 max-w-3xl space-y-3 border-l border-border pl-5">
                      {role.achievements.map((item) => (
                        <li
                          key={item.slice(0, 40)}
                          className="relative text-sm leading-relaxed text-muted-strong sm:text-[0.975rem] sm:leading-7"
                        >
                          <span
                            aria-hidden
                            className="absolute -left-[1.35rem] top-[0.55em] h-1 w-1 rounded-full bg-accent/70"
                          />
                          {stripBold(item)}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
