import type { Transition, Variants } from "framer-motion";

export const motionTimings: Record<"default" | "emphasis", Transition> = {
  default: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  emphasis: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: motionTimings.default },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: motionTimings.emphasis },
};
