'use client';

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import Lenis from 'lenis';

type SmoothScrollContextValue = {
  lenis: Lenis | null;
  stop: () => void;
  start: () => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(
  null,
);

export function useSmoothScroll() {
  const ctx = useContext(SmoothScrollContext);
  if (!ctx) {
    throw new Error('useSmoothScroll must be used within SmoothScrollProvider');
  }
  return ctx;
}

export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) return;

    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.12,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const value = useMemo<SmoothScrollContextValue>(() => {
    return {
      get lenis() {
        return lenisRef.current;
      },
      stop: () => lenisRef.current?.stop(),
      start: () => lenisRef.current?.start(),
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
