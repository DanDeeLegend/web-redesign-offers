"use client";

import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useMediaQuery } from "@/components/use-media-query";

type ScrollerState = { progress: MotionValue<number>; active: boolean };
const ScrollerContext = createContext<ScrollerState | null>(null);

/** Progress (0 → 1) through the sideways track, and whether sideways mode is on. */
export function useScroller() {
  const ctx = useContext(ScrollerContext);
  if (!ctx) throw new Error("useScroller must be used inside <HorizontalScroller>");
  return ctx;
}

/**
 * Turns vertical scrolling into horizontal movement through a row of full-height panels.
 * On by default on large screens; on phones, tablets and for reduced-motion users the panels simply stack.
 * Panels style themselves for sideways mode with the `h-mode:` variant.
 */
export function HorizontalScroller({ children }: { children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const desktop = useMediaQuery("(min-width: 1024px) and (min-height: 600px)");
  const reduced = useReducedMotion();
  const active = desktop && !reduced;
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    if (!active) return;
    const measure = () => {
      const track = trackRef.current;
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  // Route every on-page "#section" link through scrollToPanel so it works in sideways mode too.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = a?.getAttribute("href")?.slice(1);
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      // Wait a beat so an open menu/search dialog can close and release its scroll lock first.
      window.setTimeout(() => scrollToPanel(id), 80);
      history.replaceState(null, "", `#${id}`);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const { scrollYProgress } = useScroll({ target: outerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <ScrollerContext.Provider value={{ progress: scrollYProgress, active }}>
      <div
        ref={outerRef}
        data-hmode={active}
        style={active ? { height: `calc(100vh + ${distance}px)` } : undefined}
        className="relative"
      >
        <div className={active ? "sticky top-0 h-screen overflow-hidden" : undefined}>
          <motion.div ref={trackRef} style={active ? { x } : undefined} className={active ? "flex h-screen w-max" : "flex flex-col"}>
            {children}
          </motion.div>
        </div>
      </div>
    </ScrollerContext.Provider>
  );
}

/**
 * Sideways mode: anchor links can't scroll to a panel (it's translated, not scrolled), so we
 * convert the panel's horizontal offset into the matching vertical scroll position.
 */
export function scrollToPanel(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const outer = el.closest<HTMLElement>("[data-hmode]");
  if (!outer || outer.dataset.hmode !== "true") {
    el.scrollIntoView({ behavior: "smooth" });
    return;
  }
  const track = el.parentElement as HTMLElement;
  // The pinned container is overflow:hidden but can still be scrolled programmatically; keep it at 0.
  if (track.parentElement) track.parentElement.scrollLeft = 0;
  const distance = track.scrollWidth - window.innerWidth;
  const target = Math.min(el.offsetLeft, distance);
  const outerTop = outer.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: outerTop + target, behavior: "smooth" });
}
