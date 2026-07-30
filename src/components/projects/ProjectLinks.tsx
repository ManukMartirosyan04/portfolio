import type { ProjectLink } from "@/lib/projects";
import { cn } from "@/lib/cn";

type ProjectLinksProps = {
  links: readonly ProjectLink[];
  className?: string;
};

export function ProjectLinks({ links, className }: ProjectLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map((link) => {
        const isPrimary =
          link.label === "View Case Study" || link.label === "Read Case Study";

        if (link.href) {
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={cn(
                "inline-flex items-center gap-2 rounded-full text-sm font-medium tracking-tight transition-[color,background-color,border-color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transform-none",
                isPrimary
                  ? "h-10 border border-accent/35 bg-accent-soft px-4 text-accent hover:border-accent/55 hover:bg-accent/20 hover:-translate-y-px"
                  : "h-10 border border-border-strong bg-foreground/[0.02] px-4 text-muted-strong hover:border-accent/35 hover:text-foreground hover:-translate-y-px",
              )}
            >
              {link.label}
              {isPrimary ? (
                <span aria-hidden className="text-accent/80">
                  →
                </span>
              ) : null}
            </a>
          );
        }

        return (
          <span
            key={link.label}
            aria-disabled="true"
            title="Link coming soon"
            className={cn(
              "inline-flex cursor-not-allowed items-center gap-2 rounded-full text-sm font-medium tracking-tight opacity-55",
              isPrimary
                ? "h-10 border border-border bg-foreground/[0.02] px-4 text-muted-strong"
                : "h-10 border border-border px-4 text-muted",
            )}
          >
            {link.label}
            {isPrimary ? <span aria-hidden>→</span> : null}
            <span className="sr-only"> (coming soon)</span>
          </span>
        );
      })}
    </div>
  );
}
