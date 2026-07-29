"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SITE } from "@/lib/constants";

function HeroContent({ animate }: { animate: boolean }) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: animate ? 0.1 : 0,
        delayChildren: animate ? 0.08 : 0,
      },
    },
  };

  const item = {
    hidden: animate ? { opacity: 0, y: 18 } : { opacity: 1, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: animate
        ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }
        : { duration: 0 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial={animate ? "hidden" : false}
      animate="show"
      className="max-w-3xl"
    >
      <motion.p
        variants={item}
        className="mb-5 inline-flex items-center gap-3 text-sm font-medium tracking-[0.08em] text-accent uppercase sm:text-[0.8125rem]"
      >
        <span aria-hidden className="inline-block h-px w-8 bg-accent/70" />
        Hi, I&apos;m {SITE.shortName}
      </motion.p>

      <motion.h1
        id="hero-heading"
        variants={item}
        className="font-display text-[clamp(2.15rem,5.4vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground"
      >
        Frontend Developer building{" "}
        <span className="bg-gradient-to-r from-foreground via-accent to-warm bg-clip-text text-transparent">
          fast, scalable
        </span>{" "}
        and complex web applications.
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8"
      >
        Senior Frontend Developer with 7+ years of experience building
        enterprise React applications. Specialized in scalable architecture,
        workflow-driven interfaces, and high-performance delivery with React,
        TypeScript, Redux Toolkit, and RTK Query.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
      >
        <Button href="#projects">View Projects</Button>
        <Button href={SITE.cvHref} variant="secondary" download={SITE.cvDownloadName}>
          Download CV
        </Button>
        <Button href="#contact" variant="ghost">
          Contact Me
        </Button>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:gap-6"
      >
        <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
          Find me on
        </p>
        <SocialLinks />
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const reduceMotion = usePrefersReducedMotion();
  const shouldAnimate = !reduceMotion;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-[var(--header-height)]"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <HeroContent
          key={shouldAnimate ? "motion" : "static"}
          animate={shouldAnimate}
        />
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-[0.65rem] tracking-[0.18em] uppercase">
            Scroll
          </span>
          <span className="relative h-8 w-px overflow-hidden bg-border-strong">
            {shouldAnimate ? (
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-accent"
                animate={{ y: ["-100%", "200%"] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ) : (
              <span className="absolute inset-x-0 top-1/4 h-1/2 bg-accent/70" />
            )}
          </span>
        </div>
      </div>
    </section>
  );
}
