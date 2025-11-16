"use client";

import { useRef } from "react";
import { CaseStudy } from "@/types/content";
import { CaseCard } from "./case-card";

export function CaseCarousel({ items }: { items: CaseStudy[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const delta = direction === "left" ? -360 : 360;
    container.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="rounded-full border border-white/20 p-2 text-white/70 transition hover:border-white/40"
          aria-label="Casos anteriores"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="rounded-full border border-white/20 p-2 text-white/70 transition hover:border-white/40"
          aria-label="Casos siguientes"
        >
          →
        </button>
      </div>
      <div ref={scrollRef} className="hide-scrollbar flex gap-6 overflow-x-auto pb-4">
        {items.map((item) => (
          <CaseCard key={item.company} item={item} />
        ))}
      </div>
    </div>
  );
}
