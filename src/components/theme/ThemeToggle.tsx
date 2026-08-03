"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/cn";

const LABELS = {
  light: "Light",
  dark: "Dark",
  // system: "System",
} as const;

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z" />
    </svg>
  );
}

// function SystemIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       className={className}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.75"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden
//     >
//       <rect x="3" y="4" width="18" height="12" rx="2" />
//       <path d="M8 20h8M12 16v4" />
//     </svg>
//   );
// }

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, cycleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextLabel = theme === "light" ? "Dark" : "Light";

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground/[0.03] text-muted-strong transition-colors hover:border-border-strong hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-label={
        mounted
          ? `Theme: ${LABELS[theme]}. Switch to ${nextLabel}`
          : "Toggle theme"
      }
      title={mounted ? `Theme: ${LABELS[theme]}` : "Theme"}
    >
      {!mounted || theme === "dark" ? (
        <MoonIcon className="h-4 w-4" />
      ) : (
        <SunIcon className="h-4 w-4" />
      )}
    </button>
  );
}
