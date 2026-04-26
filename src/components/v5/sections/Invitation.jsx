import * as React from 'react';
import { FadeIn } from '../animations.jsx';
import { tokens } from '../tokens.js';

// Source: design_handoff_v5/design/variation-e.jsx (VE_Invitation).
// 3 cards, scroll-triggered FadeIn stagger (150ms apart). The rootMargin of
// '0px 0px -38% 0px' delays the trigger until the cards are well into view.

const ACCENT = tokens.forest;

const CARDS = [
  {
    t: 'Bring your group',
    body: 'Set up your community on Hylo. Free to start, powerful to grow.',
    cta: 'Get started',
    href: '/bring-your-group',
    primary: true,
  },
  {
    t: 'Explore the commons',
    body: 'See how real groups are coordinating, organizing, and governing themselves on Hylo.',
    cta: 'Read community stories',
    href: '/stories',
  },
  {
    t: 'Support the commons',
    body: 'Join Hylo Commons. Starting at $1/month — or contribute your time and skills.',
    cta: 'Get involved',
    href: '/get-involved',
  },
];

export default function Invitation() {
  return (
    <section className="v5-invitation" style={{ background: tokens.cream, padding: '112px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 className="v5-invitation-headline" style={{
          fontSize: 56, fontWeight: 700, color: tokens.ink,
          letterSpacing: -1.6, lineHeight: 1.02, margin: 0, maxWidth: 940, textWrap: 'balance',
        }}>
          The coordination tool your community needs{' '}
          <span style={{ color: ACCENT }}>already exists.</span> Come build with us.
        </h2>
        <p style={{
          fontSize: 17, color: 'rgba(42,39,35,0.72)', maxWidth: 560,
          margin: '24px 0 0', lineHeight: 1.6,
        }}>
          Whether you're running a neighborhood mutual aid network or a global movement,
          Hylo grows with you. Start where you are.
        </p>

        <div className="v5-invitation-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 56,
        }}>
          {CARDS.map((c, i) => (
            <FadeIn
              key={c.t}
              from="up"
              trigger="view"
              delay={i * 150}
              rootMargin="0px 0px -38% 0px"
            >
              <div style={{
                background: '#fff', borderRadius: 12, padding: 32,
                border: c.primary ? `1.5px solid ${ACCENT}` : '1px solid rgba(42,39,35,0.14)',
                boxShadow: c.primary
                  ? `0 8px 28px ${ACCENT}1a`
                  : '0 2px 12px rgba(40,50,70,0.05)',
                display: 'flex', flexDirection: 'column', height: '100%',
              }}>
                <div style={{
                  fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
                  letterSpacing: 1.5,
                  color: c.primary ? ACCENT : 'rgba(42,39,35,0.55)',
                }}>
                  Path {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{
                  fontSize: 24, fontWeight: 700, color: tokens.ink,
                  letterSpacing: -0.5, marginTop: 18, lineHeight: 1.15,
                }}>
                  {c.t}
                </div>
                <div style={{
                  fontSize: 14.5, color: 'rgba(42,39,35,0.72)', lineHeight: 1.6,
                  marginTop: 14, flex: 1, minHeight: 64,
                }}>
                  {c.body}
                </div>
                <a href={c.href} style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginTop: 28, height: 46, borderRadius: 8,
                  border: c.primary ? 'none' : '1px solid rgba(42,39,35,0.18)',
                  background: c.primary ? ACCENT : '#fff',
                  color: c.primary ? '#fff' : tokens.ink,
                  fontWeight: 600, fontSize: 14.5,
                  textDecoration: 'none', fontFamily: 'inherit',
                }}>
                  {c.cta} →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
