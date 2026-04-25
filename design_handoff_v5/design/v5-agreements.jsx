// v5-agreements.jsx — Hylo "How we agree to be together" (V5 system)
// Follows hylo-agreements-page-spec.md

(function () {
  const H = window.HYLO;
  const T = window.VE_THEME;
  const RHINO = H.rhino;
  const RHINO_RGB = '44,64,89';
  const FOREST = H.forest;
  const ATHENS = H.athensGray;
  const ATHENS_DARK = H.athensDark;
  const AMARANTH = '#EE4266';
  const WARNING = '#FFB949';

  // ——————— Shared styles ———————
  const bodyProse = {
    fontSize: 16, lineHeight: 1.7, margin: 0,
    color: `rgba(${RHINO_RGB},0.8)`, textWrap: 'pretty',
  };
  const sectionH = {
    fontSize: 28, fontWeight: 700, letterSpacing: -0.5,
    color: RHINO, margin: 0, lineHeight: 1.15,
  };
  const sectionIntro = {
    marginTop: 16, fontSize: 16, lineHeight: 1.6,
    color: `rgba(${RHINO_RGB},0.75)`, maxWidth: 640,
    textWrap: 'pretty',
  };

  // Small inline checkmark
  function Check({ color = FOREST }) {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={color}
           strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
           style={{ flex: 'none', marginTop: 4 }}>
        <path d="M2.5 7.5L5.5 10.5L11.5 3.5"/>
      </svg>
    );
  }

  // ——————— Section 1 · Header ———————
  function Header() {
    return (
      <section style={{
        background: H.cream, padding: '160px 40px 80px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h1 style={{
            fontSize: 52, fontWeight: 700, letterSpacing: -1.2,
            lineHeight: 1.05, margin: 0, color: RHINO,
          }}>
            How we agree to be together
          </h1>
          <p style={{
            marginTop: 28, fontSize: 19, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.8)`, maxWidth: 640,
            textWrap: 'pretty',
          }}>
            Hylo is a shared space. Like any shared space, it works because the people
            in it agree on a few things: how to treat each other, what to do when
            something goes wrong, and what kind of community we&rsquo;re building
            together. These are our values, our agreements, and our code of conduct.
            They apply to everyone — including us.
          </p>

          {/* Table of contents */}
          <div style={{
            marginTop: 40, display: 'flex', flexWrap: 'wrap',
            gap: 10,
          }}>
            {[
              ['Values', 'values'],
              ['Agreements', 'agreements'],
              ['Code of conduct', 'conduct'],
              ['Enforcement', 'enforcement'],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} style={{
                fontSize: 13, color: `rgba(${RHINO_RGB},0.7)`,
                padding: '7px 12px',
                border: `1px solid rgba(${RHINO_RGB},0.14)`,
                borderRadius: 6,
                background: 'rgba(255,255,255,0.6)',
                fontWeight: 500, cursor: 'pointer', textDecoration: 'none',
              }}>{label}</a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 2 · Values ———————
  const VALUES = [
    {
      name: 'Stewardship',
      def: 'We treat Hylo — and the communities, data, and relationships on it — as shared resources to be cared for, not owned or exploited. We build for the long term, not for quick returns.',
      commits: [
        "Hylo\u2019s development is guided by its purpose, not profit. We will never sell user data or optimize for addictive engagement.",
        "We are building toward a governance structure where the people who use Hylo have real authority over how it\u2019s run.",
        "We communicate openly and honestly with our users about decisions that affect them.",
      ],
    },
    {
      name: 'Co-Creation',
      def: 'Hylo is built in partnership with the communities that use it. We listen first, design together, and make what we build available to everyone on the platform.',
      commits: [
        'Every major feature is designed through participatory processes with real groups working on real problems.',
        'Our code is open source. We use open standards and protocols wherever possible so Hylo can work alongside other tools.',
        'Before building something new, we look for existing solutions that already work and integrate them.',
      ],
    },
    {
      name: 'Wellbeing',
      def: "Technology shapes behavior. Hylo is designed to support the health of its members and their communities — not to capture attention, generate anxiety, or optimize for engagement at the expense of people\u2019s time and peace of mind.",
      commits: [
        'We design for meaningful interaction, not compulsive use. No dark patterns, no infinite scroll, no manufactured urgency.',
        'We take responsibility for the impact our technology has on the people and communities using it.',
        "We treat the people on Hylo as whole human beings, not \u201cusers\u201d to be optimized.",
      ],
    },
    {
      name: 'Justice',
      def: 'Coordination infrastructure is never neutral. It either concentrates power or distributes it. We build Hylo to support equity, repair harm, and reduce structural injustice — in how the platform works, in who has voice, and in what kinds of organizing it makes possible.',
      commits: [
        'We build inclusive and accessible digital spaces. We follow Design Justice principles.',
        'We learn from Indigenous knowledge systems and historically marginalized communities, with respect and accountability, not extraction.',
        'We work toward equitable compensation and recognition among everyone who builds and maintains Hylo.',
      ],
    },
    {
      name: 'Adaptation',
      def: 'We expect to get things wrong and learn from it. Hylo is a living system — we build in feedback loops, listen to what isn\u2019t working, and evolve in response to real use rather than rigid plans.',
      commits: [
        'We incorporate feedback from communities into every phase of our design process.',
        'We move at the speed of trust — making sure there\u2019s always time for care, relationship, and doing things well.',
        'We hold Hylo as something that grows and changes. Governance, features, and practices are all subject to revision when they need to be.',
      ],
    },
    {
      name: 'Agency',
      def: "People and groups should control their own experience, their own data, and their own participation. Hylo doesn\u2019t use opaque algorithms, doesn\u2019t harvest attention, and doesn\u2019t lock communities in.",
      commits: [
        'No black-box algorithms. You control your notifications, your feed, and what you see.',
        'We never share personal data without informed consent.',
        'We work to make Hylo usable across ability, language, culture, and bandwidth — because agency requires access.',
      ],
    },
  ];

  function Values() {
    return (
      <section id="values" style={{
        background: '#fff', padding: '100px 40px', fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={sectionH}>Our values</h2>
          <p style={sectionIntro}>
            These values guide how we build Hylo and how we ask everyone on the platform
            to show up. They&rsquo;re not aspirational slogans — they&rsquo;re working
            principles we hold ourselves to and invite you to hold us to as well.
          </p>

          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 40 }}>
            {VALUES.map((v, i) => (
              <div key={v.name} style={{
                display: 'grid', gridTemplateColumns: '56px 1fr', gap: 24,
                alignItems: 'start',
              }}>
                {/* Index + accent line */}
                <div style={{ textAlign: 'right', paddingTop: 4 }}>
                  <div style={{
                    fontSize: 13, fontWeight: 600, color: FOREST,
                    letterSpacing: 1.2, textTransform: 'uppercase',
                  }}>{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div style={{
                  borderLeft: `3px solid rgba(8,119,54,0.3)`,
                  paddingLeft: 24,
                }}>
                  <h3 style={{
                    fontSize: 22, fontWeight: 700, margin: 0, color: RHINO,
                    letterSpacing: -0.3,
                  }}>{v.name}</h3>
                  <p style={{
                    marginTop: 10, fontSize: 16, lineHeight: 1.6,
                    color: `rgba(${RHINO_RGB},0.8)`, textWrap: 'pretty',
                  }}>{v.def}</p>

                  <div style={{
                    marginTop: 18, fontSize: 12, fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: 0.8,
                    color: `rgba(${RHINO_RGB},0.55)`,
                  }}>Our commitments</div>
                  <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none' }}>
                    {v.commits.map((c, j) => (
                      <li key={j} style={{
                        display: 'flex', gap: 10, alignItems: 'flex-start',
                        marginTop: j === 0 ? 0 : 10,
                        fontSize: 15, lineHeight: 1.55,
                        color: `rgba(${RHINO_RGB},0.72)`,
                      }}>
                        <Check />
                        <span style={{ textWrap: 'pretty' }}>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 3 · Platform Agreements ———————
  const AGREEMENTS = [
    {
      t: "Contribute, don\u2019t just consume.",
      d: 'Hylo works because people show up for each other — sharing ideas, responding to requests, joining projects. Bring what you have. Ask for what you need.',
    },
    {
      t: 'Be kind and constructive.',
      d: 'Talk to people the way you would face to face. Respect differing viewpoints. When you disagree, stay curious. When something goes wrong, take responsibility.',
    },
    {
      t: 'Respect the space.',
      d: "Follow the code of conduct below. Honor your group\u2019s agreements. Flag harmful content when you see it. Take care with other people\u2019s stories and information.",
    },
    {
      t: 'Help make it better.',
      d: "If something isn\u2019t working — in your group or on the platform — say so. Suggest improvements. Report bugs. This is a commons, and it gets better when everyone tends it.",
    },
  ];

  function Agreements() {
    return (
      <section id="agreements" style={{
        background: ATHENS, padding: '100px 40px', fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ ...sectionH, fontSize: 26 }}>
            When you join Hylo, here&rsquo;s what we agree on.
          </h2>
          <p style={sectionIntro}>
            These aren&rsquo;t terms buried in a legal document. They&rsquo;re a simple
            social contract between you and everyone else on the platform. By using
            Hylo, you&rsquo;re agreeing to these four things:
          </p>

          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {AGREEMENTS.map((a, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 4, padding: 24,
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20,
                alignItems: 'start',
              }}>
                <div style={{
                  fontSize: 32, fontWeight: 700, lineHeight: 1,
                  color: `rgba(8,119,54,0.4)`, letterSpacing: -1,
                }}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: RHINO, lineHeight: 1.4 }}>
                    <strong style={{ fontWeight: 600 }}>{a.t}</strong>{' '}
                    <span style={{ fontWeight: 400, color: `rgba(${RHINO_RGB},0.78)` }}>
                      {a.d}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 4 · Code of Conduct ———————
  const GOOD = [
    {
      h: 'Take care of each other',
      accent: H.requestTeal,
      items: [
        'Post requests when you need help. Post offers when you can give it.',
        'Reach out to someone who might be struggling — a check-in goes a long way.',
        'Communicate the way you would in person: kind, direct, and constructive.',
        'Take breaks from screens. Move your body. This platform is a tool, not a destination.',
      ],
    },
    {
      h: 'Build together',
      accent: H.projectOrange,
      items: [
        "Start or join a project in service to your group\u2019s goals.",
        "Comment on others\u2019 posts — build on their ideas rather than just scrolling past.",
        'Co-host an event. Organize a meetup. Move things into the real world when you can.',
        'Connect your group with other aligned groups on Hylo for cross-group collaboration.',
      ],
    },
    {
      h: 'Govern well',
      accent: H.proposalPurple,
      items: [
        'Follow through on commitments you make to your group.',
        'Participate in proposals and decisions when they affect you.',
        "If you see something that isn\u2019t working, name it constructively. Suggest a better approach.",
        "If your group\u2019s purpose or agreements need to evolve, help make that happen through legitimate process.",
      ],
    },
    {
      h: 'Help Hylo grow',
      accent: FOREST,
      items: [
        'Report bugs through the Feedback & Support menu.',
        'Join the Building Hylo group and share ideas for the platform.',
        "Contribute code, design, research, or writing if you\u2019re able.",
        'Consider supporting Hylo financially — every contribution stays in the project.',
      ],
    },
  ];

  const NOT_OK = [
    {
      h: 'Harassment and abuse',
      items: [
        'No threats, intimidation, pressure, stalking, or unwanted attention — public or private.',
        'No characterizing or mocking people based on inherent traits: race, ethnicity, gender, gender identity, sexual orientation, disability, national origin, or medical condition.',
        'No inciting, threatening, or glorifying violence against any person or group.',
        'No promoting or encouraging suicide or self-harm.',
      ],
    },
    {
      h: 'Privacy violations',
      items: [
        "No publishing someone\u2019s private information (address, contact details, photos) without their explicit consent.",
        'No sharing intimate images or videos of someone without their consent.',
        'No threatening to expose private information.',
      ],
    },
    {
      h: 'Manipulation and deception',
      items: [
        'No impersonating individuals, groups, or organizations.',
        'No using Hylo to manipulate elections or civic processes, suppress participation, or spread deliberate misinformation about how to participate.',
        'No artificial amplification, spam, or platform manipulation.',
        "No accessing other people\u2019s accounts or data without authorization.",
      ],
    },
    {
      h: 'Illegal activity',
      items: [
        'No facilitating illegal transactions or promoting illegal activities.',
        'Zero tolerance for child sexual exploitation of any kind.',
        'No violating copyright or trademark.',
      ],
    },
    {
      h: 'Spam and promotion',
      items: [
        'No advertising, promotion, or link-dropping without a genuine invitation for others to participate.',
        'No cross-posting promotional content into groups or the public commons without adding real value.',
      ],
    },
  ];

  function CategoryBlock({ h, accent, items, icon }) {
    return (
      <div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          paddingLeft: 12, borderLeft: `3px solid ${accent}66`,
        }}>
          <h4 style={{
            fontSize: 17, fontWeight: 500, margin: 0, color: RHINO,
          }}>{h}</h4>
        </div>
        <ul style={{ margin: '14px 0 0 15px', padding: 0, listStyle: 'none' }}>
          {items.map((it, i) => (
            <li key={i} style={{
              display: 'flex', gap: 10, alignItems: 'flex-start',
              marginTop: i === 0 ? 0 : 10, fontSize: 14.5, lineHeight: 1.55,
              color: `rgba(${RHINO_RGB},0.72)`,
            }}>
              {icon === 'x' ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                     stroke={AMARANTH} strokeWidth="2" strokeLinecap="round"
                     style={{ marginTop: 5, flex: 'none', opacity: 0.75 }}>
                  <path d="M2.5 2.5l7 7M9.5 2.5l-7 7"/>
                </svg>
              ) : (
                <div style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: accent, flex: 'none', marginTop: 7,
                }} />
              )}
              <span style={{ textWrap: 'pretty' }}>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function CodeOfConduct() {
    return (
      <section id="conduct" style={{
        background: '#fff', padding: '100px 40px', fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={sectionH}>Code of conduct</h2>
          <p style={sectionIntro}>
            This code of conduct applies everywhere on Hylo — in groups, in direct
            messages, in the public commons. Group stewards may add their own
            agreements on top of these, but these are the baseline.
          </p>

          {/* Part A */}
          <h3 style={{
            marginTop: 48, fontSize: 20, fontWeight: 500, color: RHINO,
            letterSpacing: -0.2,
          }}>How to be a good community member</h3>
          <p style={{
            marginTop: 10, fontSize: 15, color: `rgba(${RHINO_RGB},0.7)`,
            lineHeight: 1.55, textWrap: 'pretty',
          }}>
            None of this is mandatory (except treating people with respect). But these
            are the kinds of behaviors that make Hylo communities thrive:
          </p>
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 32 }}>
            {GOOD.map((g) => <CategoryBlock key={g.h} {...g} />)}
          </div>

          {/* Part B */}
          <h3 style={{
            marginTop: 64, fontSize: 20, fontWeight: 500, color: RHINO,
            letterSpacing: -0.2,
          }}>What is not allowed on Hylo</h3>
          <p style={{
            marginTop: 10, fontSize: 15, color: `rgba(${RHINO_RGB},0.7)`,
            lineHeight: 1.55, textWrap: 'pretty',
          }}>
            These rules apply everywhere on the platform. If you see content that
            violates them, flag it immediately. Group stewards and Hylo platform
            stewards will respond.
          </p>
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 32 }}>
            {NOT_OK.map((g) => <CategoryBlock key={g.h} {...g} accent={AMARANTH} icon="x" />)}
          </div>

          {/* Public commons examples */}
          <h3 style={{
            marginTop: 56, fontSize: 17, fontWeight: 500, color: RHINO,
            letterSpacing: -0.2,
          }}>Additional guidelines for public posts</h3>
          <p style={{
            marginTop: 10, fontSize: 15, color: `rgba(${RHINO_RGB},0.75)`,
            lineHeight: 1.55, textWrap: 'pretty',
          }}>
            Hylo has a public stream and a Group Explorer where anyone can discover
            communities and conversations. To keep this space useful and collaborative,
            public posts should include a genuine invitation for others to participate.
            This space is for cross-pollination, not promotion.
          </p>
          <div style={{
            marginTop: 20, display: 'grid',
            gridTemplateColumns: '1fr 1fr', gap: 16,
          }}>
            {/* Good */}
            <div style={{
              background: `rgba(0,199,157,0.07)`,
              border: `1px solid rgba(0,199,157,0.2)`,
              borderRadius: 4, padding: 20,
            }}>
              <div style={{
                fontSize: 13, fontWeight: 600, textTransform: 'uppercase',
                letterSpacing: 0.8, color: H.requestTeal, marginBottom: 14,
              }}>Good examples</div>
              {[
                "\u201CI\u2019m hosting a permaculture workshop — what topics are you most interested in learning about?\u201D",
                "\u201CHere\u2019s an article I found about watershed governance. What do you think about this approach?\u201D",
                "\u201CI\u2019m offering a legal clinic for cooperatives. Can you share this with co-ops in your community?\u201D",
              ].map((e, i) => (
                <p key={i} style={{
                  margin: i === 0 ? 0 : '12px 0 0',
                  fontSize: 14, color: `rgba(${RHINO_RGB},0.78)`,
                  fontStyle: 'italic', lineHeight: 1.5,
                }}>{e}</p>
              ))}
            </div>
            {/* Not OK */}
            <div style={{
              background: `rgba(238,66,102,0.06)`,
              border: `1px solid rgba(238,66,102,0.2)`,
              borderRadius: 4, padding: 20,
            }}>
              <div style={{
                fontSize: 13, fontWeight: 600, textTransform: 'uppercase',
                letterSpacing: 0.8, color: AMARANTH, marginBottom: 14,
              }}>Not OK</div>
              {[
                "\u201CRereve Health Family Healthcare is a patient-focused medical facility. Call now!\u201D",
                "\u201CTaxi service to Prague! Taxi service to Berlin!\u201D",
                "[Video title] [Video link] [Hashtags] [No other commentary]",
              ].map((e, i) => (
                <p key={i} style={{
                  margin: i === 0 ? 0 : '12px 0 0',
                  fontSize: 14, color: `rgba(${RHINO_RGB},0.78)`,
                  fontStyle: 'italic', lineHeight: 1.5,
                }}>{e}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 5 · Enforcement ———————
  const STEPS = [
    { t: 'Correction', accent: WARNING,
      when: "Inappropriate language or behavior that\u2019s unwelcome but not severe.",
      what: "A private message from a steward explaining what happened and why it\u2019s not OK. A public apology may be requested." },
    { t: 'Warning', accent: WARNING,
      when: "A single incident that\u2019s more serious, or a repeated minor issue.",
      what: 'A formal warning with clear consequences for continued behavior. The person is put on notice.' },
    { t: 'Temporary Ban', accent: `${AMARANTH}99`,
      when: 'Serious violations or a sustained pattern of harmful behavior.',
      what: 'Temporary removal from the community or platform for a set period. A mediated conversation or conflict resolution process may be offered.' },
    { t: 'Permanent Ban', accent: AMARANTH,
      when: 'A pattern of violations, a single very serious violation, or refusal to participate in accountability.',
      what: 'Permanent removal from the community or platform.' },
  ];

  function Enforcement() {
    return (
      <section id="enforcement" style={{
        background: ATHENS, padding: '100px 40px', fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ ...sectionH, fontSize: 26 }}>
            What happens when agreements are broken
          </h2>
          <p style={sectionIntro}>
            We believe in graduated response — matching the consequence to the severity
            and pattern of the behavior. The goal is always to repair harm and restore
            trust, not to punish. But some behaviors require removal to protect the
            community.
          </p>
          <p style={{
            marginTop: 16, fontSize: 15, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.7)`, maxWidth: 720,
            textWrap: 'pretty',
          }}>
            In groups, stewards are responsible for enforcing the code of conduct within
            their space. For the public commons and platform-level issues, Hylo&rsquo;s
            platform stewards handle enforcement. Anyone can flag content that violates
            these agreements, and all reports are reviewed promptly.
          </p>

          {/* Steps */}
          <div style={{
            marginTop: 40, display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', gap: 12,
          }}>
            {STEPS.map((s, i) => (
              <div key={s.t} style={{
                background: '#fff', borderRadius: 4, padding: 20,
                borderTop: `3px solid ${s.accent}`,
                display: 'flex', flexDirection: 'column', gap: 10,
                boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
              }}>
                <div style={{
                  fontSize: 11, fontWeight: 600, letterSpacing: 1,
                  textTransform: 'uppercase', color: `rgba(${RHINO_RGB},0.5)`,
                }}>Step {i + 1}</div>
                <div style={{ fontSize: 16, fontWeight: 500, color: RHINO, letterSpacing: -0.2 }}>
                  {s.t}
                </div>
                <div>
                  <div style={{
                    fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
                    letterSpacing: 0.6, color: `rgba(${RHINO_RGB},0.55)`, marginTop: 2,
                  }}>When</div>
                  <div style={{
                    marginTop: 4, fontSize: 13, lineHeight: 1.5,
                    color: `rgba(${RHINO_RGB},0.68)`, textWrap: 'pretty',
                  }}>{s.when}</div>
                </div>
                <div>
                  <div style={{
                    fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
                    letterSpacing: 0.6, color: `rgba(${RHINO_RGB},0.55)`,
                  }}>What happens</div>
                  <div style={{
                    marginTop: 4, fontSize: 13.5, lineHeight: 1.5,
                    color: `rgba(${RHINO_RGB},0.78)`, textWrap: 'pretty',
                  }}>{s.what}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{
            marginTop: 40, fontSize: 13, color: `rgba(${RHINO_RGB},0.5)`,
          }}>
            This enforcement structure is adapted from the{' '}
            <a style={{ color: FOREST, cursor: 'pointer' }}>Contributor Covenant</a>, version 2.1.
          </p>
          <p style={{
            marginTop: 14, fontSize: 14, color: `rgba(${RHINO_RGB},0.65)`,
            lineHeight: 1.55,
          }}>
            If you experience or witness a violation, flag the content directly on the
            platform. You can also reach Hylo&rsquo;s stewardship team at{' '}
            <a style={{ color: FOREST, cursor: 'pointer' }}>hello@hylo.com</a>.
          </p>
        </div>
      </section>
    );
  }

  // ——————— Section 6 · Closing ———————
  function Closing() {
    return (
      <section style={{
        background: H.cream, padding: '80px 40px 100px',
        fontFamily: T.sans, color: RHINO, textAlign: 'center',
      }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <p style={{
            fontSize: 17, lineHeight: 1.65,
            color: `rgba(${RHINO_RGB},0.78)`, margin: 0,
            textWrap: 'pretty',
          }}>
            These agreements are a living document. As Hylo grows and the communities
            on it evolve, so will these commitments. If you think something here should
            change,{' '}
            <a style={{ color: FOREST, fontWeight: 500, cursor: 'pointer' }}>tell us</a>
            {' '}— or better yet, start a discussion in the{' '}
            <a style={{ color: FOREST, fontWeight: 500, cursor: 'pointer' }}>Building Hylo</a>
            {' '}group.
          </p>
        </div>
      </section>
    );
  }

  // ——————— Footer ———————
  function AgreementsFooter() {
    const cols = [
      { h: 'About Hylo', l: ['Our Purpose & Vision', 'How We Work: Participatory Design', 'Hylo\u2019s Stewardship', 'Team'] },
      { h: 'Using Hylo', l: [
        { t: 'Member Guide', ext: true }, { t: 'Steward Guide', ext: true },
        { t: 'Documentation', ext: true }, { t: 'Community Stewardship Support', ext: true },
        { t: 'Code', ext: true },
      ] },
      { h: 'Participate', l: ['Join our open-source community', 'Attend a community call', 'Partner with us', 'Contribute to Hylo'] },
      { h: 'Agreements', l: ['Hylo Values', 'Code of Conduct', 'Hylo Platform Agreements', 'Terms of Use', 'Privacy Policy'] },
    ];
    return (
      <footer style={{ background: '#fff', borderTop: `1px solid ${ATHENS_DARK}`, padding: '64px 40px 40px', fontFamily: T.sans, color: RHINO }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
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
                    <div key={label} style={{ fontSize: 13.5, marginBottom: 10, color: RHINO, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span>{label}</span>
                      {ext && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.3" style={{ opacity: 0.5 }}>
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
          <div style={{ marginTop: 28, fontSize: 12, color: `rgba(${RHINO_RGB},0.4)`, lineHeight: 1.6, maxWidth: 900 }}>
            Hylo emerged from unceded Chochenyo Ohlone territory and now receives contributions from around the world.
          </div>
        </div>
      </footer>
    );
  }

  function AgreementsPage() {
    const Nav = window.VE_Nav;
    return (
      <div style={{ background: '#fff', color: RHINO, fontFamily: T.sans }}
           data-screen-label="v5 Agreements">
        <Nav accent={FOREST} />
        <Header />
        <Values />
        <Agreements />
        <CodeOfConduct />
        <Enforcement />
        <Closing />
        <AgreementsFooter />
      </div>
    );
  }

  window.AgreementsPage = AgreementsPage;
})();
