"use client";

import { motion, type Variants } from "framer-motion";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { TechTags } from "@/components/projects/TechTags";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

type ProjectCaseStudyProps = {
  project: Project;
  index: number;
  animate: boolean;
};

export function ProjectCaseStudy({
  project,
  index,
  animate,
}: ProjectCaseStudyProps) {
  const reversed = index % 2 === 1;

  const reveal: Variants = {
    hidden: animate ? { opacity: 0, y: 32 } : { opacity: 1, y: 0 },
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
        staggerChildren: animate ? 0.08 : 0,
        delayChildren: animate ? 0.04 : 0,
      },
    },
  };

  return (
    <motion.article
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -6% 0px" }}
      className="group/project border-t border-border py-14 sm:py-16 lg:py-20"
      aria-labelledby={`project-${project.id}-title`}
    >
      <div
        className={cn(
          "grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16",
        )}
      >
        <motion.div
          variants={reveal}
          className={cn(
            "lg:col-span-6",
            reversed ? "lg:order-2" : "lg:order-1",
          )}
        >
          <ProjectVisual kind={project.visual} />
        </motion.div>

        <div
          className={cn(
            "lg:col-span-6",
            reversed ? "lg:order-1" : "lg:order-2",
          )}
        >
          <motion.p
            variants={reveal}
            className="font-mono text-sm tracking-[0.18em] text-accent/80"
          >
            {project.number}
          </motion.p>

          <motion.h3
            id={`project-${project.id}-title`}
            variants={reveal}
            className="font-display mt-4 text-[clamp(1.55rem,2.8vw,2.15rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover/project:text-accent"
          >
            {project.title}
          </motion.h3>

          <motion.p
            variants={reveal}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-[1.0625rem] sm:leading-8"
          >
            {project.description}
          </motion.p>

          <motion.ul
            variants={reveal}
            className="mt-7 space-y-2.5 border-l border-border pl-5"
          >
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="relative text-sm leading-relaxed text-muted-strong sm:text-[0.9375rem]"
              >
                <span
                  aria-hidden
                  className="absolute -left-[1.35rem] top-[0.55em] h-1 w-1 rounded-full bg-accent/70"
                />
                {highlight}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={reveal} className="mt-8">
            <TechTags tech={project.tech} />
          </motion.div>

          <motion.div variants={reveal} className="mt-8">
            <ProjectLinks links={project.links} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
