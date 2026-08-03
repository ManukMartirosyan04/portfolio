export const THEME_STORAGE_KEY = "theme";

export type Theme = "light" | "dark";
// export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEMES: readonly Theme[] = ["light", "dark"] as const;
// export const THEMES: readonly Theme[] = ["light", "dark", "system"] as const;

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
  // return value === "light" || value === "dark" || value === "system";
}

export function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function resolveTheme(theme: Theme): ResolvedTheme {
  return theme;
  // return theme === "system" ? getSystemTheme() : theme;
}

/** Inline script — runs before paint to avoid a flash of the wrong theme. */
export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);if(t==="system"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";localStorage.setItem(k,t);}if(t!=="light"&&t!=="dark")t="dark";var d=t==="dark";var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";r.dataset.theme=t;}catch(e){}})();`;
