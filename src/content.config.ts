import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Astro Content Collection that reads the same `.mdx` files Keystatic writes.
// The schema mirrors keystatic.config.ts so we get type-safe access in pages.

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(['announcements', 'product', 'stories', 'notes', 'essays']),
    author: z.object({
      name: z.string(),
      role: z.string().optional().default(''),
    }),
    date: z.coerce.date(),
    readTime: z.string(),
    featured: z.boolean().default(false),
    cover: z.object({
      caption: z.string(),
      palette1: z.string(),
      palette2: z.string(),
      palette3: z.string(),
      accent: z.string(),
    }),
  }),
});

export const collections = { blog };
