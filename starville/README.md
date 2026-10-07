# Starville School: homepage redesign

A static homepage concept for [starvilleschool.com](https://www.starvilleschool.com/). It keeps the school's navy and sky-blue identity, its crest, its wording and its photography, and reworks the layout, typography and navigation so the page is easier to scan and works well on phones.

Open `index.html` in a browser. There is no build step.

```
index.html        Homepage
css/styles.css    All styles (design tokens at the top)
js/main.js        Mobile menu, Academics dropdown, sticky header, scroll reveals
assets/img/       Photos, crest and partner logos (temporary crops, see below)
preview/          Screenshots at desktop, tablet and mobile widths
```

## Brand

| Token | Value | Source |
|---|---|---|
| Navy (primary) | `#022547` | Sampled from the live header, cards and footer |
| Sky blue (accent) | `#1A80E8` | Sampled from the "STARVILLE" wordmark and card titles |
| Cream (labels) | `#EAD9A0` | Sampled from the live footer headings |
| Wordmark and stage names | Cinzel | Closest Google Font to the current Trajan-style caps |
| Headings | Libre Baskerville | Same serif the current site uses |
| Body | Plus Jakarta Sans | New: replaces all-caps serif body text, which was hard to read |

## What changed and why

| Problem on the current page | Fix |
|---|---|
| The hero is a photo with no message or call to action | Headline, one-line pitch, "Start your application" and "Book a school visit" over the photo |
| Admissions is hard to find | "Enrol Now" stays in the sticky header. Admissions also gets its own section with phone, email and office hours |
| Pillar cards are mostly empty white space | A compact three-up strip with icons that overlaps the hero |
| Early Years, Primary and Secondary card text is all caps | Photo-led cards in sentence case, with a clear "Explore" link on each |
| Vision and mission are missing from the homepage | Added to the About section |
| No obvious mobile navigation | Full-screen mobile menu with an expandable Academics submenu |

## Before sending to the client

**Assets to replace** (marked `<!-- REPLACE -->` in the HTML)
- [ ] `logo-crest.png`: a 130px crop from a screenshot. Swap in the original crest (SVG, or a transparent PNG at 512px or larger).
- [ ] All photos in `assets/img/` were cropped from screenshots of the live site. Use the original high-resolution files. The hero needs one at least 2400px wide.
- [ ] Partner logos: use the official files.
- [ ] The "Take a tour" block needs the URL of the school's tour video (it currently links to the homepage).

**Links to check**
- [ ] Confirmed live pages already linked: `/about-us`, `/secondary`, `/admissionenquiry`.
- [ ] Early Years, Primary and Gallery currently point to sections on this page. Point them at the real pages.
- [ ] The Instagram link is `#`. Facebook (`facebook.com/starvilleschool`) and X (`x.com/starvilleschool`) came from public listings, so confirm both.

**Copy to confirm with the school**
- [ ] Hero line: "A Christian, Cambridge International School in Jahi, Abuja…". This combines their partner listing, their motto and public directory descriptions.
- [ ] Vision and mission were taken from public listings, not from the school directly.
- [ ] The three "highlights" captions under the tour video are new copy.

## Accessibility and performance
- Semantic landmarks, a skip link, visible focus styles, labels on icon-only buttons, and Esc closes menus
- White on navy is about 15:1 and white on the sky-blue buttons is about 4.0:1, which passes WCAG AA for large and bold text
- Respects `prefers-reduced-motion`. The page works without JavaScript.
- No frameworks. Icons are an inline SVG sprite, below-the-fold images lazy-load, and the hero image is preloaded.
