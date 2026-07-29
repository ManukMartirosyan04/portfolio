export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const SITE = {
  name: "Manuk Martirosyan",
  shortName: "Manuk",
  role: "Senior Frontend Developer",
  cvHref: "/cv.pdf",
  cvDownloadName: "Manuk_Martirosyan_Resume.pdf",
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manuk-martirosyan-836789310/",
  },
] as const;
