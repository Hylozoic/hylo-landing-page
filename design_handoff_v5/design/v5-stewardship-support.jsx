// v5-stewardship-support.jsx — Hylo Community Stewardship Support page (V5 system)
// Follows spec: hylo-stewardship-support-spec.md
// Reuses VE_Nav, VE_THEME, HYLO tokens. Footer mirrored from v5-get-involved.
// Tone per spec: direct, warm, specific, no urgency. No countdown timers,
// no "most popular" badges, no scarcity games. Prices stated plainly.

(function () {
  const H = window.HYLO;
  const T = window.VE_THEME;
  const RHINO = H.rhino;          // '#2C4059'
  const RHINO_RGB = '44,64,89';
  const FOREST = H.forest;        // '#087736' — primary
  const CARIBBEAN = H.caribbean;  // '#0DC39F' — used for pricing accent
  const ATHENS = H.athensGray;    // '#FAFBFC'
  const ATHENS_DARK = H.athensDark;

  // Layout constants
  const maxBody = 720;
  const maxOffer = 1000;

  // ——————— Shared text styles ———————
  const sectionHeader = {
    fontSize: 24, fontWeight: 700, letterSpacing: -0.4,
    color: RHINO, margin: 0, lineHeight: 1.2,
  };
  const bodyProse = {
    fontSize: 16, lineHeight: 1.7, margin: 0,
    color: `rgba(${RHINO_RGB},0.80)`, textWrap: 'pretty',
  };
  const textLink = {
    display: 'inline-flex', alignItems: 'center', gap: 4,
    fontSize: 14, fontWeight: 500, color: CARIBBEAN,
    textDecoration: 'none', cursor: 'pointer',
  };

  // ——————— Section 1 · Hero ———————
  function Hero() {
    const scrollToOfferings = (e) => {
      e.preventDefault();
      const el = document.getElementById('offerings');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
      <section style={{
        background: H.cream,
        padding: '160px 40px 60px', // 100 visual + 60 nav overlap = 160
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto' }}>
          <h1 style={{
            fontSize: 52, fontWeight: 700, letterSpacing: -1.2,
            lineHeight: 1.05, margin: 0, color: RHINO, textWrap: 'balance',
          }}>
            Your community needs a steward. We can help.
          </h1>
          <p style={{
            fontSize: 18, lineHeight: 1.6, margin: '24px 0 0',
            color: `rgba(${RHINO_RGB},0.80)`, maxWidth: 640,
            textWrap: 'pretty',
          }}>
            An online community is a living thing — it needs care, attention,
            and someone who knows how to tend it. Most groups build the space
            and assume people will show up and engage. They usually don&rsquo;t.
            The difference between a thriving community and an empty one is
            almost always stewardship.
          </p>
          <p style={{
            fontSize: 18, lineHeight: 1.6, margin: '16px 0 0',
            color: `rgba(${RHINO_RGB},0.80)`, maxWidth: 640,
            textWrap: 'pretty',
          }}>
            Hylo&rsquo;s team has spent years working alongside real communities
            — learning what makes groups come alive, what causes them to go
            quiet, and what it takes to build the kind of trust that makes
            collective action possible. This program brings that experience
            directly to your group.
          </p>
          <div style={{ marginTop: 24 }}>
            <a href="#offerings" onClick={scrollToOfferings} style={{
              ...textLink, fontSize: 14,
            }}>
              See the options <span style={{ fontSize: 16, lineHeight: 1 }}>↓</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 2 · The Problem ———————
  function Problem() {
    return (
      <section style={{
        background: '#fff', padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto' }}>
          <h2 style={sectionHeader}>What we see, over and over</h2>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={bodyProse}>
              A group launches with energy. People join. There&rsquo;s a burst
              of posts, a flurry of introductions. Then it goes quiet. New
              members stop coming. Existing members stop posting. The stewards
              blame the platform, the timing, the audience — but the pattern is
              almost always the same: nobody was tending the space.
            </p>
            <p style={bodyProse}>
              Community doesn&rsquo;t happen by default. It happens when someone
              welcomes new members personally. When someone follows up on a
              request that went unanswered. When someone notices who
              hasn&rsquo;t posted in a while and reaches out. When the purpose
              is clear, the agreements are alive, and people feel like their
              contributions matter.
            </p>
            <p style={bodyProse}>
              This is stewardship. It&rsquo;s not glamorous, and it&rsquo;s not
              optional. It&rsquo;s the thing that separates a group that grows
              from a group that goes silent.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 3 · What We Bring ———————
  function WhatWeBring() {
    return (
      <section style={{
        background: ATHENS, padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={sectionHeader}>
            What we&rsquo;ve learned from working with hundreds of groups
          </h2>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={bodyProse}>
              Since 2012, we&rsquo;ve worked alongside communities across
              sectors — regenerative agriculture, climate action, global health
              networks, civic organizing, learning communities, cooperatives.
              Some of them thrived. Some of them didn&rsquo;t. We&rsquo;ve paid
              close attention to both.
            </p>
            <p style={bodyProse}>
              What we bring to your group isn&rsquo;t a playbook.
              It&rsquo;s pattern recognition. We know what onboarding flows
              actually get people engaged. We know when a group needs more
              structure and when it needs less. We know how to help stewards
              set agreements that hold without rigidity, and how to build the
              kind of culture where mutual support becomes normal rather than
              aspirational.
            </p>
            <p style={bodyProse}>
              Our team is trained in Prosocial facilitation and sociocratic
              governance — proven frameworks for helping groups collaborate,
              make decisions, and resolve conflict. We bring those practices
              into everything we do.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 4 · Offerings ———————
  function CheckIcon({ color }) {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flex: 'none', marginTop: 5 }}>
        <path d="M2.5 7.2l2.8 2.8L11.5 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    );
  }

  function OfferCard({ name, price, priceSub, oneLiner, items, nestedItems, extra, commitOptions, prerequisites, audience, borderColor, ctaLabel = 'Start a conversation' }) {
    const [hover, setHover] = React.useState(false);
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          background: '#fff',
          borderRadius: 4,
          borderLeft: `4px solid ${borderColor}`,
          padding: '32px 32px 32px 36px',
          boxShadow: hover
            ? '0 4px 15px rgba(0,0,0,0.06)'
            : '0 1px 2px rgba(0,0,0,0.03)',
          transition: 'box-shadow .25s ease',
        }}
      >
        {/* Name + price row */}
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          gap: 16, flexWrap: 'wrap',
        }}>
          <div style={{
            fontSize: 22, fontWeight: 700, color: RHINO, letterSpacing: -0.3,
          }}>{name}</div>
          <div style={{
            fontSize: 18, fontWeight: 500, color: CARIBBEAN,
            whiteSpace: 'nowrap',
          }}>
            {price}
            {priceSub && (
              <span style={{
                fontSize: 13, fontWeight: 400,
                color: `rgba(${RHINO_RGB},0.55)`, marginLeft: 6,
              }}>{priceSub}</span>
            )}
          </div>
        </div>

        {/* One-liner */}
        <div style={{
          marginTop: 8, fontSize: 15, fontStyle: 'italic',
          color: `rgba(${RHINO_RGB},0.60)`, lineHeight: 1.5,
        }}>{oneLiner}</div>

        {/* What you get */}
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((it, i) => (
            <div key={i} style={{
              display: 'flex', gap: 10, alignItems: 'flex-start',
              fontSize: 15, lineHeight: 1.55,
              color: `rgba(${RHINO_RGB},0.78)`,
            }}>
              <CheckIcon color={CARIBBEAN} />
              <span>{it}</span>
            </div>
          ))}
        </div>

        {/* Extra narrative (e.g. hands-on description) */}
        {extra && (
          <div style={{
            marginTop: 12, paddingLeft: 12,
            fontSize: 14, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.70)`,
            borderLeft: `2px solid rgba(${RHINO_RGB},0.08)`,
          }}>
            <div style={{
              fontSize: 13, fontWeight: 600, textTransform: 'uppercase',
              letterSpacing: 0.6, color: `rgba(${RHINO_RGB},0.55)`,
              marginBottom: 6,
            }}>What this looks like in practice</div>
            {extra}
          </div>
        )}

        {/* Commit options */}
        {commitOptions && (
          <div style={{
            marginTop: 12, fontSize: 14, lineHeight: 1.55,
            color: `rgba(${RHINO_RGB},0.60)`,
          }}>
            {commitOptions.map((c, i) => (
              <div key={i}>{c}</div>
            ))}
          </div>
        )}

        {/* Prerequisites */}
        {prerequisites && (
          <div style={{
            marginTop: 12, fontSize: 13, lineHeight: 1.55,
            color: `rgba(${RHINO_RGB},0.52)`,
          }}>{prerequisites}</div>
        )}

        {/* Who this is for */}
        <div style={{
          marginTop: 20, fontSize: 14, lineHeight: 1.55,
          color: `rgba(${RHINO_RGB},0.55)`,
        }}>
          <span style={{ fontWeight: 500, color: `rgba(${RHINO_RGB},0.65)` }}>Who this is for: </span>
          {audience}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 16 }}>
          <a href="mailto:hello@hylo.com" style={textLink}>
            {ctaLabel} <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
          </a>
        </div>
      </div>
    );
  }

  function Offerings() {
    return (
      <section id="offerings" style={{
        background: '#fff', padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
        scrollMarginTop: 80,
      }}>
        <div style={{ maxWidth: maxOffer, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 28, fontWeight: 700, letterSpacing: -0.5,
            color: RHINO, margin: 0, lineHeight: 1.15, textAlign: 'center',
          }}>How we can work together</h2>
          <p style={{
            marginTop: 16, fontSize: 14, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.60)`, textAlign: 'center',
            maxWidth: 600, marginLeft: 'auto', marginRight: 'auto',
            textWrap: 'pretty',
          }}>
            All fees are tax-deductible contributions to Hylo, a fiscally
            sponsored 501(c)(3). Every dollar supports the ongoing development
            of an open-source, non-profit coordination platform. Thank you for
            investing in shared infrastructure.
          </p>

          <div style={{
            marginTop: 40, display: 'flex', flexDirection: 'column', gap: 32,
          }}>
            <OfferCard
              name="Support Call"
              price="$300"
              oneLiner="A focused conversation about your group's specific challenges."
              items={[
                "One hour with a Hylo team member, dedicated to your group's questions and situation",
                "Practical advice tailored to your group's structure, goals, and stage of development",
                "Follow-up notes summarizing recommendations and next steps",
              ]}
              audience="Stewards who need targeted guidance on a specific challenge — onboarding, engagement, governance, or group structure."
              borderColor="#40A1DD" /* Picton Blue */
            />

            <OfferCard
              name="Pollination"
              price="$2,500"
              priceSub="one-time"
              oneLiner="Everything your group needs to launch well on Hylo."
              items={[
                "A deep-dive workshop to map your group's structure, purpose, and agreements onto Hylo",
                "A strategy session to design your onboarding flow and engagement approach",
                "A training call for your group's stewards — how to use Hylo's tools effectively",
                "A demo and introduction call for your group members",
                "Customizable guides and materials to share with your community",
                "A custom analytics page to track engagement in your group",
                "Custom iframe code to embed a Hylo view on your own website",
                "A three-month check-in call to review how things are going and adjust",
                "Our ongoing partnership in service to your group's success",
              ]}
              audience="Organizations launching a new community on Hylo, or migrating an existing community and wanting to do it right from the start."
              borderColor={CARIBBEAN} /* Caribbean Green */
            />

            <OfferCard
              name="Seed"
              price="$100"
              priceSub="/month"
              oneLiner="Sustained partnership for groups that want ongoing connection to the Hylo team."
              items={[
                "Access to the Hylo Alliance — a private group for partners and advisors",
                "A monthly group support call with other dedicated stewards — learn from peers, share challenges, get direct input from the team",
                "Priority bug fixes — your issues move to the top of the development queue",
                "The knowledge that your contribution directly sustains an open-source, non-profit platform",
              ]}
              audience="Organizations that are established on Hylo and want to stay connected, supported, and contribute to the platform's sustainability."
              borderColor="#23CC80" /* Mountain Meadow */
            />

            <OfferCard
              name="Blossom"
              price="$1,000–$1,250"
              priceSub="/month"
              oneLiner="Hands-on community support for groups in their critical early period."
              items={[
                "Everything in Seed, plus:",
                "A monthly strategy call with Hylo's community team to optimize your engagement and community health",
                "An additional live demo, training, or presentation for your members",
                "Weekly hands-on community support from our team — we show up in your group and help it come alive",
              ]}
              extra={
                <span>
                  Our community team becomes an active participant in your
                  group. We post 2–3 times per month, respond to members,
                  connect people who should know each other, help newcomers
                  find their footing, and nurture the kind of engagement that
                  serves your group&rsquo;s goals. We don&rsquo;t replace your
                  stewards — we work alongside them.
                </span>
              }
              commitOptions={[
                '6-month commitment: $1,250/month',
                '12-month commitment: $1,000/month',
              ]}
              prerequisites="We require that Blossom partners first complete a Pollination package, and that your group has its own dedicated stewards in addition to the support we provide. We're here to amplify your stewardship, not substitute for it."
              audience="Groups in their first year on Hylo that need active partnership to build healthy community culture, especially organizations without a dedicated community manager."
              borderColor="#9883E5" /* Medium Purple */
            />

            <OfferCard
              name="Flourish"
              price="Custom"
              priceSub="reach out to discuss"
              oneLiner="A dedicated community manager from the Hylo team, embedded in your group."
              items={[
                "Everything in Pollination and Seed, plus:",
                "A dedicated Hylo community manager assigned to your group",
                "Active, ongoing community support throughout the week — posting, connecting members, fielding questions, and nurturing engagement",
                "Your community manager becomes a full member of your group, embodying your culture, values, and agreements",
                "A monthly call with the Hylo core team and your community manager to review strategy",
                "A monthly community-building call hosted by your community manager to convene your members",
                "Training in Prosocial facilitation and sociocratic governance applied to your group's specific context",
              ]}
              audience="Organizations that need the equivalent of a community manager but don't have one on staff. This is the deepest level of partnership we offer — it's a real relationship, not a service contract."
              borderColor="#BB60A8" /* Fuchsia Pink */
            />
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 5 · How the Money Works ———————
  function Money() {
    return (
      <section style={{
        background: ATHENS, padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto' }}>
          <h2 style={sectionHeader}>Where your contribution goes</h2>
          <p style={{ ...bodyProse, marginTop: 16 }}>
            All contributions to Hylo&rsquo;s stewardship support program are
            tax-deductible donations to a 501(c)(3) non-profit. There are no
            investors, no shareholders, and no profit extraction. Here&rsquo;s
            what your support funds:
          </p>

          {[
            { label: 'Team compensation.',
              body: 'The people who support your community are the same people who build Hylo. Your contribution pays for their time and expertise. We work toward equitable compensation across the team.' },
            { label: 'Platform development.',
              body: 'Revenue from stewardship support goes directly toward building and maintaining an open-source platform that hundreds of communities use for free. Your support makes that possible.' },
            { label: 'The commons.',
              body: 'Every feature built through a partnership is released to all groups on Hylo. When you invest in your community\u2019s success, you\u2019re investing in infrastructure that benefits everyone.' },
          ].map((it, i) => (
            <p key={i} style={{ ...bodyProse, marginTop: 16 }}>
              <span style={{ fontWeight: 500, color: RHINO }}>{it.label} </span>
              {it.body}
            </p>
          ))}
        </div>
      </section>
    );
  }

  // ——————— Section 6 · Getting Started ———————
  function GettingStarted() {
    return (
      <section style={{
        background: '#fff', padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 24, fontWeight: 700, letterSpacing: -0.4,
            color: RHINO, margin: 0, lineHeight: 1.2,
          }}>Ready to talk?</h2>
          <p style={{
            marginTop: 16, fontSize: 16, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.75)`, textWrap: 'pretty',
            margin: '16px 0 0',
          }}>
            Every partnership starts with a conversation. Tell us about your
            group, what you&rsquo;re trying to build, and where you&rsquo;re
            stuck. We&rsquo;ll be honest about whether we can help and which
            level of support makes sense.
          </p>
          <div style={{ marginTop: 40 }}>
            <a href="mailto:hello@hylo.com" style={{
              display: 'inline-block',
              background: CARIBBEAN, color: '#fff',
              padding: '0 24px', height: 40, lineHeight: '40px',
              borderRadius: 6,
              fontSize: 14, fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: 0.2,
              whiteSpace: 'nowrap',
            }}>Get in touch</a>
          </div>
          <div style={{
            marginTop: 16, fontSize: 14, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.50)`,
          }}>
            Or email us directly at{' '}
            <a href="mailto:hello@hylo.com" style={{ color: CARIBBEAN, textDecoration: 'none' }}>
              hello@hylo.com
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
          <p style={{
            fontSize: 16, lineHeight: 1.6, margin: 0,
            color: `rgba(${RHINO_RGB},0.70)`, textWrap: 'pretty',
          }}>
            Building a healthy community is one of the most important things a
            group can do — and one of the hardest. We&rsquo;ve been at it long
            enough to know that the difference is rarely the technology.
            It&rsquo;s the care. We&rsquo;d be glad to bring what we&rsquo;ve
            learned to your work.
          </p>
        </div>
      </section>
    );
  }

  // ——————— Footer (mirrored from v5-get-involved) ———————
  function SSFooter() {
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
  function StewardshipSupportPage() {
    const Nav = window.VE_Nav;
    return (
      <div style={{ background: '#fff', color: RHINO, fontFamily: T.sans }}
           data-screen-label="v5 Stewardship Support">
        <Nav accent={FOREST} />
        <Hero />
        <Problem />
        <WhatWeBring />
        <Offerings />
        <Money />
        <GettingStarted />
        <Closing />
        <SSFooter />
      </div>
    );
  }

  window.StewardshipSupportPage = StewardshipSupportPage;
})();
