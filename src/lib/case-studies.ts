export type CaseStudySection = {
  title: string;
  body: string;
  bullets?: readonly string[];
  /** Visual treatment for hierarchy */
  variant?: "default" | "emphasis";
};

export type CaseStudyPerformance = {
  title: string;
  metricLabel: string;
  metricValue: string;
  items: readonly string[];
};

export type CaseStudy = {
  slug: string;
  projectId: string;
  number: string;
  title: string;
  subtitle: string;
  role: string;
  focus: string;
  tech: readonly string[];
  highlights: readonly string[];
  summary: string;
  sections: readonly CaseStudySection[];
  performance?: CaseStudyPerformance;
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    slug: "projipac",
    projectId: "projipac",
    number: "03",
    title: "Projipac",
    subtitle:
      "Enterprise heat-pump sizing platform that turns technical building inputs into calculation-driven product recommendations and PDF documentation",
    role: "Senior Frontend Developer",
    focus: "Business workflows · Forms · Calculations · Architecture",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "React Hook Form",
      "Yup",
    ],
    highlights: [
      "Heat-pump sizing workflow",
      "Dynamic input forms",
      "PDF documentation",
    ],
    summary:
      "Projipac is an enterprise heat-pump sizing platform used by installers and sales teams. Users capture technical building inputs, run calculation-driven selection (including deperditions and PAC recommendations), and produce client-ready PDF documentation. Products, parameters, and calculation inputs were maintained through admin tooling, so engineering workflows could evolve without restructuring the frontend.",
    performance: {
      title: "Fetching trade-off",
      metricLabel: "Total API payload across the flow",
      metricValue: "~40% less",
      items: [
        "Chose lazy fetching over prefetching because calculation results depended on previous-step inputs",
        "Pre-loading would have produced wasted requests as users changed earlier answers",
        "Slightly higher perceived latency between steps",
        "Lower total API payload across the multi-step project flow",
      ],
    },
    sections: [
      {
        title: "Context",
        body: "Installers and sales teams needed a reliable frontend to capture technical inputs, run calculation-driven selection, and produce client-ready documentation. The UI had to feel trustworthy for real project work, not just demo forms.",
      },
      {
        title: "The engineering challenge",
        body: "The hard part was modeling a business workflow where related inputs changed validation, available results, and document output. Forms, API state, and calculation results had to stay consistent as product rules evolved.",
        bullets: [
          "Multi-step project flow from building inputs through deperditions, PAC selection, accessories, and synthesis",
          "Dynamic forms with conditional fields and business validation",
          "Calculation-driven results that depended on multiple related inputs",
          "PDF generation as part of the end-user workflow",
        ],
      },
      {
        title: "Decision thinking",
        variant: "emphasis",
        body: "I standardized on Redux Toolkit + RTK Query for app/API state and React Hook Form + Yup for complex conditional forms, so new modules could follow shared conventions instead of reinventing fetching and validation per screen. I looked at React Query, but chose RTK Query because Projipac already needed Redux Toolkit for complex workflow state—step navigation, wizard progress, and unsaved changes. React Query would have been strong for server state alone, but keeping the API layer inside Redux Toolkit reduced architectural split across the app: one ecosystem for both server state and UI/workflow state.",
        bullets: [
          "Server state and UI/workflow state needed clearer boundaries",
          "Forms were too complex for one-off page logic",
          "Consistency mattered more than short-term speed once modules started multiplying",
        ],
      },
      {
        title: "Hard technical example",
        body: "The hard part was not one form—it was making dynamic validation reusable across sizing steps. I treated it as a shared form pattern rather than page-local React Hook Form setup.",
        bullets: [
          "useCustomForm wrapped React Hook Form so modules shared the same setup, error handling, and submit path",
          "Validation was composed with useTranslation and useSalesNetwork, so required fields, labels, and accepted ranges could change by locale and network config",
          "When calculation inputs or network settings changed mid-flow, the form re-resolved validation without remounting the step or losing user input",
          "That hook-based pattern kept page components thinner and let new steps reuse the same conditional-validation approach",
        ],
      },
      {
        title: "What I built",
        body: "I owned the frontend architecture and the core project workflow from technical input to product selection and synthesis.",
        bullets: [
          "Step-based project workflow from technical input to product selection and synthesis",
          "Dynamic forms with conditional fields and business validation",
          "Clear separation between server state and workflow/UI state",
          "Shared form and API patterns reused across modules",
          "PDF generation as part of the end-user flow",
        ],
      },
      {
        title: "Outcome",
        variant: "emphasis",
        body: "The frontend supported calculation-driven selection and document generation without collapsing into one-off screens. As the platform expanded, new modules could reuse the same state, form, and API patterns.",
      },
      {
        title: "What I’d refine today",
        body: "I would invest even earlier in shared contracts between backend payloads, Yup schemas, and frontend form models, and document decision rules more explicitly so architectural intent survives team growth.",
      },
    ],
  },
  {
    slug: "webstation",
    projectId: "webstation",
    number: "01",
    title: "WebStation",
    subtitle:
      "Workflow-driven field service UI shaped by permissions, status logic, and multi-market operational rules",
    role: "Senior Frontend Developer",
    focus: "Workflows · Permissions · Operational UI · Localization",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "React Hook Form",
      "Ant Design",
    ],
    highlights: [
      "Multi-market product",
      "Workflow-driven UI",
      "Large operational datasets",
    ],
    summary:
      "WebStation is an enterprise Field Service Management platform used by technicians, support teams, and dealers across multiple European markets. Its complexity was driven less by visual design and more by operational rules: workflow status, user role, and market-specific configuration continuously changed what users could see, edit, and trigger.",
    performance: {
      title: "Performance work",
      metricLabel: "Initial JS bundle",
      metricValue: "3 MB → 1.8 MB",
      items: [
        "Route-level code splitting",
        "Lazy loading",
        "Rendering discipline for data-heavy operational screens",
        "Improved responsiveness on operational tables with hundreds of rows",
      ],
    },
    sections: [
      {
        title: "Context",
        body: "The product supported real service operations: service request lifecycles, technician assignment, spare parts handling, attachments, defect codes, and contract-linked flows. This was not a static admin dashboard. The UI had to reflect business policy at every step and remain stable for users working under time-sensitive operational constraints.",
      },
      {
        title: "The engineering challenge",
        body: "The interface behaved differently depending on workflow state, permissions, and local business rules.",
        bullets: [
          "Navigation, actions, and forms changed based on service call status",
          "Role-based access changed what technicians, dispatchers, and support users could edit or trigger",
          "Localization affected labels, validation expectations, dates, and market-specific process differences",
          "Large operational datasets had to stay responsive across list and detail-heavy workflows",
        ],
      },
      {
        title: "Decision thinking",
        variant: "emphasis",
        body: "The main trade-off was between explicit workflow behavior and long-term maintainability.",
        bullets: [
          "Duplicating screens per workflow step would not scale across roles, statuses, and markets",
          "Pushing everything into overly generic abstractions would hide business rules and make debugging harder",
          "I centered the UI around shared screen primitives with explicit workflow- and permission-aware composition so the interface could adapt without fragmenting into near-duplicate pages",
        ],
      },
      {
        title: "What I owned",
        body: "I redesigned the service-call detail flow and standardized permission-aware actions across multiple operational screens, including attachments, defect codes, spare parts, fees, and status-driven service workflows.",
        bullets: [
          "I worked on shared behavior for action visibility, editability, validation, and save rules",
          "I aligned screen behavior with workflow state instead of treating every page as an isolated form",
          "I improved performance on data-heavy views and reduced frontend duplication across related document flows",
          "I treated localization and market-specific behavior as implementation constraints from the start, not as a final translation layer",
        ],
      },
      {
        title: "Concrete workflow examples",
        body: "The product’s complexity showed up in very specific interaction rules.",
        bullets: [
          "When a service call was in an open or assignable state, a technician could accept or reject the job, while a dispatcher could assign or unassign subcontractors and update operational fields",
          "In later closed or checked states, those actions were blocked and document-related controls became read-only",
          "On attachment- and document-related flows, users could generate artifacts such as warranty certificates or assignment reports only in allowed workflow states",
          "When the saved status moved into restricted states, those actions were disabled and save attempts surfaced validation feedback instead of letting invalid updates proceed",
        ],
      },
      {
        title: "Hard technical example",
        body: "One of the harder implementation areas was the service-call detail screen, where form behavior changed dynamically based on both workflow status and market configuration.",
        bullets: [
          "Validation rules were not static and could change depending on saved status, accepted state, installer requirements, and network-level configuration",
          "Fields such as installer name, company, address, phone, email, installation date, and appointment date could become required only under specific combinations of market settings and process stage",
          "The form layer had to react to business state changes without splitting the screen into multiple versions",
          "I kept those rules close to the detail flow so the system remained debuggable while still supporting dynamic validation and conditional editability",
        ],
      },
      {
        title: "Scale indicators",
        body: "To reflect the product’s operational scope:",
        bullets: [
          "5 locales / European markets",
          "Multiple user roles including technicians, dispatchers, and support-facing users",
          "Workflow-dependent behavior across service calls, attachments, fees, spare parts, defect codes, and contracts",
          "Multiple operational screens tied together through shared business state",
          "Dozens of conditional UI paths driven by status, permissions, and market configuration",
        ],
      },
      {
        title: "Outcome",
        variant: "emphasis",
        body: "The resulting frontend supported different users, markets, and workflow states without duplicating entire screens for each scenario. The UI remained maintainable under growing business rules while staying responsive on operational, data-heavy views.",
      },
      {
        title: "What I’d refine today",
        body: "One thing I'd improve today is documenting workflows and permission rules earlier. A shared workflow map would reduce ambiguity, simplify implementation, and make future changes easier to maintain.",
      },
    ],
  },
] as const;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((study) => study.slug);
}
