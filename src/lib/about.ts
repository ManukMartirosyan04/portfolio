export type FocusArea = {
  title: string;
  description: string;
};

export const ABOUT = {
  label: "About Me",
  heading: "Building complex products, not just interfaces.",
  paragraphs: [
    "I'm a Senior Frontend Developer with 7+ years of experience building enterprise React applications for complex business domains. I started my career as a full-stack developer, which gave me a strong understanding of how complete software systems work.",
    "Over the years, I specialized in frontend engineering—designing scalable architectures, workflow-driven interfaces, reusable component systems, and high-performance applications with React, TypeScript, Redux Toolkit, and RTK Query.",
    "My focus is on designing maintainable frontend systems, simplifying complex business workflows, and delivering scalable enterprise applications through clean architecture and reusable solutions.",
  ],
  experience: {
    value: "7+",
    label: "Years of Experience",
  },
  focusAreas: [
    {
      title: "Performance & Architecture",
      description:
        "Scalable frontend architecture, state management, and performance-focused delivery.",
    },
    {
      title: "Complex Applications",
      description:
        "Enterprise platforms, admin systems, and workflow-driven business interfaces.",
    },
    {
      title: "Collaboration",
      description:
        "Working with product and backend teams on solution design and reliable delivery.",
    },
  ] satisfies readonly FocusArea[],
} as const;
