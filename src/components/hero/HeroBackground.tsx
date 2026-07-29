"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function HeroBackground() {
  const reduceMotion = usePrefersReducedMotion();
  const animateAmbient = !reduceMotion;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(125,207,182,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_20%,rgba(228,201,162,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_10%_70%,rgba(125,207,182,0.06),transparent_60%)]" />

      <div className="grid-fade absolute inset-0 opacity-70" />

      <motion.div
        className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        initial={false}
        animate={
          animateAmbient
            ? {
                x: [0, 28, 0],
                y: [0, -18, 0],
                opacity: [0.35, 0.55, 0.35],
              }
            : { opacity: 0.45 }
        }
        transition={
          animateAmbient
            ? { duration: 14, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0 }
        }
      />

      <motion.div
        className="absolute -right-16 top-[18%] h-80 w-80 rounded-full bg-warm/10 blur-3xl"
        initial={false}
        animate={
          animateAmbient
            ? {
                x: [0, -22, 0],
                y: [0, 24, 0],
                opacity: [0.25, 0.45, 0.25],
              }
            : { opacity: 0.3 }
        }
        transition={
          animateAmbient
            ? { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
            : { duration: 0 }
        }
      />

      <div className="absolute left-1/2 top-[42%] h-px w-[min(72vw,42rem)] -translate-x-1/2 overflow-hidden opacity-80">
        {animateAmbient ? (
          <motion.div
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
            animate={{ x: ["-120%", "320%"] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2.5,
            }}
          />
        ) : (
          <div className="mx-auto h-full w-1/3 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        )}
      </div>

      <div className="noise-overlay" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
