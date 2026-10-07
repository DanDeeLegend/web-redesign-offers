# Premiere Academy: homepage redesign (v2, sideways-scrolling layout)

A second design direction for [premiereacademyng.org](https://premiereacademyng.org/index.php). Its layout and interactions follow the reference site the client chose ([thewalkerschool.org](https://www.thewalkerschool.org/)), filled with Premiere Academy's own colours (crimson, navy, cyan, gold), crest, wording and facts. No Walker logos, photos or copy are used.

The first direction, the newspaper-style "Premiere Edition", is still in `../premiere/`.

## Stack
Next.js 16, React 19, TypeScript, Tailwind CSS v4, Motion, Radix UI (Dialog) and Lucide. Fonts: Archivo (extra-wide, heavy headlines), Source Sans 3 (body) and Playfair Display (wordmark). It exports to static HTML.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

## How the page works
- **Desktop (1024px+ wide and 600px+ tall):** scrolling down moves the page sideways through eight full-height panels (`src/components/horizontal-scroller.tsx`). Menu, search and footer links still land on the right panel.
- **Phones, tablets and reduced motion:** the same panels stack vertically as a normal page.
- **The header** changes colour (white or crimson) depending on what's behind it. Each panel declares `data-theme="dark"` or `data-theme="light"`.

| Panel | Pattern |
|---|---|
| Hero | Full-bleed video, intro text bottom-left, giant "EXCELLENCE" rising from the bottom |
| What we offer | Four photo columns with "Learn more" buttons, the third raised |
| Results | Cut-out student on a crimson stage, "92% CREDIT PASS", "Read more +" expander |
| Our purpose | Three photo columns drifting in opposite directions beside "COMPETE WITH THE BEST" |
| Why Premiere | Tall crimson cards with cut-out students; "+" slides up each story |
| The facts | Count-up figures over photos |
| News & events | Latest three posts |
| Admission | Crimson call to action with contacts |

Plus full-screen **Menu** and **Search** overlays, the footer, and the floating WhatsApp button.

## Editing
All copy, contacts and photo slots are in `src/lib/site.ts`. Each `image: null` is a labelled placeholder; put a file in `public/img/` and set the path.

**Photos needed** (this layout is very photo-led, so they matter more here than in v1):
- [ ] **Hero video:** a short, muted, looping clip (10–20 s, 1080p, under 8 MB). Set `site.heroVideo`.
- [ ] **Cut-out students (5):** students photographed against a plain wall, with the background removed (transparent PNG). One for Results, four for the Why cards.
- [ ] **Regular photos:** 4 for What we offer, 9 for the purpose columns, 4 for facts and 3 for news.
- [ ] **Crest:** `site.logo`.

**Still to confirm** (same as v1): the WAEC figure (92% shown), Enrol, tour and news links, social profiles, the WhatsApp number, and the new copy (hero intro ending, card subtitles, "Join the pride of the nation").
