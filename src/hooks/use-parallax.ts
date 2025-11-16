import { MotionValue, useMotionValue, useSpring, useTransform } from "framer-motion";

export function useParallax(scrollProgress: MotionValue<number>, from = 0, to = -120) {
  return useTransform(scrollProgress, [0, 1], [from, to]);
}

export function useMicroInteraction(value: number, stiffness = 120, damping = 18) {
  const base = useMotionValue(value);
  return useSpring(base, { stiffness, damping });
}
