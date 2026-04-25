import * as React from 'react';
import { tokens } from '../tokens.js';

// Source: design_handoff_v5/design/variation-e.jsx (VE_Journey).
// Scroll-tied SVG ribbon across 5 milestone stations. Progress is computed
// against the viewport (not the section's own height) so the animation paces
// the same regardless of how tall the wave is. Gated 1.5s after first
// intersection so the curve doesn't start drawing the instant the section
// peeks in.

const ACCENT = tokens.forest;

const JOURNEY_STEPS = [
  { key: 'connect',  title: 'Connect',  color: tokens.chatCyan,
    body: 'Conversations, shared events, a place to find each other. Familiar tools, one home.' },
  { key: 'support',  title: 'Support',  color: tokens.requestTeal,
    body: 'Members post what they need and what they can offer. Every fulfilled exchange builds trust.' },
  { key: 'organize', title: 'Organize', color: tokens.projectOrange,
    body: 'Projects, working groups and events with real follow-through. Coordinate complex work.' },
  { key: 'decide',   title: 'Decide',   color: tokens.proposalPurple,
    body: 'Proposals, participatory budgets, collective funding. Govern shared resources — together.' },
  { key: 'weave',    title: 'Weave',    color: tokens.forest,
    body: 'Connect with neighboring groups. Coordinate at the scale of a watershed or a movement.' },
];

// Station coordinates inside the 1120 × 360 ribbon viewBox.
const XS = [60, 320, 560, 800, 1060];
const YS = [120, 240, 120, 240, 120];

// Total path length used as the strokeDasharray base.
const RIBBON_LEN = 1500;

