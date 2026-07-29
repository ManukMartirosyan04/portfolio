export const CV = {
  name: "Manuk Martirosyan",
  title: "Senior Frontend Developer",
  location: "Yerevan, Armenia",
  email: "manukmartirosyan04@gmail.com",
  phone: "+374 77 209906",
  links: {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/manuk-martirosyan-836789310/",
    },
    github: {
      label: "GitHub",
      href: null as string | null,
    },
    portfolio: {
      label: "Portfolio",
      href: "https://manukmartirosyan.com",
    },
  },
  summary: [
    "Senior Frontend Developer with 7+ years of experience developing enterprise React applications for complex business domains. Experienced in designing scalable frontend architecture, building workflow-driven user interfaces, and delivering high-performance web applications using **React**, **TypeScript**, **Redux Toolkit**, and **RTK Query**.",
    "Focused on designing maintainable frontend systems, simplifying complex business workflows, and delivering scalable enterprise applications through clean architecture and reusable solutions.",
  ],
  skills: [
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript"],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "React",
        "Redux Toolkit",
        "RTK Query",
        "React Hook Form",
        "Yup",
      ],
    },
    {
      category: "Styling & UI",
      items: ["Ant Design", "Material UI", "HTML5", "CSS3", "Chart.js"],
    },
    {
      category: "Performance & Architecture",
      items: [
        "Frontend Architecture",
        "Performance Optimization",
        "State Management",
        "Code Splitting",
        "Lazy Loading",
        "Virtualization",
        "Localization (i18n)",
        "Role-Based Access Control (RBAC)",
        "WebSocket",
      ],
    },
    {
      category: "Testing",
      items: ["Vitest", "Code Review Workflows"],
    },
    {
      category: "Build & DevOps",
      items: ["Vite", "Webpack", "Git", "Vercel"],
    },
    {
      category: "Tools",
      items: ["Jira", "Figma"],
    },
    {
      category: "Spoken Languages",
      items: ["Armenian (Native)", "English (B2)"],
    },
  ],
  experience: [
    {
      company: "Ogma Applications",
      dates: "December 2018 – Present",
      location: null,
      roles: [
        {
          title: "Senior Frontend Developer",
          dates: "2021 – Present",
          summary:
            "Building enterprise React applications for field service, engineering, and administration platforms used across multiple European markets.",
          achievements: [
            "Designed and implemented the frontend architecture for a new engineering platform, defining scalable structure, reusable component patterns, API integration, and predictable state management.",
            "Standardized application state by introducing **Redux Toolkit** and **RTK Query**, improving consistency, caching, and API data handling across new enterprise products.",
            "Built workflow-driven interfaces where navigation, actions, forms, and validation adapted dynamically to business state, permissions, and configuration.",
            "Developed complex business forms with **React Hook Form** and **Yup**, including conditional rendering and server-driven validation rules.",
            "Cut initial JavaScript bundle size from ~**3 MB to 1.8 MB** through route-level code splitting and lazy loading, improving application startup performance.",
            "Improved responsiveness of data-heavy screens by implementing list/table virtualization for large datasets.",
          ],
        },
        {
          title: "Full Stack Developer",
          dates: "2018 – 2021",
          summary: null as string | null,
          achievements: [
            "Developed frontend and backend features using **React**, **C# (.NET)**, and **SQL** for enterprise business applications.",
            "Maintained and enhanced production enterprise applications while resolving customer-facing issues.",
            "Collaborated with senior engineers on feature delivery and mentored juniors through JavaScript knowledge-sharing sessions.",
          ],
        },
      ],
    },
  ],
  products: [
    {
      name: "WebStation",
      description:
        "Enterprise Field Service Management platform for technicians, support teams, and dealers.",
      highlights: [
        "Owned complex workflow-driven UI for service request lifecycle, scheduling, and spare parts flows.",
        "Developed workflow-driven interfaces where navigation, forms, validation, and available actions dynamically adapted based on business state and user permissions.",
        "Delivered localized interfaces for multiple European markets with performance work for large operational datasets.",
      ],
    },
    {
      name: "PFS4",
      description:
        "Enterprise administration platform for configuring and managing business operations.",
      highlights: [
        "Built administration workflows for users, roles & permissions, products, translations, and regional configuration.",
      ],
    },
    {
      name: "Projipac",
      description:
        "New enterprise engineering platform developed as a greenfield application.",
      highlights: [
        "Designed and implemented the frontend architecture with **Redux Toolkit**, **RTK Query**, shared components, and complex dynamic forms.",
      ],
    },
    {
      name: "Aquamed",
      description:
        "Enterprise engineering platform focused on calculations and business workflows.",
      highlights: [
        "Contributed to shared React infrastructure and calculation-driven workflows using **Redux Toolkit** and **RTK Query**.",
      ],
    },
  ],
  education: {
    school: "National Polytechnic University of Armenia",
    degree: "Bachelor's Degree",
    field: "Information Technology",
    dates: "2010 – 2016",
  },
} as const;

/** Soft professional accent — closer to muted resume blue than bright link blue */
export const CV_ACCENT = "#3d6b94";
