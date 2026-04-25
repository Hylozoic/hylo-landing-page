import * as React from 'react';
import { tokens } from '../tokens.js';
import { GROUPS } from '../groups.js';

// Source: design_handoff_v5/design/variation-e.jsx (VE_SocialRail).
// Horizontal scrolling carousel of featured group cards. Each card has a
// procedural geometric cover (one of 4 motifs picked by seed) with a rounded
// avatar tile inset over the bottom-left of the cover. The last card is a
// dashed "Volunteer" CTA. Paired prev/next arrows scroll the rail by one
// card width using ref + scrollBy.

const ACCENT = tokens.forest;

function GeoCover({ seed, color, size = 300 }) {
  const motif = seed % 4;
  const w = size, h = 200;
  const id = `geo-${seed}`;
  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid slice"
      style={{ display: 'block', background: `${color}18` }}>
      <defs>
        <linearGradient id={`${id}-g`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#${id}-g)`} />
      {motif === 0 && (
        <g fill="none" stroke={color} strokeOpacity="0.55" strokeWidth="2">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <circle key={i} cx={w * 0.85} cy={h * 0.55} r={30 + i * 22} />
          ))}
        </g>
      )}
      {motif === 1 && (
        <g stroke={color} strokeOpacity="0.55" strokeWidth="1.5" fill={color} fillOpacity="0.5">
          {Array.from({ length: 14 }).map((_, i) => {
            const x = (i * 37 + (seed * 13) % 40) % w;
            const y = ((i * 23 + seed * 7) % h);
            return <circle key={i} cx={x} cy={y} r={3} />;
          })}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={i}
              x1={(i * 37 + (seed * 13) % 40) % w} y1={((i * 23 + seed * 7) % h)}
              x2={((i + 3) * 37 + (seed * 13) % 40) % w} y2={(((i + 3) * 23 + seed * 7) % h)} />
          ))}
        </g>
      )}
      {motif === 2 && (
        <g>
          {Array.from({ length: 18 }).map((_, i) => (
            <rect key={i} x={-h + i * 22} y="0" width="8" height={h * 1.6}
              fill={color} fillOpacity={i % 2 ? 0.22 : 0.08}
              transform={`rotate(-28 ${w / 2} ${h / 2})`} />
          ))}
        </g>
      )}
      {motif === 3 && (
        <g fill={color} fillOpacity="0.35">
          <path d={`M 0 ${h * 0.7} C ${w * 0.2} ${h * 0.5}, ${w * 0.35} ${h * 0.95}, ${w * 0.55} ${h * 0.75} S ${w * 0.9} ${h * 0.55}, ${w} ${h * 0.8} L ${w} ${h} L 0 ${h} Z`} />
          <path d={`M 0 ${h * 0.45} C ${w * 0.25} ${h * 0.3}, ${w * 0.5} ${h * 0.6}, ${w * 0.7} ${h * 0.4} S ${w * 0.95} ${h * 0.25}, ${w} ${h * 0.35} L ${w} 0 L 0 0 Z`}
            fill={color} fillOpacity="0.22" />
        </g>
      )}
    </svg>
  );
}

function AvatarMark({ seed, color, size = 64 }) {
  const kind = seed % 4;
  return (
    <div style={{
      width: size, height: size, borderRadius: 14,
      background: color, color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: `0 8px 22px ${color}66, 0 0 0 4px rgba(255,255,255,0.85)`,
      flex: 'none',
    }}>
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {kind === 0 && (<>
          <circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" /><circle cx="12" cy="13" r="2" />
          <path d="M12 7v4M10 14l-4 4M14 14l4 4" />
        </>)}
        {kind === 1 && (<>
          <path d="M4 20c0-9 6-15 16-16-1 10-7 16-16 16Z" />
          <path d="M4 20 14 10" />
        </>)}
        {kind === 2 && (<>
          <path d="M4 12c2-2 4-2 6 0M14 12c2-2 4-2 6 0" />
          <path d="M4 12v4c0 1 1 2 2 2h12c1 0 2-1 2-2v-4" />
          <path d="M9 8l3-3 3 3" />
        </>)}
        {kind === 3 && (<>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16" />
        </>)}
      </svg>
    </div>
  );
}

const arrowStyle = {
  width: 36, height: 36, borderRadius: 999,
  border: '1px solid rgba(42,39,35,0.15)', background: '#fff',
  color: tokens.ink, cursor: 'pointer', fontFamily: 'inherit',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  padding: 0, transition: 'border-color .12s, background .12s',
};

