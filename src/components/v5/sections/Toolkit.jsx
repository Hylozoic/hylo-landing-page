import * as React from 'react';
import { SlideIn } from '../animations.jsx';
import { tokens } from '../tokens.js';
import { CAPABILITIES } from '../capabilities.js';

// Source: design_handoff_v5/design/variation-e.jsx (VE_Toolkit, VE_ToolkitCard,
// VE_FeatureModal, VE_LocalCapIcon, VE_PhotoPlaceholder).
// 2 × 4 capability grid; cards SlideIn on viewport entry (left/right
// alternating), reveal a photo placeholder + "Learn more" pill on hover, and
// open a feature modal on click. Photos and screenshots are placeholders.

const ACCENT = tokens.forest;

function CapIcon({ kind, color = '#fff', size = 26 }) {
  const s = {
    width: size, height: size, fill: 'none', stroke: color,
    strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (kind) {
    case 'chat':
      return <svg {...s} viewBox="0 0 24 24"><path d="M4 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-5 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" /></svg>;
    case 'event':
      return <svg {...s} viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>;
    case 'exchange':
      return <svg {...s} viewBox="0 0 24 24"><path d="M4 7h14l-3-3M20 17H6l3 3" /></svg>;
    case 'project':
      return <svg {...s} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M8 9h8M8 13h6M8 17h4" /></svg>;
    case 'vote':
      return <svg {...s} viewBox="0 0 24 24"><path d="M5 12l4 4 10-10" /><rect x="3" y="4" width="18" height="16" rx="2" opacity="0.3" /></svg>;
    case 'pin':
      return <svg {...s} viewBox="0 0 24 24"><path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
    case 'funding':
      return <svg {...s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M9 9.5c0-1 1-2 3-2s3 1 3 2-1 1.5-3 2-3 1-3 2 1 2 3 2 3-1 3-2M12 6v2M12 16v2" /></svg>;
    case 'tracks':
      return <svg {...s} viewBox="0 0 24 24"><path d="M4 19V6a2 2 0 0 1 2-2h13v13H6a2 2 0 0 0-2 2zm0 0a2 2 0 0 0 2 2h13" /><path d="M9 10h6M9 14h4" /></svg>;
    default:
      return null;
  }
}


function ToolkitCard({ cap, onOpen }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(cap)}
      style={{
        background: cap.color, borderRadius: 18, padding: '32px 32px 36px',
        color: '#fff', position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        cursor: 'pointer',
        transition: 'transform .25s ease, box-shadow .25s ease',
        transform: hover ? 'translateY(-2px)' : 'none',
        boxShadow: hover
          ? '0 16px 44px rgba(20,30,50,0.18), 0 4px 12px rgba(20,30,50,0.08)'
          : 'none',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 85% 15%, rgba(255,255,255,0.18) 0%, transparent 55%)',
        pointerEvents: 'none', transition: 'opacity .3s',
        opacity: hover ? 0 : 1,
      }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 18, overflow: 'hidden',
        opacity: hover ? 1 : 0, transition: 'opacity .35s ease',
        pointerEvents: 'none',
        background: `linear-gradient(135deg, ${cap.color}e6 0%, ${cap.color}b3 100%)`,
      }}>
        <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0, display: 'block' }}>
          <circle cx="340" cy="70" r="42" fill="rgba(255,255,255,0.28)" />
          <path d="M0 220 C 80 180, 160 240, 260 200 S 380 210, 400 220 L 400 300 L 0 300 Z"
            fill="rgba(0,0,0,0.18)" />
          <path d="M0 250 C 100 220, 180 270, 280 245 S 380 260, 400 250 L 400 300 L 0 300 Z"
            fill="rgba(0,0,0,0.14)" />
        </svg>
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, ${cap.color}66 0%, ${cap.color}bb 60%, ${cap.color}e6 100%)`,
        }} />
      </div>

      <div style={{
        position: 'relative', display: 'flex', flexDirection: 'column',
        alignItems: 'flex-start', width: '100%', height: '100%',
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: 'rgba(255,255,255,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24, flex: 'none', backdropFilter: 'blur(8px)',
        }}>
          <CapIcon kind={cap.key} color="#fff" size={26} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: -0.6,
            lineHeight: 1.08, marginBottom: 12, textWrap: 'balance',
          }}>
            {cap.title}
          </div>
          <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.88)', lineHeight: 1.55 }}>
            {cap.body}
          </div>
        </div>

        <div style={{
          marginTop: 20,
          opacity: hover ? 1 : 0,
          transform: hover ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity .25s ease, transform .25s ease',
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '9px 16px', borderRadius: 999,
          background: '#fff', color: cap.color,
          fontSize: 13.5, fontWeight: 600, letterSpacing: 0.2,
        }}>
          Learn more
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FeatureModal({ cap, onClose }) {
  React.useEffect(() => {
    if (!cap) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cap, onClose]);
  if (!cap) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(20,18,16,0.72)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 40,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(1040px, 100%)', maxHeight: '90vh', overflow: 'auto',
          background: '#fff', borderRadius: 20,
          boxShadow: '0 40px 100px rgba(0,0,0,0.45)',
          display: 'grid', gridTemplateColumns: '360px 1fr',
        }}
      >
        <div style={{
          padding: '40px 36px', background: cap.color, color: '#fff',
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24,
          }}>
            <CapIcon kind={cap.key} color="#fff" size={26} />
          </div>
          <div style={{
            fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5,
            color: 'rgba(255,255,255,0.75)', marginBottom: 12,
          }}>
            Feature
          </div>
          <h3 style={{
            fontSize: 30, fontWeight: 700, letterSpacing: -0.8, lineHeight: 1.1,
            margin: 0, textWrap: 'balance',
          }}>
            {cap.title}
          </h3>
          <p style={{
            fontSize: 15, lineHeight: 1.6,
            color: 'rgba(255,255,255,0.9)', marginTop: 16,
          }}>
            {cap.body}
          </p>
          <div style={{
            marginTop: 'auto', paddingTop: 32, fontSize: 12.5,
            fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.6)',
          }}>
            {cap.shotHint}
          </div>
        </div>

        <div style={{
          padding: 36, background: tokens.athensGray,
          display: 'flex', flexDirection: 'column', position: 'relative',
        }}>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            style={{
              position: 'absolute', top: 16, right: 16, width: 36, height: 36,
              border: 'none', borderRadius: 999, background: '#fff',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={tokens.ink}
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div style={{
            flex: 1, borderRadius: 12, overflow: 'hidden',
            border: `1px dashed ${cap.color}66`, background: `${cap.color}0d`,
            minHeight: 420, position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center', padding: 40, maxWidth: 420 }}>
              <div style={{
                display: 'inline-block',
                fontSize: 10, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1,
                color: cap.color, textTransform: 'uppercase', fontWeight: 700,
                padding: '4px 10px', borderRadius: 999, background: `${cap.color}1a`,
                marginBottom: 16,
              }}>
                screenshot placeholder
              </div>
              <div style={{ fontSize: 15, color: 'rgba(42,39,35,0.7)', lineHeight: 1.55 }}>
                Product screenshot of <strong style={{ color: tokens.ink }}>{cap.title}</strong> in
                action goes here — {cap.shotHint.toLowerCase()}.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Toolkit() {
  // 2 cols × 4 rows. The original alternates: col0 has caps[0,2,4,6], col1 has caps[1,3,5,7].
  const col0 = [CAPABILITIES[0], CAPABILITIES[2], CAPABILITIES[4], CAPABILITIES[6]];
  const col1 = [CAPABILITIES[1], CAPABILITIES[3], CAPABILITIES[5], CAPABILITIES[7]];
  const [openCap, setOpenCap] = React.useState(null);

  return (
    <section className="v5-toolkit" style={{ background: '#fff', padding: '112px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="v5-toolkit-header-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64,
          alignItems: 'center', marginBottom: 80,
        }}>
          <div>
            <div style={{
              fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5,
              color: ACCENT, marginBottom: 18,
            }}>
              The Toolkit
            </div>
            <h2 className="v5-toolkit-headline" style={{
              fontSize: 56, fontWeight: 700, color: tokens.ink,
              letterSpacing: -1.6, lineHeight: 1.02, margin: 0, textWrap: 'balance',
            }}>
              Everything your group needs, <span style={{ color: ACCENT }}>in one place.</span>
            </h2>
            <p style={{
              fontSize: 17, color: 'rgba(42,39,35,0.72)',
              marginTop: 20, lineHeight: 1.6,
            }}>
              Tools for when you outgrow the group chat and you're ready to get things done.
              Hylo brings it together.
            </p>
            <div style={{
              marginTop: 28, fontSize: 12, color: 'rgba(42,39,35,0.55)',
              fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.2,
            }}>
              The Great Simplification · #general
            </div>
          </div>

          {/* Speedrun screenshot + play button */}
          <button
            type="button"
            aria-label="Play the Hylo speedrun — a 1-minute tour"
            style={{
              position: 'relative', padding: 0, border: 'none', background: 'transparent',
              cursor: 'pointer', fontFamily: 'inherit', display: 'block',
              borderRadius: 14, overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(20,30,50,0.14), 0 4px 14px rgba(20,30,50,0.06)',
            }}
          >
            <div style={{
              border: '1px solid rgba(42,39,35,0.14)', borderRadius: 14, overflow: 'hidden',
              background: '#fff',
            }}>
              <img
                src="/v5/hylo-screenshot.png"
                alt="Hylo — The Great Simplification, #general"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </div>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 14,
              background: 'linear-gradient(180deg, rgba(20,20,18,0) 40%, rgba(20,20,18,0.35) 100%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 88, height: 88, borderRadius: 999,
              background: '#fff', color: ACCENT,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 12px 32px rgba(0,0,0,0.25), 0 0 0 8px rgba(255,255,255,0.22)',
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"
                style={{ marginLeft: 4 }}>
                <path d="M6 4.5v15a1 1 0 0 0 1.54.84l11.5-7.5a1 1 0 0 0 0-1.68L7.54 3.66A1 1 0 0 0 6 4.5Z" />
              </svg>
            </div>
            <div style={{
              position: 'absolute', left: 18, bottom: 18,
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 14px 8px 10px', borderRadius: 999,
              background: 'rgba(15,15,14,0.72)', backdropFilter: 'blur(10px)',
              color: '#fff', fontSize: 12.5, fontWeight: 600, letterSpacing: 0.2,
            }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 20, height: 20, borderRadius: 999, background: '#fff', color: ACCENT,
              }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 4.5v15a1 1 0 0 0 1.54.84l11.5-7.5a1 1 0 0 0 0-1.68L7.54 3.66A1 1 0 0 0 6 4.5Z" />
                </svg>
              </span>
              <span>Hylo speedrun</span>
              <span style={{ opacity: 0.7, fontWeight: 500 }}>· 1 min tour</span>
            </div>
          </button>
        </div>

        <div className="v5-toolkit-card-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[col0, col1].map((col, colIdx) => (
            <div key={colIdx} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {col.map((c, rowIdx) => (
                <SlideIn key={c.key} from={colIdx === 0 ? 'left' : 'right'} delay={rowIdx * 60}>
                  <ToolkitCard cap={c} onOpen={setOpenCap} />
                </SlideIn>
              ))}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a href="/features" style={{
            display: 'inline-block',
            fontSize: 15, fontWeight: 600, color: ACCENT,
            textDecoration: 'underline', textUnderlineOffset: 5,
          }}>
            See the full feature reference →
          </a>
        </div>
      </div>
      <FeatureModal cap={openCap} onClose={() => setOpenCap(null)} />
    </section>
  );
}
