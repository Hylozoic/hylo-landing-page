import { config, fields, collection } from '@keystatic/core';

// Keystatic CMS config — the schema for blog posts authored via /keystatic.
// Posts are stored as `.mdx` files in src/content/blog/. Astro's Content
// Collection (src/content.config.ts) uses the same shape so pages stay
// statically generated at build time.
//
// Storage modes:
//   - `local`  — reads/writes the local filesystem. Used in `astro dev`.
//   - `github` — commits via the GitHub API. Used in production once the
//                OAuth env vars are set on Netlify (see README at the
//                bottom of this file). Until then, leave kind: 'local'.
//
// To switch to GitHub storage in production:
//   storage: {
//     kind: 'github',
//     repo: 'OWNER/REPO',
//   }
// And add to Netlify env vars:
//   KEYSTATIC_GITHUB_CLIENT_ID
//   KEYSTATIC_GITHUB_CLIENT_SECRET
//   KEYSTATIC_SECRET   (any 32+ char random string for cookie signing)

export default config({
  storage: {
    kind: 'local',
  },

  ui: {
    brand: { name: 'Hylo' },
  },

  collections: {
    posts: collection({
      label: 'Blog posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'body' },
      entryLayout: 'content',
      columns: ['title', 'category', 'date'],

      schema: {
        title: fields.slug({
          name: { label: 'Title' },
          slug: { label: 'URL slug' },
        }),

        excerpt: fields.text({
          label: 'Excerpt',
          description: 'One- or two-sentence summary shown on the index and at the top of the post.',
          multiline: true,
          validation: { length: { max: 320 } },
        }),

        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Announcements',     value: 'announcements' },
            { label: 'Product',           value: 'product' },
            { label: 'Community stories', value: 'stories' },
            { label: 'Field notes',       value: 'notes' },
            { label: 'Essays',            value: 'essays' },
          ],
          defaultValue: 'essays',
        }),

        author: fields.object({
          name: fields.text({ label: 'Name' }),
          role: fields.text({
            label: 'Role',
            description: 'e.g. "Co-founder, Hylo". Optional.',
          }),
        }, { label: 'Author' }),

        date: fields.date({
          label: 'Date',
          description: 'Publication date.',
          defaultValue: { kind: 'today' },
        }),

        readTime: fields.text({
          label: 'Read time',
          description: 'e.g. "8 min read". Set by hand for now.',
        }),

        featured: fields.checkbox({
          label: 'Featured',
          description: 'The most recent featured post is shown in the index hero.',
          defaultValue: false,
        }),

        cover: fields.object({
          caption: fields.text({
            label: 'Caption',
            description: 'Short alt-style description shown on the placeholder card.',
          }),
          palette1: fields.text({ label: 'Palette color 1 (hex)' }),
          palette2: fields.text({ label: 'Palette color 2 (hex)' }),
          palette3: fields.text({ label: 'Palette color 3 (hex)' }),
          accent:   fields.text({ label: 'Accent color (hex)' }),
        }, { label: 'Cover' }),

        body: fields.mdx({
          label: 'Body',
          description: 'Long-form post content. Supports Markdown plus inline components.',
          options: {
            heading: [2, 3],
          },
        }),
      },
    }),
  },
});
