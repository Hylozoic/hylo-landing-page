// Variation E — "v5"
// Based on v4 (D). Onest-only, no Fraunces. Toolkit reworked as V3-style
// colorful asymmetric blocks (inspired by C's "Everything your group needs").

const VE_BLACK = '#2A2723';

const VE_THEME = {
  sans: "'Onest', -apple-system, sans-serif",
  fg: VE_BLACK,
  accent: window.HYLO.forest,
  cream: window.HYLO.cream,
  mutedRgb: '42,39,35',
  logoSrc: 'assets/hylo-logo-dark.svg',
};

// ——————— Nav ———————
const VE_MENU_SECTIONS = [
  { h: 'About Hylo', l: [
    'Our Purpose & Vision',
    'How We Work: Participatory Design',
    'Hylo\u2019s Stewardship',
    'Team',
  ] },
  { h: 'Using Hylo', l: [
    { t: 'Member Guide', ext: true },
    { t: 'Steward Guide', ext: true },
    { t: 'Documentation', ext: true },
    { t: 'Community Stewardship Support', ext: true },
    { t: 'Code', ext: true },
  ] },
  { h: 'Participate', l: [
    'Join our open-source community',
    'Attend a community call',
    'Partner with us',
    'Contribute to Hylo',
  ] },
  { h: 'Agreements', l: [
    'Hylo Values',
    'Code of Conduct',
    'Hylo Platform Agreements',
    'Terms of Use',
    'Privacy Policy',
  ] },
];

