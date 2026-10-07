# Starville School: homepage redesign (v2)

A redesign of the [starvilleschool.com](https://www.starvilleschool.com/) homepage. It keeps the school's navy and sky-blue identity, its crest and its photography, and turns them into a "night sky" concept: Starville, a village of stars.

## Stack

| Layer | Library | Why |
|---|---|---|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript | Industry standard. Exports to static HTML, so it can be hosted anywhere |
| Styling | Tailwind CSS v4 | Brand tokens live in one `@theme` block in `src/app/globals.css` |
| Animation | Motion (Framer Motion) | Headline reveals, parallax arches, scroll-lit text, tab transitions |
| Components | Radix UI (Navigation Menu, Dialog, Tabs, Accordion) | Accessible behaviour (keyboard, focus, ARIA) built in. The same primitives shadcn/ui uses |
| Icons | Lucide | Brand marks (Facebook, X, Instagram) are drawn by hand in `src/components/icons.tsx` |
| Fonts | `next/font`: Fraunces, Cinzel, Plus Jakarta Sans | Self-hosted at build time, with no layout shift |

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/, upload it to any host
npm run lint
```

## Structure

```
src/app/            layout.tsx (fonts, SEO), page.tsx (section order), globals.css (brand tokens)
src/lib/site.ts     ALL school details and copy: edit text here, not in components
src/components/
  site-header.tsx   Floating glass navbar, Academics mega-menu, mobile sheet
  sections/         hero, partners, pillars (bento), statement, stages (tabs), life (gallery + lightbox), admissions (FAQ)
  starfield.tsx     Twinkling canvas sky (pauses off-screen, still frame for reduced motion)
  crest-seal.tsx    Crest with rotating motto ring
public/img/         Photos, crest, partner logos
preview/            Screenshots
```

## Brand

| Token | Value | Source |
|---|---|---|
| `navy-900` | `#022547` | Live header, cards, footer |
| `azure-500` | `#1A80E8` | "STARVILLE" wordmark, card titles |
| `cream-300` | `#EAD9A0` | Live footer headings |

## Before going live

**Assets** (the current files are crops from screenshots of the live site)
- [ ] Original crest file (SVG, or a transparent PNG at 512px or larger), saved as `public/img/logo-crest.png`
- [ ] Original high-resolution photos. The hero arches and the bento grid show photos large, so they need at least 1600px on the long edge.
- [ ] Official partner logos
- [ ] The tour video URL, in `site.links.tour` in `src/lib/site.ts`

**Links and copy to confirm**
- [ ] Instagram handle (`site.socials.instagram` is `#`)
- [ ] Early Years and Primary pages: they currently link to the on-page tabs
- [ ] New copy written for the redesign: the hero sentence, the stage descriptions, the gallery captions and the FAQ answers. They only restate published facts, but the school should approve them.
- [ ] FAQ: "Can we visit the school before applying?" assumes visits are arranged through the office

## Accessibility and performance
- Radix primitives handle keyboard navigation, focus trapping and ARIA. The lightbox also supports the ← and → keys.
- Every animation respects `prefers-reduced-motion` (MotionConfig, CSS and the starfield)
- Skip link, alt text on every photo, colour contrast passing WCAG AA
- Static export with no server. Fonts are self-hosted and below-the-fold images lazy-load.
