# Redesign

A modern take on the same site, built alongside the faithful replica rather than
replacing it. The replica at the repository root is untouched, so the two can be
compared at:

- replica — <https://knyarko.github.io/searchlight-pa/>
- redesign — <https://knyarko.github.io/searchlight-pa/redesign/>

## Direction

Editorial and institutional, rather than product-led SaaS. The buyer is a provost,
an IR director or an accreditation liaison, and the content is prose-heavy; a
typographic system carries that better than feature cards, and dates more slowly.

**What changed, and why**

| Original (2016 Wix) | Here |
| --- | --- |
| Auto-rotating hero carousel, 4 slides | One hero with a single statement and one call to action |
| 14px Arial body, 40px light centred headings | Fluid scale, 17px Inter body, Source Serif 4 display |
| Everything centred in alternating colour bands | Asymmetric grid — a sticky section heading beside the prose |
| Navy rounded cards over the hero | Three editorial columns, rules instead of boxes |
| Stock photos of people at laptops | Same photos, duotoned to brand so they stop reading as stock |
| The drill-down described only in prose | An actual diagram: outcome → criteria → instrument |
| Light only | Light and dark, following the system, with a toggle that remembers |

## System

Type is Source Serif 4 for display and Inter for text, both variable, sized with
`clamp()` so there are no breakpoint jumps. Colour is defined once as custom
properties on `:root` and redefined for dark mode, so every component themes for
free; the palette keeps the brand navy, sets it on warm paper rather than white,
and adds a brass accent for eyebrows, rules and emphasis.

```
assets/css/site.css   tokens, then components, then the two breakpoints
assets/js/site.js     theme toggle, header hairline, mobile nav, form handoff
index.html  solutions.html  education.html  about.html
```

Images are shared with the replica at `../assets/img/`, so promoting this to the
site root means rewriting those paths to `assets/img/`.

## Copy

Every substantive claim is the original's, unchanged. Three things are editorial
framing rather than new claims, and are worth a read before this goes anywhere
public:

1. **Section headings** — "Reports that assemble themselves", "Follow a number back
   to the question that produced it", and so on. Each paraphrases the paragraph
   directly beneath it; the original used the bare labels ("Automated Reporting").
2. **The hero** — headline condensed from the About page's vision statement, standfirst
   from the home page's SOLUTIONS card.
3. **The example scorecard and drill-down diagram** — illustrative sample values, labelled
   as such on the page. They are not real institutional data.

## Still to do

- The contact form still hands off to `mailto:`; same as the replica.
- `© 2018` is carried over verbatim from the original footer and is worth updating.
