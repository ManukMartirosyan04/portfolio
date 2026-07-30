import type { Skill } from "@/lib/skills";
import { cn } from "@/lib/cn";

type SkillTagProps = {
  skill: Skill;
};

export function SkillTag({ skill }: SkillTagProps) {
  return (
    <li>
      <span
        className={cn(
          "inline-flex items-center rounded-full border tracking-tight transition-colors duration-200",
          skill.featured
            ? "border-accent/35 bg-accent-soft px-3.5 py-1.5 text-sm font-medium text-accent hover:border-accent/55 hover:bg-accent/20"
            : "border-border bg-foreground/[0.02] px-3 py-1.5 text-sm text-muted-strong hover:border-border-strong hover:text-foreground",
        )}
      >
        {skill.name}
      </span>
    </li>
  );
}
