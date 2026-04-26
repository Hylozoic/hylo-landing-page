// Single source of truth for blog categories — referenced by the
// Astro CategoryChip component, the React filter island, and the post-list
// pages. Mirror of the option list in keystatic.config.ts (under
// posts.schema.category).
export const CATEGORIES = {
  announcements: { label: 'Announcements',     color: '#087736' },
  product:       { label: 'Product',           color: '#40A1DD' },
  stories:       { label: 'Community stories', color: '#BB60A8' },
  notes:         { label: 'Field notes',       color: '#23CC80' },
  essays:        { label: 'Essays',            color: '#9883E5' },
};

export const CATEGORY_KEYS = Object.keys(CATEGORIES);
