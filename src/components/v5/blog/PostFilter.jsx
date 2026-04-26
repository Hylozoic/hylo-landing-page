import * as React from 'react';
import { CATEGORIES } from './categories.js';
import { tokens } from '../tokens.js';

// Client-side filter for the blog index — toggles which post cards in the
// grid are visible by adding/removing a `is-hidden` class. The cards are
// SSR-rendered by Astro with `data-category` attributes; this island just
// flips visibility, so the page still works (showing all posts) without JS.
//
// Receives the per-category counts as props so SSR can render the correct
// numbers without a round-trip.

const RHINO_RGB = tokens.mutedRgb; // unused but keeps tokens import meaningful

export default function PostFilter({ counts }) {
  const [active, setActive] = React.useState('all');

  React.useEffect(() => {
    const cards = document.querySelectorAll('[data-category]');
    cards.forEach((card) => {
      const cat = card.getAttribute('data-category');
      const show = active === 'all' || cat === active;
      card.classList.toggle('is-hidden', !show);
    });

    const empty = document.getElementById('blog-empty');
    if (empty) {
      const visible = [...cards].some((c) => !c.classList.contains('is-hidden'));
      empty.style.display = visible ? 'none' : '';
    }
  }, [active]);

  const opts = [
    { key: 'all', label: 'All posts' },
    ...Object.entries(CATEGORIES).map(([k, v]) => ({ key: k, label: v.label })),
  ];

  return (
    <div className="filter-row">
      {opts.map((o) => {
        const isActive = active === o.key;
        const color = o.key === 'all' ? '#2C4059' : CATEGORIES[o.key].color;
        return (
          <button
            key={o.key}
            type="button"
            onClick={() => setActive(o.key)}
            className="filter-pill"
            style={{
              border: `1px solid ${isActive ? color : 'rgba(44,64,89,0.18)'}`,
              background: isActive ? color : '#fff',
              color: isActive ? '#fff' : '#2C4059',
            }}
          >
            {o.label}
            <span
              className="filter-count"
              style={{ color: isActive ? 'rgba(255,255,255,0.75)' : 'rgba(44,64,89,0.45)' }}
            >
              {counts[o.key] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
