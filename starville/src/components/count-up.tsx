"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useCurrentYear } from "@/components/current-year";

/** Years since `since`, counting up from 0 the first time it scrolls into view. */
export function YearsCountUp({ since, fallbackYear, suffix = "" }: { since: number; fallbackYear: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const to = useCurrentYear(fallbackYear) - since;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!inView || reduced) {
      node.textContent = `${to}${suffix}`;
      return;
    }
    // Write straight to the DOM so the count doesn't re-render React every frame.
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => (node.textContent = `${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, reduced, to, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {to}
      {suffix}
    </span>
  );
}