export default function FeaturedGroups() {
  const railRef = React.useRef(null);
  const scrollBy = (dir) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 316, behavior: 'smooth' });
  };

  return (
    <section className="v5-featured" style={{
      background: tokens.athensGray,
      padding: '88px 0 80px',
      borderTop: '1px solid rgba(42,39,35,0.1)',
    }}>
      <div className="v5-featured-header" style={{
        padding: '0 40px 32px', maxWidth: 1280, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24,
      }}>
        <div>
          <div style={{
            fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5,
            color: 'rgba(42,39,35,0.6)', marginBottom: 10,
          }}>
            Featured Groups
          </div>
          <h3 style={{
            fontSize: 30, fontWeight: 700, color: tokens.ink,
            letterSpacing: -0.8, margin: 0,
          }}>
            Groups growing together on Hylo.
          </h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ fontSize: 13, color: ACCENT, fontWeight: 600, letterSpacing: 0.3, cursor: 'pointer' }}>
            Browse all groups →
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="button" aria-label="Scroll left" onClick={() => scrollBy(-1)} style={arrowStyle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button type="button" aria-label="Scroll right" onClick={() => scrollBy(1)} style={arrowStyle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hide the rail's scrollbar — global so SSR + hydration agree on the
          element shape. Scoped with a unique class. */}
      <style>{`
        .v5-grouprail::-webkit-scrollbar { display: none; width: 0; height: 0; }
      `}</style>

      <div
        ref={railRef}
        className="v5-grouprail"
        style={{
          display: 'flex', gap: 16, padding: '0 40px 16px',
          scrollPaddingLeft: 40,
          overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {GROUPS.map((g, i) => (
          <div key={g.name} style={{
            width: 300, flex: 'none', scrollSnapAlign: 'start',
            background: '#fff', borderRadius: 16, overflow: 'hidden',
            border: '1px solid rgba(42,39,35,0.08)',
            boxShadow: '0 6px 18px rgba(20,30,50,0.06), 0 1px 2px rgba(20,30,50,0.04)',
            display: 'flex', flexDirection: 'column',
            marginLeft: i === 0 ? 40 : 0,
          }}>
            <div style={{ position: 'relative' }}>
              <GeoCover seed={i + 1} color={g.color} size={300} />
              <div style={{ position: 'absolute', left: 20, bottom: -28 }}>
                <AvatarMark seed={i + 1} color={g.color} size={64} />
              </div>
              <div style={{
                position: 'absolute', top: 14, right: 14,
                fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8,
                padding: '4px 10px', borderRadius: 999,
                background: 'rgba(255,255,255,0.92)', color: g.color,
                backdropFilter: 'blur(4px)',
              }}>
                {g.tag}
              </div>
            </div>

            <div style={{
              padding: '40px 20px 22px',
              display: 'flex', flexDirection: 'column', flex: 1,
            }}>
              <div style={{
                fontSize: 19, fontWeight: 700, color: tokens.ink,
                lineHeight: 1.2, letterSpacing: -0.4,
              }}>
                {g.name}
              </div>
              <div style={{
                fontSize: 11.5, color: 'rgba(42,39,35,0.58)',
                marginTop: 4, letterSpacing: 0.2, fontWeight: 500,
              }}>
                {g.members} members · {g.loc}
              </div>
              <div style={{
                fontSize: 13.5, color: 'rgba(42,39,35,0.72)',
                lineHeight: 1.5, marginTop: 12, flex: 1,
                display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
              }}>
                {g.purpose}
              </div>
              <button type="button" style={{
                marginTop: 18, height: 38, borderRadius: 8,
                border: `1px solid ${g.color}33`, background: `${g.color}10`,
                color: g.color, fontWeight: 600, fontSize: 13, cursor: 'pointer',
                fontFamily: 'inherit', letterSpacing: 0.2,
              }}>
                View group →
              </button>
            </div>
          </div>
        ))}

        {/* Volunteer-to-be-featured card */}
        <div style={{
          width: 300, flex: 'none', scrollSnapAlign: 'start',
          background: 'transparent', borderRadius: 16,
          border: `1.5px dashed ${ACCENT}66`,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '36px 28px', textAlign: 'center',
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: `${ACCENT}14`, color: ACCENT,
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <div style={{
            fontSize: 18, fontWeight: 700, color: tokens.ink,
            letterSpacing: -0.3, lineHeight: 1.25, marginBottom: 10, textWrap: 'balance',
          }}>
            Growing a group on Hylo?
          </div>
          <div style={{
            fontSize: 13.5, color: 'rgba(42,39,35,0.7)',
            lineHeight: 1.55, marginBottom: 20, textWrap: 'pretty',
          }}>
            Volunteer to be featured here and share your story with the commons.
          </div>
          <button type="button" style={{
            height: 40, padding: '0 20px', borderRadius: 8,
            border: 'none', background: ACCENT, color: '#fff',
            fontWeight: 600, fontSize: 13.5, cursor: 'pointer',
            fontFamily: 'inherit', letterSpacing: 0.2,
          }}>
            Volunteer your group →
          </button>
        </div>
      </div>
    </section>
  );
}
