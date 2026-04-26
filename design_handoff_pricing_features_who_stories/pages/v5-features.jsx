// v5-features.jsx — Hylo Features reference page (V5 system)
// Follows spec: hylo-features-page-spec.md
// Reuses VE_Nav, VE_THEME, HYLO tokens. Footer mirrored from sibling pages.
// Tone: reference document, not sales page. Specific feature names; short
// descriptions; no marketing fluff. "Pro" / "Coming soon" badges are
// subtle exceptions to the default (free + live).

(function () {
  const H = window.HYLO;
  const T = window.VE_THEME;
  const RHINO = H.rhino;          // '#2C4059'
  const RHINO_RGB = '44,64,89';
  const FOREST = H.forest;        // '#087736' — primary accent
  const FOREST_LIGHT = H.forestLight;
  const ATHENS = H.athensGray;
  const ATHENS_DARK = H.athensDark;

  // Category icon colors (post-type palette)
  const DISCUSS = H.discussBlue;        // '#00A3E3'
  const EVENT_RED = H.eventRed;         // '#FE4850'
  const REQUEST = H.requestTeal;        // '#00C79D'
  const PROJECT = H.projectOrange;      // '#FC8000'
  const PROPOSAL = H.proposalPurple;    // '#664BA5'
  const PICTON = '#40A1DD';
  const GOLD = '#D4A516';

  const maxBody = 720;
  const maxWide = 900;

  // ——————— Shared text styles ———————
  const sectionH = {
    fontSize: 24, fontWeight: 700, letterSpacing: -0.4,
    color: RHINO, margin: 0, lineHeight: 1.2,
  };
  const featureName = {
    fontSize: 16, fontWeight: 500, color: RHINO, lineHeight: 1.3, margin: 0,
  };
  const featureDesc = {
    fontSize: 14, lineHeight: 1.55, margin: '6px 0 0',
    color: `rgba(${RHINO_RGB},0.70)`, textWrap: 'pretty',
  };

  // ——————— Status badges ———————
  function Badge({ kind }) {
    if (kind === 'soon') return (
      <span style={{
        display: 'inline-block', verticalAlign: 'middle',
        marginLeft: 8, padding: '2px 7px',
        background: FOREST, color: '#fff',
        fontSize: 10, fontWeight: 600, letterSpacing: 0.6,
        textTransform: 'uppercase', borderRadius: 999,
        lineHeight: 1.4, position: 'relative', top: -1,
      }}>Coming soon</span>
    );
    if (kind === 'pro') return (
      <span style={{
        display: 'inline-block', verticalAlign: 'middle',
        marginLeft: 8, padding: '1px 7px',
        background: 'transparent', color: FOREST,
        border: `1px solid ${FOREST}`,
        fontSize: 10, fontWeight: 600, letterSpacing: 0.6,
        textTransform: 'uppercase', borderRadius: 999,
        lineHeight: 1.4, position: 'relative', top: -1,
      }}>Pro</span>
    );
    return null;
  }

  // ——————— Category icons (24px) ———————
  function CatIcon({ kind, color }) {
    const props = {
      width: 24, height: 24, viewBox: '0 0 24 24',
      fill: 'none', stroke: color, strokeWidth: 1.8,
      strokeLinecap: 'round', strokeLinejoin: 'round',
    };
    switch (kind) {
      case 'people': return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3.2"/>
          <path d="M3.5 19c.5-3 2.7-5 5.5-5s5 2 5.5 5"/>
          <circle cx="16.5" cy="9" r="2.5"/>
          <path d="M14.5 14.5c2.4 0 5 1.5 5.5 4.5"/>
        </svg>
      );
      case 'chat': return (
        <svg {...props}>
          <path d="M4 5h16v10H8l-4 4V5Z"/>
        </svg>
      );
      case 'calendar': return (
        <svg {...props}>
          <rect x="4" y="5" width="16" height="15" rx="2"/>
          <path d="M4 9h16M9 3v4M15 3v4"/>
        </svg>
      );
      case 'exchange': return (
        <svg {...props}>
          <path d="M4 8h13l-3-3M20 16H7l3 3"/>
        </svg>
      );
      case 'clipboard': return (
        <svg {...props}>
          <rect x="6" y="5" width="12" height="16" rx="2"/>
          <path d="M9 5V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"/>
          <path d="M9 11h6M9 15h4"/>
        </svg>
      );
      case 'vote': return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <path d="m8 12 3 3 5-6"/>
        </svg>
      );
      case 'pin': return (
        <svg {...props}>
          <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
      );
      case 'coin': return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8"/>
          <path d="M9 9.5c.5-1 1.5-1.5 3-1.5s3 1 3 2.5-1.5 2-3 2-3 .5-3 2 1.5 2.5 3 2.5 2.5-.5 3-1.5"/>
          <path d="M12 6v2M12 16v2"/>
        </svg>
      );
      case 'path': return (
        <svg {...props}>
          <path d="M5 19c0-3 2-5 5-5h4c3 0 5-2 5-5"/>
          <circle cx="5" cy="19" r="1.5" fill={color}/>
          <circle cx="19" cy="9" r="1.5" fill={color}/>
        </svg>
      );
      case 'profile': return (
        <svg {...props}>
          <circle cx="12" cy="9" r="3.5"/>
          <path d="M5 20c1-3.5 4-5.5 7-5.5s6 2 7 5.5"/>
        </svg>
      );
      case 'sliders': return (
        <svg {...props}>
          <path d="M4 7h10M18 7h2M4 12h4M12 12h8M4 17h12M20 17h0"/>
          <circle cx="14" cy="7" r="2"/>
          <circle cx="10" cy="12" r="2"/>
          <circle cx="18" cy="17" r="2"/>
        </svg>
      );
      case 'shield': return (
        <svg {...props}>
          <path d="M12 3 5 6v6c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6l-7-3Z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      );
      case 'phone': return (
        <svg {...props}>
          <rect x="7" y="3" width="10" height="18" rx="2"/>
          <path d="M11 18h2"/>
        </svg>
      );
      case 'platform': return (
        <svg {...props}>
          <path d="M4 8 12 4l8 4-8 4-8-4Z"/>
          <path d="m4 12 8 4 8-4M4 16l8 4 8-4"/>
        </svg>
      );
      default: return null;
    }
  }

  // ——————— Section 1 · Hero with quick nav ———————
  const QUICK_NAV = [
    { id: 'groups', label: 'Groups' },
    { id: 'communication', label: 'Communication' },
    { id: 'events', label: 'Events' },
    { id: 'mutual', label: 'Mutual Support' },
    { id: 'projects', label: 'Projects' },
    { id: 'governance', label: 'Governance' },
    { id: 'map', label: 'Map & Place' },
    { id: 'funding', label: 'Funding Rounds' },
    { id: 'tracks', label: 'Learning Tracks' },
    { id: 'profiles', label: 'Profiles & Directory' },
    { id: 'customization', label: 'Customization' },
    { id: 'moderation', label: 'Moderation' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'platform', label: 'Platform' },
    { id: 'soon', label: 'Coming Soon' },
  ];

  function Hero() {
    return (
      <section style={{
        background: H.cream,
        padding: '160px 40px 48px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxBody, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontSize: 52, fontWeight: 700, letterSpacing: -1.2,
            lineHeight: 1.05, margin: 0, color: RHINO, textWrap: 'balance',
          }}>
            Everything Hylo can do.
          </h1>
          <p style={{
            fontSize: 18, lineHeight: 1.6, margin: '16px auto 0',
            color: `rgba(${RHINO_RGB},0.70)`, maxWidth: 560,
            textWrap: 'pretty',
          }}>
            A full reference of the coordination tools available to every
            group on Hylo. All of these features are included in the free
            platform unless marked otherwise.
          </p>
        </div>

        <div style={{
          marginTop: 32, maxWidth: 980, margin: '32px auto 0',
          display: 'flex', justifyContent: 'center',
          flexWrap: 'wrap', alignItems: 'center',
          gap: '6px 0',
          fontFamily: T.sans,
        }} className="quick-nav">
          {QUICK_NAV.map((q, i) => (
            <React.Fragment key={q.id}>
              <a href={`#${q.id}`} style={{
                fontSize: 13, fontWeight: 500,
                color: `rgba(${RHINO_RGB},0.55)`,
                textDecoration: 'none',
                padding: '4px 10px',
                whiteSpace: 'nowrap',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = FOREST}
              onMouseLeave={(e) => e.currentTarget.style.color = `rgba(${RHINO_RGB},0.55)`}
              >{q.label}</a>
              {i < QUICK_NAV.length - 1 && (
                <span style={{
                  color: `rgba(${RHINO_RGB},0.25)`, fontSize: 12,
                }}>·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <style>{`
          @media (max-width: 720px) {
            .quick-nav {
              flex-wrap: nowrap !important;
              overflow-x: auto;
              justify-content: flex-start !important;
              scroll-snap-type: x mandatory;
              padding: 0 16px;
            }
            .quick-nav a { scroll-snap-align: start; }
          }
        `}</style>
      </section>
    );
  }

  // ——————— Category section ———————
  function Category({ id, title, icon, iconColor, intro, bg, children }) {
    return (
      <section id={id} style={{
        background: bg,
        padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: maxWide, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {icon && <CatIcon kind={icon} color={iconColor || FOREST} />}
            <h2 style={sectionH}>{title}</h2>
          </div>
          {intro && (
            <p style={{
              marginTop: 8, fontSize: 15, lineHeight: 1.6,
              color: `rgba(${RHINO_RGB},0.65)`, maxWidth: 720,
              textWrap: 'pretty',
            }}>{intro}</p>
          )}
          <div style={{
            marginTop: 24,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {children}
          </div>
        </div>
      </section>
    );
  }

  function Feature({ name, desc, badge }) {
    return (
      <div>
        <h3 style={featureName}>
          {name}
          {badge && <Badge kind={badge} />}
        </h3>
        <p style={featureDesc}>{desc}</p>
      </div>
    );
  }

  // ——————— Coming Soon roadmap ———————
  const ROADMAP = [
    { name: 'AI-Assisted Matching',
      desc: 'Intelligent matching of requests, offers, and potential collaborators based on skills, interests, location, and group history. Opt-in per group.' },
    { name: 'Hylo Assistant',
      desc: "A group-level AI assistant with full context across your group's history, documents, and decisions. Helps stewards with community health, growth guidance, and moderation awareness.",
      timeline: '$20/month per group' },
    { name: 'Project Management Upgrades',
      desc: 'Tasks with assignments, statuses, and due dates within projects. Kanban visualization. Contribution tracking over time.' },
    { name: 'Recurring Events',
      desc: 'Events that repeat on a schedule — weekly meetings, monthly gatherings. Appear automatically on the calendar and in digests.' },
    { name: 'Audio and Video Integration',
      desc: 'Open-source conferencing built into Hylo. Voice notes for posts and comments. No external platform required for group calls.' },
    { name: 'Hylo Pro',
      desc: 'Expanded storage, video streaming, priority support, and API access for groups that need more capacity.',
      timeline: '$60/month per group · Launching Summer 2026' },
    { name: 'Hylo Whitelabel',
      desc: "A dedicated Hylo deployment under your organization's brand, domain, and visual identity.",
      timeline: '$100/month · Launching Summer 2026' },
    { name: 'Ecosystem Interoperability',
      desc: 'Federation and data exchange with aligned platforms using AT Protocol and other open standards. Requests and offers visible across platforms. Shared identity and portable communities.' },
    { name: 'Member-Led Groups',
      desc: 'A governance model where stewardship roles are earned through cumulative trust rather than granted to whoever created the group. Time-bound, scoped leadership designed for shared stewardship.' },
    { name: 'Hylo Local',
      desc: 'Distributed, peer-to-peer infrastructure built on Holochain for communities that need coordination tools resistant to institutional surveillance.' },
  ];

  function ComingSoon() {
    return (
      <section id="soon" style={{
        background: '#fff',
        padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={sectionH}>What&rsquo;s coming next</h2>
          <p style={{
            marginTop: 12, fontSize: 15, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.65)`, maxWidth: 640,
            textWrap: 'pretty',
          }}>
            Hylo is actively developed by a small team alongside our open-source
            community. Here&rsquo;s what&rsquo;s in progress. Timelines are
            estimates, not promises — we move at the speed of trust.
          </p>
          <div style={{ marginTop: 32, display: 'grid', gap: 24 }}>
            {ROADMAP.map((r, i) => (
              <div key={i} style={{
                paddingBottom: i < ROADMAP.length - 1 ? 24 : 0,
                borderBottom: i < ROADMAP.length - 1
                  ? `1px solid ${ATHENS_DARK}` : 'none',
              }}>
                <h3 style={featureName}>{r.name}</h3>
                <p style={featureDesc}>{r.desc}</p>
                {r.timeline && (
                  <div style={{
                    marginTop: 6, fontSize: 12, fontWeight: 500,
                    color: FOREST,
                  }}>{r.timeline}</div>
                )}
              </div>
            ))}
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
            fontSize: 24, fontWeight: 700, letterSpacing: -0.4,
            color: RHINO, margin: 0, lineHeight: 1.2,
          }}>
            Ready to try it?
          </h2>
          <p style={{
            margin: '16px auto 0', maxWidth: 480,
            fontSize: 16, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.70)`, textWrap: 'pretty',
          }}>
            All of these features are available right now, free, for every
            group. Create your group and start coordinating.
          </p>
          <div style={{ marginTop: 24 }}>
            <a href="v5-bring-your-group.html" style={{
              display: 'inline-block', textAlign: 'center',
              background: FOREST, color: '#fff',
              padding: '0 24px', height: 40, lineHeight: '40px',
              borderRadius: 6,
              fontSize: 14, fontWeight: 600, letterSpacing: 0.2,
              textDecoration: 'none',
            }}>Create your group — free</a>
          </div>
          <div style={{ marginTop: 12 }}>
            <a href="v5-pricing.html" style={{
              fontSize: 14, fontWeight: 500, color: FOREST,
              textDecoration: 'none',
            }}>Compare plans →</a>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Footer (mirrored) ———————
  function FeaturesFooter() {
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
  function FeaturesPage() {
    const Nav = window.VE_Nav;
    return (
      <div style={{ background: '#fff', color: RHINO, fontFamily: T.sans }}
           data-screen-label="v5 Features">
        <Nav accent={FOREST} />
        <Hero />

        <Category id="groups" title="Groups & Community Structure"
                  icon="people" iconColor={FOREST} bg="#fff"
                  intro="Hylo's group system is the structural foundation of everything else. Groups can nest inside each other, peer with other groups, and share content across boundaries.">
          <Feature name="Create and manage groups"
            desc="Set up a group with a name, purpose statement, description, location, and banner image. Control visibility (public, protected, or private) and access (open, by request, or invite-only)." />
          <Feature name="Nested groups (subgroups)"
            desc="Create groups within groups to any depth. A bioregional hub can contain neighborhood groups. A network can contain working committees. Each subgroup has its own space, agreements, and stewards while remaining connected to the parent." />
          <Feature name="Peer-to-peer group relationships"
            desc="Connect groups as peers — two independent groups that choose to share a relationship. Peer groups can see each other's public content and members, enabling coalition-building without hierarchy." />
          <Feature name="Cross-group posting"
            desc="Post a single discussion, event, request, or offer to multiple groups at once. The post lives in all selected groups simultaneously — no duplication, no drift." />
          <Feature name="Group Explorer"
            desc="A public directory where anyone can browse and discover groups on Hylo. Groups can apply to be listed. Filter by location, topic, or purpose." />
          <Feature name="Join questions"
            desc="When someone requests to join a group, stewards can ask custom questions to understand who's joining and why. Answers are visible to stewards during the approval process." />
          <Feature name="Group types and presets"
            desc="Groups can be configured for different purposes: mutual aid networks, learning communities, project teams, bioregional hubs, civic groups. Same underlying structure, different default views and suggested features." />
        </Category>

        <Category id="communication" title="Communication"
                  icon="chat" iconColor={DISCUSS} bg={ATHENS}
                  intro="Hylo supports three modes of communication — persistent posts for depth, real-time chat for speed, and direct messages for privacy — all within a unified system.">
          <Feature name="Posts (Discussions)"
            desc="Threaded, persistent posts with rich text, media, file attachments, geographic location, and topic tags. Posts support reactions and nested comment threads. Discussions are the backbone of deeper coordination — they don't disappear after a day of scrolling." />
          <Feature name="Chat rooms"
            desc="Real-time, topic-based chat within any group. Chat rooms sit alongside the post stream — fast conversation and structured discussion coexist without competing. Groups can create multiple rooms for different topics or working teams." />
          <Feature name="Direct messages"
            desc="Private 1:1 or small-group conversations. Invite-only, end-to-end within Hylo." />
          <Feature name="Cross-group posting"
            desc="A single post can belong to multiple groups or chat rooms simultaneously, creating living nodes of coordination across the network." />
          <Feature name="Rich media"
            desc="Posts and comments support images, files, links with previews, embedded video, and location data. Drag and drop to attach." />
          <Feature name="Topic tags"
            desc="Tag posts with topics to organize content thematically. Topics work across groups — follow a topic to see related posts everywhere you're a member." />
          <Feature name="Mentions"
            desc="@mention members or groups in posts and comments. Mentioned people receive notifications. The inbox collects all posts where you've been mentioned." />
          <Feature name="Reactions"
            desc="React to posts and comments with emoji. Lightweight feedback without requiring a full reply." />
          <Feature name="Multiple view types"
            desc="View shared content as a stream, list, grid, calendar, or map. Groups can customize which views appear in their navigation and which is the default." />
          <Feature name="Search"
            desc="Full-text search across posts, comments, members, and topics within your groups." />
        </Category>

        <Category id="events" title="Events & Gatherings"
                  icon="calendar" iconColor={EVENT_RED} bg="#fff"
                  intro="In-person and virtual events with the tools groups actually need — RSVPs, calendar integration, and geographic location.">
          <Feature name="Create events"
            desc="Events are a post type with start/end times, location (physical or virtual), timezone support, and description. They appear in the stream and on the calendar view." />
          <Feature name="RSVPs"
            desc="Members can indicate whether they're attending. Stewards can see the guest list and count." />
          <Feature name="Calendar view"
            desc="See all upcoming events for a group displayed on a calendar. Filter by group or view across all your groups." />
          <Feature name="Calendar integration"
            desc="Export events to external calendars (Google Calendar, iCal, etc.) via calendar invite emails." />
          <Feature name="Location and map"
            desc="Events can include a physical location that appears on the group's map. Helpful for in-person gatherings where people need to find the place." />
          <Feature name="Live indicator"
            desc="Events currently in progress are marked as live in the stream and calendar." />
        </Category>

        <Category id="mutual" title="Mutual Support"
                  icon="exchange" iconColor={REQUEST} bg={ATHENS}
                  intro="Requests and offers are the trust-building engine of Hylo. Every fulfilled exchange is a deposit in the community's social fabric.">
          <Feature name="Requests"
            desc="Post what you need — skills, tools, time, knowledge, labor, rides, advice. Set scope, timing, and location. Visible to your group and, if cross-posted, to connected groups." />
          <Feature name="Offers"
            desc="Share what you can give. Same structure as requests — searchable, taggable, locatable." />
          <Feature name="Completion tracking"
            desc="Mark requests and offers as fulfilled. Select the people who helped complete them. This creates a visible record of mutual support within the community." />
          <Feature name="Geographic relevance"
            desc="Requests and offers include location data. Members can browse what's needed or available near them." />
          <Feature name="Topic categorization"
            desc="Tag requests and offers by topic — tools, food, transportation, skills, childcare — so members can browse by category." />
          <Feature name="Expiration and reminders"
            desc="Requests and offers can have expiration dates. Notifications remind creators to update or close out posts that are no longer active." />
          <Feature name="AI-assisted matching" badge="soon"
            desc="The AI matchmaker will surface relevant requests and offers to members whose skills, interests, location, and history suggest they can help — reducing the gap between need and response." />
        </Category>

        <Category id="projects" title="Projects & Coordination"
                  icon="clipboard" iconColor={PROJECT} bg="#fff"
                  intro="For work that goes beyond a single post — ongoing efforts with tasks, contributors, and timelines.">
          <Feature name="Projects"
            desc="Create a project post with a description, members, and linked content. Projects provide a persistent home for coordinated work within a group." />
          <Feature name="Tasks and actions" badge="soon"
            desc="Assign tasks with statuses and due dates within projects. Contribution visibility over time — see who's doing what. Kanban and other visualizations planned." />
          <Feature name="Linked content"
            desc="Connect posts, events, requests, and offers to a project. Everything related to an effort lives in one place." />
          <Feature name="Project membership"
            desc="Members can join projects to indicate their involvement. Project contributors are visible to the group." />
        </Category>

        <Category id="governance" title="Governance & Decision-Making"
                  icon="vote" iconColor={PROPOSAL} bg={ATHENS}
                  intro="Hylo's governance tools support groups at every stage — from simple polls to structured decision-making processes with quorum, consent-based voting, and formal outcome tracking.">
          <Feature name="Proposals"
            desc="Create a proposal with a question, description, and voting options. Proposals progress through discussion, voting, and completed phases with visible outcomes." />
          <Feature name="Flexible voting options"
            desc="Configure voting with custom options or use presets: Agree/Disagree, Consent/Block/Abstain, Sense Check, or Gradients of Agreement (from whole-hearted endorsement to veto). Choose what fits your group's decision-making culture." />
          <Feature name="Quorum settings"
            desc="Set a minimum participation threshold for a vote to be valid. Adjustable percentage. If quorum isn't reached, stewards are notified." />
          <Feature name="Voting timeline"
            desc="Set start and end times for voting periods. Proposals move through phases automatically, or stewards can manage timing manually." />
          <Feature name="Outcome tracking"
            desc="Completed proposals display vote tallies, quorum status, and an outcome summary field where the author can document what was decided and what happens next." />
          <Feature name="Governance view"
            desc='A dedicated view showing active and past proposals. Active proposals at the top, completed proposals (now "decisions") below with their outcomes. Also displays the group&rsquo;s purpose, values, and agreements.' />
          <Feature name="Agreements"
            desc="Groups can establish written agreements — commitments, norms, decision-making protocols, codes of conduct. Agreements are displayed on the group's About page and presented to new members for consent before joining." />
          <Feature name="Agreement consent tracking"
            desc="Track whether members have consented to current agreements. If agreements change, members are prompted to review and re-consent. Backend tracking of each person's consent to each agreement." />
          <Feature name="Roles and responsibilities"
            desc="Assign roles to members with specific platform responsibilities. Three common roles come with every group: Coordinator (administration), Moderator (content management), and Host (welcoming and inviting). Each role carries defined powers." />
          <Feature name="Custom roles"
            desc="Create roles specific to your group — equipment manager, garden coordinator, childcare lead, outreach coordinator. Custom roles can carry platform responsibilities or simply denote real-world functions. Roles display as badges on member profiles." />
          <Feature name="Custom responsibilities"
            desc="Beyond platform responsibilities, create custom ones that represent work members do outside of Hylo. Assign responsibilities to roles so everyone can see who does what." />
          <Feature name="Collective moderation"
            desc="Any member can flag a post as violating group agreements. Flagged content is blurred for other members. Others can agree or disagree with the flag. Moderators review and make final decisions." />
        </Category>

        <Category id="map" title="Map & Place"
                  icon="pin" iconColor={FOREST} bg="#fff"
                  intro="Hylo organizes people around the places they share. The map is not a feature bolted on — it's a fundamental part of how the platform thinks about community.">
          <Feature name="Geographic map"
            desc="An interactive map showing members, groups, events, requests, offers, and other activity spatially. See what's happening near you, discover nearby groups, and understand the geographic fabric of your community." />
          <Feature name="Group locations"
            desc="Groups have geographic locations that appear on the map. A neighborhood group, a regional network, and a global alliance all have different spatial footprints." />
          <Feature name="Member locations"
            desc="Members can share their location (at whatever precision they choose) to be discoverable on the map. Location obfuscation protects privacy while still enabling proximity-based discovery." />
          <Feature name="Watershed and ecological layers"
            desc="Map layers showing watersheds, catchment basins, and other ecological boundaries. These help communities understand and organize around their landscape rather than arbitrary political boundaries." />
          <Feature name="Location on posts"
            desc="Any post — discussion, event, request, offer — can include a location. Content appears on the map where it's relevant." />
          <Feature name="Embed via iframe"
            desc="Groups can embed a Hylo map view on their own website using a custom iframe code block — bringing the living map to wherever their community already gathers online." />
        </Category>

        <Category id="funding" title="Funding Rounds"
                  icon="coin" iconColor={GOLD} bg={ATHENS}
                  intro="Participatory funding rounds let groups pool resources and collectively decide where to direct them. This is governance made real — communities allocating actual money through democratic process.">
          <Feature name="Create a funding round"
            desc="Set up a round with a total amount, timeline, submission criteria, and voting method. Guide your community through each phase from submission to allocation." />
          <Feature name="Submission phase"
            desc="Members submit proposals for funding. Stewards define criteria that submissions need to address. Submissions can be visible during the submission period or hidden until voting begins." />
          <Feature name="Discussion phase"
            desc="Community reviews and discusses submitted proposals before voting. Comments, questions, and feedback help the group make informed decisions." />
          <Feature name="Voting phase"
            desc="Members vote to allocate the pool across proposals. Results determine distribution. Notifications guide members through each stage of the process." />
          <Feature name="Outcome and allocation"
            desc="Results are displayed transparently. The group can see exactly how funds were allocated and why. Completed rounds become part of the group's decision history." />
          <Feature name="Real-world impact"
            desc="Float, the Funding Lab for Agroecological Technology, used Hylo's funding rounds to distribute over $700,000 USD to projects in 2025." />
        </Category>

        <Category id="tracks" title="Learning Tracks"
                  icon="path" iconColor={PICTON} bg="#fff"
                  intro="Tracks are structured sequences of content and actions that guide members through a learning journey, onboarding process, or program curriculum.">
          <Feature name="Create tracks"
            desc="Build a track with ordered steps — each step can include content, media, discussion prompts, and actions for the member to complete." />
          <Feature name="Track actions"
            desc="Individual tasks or checkpoints within a track that members complete as they progress. Completion is tracked per member." />
          <Feature name="Track membership and progress"
            desc="See who has started a track, where they are in it, and who has completed it. Stewards get visibility into participation without micromanaging." />
          <Feature name="Badges on completion"
            desc="Members who complete a track can receive a badge — visible on their profile. Badges can also unlock specific roles, permissions, or access to certain content or chat rooms within the group." />
          <Feature name="Track-gated access"
            desc="Require completion of a track before accessing certain areas of a group. Useful for onboarding sequences where you want members to have context before participating fully." />
          <Feature name="Paid tracks" badge="pro"
            desc="Tracks can be gated behind a payment. Stripe integration handles transactions. Stewards manage subscriptions and access." />
        </Category>

        <Category id="profiles" title="Profiles & Directory"
                  icon="profile" iconColor={FOREST} bg={ATHENS}
                  intro="Member profiles are how people find each other and understand what each person brings to the community.">
          <Feature name="Member profiles"
            desc="Each member has a profile with name, photo, bio, location, skills, interests, and affiliated groups. Profiles are visible to co-members and (for public groups) to anyone browsing the platform." />
          <Feature name="Skills and interests"
            desc="Members list their skills and areas of interest. These are used for discovery, matching, and helping stewards understand what capacity exists within the group." />
          <Feature name="Member directory"
            desc="Browse all members of a group with search, filtering, and sorting. See roles, badges, and location at a glance." />
          <Feature name="Group affiliations"
            desc="A member's profile shows which groups they belong to (respecting visibility settings — private group memberships aren't exposed to non-members)." />
          <Feature name="Role and badge display"
            desc="Roles and badges earned through tracks or assigned by stewards are displayed on profiles and next to member names throughout the platform. Hover/tap to see the role description and responsibilities." />
        </Category>

        <Category id="customization" title="Customization"
                  icon="sliders" iconColor={FOREST} bg="#fff"
                  intro="Groups and individuals can customize their Hylo experience — from navigation layout to visual themes.">
          <Feature name="Custom navigation"
            desc="Group stewards can choose which views appear in the group's navigation menu and in what order. Show only what's relevant to your community — hide views you don't use." />
          <Feature name="Custom views"
            desc="Create custom filtered views of content — by topic, post type, or other criteria. Pin them to the group's navigation for quick access." />
          <Feature name="Nine visual themes"
            desc="Choose from nine visual themes (Default, Stone, Forest, Ocean, Desert, Snow, Jungle, Blossom, Fall), each with light and dark variants. Themes apply to the entire interface." />
          <Feature name="Group branding"
            desc="Each group has its own avatar, banner image, purpose statement, and description. Groups look and feel distinct even within a shared platform." />
          <Feature name="Notification customization"
            desc="Members control their own notification preferences: email, push, in-app, and digest frequency. Per-group settings let you stay on top of active groups without being overwhelmed by quieter ones." />
          <Feature name="Stream and feed controls"
            desc="Members can customize how content is ranked and aggregated in their stream. No algorithmic manipulation — you choose what's surfaced." />
        </Category>

        <Category id="moderation" title="Moderation & Safety"
                  icon="shield" iconColor={FOREST} bg={ATHENS}
                  intro="Community safety without centralized surveillance. Hylo's moderation tools distribute responsibility to the people closest to the community while providing clear escalation paths.">
          <Feature name="Community flagging"
            desc="Any member can flag a post that they believe violates group agreements. They select which specific agreement is being violated. Flagged content is blurred for other members while under review." />
          <Feature name="Collective review"
            desc="Other members can agree or disagree with a flag, creating community input on moderation decisions before stewards act." />
          <Feature name="Steward moderation powers"
            desc="Moderators can remove content, remove members, and manage topics. Actions are logged and can be communicated to the community." />
          <Feature name="Group agreements as moderation anchor"
            desc="Moderation is tied to the group's stated agreements — not arbitrary judgment. When content is flagged, the specific agreement at issue is identified. This grounds moderation in shared commitments rather than individual discretion." />
          <Feature name="Platform-level enforcement"
            desc="Hylo's platform stewards monitor the public commons and handle cross-group or platform-level violations. The code of conduct applies everywhere." />
        </Category>

        <Category id="mobile" title="Mobile"
                  icon="phone" iconColor={FOREST} bg="#fff"
                  intro="Hylo is available on iOS and Android with full-featured mobile apps.">
          <Feature name="Native iOS and Android apps"
            desc="Download from the App Store or Google Play. The mobile experience covers the core platform — groups, posts, chat, events, map, profiles, notifications." />
          <Feature name="Push notifications"
            desc="Real-time push notifications for mentions, replies, new posts, and events. Configurable per group and per notification type." />
          <Feature name="Mobile map"
            desc="The full geographic map on mobile — browse nearby activity, find groups, and see your community spatially." />
          <Feature name="Responsive web"
            desc="Hylo's web interface is fully responsive. Access from any browser on any device." />
        </Category>

        <Category id="platform" title="Platform & Infrastructure"
                  icon="platform" iconColor={FOREST} bg={ATHENS}
                  intro="The structural commitments that make Hylo different from every other community platform.">
          <Feature name="Open source"
            desc="Hylo's entire codebase is public under the Apache 2.0 license. Inspect it, contribute to it, fork it." />
          <Feature name="No ads, no data sales"
            desc="Hylo does not display advertising and does not sell user data. Ever. Revenue comes from paid products and community contributions." />
          <Feature name="No algorithmic manipulation"
            desc="There is no black-box algorithm deciding what you see. Members control their own feed ranking and notification preferences." />
          <Feature name="Data portability"
            desc="Groups can export their data. If you leave Hylo, you leave with your information. No lock-in." />
          <Feature name="Community-governed"
            desc="Hylo is a fiscally sponsored 501(c)(3) non-profit moving toward participatory governance. The platform's direction is shaped by the communities that use it through participatory design, community calls, and the Building Hylo group." />
          <Feature name="Privacy controls"
            desc="Groups control their own visibility and access settings. Members control their own location precision and profile visibility. Hylo never shares personal data without informed consent." />
          <Feature name="Internationalization"
            desc="Hylo supports multiple languages and is working toward broader accessibility across ability, culture, and bandwidth." />
        </Category>

        <ComingSoon />
        <ClosingCTA />
        <FeaturesFooter />
      </div>
    );
  }

  window.FeaturesPage = FeaturesPage;
})();
