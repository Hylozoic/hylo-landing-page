# Handoff: Hylo Marketing Site — Pricing, Features, Who It's For, Stories

## Overview

Four marketing pages for the Hylo platform, designed against detailed product specs (included in `specs/`):

1. **Pricing** (`v5-pricing.html`) — Products & pricing page. Hylo Free, Hylo Pro, Hylo Whitelabel, Hylo Assistant + a Stewardship Support bridge, comparison matrix, "How this works" rationale, closing CTA.
2. **Features** (`v5-features.html`) — Reference document of every product capability, organized by category (Groups, Communication, Events, Mutual Support, Projects, Map, Governance, Tracks, Profile, Funding, Integrations, Notifications, Moderation, Mobile, Platform). "Pro" / "Coming soon" badges mark exceptions to the default (free + live).
3. **Who It's For** (`v5-who.html`) — 11 use case sections (neighborhood, mutual aid, disaster, civic, nonprofits, networks, learning, food, events, land, co-ops), each with challenge / how-Hylo-helps / scannable group-type tags / optional example. "For individuals" interstitial + "The Pattern" dark section + closing CTA.
4. **Stories** (`v5-stories.html`) — 5 community case studies (Common Good Missoula, Float, Planetary Health Alliance, Millennium Fellowship, The Great Simplification). Index cards on top, then full case studies with `THE GROUP / THE CHALLENGE / WHAT THEY DID ON HYLO / WHAT HAPPENED / IN THEIR WORDS` sections.

All four pages share a navigation bar, footer, type system, and color tokens. They live inside a larger redesign that includes a Home, About, Bring Your Group, Agreements, Get Involved, and Stewardship Support page (not in this bundle).

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing intended look, content, and behavior. They use React 18 via UMD + Babel-in-the-browser purely so the design could be authored quickly as a prototype.

**Do not ship the HTML or JSX as production code.** The task is to **recreate these designs in the target codebase's existing environment** — Hylo's existing React app (or whatever CMS/framework the marketing site lives in) — using its established patterns, component library, design tokens, routing, and content model. If the marketing site does not yet have a target codebase, choose the appropriate framework (Next.js, Astro, Remix, etc.) and implement there.

The HTML files are the visual contract. The specs in `specs/` are the **content + intent contract**. When the two disagree, the HTML wins on visual treatment, and the spec wins on copy / structure / outstanding-work flags.

## Fidelity

**High-fidelity (hifi).** Pixel-perfect mockups with final colors, typography, spacing, copy, and interactive states. The developer should match these designs exactly — same color hexes, same type ramp, same spacing — using the codebase's existing component library where one exists, and building new components only when necessary.

The pages are responsive in the sense that text reflows and grid columns collapse, but the prototypes were optimized for desktop (≥1024px). Mobile breakpoints will need careful review during implementation; the spec for each page calls out any explicit mobile-specific behavior.

---

## Files in this bundle

```
design_handoff_pricing_features_who_stories/
├── README.md                          ← this file
├── pages/
│   ├── v5-pricing.html  + .jsx
│   ├── v5-features.html + .jsx
│   ├── v5-who.html      + .jsx
│   └── v5-stories.html  + .jsx
├── shared/
│   ├── tokens.jsx       ← design tokens (colors)
│   ├── shared.jsx       ← shared components: Nav, Footer, GroupCard, icons
│   └── variation-e.jsx  ← VE_Nav (sticky scroll-aware nav used across pages)
├── specs/
│   ├── hylo-products-pricing-spec.md
│   ├── hylo-features-page-spec.md
│   ├── hylo-who-is-it-for-spec.md
│   └── hylo-community-stories-spec.md
└── assets/
    └── hylo-logo-dark.svg
```

To run the prototypes locally, serve the bundle from any static server (`python -m http.server`, `npx serve`, etc.) and open the `pages/*.html` files. They depend on `../shared/*.jsx` and `../assets/*` — the script tags currently use sibling-relative paths (e.g., `tokens.jsx`), so for local viewing you may want to either flatten the structure or update the script `src` paths.

---

## Tech notes for the prototypes (so you can read them)

- All four `.jsx` files are **IIFEs** that read `window.HYLO` (from `tokens.jsx`) and `window.VE_THEME` / `window.VE_Nav` (from `variation-e.jsx`), then export their page component on `window` (e.g., `window.PricingPage`).
- The HTML shells load React/ReactDOM/Babel from unpkg, then load `tokens.jsx → shared.jsx → variation-e.jsx → v5-<page>.jsx` as `<script type="text/babel">`, then mount the page component into `#root`.
- Each page also has a fixed sub-page index pill bar at bottom-left for prototype navigation. **Do not ship this** — it's a prototype-only convenience.
- Speaker notes / `data-screen-label` / `data-om-validate` attributes are absent; these are static marketing pages, not slides.