function VE_MegaMenu({ open, onClose, accent }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(20,18,16,0.45)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity .25s ease',
        fontFamily: VE_THEME.sans,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute', top: 0, right: 0, bottom: 0,
          width: 'min(760px, 100%)',
          background: VE_THEME.cream,
          boxShadow: '-40px 0 80px rgba(0,0,0,0.25)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform .32s cubic-bezier(.2,.7,.3,1)',
          display: 'flex', flexDirection: 'column',
          overflow: 'auto',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '24px 40px', borderBottom: '1px solid rgba(42,39,35,0.1)',
          position: 'sticky', top: 0, background: VE_THEME.cream, zIndex: 1,
        }}>
          <img src="assets/hylo-logo-dark.svg" alt="Hylo" style={{ height: 28, display: 'block' }} />
          <button
            aria-label="Close menu"
            onClick={onClose}
            style={{
              width: 40, height: 40, borderRadius: 999,
              border: '1px solid rgba(42,39,35,0.15)', background: '#fff',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: VE_BLACK, padding: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Menu grid */}
        <div style={{
          padding: '40px 40px 48px',
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 48px',
        }}>
          {VE_MENU_SECTIONS.map((col) => (
            <div key={col.h}>
              <div style={{
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: 1.4, color: accent, marginBottom: 18,
              }}>{col.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.l.map((x) => {
                  const label = typeof x === 'string' ? x : x.t;
                  const ext = typeof x === 'object' && x.ext;
                  return (
                    <a key={label} style={{
                      fontSize: 17, fontWeight: 500, color: VE_BLACK, cursor: 'pointer',
                      display: 'inline-flex', alignItems: 'center', gap: 8, letterSpacing: -0.2,
                    }}>
                      {label}
                      {ext && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.5, flex: 'none' }}>
                          <path d="M3.5 8.5L8.5 3.5" />
                          <path d="M4.5 3.5h4v4" />
                        </svg>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTAs */}
        <div style={{
          marginTop: 'auto', padding: '24px 40px 32px',
          borderTop: '1px solid rgba(42,39,35,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a style={{ fontSize: 14, color: VE_BLACK, opacity: 0.78, fontWeight: 500, cursor: 'pointer' }}>Sign in</a>
            <button style={{
              height: 40, padding: '0 18px', borderRadius: 8, border: 'none',
              background: accent, color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
            }}>Sign up</button>
          </div>
          <div style={{ fontSize: 12, color: 'rgba(42,39,35,0.55)', letterSpacing: 0.2 }}>
            Built with care by Terran Collective · MIT
          </div>
        </div>
      </div>
    </div>
  );
}

function VE_Nav({ accent }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const sentinelRef = React.useRef(null);
  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const linkStyle = {
    fontSize: 14, color: VE_BLACK, opacity: 0.78,
    fontWeight: 500, cursor: 'pointer',
  };
  return (
    <React.Fragment>
      {/* Sentinel: when out of viewport, the auth buttons fade in. */}
      <div ref={sentinelRef} style={{ height: 1 }} />
      <div style={{
        fontFamily: VE_THEME.sans,
        position: 'sticky', top: 0, zIndex: 50,
        marginBottom: -65, // overlap next section so its bg shows through the nav
        background: 'linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.05) 45%, rgba(0,0,0,0) 100%)',
        backdropFilter: 'saturate(160%) blur(25px)',
        WebkitBackdropFilter: 'saturate(160%) blur(25px)',
      }}>
        <div style={{
          height: 64, display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center', padding: '0 40px', gap: 24,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'start' }}>
            <img src="assets/hylo-logo-dark.svg" alt="Hylo" style={{ height: 36, display: 'block' }} />
          </div>
          <nav style={{ display: 'flex', gap: 28, justifySelf: 'center' }}>
            {['Product', 'Commons', 'About', 'Open Source', 'Pricing'].map(l => (
              <a key={l} style={linkStyle}>{l}</a>
            ))}
          </nav>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14, justifySelf: 'end',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              opacity: scrolled ? 1 : 0,
              transform: scrolled ? 'translateY(0)' : 'translateY(-4px)',
              pointerEvents: scrolled ? 'auto' : 'none',
              transition: 'opacity .25s ease, transform .25s ease',
            }}>
              <a style={linkStyle}>Sign in</a>
              <button style={{
                height: 38, padding: '0 18px', borderRadius: 8, border: 'none',
                background: accent, color: '#fff', fontWeight: 600, fontSize: 14,
                cursor: 'pointer', fontFamily: 'inherit',
              }}>Sign up</button>
            </div>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              style={{
                width: 40, height: 40, borderRadius: 10,
                border: '1px solid rgba(42,39,35,0.15)', background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: VE_BLACK, padding: 0, fontFamily: 'inherit',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <VE_MegaMenu open={menuOpen} onClose={() => setMenuOpen(false)} accent={accent} />
    </React.Fragment>
  );
}

// ——————— Hero ———————
function VE_AuthCard({ accent }) {
  const [mode, setMode] = React.useState('login'); // 'login' | 'signup'
  const isLogin = mode === 'login';
  const input = {
    width: '100%', height: 44, borderRadius: 8, boxSizing: 'border-box',
    border: '1px solid rgba(42,39,35,0.18)', background: '#fff',
    padding: '0 14px', fontSize: 14.5, color: VE_BLACK,
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
      fontFamily: VE_THEME.sans,
    }}>
      {/* Tabs */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4,
        background: 'rgba(42,39,35,0.06)', borderRadius: 10, padding: 4, marginBottom: 22,
      }}>
        {[{ k: 'login', l: 'Log in' }, { k: 'signup', l: 'Sign up' }].map(t => (
          <button key={t.k} onClick={() => setMode(t.k)}
            style={{
              height: 34, borderRadius: 7, border: 'none',
              background: mode === t.k ? '#fff' : 'transparent',
              color: mode === t.k ? VE_BLACK : 'rgba(42,39,35,0.7)',
              fontWeight: 600, fontSize: 13.5, cursor: 'pointer',
              fontFamily: 'inherit', letterSpacing: 0.2,
              boxShadow: mode === t.k ? '0 1px 3px rgba(20,30,50,0.08)' : 'none',
              transition: 'all .18s',
            }}>{t.l}</button>
        ))}
      </div>

      <h3 style={{
        fontSize: 22, fontWeight: 700, color: VE_BLACK, letterSpacing: -0.6,
        margin: 0, lineHeight: 1.15,
      }}>
        {isLogin ? 'Welcome back.' : 'Join the commons.'}
      </h3>
      <p style={{ fontSize: 13.5, color: 'rgba(42,39,35,0.65)', marginTop: 6, marginBottom: 20, lineHeight: 1.5 }}>
        {isLogin ? 'Pick up where you left off.' : 'Free to start. No credit card required.'}
      </p>

      {/* Form */}
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
              <a style={{ fontSize: 12, color: accent, fontWeight: 600, cursor: 'pointer' }}>Forgot?</a>
            )}
          </div>
          <input type="password" style={input} placeholder="••••••••" />
        </div>
        <button type="submit" style={{
          marginTop: 6, height: 46, borderRadius: 8, border: 'none',
          background: accent, color: '#fff', fontWeight: 600, fontSize: 14.5,
          cursor: 'pointer', fontFamily: 'inherit', letterSpacing: 0.2,
        }}>
          {isLogin ? 'Log in' : 'Create account'}
        </button>
      </form>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, margin: '20px 0 14px',
        fontSize: 11, color: 'rgba(42,39,35,0.5)', textTransform: 'uppercase', letterSpacing: 1.2, fontWeight: 600,
      }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(42,39,35,0.1)' }} />
        or continue with
        <div style={{ flex: 1, height: 1, background: 'rgba(42,39,35,0.1)' }} />
      </div>

      {/* Social / alt auth */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 4 }}>
        <button style={{
          height: 42, borderRadius: 8, border: '1px solid rgba(42,39,35,0.18)',
          background: '#fff', color: VE_BLACK, fontWeight: 600, fontSize: 13.5,
          cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.5 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2C41 35 44 30 44 24c0-1.3-.1-2.6-.4-3.9z"/>
          </svg>
          Google
        </button>
        <button style={{
          height: 42, borderRadius: 8, border: '1px solid rgba(42,39,35,0.18)',
          background: '#fff', color: VE_BLACK, fontWeight: 600, fontSize: 13.5,
          cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="6" y="2" width="12" height="20" rx="2.5" />
            <path d="M11 18h2" />
          </svg>
          Phone
        </button>
      </div>

      <div style={{ marginTop: 16, fontSize: 12.5, color: 'rgba(42,39,35,0.65)', textAlign: 'center', lineHeight: 1.5 }}>
        {isLogin ? (
          <>New to Hylo? <a onClick={() => setMode('signup')} style={{ color: accent, fontWeight: 600, cursor: 'pointer' }}>Create an account</a></>
        ) : (
          <>Already here? <a onClick={() => setMode('login')} style={{ color: accent, fontWeight: 600, cursor: 'pointer' }}>Log in</a></>
        )}
      </div>
    </div>
  );
}

function VE_Hero({ accent, subline }) {
  const sublines = {
    A: 'Unlock deeper trust, better coordination, and the capacity to tackle complex challenges — together.',
    B: 'The tools your group needs to organize, decide, and grow — in one place.',
    C: null,
  };
  const sub = sublines[subline] ?? sublines.A;
  return (
    <section style={{ background: 'linear-gradient(225deg, #DDE8EE 0%, #E9E5D9 45%, #F1EBDE 100%)', padding: '160px 40px 104px', fontFamily: VE_THEME.sans }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px',
        gap: 64, alignItems: 'center',
      }}>
        <div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 28, flexWrap: 'wrap' }}>
            {(() => {
              const chips = [
                { t: 'Chat', c: window.HYLO.discussBlue },
                { t: 'Events', c: window.HYLO.eventRed },
                { t: 'Requests', c: window.HYLO.requestTeal },
                { t: 'Offers', c: window.HYLO.requestTeal },
                { t: 'Projects', c: window.HYLO.projectOrange },
                { t: 'Proposals', c: window.HYLO.proposalPurple },
                { t: 'Map', c: accent },
              ];
              // Chips start popping in at 1000ms, over ~1s total in rapid
              // succession. 7 chips × ~130ms stagger ≈ 850ms, last pop
              // finishes just past the 2s mark.
              return chips.map((ch, i) => (
                <VE_Pop key={ch.t} delay={1000 + i * 130}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: 11.5, fontWeight: 600, padding: '5px 12px', borderRadius: 999,
                    background: `${ch.c}1a`, color: ch.c, letterSpacing: 0.2,
                  }}>{ch.t}</span>
                </VE_Pop>
              ));
            })()}
          </div>
          <VE_FadeIn from="up" delay={0}>
            <h1 style={{
              fontSize: 68, fontWeight: 700, color: VE_BLACK,
              letterSpacing: -2.2, lineHeight: 1, margin: 0, textWrap: 'balance',
            }}>
              Where people get <span style={{ color: accent }}>organized,</span> stay <span style={{ color: accent }}>connected,</span> and <span style={{ color: accent }}>grow together.</span>
            </h1>
          </VE_FadeIn>
          <div style={{ marginTop: 36, maxWidth: 580 }}>
            {sub && (
              <VE_FadeIn from="up" delay={300}>
                <p style={{ fontSize: 19, lineHeight: 1.5, color: 'rgba(42,39,35,0.78)', margin: 0, fontWeight: 400, textWrap: 'pretty' }}>{sub}</p>
              </VE_FadeIn>
            )}
            <div style={{ display: 'flex', gap: 16, marginTop: 28, alignItems: 'center' }}>
              <VE_FadeIn from="up" delay={550}>
                <button style={{
                  height: 50, padding: '0 24px', borderRadius: 8, border: 'none',
                  background: accent, color: '#fff', fontWeight: 600, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit',
                }}>Bring your group →</button>
              </VE_FadeIn>
              <VE_FadeIn from="up" delay={800}>
                <a style={{ fontSize: 15, color: accent, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 5, cursor: 'pointer' }}>
                  Explore the map
                </a>
              </VE_FadeIn>
            </div>
          </div>
        </div>

        <div style={{ justifySelf: 'end', width: '100%' }}>
          <VE_FadeIn from="up" delay={950}>
            <VE_AuthCard accent={accent} />
          </VE_FadeIn>
        </div>
      </div>
    </section>
  );
}

// ——————— Social Rail — carded, geometric backgrounds, big avatar ———————
// Each card's "cover" uses one of several procedural geometric motifs tinted
// with the group's post-type color. A large rounded-square avatar tile sits
// in the middle of the cover with a simple mark, echoing Hylo's in-app groups.

