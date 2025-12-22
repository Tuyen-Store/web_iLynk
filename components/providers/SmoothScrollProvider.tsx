"use client";

import { PropsWithChildren, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.12,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}


