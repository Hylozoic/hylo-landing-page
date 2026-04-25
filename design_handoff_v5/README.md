# Handoff: Hylo Website v5 Redesign

## Overview

A full marketing-site redesign for Hylo — the commons-owned coordination platform for groups. Covers the homepage plus six sub-pages (About, Bring your group, Agreements, Get involved, Stewardship support, Blog index, Blog post). The design is warm, editorial, and plainspoken — oriented toward groups that want infrastructure for real-world coordination, not another social feed.

The palette is grounded in a cream-and-ink system with a forest-green primary and accent colors borrowed from Hylo's existing post-type palette (blue for conversations, orange for projects, purple for proposals, etc.). Typography is a single face, **Onest**, used across a defined scale.

## About the Design Files

The files in `design/` are **design references built in HTML** — working prototypes using React + Babel-standalone served from inline `<script type="text/babel">` tags, so they open directly in a browser. They are **not** intended to be shipped as-is.

The task is to **recreate these HTML designs in the Hylo codebase's existing environment**, using its established patterns, component library, routing, and build tooling. Match the visuals pixel-for-pixel, but translate to the production stack (React components with whatever styling layer the repo uses — CSS modules, Tailwind, styled-components, etc.). Lift exact values — hex codes, spacing, font weights, border radii, animation timings — from the JSX source files; do not eyeball.

Speaker's note to Claude Code: open each `design/<page>.html` in a preview to see the live design, then read the matching `.jsx` for the authoritative values, and consult the corresponding `specs/<page>.md` for intent, copy, and content rationale.

## Fidelity

**High-fidelity.** These are pixel-perfect mockups. Final colors, typography, spacing, shadows, border radii, animation curves and timings, and copy are all as intended. Recreate precisely, adapting only to the conventions of the target codebase.

## Project Structure

```
design_handoff_v5/
├── README.md                          ← this file
├── design/
│   ├── v5.html                        ← Homepage (canonical entry point)
│   ├── v5-about.html                  ← About
│   ├── v5-bring-your-group.html       ← Bring your group (migration)
│   ├── v5-agreements.html             ← Agreements (values, CoC, platform agreements, ToS, privacy)
│   ├── v5-get-involved.html           ← Get involved
│   ├── v5-stewardship-support.html    ← Community Stewardship Support (sales page)
│   ├── v5-blog.html                   ← Blog index
│   ├── v5-blog-post.html              ← Blog post detail
│   │
│   ├── variation-e.jsx                ← Homepage components (VE_Nav, VE_Hero, VE_Journey, VE_Toolkit, VE_Map, VE_Values, VE_Invitation, VE_PartnerLogos, etc.)
│   ├── v5-*.jsx                       ← One component file per sub-page
│   ├── shared.jsx                     ← Shared footer, featured-groups rail, etc.
│   ├── tokens.jsx                     ← Design tokens (HYLO palette)
│   │
│   └── assets/
│       ├── hylo-logo-dark.svg
│       ├── hylo-map.png
│       └── hylo-screenshot.png
│
└── specs/
    ├── homepage.md
    ├── about.md
    ├── bring-your-group.md
    ├── agreements.md
    ├── get-involved.md
    └── stewardship-support.md
```

Each sub-page `.html` file follows the same pattern: load tokens.jsx → shared.jsx → variation-e.jsx → page-specific .jsx → mount the page component exported on `window`.

## Design Tokens

Source of truth: `design/tokens.jsx`.

### Colors

```
Backgrounds
  cream         #F1EBDE   warm cream (hero, invitation, closing sections)
  creamSoft     #F7F2E8
  white         #FFFFFF
  athensGray    #FAFBFC   alternating neutral section
  athensDark    #E1E5EA   borders
  rhino         #2C4059   body text, dark sections
  rhinoSoft     #3A4D65

Primary accent
  forest        #087736   primary green (CTAs, links, accents)
  forestDeep    #065F2B
  forestLight   #E8F3EC
  forestTint   #D6EADE

Post-type colors (used across the Toolkit section and throughout)
  discussBlue       #00A3E3   conversations
  discussBlueSoft   #D6EEF8
  eventRed          #FE4850   events
  eventRedSoft      #FDE1E2
  requestTeal       #00C79D   requests & offers
  requestTealSoft   #D1F1E8
  projectOrange     #FC8000   projects
  projectOrangeSoft #FEE4CC
  proposalPurple    #664BA5   proposals
  proposalPurpleSoft #E1DBEF
  chatCyan          #5FD2FF

Utility
  ghost         #CCD1D7
  smoke         #6B7280

V5 override (important)
  Throughout variation-e.jsx, the "black" used for headlines and borders is
  #2A2723 (a warm near-black), not pure black or rhino. Stored as `VE_BLACK`.
```

