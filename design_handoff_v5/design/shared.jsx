// Shared components used across all Hylo homepage variations.
// All variations render at 1280px artboard width. Fonts / tones vary
// per-variation via a `theme` prop passed into each section.

const H = window.HYLO;

// ——————————————————————————————————————————————
// NAV
// ——————————————————————————————————————————————
function HyloLogo({ size = 24, color = H.rhino }) {
  // Original mark: three overlapping discs forming a trefoil knot
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <g fill="none" stroke={color} strokeWidth="2.4">
        <circle cx="16" cy="11" r="7.5" />
        <circle cx="10" cy="20" r="7.5" />
        <circle cx="22" cy="20" r="7.5" />
      </g>
    </svg>
  );
}

function Nav({ theme }) {
  const t = theme;
  return (
    <div style={{
      height: 56, display: 'flex', alignItems: 'center',
      padding: '0 40px', borderBottom: `1px solid ${t.navBorder || 'rgba(44,64,89,0.08)'}`,
      background: t.navBg || 'transparent',
      fontFamily: t.sans,
      position: 'relative', zIndex: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <HyloLogo size={22} color={t.fg} />
        <span style={{ fontSize: 18, fontWeight: 700, color: t.fg, letterSpacing: -0.4 }}>Hylo</span>
      </div>
      <nav style={{ display: 'flex', gap: 28, marginLeft: 56, flex: 1 }}>
        {['Product', 'Commons', 'About', 'Open Source', 'Pricing'].map(l => (
          <a key={l} style={{ fontSize: 14, color: t.fg, opacity: 0.75, textDecoration: 'none', fontWeight: 500, cursor: 'pointer' }}>{l}</a>
        ))}
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a style={{ fontSize: 14, color: t.fg, opacity: 0.75, fontWeight: 500, cursor: 'pointer' }}>Sign in</a>
        <button style={{
          height: 36, padding: '0 18px', borderRadius: 999, border: 'none',
          background: t.accent, color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer',
          fontFamily: 'inherit',
        }}>Sign up</button>
      </div>
    </div>
  );
}

// ——————————————————————————————————————————————
// GROUP CARD DATA (spec examples + plausible others)
// ——————————————————————————————————————————————
const GROUPS = [
  { name: 'Common Good Missoula', purpose: 'Civic infrastructure for Missoula, Montana — participatory budgeting and community assemblies.',
    members: '1,240', loc: 'Missoula, MT', tag: 'Civic', color: H.proposalPurple, bg: H.proposalPurpleSoft, avatar: '#6B5AB7' },
  { name: 'Float', purpose: 'A nationwide mutual aid commons coordinating rent support and emergency care.',
    members: '8,612', loc: 'Distributed · US', tag: 'Mutual Aid', color: H.requestTeal, bg: H.requestTealSoft, avatar: '#0DB89C' },
  { name: 'Klamath Watershed Weavers', purpose: 'Bioregional coordination across the Klamath basin — from headwaters to coast.',
    members: '432', loc: 'Klamath Basin, OR/CA', tag: 'Bioregional', color: '#2E8B57', bg: '#D9EEDE', avatar: '#3C7D4A' },
  { name: 'The Stewardship School', purpose: 'A learning community for emerging community organizers and facilitators.',
    members: '2,104', loc: 'Online · cohort-based', tag: 'Learning', color: H.discussBlue, bg: H.discussBlueSoft, avatar: '#2F8EC4' },
  { name: 'Oakland Food Not Bombs', purpose: 'Twice-weekly community meals, produce share, and free store in downtown Oakland.',
    members: '318', loc: 'Oakland, CA', tag: 'Food Systems', color: H.projectOrange, bg: H.projectOrangeSoft, avatar: '#D96B1F' },
  { name: 'Bay Area Tool Library Network', purpose: 'Seven tool libraries sharing inventory, know-how and repair clinics.',
    members: '894', loc: 'SF Bay Area', tag: 'Commons', color: H.forest, bg: H.forestLight, avatar: '#2D7048' },
  { name: 'Cascadia Climate Collective', purpose: 'Regional climate action across Washington, Oregon and British Columbia.',
    members: '3,420', loc: 'Cascadia', tag: 'Climate', color: '#167F5A', bg: '#D6ECDE', avatar: '#1C8260' },
  { name: 'Pine Ridge Neighbors', purpose: 'Our block — events, requests, lost dogs, the occasional potluck.',
    members: '87', loc: 'Pine Ridge, Austin', tag: 'Neighborhood', color: H.rhino, bg: '#E1E6EE', avatar: '#4A5F78' },
  { name: 'Afrofuturist Ecologies', purpose: 'Black-led ecological stewardship, land return and speculative design.',
    members: '512', loc: 'Distributed', tag: 'Learning', color: H.proposalPurple, bg: H.proposalPurpleSoft, avatar: '#5B3E8A' },
  { name: 'Ridgewood Co-op', purpose: 'A worker-owned food co-op in Queens — 4,200 member-owners strong.',
    members: '4,212', loc: 'Queens, NY', tag: 'Co-op', color: H.projectOrange, bg: H.projectOrangeSoft, avatar: '#B85A1A' },
];

function GroupCard({ g, dense, theme }) {
  const t = theme;
  return (
    <div style={{
      width: dense ? 240 : 280, flex: 'none',
      background: '#fff', borderRadius: t.cardRadius,
      padding: dense ? 16 : 20,
      border: t.cardBorder || 'none',
      boxShadow: t.cardShadow || '0 2px 12px rgba(40,50,70,0.06), 0 0 0 1px rgba(40,50,70,0.04)',
      fontFamily: t.sans,
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: t.avatarSquare ? 10 : '50%',
        background: g.avatar, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 700, fontSize: 16,
      }}>{g.name.split(' ').map(w => w[0]).slice(0,2).join('')}</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: H.rhino, lineHeight: 1.25, letterSpacing: -0.2 }}>{g.name}</div>
      <div style={{ fontSize: 13, color: 'rgba(44,64,89,0.7)', lineHeight: 1.4,
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{g.purpose}</div>
      <div style={{ fontSize: 11.5, color: 'rgba(44,64,89,0.55)', display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="3.5" r="2"/><path d="M1 9c0-2 2-3 4-3s4 1 4 3"/></svg>
        {g.members} members · {g.loc}
      </div>
      <div style={{
        alignSelf: 'flex-start', fontSize: 10.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.6,
        padding: '4px 8px', borderRadius: 999, background: g.bg, color: g.color,
      }}>{g.tag}</div>
    </div>
  );
}

// ——————————————————————————————————————————————
// STYLIZED MAP (SVG — watershed-style, with pulsing dots)
// ——————————————————————————————————————————————
function StylizedMap({ width = 1280, height = 460, theme }) {
  const t = theme;
  // hand-placed pin locations (as percent)
  const pins = [
    { x: 0.18, y: 0.42, c: t.accent, label: 'Common Good Missoula' },
    { x: 0.22, y: 0.58, c: H.projectOrange },
    { x: 0.12, y: 0.35, c: H.requestTeal },
    { x: 0.28, y: 0.51, c: t.accent },
    { x: 0.35, y: 0.62, c: H.discussBlue },
    { x: 0.40, y: 0.45, c: H.proposalPurple },
    { x: 0.48, y: 0.55, c: H.projectOrange },
    { x: 0.52, y: 0.38, c: t.accent },
    { x: 0.58, y: 0.47, c: H.requestTeal },
    { x: 0.63, y: 0.61, c: H.eventRed },
    { x: 0.71, y: 0.43, c: t.accent },
    { x: 0.76, y: 0.52, c: H.discussBlue },
    { x: 0.82, y: 0.35, c: H.projectOrange },
    { x: 0.85, y: 0.58, c: H.proposalPurple },
    { x: 0.92, y: 0.48, c: t.accent },
    { x: 0.15, y: 0.68, c: H.requestTeal },
    { x: 0.44, y: 0.73, c: t.accent },
    { x: 0.67, y: 0.32, c: H.discussBlue },
  ];

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice"
         style={{ display: 'block', background: t.mapBg || '#0E3A2E' }}>
      <defs>
        <radialGradient id="mapGrad" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor={t.mapCenter || '#14543F'} />
          <stop offset="100%" stopColor={t.mapEdge || '#0A2F24'} />
        </radialGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="3" /></filter>
      </defs>
      <rect width={width} height={height} fill="url(#mapGrad)" />

      {/* Watershed outlines — organic curves evoking river basins */}
      <g stroke={t.mapLine || 'rgba(255,255,255,0.12)'} strokeWidth="1.2" fill="none">
        <path d={`M 0 ${height*0.3} Q ${width*0.2} ${height*0.25} ${width*0.35} ${height*0.42} T ${width*0.7} ${height*0.38} T ${width} ${height*0.32}`} />
        <path d={`M 0 ${height*0.55} Q ${width*0.15} ${height*0.6} ${width*0.3} ${height*0.52} T ${width*0.6} ${height*0.58} T ${width} ${height*0.54}`} />
        <path d={`M 0 ${height*0.75} Q ${width*0.25} ${height*0.7} ${width*0.5} ${height*0.78} T ${width} ${height*0.72}`} />
        <path d={`M ${width*0.12} 0 Q ${width*0.18} ${height*0.25} ${width*0.14} ${height*0.5} T ${width*0.2} ${height}`} />
        <path d={`M ${width*0.45} 0 Q ${width*0.5} ${height*0.3} ${width*0.48} ${height*0.55} T ${width*0.52} ${height}`} />
        <path d={`M ${width*0.78} 0 Q ${width*0.82} ${height*0.28} ${width*0.8} ${height*0.5} T ${width*0.85} ${height}`} />
      </g>
      {/* coastline/region shapes */}
      <g fill={t.mapShape || 'rgba(255,255,255,0.04)'}>
        <path d={`M 0 ${height*0.35} Q ${width*0.1} ${height*0.3} ${width*0.18} ${height*0.4} Q ${width*0.25} ${height*0.48} ${width*0.22} ${height*0.6} Q ${width*0.18} ${height*0.7} ${width*0.08} ${height*0.68} Q 0 ${height*0.6} 0 ${height*0.5} Z`} />
        <path d={`M ${width*0.55} ${height*0.2} Q ${width*0.7} ${height*0.22} ${width*0.78} ${height*0.38} Q ${width*0.82} ${height*0.55} ${width*0.7} ${height*0.62} Q ${width*0.58} ${height*0.58} ${width*0.55} ${height*0.45} Z`} />
      </g>

      {/* pin dots */}
      {pins.map((p, i) => (
        <g key={i} transform={`translate(${p.x * width}, ${p.y * height})`}>
          <circle r="12" fill={p.c} opacity="0.25" style={{ animation: `hyloPulse ${2.6 + (i%4)*0.3}s ease-in-out ${i*0.15}s infinite` }} />
          <circle r="5" fill={p.c} />
          <circle r="5" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.9" />
        </g>
      ))}
      <style>{`
        @keyframes hyloPulse {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.8); opacity: 0.05; }
        }
      `}</style>
    </svg>
  );
}

// ——————————————————————————————————————————————
// CAPABILITY ICONS
// ——————————————————————————————————————————————
function CapIcon({ kind, color, size = 22 }) {
  const s = { width: size, height: size, fill: 'none', stroke: color, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (kind) {
    case 'chat': return <svg {...s} viewBox="0 0 24 24"><path d="M4 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-5 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>;
    case 'event': return <svg {...s} viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case 'exchange': return <svg {...s} viewBox="0 0 24 24"><path d="M4 7h14l-3-3M20 17H6l3 3"/></svg>;
    case 'project': return <svg {...s} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 9h8M8 13h6M8 17h4"/></svg>;
    case 'vote': return <svg {...s} viewBox="0 0 24 24"><path d="M5 12l4 4 10-10"/><rect x="3" y="4" width="18" height="16" rx="2" opacity="0.3"/></svg>;
    case 'pin': return <svg {...s} viewBox="0 0 24 24"><path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    default: return null;
  }
}

const CAPABILITIES = [
  { key: 'chat', title: 'Conversations & Chat', color: H.discussBlue, bg: H.discussBlueSoft,
    body: 'Threaded discussions for depth. Chat rooms for speed. Cross-post to multiple groups at once — Hylo\u2019s superpower.' },
  { key: 'event', title: 'Conversations & Chat', color: H.eventRed, bg: H.eventRedSoft,
    body: 'Events & Gatherings' },
  { key: 'exchange', title: 'Requests & Offers', color: H.requestTeal, bg: H.requestTealSoft,
    body: 'Post what you need. Share what you can give. Every completed exchange is a deposit in your community\u2019s trust account.' },
  { key: 'project', title: 'Projects', color: H.projectOrange, bg: H.projectOrangeSoft,
    body: 'Coordinate real work with tasks, roles and timelines. Make contribution visible so effort is recognized, not invisible.' },
  { key: 'vote', title: 'Proposals & Decisions', color: H.proposalPurple, bg: H.proposalPurpleSoft,
    body: 'Polls, proposals and structured decision-making. When your group is ready to govern together, the tools are here.' },
  { key: 'pin', title: 'Map & Place', color: H.forest, bg: H.forestLight,
    body: 'See your community spatially. Find what\u2019s near you. Organize around the landscapes, watersheds and neighborhoods you share.' },
];

// ——————————————————————————————————————————————
// JOURNEY — single continuous diagram (all 5 stages at once)
// Horizontal ribbon w/ 5 stations, drawn line connects them
// ——————————————————————————————————————————————
const JOURNEY_STEPS = [
  { key: 'connect', title: 'Connect', color: H.chatCyan,
    body: 'Conversations, shared events, a place to find each other. Familiar tools, one home.' },
  { key: 'support', title: 'Support', color: H.requestTeal,
    body: 'Members post what they need and what they can offer. Every fulfilled exchange builds trust.' },
  { key: 'organize', title: 'Organize', color: H.projectOrange,
    body: 'Projects, working groups and events with real follow-through. Coordinate complex work.' },
  { key: 'decide', title: 'Decide', color: H.proposalPurple,
    body: 'Proposals, participatory budgets, collective funding. Govern shared resources — together.' },
  { key: 'weave', title: 'Weave', color: H.forest,
    body: 'Connect with neighboring groups. Coordinate at the scale of a watershed or a movement.' },
];

// ——————————————————————————————————————————————
// FOOTER
// ——————————————————————————————————————————————
function Footer({ theme }) {
  const t = theme;
  const fg = t.fg || H.rhino;
  const mutedR = t.mutedRgb || '44,64,89';
  return (
    <div style={{
      background: t.footerBg || '#fff', borderTop: `1px solid ${H.athensDark}`,
      padding: '56px 60px 40px', fontFamily: t.sans, color: fg,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 56, textAlign: 'center' }}>
        {t.logoSrc ? (
          <img src={t.logoSrc} alt="Hylo" style={{ height: 40, display: 'block', marginBottom: 18 }} />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
            <HyloLogo size={24} color={fg} />
            <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.4 }}>Hylo</span>
          </div>
        )}
        <div style={{ fontSize: 14, lineHeight: 1.6, color: `rgba(${mutedR},0.7)`, maxWidth: 480 }}>
          A commons-owned platform for groups that want to build trust, coordinate real work, and grow together.
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, marginBottom: 48 }}>
        {[
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
        ].map(col => (
          <div key={col.h}>
            <div style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8, color: `rgba(${mutedR},0.6)`, marginBottom: 14 }}>{col.h}</div>
            {col.l.map(x => {
              const label = typeof x === 'string' ? x : x.t;
              const ext = typeof x === 'object' && x.ext;
              return (
                <div key={label} style={{ fontSize: 13.5, marginBottom: 10, color: fg, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span>{label}</span>
                  {ext && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.3" style={{ opacity: 0.5, flex: 'none' }}>
                      <path d="M3 7L7 3" />
                      <path d="M4 3h3v3" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: `1px solid ${H.athensDark}`, fontSize: 12.5, color: `rgba(${mutedR},0.6)` }}>
        <div>Built with care by Terran Collective · Open source · MIT License</div>
        <div style={{ display: 'flex', gap: 20 }}>
          <span>GitHub</span><span>Mastodon</span><span>Bluesky</span><span>Newsletter</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HyloLogo, Nav, GroupCard, StylizedMap, CapIcon, Footer, GROUPS, CAPABILITIES, JOURNEY_STEPS });
