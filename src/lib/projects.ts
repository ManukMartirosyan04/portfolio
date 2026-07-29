export type ProjectVisualKind =
  | "dashboard"
  | "crm"
  | "adminShell"
  | "sizingFlow"
  | "calcFlow"
  | "chess"
  | "performance";

export type ProjectLink = {
  label: string;
  href: string | null;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: readonly string[];
  tech: readonly string[];
  visual: ProjectVisualKind;
  links: readonly ProjectLink[];
};

export const PROJECTS_SECTION = {
  label: "Selected Work",
  heading: "Enterprise products shaped by real engineering challenges.",
  intro:
    "A selection of enterprise platforms I contributed to. Two deeper case studies explore architecture decisions and workflow-driven UI thinking—beyond what fits on a CV.",
} as const;

/** Featured work aligned with CV enterprise products. */
export const FEATURED_PROJECTS: readonly Project[] = [
  {
    id: "webstation",
    number: "01",
    title: "WebStation",
    description:
      "Enterprise Field Service Management platform for technicians, support teams, and dealers across multiple European markets.",
    highlights: [
      "Owned complex workflow-driven UI for service request lifecycle, scheduling, and spare parts flows",
      "Built interfaces where navigation, forms, validation, and actions adapted to business state and permissions",
      "Delivered localized experiences with performance work for large operational datasets",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "React Hook Form",
      "Ant Design",
    ],
    visual: "dashboard",
    links: [{ label: "Read Case Study", href: "/work/webstation" }],
  },
  {
    id: "pfs4",
    number: "02",
    title: "PFS4",
    description:
      "Enterprise administration platform for configuring and managing business operations.",
    highlights: [
      "Built administration workflows for users, roles & permissions, and product configuration",
      "Implemented translation management, regions, and dynamic dropdown values",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "React Hook Form",
      "Ant Design",
    ],
    visual: "adminShell",
    links: [],
  },
  {
    id: "projipac",
    number: "03",
    title: "Projipac",
    description:
      "Enterprise heat-pump sizing platform that turns technical building inputs into calculation-driven product recommendations and PDF documentation.",
    highlights: [
      "Designed the frontend architecture and multi-step project workflow from input to synthesis",
      "Built reusable form patterns with dynamic validation across sizing steps",
      "Chose RTK Query inside Redux Toolkit to keep server state and workflow state in one ecosystem",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "React Hook Form",
      "Yup",
    ],
    visual: "sizingFlow",
    links: [{ label: "Read Case Study", href: "/work/projipac" }],
  },
  {
    id: "aquamed",
    number: "04",
    title: "Aquamed",
    description:
      "Enterprise engineering platform focused on calculations and business workflows.",
    highlights: [
      "Contributed to shared React infrastructure used across engineering workflows",
      "Supported calculation-driven interfaces with Redux Toolkit and RTK Query",
    ],
    tech: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Ant Design"],
    visual: "calcFlow",
    links: [],
  },
] as const;