### Typography

Single family: **Onest** (loaded from Google Fonts — weights 300, 400, 500, 600, 700, 800).

Scale used in the homepage (v5):
- Hero headline: 68–72px / weight 700 / letter-spacing −2 / line-height 1.02
- Section H2: 48–52px / weight 700 / letter-spacing −1.4 to −1.6 / line-height 1.1
- Sub-section title: 28–32px / weight 700 / letter-spacing −0.6
- Card title: 20–24px / weight 700 / letter-spacing −0.3
- Body: 16–18px / weight 400 / line-height 1.55–1.7
- Eyebrows / chips: 11–13px / weight 600 / uppercase / letter-spacing 0.6–0.8
- Meta / captions: 12–14px / weight 400

Prefer `text-wrap: pretty` on body, `text-wrap: balance` on headlines.

### Spacing

Sections typically use `padding: <top> 40px` with vertical values between 60px (quieter sections) and 112–160px (hero, statements). Inner content is capped at `maxWidth: 720` for prose and `1000–1200` for grids.

### Radii & shadows

- Pills / chips: 999px or 20px
- Cards: 4px (most) or 14–20px (hero/map panels)
- Buttons: 4px (sales CTAs) / 6px (nav & primary CTAs)
- Shadow on hover: `0 4px 15px rgba(0,0,0,0.06)`; default `0 1px 2px rgba(0,0,0,0.03)`

## Pages

### 1. Homepage (`v5.html` / `variation-e.jsx`)

Canonical composition, in order:

1. **Nav** — Sticky top nav. Logo left, centered menu in a 3-column grid, Sign in / Sign up on the right. Background is a dark translucent gradient `linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.05) 40%, transparent 100%)` with `backdrop-filter: blur(25px) saturate(140%)`. Hamburger icon on the left also opens a full-screen mega menu. The nav uses `position: sticky; top: 0; margin-bottom: -65px` so it overlaps the hero rather than reserving flow space. A mount-time fade-in is applied.
2. **Hero** (cream, with a gentle diagonal tan→powder-blue gradient) — Two columns: headline + subline + two CTAs on the left; login/sign-up card on the right. A staggered entrance animation runs on mount: headline 0s, subhead 0.3s, primary button 0.55s, secondary link 0.8s, auth card 0.95s, and seven eyebrow chips bouncing up one at a time starting at 1.0s. The chip bounce uses `cubic-bezier(.34, 1.56, .64, 1)` (overshoot).
3. **Featured groups rail** (Athens Gray top-bleeding into the next section) — Horizontally scrolling cards (with scrollbar hidden) with paired prev/next arrow buttons. The last card is a dashed "Volunteer to be featured" CTA.
4. **Journey** ("Arc of a group") — Scroll-tied SVG ribbon drawing across five dot milestones. The animation is gated by a 1.5s delay once the section enters the viewport, then progress is tied to scroll position. See the `VE_Journey` component for the math — note the trigger range uses viewport-height multipliers, not the section's own height.
5. **Map** — A full-bleed map image with a diagonal dark gradient overlay (55° angle, bottom-left to upper-right, warm-ink). Copy is on the dark side.
6. **Toolkit** ("Everything your group needs in one place") — Heading + a clickable screenshot with play button ("Hylo speedrun · 1 min tour") on the right. Below: eight capability cards in a 2-column vertical-masonry grid. Each card slides in from its side (left/right) with a 60ms stagger as it enters the viewport; on scroll-up the slide reverses. Cards hover-reveal a photo of the feature in real-world use. Capabilities: Conversations & Chat, Events, Requests & Offers, Projects, Proposals, Map, Funding Rounds & Collective Budgeting, Tracks & Actions.
7. **Values** ("Built as a commons") — Rhino-dark background. Copy, two CTAs (Join Building Hylo, GitHub), one impact line, and a scrolling partner-logo rail.
8. **Invitation** (cream) — Three cards: Bring your group, Build Hylo, Support the commons. Fade-up stagger on scroll-in.
9. **Footer** — Centered logo + tagline above a 4-column menu (About Hylo / Using Hylo / Participate / Agreements).

### 2. About (`v5-about.html` / `v5-about.jsx`)

7 sections: hero, Why Hylo exists, How we work (participatory design), Origin story, The team, Recognition & partners, Get involved. Same nav + footer as homepage.

### 3. Bring your group (`v5-bring-your-group.html`)

