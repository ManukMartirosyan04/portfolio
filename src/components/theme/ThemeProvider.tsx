"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  THEME_STORAGE_KEY,
  // getSystemTheme,
  isTheme,
  resolveTheme,
  type ResolvedTheme,
  type Theme,
} from "@/lib/theme";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyResolvedTheme(resolved: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved;
}

function readStoredTheme(): Theme {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  // Migrate old "system" preference to the current OS theme once.
  if (stored === "system") {
    const migrated = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    localStorage.setItem(THEME_STORAGE_KEY, migrated);
    return migrated;
  }
  return isTheme(stored) ? stored : "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");

  useEffect(() => {
    const next = readStoredTheme();
    setThemeState(next);
    const resolved = resolveTheme(next);
    setResolvedTheme(resolved);
    applyResolvedTheme(resolved);
  }, []);

  // System mode listener — restore when re-enabling "system" theme.
  // useEffect(() => {
  //   if (theme !== "system") return;
  //
  //   const media = window.matchMedia("(prefers-color-scheme: dark)");
  //   const onChange = () => {
  //     const resolved = getSystemTheme();
  //     setResolvedTheme(resolved);
  //     applyResolvedTheme(resolved);
  //   };
  //
  //   media.addEventListener("change", onChange);
  //   return () => media.removeEventListener("change", onChange);
  // }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
    const resolved = resolveTheme(next);
    setResolvedTheme(resolved);
    applyResolvedTheme(resolved);
    document.documentElement.dataset.theme = next;
  }, []);

  const cycleTheme = useCallback(() => {
    setThemeState((current) => {
      const order: Theme[] = ["light", "dark"];
      // const order: Theme[] = ["light", "dark", "system"];
      const next = order[(order.indexOf(current) + 1) % order.length] ?? "dark";
      localStorage.setItem(THEME_STORAGE_KEY, next);
      const resolved = resolveTheme(next);
      setResolvedTheme(resolved);
      applyResolvedTheme(resolved);
      document.documentElement.dataset.theme = next;
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme, cycleTheme }),
    [theme, resolvedTheme, setTheme, cycleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
