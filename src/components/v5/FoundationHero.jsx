import * as React from 'react';
import { FadeIn, Pop } from './animations.jsx';
import { tokens } from './tokens.js';

// Preview-only hero used to verify the v5 foundation (Nav + Footer + tokens
// + animation primitives). Lives in a single React island so the entrance
// choreography runs without per-element client directives in the .astro page.
export default function FoundationHero() {
  return (
    <section
      style={{
        background: 'linear-gradient(225deg, #DDE8EE 0%, #E9E5D9 45%, #F1EBDE 100%)',
        padding: '160px 40px 120px',
        minHeight: '70vh',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn delay={0} duration={700}>
          <h1
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: tokens.ink,
              letterSpacing: -2,
              lineHeight: 1.02,
              margin: 0,
              textWrap: 'balance',
            }}
          >
            v5 foundation in place.
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.55,
              color: `rgba(${tokens.mutedRgb}, 0.78)`,
              maxWidth: 640,
              marginTop: 24,
            }}
          >
            Nav, Footer, design tokens, font, and entrance animation primitives
            are wired up. Page ports start next.
          </p>
        </FadeIn>

        <div style={{ display: 'flex', gap: 8, marginTop: 40, flexWrap: 'wrap' }}>
          {['Astro', 'Onest', 'Tokens', 'Nav', 'Mega menu', 'Footer', 'FadeIn', 'Pop'].map(
            (chip, i) => (
              <Pop key={chip} delay={1000 + i * 90}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '8px 14px',
                    borderRadius: 999,
                    background: '#fff',
                    border: `1px solid rgba(${tokens.mutedRgb}, 0.15)`,
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 0.6,
                    textTransform: 'uppercase',
                    color: tokens.ink,
                  }}
                >
                  {chip}
                </span>
              </Pop>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