---

## Design Tokens

All tokens live in `shared/tokens.jsx` on `window.HYLO`. The exhaustive list:

### Colors

**Backgrounds & neutrals**

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#F1EBDE` | Hero backgrounds, "warm" sections, closing CTAs |
| `creamSoft` | `#F7F2E8` | Lighter cream |
| `white` | `#FFFFFF` | Default section background |
| `athensGray` | `#FAFBFC` | Alternating section background |
| `athensDark` | `#E1E5EA` | Borders, dividers |
| `rhino` | `#2C4059` | Primary text color, dark headings |
| `rhinoSoft` | `#3A4D65` | Secondary dark text |

**Primary accent (Forest Green — replaces the legacy Caribbean Green)**

| Token | Hex | Usage |
|---|---|---|
| `forest` | `#087736` | Primary CTAs, accents, active nav state |
| `forestDeep` | `#065F2B` | Hover state for forest CTAs |
| `forestLight` | `#E8F3EC` | Tinted backgrounds, soft pills |
| `forestTint` | `#D6EADE` | Stronger tinted backgrounds |

**Legacy accents (still in tokens, kept for tweaks but not used as primary)**

| Token | Hex |
|---|---|
| `caribbean` | `#0DC39F` |
| `gossamer` | `#0A9682` |

**Post-type colors** — used to color-code sections, icons, category pills, and accents for each "type" of content.

| Token | Hex | Soft variant | Used for |
|---|---|---|---|
| `discussBlue` | `#00A3E3` | `discussBlueSoft` `#D6EEF8` | Discussions, communication |
| `eventRed` | `#FE4850` | `eventRedSoft` `#FDE1E2` | Events, disaster response |
| `requestTeal` | `#00C79D` | `requestTealSoft` `#D1F1E8` | Requests/offers, mutual aid |
| `projectOrange` | `#FC8000` | `projectOrangeSoft` `#FEE4CC` | Projects, land stewardship |
| `proposalPurple` | `#664BA5` | `proposalPurpleSoft` `#E1DBEF` | Proposals, civic governance |
| `chatCyan` | `#5FD2FF` | — | Chat |

**Other**

| Token | Hex |
|---|---|
| `ghost` | `#CCD1D7` |
| `smoke` | `#6B7280` |

**One-off colors used inline (not in tokens — please add them when you implement):**

- `#40A1DD` — "Picton Blue", used for Learning category (Who) + Support Call tier (Pricing)
- `#9883E5` — "Medium Purple", used for Co-ops category (Who) + Hylo Assistant + Blossom tier (Pricing)
- `#23CC80` — "Mountain Meadow", used for Food Systems category (Who) + Seed tier (Pricing)
- `#D4A516` — Gold, used for one Features category badge

**Footer dark background:** `#2A2723` (called `VE_BLACK` in `variation-e.jsx`).

### Typography