function GeoCover({ seed, color, size = 280 }) {
  // Pick a motif deterministically from the seed.
  const motif = seed % 4;
  const w = size, h = 200;
  const id = `ve-geo-${seed}`;
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
        // concentric arcs (Float-style wave)
        <g fill="none" stroke={color} strokeOpacity="0.55" strokeWidth="2">
          {[0, 1, 2, 3, 4, 5, 6].map(i => (
            <circle key={i} cx={w * 0.85} cy={h * 0.55} r={30 + i * 22} />
          ))}
        </g>
      )}
      {motif === 1 && (
        // network / triangular mesh
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
        // diagonal stripes
        <g>
          {Array.from({ length: 18 }).map((_, i) => (
            <rect key={i} x={-h + i * 22} y="0" width="8" height={h * 1.6}
              fill={color} fillOpacity={i % 2 ? 0.22 : 0.08}
              transform={`rotate(-28 ${w/2} ${h/2})`} />
          ))}
        </g>
      )}
      {motif === 3 && (
        // organic blobs / watershed
        <g fill={color} fillOpacity="0.35">
          <path d={`M 0 ${h*0.7} C ${w*0.2} ${h*0.5}, ${w*0.35} ${h*0.95}, ${w*0.55} ${h*0.75} S ${w*0.9} ${h*0.55}, ${w} ${h*0.8} L ${w} ${h} L 0 ${h} Z`} />
          <path d={`M 0 ${h*0.45} C ${w*0.25} ${h*0.3}, ${w*0.5} ${h*0.6}, ${w*0.7} ${h*0.4} S ${w*0.95} ${h*0.25}, ${w} ${h*0.35} L ${w} 0 L 0 0 Z`}
                fill={color} fillOpacity="0.22" />
        </g>
      )}
    </svg>
  );
}

function VE_AvatarMark({ seed, color, size = 64 }) {
  // Four simple, distinct glyphs echoing Hylo app icons.
  const kind = seed % 4;
  return (
    <div style={{
      width: size, height: size, borderRadius: 14,
      background: color, color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: `0 8px 22px ${color}66, 0 0 0 4px rgba(255,255,255,0.85)`,
      flex: 'none',
    }}>
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {kind === 0 && (<>
          {/* node + edges */}
          <circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><circle cx="12" cy="13" r="2" />
          <path d="M12 7v4M10 14l-4 4M14 14l4 4" />
        </>)}
        {kind === 1 && (<>
          {/* leaf / bioregion */}
          <path d="M4 20c0-9 6-15 16-16-1 10-7 16-16 16Z" />
          <path d="M4 20 14 10" />
        </>)}
        {kind === 2 && (<>
          {/* hands / mutual aid */}
          <path d="M4 12c2-2 4-2 6 0M14 12c2-2 4-2 6 0" />
          <path d="M4 12v4c0 1 1 2 2 2h12c1 0 2-1 2-2v-4" />
          <path d="M9 8l3-3 3 3" />
        </>)}
        {kind === 3 && (<>
          {/* globe */}
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16" />
        </>)}
      </svg>
    </div>
  );
}

