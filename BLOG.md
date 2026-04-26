# Blog & CMS

The blog is powered by **Keystatic** (the CMS UI) on top of **Astro Content
Collections** (the rendering pipeline). Posts are plain `.mdx` files in
`src/content/blog/` — Keystatic edits them, Astro reads them. No database, no
external service required.

## Routes

| Route | What it is | Who it's for |
|---|---|---|
| `/blog` | Index — featured-post hero, filterable grid, newsletter | Public |
| `/blog/<slug>` | Post detail — header, cover, body, related | Public |
| `/keystatic` | CMS admin (Hylo brand, dark UI) | Authors |

## Authoring

**Locally (dev mode):** start the dev server with `yarn dev` and open
<http://localhost:4321/keystatic>. Local mode reads/writes `src/content/blog/`
on your filesystem directly, no auth required.

**In production:** authors visit `https://hylo.com/keystatic`, sign in with
GitHub, and edits commit to `main` (or whichever branch you point Keystatic at)
through the GitHub API. Netlify rebuilds automatically on push.

## Switching to production (GitHub-backed) storage

The default `keystatic.config.ts` ships with `storage: { kind: 'local' }` so
nobody needs OAuth credentials to run the site locally. Before deploying to
Netlify you need to:

### 1. Update `keystatic.config.ts`

```ts
storage: {
  kind: 'github',
  repo: 'OWNER/REPO',           // e.g. 'Hylozoic/hylo-landing-page'
},
```

### 2. Create a GitHub OAuth app

<https://github.com/settings/developers> → "New OAuth App"

- **Application name**: `Hylo CMS` (or anything you want)
- **Homepage URL**: `https://hylo.com`
- **Authorization callback URL**: `https://hylo.com/api/keystatic/github/oauth/callback`

GitHub will give you a **Client ID** and let you generate a **Client secret**.

### 3. Add Netlify environment variables

Netlify dashboard → **Site settings → Environment variables**:

| Name | Value |
|---|---|
| `KEYSTATIC_GITHUB_CLIENT_ID` | from the OAuth app |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | from the OAuth app |
| `KEYSTATIC_SECRET` | any random 32+ char string (for cookie signing) |
| `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` | the OAuth app's URL slug, only needed if using GitHub App mode |

A quick `KEYSTATIC_SECRET`:
```sh
openssl rand -hex 32
```

### 4. Install the Keystatic GitHub app on the repo

Once the OAuth app exists, GitHub also offers to install a companion app on
the repo so Keystatic can write commits without each author needing push
access. Follow the prompts in the Keystatic UI on first sign-in.

### 5. Branch strategy (optional)

Keystatic can commit either:
- **Directly to `main`** — fastest, what you usually want for a small team
- **Via PRs** — every save opens a PR for review

Configure in `keystatic.config.ts`:
```ts
storage: {
  kind: 'github',
  repo: 'OWNER/REPO',
  branchPrefix: 'cms/',   // optional: groups CMS branches under cms/*
},
```

## Adding a new post by hand

If you don't want to use the CMS UI, just drop a new file:

```
src/content/blog/my-post.mdx
```

with frontmatter that matches the schema in
[`src/content.config.ts`](src/content.config.ts):

```mdx
---
title: My post
excerpt: One- or two-sentence summary.
category: essays           # announcements | product | stories | notes | essays
author:
  name: Aaron Brodeur
  role: Director of Design
date: 2026-04-25
readTime: 5 min read
featured: false
cover:
  caption: Description of the cover (used as alt text and on the placeholder)
  palette1: '#F1EBDE'
  palette2: '#E6D9C0'
  palette3: '#DEC9A6'
  accent:   '#087736'
---

Markdown body goes here. `## Headings`, `> blockquotes`, and `- lists` all
get the v5 typography treatment automatically.
```

The Astro build picks it up on next dev reload / build.

## Categories

Defined in one place and shared between Keystatic, the filter island, and the
chip component:

- [`src/components/v5/blog/categories.js`](src/components/v5/blog/categories.js) — Astro-side colors + labels
- [`keystatic.config.ts`](keystatic.config.ts) — Keystatic-side select options

If you add a new category, update **both** files (and add a color).

## Cover images

The current cover is a procedural gradient placeholder built from three hex
colors + an accent. When real cover photos land, swap the placeholder logic in
[`src/components/v5/blog/Cover.astro`](src/components/v5/blog/Cover.astro) for
a real `<img>` and add an `image` field to the schema.
