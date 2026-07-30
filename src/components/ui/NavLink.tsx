"use client";

import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  active?: boolean;
};

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function NavLink(
    { href, children, className, active = false, onClick, ...props },
    ref,
  ) {
    return (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        aria-current={active ? "true" : undefined}
        className={cn(
          "relative rounded-md px-1 py-1 text-sm tracking-tight text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
          active && "text-foreground",
        )}
        {...props}
      >
        {children}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-1 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300",
            "group-hover:scale-x-100",
            active && "scale-x-100",
          )}
        />
      </a>
    );
  },
);