**Family:** [Onest](https://fonts.google.com/specimen/Onest) — weights 300, 400, 500, 600, 700, 800. Loaded from Google Fonts.

**Stack:** `'Onest', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

**Type ramp** (used consistently across all four pages):

| Role | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| Page hero `h1` | `clamp(28px, 5vw, 52px)` | 700 | -1.2 | 1.05 |
| Section `h2` (28px style) | 28px | 700 | -0.6 | 1.2 |
| Section `h2` (24px style) | 24px | 700 | -0.4 | 1.2 |
| Use case / story title | 26–28px | 700 | -0.4 to -0.5 | 1.15–1.2 |
| Lead paragraph | 17–18px | 400 | — | 1.6 |
| Body | 16px | 400 | — | 1.65–1.7 |
| Secondary body / helps | 15px | 400 | — | 1.65 |
| Feature / item name | 16px | 500 | — | 1.3 |
| Feature description | 14px | 400 | — | 1.55 |
| Eyebrow / label | 11–12px | 600 | 0.6–1.2 (uppercase) | — |
| Card / pill text | 13–14px | 500–600 | — | — |
| Footer link | 14px | 400 | — | — |

**Color rules for body text:**

- Primary headings: `rhino` (`#2C4059`)
- Body text: `rgba(44,64,89,0.80)` — i.e. `rhino` at 80% opacity
- Secondary body: `rgba(44,64,89,0.70)` at 70%
- Tertiary / labels: `rgba(44,64,89,0.55)` to `rgba(44,64,89,0.45)`
- Italic example callouts: `rgba(44,64,89,0.55)` italic
- Footer text on dark: `rgba(255,255,255,0.85)` for primary, `rgba(255,255,255,0.55)` for labels, `rgba(255,255,255,0.50)` for muted

Always prefer `text-wrap: pretty` on body paragraphs and `text-wrap: balance` on headings.

### Spacing scale

The pages use ad-hoc multiples of 4. Common values:

| Use | px |
|---|---|
| Section vertical padding (top/bottom) | 60–80 |
| Hero top padding (under sticky nav) | 160 |
| Section horizontal padding | 40 |
| Inter-element vertical (within block) | 12, 16, 20, 24, 28, 32 |
| Between major blocks within section | 48–60 |
| Card padding | 16–24 |
| Pill padding | `4px 10px` |
| Button height | 40px |

### Border radius

| Value | Usage |
|---|---|
| `4px` | Cards, callouts, image placeholders |
| `6px` | Buttons, secondary controls |
| `999px` | Pills, tags, icon backgrounds |

### Shadows

| Value | Usage |
|---|---|
| `0 2px 8px rgba(0,0,0,0.08)` | Sub-page index pills |
| `0 2px 12px rgba(40,50,70,0.06), 0 0 0 1px rgba(40,50,70,0.04)` | Cards (default) |
| `0 30px 70px rgba(20,30,50,0.10), 0 4px 14px rgba(20,30,50,0.05)` | Elevated card |
| `-40px 0 80px rgba(0,0,0,0.25)` | Mobile menu drawer |

### Max-widths

| Token | px | Usage |
|---|---|---|
| `maxBody` | 720 | Default content column for prose-heavy sections |
| `maxBody` (stories/who) | 800 | Story body, who-is-it-for use cases |
| `maxNarrow` | 720 | Pricing narrow content |
| `maxWide` | 900–1000 | Pricing/Stories wider layouts (cards, comparison) |
| `maxTable` | 1000 | Pricing comparison matrix |
| Footer | 1080 | Footer content max width |

---

## Shared Components

Both `shared.jsx` and `variation-e.jsx` define components used across the four pages. The ones the developer actually needs to recreate:

### `VE_Nav({ accent })` — sticky top nav

From `variation-e.jsx`. Behavior:

- Sits at top of viewport, `position: sticky`, `top: 0`, `z-index: 50`.
- Initially **transparent** (over the cream hero).
- After scrolling past a 1px sentinel, switches to white background with a soft bottom border.
- Logo: `assets/hylo-logo-dark.svg`, height ~28px.
- Nav links: Product, Commons, About, Open Source, Pricing — gap 28px, 14px Onest 500, color `rhino` at 75% opacity.
- Right side: "Sign in" link + "Sign up" pill button (background `accent`, height 36, border-radius 999, padding `0 18px`, white text 14/600).
- Mobile (< 768px): collapses to a hamburger that opens a right-side drawer (cream background) with full-screen menu.
- Pages pass `accent={FOREST}` (i.e. `#087736`) so the Sign Up button is forest green.

### `Footer` — dark site footer

Pages each define their own copy of this footer inline (`PricingFooter`, `FeaturesFooter`, `WhoFooter`, `StoriesFooter`) — they're identical, so consolidate into one shared `Footer` component when implementing.

Layout:

- Background `#2A2723`, color `#fff`, padding `64px 40px 48px`.
- Centered: Hylo logo (white via `filter: invert(1) brightness(2)`) + tagline "A commons-owned platform for groups that want to build trust, coordinate real work, and grow together." (max-width 520).
- Below that: 4-column link grid (auto-fit, min 180px). Columns: **About Hylo**, **Using Hylo**, **Participate**, **Agreements** — exact link lists are in each page's footer function (they're identical across all four pages).
- Bottom bar with `1px solid rgba(255,255,255,0.10)` divider: "© Hylo · A non-profit commons" left, "Made with care, on Chochenyo Ohlone land." right.

### Sub-page index (prototype-only, do not ship)

A fixed bottom-left pill bar with links between v5-* pages. The active page's pill uses forest background and white text; siblings are white background with a faint rhino border. It exists to navigate between prototypes. **Remove for production.**

---

## Assets