Migration-focused sales/onboarding page for group organizers considering moving to Hylo. Follows `specs/bring-your-group.md`.

### 4. Agreements (`v5-agreements.html`)

Hylo values, code of conduct, platform agreements, terms of use, privacy policy. Long-form document styling with an in-page index.

### 5. Get involved (`v5-get-involved.html`)

Action-oriented page: Start here (three quick-action cards), For community organizers, For builders, Partnership, Ecosystem, Closing.

### 6. Stewardship support (`v5-stewardship-support.html`)

Sales page for paid stewardship engagements. Five tiered offer cards (Support Call $300, Pollination $2,500, Seed $100/mo, Blossom $1,000–$1,250/mo, Flourish custom) with a strict "no scarcity games" tone — no countdowns, no "most popular" badges, prices stated plainly. Each card has a colored left-border accent using one of the post-type palette colors.

### 7. Blog index (`v5-blog.html`) + Blog post (`v5-blog-post.html`)

Magazine-style blog. Index has a featured post at the top, a filter bar, a grid of post cards, and a newsletter subscribe block. Post detail has article header, author byline, body with h2/h3/quote/image-with-caption/bullet-list content blocks, and a related-posts rail.

## Interactions & Animation Details

All animation timings and curves are in the source. Key pieces:

- **Sticky nav**: always present, `position: sticky; top: 0`. It uses a negative bottom margin so it overlays the hero.
- **Hero choreography** — runs on mount via CSS animations with staggered delays. See `VE_Hero` and the `VE_Pop` wrapper.
- **Journey wave** — an IntersectionObserver gates with a 1.5s delay on first intersection, then a rAF loop reads `getBoundingClientRect()` and computes progress against a viewport-height range (not the section's own height — critical, otherwise the animation completes before the section is in view). Works inside scrollable ancestors (e.g. a design canvas with its own internal scroll) because it measures against the viewport, not `window.scrollY`.
- **Toolkit cards** — `VE_SlideIn` wraps each card with a bidirectional reveal. Enter threshold is `0.15` with rootMargin `0px 0px -22% 0px` (down-scroll trigger is delayed); leave is more eager so scroll-up feels responsive. Stagger: 60ms per card from top of column.
- **Featured groups rail** — `scrollbar-width: none`, `::-webkit-scrollbar { display: none }`. Paired arrow buttons call `scrollBy({ left: ±cardWidth, behavior: 'smooth' })` on the ref.
- **Invitation cards** — fade-up on intersection, 150ms stagger left-to-right, triggered at `rootMargin: 0px 0px -38% 0px` so the cards are well into view before they animate.
- **Eyebrow chip bounce** — `@keyframes popUp { from { transform: translateY(18px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }` with `cubic-bezier(.34, 1.56, .64, 1)`.

## Assets

- `assets/hylo-logo-dark.svg` — primary logo, used everywhere
- `assets/hylo-map.png` — the world-map background for the Map section
- `assets/hylo-screenshot.png` — the Hylo UI screenshot used in the Toolkit "play button" thumbnail

Partner logos in the Values section are rendered as text placeholders in the current mock; swap for real brand SVGs during implementation. Featured-group thumbnails and hover-photos in the Toolkit cards are also placeholders — a real-asset pipeline is out of scope for these mocks.

## Copy

All copy in the mocks is final-draft quality and should be used as-is unless the team edits it. Spec files in `specs/` carry the rationale and any alternates.

## Getting Started (for the developer)

1. Open each `.html` in `design/` in a browser to see the live design.
2. Read the matching `.jsx` for exact values and component structure.
3. Consult `specs/<page>.md` for intent and copy.
4. Recreate each page in the Hylo codebase's existing framework, mapping:
   - JSX component structure → your component patterns
   - Inline styles → your styling layer (CSS modules, Tailwind, etc.)
   - `window.HYLO` tokens → your theme / design-token system
   - `variation-e.jsx` shared pieces (nav, hero, etc.) → reusable components
5. Animations can be implemented with CSS for the entrance stuff and either IntersectionObserver + rAF (as the mocks do) or a library like framer-motion. Match the timing values exactly.

## Notes

- The mocks use Babel-standalone so top-level `const` declarations in each `<script type="text/babel">` become globals — this is how `VE_Nav`, `VE_THEME`, etc. are shared between files. Your production code should use proper imports/exports.
- There is a `v5-print.html` and `v5-about-print.html` in the project (not included in handoff) that strip chrome for PDF export. Skip for production.
- `hylo-logo-dark.svg` includes the "Hylo" wordmark baked in — do not render a separate text wordmark next to it.
