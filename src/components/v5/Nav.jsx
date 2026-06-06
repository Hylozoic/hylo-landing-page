import * as React from 'react';
import styles from './Nav.module.scss';

// Source: design_handoff_v5/design/variation-e.jsx (VE_Nav, VE_MegaMenu)
// Sticky top nav with translucent dark gradient + backdrop blur. Sign-in /
// sign-up buttons fade in only after the page has scrolled past a 1px
// sentinel placed above the nav (so they don't compete with the hero CTAs).

const LOGO_SRC = '/v5/hylo-logo-dark.svg';

// Menu items support three shapes:
//   'Plain text'                          → no link, just text (placeholder)
//   { t: 'Label', href: '/path' }         → internal navigation
//   { t: 'Label', ext: true, href?: '…' } → external link (renders the ↗ icon)

const MENU_TOP = [
  { t: 'About', href: '/about' },
  { t: 'Features', href: '/features' },
  { t: 'Pricing',  href: '/pricing'  },
  { t: 'Who is Hylo for?',      href: '/who-is-hylo-for'      },
  { t: 'Blog',     href: '/blog'     },
];

const MENU_SECTIONS = [
  {
    h: 'About Hylo',
    l: [
      { t: 'Blog',         href: '/blog'         },
      { t: 'About Hylo',         href: '/about'   },
      { t: 'Who is Hylo for', href: '/who-is-hylo-for'         },
      { t: 'Why choose Hylo',     href: '/why-choose-hylo'    },
      { t: "Hylo Stewardship", href: '/about'   },
      { t: 'Team',               href: '/about'   },
    ],
  },
  {
    h: 'Using Hylo',
    l: [
      { t: 'Features',             href: '/features'            },
      { t: 'Pricing',              href: '/pricing'             },
      { t: 'Stewardship support',  href: '/stewardship-support' },
      { t: 'Member Guide',         ext: 'https://hylozoic.gitbook.io/hylo/guides/hylo-user-guide' },
      { t: 'Steward Guide',        ext: 'https://hylozoic.gitbook.io/hylo/guides/hylo-steward-guide' },
      { t: 'Documentation',        ext: 'https://hylozoic.gitbook.io/hylo' },
      { t: 'Code',                 ext: 'https://github.com/Hylozoic/hylo' },
    ],
  },
  {
    h: 'Participate',
    l: [
      { t: 'Get involved', href: '/get-involved' },
      { t: 'Join our open-source community',     ext: 'https://www.hylo.com/groups/building-hylo' },
      { t: 'Attend a community call',     ext: 'https://luma.com/calendar/cal-neuN1NsBDApQ8Cb' },
      { t: 'Partner with us',     href: '/get-involved#partner' },
      { t: 'Donate',     ext: 'https://opencollective.com/hylo' },
    ],
  },
  {
    h: 'Agreements',
    l: [
      { t: 'Hylo Values',              href: '/agreements#values'      },
      { t: 'Code of Conduct',          href: '/agreements#conduct'     },
      { t: 'Hylo Platform Agreements', href: '/agreements#agreements'  },
      { t: 'Terms of Use',             href: '/terms'             },
      { t: 'Privacy Policy',           href: '/privacy'             },
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
          <img src={LOGO_SRC} alt="Hylo" style={{ height: 28, display: 'block' }} />
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
                  const href = typeof x === 'object' ? x.href : undefined;
                  return (
                    <a
                      key={label}
                      className={styles.megaLink}
                      href={href}
                      onClick={href ? onClose : undefined}
                      target={ext && href ? '_blank' : undefined}
                      rel={ext && href ? 'noopener noreferrer' : undefined}
                    >
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

export default function Nav({ currentPath = '' }) {
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
            <a href="/" aria-label="Hylo home" style={{ display: 'inline-flex' }}>
              <img src={LOGO_SRC} alt="Hylo" style={{ height: 36, display: 'block' }} />
            </a>
          </div>

          <nav className={styles.menu}>
            {MENU_TOP.map((l) => (
              <a
                key={l.t}
                href={l.href}
                className={`${styles.menuLink} ${currentPath === l.href ? styles.active : ''}`}
              >{l.t}</a>
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
