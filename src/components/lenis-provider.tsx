"use client";

import { ReactNode, useEffect } from "react";
import Lenis, { type LenisOptions } from "lenis";

const options: LenisOptions = {
  duration: 1.2,
  lerp: 0.08,
  touchMultiplier: 1.1,
  wheelMultiplier: 0.9,
};

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const lenis = new Lenis(options);
    let frame = requestAnimationFrame(loop);

    function loop(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
