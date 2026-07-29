"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SITE } from "@/lib/constants";
import { CV } from "@/lib/cv";

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
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
        staggerChildren: animate ? 0.08 : 0,
        delayChildren: animate ? 0.04 : 0,
      },
    },
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(125,207,182,0.08),transparent_55%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-2xl"
        >
          <motion.p
            variants={reveal}
            className="mb-5 inline-flex items-center gap-3 text-sm font-medium tracking-[0.08em] text-accent uppercase sm:text-[0.8125rem]"
          >
            <span aria-hidden className="inline-block h-px w-8 bg-accent/70" />
            Contact
          </motion.p>

          <motion.h2
            id="contact-heading"
            variants={reveal}
            className="font-display text-[clamp(1.85rem,3.6vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground"
          >
            Let&apos;s build something reliable.
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-6 text-base leading-relaxed text-muted sm:text-lg sm:leading-8"
          >
            Open to senior frontend opportunities and collaboration. Based in{" "}
            {CV.location}.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button href={`mailto:${CV.email}`}>{CV.email}</Button>
            <Button href={`tel:${CV.phone.replace(/\s/g, "")}`} variant="secondary">
              {CV.phone}
            </Button>
            <Button href={SITE.cvHref} variant="ghost" download={SITE.cvDownloadName}>
              Download CV
            </Button>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:gap-6"
          >
            <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
              Find me on
            </p>
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