| File | Used by | Notes |
|---|---|---|
| `assets/hylo-logo-dark.svg` | All four pages (nav + footer) | The Hylo wordmark on light. In the dark footer, it's visually inverted via CSS `filter: invert(1) brightness(2)` — a real implementation should use a proper light-on-dark variant of the logo SVG. |

**Image placeholders** in Stories: each story has a dashed-outline placeholder block (240px tall, accent-tinted gradient) where a real photo or screenshot should go. The placeholder text describes what image to source. Per the spec: "Do not use stock photos. A stock photo of 'diverse people collaborating' next to a specific community's name is immediately dishonest."

The Stories page has an explicit list of images to source — see `specs/hylo-community-stories-spec.md` § "Photography and Visuals".

---

## Page-by-page notes

### 1. Pricing (`v5-pricing.html`)

**Spec:** `specs/hylo-products-pricing-spec.md`

**Section order** (in `PricingPage`):

1. `<Hero>` — "Pricing built for groups, not gated tiers." cream background.
2. `<HyloFree>` — White. The "Free is genuinely complete" pitch.
3. `<HyloPro>` — Athens Gray. Pro tier with 4 capability cards.
4. `<HyloWhitelabel>` — White. Custom-domain product.
5. `<HyloAssistant>` — Athens Gray. AI tier (purple accent `#9883E5`).
6. `<StewardshipBridge>` — White. Routes to Stewardship Support page; lists three tiers (Seed `#23CC80`, Blossom `#9883E5`, Support Call `#40A1DD`).
7. `<CommonsSustain>` — Athens Gray. "How this works" — open source + revenue rationale.
8. `<Comparison>` — White. Comparison matrix, 4 columns × N rows.
9. `<ClosingCTA>` — Cream.
10. `<PricingFooter>` — Dark.

**Key design choices** (per spec):

- No "most popular" badges, no countdowns, no anchor-pricing tricks.
- Every price is stated explicitly.
- Free is the default; Pro is "additive capacity, not a gated tier."

### 2. Features (`v5-features.html`)

**Spec:** `specs/hylo-features-page-spec.md`

**Structure:** A reference document, not a sales page. Each `<Category>` section has:

- Category icon (24px, post-type colored)
- Title (24px, 700)
- Intro paragraph (1–2 sentences)
- List of `<Feature>` items, each with name (16/500) + description (14/400 at 70% opacity) + optional `<Badge>` (`pro` outlined or `soon` filled forest)

Categories (in order): Groups & Community Structure, Communication, Events & Gatherings, Mutual Support, Projects & Coordination, Map & Place, Governance & Decision-Making, Tracks & Learning, Profile & Identity, Funding & Resource Allocation, Integrations & API, Notifications & Inbox, Moderation & Safety, Mobile, Platform & Infrastructure, then a `<ComingSoon>` callout, `<ClosingCTA>`, `<FeaturesFooter>`.

Backgrounds alternate White / Athens Gray.

**Tone:** descriptive, not promotional. "Posts (Discussions): Threaded, persistent posts with rich text…" — never "powerful," "seamless," "robust."

### 3. Who It's For (`v5-who.html`)

**Spec:** `specs/hylo-who-is-it-for-spec.md`

**Structure:**

- `<Hero>` — cream, "Hylo works for groups that need to do more than talk."
- 11 `<UseCase>` sections (alternating white / athens), each with:
  - Numbered title (01–11) in the post-type accent color
  - Left accent bar (4px wide, full-height, in post-type color)
  - Challenge paragraph
  - "How Hylo helps" paragraph (forest green label)
  - Group-type tag pills (the dominant scannable element)
  - Optional italic example callout with a colored left border
- `<ForIndividuals>` interstitial — "Hylo also works for individuals."
- `<Pattern>` — dark Rhino section explaining the underlying philosophy
- `<ClosingCTA>` — cream
- `<WhoFooter>` — dark

**Use cases (in order, with accent color):**

1. Place-based (caribbean `#0DC39F`)
2. Mutual aid (request teal `#00C79D`)
3. Disaster prep (event red `#FE4850`)
4. Civic / governance (proposal purple `#664BA5`)
5. Nonprofits (discuss blue `#00A3E3`)
6. Networks & coalitions (caribbean `#0DC39F`)
7. Learning (picton blue `#40A1DD`)
8. Food systems (mountain meadow `#23CC80`)
9. Events (event red `#FE4850`)
10. Land stewardship (project orange `#FC8000`)
11. Cooperatives (medium purple `#9883E5`)

### 4. Stories (`v5-stories.html`)

**Spec:** `specs/hylo-community-stories-spec.md`

**Structure:**

