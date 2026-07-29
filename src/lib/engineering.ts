export type EngineeringHighlight = {
  number: string;
  title: string;
  description: string;
};

export const ENGINEERING_SECTION = {
  label: "Engineering",
  heading: "How I approach frontend engineering.",
} as const;

export const ENGINEERING_HIGHLIGHTS: readonly EngineeringHighlight[] = [
  {
    number: "01",
    title: "Scalable Architecture",
    description:
      "Building maintainable and reusable frontend architectures for complex applications.",
  },
  {
    number: "02",
    title: "Performance",
    description:
      "Optimizing rendering, application performance, large datasets, and user experience.",
  },
  {
    number: "03",
    title: "Complex State",
    description:
      "Managing complex application state and business logic using modern state management patterns.",
  },
  {
    number: "04",
    title: "Workflow-Driven UI",
    description:
      "Building interfaces where navigation, forms, and actions adapt to business state, permissions, and configuration.",
  },
  {
    number: "05",
    title: "API Integration",
    description:
      "Designing clean frontend data layers and integrating complex REST APIs.",
  },
  {
    number: "06",
    title: "UI Engineering",
    description:
      "Building reusable component systems and consistent user interfaces for large applications.",
  },
] as const;
