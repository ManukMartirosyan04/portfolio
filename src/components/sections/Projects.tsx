"use client";

import { motion, type Variants } from "framer-motion";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { FEATURED_PROJECTS, PROJECTS_SECTION } from "@/lib/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  const reduceMotion = usePrefersReducedMotion();
  const animate = !reduceMotion;

  const reveal: Variants = {
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

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: animate ? 0.1 : 0,
        delayChildren: animate ? 0.05 : 0,
      },
    },
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_0%_10%,rgba(125,207,182,0.07),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] opacity-50"
      >
        <div className="grid-fade absolute inset-0" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-warm/[0.04] blur-3xl"
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
            {PROJECTS_SECTION.label}
          </motion.p>

          <motion.h2
            id="projects-heading"
            variants={reveal}
            className="font-display text-[clamp(1.85rem,3.6vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground"
          >
            {PROJECTS_SECTION.heading}
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8"
          >
            {PROJECTS_SECTION.intro}
          </motion.p>
        </motion.header>

        <div className="mt-6 sm:mt-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCaseStudy
              key={project.id}
              project={project}
              index={index}
              animate={animate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
