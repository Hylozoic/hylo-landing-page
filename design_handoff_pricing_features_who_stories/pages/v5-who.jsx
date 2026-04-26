// v5-who.jsx — "Who is Hylo for" page (V5 system)
// Follows spec: hylo-who-is-it-for-spec.md
// Reuses VE_Nav, VE_THEME, HYLO tokens. Footer mirrored from sibling pages.
// Design element: the group-type tags. They're scannable; a fire chief, an
// HOA board member, and a food co-op manager should all spot themselves.
// Voice: operational, plain language. The Pattern section earns the right
// to philosophize after the use case parade.

(function () {
  const H = window.HYLO;
  const T = window.VE_THEME;
  const RHINO = H.rhino;          // '#2C4059'
  const RHINO_RGB = '44,64,89';
  const FOREST = H.forest;        // '#087736'
  const ATHENS = H.athensGray;
  const ATHENS_DARK = H.athensDark;

  // Post-type accent palette (spec-defined per use case)
  const CARIB = H.caribbean;            // #0DC39F — neighborhood
  const TEAL = H.requestTeal;           // #00C79D — mutual aid
  const EVENT = H.eventRed;             // #FE4850 — disaster, events
  const PROPOSAL = H.proposalPurple;    // #664BA5 — civic
  const DISCUSS = H.discussBlue;        // #00A3E3 — nonprofits
  const PICTON = '#40A1DD';             // — learning
  const MEADOW = '#23CC80';             // — food
  const PROJECT = H.projectOrange;      // #FC8000 — land
  const MED_PURPLE = '#9883E5';         // — co-ops

  const maxBody = 720;
  const maxWide = 900;

  // ——————— Shared text styles ———————
  const useCaseH = {
    fontSize: 26, fontWeight: 700, letterSpacing: -0.4,
    color: RHINO, margin: 0, lineHeight: 1.2, textWrap: 'balance',
  };
  const challengeP = {
    fontSize: 16, lineHeight: 1.65, margin: '12px 0 0',
    color: `rgba(${RHINO_RGB},0.80)`, textWrap: 'pretty',
  };
  const helpsP = {
    fontSize: 15, lineHeight: 1.65, margin: '16px 0 0',
    color: `rgba(${RHINO_RGB},0.70)`, textWrap: 'pretty',
  };
  const exampleP = {
    fontSize: 14, lineHeight: 1.6, margin: '20px 0 0',
    color: `rgba(${RHINO_RGB},0.55)`,
    fontStyle: 'italic', textWrap: 'pretty',
    paddingLeft: 14, borderLeft: `2px solid rgba(${RHINO_RGB},0.18)`,
  };
  const helpsLabel = {
    fontSize: 11, fontWeight: 600, letterSpacing: 0.8,
    textTransform: 'uppercase', color: FOREST,
    margin: '24px 0 0',
  };
  const challengeLabel = {
    fontSize: 11, fontWeight: 600, letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: `rgba(${RHINO_RGB},0.45)`,
    margin: 0,
  };

  // ——————— Hero ———————
  function Hero() {
    return (
      <section style={{
        background: H.cream,
        padding: '160px 40px 60px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: 1.2,
            textTransform: 'uppercase',
            color: `rgba(${RHINO_RGB},0.55)`,
            marginBottom: 20,
          }}>Who is Hylo for</div>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700,
            letterSpacing: -1.2, lineHeight: 1.05, margin: 0,
            color: RHINO, textWrap: 'balance',
          }}>
            Hylo works for groups that need to do more than talk.
          </h1>
          <p style={{
            fontSize: 18, lineHeight: 1.6, margin: '24px auto 0',
            color: `rgba(${RHINO_RGB},0.80)`, maxWidth: 640,
            textWrap: 'pretty',
          }}>
            If your group needs to coordinate across people, share resources,
            make decisions together, or organize around a shared place — Hylo
            was built for you. Here&rsquo;s how groups like yours are using it.
          </p>
        </div>
      </section>
    );
  }

  // ——————— Use case section ———————
  function UseCase({ id, num, title, accent, bg, challenge, helps, tags, example }) {
    const accentRGB = hexToRgb(accent);
    const tagBg = bg === '#fff' ? ATHENS : '#fff';
    return (
      <section id={id} style={{
        background: bg,
        padding: '64px 40px',
        fontFamily: T.sans, color: RHINO,
        position: 'relative',
      }}>
        <div style={{
          maxWidth: maxWide, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)',
          gap: 0, position: 'relative',
        }}>
          {/* Accent bar */}
          <div style={{
            position: 'absolute', left: -20, top: 6, bottom: 0,
            width: 4, background: `rgba(${accentRGB},0.45)`,
            borderRadius: 2,
          }} className="use-case-accent" />

          {/* Number + title */}
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 16,
            flexWrap: 'wrap',
          }}>
            <span style={{
              fontSize: 13, fontWeight: 600,
              color: accent, letterSpacing: 0.6,
              fontVariantNumeric: 'tabular-nums',
            }}>{String(num).padStart(2, '0')}</span>
            <h2 style={useCaseH}>{title}</h2>
          </div>

          {/* The challenge */}
          <p style={challengeLabel}>{/* spacer label not needed visually */}</p>
          <p style={challengeP}>{challenge}</p>

          {/* How Hylo helps */}
          <div style={helpsLabel}>How Hylo helps</div>
          <p style={helpsP}>{helps}</p>

          {/* Tags */}
          <div style={{
            marginTop: 24,
            display: 'flex', flexWrap: 'wrap', gap: '8px 8px',
          }}>
            {tags.map((tag, i) => (
              <span key={i} style={{
                display: 'inline-block',
                padding: '6px 12px',
                background: tagBg,
                color: `rgba(${RHINO_RGB},0.72)`,
                fontSize: 11, fontWeight: 600, letterSpacing: 0.8,
                textTransform: 'uppercase',
                borderRadius: 4,
                border: `1px solid rgba(${RHINO_RGB},0.08)`,
                whiteSpace: 'nowrap',
              }}>{tag}</span>
            ))}
          </div>

          {/* Example */}
          {example && <p style={exampleP}>{example}</p>}
        </div>
      </section>
    );
  }

  // ——————— Section 3: For Individuals ———————
  function ForIndividuals() {
    return (
      <section style={{
        background: ATHENS,
        padding: '72px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 24, fontWeight: 700, letterSpacing: -0.4,
            color: RHINO, margin: 0, lineHeight: 1.2,
          }}>
            Not sure where to start?
          </h2>
          <p style={{
            margin: '16px auto 0', maxWidth: 640,
            fontSize: 16, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.80)`, textWrap: 'pretty',
          }}>
            You don&rsquo;t need to bring a group to get value from Hylo.
            Browse the map. Find communities near you. Explore the public
            commons. See what&rsquo;s happening in your watershed, your city,
            your bioregion. Join a group that resonates. Ask for help. Offer
            what you can. Hylo is a good place to find out where you fit.
          </p>
          <div style={{ marginTop: 24 }}>
            <a href="#" style={{
              fontSize: 14, fontWeight: 500, color: FOREST,
              textDecoration: 'none',
            }}>Explore the commons →</a>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 4: The Pattern (dark) ———————
  function Pattern() {
    return (
      <section style={{
        background: RHINO,
        padding: '96px 40px',
        fontFamily: T.sans, color: '#fff',
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: 1.2,
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: 20,
          }}>The pattern</div>
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700,
            letterSpacing: -0.6, lineHeight: 1.15, margin: 0,
            color: '#fff', textWrap: 'balance',
          }}>
            What these groups have in common
          </h2>
          <div style={{
            margin: '24px auto 0', maxWidth: 640,
            fontSize: 16, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.85)', textAlign: 'left',
            textWrap: 'pretty',
          }}>
            <p style={{ margin: 0 }}>
              Every group listed above faces the same underlying challenge:
              they need to coordinate real action among real people, in ways
              that build trust over time and distribute power rather than
              concentrating it. They don&rsquo;t need a better chat app. They
              don&rsquo;t need a content platform. They need coordination
              infrastructure — tools for mutual support, collective
              decision-making, and shared stewardship.
            </p>
            <p style={{ marginTop: 16, marginBottom: 0 }}>
              That&rsquo;s what Hylo is. Not a social network. Not a project
              management tool. Not a governance app. A coordination platform
              that grows with your group as trust deepens and complexity
              increases.
            </p>
            <p style={{ marginTop: 16, marginBottom: 0 }}>
              It starts with conversation. It builds through mutual support.
              It matures into self-governance. Every group does this in its
              own way, at its own pace. Hylo just makes the infrastructure
              available.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Closing CTA ———————
  function ClosingCTA() {
    return (
      <section style={{
        background: H.cream,
        padding: '60px 40px 80px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 28, fontWeight: 700, letterSpacing: -0.5,
            color: RHINO, margin: 0, lineHeight: 1.15,
          }}>
            See yourself here?
          </h2>
          <p style={{
            margin: '16px auto 0', maxWidth: 480,
            fontSize: 16, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.70)`, textWrap: 'pretty',
          }}>
            Hylo is free for every group. Set up your community in about
            15 minutes and start coordinating.
          </p>
          <div style={{
            marginTop: 28,
            display: 'flex', gap: 12, justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="v5-bring-your-group.html" style={{
              display: 'inline-block',
              background: FOREST, color: '#fff',
              padding: '0 24px', height: 40, lineHeight: '40px',
              borderRadius: 6,
              fontSize: 14, fontWeight: 600, letterSpacing: 0.2,
              textDecoration: 'none',
            }}>Create your group — free</a>
            <a href="v5-features.html" style={{
              display: 'inline-block',
              padding: '0 16px', height: 40, lineHeight: '40px',
              fontSize: 14, fontWeight: 500, color: FOREST,
              textDecoration: 'none',
            }}>Explore features →</a>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Footer (mirrored from sibling pages) ———————
  function WhoFooter() {
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

  // helper: convert hex to "r,g,b" string
  function hexToRgb(hex) {
    const h = hex.replace('#', '');
    const n = parseInt(h.length === 3 ? h.split('').map(c => c+c).join('') : h, 16);
    return `${(n>>16)&255},${(n>>8)&255},${n&255}`;
  }

  // ——————— Use case data ———————
  const USE_CASES = [
    {
      id: 'place', num: 1,
      title: 'Neighborhood and place-based organizing',
      accent: CARIB, bg: '#fff',
      challenge: 'You want to connect people who share a place — a neighborhood, a town, a watershed. The challenge isn\u2019t distance; it\u2019s that people who live near each other often have no way to coordinate, share resources, or make decisions about the things they share. Existing tools are either social media (designed for attention, not action) or government portals (designed for broadcast, not participation).',
      helps: 'Hylo organizes groups around geography. The map shows what\u2019s happening near you. Requests and offers connect neighbors. Events bring people together in person. As trust builds, groups can move into collective decision-making — proposals about shared resources, participatory budgets, community agreements. Subgroups let neighborhoods coordinate within a city, blocks within a neighborhood.',
      tags: ['Neighborhood associations', 'HOAs', 'Block clubs', 'Town councils', 'Civic engagement initiatives', 'Bioregional hubs', 'Watershed stewardship groups', 'Community land trusts'],
      example: 'Common Good Missoula used Hylo to coordinate a zoning and land use reform campaign — bringing together diverse stakeholders across the city around shared goals for housing access. Cross-group posting let organizers share updates across neighborhood groups simultaneously.',
    },
    {
      id: 'mutual-aid', num: 2,
      title: 'Mutual aid and resource sharing',
      accent: TEAL, bg: ATHENS,
      challenge: 'People in your community have needs and others have the capacity to meet them — skills, tools, food, time, rides, childcare. But there\u2019s no system for connecting them. WhatsApp threads get buried. Facebook groups drown in noise. Spreadsheets go stale. And no one is tracking whether requests actually get fulfilled.',
      helps: 'Requests and offers are first-class post types with location, timing, topic tags, and completion tracking. When someone helps, it\u2019s recorded. Over time, the group builds a visible record of reciprocal support — the trust infrastructure that makes more complex coordination possible later. The map shows what\u2019s needed and offered nearby. AI matching (coming soon) will accelerate connections.',
      tags: ['Mutual aid networks', 'Buy Nothing groups', 'Tool lending libraries', 'Community fridges', 'Timebanks', 'Volunteer coordination groups', 'Disaster relief networks', 'Parent co-ops', 'Neighbor-to-neighbor support groups'],
      example: 'When a community faces a crisis — wildfire, flood, economic disruption — mutual aid groups on Hylo can spin up rapidly, coordinate offers and needs geographically, and track who\u2019s been helped and who still needs support. The map becomes the coordination surface.',
    },
    {
      id: 'disaster', num: 3,
      title: 'Disaster preparedness and emergency response',
      accent: EVENT, bg: '#fff',
      challenge: 'When disaster hits, the communities that respond fastest are the ones that already know each other. But most neighborhoods have no pre-existing coordination infrastructure. Emergency management agencies can broadcast, but they can\u2019t facilitate neighbor-to-neighbor support at scale. After the initial crisis, long-term recovery requires sustained coordination that emergency systems aren\u2019t designed for.',
      helps: 'Hylo gives communities the coordination infrastructure before they need it — and the same tools work during and after a crisis. Place-based groups connect neighbors. Requests and offers match needs to resources in real time, geographically. The map shows where help is needed and where it\u2019s available. Cross-group posting lets mutual aid networks coordinate with official response agencies. Events organize work parties, supply distributions, check-in meetings. And because the infrastructure was built during calm times, trust is already in place when the storm hits.',
      tags: ['CERT teams', 'Firewise communities', 'Neighborhood emergency preparedness groups', 'Volunteer fire departments', 'Community resilience networks', 'Red Cross chapters', 'Local emergency management agencies', 'Faith-based disaster response teams'],
    },
    {
      id: 'civic', num: 4,
      title: 'Civic participation and governance',
      accent: PROPOSAL, bg: ATHENS,
      challenge: 'You want your community to make decisions together — real decisions about real resources — but the tools for democratic participation at the local level are terrible. Town halls are inaccessible. Email comment periods are performative. There\u2019s no infrastructure for ongoing civic participation between elections. And every governance experiment reinvents the wheel because there\u2019s no shared toolkit.',
      helps: 'Proposals with flexible voting options (consent, consensus, ranked choice, gradients of agreement), quorum settings, and outcome tracking. Agreements that members consent to and that anchor moderation. Roles with distributed responsibilities. Funding rounds for participatory budgeting. All within a place-based group structure where participants share a geography, not just an opinion. Hylo makes governance participatory rather than performative.',
      tags: ['City and town civic engagement portals', 'Participatory budgeting initiatives', 'Citizen assemblies', 'Community planning processes', 'Cooperative governance boards', 'Municipal advisory committees', 'Tribal governance bodies', 'Community development corporations'],
      example: 'Float, the Funding Lab for Agroecological Technology, used Hylo\u2019s funding rounds to distribute over $700,000 through participatory processes — community members reviewed proposals, discussed priorities, and collectively allocated real resources.',
    },
    {
      id: 'nonprofits', num: 5,
      title: 'Nonprofit and mission-driven organizations',
      accent: DISCUSS, bg: '#fff',
      challenge: 'Your organization has staff, volunteers, board members, partners, and community members — all in different apps. Internal communication happens on Slack. Community engagement happens on Facebook. Events go through Eventbrite. Board decisions happen in email. Nobody can see the whole picture. And the platforms you\u2019re using are either designed for companies (Slack) or designed to monetize your community\u2019s attention (Facebook).',
      helps: 'One platform for all of it: internal team coordination, community engagement, events, volunteer coordination, proposals and decisions, and cross-organization partnerships. Nested groups mean your board, your staff, your volunteer corps, and your public community all have their own spaces while staying connected. No ads, no data extraction, and open-source governance mean your organization\u2019s home won\u2019t be rug-pulled by a platform\u2019s quarterly earnings call.',
      tags: ['Environmental nonprofits', 'Community foundations', 'Advocacy organizations', 'Civic associations', 'Faith communities', 'Service clubs (Rotary, Lions, Kiwanis)', 'Cultural organizations', 'Health and wellness nonprofits', 'Social justice organizations'],
    },
    {
      id: 'networks', num: 6,
      title: 'Networks and coalitions',
      accent: CARIB, bg: ATHENS,
      challenge: 'You\u2019re trying to coordinate across multiple organizations that each have their own leadership, culture, and tools. Coalition meetings happen quarterly. Information silos are persistent. Nobody can see what the other groups are doing. Shared projects fall through the cracks between organizations. And every coalition platform you\u2019ve tried is either another walled garden or a glorified mailing list.',
      helps: 'Cross-group coordination is Hylo\u2019s most distinctive capability. Groups can peer with other groups, share content across boundaries, and post to multiple groups simultaneously. A regional coalition can see itself — all the member organizations, their activities, and their people — on a single map. Network-level coordination becomes visible without requiring every organization to merge into one space. Parent groups can contain sub-organizations while respecting their autonomy.',
      tags: ['Regional health networks', 'Farm-to-table coalitions', 'Watershed councils', 'Interfaith alliances', 'Housing advocacy coalitions', 'Climate action networks', 'Impact networks', 'Professional associations', 'Chambers of commerce', 'Arts and culture collaboratives'],
    },
    {
      id: 'learning', num: 7,
      title: 'Learning communities and cohort programs',
      accent: PICTON, bg: '#fff',
      challenge: 'You run a program — a cohort, a fellowship, a course, a professional development track — and the learning experience lives in a dozen places. Content in an LMS. Discussion on Slack. Events on Luma. Assignments in Google Docs. Alumni scattered to the wind. There\u2019s no persistent community that holds the learning, the relationships, and the ongoing connection after the program ends.',
      helps: 'Learning tracks guide members through structured content with actions and completion tracking. Discussion posts create space for reflection and peer exchange. The community persists after the program ends — alumni stay connected, share resources, and continue learning together. Groups can nest program cohorts within a broader community. Badges earned through track completion signal expertise and unlock access. Paid tracks enable financially sustainable programming.',
      tags: ['Fellowship programs', 'Leadership development cohorts', 'Professional development communities', 'Online course communities', 'Continuing education programs', 'Mentorship networks', 'University program alumni groups', 'Trade and craft learning circles'],
      example: 'The Millennium Fellowship — a UN-funded leadership program with 5,000 accepted fellows across 170 nations — uses Hylo\u2019s tracks extensively for weekly programming, campus-level coordination, and cross-cohort connection.',
    },
    {
      id: 'food', num: 8,
      title: 'Food systems and local economies',
      accent: MEADOW, bg: ATHENS,
      challenge: 'Local food systems involve dozens of actors — farmers, markets, co-ops, restaurants, food banks, gleaning networks, community gardens — who all serve the same community but rarely coordinate. Information about what\u2019s available, what\u2019s needed, and who\u2019s doing what stays locked in individual organizations. Seasonal coordination (harvest schedules, market logistics, surplus distribution) depends on phone calls and personal relationships that don\u2019t scale.',
      helps: 'A food systems group on Hylo becomes the coordination hub: requests and offers flow between producers and consumers, events announce markets and workshops, the map shows where food is grown, distributed, and needed. Subgroups organize by function (growers, distributors, kitchens). Cross-group posting connects a CSA\u2019s announcement to the neighborhood groups it serves. Resource posts build a shared knowledge base of seasonal guides, preservation techniques, and supply chain contacts.',
      tags: ['CSAs and farm shares', 'Farmers\u2019 markets', 'Food co-ops', 'Gleaning networks', 'Community gardens', 'Food policy councils', 'Farm-to-school programs', 'Seed libraries', 'Community kitchens', 'Food banks and pantries'],
    },
    {
      id: 'events', num: 9,
      title: 'Events, conferences, and gatherings',
      accent: EVENT, bg: '#fff',
      challenge: 'You run events — conferences, retreats, summits, festivals — and the community energy dissipates immediately after. Attendees connect intensely for three days and then scatter back to their inboxes. You want the relationships and momentum to persist, but a post-event Slack goes silent within a week. The next gathering starts from scratch.',
      helps: 'Create a group for your event community that lives year-round — not just during the gathering. Between events, members discuss, share resources, collaborate on projects, and stay connected. When the next event approaches, the community is already warm. Cross-group posting lets you share across related event communities. The map helps attendees find each other geographically for local meetups between main events.',
      tags: ['Annual conferences', 'Unconferences and summits', 'Retreats and intensives', 'Festival communities', 'Professional meetup networks', 'Community gathering series', 'Camp and reunion communities'],
    },
    {
      id: 'land', num: 10,
      title: 'Land stewardship and shared resources',
      accent: PROJECT, bg: ATHENS,
      challenge: 'You share resources with other people — land, water, equipment, commons, buildings — and you need to coordinate how those resources are managed, maintained, and governed. Cohousing communities need to make decisions about shared spaces. Farm collectives need to coordinate equipment schedules. Land trusts need to engage the community in stewardship decisions. The governance challenge is real: how do you make fair, transparent decisions about things you share?',
      helps: 'Proposals and voting for shared decisions. Agreements that everyone consents to. Roles that distribute responsibility. Requests and offers for equipment sharing, work trade, and mutual support. Events for work parties and governance meetings. Funding rounds for capital improvements. The governance infrastructure grows with the group — start with simple decisions, build toward complex resource allocation as trust deepens.',
      tags: ['Cohousing and intentional communities', 'Community land trusts', 'Conservation easements', 'Cooperative farms', 'Makerspaces and workshops', 'Community centers', 'Shared office spaces', 'Water districts', 'Irrigation cooperatives', 'Grazing associations'],
    },
    {
      id: 'coops', num: 11,
      title: 'Cooperatives and worker-owned organizations',
      accent: MED_PURPLE, bg: '#fff',
      challenge: 'Cooperatives need democratic governance baked into daily operations, not bolted on as an annual meeting. Member-owners need to participate in decisions, understand what\u2019s happening, and hold leadership accountable — but the tools designed for top-down companies don\u2019t support distributed authority. And most co-ops are too small to build custom tools.',
      helps: 'Hylo\u2019s governance tools were designed for exactly this: proposals with consent-based voting, roles with clearly scoped authority, agreements that bind, and moderation that\u2019s accountable to the community. Working groups and committees each get their own subgroup. Cross-group posting keeps the whole membership informed without drowning them. The developmental progression — from conversation to mutual support to collective governance — mirrors how healthy cooperatives grow.',
      tags: ['Worker cooperatives', 'Housing cooperatives', 'Consumer co-ops', 'Credit unions and community finance', 'Platform cooperatives', 'Cooperative groceries', 'Energy cooperatives', 'Cooperative childcare', 'Cooperative land management'],
    },
  ];

  // ——————— Page composition ———————
  function WhoPage() {
    const Nav = window.VE_Nav;
    return (
      <div style={{ background: '#fff', color: RHINO, fontFamily: T.sans }}
           data-screen-label="Who Is It For">
        <Nav accent={FOREST} />
        <Hero />
        {USE_CASES.map((u) => <UseCase key={u.id} {...u} />)}
        <ForIndividuals />
        <Pattern />
        <ClosingCTA />
        <WhoFooter />
      </div>
    );
  }

  window.WhoPage = WhoPage;
})();
