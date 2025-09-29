"use client";

import { ReactNode } from "react";
import { motion, type Transition } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const baseTransition = {
  type: "tween" as const,
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const transition: Transition = { ...baseTransition, delay };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
