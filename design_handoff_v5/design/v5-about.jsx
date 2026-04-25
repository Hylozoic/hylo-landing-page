// v5-about.jsx — Hylo About page (V5 system)
// Follows spec: hylo-about-page-spec.md
// Reuses VE_Nav (with hamburger), VE_THEME, HYLO tokens, shared Footer.

(function () {
  const H = window.HYLO;
  const T = window.VE_THEME;
  const BLACK = window.VE_BLACK; // '#2A2723'
  const RHINO = H.rhino;         // '#2C4059'
  const RHINO_RGB = '44,64,89';
  const FOREST = H.forest;       // '#087736'

  // Shared spacing / type helpers
  const maxBody = 720;
  const maxWide = 1000;

  const ATHENS = H.athensGray;   // '#FAFBFC'
  const ATHENS_DARK = H.athensDark;

  // ——————— Section 1 · Who we are ———————
  function WhoWeAre() {
    return (
      <section style={{
        background: H.cream,
        padding: '160px 40px 60px', // 100px top + 64px nav overlap ≈ 160
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto' }}>
          <h1 style={{
            fontSize: 52, fontWeight: 700, letterSpacing: -1.2,
            lineHeight: 1.05, margin: 0, color: RHINO,
          }}>About Hylo</h1>
          <p style={{
            fontSize: 20, lineHeight: 1.6, margin: '28px 0 0',
            color: `rgba(${RHINO_RGB},0.82)`, maxWidth: 640, fontWeight: 400,
            textWrap: 'pretty',
          }}>
            Hylo is a coordination platform for groups that are trying to do something
            together — and need better tools to do it. We build software for communities
            that want to organize, support each other, make decisions, and take collective
            action. We&rsquo;re open source, non-profit, and community-governed.
          </p>
          <p style={{
            fontSize: 16, lineHeight: 1.65, margin: '24px 0 0',
            color: `rgba(${RHINO_RGB},0.72)`, maxWidth: 640,
            textWrap: 'pretty',
          }}>
            Hylo is maintained by Terran Collective, a small team based in the San
            Francisco Bay Area. We&rsquo;ve been building this since 2012 — first as a
            tool for connecting purpose-driven people, now as coordination infrastructure
            for communities organizing around shared places, resources, and goals.
            Hundreds of groups use Hylo today, from neighborhood mutual aid networks to
            global learning communities to bioregional organizing hubs.
          </p>
        </div>
      </section>
    );
  }

  // ——————— Section 2 · What we believe ———————
  function WhatWeBelieve() {
    return (
      <section style={{
        background: '#fff', padding: '100px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto' }}>
          <h2 style={sectionHeader}>Why we build this</h2>
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={bodyProse}>
              The biggest challenges facing communities today — climate disruption,
              economic precarity, eroding trust — are coordination problems at their root.
              People want to help. Organizations are trying. But the tools we have either
              fragment our efforts across a dozen apps or lock us into platforms designed
              to extract attention rather than support action.
            </p>
            <p style={bodyProse}>
              We believe that when people can actually see each other, support each other,
              and make decisions together, they become capable of things that no top-down
              program or market incentive can replicate. A neighborhood that knows how to
              coordinate mutual aid before a disaster hits. A watershed where land stewards
              talk to each other across property lines. A city where residents have a real
              voice in how shared resources are allocated.
            </p>
            <p style={bodyProse}>
              This doesn&rsquo;t happen automatically. It requires trust, and trust
              requires practice. Hylo is designed to support that practice — starting with
              simple conversation and mutual support, and growing with groups as they
              develop the capacity for more complex coordination, collective governance,
              and shared stewardship.
            </p>
          </div>

          <p style={{
            fontSize: 20, fontWeight: 500, color: RHINO,
            marginTop: 36, lineHeight: 1.4, letterSpacing: -0.3,
          }}>
            If Hylo works, a watershed can govern itself.
          </p>

          <a style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginTop: 40, fontSize: 14, color: FOREST,
            fontWeight: 500, cursor: 'pointer', textDecoration: 'none',
          }}>
            Read the Hylo Whitepaper
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M2 6h7M6 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    );
  }

  // ——————— Section 3 · How we build ———————
  function HowWeBuild() {
    return (
      <section style={{
        background: ATHENS, padding: '100px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{
          maxWidth: maxWide, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 56, alignItems: 'start',
        }}>
          <div style={{ maxWidth: 480 }}>
            <h2 style={sectionHeader}>Built with the communities who use it</h2>
            <p style={{ ...bodyProse, marginTop: 20 }}>
              Every major feature in Hylo was designed in partnership with real groups
              working on real problems. We don&rsquo;t build what we think communities
              need — we listen, co-design, and build what they tell us they need. Then
              we make it available to everyone on the platform.
            </p>
            <p style={{ ...bodyProse, marginTop: 20 }}>
              Our design partners have included the Planetary Health Alliance, Prosocial
              World, Salmon Nation, and dozens of local organizing groups. Monthly
              community calls, co-creation sessions, and the Building Hylo group on Hylo
              itself keep our roadmap accountable to the people who depend on it.
            </p>
            <div style={{
              marginTop: 28, display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 14, color: `rgba(${RHINO_RGB},0.6)`,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6,
                background: `rgba(${RHINO_RGB},0.08)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, fontWeight: 700, letterSpacing: 0.4, color: RHINO,
              }}>NTEN</div>
              <span>2026 Pizzigati Prize winner — NTEN&rsquo;s award for open-source public interest technology.</span>
            </div>
          </div>

          {/* Visual placeholder: "Building Hylo" group screenshot */}
          <div style={{
            background: '#fff', borderRadius: 4,
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            border: `1px solid ${ATHENS_DARK}`,
            overflow: 'hidden', aspectRatio: '4 / 3',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Fake group header */}
            <div style={{
              padding: '14px 16px', borderBottom: `1px solid ${ATHENS_DARK}`,
              display: 'flex', alignItems: 'center', gap: 10, background: '#fff',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 6,
                background: FOREST, color: '#fff',
                fontSize: 14, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>H</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: RHINO }}>Building Hylo</div>
                <div style={{ fontSize: 11, color: `rgba(${RHINO_RGB},0.55)` }}>612 members · Public</div>
              </div>
            </div>
            <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
              {[
                { c: FOREST,           t: 'Krisha S.',  k: 'Discussion',   b: 'Notes from today\u2019s co-creation call — we heard loud and clear that…' },
                { c: H.proposalPurple, t: 'Tom W.',     k: 'Proposal',     b: 'Moving mobile notifications to opt-in by default for new members.' },
                { c: H.projectOrange,  t: 'Clare B.',   k: 'Project',      b: 'Participatory roadmap: Q2 co-design sprints — sign-up open.' },
              ].map((p, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 10, padding: '10px 12px', borderRadius: 6,
                  background: ATHENS, border: `1px solid ${ATHENS_DARK}`,
                }}>
                  <div style={{
                    width: 4, borderRadius: 2, background: p.c, flex: 'none',
                  }} />
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 2 }}>
                      <span style={{ fontSize: 11.5, fontWeight: 600, color: RHINO }}>{p.t}</span>
                      <span style={{ fontSize: 10, color: p.c, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.4 }}>{p.k}</span>
                    </div>
                    <div style={{
                      fontSize: 12, color: `rgba(${RHINO_RGB},0.72)`, lineHeight: 1.45,
                      overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box',
                      WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                    }}>{p.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 4 · How we're governed ———————
  function HowWereGoverned() {
    const circles = [
      ['General',     'Strategy and coherence'],
      ['Product',     'Direction and design'],
      ['Development', 'Technical implementation'],
      ['Community',   'Relationships and care'],
      ['Fundraising', 'Resourcing and sustainability'],
    ];
    return (
      <section style={{
        background: '#fff', padding: '100px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto' }}>
          <h2 style={sectionHeader}>A technology commons</h2>
          <p style={{ ...bodyProse, marginTop: 20 }}>
            Hylo is not owned by investors and never will be. It&rsquo;s a fiscally
            sponsored non-profit, built on open-source code under the Apache 2.0 license.
            We&rsquo;re working toward a permanent structure — likely a purpose-locked
            nonprofit with cooperative governance — that ensures Hylo can never be
            captured, sold, or repurposed against the communities it serves.
          </p>
          <p style={{ ...bodyProse, marginTop: 20 }}>
            We govern ourselves using sociocracy — a system of distributed authority where
            decisions are made by the people closest to the work, through consent rather
            than top-down control. Our team operates through interconnected circles, each
            with a clear domain.
          </p>

          {/* Circle cards */}
          <div style={{
            marginTop: 40, display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)', gap: 12,
          }}>
            {circles.map(([name, domain]) => (
              <div key={name} style={{
                border: `1px solid ${ATHENS_DARK}`, borderRadius: 4,
                padding: 16, textAlign: 'center', background: '#fff',
              }}>
                {/* Ring ornament */}
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  border: `2px solid ${FOREST}`,
                  margin: '0 auto 10px',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', inset: 6, borderRadius: '50%',
                    background: `${FOREST}`, opacity: 0.12,
                  }} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 500, color: RHINO, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 12, color: `rgba(${RHINO_RGB},0.6)`, lineHeight: 1.4 }}>{domain}</div>
              </div>
            ))}
          </div>

          {/* Commitments */}
          <p style={{
            marginTop: 40, fontSize: 15, lineHeight: 1.7,
            color: `rgba(${RHINO_RGB},0.78)`, maxWidth: 640,
            textWrap: 'pretty',
          }}>
            <strong style={{ color: RHINO, fontWeight: 600 }}>
              What this means in practice:
            </strong>{' '}
            Your data belongs to you. Our code is public. Our finances are transparent.
            Communities can leave Hylo and take their data with them. And we&rsquo;re
            building toward a future where the people who use Hylo have real governance
            authority over how it&rsquo;s built and run — not just advisory input.
          </p>
        </div>
      </section>
    );
  }

  // ——————— Section 5 · Team ———————
  const TEAM = [
    { name: 'Tibet Sprague', role: 'Director of Technology',
      bio: "Co-founder of Terran Collective and Hylo\u2019s technical architect. Tibet has been building tools for cooperative coordination for over a decade. He also stewards the Collaborative Technology Alliance. Brown University CS.",
      color: H.forest, initials: 'TS' },
    { name: 'Clare Brodeur', role: 'Director of Product',
      bio: "A technologist and community organizer with a decade of experience mobilizing communities through technology. Clare leads Hylo\u2019s participatory design process, working directly with groups to co-create the tools they need. ProSocial facilitator. UVA Political Science.",
      color: H.discussBlue, initials: 'CB' },
    { name: 'Aaron Brodeur', role: 'Director of Design',
      bio: "Systems designer and entrepreneur whose work in social technology, solar energy, and distributed governance has reached millions. Aaron leads Hylo\u2019s interface and experience design, and contributes to the Holochain ecosystem through Lightningrod Labs.",
      color: H.projectOrange, initials: 'AB' },
    { name: 'Krisha Subramanian', role: 'Community Lead',
      bio: "Background in business development with deep roots in regenerative living and social justice. Krisha manages Hylo\u2019s community relationships and stewards a 50-hectare regenerative land project in Costa Rica\u2019s cloud forest.",
      color: H.proposalPurple, initials: 'KS' },
    { name: 'Tom Watson', role: 'Senior Software Engineer',
      bio: "Based in Canberra, Australia. Tom leads Hylo\u2019s mobile development and thinks seriously about what \u201cregenerative culture\u201d means when it stops being a slogan and starts being a design constraint.",
      color: H.requestTeal, initials: 'TW' },
    { name: 'Yasmine El Baggari', role: 'Community Steward',
      bio: "Originally from Morocco, now in San Francisco. Yasmine has worked with the World Bank, the US State Department, and launched Voyaj to foster cross-cultural connection. Harvard Graduate School of Education. She brings global perspective to Hylo\u2019s community work.",
      color: H.eventRed, initials: 'YE' },
  ];

  function Team() {
    return (
      <section style={{
        background: ATHENS, padding: '100px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxWide, margin: '0 auto' }}>
          <h2 style={sectionHeader}>The team</h2>
          <p style={{ ...bodyProse, marginTop: 20, maxWidth: 640 }}>
            Hylo is built by Terran Collective — a small, distributed team that practices
            the same coordination principles we build into the platform. We operate on
            shared governance, mutual support, and a commitment to building technology
            that outlasts any one of us.
          </p>

          <div style={{
            marginTop: 48, display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
          }}>
            {TEAM.map((m) => (
              <div key={m.name}>
                {/* Placeholder avatar (spec calls for real photos — TBD per open question 1) */}
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: m.color, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24, fontWeight: 600, letterSpacing: -0.5,
                  boxShadow: 'inset 0 -8px 24px rgba(0,0,0,0.08)',
                }}>{m.initials}</div>
                <div style={{ marginTop: 12, fontSize: 16, fontWeight: 500, color: RHINO }}>
                  {m.name}
                </div>
                <div style={{ marginTop: 2, fontSize: 13, color: FOREST }}>{m.role}</div>
                <p style={{
                  marginTop: 8, fontSize: 14, lineHeight: 1.55,
                  color: `rgba(${RHINO_RGB},0.72)`, textWrap: 'pretty',
                }}>{m.bio}</p>
              </div>
            ))}
          </div>

          <p style={{
            marginTop: 28, fontSize: 12, color: `rgba(${RHINO_RGB},0.45)`,
            fontStyle: 'italic',
          }}>
            Avatars shown are placeholders — real team photos pending.
          </p>
        </div>
      </section>
    );
  }

  // ——————— Section 6 · Recognition & Partners ———————
  const FUNDERS = [
    'NoVo Foundation · Regional Futures Fund',
    '11th Hour Foundation',
    'Jeff Parrett · Rising Foundation',
  ];
  const ECOSYSTEM = [
    'Planetary Health Alliance', 'Prosocial World', 'Salmon Nation', 'OpenTEAM',
    'Regen Network', 'Bloom Network', 'Collaborative Technology Alliance',
    'Holomovement', 'Common Good Missoula',
  ];

  function Recognition() {
    return (
      <section style={{
        background: '#fff', padding: '100px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ ...sectionHeader, textAlign: 'center' }}>Partners and recognition</h2>

          {/* Award card */}
          <div style={{
            display: 'inline-block', marginTop: 28,
            maxWidth: 540, width: '100%',
            background: '#fff',
            border: `1px solid rgba(8,119,54,0.3)`,
            borderRadius: 4, padding: 24, textAlign: 'left',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 6, flex: 'none',
                background: H.forestLight, color: FOREST,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2h8v4a4 4 0 01-8 0V2z"/>
                  <path d="M4 3H2v2a3 3 0 003 3M16 3h2v2a3 3 0 01-3 3"/>
                  <path d="M8 12h4v2H8zM6 14h8v3H6z"/>
                </svg>
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.5, color: RHINO }}>
                <strong style={{ fontWeight: 600 }}>2026 Pizzigati Prize</strong> — NTEN&rsquo;s
                award for open-source technology serving the public interest.
              </div>
            </div>
          </div>

          {/* Funders */}
          <div style={{ marginTop: 56, textAlign: 'left' }}>
            <div style={subHeader}>Current partners and funders</div>
            <div style={{
              marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: '16px 32px',
              alignItems: 'center',
            }}>
              {FUNDERS.map((f) => (
                <div key={f} style={{
                  fontSize: 15, color: `rgba(${RHINO_RGB},0.72)`,
                  padding: '8px 14px', border: `1px solid ${ATHENS_DARK}`,
                  borderRadius: 4, background: ATHENS,
                }}>{f}</div>
              ))}
            </div>
          </div>

          {/* Ecosystem */}
          <div style={{ marginTop: 44, textAlign: 'left' }}>
            <div style={subHeader}>Ecosystem</div>
            <div style={{
              marginTop: 14, fontSize: 13, color: `rgba(${RHINO_RGB},0.55)`,
              lineHeight: 1.8,
            }}>
              {ECOSYSTEM.map((e, i) => (
                <React.Fragment key={e}>
                  <span style={{ cursor: 'pointer' }}>{e}</span>
                  {i < ECOSYSTEM.length - 1 && <span style={{ margin: '0 10px', opacity: 0.5 }}>·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 7 · Get involved ———————
  const ACTIONS = [
    { icon: 'people',   color: FOREST,             title: 'Bring your group',
      body: 'Set up your community on Hylo. It\u2019s free to start.',
      cta: 'Get started' },
    { icon: 'calendar', color: H.eventRed,         title: 'Attend a community call',
      body: 'Monthly calls open to everyone. See what\u2019s being built, share what you need.',
      cta: 'See upcoming calls' },
    { icon: 'code',     color: H.projectOrange,    title: 'Contribute to the codebase',
      body: 'Hylo is open source. Browse the code, file issues, submit PRs.',
      cta: 'View on GitHub' },
    { icon: 'heart',    color: H.proposalPurple,   title: 'Support the commons',
      body: 'Join Hylo Commons or make a contribution. Every dollar stays in the project.',
      cta: 'Learn more' },
  ];

  function ActionIcon({ kind, color }) {
    const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (kind === 'people') return <svg {...common}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5"/><path d="M15 18c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5"/></svg>;
    if (kind === 'calendar') return <svg {...common}><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>;
    if (kind === 'code') return <svg {...common}><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>;
    if (kind === 'heart') return <svg {...common}><path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z"/></svg>;
    return null;
  }

  function GetInvolved() {
    return (
      <section style={{
        background: H.cream, padding: '100px 40px 120px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 36, fontWeight: 700, letterSpacing: -0.8,
            color: RHINO, margin: 0, lineHeight: 1.1,
          }}>There&rsquo;s a place for you here.</h2>
          <p style={{
            marginTop: 16, fontSize: 16, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.72)`, maxWidth: 560, margin: '16px auto 0',
            textWrap: 'pretty',
          }}>
            Hylo is built in the open. Whether you want to bring your community,
            contribute code, attend a call, or just explore — here&rsquo;s where to start.
          </p>

          <div style={{
            marginTop: 40, display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, textAlign: 'left',
          }}>
            {ACTIONS.map((a) => (
              <div key={a.title} style={{
                background: '#fff', borderRadius: 4, padding: 24,
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                border: '1px solid rgba(44,64,89,0.06)',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: `${a.color}15`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  <ActionIcon kind={a.icon} color={a.color} />
                </div>
                <div style={{ marginTop: 16, fontSize: 17, fontWeight: 500, color: RHINO }}>
                  {a.title}
                </div>
                <p style={{
                  marginTop: 6, fontSize: 14, lineHeight: 1.55,
                  color: `rgba(${RHINO_RGB},0.7)`, textWrap: 'pretty',
                }}>{a.body}</p>
                <a style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  marginTop: 16, fontSize: 14, fontWeight: 500,
                  color: FOREST, cursor: 'pointer',
                }}>
                  {a.cta} <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Footer (about-specific, consistent with homepage tone) ———————
  function AboutFooter() {
    // Reuse menu sections from nav (same content)
    const cols = [
      { h: 'About Hylo', l: ['Our Purpose & Vision', 'How We Work: Participatory Design', 'Hylo\u2019s Stewardship', 'Team'] },
      { h: 'Using Hylo', l: [
        { t: 'Member Guide', ext: true },
        { t: 'Steward Guide', ext: true },
        { t: 'Documentation', ext: true },
        { t: 'Community Stewardship Support', ext: true },
        { t: 'Code', ext: true },
      ] },
      { h: 'Participate', l: ['Join our open-source community', 'Attend a community call', 'Partner with us', 'Contribute to Hylo'] },
      { h: 'Agreements', l: ['Hylo Values', 'Code of Conduct', 'Hylo Platform Agreements', 'Terms of Use', 'Privacy Policy'] },
    ];
    const fg = RHINO;
    return (
      <footer style={{
        background: '#fff', borderTop: `1px solid ${ATHENS_DARK}`,
        padding: '64px 40px 40px', fontFamily: T.sans, color: fg,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 40, display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src="assets/hylo-logo-dark.svg" alt="Hylo" style={{ height: 28 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, marginBottom: 48 }}>
            {cols.map(col => (
              <div key={col.h}>
                <div style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8, color: `rgba(${RHINO_RGB},0.6)`, marginBottom: 14 }}>{col.h}</div>
                {col.l.map(x => {
                  const label = typeof x === 'string' ? x : x.t;
                  const ext = typeof x === 'object' && x.ext;
                  return (
                    <div key={label} style={{ fontSize: 13.5, marginBottom: 10, color: fg, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span>{label}</span>
                      {ext && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.3" style={{ opacity: 0.5, flex: 'none' }}>
                          <path d="M3 7L7 3"/><path d="M4 3h3v3"/>
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: `1px solid ${ATHENS_DARK}`, fontSize: 12.5, color: `rgba(${RHINO_RGB},0.6)` }}>
            <div>Built with care by Terran Collective · Open source · MIT License</div>
            <div style={{ display: 'flex', gap: 20 }}>
              <span>GitHub</span><span>Mastodon</span><span>Bluesky</span><span>Newsletter</span>
            </div>
          </div>
          <div style={{
            marginTop: 28, fontSize: 12, color: `rgba(${RHINO_RGB},0.4)`,
            lineHeight: 1.6, maxWidth: 900,
          }}>
            Hylo emerged from unceded Chochenyo Ohlone territory and now receives
            contributions from around the world.
          </div>
        </div>
      </footer>
    );
  }

  // ——————— Page composition ———————
  // Shared text styles
  const sectionHeader = {
    fontSize: 28, fontWeight: 700, letterSpacing: -0.5,
    color: RHINO, margin: 0, lineHeight: 1.15,
  };
  const bodyProse = {
    fontSize: 16, lineHeight: 1.7, margin: 0,
    color: `rgba(${RHINO_RGB},0.82)`, textWrap: 'pretty',
  };
  const subHeader = {
    fontSize: 13, fontWeight: 600, textTransform: 'uppercase',
    letterSpacing: 1, color: `rgba(${RHINO_RGB},0.6)`,
  };

  function AboutPage() {
    const Nav = window.VE_Nav;
    return (
      <div style={{ background: '#fff', color: RHINO, fontFamily: T.sans }}
           data-screen-label="v5 About">
        <Nav accent={FOREST} />
        <WhoWeAre />
        <WhatWeBelieve />
        <HowWeBuild />
        <HowWereGoverned />
        <Team />
        <Recognition />
        <GetInvolved />
        <AboutFooter />
      </div>
    );
  }

  window.AboutPage = AboutPage;
})();