- `<Hero>` — cream
- `<IndexCards>` — white. 5 horizontal jump-link cards (Athens Gray fill, 4px radius, 20px padding).
- 5 `<Story>` sections, alternating white / athens, each with:
  - **Header**: Group name (28/700), italic tagline, category pill
  - **Image placeholder** (dashed accent-tinted block — to be replaced with real imagery)
  - **Story body** with labeled sections (12/500 uppercase tracked label at 40% opacity, 16/400 body at 80% opacity):
    - `THE GROUP`
    - `THE CHALLENGE`
    - `WHAT THEY DID ON HYLO`
    - `WHAT HAPPENED`
    - **Team note** (muted callout — Notes for the team about what's still missing. **These are visible in the prototype to highlight outstanding work; remove or hide from production until quotes/metrics are gathered.**)
    - `IN THEIR WORDS` — either a real quote (forest green left bar, 18/500) OR a placeholder rendered in italic with a dashed border (`[Quote needed — …]`).
- `<ClosingCTA>` — cream, "Your group's story could be here."
- `<StoriesFooter>` — dark

**Story order + categories:**

1. Common Good Missoula → Civic (purple `#664BA5`)
2. Float → Participatory Funding (request teal `#00C79D`)
3. Planetary Health Alliance → Global Network (caribbean `#0DC39F`)
4. Millennium Fellowship → Learning (picton `#40A1DD`)
5. The Great Simplification → Community of Practice (project orange `#FC8000`)

**⚠️ Content gaps the dev should flag in implementation:**

- All 5 stories have `[Quote needed — …]` placeholders. Page cannot launch without at least 3 quotes.
- All 5 stories have `Note for the team` callouts that need to be removed or replaced with real metrics. The notes are intentionally visible in the prototype.
- All 5 stories use image placeholder blocks. Real photos / screenshots required.

The spec calls these out as launch blockers — see `specs/hylo-community-stories-spec.md` § "Open Questions" for details.

---

## Interactions & Behavior

### Navigation

- **Sticky top nav** transitions from transparent → white when scrolled past a 1px sentinel. ~250ms ease.
- **Mobile menu** opens a right-side drawer with cream background. Locks body scroll when open. Closes on Escape.
- **Sub-page nav** (prototype-only) is a fixed bottom-left pill bar — remove in production.
- All in-page anchor links (Stories index cards → story sections, Pricing nav → tier sections) use `scroll-behavior: smooth` with `scroll-padding-top: 80px` to clear the sticky nav.

### Hover states

- Index cards in Stories: border color goes from `rgba(44,64,89,0.06)` to `rgba(44,64,89,0.18)` on hover. 120ms ease.
- Buttons: no explicit hover styles in the prototype — define hover (slight darken to `forestDeep`) in production.
- Nav links: opacity changes implied via cursor — define hover (opacity 1) in production.

### Animations

- Hero on home (not in this bundle) has scroll-driven motion. The four pages in this bundle are static — no scroll-driven animation, no entrance animation. Keep it that way.

### Responsive behavior

- All sections use `padding: 60–160px 40px` and rely on `max-width` + `margin: 0 auto` for centering.
- Most grids use `repeat(auto-fit, minmax(180px, 1fr))` or similar.
- Headings use `clamp(...)` for fluid type.
- The prototypes were built for desktop (≥1024px). Mobile breakpoints have not been thoroughly QA'd; review carefully during implementation.

### State

These are static marketing pages. No state management beyond:

- Sticky-nav scrolled boolean (local to nav component)
- Mobile menu open boolean (local to nav component)

There's no form submission, no auth flow, no fetched data. The two CTA buttons on every page are:

- "Create your group — free" → `v5-bring-your-group.html` (a separate marketing page)
- "Sign up" / "Get started" → wherever the actual signup flow lives in production

---

## Open questions for the dev to confirm with design

1. **Where does the marketing site actually live?** — A separate Next.js/Astro app, a section of the main Hylo React app, or a CMS? This determines the implementation approach.
2. **Logo dark variant** — `filter: invert(1) brightness(2)` is a hack. We need a proper light-on-dark Hylo SVG.
3. **Mobile breakpoints** — design QA on phone widths required.
4. **The sub-page index pill bar** — confirm removal for production (yes, it's prototype-only).
5. **Stories team-notes blocks** — confirm these are stripped before launch and replaced with real metrics + quotes per spec § Open Questions.
6. **Real CTAs** — the "Create your group — free" button needs to point at the actual signup URL, not the marketing page about onboarding.
