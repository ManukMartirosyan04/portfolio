import { cn } from "@/lib/cn";

type TechTagsProps = {
  tech: readonly string[];
  className?: string;
};

export function TechTags({ tech, className }: TechTagsProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tech.map((item) => (
        <li key={item}>
          <span className="inline-flex items-center rounded-full border border-border bg-foreground/[0.02] px-3 py-1 text-xs tracking-tight text-muted-strong transition-colors group-hover/project:border-accent/25 group-hover/project:text-foreground">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
