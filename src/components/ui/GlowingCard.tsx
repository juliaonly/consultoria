"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { MouseEvent } from "react";
import { Reveal } from "@/components/reveal";

interface GlowingCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  glowColor?: string;
}

export function GlowingCard({
  children,
  delay = 0,
  className = "",
  glowColor = "rgba(142,217,208,0.12)",
}: GlowingCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Reveal delay={delay} className="h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        whileHover={shouldReduceMotion ? undefined : { y: -6 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--color-line)] bg-[rgba(255,255,255,0.03)] backdrop-blur ${className}`}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                ${glowColor},
                transparent 80%
              )
            `,
          }}
        />
        <div className="relative z-10 flex h-full flex-col p-8">{children}</div>
      </motion.div>
    </Reveal>
  );
}
