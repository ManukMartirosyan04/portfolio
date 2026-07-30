"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]): string {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size === 0) return;

        let nextId = "";
        let bestRatio = -1;
        for (const id of sectionIds) {
          const ratio = visible.get(id);
          if (ratio !== undefined && ratio >= bestRatio) {
            bestRatio = ratio;
            nextId = id;
          }
        }

        if (nextId) setActiveId(nextId);
      },
      {
        // Band just below the fixed header — marks the section currently "in focus"
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
