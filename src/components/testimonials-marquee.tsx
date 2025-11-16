"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/types/content";

export function TestimonialsMarquee({ items }: { items: Testimonial[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-emerald-400/20 bg-emerald-400/10">
      <motion.div
        className="flex gap-6 whitespace-nowrap p-6"
        animate={{ x: [0, -320] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        {[...items, ...items].map((item, index) => (
          <figure
            key={`${item.author}-${index}`}
            className="min-w-[320px] rounded-2xl border border-white/10 bg-white/5 p-5 text-left"
          >
            <blockquote className="text-lg text-white">“{item.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-white/70">
              <div className="font-semibold text-white">{item.author}</div>
              <div>{item.role}</div>
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </div>
  );
}
