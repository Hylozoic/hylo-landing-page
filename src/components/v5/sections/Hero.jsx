import * as React from 'react';
import { FadeIn, Pop } from '../animations.jsx';
import { tokens } from '../tokens.js';

// Source: design_handoff_v5/design/variation-e.jsx (VE_Hero, VE_AuthCard).
// Inline styles preserved from the source so values map 1:1 against the
// design reference. Single React island — the entrance choreography across
// chips, headline, subline, CTAs and auth card runs as one timeline on mount.

const ACCENT = tokens.forest;

function AuthCard() {
  const [mode, setMode] = React.useState('login'); // 'login' | 'signup'
  const isLogin = mode === 'login';
  const input = {
    width: '100%', height: 44, borderRadius: 8, boxSizing: 'border-box',
    border: '1px solid rgba(42,39,35,0.18)', background: '#fff',
    padding: '0 14px', fontSize: 14.5, color: tokens.ink,
    fontFamily: 'inherit', outline: 'none',
  };
  const label = {
    fontSize: 12, fontWeight: 600, color: 'rgba(42,39,35,0.72)',
    letterSpacing: 0.2, marginBottom: 6, display: 'block',
  };
  return (
    <div style={{
      background: '#fff', borderRadius: 16,
      padding: '28px 28px 24px',
      border: '1px solid rgba(42,39,35,0.08)',
      boxShadow: '0 30px 70px rgba(20,30,50,0.10), 0 4px 14px rgba(20,30,50,0.05)',
      width: '100%', maxWidth: 400,
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4,
        background: 'rgba(42,39,35,0.06)', borderRadius: 10, padding: 4, marginBottom: 22,
      }}>
        {[{ k: 'login', l: 'Log in' }, { k: 'signup', l: 'Sign up' }].map((t) => (
          <button
            key={t.k}
            type="button"
            onClick={() => setMode(t.k)}
            style={{
              height: 34, borderRadius: 7, border: 'none',
              background: mode === t.k ? '#fff' : 'transparent',
              color: mode === t.k ? tokens.ink : 'rgba(42,39,35,0.7)',
              fontWeight: 600, fontSize: 13.5, cursor: 'pointer',
              fontFamily: 'inherit', letterSpacing: 0.2,
              boxShadow: mode === t.k ? '0 1px 3px rgba(20,30,50,0.08)' : 'none',
              transition: 'all .18s',
            }}
          >
            {t.l}
          </button>
        ))}
      </div>

      <h3 style={{
        fontSize: 22, fontWeight: 700, color: tokens.ink, letterSpacing: -0.6,
        margin: 0, lineHeight: 1.15,
      }}>
        {isLogin ? 'Welcome back.' : 'Join the commons.'}
      </h3>
      <p style={{
        fontSize: 13.5, color: 'rgba(42,39,35,0.65)',
        marginTop: 6, marginBottom: 20, lineHeight: 1.5,
      }}>
        {isLogin ? 'Pick up where you left off.' : 'Free to start. No credit card required.'}
      </p>

      <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gap: 12 }}>
        {!isLogin && (
          <div>
            <label style={label}>Full name</label>
            <input style={input} placeholder="Jane Rivera" />
          </div>
        )}
        <div>
          <label style={label}>Email</label>
          <input type="email" style={input} placeholder="you@community.org" />
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <label style={label}>Password</label>
            {isLogin && (
              <a style={{ fontSize: 12, color: ACCENT, fontWeight: 600, cursor: 'pointer' }}>Forgot?</a>
            )}
          </div>
          <input type="password" style={input} placeholder="••••••••" />
        </div>
        <button
          type="submit"
          style={{
            marginTop: 6, height: 46, borderRadius: 8, border: 'none',
            background: ACCENT, color: '#fff', fontWeight: 600, fontSize: 14.5,
            cursor: 'pointer', fontFamily: 'inherit', letterSpacing: 0.2,
          }}
        >
          {isLogin ? 'Log in to Hylo' : 'Create account on Hylo'}
        </button>
      </form>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, margin: '20px 0 14px',
        fontSize: 11, color: 'rgba(42,39,35,0.5)', textTransform: 'uppercase',
        letterSpacing: 1.2, fontWeight: 600,
      }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(42,39,35,0.1)' }} />
        or continue with
        <div style={{ flex: 1, height: 1, background: 'rgba(42,39,35,0.1)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 4 }}>
        <button type="button" style={{
          height: 42, borderRadius: 8, border: '1px solid rgba(42,39,35,0.18)',
          background: '#fff', color: tokens.ink, fontWeight: 600, fontSize: 13.5,
          cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.5 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.5 39.6 16.2 44 24 44z" />
            <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2C41 35 44 30 44 24c0-1.3-.1-2.6-.4-3.9z" />
          </svg>
          Google
        </button>
        <button type="button" style={{
          height: 42, borderRadius: 8, border: '1px solid rgba(42,39,35,0.18)',
          background: '#fff', color: tokens.ink, fontWeight: 600, fontSize: 13.5,
          cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="6" y="2" width="12" height="20" rx="2.5" />
            <path d="M11 18h2" />
          </svg>
          Phone
        </button>
      </div>

      <div style={{
        marginTop: 16, fontSize: 12.5, color: 'rgba(42,39,35,0.65)',
        textAlign: 'center', lineHeight: 1.5,
      }}>
        {isLogin ? (
          <>
            New to Hylo?{' '}
            <a onClick={() => setMode('signup')} style={{ color: ACCENT, fontWeight: 600, cursor: 'pointer' }}>
              Create an account
            </a>
          </>
        ) : (
          <>
            Already here?{' '}
            <a onClick={() => setMode('login')} style={{ color: ACCENT, fontWeight: 600, cursor: 'pointer' }}>
              Log in
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  // Chips: stagger pops at 1000ms + i * 130ms (~850ms total).
  const chips = [
    { t: 'Chat', c: tokens.discussBlue },
    { t: 'Events', c: tokens.eventRed },
    { t: 'Requests', c: tokens.requestTeal },
    { t: 'Offers', c: tokens.requestTeal },
    { t: 'Projects', c: tokens.projectOrange },
    { t: 'Proposals', c: tokens.proposalPurple },
    { t: 'Map', c: ACCENT },
  ];

  return (
    <section className="v5-hero" style={{
      background: 'linear-gradient(225deg, #DDE8EE 0%, #E9E5D9 45%, #F1EBDE 100%)',
      padding: '160px 40px 104px',
    }}>
      <div className="v5-hero-grid" style={{
        maxWidth: 1240, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px',
        gap: 64, alignItems: 'center',
      }}>
        <div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 28, flexWrap: 'wrap' }}>
            {chips.map((ch, i) => (
              <Pop key={ch.t} delay={1000 + i * 130}>
                <span style={{
                  display: 'inline-block',
                  fontSize: 11.5, fontWeight: 600, padding: '5px 12px', borderRadius: 999,
                  background: `${ch.c}1a`, color: ch.c, letterSpacing: 0.2,
                }}>
                  {ch.t}
                </span>
              </Pop>
            ))}
          </div>

          <FadeIn from="up" delay={0}>
            <h1 className="v5-hero-headline" style={{
              fontSize: 68, fontWeight: 700, color: tokens.ink,
              letterSpacing: -2.2, lineHeight: 1, margin: 0, textWrap: 'balance',
            }}>
              Where people get <span style={{ color: ACCENT }}>organized,</span> stay{' '}
              <span style={{ color: ACCENT }}>connected,</span> and{' '}
              <span style={{ color: ACCENT }}>grow together.</span>
            </h1>
          </FadeIn>

          <div style={{ marginTop: 36, maxWidth: 580 }}>
            <FadeIn from="up" delay={300}>
              <p style={{
                fontSize: 19, lineHeight: 1.5, color: 'rgba(42,39,35,0.78)',
                margin: 0, fontWeight: 400, textWrap: 'pretty',
              }}>
                On Hylo, groups unlock deeper trust, better coordination, and the capacity to tackle complex
                challenges — together.
              </p>
            </FadeIn>

            <div style={{ display: 'flex', gap: 16, marginTop: 28, alignItems: 'center' }}>
              <FadeIn from="up" delay={550}>
                <a href="https://www.hylo.com/create-group" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  height: 50, padding: '0 24px', borderRadius: 8,
                  background: ACCENT, color: '#fff', fontWeight: 600, fontSize: 15,
                  textDecoration: 'none', fontFamily: 'inherit',
                }}>
                  Bring your group →
                </a>
              </FadeIn>
              <FadeIn from="up" delay={800}>
                <a href="/why-choose-hylo" style={{
                  fontSize: 15, color: ACCENT, fontWeight: 600,
                  textDecoration: 'underline', textUnderlineOffset: 5,
                }}>
                  Why choose Hylo
                </a>
              </FadeIn>
            </div>
          </div>
        </div>

        <div className="v5-hero-aside" style={{ justifySelf: 'end', width: '100%' }}>
          <FadeIn from="up" delay={950}>
            <AuthCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
