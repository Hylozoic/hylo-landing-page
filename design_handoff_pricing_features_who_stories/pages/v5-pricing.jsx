// v5-pricing.jsx — Hylo Products & Pricing page (V5 system)
// Follows spec: hylo-products-pricing-spec.md
// Reuses VE_Nav, VE_THEME, HYLO tokens. Footer mirrored from sibling pages.
// Tone per spec: free is genuinely complete; paid is additive capacity, not
// a gated tier. No "most popular" badges, no countdowns, every price stated.

(function () {
  const H = window.HYLO;
  const T = window.VE_THEME;
  const RHINO = H.rhino;          // '#2C4059'
  const RHINO_RGB = '44,64,89';
  const FOREST = H.forest;        // '#087736' — primary accent
  const FOREST_LIGHT = H.forestLight; // '#E8F3EC'
  const PURPLE = '#9883E5';       // Medium Purple — Assistant + Blossom tier
  const PICTON = '#40A1DD';       // Picton Blue — Support Call tier
  const MOUNTAIN = '#23CC80';     // Mountain Meadow — Seed tier
  const ATHENS = H.athensGray;
  const ATHENS_DARK = H.athensDark;

  const maxNarrow = 720;
  const maxWide = 900;
  const maxTable = 1000;

  // ——————— Shared text styles ———————
  const sectionH = {
    fontSize: 28, fontWeight: 700, letterSpacing: -0.6,
    color: RHINO, margin: 0, lineHeight: 1.2,
  };
  const sectionH24 = {
    fontSize: 24, fontWeight: 700, letterSpacing: -0.4,
    color: RHINO, margin: 0, lineHeight: 1.2,
  };
  const oneLiner = {
    fontSize: 16, lineHeight: 1.6, margin: '12px 0 0',
    color: `rgba(${RHINO_RGB},0.65)`, textWrap: 'pretty',
  };
  const bodyProse = {
    fontSize: 16, lineHeight: 1.7, margin: 0,
    color: `rgba(${RHINO_RGB},0.80)`, textWrap: 'pretty',
  };

  // Header row: product name + price + optional launch badge
  function ProductHeader({ name, price, priceColor = FOREST, badge, badgeColor = FOREST }) {
    return (
      <div>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          gap: 16, flexWrap: 'wrap',
        }}>
          <h2 style={sectionH}>{name}</h2>
          <div style={{
            fontSize: 18, fontWeight: 500,
            color: priceColor,
            letterSpacing: -0.2,
          }}>{price}</div>
        </div>
        {badge && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 6 }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 10px',
              borderRadius: 999,
              background: badgeColor === PURPLE ? PURPLE : `rgba(8,119,54,0.85)`,
              color: '#fff',
              fontSize: 11, fontWeight: 500,
              letterSpacing: 0.6, textTransform: 'uppercase',
            }}>{badge}</span>
          </div>
        )}
      </div>
    );
  }

  function PrimaryButton({ href, children, color = FOREST, full = false }) {
    return (
      <a href={href} style={{
        display: full ? 'block' : 'inline-block',
        textAlign: 'center',
        background: color, color: '#fff',
        padding: '0 24px', height: 40, lineHeight: '40px',
        borderRadius: 6,
        fontSize: 14, fontWeight: 600,
        textDecoration: 'none',
        letterSpacing: 0.2,
        whiteSpace: 'nowrap',
        width: full ? '100%' : undefined,
      }}>{children}</a>
    );
  }

  // ——————— Section 1 · Hero ———————
  function Hero() {
    return (
      <section style={{
        background: H.cream,
        padding: '160px 40px 60px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxNarrow, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontSize: 52, fontWeight: 700, letterSpacing: -1.2,
            lineHeight: 1.05, margin: 0, color: RHINO, textWrap: 'balance',
          }}>
            Free to use. Built to last.
          </h1>
          <p style={{
            fontSize: 18, lineHeight: 1.6, margin: '24px auto 0',
            color: `rgba(${RHINO_RGB},0.80)`, maxWidth: 640,
            textWrap: 'pretty',
          }}>
            Hylo&rsquo;s full coordination platform is free — for every group,
            forever. Paid products exist for groups that need more capacity or
            hands-on support, and every dollar sustains an open-source commons.
            No trial periods. No feature gates. No bait and switch.
          </p>
        </div>
      </section>
    );
  }

  // ——————— Section 2 · Hylo Free ———————
  const FREE_FEATURES = [
    { name: 'Groups & subgroups', desc: 'Nested groups, peer groups, cross-group coordination' },
    { name: 'Discussions', desc: 'Threaded conversations with topics and tagging' },
    { name: 'Chat', desc: 'Real-time chat rooms within any group' },
    { name: 'Events', desc: 'In-person and virtual, with RSVPs and calendar sync' },
    { name: 'Requests & offers', desc: 'Mutual support infrastructure with completion tracking' },
    { name: 'Projects', desc: 'Coordinated work with tasks, roles, and timelines' },
    { name: 'Proposals & decisions', desc: 'Polls, proposals, quorum, structured decision-making' },
    { name: 'Agreements & roles', desc: 'Shared governance documents and role-based stewardship' },
    { name: 'Map & place', desc: 'Geographic groups, member map, place-based organizing' },
    { name: 'Member directory', desc: 'Profiles, skills, location, interests' },
    { name: 'Custom post types', desc: 'Configure the content types your group uses' },
    { name: 'Mobile apps', desc: 'iOS and Android, full-featured' },
    { name: 'Notifications', desc: 'Customizable — email, push, in-app, digest' },
    { name: 'Public commons', desc: 'Discover groups, share across the network' },
    { name: 'File sharing', desc: '1 GB of storage for documents, images, and resources' },
    { name: 'Moderation tools', desc: 'Flagging, steward controls, community agreements' },
    { name: 'Unlimited members', desc: 'No cap on group size' },
    { name: 'Unlimited groups', desc: 'Create as many groups and subgroups as you need' },
  ];

  function HyloFree() {
    return (
      <section style={{
        background: '#fff',
        padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxWide, margin: '0 auto' }}>
          <ProductHeader name="Hylo" price="Free forever" />
          <p style={oneLiner}>
            The full platform. Every feature that matters for community
            coordination. No credit card. No expiration.
          </p>

          {/* Feature grid */}
          <div style={{
            marginTop: 32,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}>
            {FREE_FEATURES.map((f, i) => (
              <div key={i} style={{
                padding: '14px 16px',
                background: ATHENS,
                borderRadius: 6,
                border: `1px solid ${ATHENS_DARK}`,
              }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: RHINO }}>
                  {f.name}
                </div>
                <div style={{
                  marginTop: 4, fontSize: 13, lineHeight: 1.4,
                  color: `rgba(${RHINO_RGB},0.60)`,
                }}>{f.desc}</div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p style={{
            margin: '32px auto 0', maxWidth: 560,
            fontSize: 15, lineHeight: 1.6, textAlign: 'center',
            color: `rgba(${RHINO_RGB},0.55)`,
          }}>
            This isn&rsquo;t a free trial. It&rsquo;s the product. We believe
            coordination infrastructure should be accessible to every community,
            regardless of budget.
          </p>
        </div>
      </section>
    );
  }

  // ——————— Section 3 · Hylo Pro ———————
  const PRO_CARDS = [
    { icon: 'cloud', name: 'Expanded storage',
      desc: 'Go well beyond the free 1 GB. More space for files, images, documents, and media — share what your community needs without worrying about limits.' },
    { icon: 'play', name: 'Video streaming',
      desc: 'Host and stream video directly within Hylo. Meetings, workshops, and community events without needing a separate platform.' },
    { icon: 'support', name: 'Priority support',
      desc: 'Faster response times from the Hylo team when your group needs help. Direct access for technical and stewardship questions.' },
    { icon: 'plug', name: 'API access & integrations',
      desc: 'Connect Hylo to your existing tools and workflows. Build custom integrations, automate processes, and extend the platform to fit your stack.' },
  ];

  function ProIcon({ kind, color }) {
    const props = {
      width: 24, height: 24, viewBox: '0 0 24 24',
      fill: 'none', stroke: color, strokeWidth: 1.8,
      strokeLinecap: 'round', strokeLinejoin: 'round',
    };
    if (kind === 'cloud') return (
      <svg {...props}><path d="M7 18a5 5 0 0 1 .5-9.96 6 6 0 0 1 11.5 1.46A4 4 0 0 1 18 18H7Z"/></svg>
    );
    if (kind === 'play') return (
      <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3V9Z" fill={color}/></svg>
    );
    if (kind === 'support') return (
      <svg {...props}><path d="M4 14v-3a8 8 0 0 1 16 0v3"/><path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Z"/><path d="M20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z"/><path d="M14 19a2 2 0 0 1-2 2h-1"/></svg>
    );
    if (kind === 'plug') return (
      <svg {...props}><path d="M9 2v4M15 2v4"/><path d="M5 8h14v4a7 7 0 0 1-14 0V8Z"/><path d="M12 19v3"/></svg>
    );
    return null;
  }

  function HyloPro() {
    return (
      <section style={{
        background: ATHENS,
        padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxWide, margin: '0 auto' }}>
          <ProductHeader
            name="Hylo Pro"
            price="$60/month per group"
            badge="Launching Summer 2026"
          />
          <p style={oneLiner}>
            For groups that need more capacity. Everything in Hylo Free, plus
            tools for organizations operating at scale.
          </p>

          <div style={{
            marginTop: 32,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {PRO_CARDS.map((c, i) => (
              <div key={i} style={{
                background: '#fff',
                borderRadius: 4,
                padding: 24,
                borderLeft: `4px solid rgba(8,119,54,0.30)`,
                boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
              }}>
                <ProIcon kind={c.icon} color={FOREST} />
                <div style={{
                  marginTop: 8, fontSize: 17, fontWeight: 500, color: RHINO,
                }}>{c.name}</div>
                <div style={{
                  marginTop: 8, fontSize: 14, lineHeight: 1.6,
                  color: `rgba(${RHINO_RGB},0.70)`,
                }}>{c.desc}</div>
              </div>
            ))}
          </div>

          <p style={{
            margin: '32px auto 0', maxWidth: 500,
            fontSize: 16, lineHeight: 1.6, textAlign: 'center',
            color: `rgba(${RHINO_RGB},0.70)`,
          }}>
            <strong style={{ color: RHINO }}>$60/month per group.</strong>{' '}
            One price, every member included. Launching Summer 2026.
          </p>
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <PrimaryButton href="#waitlist-pro">Join the Pro waitlist</PrimaryButton>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 4 · Hylo Whitelabel ———————
  const WL_INCLUDED = [
    'Dedicated instance under your domain',
    'Full visual customization — your brand, your themes',
    'All Hylo platform features',
    'Ongoing updates from core platform development',
    'Setup and migration support from the Hylo team',
    'Optional: custom feature development (priced separately)',
  ];

  function CheckIcon({ color = FOREST, size = 12 }) {
    return (
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none"
           style={{ flexShrink: 0, marginTop: 5 }}>
        <path d="m2 6 3 3 5-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  function HyloWhitelabel() {
    return (
      <section style={{
        background: '#fff',
        padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{
          maxWidth: maxWide, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.375fr) minmax(0, 1fr)',
          gap: 32, alignItems: 'start',
        }} className="wl-grid">
          {/* Left column */}
          <div>
            <ProductHeader
              name="Hylo Whitelabel"
              price="$100/month"
              badge="Launching Summer 2026"
            />

            <div style={{ marginTop: 24, display: 'grid', gap: 16 }}>
              <p style={bodyProse}>
                Some organizations need Hylo&rsquo;s coordination infrastructure
                under their own brand — their domain, their identity, their
                experience. Hylo Whitelabel is a dedicated deployment of the
                platform, configured for your organization.
              </p>
              <p style={bodyProse}>
                Your community gets the full power of Hylo&rsquo;s coordination
                tools — groups, governance, mutual support, map, cross-group
                coordination — inside an environment that looks and feels
                entirely like yours. Your brand, your colors, your domain.
              </p>
              <p style={bodyProse}>
                Because Hylo is open source, whitelabel deployments benefit
                from ongoing platform development while maintaining full
                independence. You&rsquo;re not locked into a vendor relationship —
                you&rsquo;re building on a commons.
              </p>
            </div>

            <div style={{ marginTop: 24, display: 'grid', gap: 8 }}>
              {WL_INCLUDED.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 10, alignItems: 'flex-start',
                  fontSize: 14, lineHeight: 1.5,
                  color: `rgba(${RHINO_RGB},0.70)`,
                }}>
                  <CheckIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column · CTA card */}
          <div style={{ position: 'sticky', top: 100 }}>
            <div style={{
              background: '#fff',
              borderRadius: 4,
              padding: 32,
              border: `1px solid ${ATHENS_DARK}`,
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
            }}>
              <div style={{ fontSize: 18, fontWeight: 500, color: RHINO }}>
                $100/month.
              </div>
              <div style={{
                marginTop: 4, fontSize: 14, lineHeight: 1.6,
                color: `rgba(${RHINO_RGB},0.65)`,
              }}>
                Your brand. Your domain. Full platform.
              </div>
              <div style={{
                marginTop: 12, fontSize: 14, lineHeight: 1.6,
                color: `rgba(${RHINO_RGB},0.65)`,
              }}>
                Launching Summer 2026. Join the waitlist to reserve your
                deployment.
              </div>

              <div style={{ marginTop: 20 }}>
                <PrimaryButton href="#waitlist-whitelabel" full>
                  Join the Whitelabel waitlist
                </PrimaryButton>
              </div>
              <div style={{
                marginTop: 12, fontSize: 13,
                color: `rgba(${RHINO_RGB},0.45)`,
              }}>
                Questions?{' '}
                <a href="mailto:hello@hylo.com" style={{
                  color: `rgba(${RHINO_RGB},0.65)`,
                  textDecoration: 'underline',
                }}>hello@hylo.com</a>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .wl-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    );
  }

  // ——————— Section 5 · Hylo Assistant ———————
  const ASSISTANT_CARDS = [
    { name: 'Full-context RAG across your group',
      desc: "The Assistant can search and reason across your group's entire history — posts, discussions, decisions, agreements, files. Members can ask it questions and get answers grounded in what your community has actually said and decided." },
    { name: 'Google Drive and document integration',
      desc: "Connect your group's Google Drive (and other document sources) so the Assistant can reference shared documents, meeting notes, and resources alongside Hylo content. Your group's knowledge lives in many places — the Assistant brings it together." },
    { name: 'Community health and growth guidance',
      desc: "The Assistant helps stewards understand what's working and what isn't — engagement patterns, unanswered requests, quiet members, conversations that need follow-up. Not analytics dashboards, but actionable guidance." },
    { name: 'Proactive moderation support',
      desc: 'The Assistant monitors for content that may need steward attention — potential code of conduct issues, heated conversations, flagged posts — and surfaces them to your moderation team promptly. Stewards make the decisions.' },
  ];

  function HyloAssistant() {
    return (
      <section style={{
        background: ATHENS,
        padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxWide, margin: '0 auto' }}>
          <ProductHeader
            name="Hylo Assistant"
            price="$20/month per group"
            priceColor={PURPLE}
            badge="Coming soon"
            badgeColor={PURPLE}
          />
          <p style={oneLiner}>
            An AI steward that knows your group — its history, its people,
            its purpose — and helps you take care of it.
          </p>

          <div style={{
            marginTop: 32,
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.375fr) minmax(0, 1fr)',
            gap: 32, alignItems: 'start',
          }} className="ai-grid">
            {/* Left · the story */}
            <div style={{ display: 'grid', gap: 16 }}>
              <p style={{ ...bodyProse, lineHeight: 1.7 }}>
                Every group steward knows the feeling: a new member joins and
                nobody welcomes them. A request goes unanswered for three days.
                A conversation that needed moderation slipped by. Someone
                posted something harmful at 2am and it sat there until morning.
              </p>
              <p style={{ ...bodyProse, lineHeight: 1.7 }}>
                Stewardship is the work that makes communities live or die,
                and most of it is invisible, repetitive, and easy to fall
                behind on. The Hylo Assistant is designed to carry that load
                alongside your stewards — not replacing human judgment, but
                making sure nothing falls through the cracks.
              </p>
              <p style={{ ...bodyProse, lineHeight: 1.7 }}>
                The Assistant has full context on your group: every conversation,
                every decision, every agreement, every member&rsquo;s history.
                It uses that context to help stewards stay on top of what
                matters, surface what needs attention, and give every member a
                way to navigate the group&rsquo;s collective knowledge.
              </p>
            </div>

            {/* Right · capability cards */}
            <div style={{ display: 'grid', gap: 12 }}>
              {ASSISTANT_CARDS.map((c, i) => (
                <div key={i} style={{
                  background: '#fff',
                  borderRadius: 4,
                  padding: 20,
                  borderLeft: `4px solid rgba(152,131,229,0.30)`,
                }}>
                  <div style={{
                    fontSize: 15, fontWeight: 500, color: RHINO,
                  }}>{c.name}</div>
                  <div style={{
                    marginTop: 6, fontSize: 13, lineHeight: 1.55,
                    color: `rgba(${RHINO_RGB},0.65)`,
                  }}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values commitment */}
          <div style={{
            marginTop: 32,
            background: 'rgba(8,119,54, 0.04)',
            borderRadius: 4,
            padding: 24,
            maxWidth: 720, marginLeft: 'auto', marginRight: 'auto',
          }}>
            <div style={{ fontSize: 15, lineHeight: 1.6, color: `rgba(${RHINO_RGB},0.70)` }}>
              <strong style={{ color: RHINO }}>How this aligns with our values:</strong>{' '}
              The Hylo Assistant works for your group, not for Hylo. It doesn&rsquo;t
              optimize for engagement, doesn&rsquo;t track behavior for advertising,
              and doesn&rsquo;t make decisions on behalf of your community.
              It&rsquo;s a tool that helps stewards do their work more effectively —
              the same work they&rsquo;d do manually, with better context and
              fewer blind spots. All AI interactions are transparent to stewards.
              Your group&rsquo;s data stays within your group. And the Assistant
              follows the same agreements your community does.
            </div>
          </div>

          <p style={{
            margin: '32px auto 0', maxWidth: 500,
            fontSize: 16, lineHeight: 1.6, textAlign: 'center',
            color: `rgba(${RHINO_RGB},0.70)`,
          }}>
            <strong style={{ color: RHINO }}>$20/month per group.</strong>{' '}
            Add the Assistant to any Hylo group — Free, Pro, or Whitelabel.
            Join the waitlist to be notified when it launches.
          </p>
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <PrimaryButton href="#waitlist-assistant" color={PURPLE}>
              Join the Assistant waitlist
            </PrimaryButton>
          </div>

          <style>{`
            @media (max-width: 760px) {
              .ai-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>
    );
  }

  // ——————— Section 6 · Stewardship Support bridge ———————
  const STEWARD_TIERS = [
    { name: 'Support Call', border: PICTON, price: '$300', line: "A focused hour on your group's challenges" },
    { name: 'Pollination',  border: FOREST, price: '$2,500', line: 'Full onboarding and launch support' },
    { name: 'Seed',         border: MOUNTAIN, price: '$100/mo', line: 'Ongoing connection and priority support' },
    { name: 'Blossom',      border: PURPLE, price: 'From $1,000/mo', line: 'Hands-on community building' },
  ];

  function StewardshipBridge() {
    return (
      <section style={{
        background: '#fff',
        padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={sectionH24}>
            Need hands-on help building your community?
          </h2>
          <p style={{
            marginTop: 16, fontSize: 16, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.80)`, maxWidth: 640,
            textWrap: 'pretty',
          }}>
            Technology alone doesn&rsquo;t make a community thrive — stewardship
            does. Hylo&rsquo;s team offers direct support for groups at every
            stage: onboarding workshops, strategy sessions, ongoing coaching,
            and even dedicated community management. We&rsquo;ve spent years
            learning what makes online communities come alive, and we bring
            that experience to your group.
          </p>

          <div style={{
            marginTop: 32, display: 'flex', gap: 12,
            overflowX: 'auto', paddingBottom: 8,
          }}>
            {STEWARD_TIERS.map((t, i) => (
              <div key={i} style={{
                flex: '1 1 200px', minWidth: 200,
                background: '#fff',
                borderRadius: 4, padding: 20,
                border: `1px solid ${ATHENS_DARK}`,
                borderLeft: `4px solid ${t.border}`,
              }}>
                <div style={{ fontSize: 16, fontWeight: 500, color: RHINO }}>
                  {t.name}
                </div>
                <div style={{
                  marginTop: 4, fontSize: 14, color: FOREST, fontWeight: 500,
                }}>{t.price}</div>
                <div style={{
                  marginTop: 8, fontSize: 13, lineHeight: 1.5,
                  color: `rgba(${RHINO_RGB},0.60)`,
                }}>{t.line}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24 }}>
            <a href="v5-stewardship-support.html" style={{
              fontSize: 14, fontWeight: 500, color: FOREST,
              textDecoration: 'none',
            }}>
              Learn more about stewardship support →
            </a>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 7 · How paid sustains the commons ———————
  function CommonsSustain() {
    const facts = [
      { icon: 'lock', text: '100% open source — always' },
      { icon: 'civic', text: '501(c)(3) non-profit — no shareholders' },
      { icon: 'recycle', text: 'Paid products fund the free platform' },
    ];
    const Icon = ({ kind }) => {
      const props = {
        width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
        stroke: FOREST, strokeWidth: 1.8,
        strokeLinecap: 'round', strokeLinejoin: 'round',
      };
      if (kind === 'lock') return (
        <svg {...props}>
          <rect x="5" y="11" width="14" height="9" rx="2"/>
          <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
        </svg>
      );
      if (kind === 'civic') return (
        <svg {...props}>
          <path d="M3 21h18"/>
          <path d="M5 21V10l7-5 7 5v11"/>
          <path d="M9 21v-6h6v6"/>
        </svg>
      );
      if (kind === 'recycle') return (
        <svg {...props}>
          <path d="M7 7h6l-2-2"/>
          <path d="m7 7-3 5 3 5"/>
          <path d="M17 17h-6l2 2"/>
          <path d="m17 17 3-5-3-5"/>
        </svg>
      );
      return null;
    };

    return (
      <section style={{
        background: ATHENS,
        padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxNarrow, margin: '0 auto' }}>
          <h2 style={sectionH24}>How this works</h2>
          <div style={{ marginTop: 16, display: 'grid', gap: 16 }}>
            <p style={{ ...bodyProse, lineHeight: 1.7 }}>
              Hylo is a non-profit commons. There are no investors expecting
              returns. There are no shareholders demanding growth. The platform
              stays free because paid products and community contributions
              cover the cost of development, hosting, and the small team that
              maintains everything.
            </p>
            <p style={{ ...bodyProse, lineHeight: 1.7 }}>
              When a group pays for Pro, Assistant, Whitelabel, or stewardship
              support, that money goes to three places: compensating the
              people who build and maintain Hylo, funding platform development
              that benefits every group (including the free ones), and keeping
              the infrastructure running. That&rsquo;s it.
            </p>
            <p style={{ ...bodyProse, lineHeight: 1.7 }}>
              This is the model. It&rsquo;s not complicated. It&rsquo;s just
              uncommon — because most platforms are built to extract value,
              and Hylo is built to sustain a commons.
            </p>
          </div>

          <div style={{
            marginTop: 32, display: 'flex',
            gap: 24, flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {facts.map((f, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                paddingRight: i < facts.length - 1 ? 24 : 0,
                borderRight: i < facts.length - 1
                  ? `1px solid rgba(${RHINO_RGB},0.10)` : 'none',
                fontSize: 14, color: `rgba(${RHINO_RGB},0.65)`,
              }}>
                <Icon kind={f.icon} />
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 8 · Comparison table ———————
  const COMPARISON = [
    { feat: 'Groups & subgroups',         vals: [true, true, true, true] },
    { feat: 'Cross-group coordination',   vals: [true, true, true, true] },
    { feat: 'Discussions & chat',         vals: [true, true, true, true] },
    { feat: 'Events',                     vals: [true, true, true, true] },
    { feat: 'Requests & offers',          vals: [true, true, true, true] },
    { feat: 'Projects',                   vals: [true, true, true, true] },
    { feat: 'Proposals & decisions',      vals: [true, true, true, true] },
    { feat: 'Governance tools',           vals: [true, true, true, true] },
    { feat: 'Map & place',                vals: [true, true, true, true] },
    { feat: 'Mobile apps',                vals: [true, true, true, true] },
    { feat: 'Unlimited members',          vals: [true, true, true, true] },
    { feat: 'Unlimited groups',           vals: [true, true, true, true] },
    { feat: 'Storage',                    vals: ['1 GB', 'Expanded', '1 GB', 'Custom'] },
    { feat: 'Video streaming',            vals: [false, true, false, true] },
    { feat: 'Priority support',           vals: [false, true, false, true] },
    { feat: 'API access',                 vals: [false, true, false, true] },
    { feat: 'AI group knowledge (RAG)',   vals: [false, false, true, 'Available'] },
    { feat: 'Document integration',       vals: [false, false, true, 'Available'] },
    { feat: 'Growth & health guidance',   vals: [false, false, true, 'Available'] },
    { feat: 'Moderation awareness',       vals: [false, false, true, 'Available'] },
    { feat: 'Custom domain',              vals: [false, false, false, true] },
    { feat: 'Custom branding',            vals: [false, false, false, true] },
    { feat: 'Dedicated instance',         vals: [false, false, false, true] },
    { feat: 'Custom development',         vals: [false, false, false, 'Available'] },
  ];

  function Cell({ v }) {
    if (v === true) return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="Included">
        <path d="m3 8 3.5 3.5L13 5" stroke={FOREST} strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
    if (v === false) return (
      <span style={{ color: `rgba(${RHINO_RGB},0.25)`, fontSize: 16 }}>—</span>
    );
    return (
      <span style={{
        fontSize: 13, color: `rgba(${RHINO_RGB},0.55)`,
      }}>{v}</span>
    );
  }

  function Comparison() {
    const cols = [
      { name: 'Hylo Free',       price: 'Free forever',    color: FOREST },
      { name: 'Hylo Pro',        price: '$60/mo per group', color: FOREST },
      { name: 'Hylo Assistant',  price: '$20/mo per group', color: PURPLE },
      { name: 'Hylo Whitelabel', price: '$100/mo',          color: FOREST },
    ];
    return (
      <section style={{
        background: '#fff',
        padding: '40px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxTable, margin: '0 auto' }}>
          <div style={{
            fontSize: 14, fontWeight: 500, letterSpacing: 0.6,
            textTransform: 'uppercase',
            color: `rgba(${RHINO_RGB},0.50)`,
          }}>Compare options</div>

          <div style={{ marginTop: 16, overflowX: 'auto' }}>
            <table style={{
              width: '100%', borderCollapse: 'collapse',
              minWidth: 720,
              fontFamily: 'inherit',
            }}>
              <thead>
                <tr>
                  <th style={{
                    textAlign: 'left', padding: '14px 12px',
                    borderBottom: `1px solid ${ATHENS_DARK}`,
                    background: '#fff', position: 'sticky', top: 0,
                  }}></th>
                  {cols.map((c, i) => (
                    <th key={i} style={{
                      padding: '14px 12px', textAlign: 'left',
                      borderBottom: `1px solid ${ATHENS_DARK}`,
                      background: '#fff', position: 'sticky', top: 0,
                      verticalAlign: 'top',
                    }}>
                      <div style={{ fontSize: 18, fontWeight: 500, color: RHINO }}>
                        {c.name}
                      </div>
                      <div style={{
                        marginTop: 2, fontSize: 13, color: c.color, fontWeight: 500,
                      }}>{c.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} style={{
                    background: i % 2 ? ATHENS : '#fff',
                  }}>
                    <td style={{
                      padding: '12px',
                      fontSize: 14, color: `rgba(${RHINO_RGB},0.85)`,
                      borderBottom: `1px solid ${ATHENS_DARK}`,
                    }}>{row.feat}</td>
                    {row.vals.map((v, j) => (
                      <td key={j} style={{
                        padding: '12px', textAlign: 'left',
                        borderBottom: `1px solid ${ATHENS_DARK}`,
                      }}>
                        <Cell v={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 9 · Closing CTA ———————
  function ClosingCTA() {
    return (
      <section style={{
        background: H.cream,
        padding: '60px 40px 80px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 28, fontWeight: 700, letterSpacing: -0.6,
            color: RHINO, margin: 0, lineHeight: 1.2,
          }}>
            Start for free. Grow from there.
          </h2>
          <p style={{
            margin: '16px auto 0', maxWidth: 520,
            fontSize: 16, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.70)`, textWrap: 'pretty',
          }}>
            Every group on Hylo starts with the full platform at no cost.
            If you need more capacity or hands-on support down the road,
            we&rsquo;ll be here. For now — bring your group and see what
            becomes possible.
          </p>
          <div style={{ marginTop: 24 }}>
            <PrimaryButton href="v5-bring-your-group.html">
              Create your group — free
            </PrimaryButton>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Footer (mirrored) ———————
  function PricingFooter() {
    const cols = [
      { h: 'About Hylo', l: ['Our Purpose & Vision', 'How We Work: Participatory Design', 'Hylo\u2019s Stewardship', 'Team'] },
      { h: 'Using Hylo', l: ['Member Guide', 'Steward Guide', 'Hylo Updates', 'Bring your group to Hylo', 'Hylo for Bioregional Organizing', 'API'] },
      { h: 'Participate', l: ['Hylo on Hylo', 'Hylo on Github', 'Get involved', 'Hylo\u2019s Patreon', 'Stewardship support'] },
      { h: 'Agreements',  l: ['Hylo\u2019s Terms of Service', 'Hylo\u2019s Privacy Policy', 'Hylo\u2019s Code of Conduct'] },
    ];
    return (
      <footer style={{
        background: '#2A2723', color: '#fff',
        padding: '64px 40px 48px',
        fontFamily: T.sans,
      }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <img src="assets/hylo-logo-dark.svg" alt="Hylo"
                 style={{ height: 40, filter: 'invert(1) brightness(2)' }} />
            <p style={{
              margin: '16px auto 0', maxWidth: 520,
              fontSize: 14, lineHeight: 1.6,
              color: 'rgba(255,255,255,0.65)',
            }}>
              A commons-owned platform for groups that want to build trust,
              coordinate real work, and grow together.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 32,
          }}>
            {cols.map((c, i) => (
              <div key={i}>
                <div style={{
                  fontSize: 13, fontWeight: 600, letterSpacing: 0.4,
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.55)',
                }}>{c.h}</div>
                <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
                  {c.l.map((item, j) => (
                    <a key={j} href="#" style={{
                      fontSize: 14, color: 'rgba(255,255,255,0.85)',
                      textDecoration: 'none',
                    }}>{item}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 48, paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.10)',
            display: 'flex', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12,
            fontSize: 13, color: 'rgba(255,255,255,0.50)',
          }}>
            <div>© Hylo · A non-profit commons</div>
            <div>Made with care, on Chochenyo Ohlone land.</div>
          </div>
        </div>
      </footer>
    );
  }

  // ——————— Page composition ———————
  function PricingPage() {
    const Nav = window.VE_Nav;
    return (
      <div style={{ background: '#fff', color: RHINO, fontFamily: T.sans }}
           data-screen-label="v5 Pricing">
        <Nav accent={FOREST} />
        <Hero />
        <HyloFree />
        <HyloPro />
        <HyloWhitelabel />
        <HyloAssistant />
        <StewardshipBridge />
        <CommonsSustain />
        <Comparison />
        <ClosingCTA />
        <PricingFooter />
      </div>
    );
  }

  window.PricingPage = PricingPage;
})();
