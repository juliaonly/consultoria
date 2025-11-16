"use client";

import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import { fadeInUp } from "./animations";

type MotionSectionProps = PropsWithChildren<HTMLMotionProps<"section">>;

export function MotionSection({ children, className, ...rest }: MotionSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
