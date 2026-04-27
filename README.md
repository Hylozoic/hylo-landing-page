# hylo.com landing page

Marketing site for Hylo. Astro + React islands + Sass, with Keystatic
for the blog. Deploys on Netlify.

## Quick start

Requires **Node ≥ 22.13** (pinned in `.nvmrc`). If you use nvm/asdf/fnm/volta
they'll pick this up automatically.

```bash
yarn install
yarn dev
```

The site is now running at http://localhost:4321/.

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `yarn dev`        | Dev server with hot reload                |
| `yarn build`      | Production build to `dist/`                |
| `yarn preview`    | Serve the production build locally        |
| `yarn astro …`    | Run any Astro CLI command                 |

## Stack

- **[Astro 6](https://astro.build/)** — static-first with optional SSR
  (via `@astrojs/netlify`); most pages ship zero JS.
- **React 18** as islands (`@astrojs/react`) — used only where
  interactivity is needed (homepage Nav, Hero entrance animations,
  Toolkit cards, blog filter, etc.).
- **Sass** for styles. Design tokens in `src/styles/v5/_tokens.scss`
  with a JS mirror in `src/components/v5/tokens.js` for use in inline
  styles inside React islands.
- **MDX** (`@astrojs/mdx`) for blog post content.
- **[Keystatic](https://keystatic.com/)** as the blog CMS, mounted at
  `/keystatic`. See [BLOG.md](BLOG.md) for authoring workflow and the
  GitHub OAuth setup needed before production.

## Project layout

```
src/
  pages/              # one file per route (Astro file-based routing)
    index.astro       # homepage
    about.astro
    agreements.astro
    blog/
      index.astro     # blog index (filter + grid)
      [...slug].astro # individual blog post detail
    bring-your-group.astro
    features.astro
    get-involved.astro
    pricing.astro
    stewardship-support.astro
    stories.astro
    who.astro
  layouts/
    Layout.astro      # shared shell: <head>, Nav, slot, Footer
  components/v5/
    Nav.jsx           # sticky top nav (React island)
    Footer.astro      # static footer
    sections/         # homepage sections (one per file)
    blog/             # blog-specific shared components
    byg/              # bring-your-group platform comparisons
    tokens.js         # JS mirror of design tokens
    animations.jsx    # FadeIn / Pop / SlideIn React primitives
  content/
    blog/             # MDX blog posts (Keystatic writes here)
  content.config.ts   # Astro Content Collection schema
  styles/v5/          # Sass tokens, base, responsive overrides
public/v5/            # static logo + map + screenshot assets

design_handoff_v5/                              # original v5 design reference
design_handoff_pricing_features_who_stories/    # second handoff (4 sub-pages)
keystatic.config.ts                             # CMS schema + storage config
astro.config.mjs                                # Astro integrations + adapter
netlify.toml                                    # Netlify build config
```

## Design system

All visual values come from one place:

- **Sass tokens**: [`src/styles/v5/_tokens.scss`](src/styles/v5/_tokens.scss)
  (palette, typography, radii, shadows). `@use 'tokens' as *;` in any
  scss module.
- **JS tokens**: [`src/components/v5/tokens.js`](src/components/v5/tokens.js)
  — same values exported as a JS object, for use in inline styles
  inside React islands.

The handoff folders (`design_handoff_v5/`, `design_handoff_pricing_features_who_stories/`)
are reference materials — JSX prototypes plus per-page specs. Not
shipped. Use them as the source of truth when porting visuals.

## Adding a new page

```
src/pages/your-route.astro
```

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Hylo — Your route">
  <section><!-- your content --></section>
</Layout>
```

The shared Nav/Footer come from the layout. Tokens via
`@use '../styles/v5/tokens' as *;` inside `<style lang="scss">`.

## Adding a blog post

Either:

- **Web UI**: visit `/keystatic` locally → Add → fill the form → save.
  Writes a new `.mdx` file under `src/content/blog/`.
- **Manually**: drop a `.mdx` file in `src/content/blog/` matching the
  schema in [`src/content.config.ts`](src/content.config.ts).

Build picks it up on next dev reload / build. See [BLOG.md](BLOG.md)
for the full schema and the production CMS setup.

## Deployment

Netlify, via the `@astrojs/netlify` adapter. Branch deploys are configured
for `v5-redesign` (current redesign branch) — every push opens a new
deploy preview on the open PR. `main` is the production branch.

`.nvmrc` pins Node 22.13 for Netlify builds. Don't change Netlify's
default Node version in the UI; per-branch `.nvmrc` is what we rely on.

## Branches

- **`main`** — currently the legacy Gatsby site. Will be replaced by
  `v5-redesign` once it's reviewed and merged.
- **`v5-redesign`** — full Astro rebuild. This is the active branch.
