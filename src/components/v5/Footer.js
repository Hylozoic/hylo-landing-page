import * as React from 'react';
import * as styles from './Footer.module.scss';
import Logo from './Logo';

// Source: design_handoff_v5/design/shared.jsx (Footer)
// Centered logo + tagline above a 4-column menu.

const COLUMNS = [
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
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor"
      strokeWidth="1.3" style={{ opacity: 0.5, flex: 'none' }} aria-hidden>
      <path d="M3 7L7 3" />
      <path d="M4 3h3v3" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.intro}>
        <Logo height={40} />
        <p className={styles.tagline}>
          A commons-owned platform for groups that want to build trust, coordinate
          real work, and grow together.
        </p>
      </div>

      <div className={styles.cols}>
        {COLUMNS.map((col) => (
          <div key={col.h}>
            <div className={styles.colHead}>{col.h}</div>
            {col.l.map((x) => {
              const label = typeof x === 'string' ? x : x.t;
              const ext = typeof x === 'object' && x.ext;
              return (
                <div key={label} className={styles.link}>
                  <span>{label}</span>
                  {ext && <ExtIcon />}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div>Built with care by Terran Collective &middot; Open source &middot; MIT License</div>
        <div className={styles.social}>
          <span>GitHub</span>
          <span>Mastodon</span>
          <span>Bluesky</span>
          <span>Newsletter</span>
        </div>
      </div>
    </footer>
  );
}