function VE_SocialRail({ accent }) {
  const railRef = React.useRef(null);
  const scrollBy = (dir) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 316, behavior: 'smooth' });
  };
  const arrowStyle = {
    width: 36, height: 36, borderRadius: 999,
    border: `1px solid rgba(42,39,35,0.15)`, background: '#fff',
    color: VE_BLACK, cursor: 'pointer', fontFamily: 'inherit',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 0, transition: 'border-color .12s, background .12s',
  };
  return (
    <section style={{ background: window.HYLO.athensGray, padding: '88px 0 80px', fontFamily: VE_THEME.sans, borderTop: `1px solid rgba(42,39,35,0.1)` }}>
      <div style={{ padding: '0 40px 32px', maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24 }}>
        <div>
          <div style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(42,39,35,0.6)', marginBottom: 10 }}>
            Featured Groups
          </div>
          <h3 style={{ fontSize: 30, fontWeight: 700, color: VE_BLACK, letterSpacing: -0.8, margin: 0 }}>
            Groups growing together on Hylo.
          </h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ fontSize: 13, color: accent, fontWeight: 600, letterSpacing: 0.3, cursor: 'pointer' }}>Browse all groups →</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button aria-label="Scroll left" onClick={() => scrollBy(-1)} style={arrowStyle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button aria-label="Scroll right" onClick={() => scrollBy(1)} style={arrowStyle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .ve-no-scrollbar::-webkit-scrollbar { display: none; width: 0; height: 0; }
      `}</style>
      <div
        ref={railRef}
        className="ve-no-scrollbar"
        style={{
          display: 'flex', gap: 16, padding: '0 40px 16px',
          scrollPaddingLeft: 40,
          overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {[...window.GROUPS, { __volunteer: true }].map((g, i) => g.__volunteer ? (
          <div key="volunteer" style={{
            width: 300, flex: 'none', scrollSnapAlign: 'start',
            background: 'transparent', borderRadius: 16,
            border: `1.5px dashed ${accent}66`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '36px 28px', textAlign: 'center',
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 14,
              background: `${accent}14`, color: accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: VE_BLACK, letterSpacing: -0.3, lineHeight: 1.25, marginBottom: 10, textWrap: 'balance' }}>
              Growing a group on Hylo?
            </div>
            <div style={{ fontSize: 13.5, color: 'rgba(42,39,35,0.7)', lineHeight: 1.55, marginBottom: 20, textWrap: 'pretty' }}>
              Volunteer to be featured here and share your story with the commons.
            </div>
            <button style={{
              height: 40, padding: '0 20px', borderRadius: 8,
              border: 'none', background: accent, color: '#fff',
              fontWeight: 600, fontSize: 13.5, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: 0.2,
            }}>Volunteer your group →</button>
          </div>
        ) : (
          <div key={g.name} style={{
            width: 300, flex: 'none', scrollSnapAlign: 'start',
            background: '#fff', borderRadius: 16, overflow: 'hidden',
            border: '1px solid rgba(42,39,35,0.08)',
            boxShadow: '0 6px 18px rgba(20,30,50,0.06), 0 1px 2px rgba(20,30,50,0.04)',
            display: 'flex', flexDirection: 'column',
            marginLeft: i === 0 ? 40 : 0,
          }}>
            {/* Cover with geometric pattern + avatar */}
            <div style={{ position: 'relative' }}>
              <GeoCover seed={i + 1} color={g.color} size={300} />
              <div style={{
                position: 'absolute', left: 20, bottom: -28,
              }}>
                <VE_AvatarMark seed={i + 1} color={g.color} size={64} />
              </div>
              <div style={{
                position: 'absolute', top: 14, right: 14,
                fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8,
                padding: '4px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.92)', color: g.color,
                backdropFilter: 'blur(4px)',
              }}>{g.tag}</div>
            </div>

            {/* Body */}
            <div style={{ padding: '40px 20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: 19, fontWeight: 700, color: VE_BLACK, lineHeight: 1.2, letterSpacing: -0.4 }}>
                {g.name}
              </div>
              <div style={{ fontSize: 11.5, color: 'rgba(42,39,35,0.58)', marginTop: 4, letterSpacing: 0.2, fontWeight: 500 }}>
                {g.members} members · {g.loc}
              </div>
              <div style={{ fontSize: 13.5, color: 'rgba(42,39,35,0.72)', lineHeight: 1.5, marginTop: 12, flex: 1,
                display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {g.purpose}
              </div>
              <button style={{
                marginTop: 18, height: 38, borderRadius: 8,
                border: `1px solid ${g.color}33`, background: `${g.color}10`,
                color: g.color, fontWeight: 600, fontSize: 13, cursor: 'pointer',
                fontFamily: 'inherit', letterSpacing: 0.2,
              }}>View group →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ——————— Journey — V3-style wave with stations above/below the curve ———————
function VE_Journey({ accent }) {
  // Scroll-tied progress [0..1] of the ribbon drawing.
  // 0 = top of the top cards just entering viewport (from bottom).
  // 1 = bottom of the bottom cards just entered viewport.
  const [progress, setProgress] = React.useState(0);
  const ref = React.useRef(null);
  const waveRef = React.useRef(null);
  React.useEffect(() => {
    let raf = 0;
    let running = false;
    let ready = false; // flips true ~1.5s after section first enters viewport
    let gateTimer = 0;
    const computeP = () => {
      const el = waveRef.current;
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Progress: 0 when the top edge enters the viewport (rect.top = vh),
      // 1 when the top edge reaches the viewport top (rect.top = 0).
      // This ties the full animation to exactly one viewport-height of
      // scrolling, so the animation feels paced regardless of how tall
      // the wave itself is (and works in both real browsers and the
      // scaled design-canvas iframe).
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
      gateTimer = setTimeout(() => {
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

  // Derive the discrete dot-active state from continuous progress.
  // Dot i lights when progress passes its x-position on the ribbon.
  // xs are spaced evenly across the ribbon, so thresholds are roughly i/5.
  const drawn = progress * 5;

  const xs = [60, 320, 560, 800, 1060];
  const ys = [120, 240, 120, 240, 120];

  return (
    <section ref={ref} style={{ background: `linear-gradient(180deg, ${window.HYLO.athensGray} 0%, #F3EEDE 100%)`, padding: '104px 40px', fontFamily: VE_THEME.sans }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: accent, marginBottom: 18 }}>
            The Arc of a Group
          </div>
          <h2 style={{ fontSize: 52, fontWeight: 700, color: VE_BLACK, letterSpacing: -1.6, lineHeight: 1.05, margin: 0, textWrap: 'balance' }}>
            Start with <span style={{ color: accent }}>conversation.</span> End up changing your world.
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(42,39,35,0.72)', maxWidth: 620, margin: '20px auto 0', lineHeight: 1.55 }}>
            Groups evolve. The platform grows with them. Here's how it tends to go — though never in a straight line, and never on anyone else's timeline.
          </p>
        </div>

        <div style={{ padding: '120px 80px 140px' }}>
          <div ref={waveRef} style={{ position: 'relative', maxWidth: 1000, margin: '0 auto' }}>
          <svg width="100%" height="360" viewBox="0 0 1120 360" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="veRibbon" x1="0" x2="1">
                <stop offset="0%" stopColor={window.HYLO.chatCyan} />
                <stop offset="22%" stopColor={window.HYLO.requestTeal} />
                <stop offset="48%" stopColor={window.HYLO.projectOrange} />
                <stop offset="72%" stopColor={window.HYLO.proposalPurple} />
                <stop offset="100%" stopColor={accent} />
              </linearGradient>
            </defs>
            <path d="M 60 120 C 180 120, 200 240, 320 240 C 420 240, 440 120, 560 120 C 660 120, 680 240, 800 240 C 900 240, 920 120, 1060 120"
                  fill="none" stroke="rgba(42,39,35,0.1)" strokeWidth="3" strokeDasharray="4 6" />
            <path d="M 60 120 C 180 120, 200 240, 320 240 C 420 240, 440 120, 560 120 C 660 120, 680 240, 800 240 C 900 240, 920 120, 1060 120"
                  fill="none" stroke="url(#veRibbon)" strokeWidth="4" strokeLinecap="round"
                  style={{ strokeDasharray: 1500, strokeDashoffset: 1500 - (drawn/5)*1500, transition: 'stroke-dashoffset 80ms linear' }} />
          </svg>

          <div style={{ position: 'absolute', inset: 0 }}>
            {window.JOURNEY_STEPS.map((s, i) => {
              const flipUp = i % 2 === 0;
              const leftPct = (xs[i] / 1120) * 100;
              const topPct = (ys[i] / 360) * 100;
              const active = drawn > i;
              return (
                <div key={s.key} style={{
                  position: 'absolute', left: `${leftPct}%`, top: `${topPct}%`,
                  transform: `translate(-50%, ${flipUp ? 'calc(-100% - 44px)' : '44px'})`,
                  width: 200, opacity: active ? 1 : 0.35, transition: 'opacity .5s',
                }}>
                  <div style={{
                    background: '#fff', borderRadius: 12, padding: '14px 16px',
                    border: `1.5px solid ${s.color}40`, boxShadow: `0 8px 24px ${s.color}20`,
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: s.color, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4, fontVariantNumeric: 'tabular-nums' }}>
                      0{i+1} · {s.title}
                    </div>
                    <div style={{ fontSize: 13, color: 'rgba(42,39,35,0.78)', lineHeight: 1.45 }}>
                      {s.body}
                    </div>
                  </div>
                </div>
              );
            })}
            <svg width="100%" height="360" viewBox="0 0 1120 360" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              {window.JOURNEY_STEPS.map((s, i) => {
                const active = drawn > i;
                return (
                  <g key={s.key} transform={`translate(${xs[i]}, ${ys[i]})`}>
                    <circle r={active ? 16 : 10} fill="#fff" stroke={active ? s.color : 'rgba(42,39,35,0.2)'} strokeWidth="3" style={{ transition: 'all .5s' }} />
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

// ——————— Map — real screenshot ———————
function VE_Map({ accent }) {
  return (
    <section style={{ position: 'relative', background: '#0F2A22', fontFamily: VE_THEME.sans }}>
      <div style={{ position: 'relative', height: 560, overflow: 'hidden', background: '#E8E6E1' }}>
        <img src="assets/hylo-map.png" alt="Hylo public map — groups worldwide"
             style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        {/* Full-bleed diagonal gradient — bottom-left heavy, fading to upper-right.
            Angle is ~55deg (offset from a true 45° corner-to-corner). */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(55deg, rgba(15,42,34,0.96) 0%, rgba(15,42,34,0.86) 24%, rgba(15,42,34,0.55) 52%, rgba(15,42,34,0.18) 78%, rgba(15,42,34,0) 100%)',
        }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: 580, padding: '0 60px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          color: '#fff',
        }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: '#9BC9B1', marginBottom: 20 }}>
            Section III — Place
          </div>
          <h2 style={{ fontSize: 48, fontWeight: 700, color: '#fff', letterSpacing: -1.4, lineHeight: 1.05, margin: 0, textWrap: 'balance' }}>
            Real change happens in <span style={{ color: '#9BC9B1' }}>real places.</span>
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.88)', marginTop: 24, maxWidth: 400 }}>
            Hylo is built for the places you live — your neighborhood, your watershed, your bioregion. Tune in to what's happening around you.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 28 }}>
            {['Local mutual aid', 'Tool libraries', 'Community gardens', 'Local orgs', 'Neighbors'].map(t => (
              <span key={t} style={{
                fontSize: 11, padding: '5px 10px', border: '1px solid rgba(255,255,255,0.3)', color: '#fff',
                fontWeight: 500, letterSpacing: 0.2,
              }}>{t}</span>
            ))}
          </div>
          <div style={{ marginTop: 32, fontSize: 14, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
            Open the full map →
          </div>
        </div>
      </div>
    </section>
  );
}

// ——————— Reveal primitives ———————
// VE_FadeIn — fade + translate on mount OR on viewport entry, with delay.
//   from:     'up' | 'down' | 'left' | 'right' | 'none'
//   trigger:  'mount' | 'view'
//   delay:    ms before animation starts
//   distance: px to translate from (default depends on direction)
//   duration: ms (default 600)
function VE_FadeIn({
  from = 'up', trigger = 'mount', delay = 0, distance,
  duration = 600, children, style: extraStyle,
  rootMargin = '-12% 0px -22% 0px',
}) {
  const [visible, setVisible] = React.useState(trigger === 'mount' ? false : false);
  const ref = React.useRef(null);
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    const rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (rm) { setVisible(true); return; }
    if (trigger === 'mount') {
      const t = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(t);
    }
    // view
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [trigger, delay]);

  const d = distance != null ? distance : (from === 'up' || from === 'down' ? 24 : 56);
  const offsets = {
    up:    `translate3d(0, ${d}px, 0)`,
    down:  `translate3d(0, -${d}px, 0)`,
    left:  `translate3d(-${d}px, 0, 0)`,
    right: `translate3d(${d}px, 0, 0)`,
    none:  'none',
  };
  const hidden = offsets[from] || offsets.up;

  // For 'view' mode, delay applies to both enter and exit but we want it
  // to feel snappy in both directions — keep the per-item delay.
  const transDelay = trigger === 'view' ? `${delay}ms` : '0ms';

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0,0,0)' : hidden,
        transition: `opacity ${duration}ms cubic-bezier(.2,.7,.25,1) ${transDelay}, transform ${duration}ms cubic-bezier(.2,.7,.25,1) ${transDelay}`,
        willChange: 'transform, opacity',
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}

// VE_Pop — a bounce-up entrance for small elements (e.g. chips).
// Rises from below with a springy overshoot, then settles.
function VE_Pop({ delay = 0, duration = 520, children, style: extraStyle }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (rm) { setVisible(true); return; }
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      style={{
        display: 'inline-block',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0, 18px, 0)',
        // Overshoot curve — rises past 0, then settles back down.
        transition: `opacity ${Math.round(duration * 0.6)}ms cubic-bezier(.2,.8,.3,1), transform ${duration}ms cubic-bezier(.34, 1.56, .64, 1)`,
        willChange: 'transform, opacity',
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}

// ——————— Toolkit — V3-style color blocks ———————
function VE_SlideIn({ from, delay = 0, children }) {
  // Scroll-reveal: cards slide in from the left/right with easing
  // when the element enters the viewport. One-shot (no reverse on scroll up).
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    // Respect reduced-motion preference.
    const rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (rm) { setVisible(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      // Asymmetric margins:
      //   top  -12% → when scrolling up, the card exits view sooner
      //                (viewport top is pulled down, so it "leaves" earlier)
      //   bot  -22% → when scrolling down, the card enters view later
      //                (viewport bottom is pulled up, so more of it is on
      //                 screen before the reveal triggers)
      { threshold: 0, rootMargin: '-12% 0px -22% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const offset = from === 'right' ? 72 : -72;
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0,0,0)' : `translate3d(${offset}px,0,0)`,
        transition: `opacity .7s cubic-bezier(.2,.7,.25,1) ${delay}ms, transform .8s cubic-bezier(.2,.7,.25,1) ${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}
// 2 × 4 vertical masonry. Each block reveals a real-world photo on hover
// (placeholder panels for now — swap `photoHint`/`shotHint` for real assets).
// Click a block to open a modal with a product screenshot.

function VE_LocalCapIcon({ kind, color, size = 26 }) {
  const s = { width: size, height: size, fill: 'none', stroke: color, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (kind === 'funding') return <svg {...s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 9.5c0-1 1-2 3-2s3 1 3 2-1 1.5-3 2-3 1-3 2 1 2 3 2 3-1 3-2M12 6v2M12 16v2"/></svg>;
  if (kind === 'tracks') return <svg {...s} viewBox="0 0 24 24"><path d="M4 7h4l2 10h4l2-10h4"/><circle cx="6" cy="7" r="1.5"/><circle cx="18" cy="7" r="1.5"/></svg>;
  return <CapIcon kind={kind} color={color} size={size} />;
}

function VE_PhotoPlaceholder({ label, tint }) {
  // Tasteful placeholder panel that reads as "photo goes here".
  // Uses a duotone-ish build: colored wash + soft shapes + caption.
  return (
    <div style={{
      position: 'absolute', inset: 0, borderRadius: 'inherit', overflow: 'hidden',
      background: `linear-gradient(135deg, ${tint}e6 0%, ${tint}b3 100%)`,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0, display: 'block' }}>
        <defs>
          <linearGradient id={`ph-${label.replace(/\W/g,'')}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#ph-${label.replace(/\W/g,'')})`} />
        {/* silhouette "horizon" + blobs to suggest a scene */}
        <circle cx="340" cy="70" r="42" fill="rgba(255,255,255,0.28)" />
        <path d="M0 220 C 80 180, 160 240, 260 200 S 380 210, 400 220 L 400 300 L 0 300 Z" fill="rgba(0,0,0,0.18)" />
        <path d="M0 250 C 100 220, 180 270, 280 245 S 380 260, 400 250 L 400 300 L 0 300 Z" fill="rgba(0,0,0,0.14)" />
      </svg>
      <div style={{
        position: 'absolute', top: 14, left: 14,
        fontSize: 10, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.8,
        color: 'rgba(255,255,255,0.95)', textTransform: 'uppercase', fontWeight: 600,
        padding: '4px 8px', borderRadius: 999, background: 'rgba(0,0,0,0.28)',
        backdropFilter: 'blur(6px)',
      }}>
        photo placeholder
      </div>
      <div style={{
        position: 'absolute', right: 16, bottom: 14,
        fontSize: 12, color: '#fff', fontWeight: 500, letterSpacing: 0.2,
        textShadow: '0 1px 4px rgba(0,0,0,0.5)', maxWidth: '65%', textAlign: 'right',
        lineHeight: 1.35,
      }}>
        {label}
      </div>
    </div>
  );
}

function VE_ToolkitCard({ cap, onOpen }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(cap)}
      style={{
        background: cap.color,
        borderRadius: 18,
        padding: '32px 32px 36px',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        alignItems: 'flex-start',
        cursor: 'pointer',
        transition: 'transform .25s ease, box-shadow .25s ease',
        transform: hover ? 'translateY(-2px)' : 'none',
        boxShadow: hover ? '0 16px 44px rgba(20,30,50,0.18), 0 4px 12px rgba(20,30,50,0.08)' : 'none',
      }}
    >
      {/* Radial highlight (base) */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle at 85% 15%, rgba(255,255,255,0.18) 0%, transparent 55%)`,
        pointerEvents: 'none', transition: 'opacity .3s',
        opacity: hover ? 0 : 1,
      }} />
      {/* Photo layer — fades in on hover */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 18,
        opacity: hover ? 1 : 0, transition: 'opacity .35s ease',
        pointerEvents: 'none',
      }}>
        <VE_PhotoPlaceholder label={cap.photoHint} tint={cap.color} />
        {/* Tone-down scrim so text stays readable */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, ${cap.color}66 0%, ${cap.color}bb 60%, ${cap.color}e6 100%)`,
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', height: '100%' }}>
        <div style={{
          width: 56, height: 56,
          borderRadius: 14, background: 'rgba(255,255,255,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24, flex: 'none', backdropFilter: 'blur(8px)',
        }}>
          <VE_LocalCapIcon kind={cap.key} color="#fff" size={26} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: -0.6,
            lineHeight: 1.08, marginBottom: 12, textWrap: 'balance',
          }}>
            {cap.title}
          </div>
          <div style={{
            fontSize: 15, color: 'rgba(255,255,255,0.88)', lineHeight: 1.55,
          }}>
            {cap.body}
          </div>
        </div>

        {/* Learn more pill — slides up on hover */}
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
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function VE_FeatureModal({ cap, onClose }) {
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
        padding: 40, fontFamily: VE_THEME.sans,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(1040px, 100%)', maxHeight: '90vh', overflow: 'auto',
          background: '#fff', borderRadius: 20, boxShadow: '0 40px 100px rgba(0,0,0,0.45)',
          display: 'grid', gridTemplateColumns: '360px 1fr',
        }}
      >
        {/* Left: meta */}
        <div style={{ padding: '40px 36px', background: cap.color, color: '#fff', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24,
          }}>
            <VE_LocalCapIcon kind={cap.key} color="#fff" size={26} />
          </div>
          <div style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.75)', marginBottom: 12 }}>
            Feature
          </div>
          <h3 style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.8, lineHeight: 1.1, margin: 0, textWrap: 'balance' }}>
            {cap.title}
          </h3>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginTop: 16 }}>
            {cap.body}
          </p>
          <div style={{ marginTop: 'auto', paddingTop: 32, fontSize: 12.5, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.6)' }}>
            {cap.shotHint}
          </div>
        </div>

        {/* Right: screenshot area */}
        <div style={{ padding: 36, background: '#FAFBFC', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <button
            aria-label="Close"
            onClick={onClose}
            style={{
              position: 'absolute', top: 16, right: 16, width: 36, height: 36,
              border: 'none', borderRadius: 999, background: '#fff',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={VE_BLACK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
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
                Product screenshot of <strong style={{ color: VE_BLACK }}>{cap.title}</strong> in action goes here — {cap.shotHint.toLowerCase()}.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VE_Toolkit({ accent }) {
  const H = window.HYLO;
  // Extend the shared capabilities with photo + screenshot hints,
  // and add two new feature sets requested by the team.
  const caps = [
    { ...window.CAPABILITIES[0],
      photoHint: 'Neighbors around a kitchen table, mugs, notebooks, warm lamp light',
      shotHint: 'Threaded discussion with cross-posted chip to sibling groups' },
    { ...window.CAPABILITIES[1],
      photoHint: 'Outdoor community potluck, string lights, kids and elders mingling',
      shotHint: 'Event page with RSVPs, location map, and calendar sync' },
    { ...window.CAPABILITIES[2],
      photoHint: 'Hands exchanging a toolbox at a tool-library pickup window',
      shotHint: 'Offer/request feed with map-pinned local exchanges' },
    { ...window.CAPABILITIES[3],
      photoHint: 'Volunteers building a trail bridge, tools laid out, crew planning',
      shotHint: 'Project board with tasks, roles and a timeline' },
    { ...window.CAPABILITIES[4],
      photoHint: 'Assembly meeting with hands raised, facilitator at the front',
      shotHint: 'Proposal page with ranked-choice vote and comment threads' },
    // New: Funding Rounds & Collective Budgeting
    { key: 'funding', title: 'Funding Rounds & Collective Budgeting',
      color: H.forest,
      body: 'Decide together how to spend shared money. Pool funds, vet requests, and allocate transparently as a group.',
      photoHint: 'Group around a wall of proposals with stickers for votes',
      shotHint: 'Funding round view with pooled balance, proposals and allocations' },
    // Existing: Map & Place (move after)
    { ...window.CAPABILITIES[5],
      photoHint: 'Aerial of a watershed at dawn, small town nestled in river valley',
      shotHint: 'Map view with groups, events and offers pinned to places' },
    // New: Tracks & Actions
    { key: 'tracks', title: 'Tracks & Actions',
      color: H.chatCyan,
      body: 'Create learning journeys, skill shares and classes. Members progress through actions together, at their own pace.',
      photoHint: 'Outdoor skill-share workshop, teacher demonstrating to a circle',
      shotHint: 'Track view with ordered actions, progress bars and a cohort panel' },
  ];

  // 2 cols × 4 rows. Cards size themselves to their content — no staggered heights.
  const col0 = [caps[0], caps[2], caps[4], caps[6]];
  const col1 = [caps[1], caps[3], caps[5], caps[7]];

  const [openCap, setOpenCap] = React.useState(null);

  return (
    <section style={{ background: '#fff', padding: '112px 40px', fontFamily: VE_THEME.sans }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64,
          alignItems: 'center', marginBottom: 80,
        }}>
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: accent, marginBottom: 18 }}>
              The Toolkit
            </div>
            <h2 style={{ fontSize: 56, fontWeight: 700, color: VE_BLACK, letterSpacing: -1.6, lineHeight: 1.02, margin: 0, textWrap: 'balance' }}>
              Everything your group needs, <span style={{ color: accent }}>in one place.</span>
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(42,39,35,0.72)', marginTop: 20, lineHeight: 1.6 }}>
              No more juggling Slack, Google Docs, Eventbrite, and email chains. Hylo brings it together.
            </p>
            <div style={{
              marginTop: 28, fontSize: 12, color: 'rgba(42,39,35,0.55)',
              fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.2,
            }}>
              The Great Simplification · #general
            </div>
          </div>

          <button
            onClick={() => { /* TODO: open Hylo speedrun video */ }}
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
              <img src="assets/hylo-screenshot.png" alt="Hylo — The Great Simplification, #general"
                   style={{ display: 'block', width: '100%', height: 'auto' }} />
            </div>
            {/* Subtle darken for contrast */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 14,
              background: 'linear-gradient(180deg, rgba(20,20,18,0) 40%, rgba(20,20,18,0.35) 100%)',
              pointerEvents: 'none',
            }} />
            {/* Play button */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 88, height: 88, borderRadius: 999,
              background: '#fff', color: accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 12px 32px rgba(0,0,0,0.25), 0 0 0 8px rgba(255,255,255,0.22)',
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 4 }}>
                <path d="M6 4.5v15a1 1 0 0 0 1.54.84l11.5-7.5a1 1 0 0 0 0-1.68L7.54 3.66A1 1 0 0 0 6 4.5Z" />
              </svg>
            </div>
            {/* Label pill */}
            <div style={{
              position: 'absolute', left: 18, bottom: 18,
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 14px 8px 10px', borderRadius: 999,
              background: 'rgba(15,15,14,0.72)', backdropFilter: 'blur(10px)',
              color: '#fff', fontSize: 12.5, fontWeight: 600, letterSpacing: 0.2,
            }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 20, height: 20, borderRadius: 999, background: '#fff', color: accent,
              }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4.5v15a1 1 0 0 0 1.54.84l11.5-7.5a1 1 0 0 0 0-1.68L7.54 3.66A1 1 0 0 0 6 4.5Z" /></svg>
              </span>
              <span>Hylo speedrun</span>
              <span style={{ opacity: 0.7, fontWeight: 500 }}>· 1 min tour</span>
            </div>
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[col0, col1].map((col, colIdx) => (
            <div key={colIdx} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {col.map((c, rowIdx) => (
                <VE_SlideIn
                  key={c.key}
                  from={colIdx === 0 ? 'left' : 'right'}
                  delay={rowIdx * 60}
                >
                  <VE_ToolkitCard cap={c} onOpen={setOpenCap} />
                </VE_SlideIn>
              ))}
            </div>
          ))}
        </div>
      </div>
      <VE_FeatureModal cap={openCap} onClose={() => setOpenCap(null)} />
    </section>
  );
}

