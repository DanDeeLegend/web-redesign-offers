import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

/** Four-petal flower: the motif from the live site's cards, used as Bluebell's signature shape. */
export function Petal(props: P) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M50 50C38 30 38 8 50 2c12 6 12 28 0 48zM50 50c20-12 42-12 48 0-6 12-28 12-48 0zM50 50c12 20 12 42 0 48-12-6-12-28 0-48zM50 50C30 62 8 62 2 50c6-12 28-12 48 0z" />
    </svg>
  );
}

/** A little bluebell flower on its stem. */
export function Bluebell(props: P) {
  return (
    <svg viewBox="0 0 64 80" fill="none" aria-hidden="true" {...props}>
      <path d="M32 4c0 18-6 28-14 34" stroke="#3f8f5a" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 4c4 12 14 18 22 20" stroke="#3f8f5a" strokeWidth="3" strokeLinecap="round" />
      <path d="M8 40c0-9 5-14 10-14s10 5 10 14l-3 6 3 6H8l3-6z" fill="currentColor" />
      <path d="M40 30c0-8 5-12 9-12s9 4 9 12l-2.5 5 2.5 5H40l2.5-5z" fill="currentColor" opacity=".75" />
    </svg>
  );
}

/** Hand-drawn underline. */
export function Squiggle(props: P) {
  return (
    <svg viewBox="0 0 300 24" fill="none" preserveAspectRatio="none" aria-hidden="true" {...props}>
      <path d="M4 16C40 6 70 6 98 13s58 9 92 1 70-10 106 2" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

/** Hand-drawn curly arrow. */
export function CurlyArrow(props: P) {
  return (
    <svg viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 10c30-6 64 2 70 24 5 18-14 24-20 12-6-13 16-24 40-6 8 6 13 16 14 28" />
      <path d="M100 58l10 10 6-14" />
    </svg>
  );
}

export function Sun(props: P) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" {...props}>
      <circle cx="40" cy="40" r="16" fill="currentColor" />
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i / 10) * Math.PI * 2;
        return <path key={i} d={`M${40 + Math.cos(a) * 24} ${40 + Math.sin(a) * 24}L${40 + Math.cos(a) * 34} ${40 + Math.sin(a) * 34}`} stroke="currentColor" strokeWidth="5" strokeLinecap="round" />;
      })}
    </svg>
  );
}
