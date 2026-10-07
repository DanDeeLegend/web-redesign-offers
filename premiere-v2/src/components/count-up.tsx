"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

const format = (n: number) => n.toLocaleString("en-GB");

/** Counts from 0 to `to` the first time it scrolls into view. The static HTML already shows the final value. */
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || reduced) return;
    // Write straight to the DOM so the count doesn't re-render React every frame.
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => (node.textContent = `${format(Math.round(v))}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, reduced, to, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {format(to)}
      {suffix}
    </span>
  );
}
