"use client";

import { motion, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ABOUT } from "@/lib/about";

const ease = [0.22, 1, 0.36, 1] as const;

function createRevealVariants(animate: boolean): Variants {
  return {
    hidden: animate ? { opacity: 0, y: 28 } : { opacity: 1, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animate ? 0.65 : 0,
        ease,
      },
    },
  };
}

export function About() {
  const reduceMotion = usePrefersReducedMotion();
  const animate = !reduceMotion;
  const reveal = createRevealVariants(animate);

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: animate ? 0.1 : 0,
        delayChildren: animate ? 0.06 : 0,
      },
    },
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(125,207,182,0.06),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-warm/[0.04] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
          className="grid gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20 xl:gap-28"
        >
          {/* Left: narrative */}
          <div className="min-w-0">
            <motion.p
              variants={reveal}
              className="mb-5 inline-flex items-center gap-3 text-sm font-medium tracking-[0.08em] text-accent uppercase sm:text-[0.8125rem]"
            >
              <span aria-hidden className="inline-block h-px w-8 bg-accent/70" />
              {ABOUT.label}
            </motion.p>

            <motion.h2
              id="about-heading"
              variants={reveal}
              className="font-display max-w-xl text-[clamp(1.85rem,3.6vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground"
            >
              {ABOUT.heading}
            </motion.h2>

            <div className="mt-8 max-w-xl space-y-5">
              {ABOUT.paragraphs.map((paragraph) => (
                <motion.p
                  key={paragraph.slice(0, 32)}
                  variants={reveal}
                  className="text-base leading-relaxed text-muted sm:text-[1.0625rem] sm:leading-8"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right: experience highlight + focus areas */}
          <div className="relative flex min-w-0 flex-col lg:pt-10">
            <motion.div
              variants={reveal}
              className="relative mb-14 border-l border-accent/35 pl-6 sm:pl-8 lg:mb-16"
            >
              <p className="font-display text-[clamp(4.5rem,12vw,7.5rem)] font-semibold leading-none tracking-[-0.06em] text-foreground">
                <span className="bg-gradient-to-br from-foreground via-accent to-warm bg-clip-text text-transparent">
                  {ABOUT.experience.value}
                </span>
              </p>
              <p className="mt-3 max-w-[12rem] text-sm font-medium tracking-[0.12em] text-muted-strong uppercase sm:text-[0.8125rem]">
                {ABOUT.experience.label}
              </p>
              <span
                aria-hidden
                className="absolute -left-px top-0 h-10 w-px bg-gradient-to-b from-accent to-transparent"
              />
            </motion.div>

            <motion.ul
              variants={container}
              className="flex flex-col gap-0 border-t border-border"
            >
              {ABOUT.focusAreas.map((area, index) => (
                <motion.li
                  key={area.title}
                  variants={reveal}
                  className="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-b border-border py-6 sm:gap-x-6 sm:py-7"
                >
                  <span className="font-mono text-xs tracking-wider text-accent/80 pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-xl">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem] sm:leading-7">
                      {area.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
