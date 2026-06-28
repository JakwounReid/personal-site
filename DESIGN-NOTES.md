# Design Notes — `/build` is the source of truth

Extracted from `app/build/page.tsx`, `components/case-study.tsx`, `app/globals.css`,
`tailwind.config.ts`. This is the spec the rest of the site is aligned to.

## Design tokens

### Color
- **Background**: near-black. `--bg: #0a0a0a` (globals), pages render on `bg-neutral-950` (layout body).
- **Foreground**: `--fg: #e5e5e5`; headings pure white (`text-white`).
- **Accent**: `blue-400` (`#60a5fa`) for eyebrows, links, primary CTAs, icons, checkmarks.
  Supporting blue tints: `blue-500/30` borders, `blue-950/10–30` fills, `blue-400/10` chips.
- **Muted text**: `text-neutral-400` (body), `text-neutral-500` (captions), `text-neutral-600` (fine print).
- **Borders**: `border-neutral-800` (sections/cards), `border-neutral-700` (emphasized cards).
- **There is no green.** (Nav previously used a green "Hire me" pill — off-brand, fixed.)
- **There is no rounded geometry in the blueprint system** — corners are square. Small chips
  use `rounded-sm`; pills/badges use `rounded-full`. Content cards/buttons are square-edged.

### Typography
- System font stack (no custom font loaded).
- Headings: `font-black tracking-tight text-white`.
  - h1 hero: `text-5xl sm:text-6xl md:text-7xl leading-[1.08]`
  - h2 section: `text-3xl sm:text-4xl`
  - h3 card: `font-bold` (base size)
- Eyebrow: `text-xs font-medium uppercase tracking-widest text-blue-400` above each h2.
- Body: `text-neutral-400`, `text-sm` in cards / `text-lg leading-relaxed` in intros.

### Spacing & layout
- Blueprint pages break the global container: `relative -mx-4 -mt-10 overflow-x-hidden`,
  then full-bleed `<section>`s with `border-t border-neutral-800 px-6 py-24` (hero `py-28`).
- Alternating section fills: plain vs `bg-neutral-950/80`.
- Inner widths: `max-w-5xl` (grids), `max-w-3xl` (prose/process), `max-w-2xl` (focused copy).
- Content/utility pages stay inside the global shell (`<main class="mx-auto max-w-5xl px-4 py-10">`)
  and use the same tokens at container scale rather than going full-bleed.

### Component patterns
- **Eyebrow → heading → intro** is the canonical section header.
- **Primary CTA**: `border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase
  tracking-widest text-black ... hover:bg-transparent hover:text-blue-400` + trailing arrow svg
  that translates on hover. (`components/ui.tsx` → `ArrowIcon`.)
- **Secondary CTA**: `border border-neutral-600 bg-transparent text-white hover:border-blue-400
  hover:text-blue-400`.
- **Card**: `border border-neutral-800 bg-neutral-900/50 p-6` (featured: `border-blue-500/60
  ring-1 ring-blue-500/20`). Square corners.
- **Badge/chip**: `rounded-sm border border-blue-400/40 bg-blue-400/10 px-2 py-0.5 text-[10px]
  font-semibold uppercase tracking-widest text-blue-400`.
- **Checklist item**: blue check svg (`components/ui.tsx` → `CheckIcon`) + `text-sm text-neutral-400`.
- **Blueprint background**: fixed 40px blue grid + corner registration marks (decorative, blueprint pages only).

### Voice & framing
- Positioning: **"I build digital infrastructure for your business,"** not "I build websites."
- Lead with pain (dated site, duct-taped admin stack, owner as bottleneck), then credibility
  (Fortune 100 / Northwestern Mutual engineering standards, i.c.stars, AI-assisted/modern tooling,
  open-source stack / you own the code, 2–4 week delivery), diagnosis-first.
- **No fixed posting cadence and no standing-availability claims.** Show results, not availability.

## Reusable primitives
`components/ui.tsx` extracts the three most-repeated inline patterns from `/build` so content
pages share them instead of re-inventing: `Eyebrow`, `ArrowIcon`, `CheckIcon`.

## Internal inconsistencies in `/build` (flagged, not "fixed")
- Hero CTA uses `bg-blue-400` (no border-radius reset) while travel pages add explicit
  `rounded-none`; both render square because nothing rounds them. Harmless.
- `/build` defines a `<footer>` *inside* the page (as do editing/travel). There is **no shared
  global footer** in `app/layout.tsx`, so container pages (home/blog/projects/log) have no footer.
  Adding a global footer would double-render on the blueprint pages, so it was left out — noted
  as future work (would require lifting all per-page footers into the layout).

---

# Divergence audit & alignment checklist

Legend: ✅ aligned this pass · ⬜ intentionally left (separate brand / noindex / low-risk).

### Shared shell
- [✅] `components/site-header.tsx` — green "Hire me" pill → blue, sharpened corners to match blueprint chips.
- [✅] `components/subscribe.tsx` — white button → blue blueprint CTA, square card; **"One lesson, every week." cadence removed.**
- [⬜] `app/layout.tsx` — no global footer added (see flag above); tokens already correct.

### Home — `app/page.tsx`
- [✅] **"New post weekly." cadence claim removed** → cadence-neutral.
- [✅] **"Taking new clients" pulsing availability removed** → neutral framing.
- [✅] rounded-2xl/xl cards & buttons → square blueprint cards + eyebrow pattern + blue CTA.

### Blog index — `app/blog/page.tsx`
- [✅] Added eyebrow + cadence-neutral description ("Essays… New writing when it ships.").
- [✅] rounded-2xl cards → square blueprint cards.

### Blog post — `app/blog/[slug]/page.tsx`
- [✅] Square card geometry on series nav; MDX body untouched.

### Projects — `app/projects/page.tsx`
- [✅] Added eyebrow/heading; rounded-2xl cards → square blueprint cards.

### Offer — `app/offer/page.tsx`
- [✅] Multicolor lucide icons + white CTA + rounded-lg → blue-accent, square, eyebrow pattern, blueprint CTA.

### Book — `app/book/page.tsx`
- [✅] White CTA + rounded cards → blueprint CTA + square cards.

### Log — `app/log/page.tsx`, 404 — `app/not-found.tsx`
- [✅] Square card/button geometry; eyebrow on log.

### Separate brands / noindex (left as-is)
- [⬜] `app/editing-services/*`, `app/travel-architect*`, `app/thetravelarchitect/*`, `app/success`
  — already on the blueprint system; distinct sub-brands.
- [⬜] `app/hire/page.tsx` — `noindex`, deliberate job-seeking page; its "available June 2026" is
  legitimate role-availability, not site cadence. Left as-is.
</content>
</invoke>
