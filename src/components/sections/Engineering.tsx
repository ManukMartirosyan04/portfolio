"use client";

import { motion, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import {
  ENGINEERING_HIGHLIGHTS,
  ENGINEERING_SECTION,
} from "@/lib/engineering";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

export function Engineering() {
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
      id="engineering"
      aria-labelledby="engineering-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_100%_20%,rgba(125,207,182,0.06),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-24 h-72 opacity-40"
      >
        <div className="grid-fade absolute inset-0" />
      </div>

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
            {ENGINEERING_SECTION.label}
          </motion.p>

          <motion.h2
            id="engineering-heading"
            variants={reveal}
            className="font-display text-[clamp(1.85rem,3.6vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground"
          >
            {ENGINEERING_SECTION.heading}
          </motion.h2>
        </motion.header>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -6% 0px" }}
          className="mt-14 grid gap-0 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24"
        >
          {ENGINEERING_HIGHLIGHTS.map((item, index) => (
            <motion.li
              key={item.number}
              variants={reveal}
              className={cn(
                "group relative border-t border-border py-8 sm:py-9",
                index % 2 === 1 && "lg:translate-y-10",
                index === ENGINEERING_HIGHLIGHTS.length - 1 && "border-b",
                index >= ENGINEERING_HIGHLIGHTS.length - 2 && "lg:border-b",
              )}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent/70 to-transparent transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />

              <div className="flex items-start gap-5 sm:gap-6">
                <span className="font-mono shrink-0 pt-1 text-sm tracking-[0.16em] text-accent/75 transition-colors duration-300 group-hover:text-accent">
                  {item.number}
                </span>

                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.35rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-[0.975rem] sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