export default function Journey() {
  const [progress, setProgress] = React.useState(0);
  const waveRef = React.useRef(null);

  React.useEffect(() => {
    let raf = 0;
    let running = false;
    let ready = false;
    let gateTimer = 0;

    const computeP = () => {
      const el = waveRef.current;
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 0 when the top edge enters the viewport (rect.top = vh),
      // 1 when the top edge reaches the viewport top (rect.top = 0).
      // Tying to one viewport-height of scroll keeps the pace consistent
      // regardless of the wave's own height.
      return vh > 0 ? Math.max(0, Math.min(1, (vh - rect.top) / vh)) : 0;
    };

    const update = () => {
      raf = 0;
      if (ready) setProgress(computeP());
      if (running) raf = requestAnimationFrame(update);
    };
    const start = () => {
      if (running) return;
      running = true;
      if (!raf) raf = requestAnimationFrame(update);
    };
    const stop = () => {
      running = false;
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      if (ready) setProgress(computeP());
    };
    const openGate = () => {
      if (ready || gateTimer) return;
      gateTimer = window.setTimeout(() => {
        ready = true;
        if (running) setProgress(computeP());
      }, 1500);
    };

    const el = waveRef.current;
    let io;
    if (el && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) { openGate(); start(); }
          else { stop(); }
        },
        { rootMargin: '0px 0px 0px 0px', threshold: 0 },
      );
      io.observe(el);
    } else {
      openGate();
      start();
    }

    const onResize = () => { if (ready && running) setProgress(computeP()); };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (io) io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      if (gateTimer) clearTimeout(gateTimer);
    };
  }, []);

  // Continuous progress 0..1 → discrete "dots drawn" 0..5
  const drawn = progress * 5;
  const dashOffset = RIBBON_LEN - (drawn / 5) * RIBBON_LEN;

  const ribbonPath =
    'M 60 120 ' +
    'C 180 120, 200 240, 320 240 ' +
    'C 420 240, 440 120, 560 120 ' +
    'C 660 120, 680 240, 800 240 ' +
    'C 900 240, 920 120, 1060 120';

  return (
    <section className="v5-journey" style={{
      background: `linear-gradient(180deg, ${tokens.athensGray} 0%, #F3EEDE 100%)`,
      padding: '104px 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5,
            color: ACCENT, marginBottom: 18,
          }}>
            The Arc of a Group
          </div>
          <h2 className="v5-journey-headline" style={{
            fontSize: 52, fontWeight: 700, color: tokens.ink,
            letterSpacing: -1.6, lineHeight: 1.05, margin: 0, textWrap: 'balance',
          }}>
            Start with <span style={{ color: ACCENT }}>conversation.</span> End up changing your world.
          </h2>
          <p style={{
            fontSize: 17, color: 'rgba(42,39,35,0.72)',
            maxWidth: 620, margin: '20px auto 0', lineHeight: 1.55,
          }}>
            Groups evolve. The platform grows with them. Here's how it tends to go — though never
            in a straight line, and never on anyone else's timeline.
          </p>
        </div>

        {/* Mobile fallback — the wave + 200px-wide absolute cards don't fit at
            narrow widths. v5-responsive.scss flips display between these two. */}
        <div
          className="v5-journey-mobile"
          style={{ display: 'none', flexDirection: 'column', gap: 16, marginTop: 16 }}
        >
          {JOURNEY_STEPS.map((s, i) => (
            <div key={s.key} style={{
              background: '#fff', borderRadius: 12, padding: '16px 18px',
              border: `1.5px solid ${s.color}40`,
              boxShadow: `0 6px 18px ${s.color}1a`,
            }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: s.color,
                textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6,
                fontVariantNumeric: 'tabular-nums',
              }}>
                0{i + 1} · {s.title}
              </div>
              <div style={{
                fontSize: 14, color: 'rgba(42,39,35,0.78)', lineHeight: 1.5,
              }}>
                {s.body}
              </div>
            </div>
          ))}
        </div>

        <div className="v5-journey-padding" style={{ padding: '120px 80px 140px' }}>
          <div ref={waveRef} className="v5-journey-stage" style={{ position: 'relative', maxWidth: 1000, margin: '0 auto' }}>
            <svg
              width="100%"
              height="360"
              viewBox="0 0 1120 360"
              preserveAspectRatio="xMidYMid meet"
              style={{ display: 'block' }}
            >
              <defs>
                <linearGradient id="v5-ribbon" x1="0" x2="1">
                  <stop offset="0%"   stopColor={tokens.chatCyan} />
                  <stop offset="22%"  stopColor={tokens.requestTeal} />
                  <stop offset="48%"  stopColor={tokens.projectOrange} />
                  <stop offset="72%"  stopColor={tokens.proposalPurple} />
                  <stop offset="100%" stopColor={ACCENT} />
                </linearGradient>
              </defs>
              {/* Faint dashed track */}
              <path
                d={ribbonPath}
                fill="none"
                stroke="rgba(42,39,35,0.1)"
                strokeWidth="3"
                strokeDasharray="4 6"
              />
              {/* Drawn ribbon (color, animated) */}
              <path
                d={ribbonPath}
                fill="none"
                stroke="url(#v5-ribbon)"
                strokeWidth="4"
                strokeLinecap="round"
                style={{
                  strokeDasharray: RIBBON_LEN,
                  strokeDashoffset: dashOffset,
                  transition: 'stroke-dashoffset 80ms linear',
                }}
              />
            </svg>

            <div style={{ position: 'absolute', inset: 0 }}>
              {JOURNEY_STEPS.map((s, i) => {
                const flipUp = i % 2 === 0;
                const leftPct = (XS[i] / 1120) * 100;
                const topPct = (YS[i] / 360) * 100;
                const active = drawn > i;
                return (
                  <div
                    key={s.key}
                    style={{
                      position: 'absolute',
                      left: `${leftPct}%`, top: `${topPct}%`,
                      transform: `translate(-50%, ${flipUp ? 'calc(-100% - 44px)' : '44px'})`,
                      width: 200,
                      opacity: active ? 1 : 0.35,
                      transition: 'opacity .5s',
                    }}
                  >
                    <div style={{
                      background: '#fff', borderRadius: 12, padding: '14px 16px',
                      border: `1.5px solid ${s.color}40`,
                      boxShadow: `0 8px 24px ${s.color}20`,
                    }}>
                      <div style={{
                        fontSize: 11, fontWeight: 700, color: s.color,
                        textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4,
                        fontVariantNumeric: 'tabular-nums',
                      }}>
                        0{i + 1} · {s.title}
                      </div>
                      <div style={{
                        fontSize: 13, color: 'rgba(42,39,35,0.78)', lineHeight: 1.45,
                      }}>
                        {s.body}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Station dots — overlay SVG matched to the ribbon viewBox */}
              <svg
                width="100%"
                height="360"
                viewBox="0 0 1120 360"
                preserveAspectRatio="xMidYMid meet"
                style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
              >
                {JOURNEY_STEPS.map((s, i) => {
                  const active = drawn > i;
                  return (
                    <g key={s.key} transform={`translate(${XS[i]}, ${YS[i]})`}>
                      <circle
                        r={active ? 16 : 10}
                        fill="#fff"
                        stroke={active ? s.color : 'rgba(42,39,35,0.2)'}
                        strokeWidth="3"
                        style={{ transition: 'all .5s' }}
                      />
                      {active && <circle r="6" fill={s.color} />}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
