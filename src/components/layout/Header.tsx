"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/ui/NavLink";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.replace(/^\/#/, ""));

export function Header() {
  const scrolled = useScrolled(16);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const activeSection = useActiveSection(SECTION_IDS);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    firstLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 motion-reduce:transition-none",
        scrolled || menuOpen
          ? "border-b border-border bg-[#060708]/72 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[var(--header-height)] w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="/#home"
          className="font-display text-[0.95rem] font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base"
        >
          {SITE.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace(/^\/#/, "");
            return (
              <NavLink
                key={item.href}
                href={item.href}
                active={activeSection === sectionId}
                className="group"
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href={SITE.cvHref}
            variant="secondary"
            size="sm"
            download={SITE.cvDownloadName}
          >
            Download CV
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/[0.03] text-foreground transition-colors hover:border-border-strong hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-4" aria-hidden>
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none",
                menuOpen && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[6px] h-0.5 w-full rounded-full bg-current transition-opacity duration-200 motion-reduce:transition-none",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[12px] h-0.5 w-full rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none",
                menuOpen && "-translate-y-[6px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id={menuId}
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border bg-[#060708]/95 backdrop-blur-xl lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 sm:px-8"
            >
              {NAV_ITEMS.map((item, index) => {
                const sectionId = item.href.replace(/^\/#/, "");
                return (
                  <NavLink
                    key={item.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    active={activeSection === sectionId}
                    onClick={closeMenu}
                    className="rounded-lg px-3 py-3 text-base text-muted-strong hover:bg-white/[0.03]"
                  >
                    {item.label}
                  </NavLink>
                );
              })}
              <div className="mt-3 border-t border-border pt-4">
                <Button
                  href={SITE.cvHref}
                  variant="primary"
                  className="w-full"
                  download={SITE.cvDownloadName}
                  onClick={closeMenu}
                >
                  Download CV
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
