// v5-stories.jsx — "Community stories" page (V5 system)
// Spec: hylo-community-stories-spec.md
//
// The single highest-trust page on the site. Five real groups, one structure
// per story: tagline → header → labeled sections (THE GROUP, THE CHALLENGE,
// WHAT THEY DID ON HYLO, WHAT HAPPENED, IN THEIR WORDS).
//
// Honest "[Quote needed]" / "[Metrics needed]" placeholders are visually
// muted so they read as drafts-in-progress instead of finished copy.
// Story 1 (Missoula) screenshot uses an SVG placeholder block so absent
// imagery doesn't pretend to be present.

(function () {
  const H = window.HYLO;
  const T = window.VE_THEME;
  const RHINO = H.rhino;          // '#2C4059'
  const RHINO_RGB = '44,64,89';
  const FOREST = H.forest;        // '#087736'
  const ATHENS = H.athensGray;
  const ATHENS_DARK = H.athensDark;
  const CREAM = H.cream;

  // Per-category accent colors (using post-type palette, mapped to story type)
  const CIVIC_PURPLE = H.proposalPurple;       // #664BA5
  const FUND_GREEN   = H.requestTeal;           // #00C79D — funding rounds use the request/teal mark
  const NETWORK_TEAL = H.caribbean;             // #0DC39F — global network
  const LEARN_BLUE   = '#40A1DD';               // — learning (matches who-is-it-for)
  const PRACTICE_ORG = H.projectOrange;         // #FC8000 — community of practice

  const maxBody = 800;
  const maxWide = 1000;

  // ——————— Pill / category tag ———————
  function CategoryTag({ label, color }) {
    return (
      <span style={{
        display: 'inline-block',
        padding: '4px 10px',
        background: color + '33',           // 20% alpha
        color: color,
        fontSize: 10, fontWeight: 700, letterSpacing: 0.8,
        textTransform: 'uppercase',
        borderRadius: 999,
        verticalAlign: 'middle',
      }}>{label}</span>
    );
  }

  // ——————— Hero ———————
  function Hero() {
    return (
      <section style={{
        background: CREAM,
        padding: '160px 40px 60px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: 1.2,
            textTransform: 'uppercase',
            color: `rgba(${RHINO_RGB},0.55)`,
            marginBottom: 20,
          }}>Community stories</div>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700,
            letterSpacing: -1, lineHeight: 1.05, margin: 0,
            color: RHINO, textWrap: 'balance',
          }}>
            What actually happened when communities used Hylo.
          </h1>
          <p style={{
            margin: '28px auto 0', maxWidth: 600,
            fontSize: 17, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.75)`, textWrap: 'pretty',
          }}>
            Real groups using Hylo to coordinate, support each other, and make
            decisions together. These are their stories — what they were
            trying to do, how they used the platform, and what happened.
          </p>
        </div>
      </section>
    );
  }

  // ——————— Index cards ———————
  function IndexCards({ stories }) {
    return (
      <section style={{
        background: '#fff',
        padding: '32px 40px',
        fontFamily: T.sans,
        borderBottom: `1px solid rgba(${RHINO_RGB},0.06)`,
      }}>
        <div style={{ maxWidth: maxWide, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
          }}>
            {stories.map((s) => (
              <a key={s.id} href={`#${s.id}`} style={{
                display: 'block',
                background: ATHENS,
                borderRadius: 4,
                padding: 20,
                textDecoration: 'none',
                color: 'inherit',
                border: `1px solid rgba(${RHINO_RGB},0.06)`,
                transition: 'transform 120ms ease, border-color 120ms ease',
              }}
                 onMouseEnter={(e) => { e.currentTarget.style.borderColor = `rgba(${RHINO_RGB},0.18)`; }}
                 onMouseLeave={(e) => { e.currentTarget.style.borderColor = `rgba(${RHINO_RGB},0.06)`; }}>
                <div style={{
                  fontSize: 16, fontWeight: 600, color: RHINO,
                  letterSpacing: -0.2, lineHeight: 1.25,
                }}>{s.shortName}</div>
                <div style={{
                  fontSize: 13, lineHeight: 1.45,
                  color: `rgba(${RHINO_RGB},0.60)`,
                  margin: '4px 0 12px',
                }}>{s.cardLine}</div>
                <CategoryTag label={s.category} color={s.color} />
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Story section ———————
  const labelStyle = {
    fontSize: 12, fontWeight: 500, letterSpacing: 0.6,
    textTransform: 'uppercase',
    color: `rgba(${RHINO_RGB},0.40)`,
    margin: '32px 0 0',
  };
  const bodyStyle = {
    fontSize: 16, lineHeight: 1.7, margin: '12px 0 0',
    color: `rgba(${RHINO_RGB},0.80)`, textWrap: 'pretty',
  };
  const quoteStyle = {
    fontSize: 18, lineHeight: 1.6, margin: '14px 0 0',
    color: RHINO, fontWeight: 500,
    paddingLeft: 18,
    borderLeft: `3px solid ${FOREST}`,
    fontStyle: 'normal',
    textWrap: 'pretty',
  };
  const placeholderQuoteStyle = {
    ...quoteStyle,
    color: `rgba(${RHINO_RGB},0.45)`,
    fontWeight: 400, fontStyle: 'italic', fontSize: 15,
    borderLeft: `3px dashed rgba(${RHINO_RGB},0.20)`,
  };
  const teamNoteStyle = {
    marginTop: 18,
    padding: '12px 14px',
    background: `rgba(${RHINO_RGB},0.04)`,
    borderRadius: 4,
    fontSize: 12, lineHeight: 1.55,
    color: `rgba(${RHINO_RGB},0.55)`,
    fontStyle: 'italic',
    textWrap: 'pretty',
  };

  function ImagePlaceholder({ accent, label }) {
    return (
      <div style={{
        width: '100%',
        height: 240,
        marginTop: 16,
        borderRadius: 4,
        background: `linear-gradient(135deg, ${accent}22, ${accent}11)`,
        border: `1px dashed ${accent}55`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 8,
        color: `rgba(${RHINO_RGB},0.45)`,
        fontSize: 13,
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
             stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.6,
                      textTransform: 'uppercase', color: accent + 'bb' }}>
          Image placeholder
        </div>
        <div style={{ fontSize: 12, color: `rgba(${RHINO_RGB},0.50)`,
                      maxWidth: 360, textAlign: 'center', textWrap: 'pretty' }}>
          {label}
        </div>
      </div>
    );
  }

  function Story({ id, story, index }) {
    const bg = index % 2 === 0 ? '#fff' : ATHENS;
    return (
      <section id={id} style={{
        background: bg,
        padding: '60px 40px',
        fontFamily: T.sans,
        scrollMarginTop: 80,
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto' }}>
          {/* Header */}
          <div>
            <h2 style={{
              fontSize: 28, fontWeight: 700, letterSpacing: -0.5,
              color: RHINO, margin: 0, lineHeight: 1.2,
              textWrap: 'balance',
            }}>{story.name}</h2>
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              gap: 12, alignItems: 'center',
              marginTop: 10,
            }}>
              <p style={{
                margin: 0,
                fontSize: 15, lineHeight: 1.5,
                color: `rgba(${RHINO_RGB},0.65)`,
                fontStyle: 'italic', textWrap: 'pretty',
              }}>{story.tagline}</p>
              <CategoryTag label={story.category} color={story.color} />
            </div>
          </div>

          {/* Optional image */}
          {story.imageLabel && <ImagePlaceholder accent={story.color} label={story.imageLabel} />}

          {/* Story body */}
          <div style={{ marginTop: 24 }}>
            <div style={labelStyle}>The group</div>
            <p style={bodyStyle}>{story.theGroup}</p>

            <div style={labelStyle}>The challenge</div>
            <p style={bodyStyle}>{story.theChallenge}</p>

            <div style={labelStyle}>What they did on Hylo</div>
            <p style={bodyStyle}>{story.whatTheyDid}</p>

            <div style={labelStyle}>What happened</div>
            <p style={bodyStyle}>{story.whatHappened}</p>

            {story.teamNote && (
              <div style={teamNoteStyle}>
                <strong style={{ fontStyle: 'normal', color: `rgba(${RHINO_RGB},0.70)` }}>
                  Note for the team:
                </strong>{' '}
                {story.teamNote}
              </div>
            )}

            <div style={labelStyle}>In their words</div>
            {story.quote ? (
              <p style={quoteStyle}>{story.quote}</p>
            ) : (
              <p style={placeholderQuoteStyle}>
                [Quote needed{story.quoteFrom ? ` — ${story.quoteFrom}` : ''}.]
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Closing CTA ———————
  function ClosingCTA() {
    return (
      <section style={{
        background: CREAM,
        padding: '60px 40px 80px',
        fontFamily: T.sans,
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 28, fontWeight: 700, letterSpacing: -0.5,
            color: RHINO, margin: 0, lineHeight: 1.15,
            textWrap: 'balance',
          }}>
            Your group&rsquo;s story could be here.
          </h2>
          <p style={{
            margin: '16px auto 0',
            fontSize: 16, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.70)`, textWrap: 'pretty',
          }}>
            Every community on Hylo started with a few people deciding to
            coordinate differently. Create your group and start building
            something worth writing about.
          </p>
          <div style={{
            marginTop: 28,
            display: 'flex', gap: 12, justifyContent: 'center',
            flexWrap: 'wrap', alignItems: 'center',
          }}>
            <a href="v5-bring-your-group.html" style={{
              display: 'inline-block',
              background: FOREST, color: '#fff',
              padding: '0 24px', height: 40, lineHeight: '40px',
              borderRadius: 6,
              fontSize: 14, fontWeight: 600, letterSpacing: 0.2,
              textDecoration: 'none',
            }}>Create your group — free</a>
            <a href="v5-get-involved.html" style={{
              display: 'inline-block',
              padding: '0 12px', height: 40, lineHeight: '40px',
              fontSize: 14, fontWeight: 500, color: FOREST,
              textDecoration: 'none',
            }}>Share your story →</a>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Footer ———————
  function StoriesFooter() {
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

  // ——————— Story data ———————
  const STORIES = [
    {
      id: 'missoula',
      shortName: 'Common Good Missoula',
      name: 'Common Good Missoula',
      cardLine: 'A city that organized itself around housing — and won.',
      category: 'Civic',
      color: CIVIC_PURPLE,
      tagline: 'A city that organized itself around housing — and won.',
      imageLabel: 'A photo from a Missoula assembly, or a Hylo map view of the engaged neighborhoods.',
      theGroup:
        'Common Good Missoula is a civic organization that works to strengthen community engagement and participatory democracy in Missoula, Montana. They bring together residents, organizations, and local government around shared challenges — housing, land use, economic development — through assemblies, working groups, and collaborative processes.',
      theChallenge:
        'Missoula was facing a housing affordability crisis. Zoning reform was needed, but the standard approach — public comment periods, town hall meetings, advocacy campaigns — was fragmented. Different stakeholder groups were working in isolation. Residents felt excluded from planning processes. The city needed a way to bring diverse voices together, sustain coordination over months, and make the outcome feel legitimate to everyone involved.',
      whatTheyDid:
        'Common Good Missoula set up Hylo as their coordination hub for a sustained zoning and land use reform campaign. They used cross-group posting to share updates across neighborhood groups simultaneously, so different parts of the city stayed informed without anyone having to attend every meeting. The map grounded the conversation in geography — people could see which neighborhoods were engaged and where the gaps were. Discussions let residents weigh in asynchronously between assemblies. Events organized the assemblies themselves.',
      whatHappened:
        'The campaign succeeded. Missoula passed zoning and land use reforms that increased housing access. The process brought together stakeholders who would not have coordinated through traditional channels — renters and developers, longtime residents and newcomers, neighborhood associations and city staff. The group continues to use Hylo for ongoing civic engagement beyond the original campaign.',
      teamNote:
        'This story needs specific metrics. How many residents participated? How many neighborhood groups were involved? What was the timeline from launch to passage? What did the reforms actually change? These details transform a good story into a compelling one. Talk to the Common Good Missoula team and get numbers.',
      quote: null,
      quoteFrom: 'reach out to Common Good Missoula leadership for a statement about what Hylo made possible that wouldn\u2019t have happened otherwise',
    },
    {
      id: 'float',
      shortName: 'Float',
      name: 'Float — Funding Lab for Agroecological Technology',
      cardLine: '$700,000 allocated by the community, not a committee.',
      category: 'Participatory Funding',
      color: FUND_GREEN,
      tagline: '$700,000 allocated by the community, not a committee.',
      imageLabel: 'A screenshot of a Float funding round on Hylo — proposals, discussion, or vote tally.',
      theGroup:
        'Float is a participatory funding initiative for agroecological technology. Rather than having a small panel of experts decide where money goes, Float distributes decision-making power to the community — the farmers, technologists, and land stewards who understand what\u2019s needed on the ground.',
      theChallenge:
        'Traditional grantmaking concentrates decisions in the hands of program officers. The people closest to the work — who understand which technologies would actually help farmers, which projects have community support, which interventions would be most effective — rarely have a say in where the money flows. Float wanted to invert this: real participatory funding where the community reviews proposals, discusses priorities, and collectively allocates resources.',
      whatTheyDid:
        'Float used Hylo\u2019s funding rounds to run their entire participatory allocation process. Community members submitted proposals for projects and technologies. During the discussion phase, the community reviewed and debated proposals — asking questions, challenging assumptions, and building shared understanding. During the voting phase, the community voted to allocate the funding pool across proposals. The entire process — submission, deliberation, decision — happened transparently within the Hylo group. Everyone could see the reasoning, the tradeoffs, and the outcomes.',
      whatHappened:
        'Float distributed over $700,000 USD through participatory funding rounds on Hylo in 2025. Resources flowed to projects that had genuine community support rather than institutional backing. The process demonstrated that communities can allocate significant resources through democratic processes when they have the infrastructure to do it well.',
      teamNote:
        'Flesh this out with specifics. How many proposals were submitted? How many community members voted? What was the average funding amount per project? How did the community feel about the outcomes? Were there any projects funded that wouldn\u2019t have been under a traditional panel model? A quote from a funded project or from Float leadership would be powerful.',
      quote: null,
      quoteFrom: 'from Float leadership or a community member about the experience of participatory funding',
    },
    {
      id: 'pha',
      shortName: 'Planetary Health Alliance',
      name: 'Planetary Health Alliance',
      cardLine: '210 organizations across 47 countries, coordinating in one place.',
      category: 'Global Network',
      color: NETWORK_TEAL,
      tagline: '210 organizations across 47 countries, coordinating in one place.',
      imageLabel: 'A map view of PHA member organizations, or a photo from a PHA regional gathering.',
      theGroup:
        'The Planetary Health Alliance is a global consortium of over 210 organizations committed to understanding and addressing the human health impacts of environmental change. Based out of the Harvard T.H. Chan School of Public Health, PHA connects researchers, educators, practitioners, and policymakers across 47 countries.',
      theChallenge:
        'A global network of 210+ organizations with 5,000+ newsletter subscribers needed more than email blasts and annual conferences. Members wanted to find each other, collaborate on projects, join affinity groups, and share resources — but there was no persistent community infrastructure. Communications went one-way from HQ. Regional connections were invisible. People who might collaborate didn\u2019t know each other existed.',
      whatTheyDid:
        'PHA built their community on Hylo with nested groups for regional hubs, thematic working groups, and special initiatives. The member directory helped researchers find collaborators across disciplines and geographies. Cross-group posting connected regional hubs to the global conversation. Events organized webinars, regional meetups, and the annual conference community. The platform became the persistent space where the network\u2019s relationships lived between conferences.',
      whatHappened:
        'PHA moved from one-way communication to genuine multi-directional coordination. Regional hubs became active spaces for local collaboration. Members across countries discovered shared research interests and launched joint projects. The annual conference community on Hylo gave attendees a place to continue conversations and collaborations year-round rather than losing momentum after the event.',
      teamNote:
        'PHA is the most institutionally credible name on the platform. This story needs hard metrics: how many active members on Hylo, how many regional hubs are active, any research collaborations or projects that originated through connections made on the platform. A quote from PHA leadership (Marie, Max, or another leader) would carry enormous weight for funders and institutional partners.',
      quote: null,
      quoteFrom: 'from PHA leadership about the shift from one-way communication to community coordination',
    },
    {
      id: 'millennium',
      shortName: 'Millennium Fellowship',
      name: 'Millennium Fellowship',
      cardLine: '5,000 fellows across 170 nations, learning together on Hylo.',
      category: 'Learning',
      color: LEARN_BLUE,
      tagline: '5,000 fellows across 170 nations, learning together on Hylo.',
      imageLabel: 'A photo of fellows on campus, or a screenshot of the program\u2019s learning track on Hylo.',
      theGroup:
        'The Millennium Fellowship is a UN-funded leadership development program run by the Millennium Campus Network. Each semester, thousands of fellows across hundreds of campuses worldwide go through a structured program focused on the Sustainable Development Goals. Each fellow completes a capstone project tied to their community\u2019s needs.',
      theChallenge:
        'Coordinating a leadership program across 218 campuses in 48 nations, with content delivered weekly, progress tracked per student, and campus directors managing local teams — while keeping the whole cohort connected across borders. They needed structured learning (tracks), community discussion, cross-campus connection, and program administration in a single platform. Their previous tools couldn\u2019t handle the scale or the structure.',
      whatTheyDid:
        'The Millennium Fellowship uses Hylo\u2019s learning tracks extensively. Weekly tracks deliver program content with actions that fellows complete as they progress. Campus directors manage their local teams within campus-level subgroups, all nested under the global program group. Training-the-trainers tracks onboard new campus directors. Discussion posts create cross-campus dialogue. The platform holds both the structured curriculum and the organic community that forms around it.',
      whatHappened:
        'The program runs at scale on Hylo — 5,000 accepted fellows each semester, across 170 nations. Learning tracks structure the weekly program. The community persists across cohorts, building an alumni network that grows with each semester. Campus directors manage their local programs within the platform rather than juggling email, WhatsApp, and Google Docs.',
      teamNote:
        'The Millennium Fellowship is Hylo\u2019s strongest "mainstream" case study — a UN-affiliated program at global scale. Metrics to gather: how many fellows have used the platform total, track completion rates, any measurable outcomes from capstone projects. A quote from a campus director or program leader would demonstrate that Hylo works for large, structured institutions, not just small values-aligned groups.',
      quote: null,
      quoteFrom: 'from a campus director or Millennium Campus Network leader about why Hylo works for their program',
    },
    {
      id: 'great-simplification',
      shortName: 'The Great Simplification',
      name: 'The Great Simplification',
      cardLine: 'Turning a global audience into local communities of action.',
      category: 'Community of Practice',
      color: PRACTICE_ORG,
      tagline: 'Turning a global audience into local communities of action.',
      imageLabel: 'A screenshot of a regional meetup post, or a Hylo map view of distributed members.',
      theGroup:
        'The Great Simplification is a media platform and community centered around Nate Hagens\u2019 work on energy, ecology, economics, and human behavior. The community includes thousands of people worldwide who are engaged with the ideas and looking for ways to act on them — locally, practically, in their own lives and communities.',
      theChallenge:
        'The Great Simplification had a large, engaged audience — people watching videos, attending events, sharing ideas — but the community existed primarily as a passive audience consuming content. There was no infrastructure for members to connect with each other, find people near them, or organize local action. People in the same city who shared the same concerns had no way to discover each other through the platform.',
      whatTheyDid:
        'The community moved to Hylo as a space where audience becomes community. Discussion posts replaced passive consumption with active exchange. The map revealed that people who felt isolated in their concerns had neighbors who shared them. Topic-based discussions let members go deeper on specific themes. Events organized local meetups and study groups. The platform became the place where ideas about the great simplification translated into local relationships and action.',
      whatHappened:
        'Members transitioned from audience to community — posting discussions, organizing local meetups, and connecting with people in their own regions who share their concerns. The platform provided the infrastructure for a global intellectual community to develop local roots.',
      teamNote:
        'This story is important because it demonstrates Hylo\u2019s value for "culture creator" communities — a large audience built around ideas that wants to become a participatory community. Metrics needed: active member count, number of local meetups organized, geographic spread of activity. A quote from Nate Hagens or Jeff (who has expressed interest in supporting Hylo financially) would be particularly valuable.',
      quote: null,
      quoteFrom: 'from community leadership about the transition from audience to participatory community',
    },
  ];

  // ——————— Page composition ———————
  function StoriesPage() {
    const Nav = window.VE_Nav;
    return (
      <div style={{ background: '#fff', color: RHINO, fontFamily: T.sans }}
           data-screen-label="Community Stories">
        <Nav accent={FOREST} />
        <Hero />
        <IndexCards stories={STORIES} />
        {STORIES.map((s, i) => (
          <Story key={s.id} id={s.id} story={s} index={i} />
        ))}
        <ClosingCTA />
        <StoriesFooter />
      </div>
    );
  }

  window.StoriesPage = StoriesPage;
})();
