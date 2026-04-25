// v5-get-involved.jsx — Hylo Get Involved page (V5 system)
// Follows spec: hylo-get-involved-page-spec.md
// Reuses VE_Nav, VE_THEME, HYLO tokens. Footer mirrored from v5-about.

(function () {
  const H = window.HYLO;
  const T = window.VE_THEME;
  const RHINO = H.rhino;          // '#2C4059'
  const RHINO_RGB = '44,64,89';
  const FOREST = H.forest;        // '#087736' — primary
  const ATHENS = H.athensGray;    // '#FAFBFC'
  const ATHENS_DARK = H.athensDark;

  // Shared helpers
  const maxBody = 720;
  const maxMid = 900;

  const sectionHeader = {
    fontSize: 24, fontWeight: 700, letterSpacing: -0.5,
    color: RHINO, margin: 0, lineHeight: 1.15,
  };
  const smallLabel = {
    fontSize: 13, fontWeight: 500, textTransform: 'uppercase',
    letterSpacing: 0.6, color: `rgba(${RHINO_RGB},0.5)`,
    margin: 0,
  };
  const bodyProse = {
    fontSize: 16, lineHeight: 1.7, margin: 0,
    color: `rgba(${RHINO_RGB},0.82)`, textWrap: 'pretty',
  };
  const intro = {
    fontSize: 16, lineHeight: 1.65, margin: 0,
    color: `rgba(${RHINO_RGB},0.75)`, maxWidth: 640,
    textWrap: 'pretty',
  };
  const textLink = {
    display: 'inline-flex', alignItems: 'center', gap: 4,
    fontSize: 14, fontWeight: 500, color: FOREST,
    textDecoration: 'none', cursor: 'pointer',
  };

  // ——————— Icons ———————
  function Icon({ kind, color, size = 28 }) {
    const c = color;
    const common = {
      width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
      stroke: c, strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round',
    };
    if (kind === 'people') {
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3"/>
          <circle cx="17" cy="10" r="2.5"/>
          <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5"/>
          <path d="M15 18c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5"/>
        </svg>
      );
    }
    if (kind === 'calendar') {
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15" rx="2"/>
          <path d="M3.5 10h17M8 3v4M16 3v4"/>
        </svg>
      );
    }
    if (kind === 'heart') {
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z"/>
        </svg>
      );
    }
    return null;
  }

  // ——————— Section 1 · Hero ———————
  function Hero() {
    return (
      <section style={{
        background: H.cream,
        padding: '160px 40px 60px', // 100px visual top + 60px nav overlap
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto' }}>
          <h1 style={{
            fontSize: 52, fontWeight: 700, letterSpacing: -1.2,
            lineHeight: 1.05, margin: 0, color: RHINO,
          }}>Get involved</h1>
          <p style={{
            fontSize: 18, lineHeight: 1.6, margin: '24px 0 0',
            color: `rgba(${RHINO_RGB},0.80)`, maxWidth: 640,
            textWrap: 'pretty',
          }}>
            Hylo is built in the open by a small team and a growing community.
            Whether you have five minutes or five hours a month, there&rsquo;s a
            real way to contribute — and everything you put in makes the platform
            better for everyone.
          </p>
        </div>
      </section>
    );
  }

  // ——————— Section 2 · Quick Actions ———————
  const QUICK_ACTIONS = [
    {
      icon: 'people', color: FOREST,
      title: 'Join Building Hylo',
      body: 'Our open community for everyone shaping Hylo\u2019s future. Product news, upcoming designs, feature discussions, and direct access to the team.',
      cta: 'Join on Hylo',
    },
    {
      icon: 'calendar', color: H.eventRed,
      title: 'Come to a community call',
      body: 'Monthly open calls to connect, ask questions, and share input with the team and wider community. No preparation needed.',
      cta: 'See upcoming calls',
    },
    {
      icon: 'heart', color: H.proposalPurple,
      title: 'Make a contribution',
      body: 'Hylo is funded by the people who use it. A small recurring contribution — any amount — helps keep the platform free for everyone.',
      cta: 'Contribute',
    },
  ];

  function QuickActions() {
    return (
      <section style={{
        background: '#fff', padding: '60px 40px 80px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxMid, margin: '0 auto' }}>
          <div style={smallLabel}>Start here</div>
          <div style={{
            marginTop: 16,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}>
            {QUICK_ACTIONS.map(a => (
              <div key={a.title} style={{
                background: ATHENS, borderRadius: 4, padding: 24,
                display: 'flex', flexDirection: 'column', textAlign: 'center',
                alignItems: 'center',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: `${a.color}15`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon kind={a.icon} color={a.color} size={24} />
                </div>
                <div style={{
                  marginTop: 14, fontSize: 17, fontWeight: 500, color: RHINO,
                }}>{a.title}</div>
                <p style={{
                  marginTop: 8, fontSize: 14, lineHeight: 1.55,
                  color: `rgba(${RHINO_RGB},0.70)`, textWrap: 'pretty',
                  flex: 1,
                }}>{a.body}</p>
                <a style={{ ...textLink, marginTop: 16 }}>
                  {a.cta} <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 3 · For Community Organizers ———————
  const ORGANIZER_OFFERINGS = [
    {
      title: 'Hylo Community Organizers',
      body: 'A community of practice for group stewards to connect, share what\u2019s working, and learn from each other. Access resources, best practices, and direct conversation with Hylo\u2019s community team.',
      cta: 'Join the group',
      avatar: true,
    },
    {
      title: 'Guides and documentation',
      body: 'Our documentation covers everything from setting up your first group to advanced stewardship practices — agreements, moderation, engagement strategies, and how to help your community grow.',
      cta: 'Read the guides',
    },
    {
      title: 'Hands-on stewardship support',
      body: 'Need more than documentation? The Hylo team offers direct support: onboarding help, governance design, facilitation guidance, and ongoing coaching for groups navigating complex coordination. We\u2019ve spent years learning what makes online communities thrive.',
      cta: 'Learn about support options',
    },
  ];

  function OrganizerAvatar() {
    // Small visual nod to "the actual Hylo group" — three overlapping circles.
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 32, height: 32, borderRadius: '50%',
            background: i === 0 ? FOREST : i === 1 ? H.requestTeal : H.forestLight,
            border: '2px solid #fff',
            marginLeft: i === 0 ? 0 : -10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: i === 2 ? FOREST : '#fff',
            fontSize: 12, fontWeight: 600,
          }}>{['C','O','G'][i]}</div>
        ))}
      </div>
    );
  }

  function Organizers() {
    return (
      <section style={{
        background: ATHENS, padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={sectionHeader}>For community organizers</h2>
          <p style={{ ...intro, marginTop: 16 }}>
            Running a community is real work — and doing it well online takes
            practice. Whether you&rsquo;re just getting started or you&rsquo;ve
            been at it for years, here&rsquo;s how Hylo supports you.
          </p>

          <div style={{ marginTop: 32 }}>
            {ORGANIZER_OFFERINGS.map((o, i) => (
              <div key={o.title}>
                {i > 0 && (
                  <div style={{
                    height: 1, background: ATHENS_DARK,
                    margin: '32px 0',
                  }} />
                )}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: 32, alignItems: 'center',
                }}>
                  <div>
                    <h3 style={{
                      fontSize: 18, fontWeight: 500, color: RHINO,
                      margin: 0, lineHeight: 1.3,
                    }}>{o.title}</h3>
                    <p style={{
                      marginTop: 10, fontSize: 15, lineHeight: 1.65,
                      color: `rgba(${RHINO_RGB},0.70)`,
                      margin: '10px 0 0', textWrap: 'pretty',
                    }}>{o.body}</p>
                  </div>
                  <div style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'flex-end', gap: 12, minWidth: 200,
                  }}>
                    {o.avatar && <OrganizerAvatar />}
                    <a style={textLink}>
                      {o.cta} <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 4 · For Builders ———————
  const BUILDER_CARDS = [
    {
      title: 'Contribute code',
      body: 'Browse the codebase, pick up issues, or submit pull requests. Hylo is built with React, React Native, Node.js, and GraphQL.',
      cta: 'View on GitHub',
    },
    {
      title: 'Design',
      body: 'Help improve the user experience. Review upcoming designs in the Building Hylo group and share feedback or propose improvements.',
      cta: 'Join Building Hylo',
    },
    {
      title: 'Research and writing',
      body: 'Help with user research, case studies, documentation, or content. Good writing makes the whole project more accessible.',
      cta: 'Get in touch',
    },
    {
      title: 'Report issues',
      body: 'Found a bug or something confusing? Report it through the in-app Feedback menu or file an issue on GitHub.',
      cta: 'File an issue',
    },
  ];

  function Builders() {
    return (
      <section style={{
        background: '#fff', padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={sectionHeader}>For builders</h2>
          <p style={{ ...intro, marginTop: 16 }}>
            Hylo is open source and always looking for contributors. Over 700
            people have contributed to the codebase. Whether you write code,
            design interfaces, research communities, or write documentation,
            there&rsquo;s a way to plug in.
          </p>

          <div style={{
            marginTop: 32,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
          }}>
            {BUILDER_CARDS.map(c => (
              <div key={c.title} style={{
                background: '#fff',
                border: `1px solid ${ATHENS_DARK}`,
                borderRadius: 4, padding: 20,
              }}>
                <h3 style={{
                  fontSize: 16, fontWeight: 500, color: RHINO,
                  margin: 0, lineHeight: 1.3,
                }}>{c.title}</h3>
                <p style={{
                  marginTop: 8, fontSize: 14, lineHeight: 1.6,
                  color: `rgba(${RHINO_RGB},0.70)`,
                  margin: '8px 0 0', textWrap: 'pretty',
                }}>{c.body}</p>
                <div style={{ marginTop: 12 }}>
                  <a style={textLink}>
                    {c.cta} <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 5 · Partner with Hylo ———————
  function Partner() {
    return (
      <section style={{
        background: ATHENS, padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{
          maxWidth: maxMid, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '55fr 40fr',
          gap: 40, alignItems: 'start',
        }}>
          {/* Left column */}
          <div>
            <h2 style={sectionHeader}>Partner with us</h2>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{
                fontSize: 16, lineHeight: 1.6,
                color: `rgba(${RHINO_RGB},0.80)`,
                margin: 0, textWrap: 'pretty',
              }}>
                Hylo&rsquo;s strongest features were built in partnership with
                organizations that needed them. Every partnership starts with a
                real coordination challenge — a group that needs tools their
                current platform can&rsquo;t provide. We co-design the solution
                together, and then make it available to every group on Hylo.
              </p>
              <p style={{
                fontSize: 16, lineHeight: 1.6,
                color: `rgba(${RHINO_RGB},0.80)`,
                margin: 0, textWrap: 'pretty',
              }}>
                Past partners include the Planetary Health Alliance, Prosocial
                World, Salmon Nation, and many others. Their work shaped
                Hylo&rsquo;s nested groups, cross-group coordination, map
                features, and governance tools.
              </p>
              <p style={{
                fontSize: 16, lineHeight: 1.6,
                color: `rgba(${RHINO_RGB},0.80)`,
                margin: 0, textWrap: 'pretty',
              }}>
                If your organization has a coordination challenge and the
                resources to address it together, we&rsquo;d like to hear from
                you.
              </p>
            </div>
          </div>

          {/* Right column — contact card */}
          <div style={{
            background: '#fff', borderRadius: 4, padding: 24,
            boxShadow: '0 2px 14px rgba(44,64,89,0.06)',
            border: `1px solid rgba(44,64,89,0.05)`,
            alignSelf: 'start',
          }}>
            <div style={{
              fontSize: 18, fontWeight: 500, color: RHINO, lineHeight: 1.3,
            }}>Let&rsquo;s build together.</div>
            <p style={{
              marginTop: 10, fontSize: 14, lineHeight: 1.6,
              color: `rgba(${RHINO_RGB},0.70)`,
              margin: '10px 0 0', textWrap: 'pretty',
            }}>
              Reach out to explore what a partnership could look like for your
              organization.
            </p>
            <div style={{ marginTop: 16 }}>
              <a href="mailto:hello@hylo.com" style={{
                fontSize: 15, fontWeight: 500,
                color: FOREST, textDecoration: 'none',
              }}>hello@hylo.com</a>
            </div>
            <div style={{ marginTop: 16 }}>
              <a style={{
                display: 'inline-block',
                background: FOREST, color: '#fff',
                padding: '10px 18px', borderRadius: 4,
                fontSize: 14, fontWeight: 500,
                textDecoration: 'none', cursor: 'pointer',
              }}>Start a conversation →</a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 6 · Ecosystem ———————
  function Ecosystem() {
    return (
      <section style={{
        background: '#fff', padding: '40px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 20, fontWeight: 700, letterSpacing: -0.3,
            color: RHINO, margin: 0, lineHeight: 1.2,
          }}>The wider ecosystem</h2>
          <p style={{
            marginTop: 12, fontSize: 15, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.75)`,
            margin: '12px 0 0', textWrap: 'pretty',
          }}>
            Hylo is part of a growing ecosystem of tools and platforms building
            toward an interoperable, values-aligned technology commons. The
            Collaborative Technology Alliance, which Hylo co-stewards, brings
            together builders working on social technology in service to a
            thriving world. If you&rsquo;re building aligned tools and want to
            explore interoperability, collaboration, or shared standards, this
            is the place.
          </p>
          <div style={{ marginTop: 16 }}>
            <a style={textLink}>
              Join the Collaborative Technology Alliance <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 7 · Closing ———————
  function Closing() {
    return (
      <section style={{
        background: H.cream, padding: '60px 40px 80px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 24, fontWeight: 700, letterSpacing: -0.3,
            color: RHINO, margin: 0, lineHeight: 1.2,
          }}>Every contribution makes the commons stronger.</h2>
          <p style={{
            marginTop: 16, fontSize: 16, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.70)`,
            margin: '16px 0 0', textWrap: 'pretty',
          }}>
            Hylo is sustained by the people who use it and care about it.
            Whether you join a call, file a bug, share your skills, or
            contribute a dollar a month — it all matters. Thank you for being
            here.
          </p>
        </div>
      </section>
    );
  }

  // ——————— Footer ———————
  function GIFooter() {
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
                <div style={{
                  fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase',
                  letterSpacing: 0.8, color: `rgba(${RHINO_RGB},0.6)`,
                  marginBottom: 14,
                }}>{col.h}</div>
                {col.l.map(x => {
                  const label = typeof x === 'string' ? x : x.t;
                  const ext = typeof x === 'object' && x.ext;
                  return (
                    <div key={label} style={{
                      fontSize: 13.5, marginBottom: 10, color: fg, cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}>
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
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingTop: 24, borderTop: `1px solid ${ATHENS_DARK}`,
            fontSize: 12.5, color: `rgba(${RHINO_RGB},0.6)`,
          }}>
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
  function GetInvolvedPage() {
    const Nav = window.VE_Nav;
    return (
      <div style={{ background: '#fff', color: RHINO, fontFamily: T.sans }}
           data-screen-label="v5 Get involved">
        <Nav accent={FOREST} />
        <Hero />
        <QuickActions />
        <Organizers />
        <Builders />
        <Partner />
        <Ecosystem />
        <Closing />
        <GIFooter />
      </div>
    );
  }

  window.GetInvolvedPage = GetInvolvedPage;
})();
