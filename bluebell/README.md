# Bluebell Montessori International School: homepage redesign

A redesign of the [bluebell.com.ng](https://bluebell.com.ng/) homepage in a **"Montessori playful-premium"** direction: warm cream background, soft morphing blob shapes, hand-drawn doodles (bluebell flowers, squiggles, a sun), and the four-petal motif from the live site's cards as the signature shape. It keeps Bluebell's navy, sunshine yellow and coral, its crest, wording and real photos.

## Stack
Next.js 16, React 19, TypeScript, Tailwind CSS v4, Motion, Radix UI (Dialog) and Lucide. Fonts: Bricolage Grotesque (headlines), Nunito (body) and Caveat (handwritten notes). It exports to static HTML.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

## Sections
| Section | What's new |
|---|---|
| Header | Floating rounded bar, petal hover marks, EsKool portal link, coral "Enrol now". Phones get a bottom-sheet menu with colourful tiles |
| Hero | Headline with a hand-drawn underline and a swaying bluebell; a deck of photo "polaroids" that shuffles every few seconds, on tap, or when swiped |
| Ribbon | Tilted yellow band of words scrolling past |
| About | Photos in slowly morphing blob frames, an "est. 2009" badge and three fact tiles |
| Why Bluebell | The six reasons as pastel cards (the live site's tints) with spinning petals on hover |
| Programmes | The three stages as stops on a winding coral path that draws itself as you scroll, followed by the "Ready to begin" band |
| Admissions | Four steps as a numbered timeline on navy |
| Life at Bluebell | A wall of taped polaroids with handwritten captions; opens a swipeable lightbox |
| Testimonials | Big speech-bubble quote. Arrows appear automatically once more quotes are added |
| News | Latest three posts |
| Footer | Contacts, socials and the giant "Bluebell" wordmark kept from the live site |

## Editing
Everything is in `src/lib/site.ts`. Photos are in `public/img/`.

## Before going live
- [ ] **Original photos and crest.** Everything was cropped from screenshots, so it's soft at large sizes. Replace the files in `public/img/` with the originals, keeping the same names.
- [ ] **Address conflict:** the footer says *Abuloma*, but the About text says *Trans-Amadi*. Confirm which is right.
- [ ] **Admission steps 3 and 4** were cut off in the screenshots. Step 3's description and step 4 ("Welcome to Bluebell") are placeholders.
- [ ] **Testimonials:** only Mrs. Okonkwo's was visible. Add the others to `testimonials`.
- [ ] **News:** the live site repeats the Christmas text on the IWD post and lists the carol post twice. Wire this section to the real blog.
- [ ] **Links:** the EsKool portal, social profiles, the WhatsApp number (assumed to be the main phone) and inner-page URLs.
- [ ] **New copy written for the redesign:** the ribbon words, fact tiles, programme descriptions, photo captions and the IWD excerpt.
