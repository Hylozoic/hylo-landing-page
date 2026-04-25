import * as React from 'react';
import * as styles from './Nav.module.scss';
import Logo from './Logo';

// Source: design_handoff_v5/design/variation-e.jsx (VE_Nav, VE_MegaMenu)
// Sticky top nav with translucent dark gradient + backdrop blur. Sign-in /
// sign-up buttons fade in only after the page has scrolled past a 1px
// sentinel placed above the nav (so they don't compete with the hero CTAs).

const MENU_TOP = ['Product', 'Commons', 'About', 'Open Source', 'Pricing'];

const MENU_SECTIONS = [
  {
    h: 'About Hylo',
    l: [
      'Our Purpose & Vision',
      'How We Work: Participatory Design',
      'Hylo’s Stewardship',
      'Team',
    ],
  },
  {
    h: 'Using Hylo',
    l: [
      { t: 'Member Guide', ext: true },
      { t: 'Steward Guide', ext: true },
      { t: 'Documentation', ext: true },
      { t: 'Community Stewardship Support', ext: true },
      { t: 'Code', ext: true },
    ],
  },
  {
    h: 'Participate',
    l: [
      'Join our open-source community',
      'Attend a community call',
      'Partner with us',
      'Contribute to Hylo',
    ],
  },
  {
    h: 'Agreements',
    l: [
      'Hylo Values',
      'Code of Conduct',
      'Hylo Platform Agreements',
      'Terms of Use',
      'Privacy Policy',
    ],
  },
];

function ExtIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor"
      strokeWidth="1.5" style={{ opacity: 0.5, flex: 'none' }} aria-hidden>
      <path d="M3.5 8.5L8.5 3.5" />
      <path d="M4.5 3.5h4v4" />
    </svg>
  );
}

function MegaMenu({ open, onClose }) {
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
      className={`${styles.megaScrim} ${open ? styles.open : ''}`}
      onClick={onClose}
      aria-hidden={!open}
    >
      <div className={styles.megaPanel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.megaHeader}>
          <Logo height={28} />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className={styles.megaClose}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className={styles.megaGrid}>
          {MENU_SECTIONS.map((col) => (
            <div key={col.h}>
              <div className={styles.megaSectionTitle}>{col.h}</div>
              <div className={styles.megaList}>
                {col.l.map((x) => {
                  const label = typeof x === 'string' ? x : x.t;
                  const ext = typeof x === 'object' && x.ext;
                  return (
                    <a key={label} className={styles.megaLink}>
                      {label}
                      {ext && <ExtIcon />}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.megaFooter}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a className={styles.signIn}>Sign in</a>
            <button type="button" className={styles.megaCtaSignUp}>Sign up</button>
          </div>
          <div className={styles.megaTagline}>
            Built with care by Terran Collective &middot; MIT
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
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

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} />
      <header className={styles.nav}>
        <div className={styles.inner}>
          <div className={styles.logoSlot}>
            <Logo height={36} />
          </div>

          <nav className={styles.menu}>
            {MENU_TOP.map((l) => (
              <a key={l} className={styles.menuLink}>{l}</a>
            ))}
          </nav>

          <div className={styles.right}>
            <div className={`${styles.auth} ${scrolled ? styles.scrolled : ''}`}>
              <a className={styles.signIn}>Sign in</a>
              <button type="button" className={styles.signUp}>Sign up</button>
            </div>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className={styles.hamburger}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MegaMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
