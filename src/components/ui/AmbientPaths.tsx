"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AmbientPathsProps {
  className?: string;
}

function buildPaths(direction: 1 | -1) {
  return Array.from({ length: 14 }, (_, index) => {
    const offset = index * 24;
    const drift = index * 18 * direction;

    return {
      id: `${direction}-${index}`,
      d: `M ${-140 + drift} ${88 + offset}
          C ${128 + drift} ${48 + offset}, ${262 + drift} ${194 + offset}, ${430 + drift} ${154 + offset}
          S ${740 + drift} ${54 + offset}, ${1100 + drift} ${132 + offset}`,
      width: 0.75 + index * 0.1,
      opacity: 0.05 + index * 0.012,
      duration: 22 + index * 1.6,
      delay: index * 0.18,
    };
  });
}

export function AmbientPaths({ className = "" }: AmbientPathsProps) {
  const shouldReduceMotion = useReducedMotion();
  const forwardPaths = buildPaths(1);
  const backwardPaths = buildPaths(-1);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.82) 52%, rgba(0,0,0,0.18) 86%, transparent 100%)",
      }}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1100 720"
        fill="none"
        preserveAspectRatio="none"
      >
        {[...forwardPaths, ...backwardPaths].map((path, index) => {
          const stroke =
            index % 3 === 0
              ? `rgba(182,239,232,${path.opacity})`
              : index % 3 === 1
                ? `rgba(120,174,255,${path.opacity * 0.9})`
                : `rgba(255,255,255,${path.opacity * 0.45})`;

          return (
            <motion.path
              key={path.id}
              d={path.d}
              stroke={stroke}
              strokeWidth={path.width}
              strokeLinecap="round"
              initial={
                shouldReduceMotion
                  ? { opacity: path.opacity * 1.2, pathLength: 1 }
                  : { opacity: path.opacity * 0.55, pathLength: 0.45, pathOffset: 0.08 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: path.opacity * 1.2, pathLength: 1 }
                  : {
                      opacity: [path.opacity * 0.4, path.opacity * 1.35, path.opacity * 0.4],
                      pathLength: [0.3, 1, 0.3],
                      pathOffset: [0, 1, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: path.duration,
                      delay: path.delay,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }
              }
            />
          );
        })}
      </svg>
    </div>
  );
}
