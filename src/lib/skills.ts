export type Skill = {
  name: string;
  featured?: boolean;
};

export type SkillCategory = {
  title: string;
  skills: readonly Skill[];
};

export const SKILLS_SECTION = {
  label: "Tech Stack",
  heading: "Technologies I work with.",
} as const;

/** Aligned with CV technical skills — do not claim tools not listed on the CV. */
export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", featured: true },
      { name: "TypeScript", featured: true },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", featured: true },
      { name: "Redux Toolkit", featured: true },
      { name: "RTK Query", featured: true },
      { name: "React Hook Form" },
      { name: "Yup" },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Ant Design", featured: true },
      { name: "Material UI" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Chart.js" },
    ],
  },
  {
    title: "Performance & Architecture",
    skills: [
      { name: "Frontend Architecture", featured: true },
      { name: "Performance Optimization", featured: true },
      { name: "State Management" },
      { name: "Code Splitting" },
      { name: "Lazy Loading" },
      { name: "Virtualization" },
      { name: "Localization (i18n)" },
      { name: "RBAC" },
      { name: "WebSocket" },
    ],
  },
  {
    title: "Testing",
    skills: [{ name: "Vitest" }, { name: "Code Review Workflows" }],
  },
  {
    title: "Build & DevOps",
    skills: [
      { name: "Vite" },
      { name: "Webpack" },
      { name: "Git" },
      { name: "Vercel" },
    ],
  },
  {
    title: "Tools",
    skills: [{ name: "Jira" }, { name: "Figma" }],
  },
  {
    title: "Backend familiarity",
    skills: [{ name: "C#" }, { name: ".NET" }, { name: "SQL" }],
  },
] as const;
