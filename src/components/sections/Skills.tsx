"use client";

import { motion, type Variants } from "framer-motion";
import { SkillTag } from "@/components/skills/SkillTag";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SKILL_CATEGORIES, SKILLS_SECTION } from "@/lib/skills";

const ease = [0.22, 1, 0.36, 1] as const;

export function Skills() {
  const reduceMotion = usePrefersReducedMotion();
  const animate = !reduceMotion;

  const reveal: Variants = {
    hidden: animate ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animate ? 0.55 : 0,
        ease,
      },
    },
  };

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: animate ? 0.07 : 0,
        delayChildren: animate ? 0.04 : 0,
      },
    },
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_0%_0%,rgba(228,201,162,0.05),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-accent/[0.04] blur-3xl"
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
            {SKILLS_SECTION.label}
          </motion.p>

          <motion.h2
            id="skills-heading"
            variants={reveal}
            className="font-display text-[clamp(1.85rem,3.6vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground"
          >
            {SKILLS_SECTION.heading}
          </motion.h2>
        </motion.header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -5% 0px" }}
          className="mt-14 space-y-0 sm:mt-16 lg:mt-20"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={reveal}
              className="grid gap-4 border-t border-border py-8 sm:grid-cols-[minmax(10rem,14rem)_1fr] sm:gap-8 sm:py-9 lg:grid-cols-[minmax(12rem,16rem)_1fr] lg:gap-12"
            >
              <h3 className="font-display text-base font-semibold tracking-tight text-foreground sm:pt-1.5 sm:text-lg">
                {category.title}
              </h3>

              <ul className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
