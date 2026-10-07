# Premiere Academy: homepage redesign

A redesign of the [premiereacademyng.org](https://premiereacademyng.org/index.php) homepage. It keeps the school's crimson, navy, cyan and gold, its Playfair Display headings and Mulish body text, and its copy and facts.

**Concept: "The Premiere Edition".** The school's tagline, *The pride of the nation*, already reads like a newspaper masthead, so the homepage is designed as a prestigious broadsheet: a masthead, a front page, numbered chapters, hairline rules, captions, a drop cap and a pull quote. It deliberately shares no layout or components with the Starville or LBIS designs in this repo.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion, Radix UI (Dialog) and Lucide. Fonts are self-hosted through `next/font`: Playfair Display, Mulish and IBM Plex Mono. It exports to static HTML (`out/`), so it can be hosted anywhere.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
npm run lint
```

## The page

| Section | What it does |
|---|---|
| Ticker + masthead | "Latest" news ticker, today's date (computed in the browser), centred nameplate, chapter navigation, and a compact bar that slides in after scrolling |
| Front page | Full-width headline, an "In this edition" contents column (doubles as navigation), the lead photo with an "Admissions now open" rubber stamp, and the vision as the lead story with a drop cap |
| By the numbers | The four results, set as a ledger that counts up |
| § I Welcome | Two-column story with a pull quote, a portrait, and four numbered "things to know" |
| § II The Curriculum | The section pins and scrolling moves a timetable of subjects sideways (desktop). It becomes a swipe row on phones and a plain row with reduced motion |
| § III Why Premiere | An editorial index on crimson. Hovering a row runs an ink wipe and floats its photo beside the cursor |
| § IV News | Front-page layout: one lead story and two in the side column |
| § V In 60 Seconds | The film, framed as a strip of film with sprocket holes |
| § VI Admission | An admission ticket with a perforated, gold "Admit One" stub |
| Footer | Colophon, contacts, and an oversized nameplate. The floating WhatsApp button is kept from the live site |

## Editing

All copy, contacts and photo slots live in **`src/lib/site.ts`**. Components never hard-code school facts.

**Adding photos:** every image is currently a halftone placeholder labelled with the photo it needs. Put the file in `public/img/` and set its `image` field, e.g. `image: "/img/lead.jpg"`. Do the same for the crest with `site.logo`.

## Before going live

- [ ] **Photos and crest.** Get the originals from the school; the screenshots couldn't be used as files in this build.
- [ ] **Brand hex codes.** The colours were matched by eye from screenshots. Swap in exact values from the school's brand guide in `src/app/globals.css` if they have one.
- [ ] **WAEC figure.** The live site shows "1564" above a "92% credit pass" label. The redesign shows **92%**, as agreed; confirm with the school.
- [ ] **Links.** Enrol, About, News, the virtual tour and the "60 seconds" film all point to the live homepage for now (marked `TODO` in `site.ts`).
- [ ] **Social profiles** are `#`, and the **WhatsApp number** is assumed to be the first phone number.
- [ ] **Copy written for the redesign:** the ticker lines, the one-line subject descriptions, the photo captions and the footer colophon. Everything else is the school's own wording, lightly edited for grammar.
- [ ] **News** shows the three latest posts from the live homepage, with excerpts truncated where the live site truncates them. Wire it to their CMS.

## Accessibility and performance
- Semantic landmarks, a skip link, real headings for every chapter, and labels on icon-only links
- The mobile menu is a Radix Dialog, so focus is trapped and Esc closes it
- Every animation respects `prefers-reduced-motion` (MotionConfig, CSS, and the pinned curriculum falls back to a plain row)
- Static export, self-hosted fonts and lazy-loaded images; no horizontal overflow from 390px to 1440px