// ——————— Partner Logos (continuous horizontal marquee) ———————
function VE_PartnerLogos() {
  // Wordmark-style renderings until real SVG logos are dropped in.
  const partners = [
    { name: 'Zebras Unite Co-op', render: (c) => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 0.95 }}>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, color: c }}>CO<span style={{ color: '#E8A87C' }}>–</span>OP</div>
        <div style={{ fontSize: 8.5, letterSpacing: 3, color: c, marginTop: 3, fontWeight: 600 }}>ZEBRAS UNITE</div>
      </div>
    )},
    { name: 'Bionutrient Food Association', render: (c) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c4 4 4 10 0 14-4-4-4-10 0-14Z"/><path d="M12 17v4"/></svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: c, letterSpacing: 0.2 }}>BIONUTRIENT</div>
          <div style={{ fontSize: 9, color: c, letterSpacing: 1.5, marginTop: 3 }}>FOOD ASSOCIATION</div>
        </div>
      </div>
    )},
    { name: 'New_ Public', render: (c) => (
      <div style={{ fontSize: 22, fontWeight: 600, color: c, letterSpacing: -0.3, fontFamily: 'serif', fontStyle: 'italic' }}>
        New<span style={{ fontStyle: 'normal' }}>_</span> Public
      </div>
    )},
    { name: 'OpenTEAM', render: (c) => (
      <div style={{ fontSize: 22, fontWeight: 700, color: c, letterSpacing: -0.4 }}>
        Open<span style={{ color: '#6BCB6B' }}>TEAM</span>
      </div>
    )},
    { name: 'Pacific Integral', render: (c) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.3">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1="12" y1="12" x2={12 + 10 * Math.cos(i * Math.PI / 4)} y2={12 + 10 * Math.sin(i * Math.PI / 4)} />
          ))}
        </svg>
        <div style={{ fontSize: 15, fontWeight: 700, color: c, letterSpacing: 2 }}>PACIFIC INTEGRAL</div>
      </div>
    )},
    { name: 'Planetary Health Alliance', render: (c) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a16 16 0 0 1 0 20M12 2a16 16 0 0 0 0 20"/></svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: c, letterSpacing: 0.3 }}>PLANETARY</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: c, letterSpacing: 0.3, marginTop: 2 }}>HEALTH</div>
          <div style={{ fontSize: 8.5, color: c, letterSpacing: 2, marginTop: 2 }}>ALLIANCE</div>
        </div>
      </div>
    )},
    { name: 'ProSocial World', render: (c) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            return <circle key={i} cx={12 + 8 * Math.cos(a)} cy={12 + 8 * Math.sin(a)} r="2"
              fill={['#E86A6A','#F2B24B','#6BCB6B','#2A8FD8','#7A5AD8','#D85AA8','#5AC8D8','#D88F5A'][i]} />;
          })}
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: c, letterSpacing: -0.3 }}>ProSocial</div>
          <div style={{ fontSize: 11, color: c, letterSpacing: 0.3, marginTop: 2 }}>World</div>
        </div>
      </div>
    )},
    { name: 'Regen Network', render: (c) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.2">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1="12" y1="12" x2={12 + 10 * Math.cos(i * Math.PI / 6)} y2={12 + 10 * Math.sin(i * Math.PI / 6)} />
          ))}
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: c, letterSpacing: 1 }}>REGEN</div>
          <div style={{ fontSize: 9, color: c, letterSpacing: 2.5, marginTop: 3 }}>NETWORK</div>
        </div>
      </div>
    )},
    { name: 'Tribal Resource Center', render: (c) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.3" strokeLinecap="round">
          <path d="M12 4c-1 3-3 4-5 4 2 1 3 3 3 6 1-2 3-3 5-3-1-2-2-4-3-7Z"/>
          <path d="M8 20h8"/>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: c, letterSpacing: 0.2 }}>Tribal</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: c, letterSpacing: 0.2 }}>Resource</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: c, letterSpacing: 0.2 }}>Center</div>
        </div>
      </div>
    )},
    { name: 'Salmon Nation Trust', render: (c) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="28" height="18" viewBox="0 0 28 18" fill={c}><path d="M2 9c3-5 8-7 14-7 4 0 8 2 10 4-2-1-4-1-6 0 2 1 4 3 6 5-3-1-6-1-9 1l-4 3c-4 2-9 0-11-3 0 0-2-2 0-3Z"/><circle cx="18" cy="6" r="1" fill="#000"/></svg>
        <div style={{ fontSize: 15, fontWeight: 700, color: c, letterSpacing: 0.3 }}>Salmon Nation Trust</div>
      </div>
    )},
    { name: 'Terran', render: (c) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M4 12h16M8 7l8 10M16 7L8 17"/></svg>
        <div style={{ fontSize: 20, fontWeight: 600, color: c, letterSpacing: 2 }}>TERRAN</div>
      </div>
    )},
    { name: 'Holochain', render: (c) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ fontSize: 16, fontWeight: 300, color: c, letterSpacing: 5 }}>HOL</div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.4"><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill={c}/></svg>
        <div style={{ fontSize: 16, fontWeight: 300, color: c, letterSpacing: 5 }}>CHAIN</div>
      </div>
    )},
  ];

  const logoColor = 'rgba(255,255,255,0.72)';
  const row = [...partners, ...partners]; // duplicate for seamless loop

  return (
    <div style={{
      marginTop: 56,
      position: 'relative',
      width: '100%', overflow: 'hidden',
      paddingBlock: 24,
      maskImage: 'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)',
    }}>
      <style>{`
        @keyframes ve-logo-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 72,
        width: 'max-content',
        animation: 've-logo-scroll 60s linear infinite',
      }}>
        {row.map((p, i) => (
          <div key={`${p.name}-${i}`} style={{
            flex: 'none', minHeight: 48,
            display: 'flex', alignItems: 'center',
            opacity: 0.82, filter: 'grayscale(0.2)',
          }}
               title={p.name}>
            {p.render(logoColor)}
          </div>
        ))}
      </div>
    </div>
  );
}

// ——————— Values ———————
function VE_Values({ accent }) {
  return (
    <section style={{ background: VE_BLACK, padding: '112px 0 96px', fontFamily: VE_THEME.sans, color: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: '#9BC9B1', marginBottom: 24 }}>
          A Quiet Flex
        </div>
        <h2 style={{ fontSize: 56, fontWeight: 700, color: '#fff', letterSpacing: -1.6, lineHeight: 1.02, margin: 0, textWrap: 'balance', maxWidth: 1000 }}>
          Built as a <span style={{ color: '#9BC9B1' }}>commons.</span> Owned by no one. Stewarded by <span style={{ color: '#9BC9B1' }}>everyone.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 48 }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.88)', margin: 0 }}>
            Hylo is open source, community-governed, and funded by the people who use it — not by ads, data sales, or venture capital. Your data belongs to you. Your community belongs to itself.
          </p>
          <p style={{ fontSize: 22, lineHeight: 1.45, color: '#fff', margin: 0, fontWeight: 500, textWrap: 'pretty' }}>
            We're building technology that serves coordination, <span style={{ color: '#9BC9B1' }}>not extraction.</span>
          </p>
        </div>

        {/* CTAs */}
        <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <button style={{
            height: 52, padding: '0 24px', borderRadius: 8, border: 'none',
            background: '#9BC9B1', color: VE_BLACK,
            fontWeight: 600, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit',
            display: 'inline-flex', alignItems: 'center', gap: 10,
          }}>
            <span>Join Building Hylo</span>
            <span style={{ fontSize: 12, opacity: 0.65, fontWeight: 500 }}>1,000+ builders</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </button>
          <a
            href="https://github.com/Hylozoic/hylo-evo"
            target="_blank" rel="noopener noreferrer"
            style={{
              height: 52, padding: '0 22px', borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.3)', background: 'transparent',
              color: '#fff', fontWeight: 600, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit',
              display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03a9.52 9.52 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.39.2 2.41.1 2.67.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
            </svg>
            <span>GitHub</span>
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.6 }}><path d="M3 7L7 3" /><path d="M4 3h3v3" /></svg>
          </a>
        </div>

        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          {[
            { big: 'MIT', label: 'Open source · on GitHub' },
            { big: 'Ø', label: 'Ads ever placed' },
            { big: '100%', label: 'Your data stays yours' },
            { big: '2026', label: 'Pizzigati Prize · NTEN' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '32px 20px 0', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
              <div style={{ fontSize: 60, fontWeight: 700, color: '#9BC9B1', letterSpacing: -2.2, lineHeight: 1 }}>{s.big}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.78)', marginTop: 14, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Contributors + partner orgs */}
        <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ fontSize: 26, lineHeight: 1.35, color: '#fff', fontWeight: 500, textWrap: 'balance', maxWidth: 820 }}>
            <span style={{ color: '#9BC9B1', fontWeight: 700 }}>800 individual contributors,</span>
            {' '}and material support from{' '}
            <span style={{ color: '#9BC9B1', fontWeight: 700 }}>18+ organizations.</span>
          </div>
        </div>
      </div>

      {/* Logo rail — full bleed, horizontally scrolling */}
      <VE_PartnerLogos />
    </section>
  );
}

// ——————— Invitation ———————
function VE_Invitation({ accent }) {
  return (
    <section style={{ background: VE_THEME.cream, padding: '112px 40px', fontFamily: VE_THEME.sans }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 56, fontWeight: 700, color: VE_BLACK, letterSpacing: -1.6, lineHeight: 1.02, margin: 0, maxWidth: 940, textWrap: 'balance' }}>
          The coordination tool your community needs <span style={{ color: accent }}>already exists.</span> Come build with us.
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(42,39,35,0.72)', maxWidth: 560, margin: '24px 0 0', lineHeight: 1.6 }}>
          Whether you're running a neighborhood mutual aid network or a global movement, Hylo grows with you. Start where you are.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 56 }}>
          {[
            { t: 'Bring your group', body: 'Set up your community on Hylo. Free to start, powerful to grow.', cta: 'Get started', primary: true },
            { t: 'Explore the commons', body: 'Browse the map. Find groups near you. See what\u2019s already happening.', cta: 'Open the map' },
            { t: 'Support the commons', body: 'Join Hylo Commons. Starting at $1/month — or contribute your time and skills.', cta: 'Join' },
          ].map((c, i) => (
            <VE_FadeIn key={i} from="up" trigger="view" delay={i * 150} rootMargin="0px 0px -38% 0px">
              <div style={{
                background: '#fff', borderRadius: 12, padding: 32,
                border: c.primary ? `1.5px solid ${accent}` : `1px solid rgba(42,39,35,0.14)`,
                boxShadow: c.primary ? `0 8px 28px ${accent}1a` : '0 2px 12px rgba(40,50,70,0.05)',
                display: 'flex', flexDirection: 'column', height: '100%',
              }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: c.primary ? accent : 'rgba(42,39,35,0.55)' }}>
                  Path {String(i+1).padStart(2, '0')}
                </div>
                <div style={{ fontSize: 24, fontWeight: 700, color: VE_BLACK, letterSpacing: -0.5, marginTop: 18, lineHeight: 1.15 }}>
                  {c.t}
                </div>
                <div style={{ fontSize: 14.5, color: 'rgba(42,39,35,0.72)', lineHeight: 1.6, marginTop: 14, flex: 1, minHeight: 64 }}>{c.body}</div>
                <button style={{
                  marginTop: 28, height: 46, borderRadius: 8, border: c.primary ? 'none' : `1px solid rgba(42,39,35,0.18)`,
                  background: c.primary ? accent : '#fff', color: c.primary ? '#fff' : VE_BLACK,
                  fontWeight: 600, fontSize: 14.5, cursor: 'pointer', fontFamily: 'inherit',
                }}>{c.cta} →</button>
              </div>
            </VE_FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function VariationE({ accent, subline }) {
  accent = accent || VE_THEME.accent;
  return (
    <div data-screen-label="Variation E — v5" style={{ background: '#fff' }}>
      <VE_Nav accent={accent} />
      <VE_Hero accent={accent} subline={subline} />
      <VE_SocialRail accent={accent} />
      <VE_Journey accent={accent} />
      <VE_Map accent={accent} />
      <VE_Toolkit accent={accent} />
      <VE_Values accent={accent} />
      <VE_Invitation accent={accent} />
      <Footer theme={VE_THEME} />
    </div>
  );
}

window.VariationE = VariationE;
window.VE_THEME = VE_THEME;
window.VE_Nav = VE_Nav;
window.VE_BLACK = VE_BLACK;
