# Lead British International School: homepage redesign (pitch)

A static homepage concept for [lbis.org](https://www.lbis.org). It keeps the school's existing brand identity and modernises the layout, typography and content structure.

Open `index.html` in a browser. There is no build step.

```
index.html          Homepage
css/styles.css      All styles (design tokens at the top)
js/main.js          Mobile menu, search overlay, sticky header, scroll reveals
assets/img/         Logo and crest (temporary, see below)
```

## Brand

| Token | Value | Source |
|---|---|---|
| Burgundy (primary) | `#800020` | Sampled from the live site's nav bar |
| Gold (accent) | `#FEC800` | Sampled from the live site's "Enrol Now" button |
| Deep burgundy | `#3F0010` | Darker tint of the primary, used for the top bar, facilities section and footer |
| Headings | Fraunces (Google Fonts) | New: a serif that suits a British school |
| Body | Inter (Google Fonts) | New |

## Before sending to the client

**Assets to replace**
- [ ] `assets/img/logo-from-screenshot.png` and `crest-from-screenshot.png` are low-resolution crops from a screenshot. Replace them with the original logo file (SVG preferred).
- [ ] Every `.photo--placeholder` block (marked `<!-- REPLACE -->` in the HTML) needs a real photo. Swap the `<div class="photo photo--placeholder" …>` for `<div class="photo"><img src="…" alt="…"></div>`. The current site's slider images are a good starting point.

**Facts to confirm with the school.** These come from public directory listings, not from the school directly:
- [ ] Address: "Off Wole Soyinka Avenue, Gwarinpa, Abuja"
- [ ] Ages 0–16; Secondary ages 10–17; boarding from Year 4; average class size of about 19
- [ ] Curricula and exams: EYFS, English National Curriculum, IGCSE, WAEC, NECO, BECE, SAT, and the Pre-U Foundation Year
- [ ] Facilities list
- [ ] Admissions steps (Enquire, Visit, Assess, Enrol) are a standard flow and need checking against their actual process
- [ ] Social media links (currently `#`)

**Still to wire up**
- [ ] Section links point to anchors on this page. Point them at real pages once inner pages exist.
- [ ] The search form posts to `search.html`, which doesn't exist yet.
- [ ] "Portal login" link
- [ ] The live site has a chat widget. Re-add it if they still use it.

## Accessibility and performance
- Semantic landmarks, a skip link, visible focus styles, and labels on icon-only buttons
- Colour contrast passes WCAG AA (white on `#800020` is about 10:1; burgundy on gold is about 7:1)
- Respects `prefers-reduced-motion`; the page works without JavaScript
- No frameworks; icons are an inline SVG sprite
