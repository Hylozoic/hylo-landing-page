// v5-bring-your-group.jsx — Hylo "Bring your group" migration page (V5 system)
// Follows hylo-bring-your-group-spec.md

(function () {
  const H = window.HYLO;
  const T = window.VE_THEME;
  const RHINO = H.rhino;
  const RHINO_RGB = '44,64,89';
  const FOREST = H.forest;
  const ATHENS = H.athensGray;
  const ATHENS_DARK = H.athensDark;

  // Shared styles
  const bodyProse = {
    fontSize: 16, lineHeight: 1.7, margin: 0,
    color: `rgba(${RHINO_RGB},0.82)`, textWrap: 'pretty',
  };
  const colHeader = {
    fontSize: 13, fontWeight: 500, textTransform: 'uppercase',
    letterSpacing: 0.6, color: `rgba(${RHINO_RGB},0.5)`,
    marginBottom: 12,
  };
  const hyloColHeader = { ...colHeader, color: FOREST };

  // Platform list
  const PLATFORMS = [
    { id: 'facebook',  name: 'Facebook Groups',       icon: 'fb',      bg: ATHENS },
    { id: 'whatsapp',  name: 'WhatsApp & Signal',     icon: 'chat',    bg: '#fff' },
    { id: 'slack',     name: 'Slack & Discord',       icon: 'hash',    bg: ATHENS },
    { id: 'mighty',    name: 'Mighty Networks',       icon: 'ring',    bg: '#fff' },
    { id: 'circle',    name: 'Circle',                icon: 'circle',  bg: ATHENS },
    { id: 'notion',    name: 'Notion & Google Workspace', shortNav: 'Notion & Docs', icon: 'doc', bg: '#fff' },
  ];

  function PlatformIcon({ kind, size = 24, color }) {
    const c = color || `rgba(${RHINO_RGB},0.55)`;
    const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: c, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (kind === 'fb')     return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M14 8h-1.5A1.5 1.5 0 0 0 11 9.5V12M9 12h5"/><path d="M12 12v8"/></svg>;
    if (kind === 'chat')   return <svg {...p}><path d="M4 5h16v11H8l-4 4V5z"/></svg>;
    if (kind === 'hash')   return <svg {...p}><path d="M5 9h14M5 15h14M10 4l-2 16M16 4l-2 16"/></svg>;
    if (kind === 'ring')   return <svg {...p}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>;
    if (kind === 'circle') return <svg {...p}><circle cx="12" cy="12" r="8"/></svg>;
    if (kind === 'doc')    return <svg {...p}><path d="M7 3h8l4 4v14H7z"/><path d="M14 3v5h5M10 13h6M10 17h6M10 9h2"/></svg>;
    return null;
  }

  // ——————— Section 1 · Hero ———————
  function Hero() {
    const scrollTo = (id) => () => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 48, behavior: 'smooth' });
    };
    return (
      <section style={{
        background: H.cream, padding: '160px 40px 60px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontSize: 56, fontWeight: 700, letterSpacing: -1.4,
            lineHeight: 1.05, margin: 0, color: RHINO,
          }}>
            Bring your group to Hylo.
          </h1>
          <p style={{
            marginTop: 28, fontSize: 19, lineHeight: 1.55,
            color: `rgba(${RHINO_RGB},0.75)`, maxWidth: 620,
            margin: '28px auto 0', textWrap: 'pretty',
          }}>
            Your community deserves a platform built for coordination, not just
            conversation. Here&rsquo;s what changes when you move to Hylo — and how
            to make the switch.
          </p>

          {/* CTAs */}
          <div style={{
            marginTop: 28, display: 'flex', justifyContent: 'center',
            alignItems: 'center', gap: 16, flexWrap: 'wrap',
          }}>
            <button style={{
              height: 44, padding: '0 20px', borderRadius: 8, border: 'none',
              background: FOREST, color: '#fff', fontWeight: 600, fontSize: 15,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>Get started — it&rsquo;s free</button>
            <a onClick={scrollTo('platform-nav')} style={{
              fontSize: 14, color: FOREST, fontWeight: 500, cursor: 'pointer',
            }}>Jump to your platform ↓</a>
          </div>

          {/* Platform quick nav */}
          <div id="platform-nav" style={{
            marginTop: 48,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            gap: 24, flexWrap: 'wrap',
          }}>
            {PLATFORMS.map(p => (
              <a key={p.id}
                onClick={scrollTo(`section-${p.id}`)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  cursor: 'pointer', fontSize: 14, color: `rgba(${RHINO_RGB},0.65)`,
                  padding: '6px 10px', borderRadius: 6,
                  border: `1px solid rgba(${RHINO_RGB},0.1)`,
                  background: 'rgba(255,255,255,0.6)',
                }}>
                <PlatformIcon kind={p.icon} size={18} />
                {p.shortNav || p.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 2 · Common problem ———————
  function CommonProblem() {
    return (
      <section style={{ background: '#fff', padding: '100px 40px', fontFamily: T.sans, color: RHINO }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.6, margin: 0, color: RHINO }}>
            Good tools for the wrong job.
          </h2>
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={bodyProse}>
              Most groups end up scattered across three or four platforms: a chat app
              for quick messages, a social network for updates, a doc tool for notes, a
              spreadsheet for tracking, and email for everything else. It works — until
              it doesn&rsquo;t. Things get lost. Decisions happen in side channels.
              Nobody can see the whole picture. New members have no idea where to start.
            </p>
            <p style={bodyProse}>
              The problem isn&rsquo;t that these tools are bad. It&rsquo;s that none of
              them were built for groups that need to coordinate — to make decisions
              together, share resources, organize across subgroups, and grow their
              capacity over time. They were built for companies, for consumers, or for
              audiences. Not for communities.
            </p>
            <p style={{ ...bodyProse, fontWeight: 500, color: RHINO }}>
              Hylo was built for communities. Here&rsquo;s what that means, depending on
              where you&rsquo;re coming from.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 3 · Platform comparison (shared component) ———————
  function Comparison({ platform, oneLiner, works, breaks, hylo, migration }) {
    return (
      <section id={`section-${platform.id}`} style={{
        background: platform.bg, padding: '80px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 8,
              background: `rgba(${RHINO_RGB},0.06)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <PlatformIcon kind={platform.icon} size={24} />
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 700, margin: 0, color: RHINO, letterSpacing: -0.4 }}>
              {platform.name}
            </h3>
          </div>
          <p style={{
            marginTop: 10, fontSize: 15, color: `rgba(${RHINO_RGB},0.6)`,
            fontStyle: 'italic', maxWidth: 640,
          }}>
            {oneLiner}
          </p>

          {/* Two columns */}
          <div style={{
            marginTop: 36, display: 'grid',
            gridTemplateColumns: '1fr 1.1fr', gap: 40,
          }}>
            {/* Left col */}
            <div>
              <div style={colHeader}>What works</div>
              <p style={{ ...bodyProse, fontSize: 15, color: `rgba(${RHINO_RGB},0.75)` }}>{works}</p>
              <div style={{ ...colHeader, marginTop: 28 }}>What breaks</div>
              <p style={{ ...bodyProse, fontSize: 15, color: `rgba(${RHINO_RGB},0.75)` }}>{breaks}</p>
            </div>

            {/* Right col */}
            <div style={{
              borderLeft: `3px solid rgba(8,119,54,0.3)`,
              paddingLeft: 24,
            }}>
              <div style={hyloColHeader}>On Hylo</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 4 }}>
                {hylo.map((f, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 15, fontWeight: 500, color: RHINO }}>{f.t}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.55, color: `rgba(${RHINO_RGB},0.72)`, marginTop: 2 }}>{f.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Migration note */}
          <div style={{
            marginTop: 32, paddingTop: 24,
            borderTop: `1px solid ${ATHENS_DARK}`,
            fontSize: 14, color: `rgba(${RHINO_RGB},0.65)`, lineHeight: 1.6,
          }}>
            <strong style={{ fontWeight: 600, color: RHINO }}>Making the switch:</strong>{' '}
            {migration}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Platform content ———————
  const PLATFORM_CONTENT = {
    facebook: {
      oneLiner: 'The group platform everyone already has — and everyone knows the problems with.',
      works: 'Everyone is already there. The barrier to joining is zero. Facebook Groups have real reach — your posts can pull in new people, events get visibility, and notifications actually land. For casual community building, the network effect is hard to beat.',
      breaks: "Your group\u2019s attention is monetized. Facebook\u2019s algorithm decides what members see, and it optimizes for engagement, not for what matters to your group. You can\u2019t structure conversations, can\u2019t run proposals or decisions, can\u2019t connect with other groups, and can\u2019t control your data. Members are constantly pulled away by ads and algorithmic distractions. You\u2019re building on rented land — and the landlord is selling your community\u2019s attention to advertisers.",
      hylo: [
        { t: 'No ads, no algorithm.', d: 'Every member sees every post. You decide what\u2019s important, not a feed algorithm.' },
        { t: 'Structured conversations.', d: 'Discussions, events, requests, offers, projects, proposals — each with its own purpose, not all jammed into one feed.' },
        { t: 'Governance tools.', d: 'Proposals, polls, roles, shared agreements. Your group can make decisions together, not just talk.' },
        { t: 'Cross-group coordination.', d: 'Connect with other groups, share posts across networks, see the bigger picture. Facebook Groups are islands. Hylo groups are a network.' },
        { t: 'Your data stays yours.', d: 'No tracking, no selling, no surveillance. Open source and community-governed.' },
      ],
      migration: "Invite your members by email or shareable link. Most groups run both platforms in parallel for a few weeks while members transition. Your Facebook Group\u2019s content can\u2019t be exported automatically, but Hylo\u2019s fresh start is often a feature, not a bug — it\u2019s a chance to set clear agreements and build a healthier group culture from day one.",
    },
    whatsapp: {
      oneLiner: 'Fast and intimate — until your group outgrows a chat thread.',
      works: 'Messaging apps are unbeatable for small, tight groups. Messages land instantly. Everyone has the app. For a handful of people coordinating something simple, nothing is faster. Signal adds real privacy.',
      breaks: "Once a group passes about 20 active people, chat becomes overwhelming. Important messages get buried in minutes. There\u2019s no way to organize conversations by topic, find a decision that was made last month, or onboard a new member without them drowning in scroll. Everything is ephemeral — nothing persists, nothing is findable, nothing builds on itself.",
      hylo: [
        { t: 'Chat when you want it, structure when you need it.', d: 'Hylo has real-time chat rooms alongside persistent, threaded discussions. Quick conversation and deep coordination live in the same place.' },
        { t: 'Everything is findable.', d: 'Posts are tagged by topic, searchable, and organized by type. Three months from now, you can find the decision your group made about the garden project.' },
        { t: 'Subgroups without chaos.', d: 'Create working groups, committees, or neighborhood pods — each with their own space, all connected to the parent group.' },
        { t: 'Requests and offers.', d: 'Members can post what they need and what they can give. This is how mutual aid actually scales beyond \u201cdoes anyone have a truck?\u201d' },
        { t: 'A map.', d: 'See your members, events, and activity geographically. For place-based groups, this changes everything.' },
      ],
      migration: "WhatsApp and Signal groups can\u2019t be migrated, but that\u2019s actually fine — the value of a chat app is the conversation, not the archive. Invite members to Hylo and let the chat group wind down naturally. Many groups keep a WhatsApp thread for quick/casual messages while using Hylo for everything that needs to persist, be found later, or involve more than simple chat.",
    },
    slack: {
      oneLiner: 'Built for companies and gaming communities. Adapted for everything else — awkwardly.',
      works: 'Slack and Discord are great at real-time team communication. Channels, threads, integrations, bots, search — for a company or a tight-knit team with a shared work context, they\u2019re powerful. Discord\u2019s voice channels and role systems add flexibility for more social communities.',
      breaks: "Both platforms assume a single organizational context — one company, one server. They have no concept of groups connecting to other groups, no place-based logic, no governance or decision-making tools, and no mutual aid infrastructure. Slack hides your message history behind a paywall on the free tier. Neither is designed for groups that need to grow into self-governance.",
      hylo: [
        { t: 'Chat plus everything else.', d: 'Topic-based chat rooms like Slack, but they exist alongside discussions, events, projects, proposals, and requests and offers. You don\u2019t need a separate tool for each.' },
        { t: 'Cross-group coordination.', d: 'Slack workspaces and Discord servers are walled off from each other. Hylo groups can connect, share posts, and coordinate across organizational boundaries.' },
        { t: 'No message paywall.', d: 'Your full history is always available. Conversations, decisions, and context persist without a paid tier.' },
        { t: 'Built for communities, not companies.', d: 'Hylo\u2019s role system, agreements, and governance tools are designed for shared stewardship — not top-down org charts.' },
        { t: 'Place-based organizing.', d: 'Map view, geographic groups, watershed layers. If your work is rooted in a place, Hylo understands that. Slack and Discord don\u2019t.' },
      ],
      migration: "Slack and Discord histories can be exported. Many groups transition channel by channel, starting with the channels that need more structure — events, decisions, projects — while keeping Slack/Discord for pure chat until members are settled. Hylo\u2019s chat rooms will feel familiar; the rest will feel like an upgrade.",
    },
    mighty: {
      oneLiner: 'The closest thing to Hylo in the commercial space — but built for a fundamentally different purpose.',
      works: 'Mighty Networks is a real community platform, not an adapted chat tool. It has groups, courses, events, member directories, and native mobile apps. If you\u2019re a creator building a paid community around your content, Mighty is well-designed for that.',
      breaks: "Mighty is built for creators monetizing audiences, not for communities coordinating together. Every network is a silo — your group can\u2019t connect to, share with, or coordinate alongside other groups. No mutual aid infrastructure, no governance tools, no map or place-based logic. Pricing scales steeply, with transaction fees on every plan. And the platform is proprietary — if you leave, you leave with nothing.",
      hylo: [
        { t: 'Groups that connect.', d: 'A mutual aid group can coordinate with a food co-op can coordinate with a neighborhood association — all visible to each other without merging.' },
        { t: 'Mutual support tools.', d: 'Requests and offers, completion tracking, and AI-assisted matching. This is how trust gets built through action, not just conversation.' },
        { t: 'Governance and decisions.', d: 'Proposals, polls, roles, agreements, and participatory funding rounds. Hylo is built for groups that want to make decisions together.' },
        { t: 'Place-based organizing.', d: 'Map views, geographic groups, watershed layers. If your community is rooted in a place, Hylo was designed for you.' },
        { t: 'Open source, no lock-in.', d: 'Hylo\u2019s code is public. Your data is portable. There\u2019s no exit penalty because the platform is built as a commons, not a business extracting from your community.' },
        { t: 'Free to start, fair to grow.', d: 'Hylo\u2019s core platform is free. Paid features exist for groups that need them, with no per-transaction fees on your community\u2019s exchanges.' },
      ],
      migration: "Mighty Networks allows you to export member email lists from your network settings. Invite members to Hylo, rebuild your group structure (about 15 minutes), and re-upload any key resources. The biggest gain: your group stops being an island and becomes part of a living network.",
    },
    circle: {
      oneLiner: 'A polished all-in-one for creators and course builders. Less suited for communities that aren\u2019t centered on a single brand.',
      works: 'Circle is well-built and full-featured: spaces, courses, events, live streaming, automations, payments, custom branding, and a native mobile app. If you\u2019re a solo creator or small business building a branded membership community, Circle is one of the best options on the market.',
      breaks: "Circle is built for creators monetizing an audience — one brand, one community, one revenue stream. Each community is a silo with no ability to connect to other communities. No mutual aid, no governance, no decision-making tools, and no commons orientation. Pricing starts at $89/month and climbs, with transaction fees on every plan. The platform is closed-source.",
      hylo: [
        { t: 'Multi-group coordination.', d: 'Hylo groups can nest, peer, and coordinate — essential for coalitions, networks, and place-based organizing where multiple groups need to work together.' },
        { t: 'Community governance.', d: 'Proposals, agreements, roles, collective moderation, participatory budgeting. Hylo is for groups learning to govern themselves, not audiences organized around a creator.' },
        { t: 'Requests and offers.', d: 'Built-in mutual support tools that build trust through reciprocal exchange. Circle has no equivalent.' },
        { t: 'Place and map.', d: 'Geographic groups, map views, watershed layers. For any community rooted in a physical place, this is a structural difference.' },
        { t: 'Commons, not commerce.', d: 'Open source, non-profit, community-governed. No transaction fees on community exchanges. If Hylo ever stops serving your community, you can fork the code and leave.' },
        { t: 'Free core platform.', d: 'Circle starts at $89/month. Hylo\u2019s core is free — because we believe coordination infrastructure shouldn\u2019t be paywalled.' },
      ],
      migration: "Circle allows member CSV exports. Invite your community by email, set up your Hylo group (free, about 15 minutes), and migrate key content. The transition is straightforward for members — Hylo\u2019s interface will feel familiar but the added depth of governance and cross-group tools will quickly become apparent.",
    },
    notion: {
      oneLiner: 'Excellent for documents. Not a living community.',
      works: 'Notion is beautiful for documentation, project planning, and knowledge management. Google Workspace is the default for shared docs and spreadsheets. For internal team coordination where everyone already has context, these tools are powerful.',
      breaks: "Documents are not relationships. Notion and Google Docs have no social layer — no member profiles, no events, no conversations, no mutual aid, no governance, no sense of community. A shared doc can track decisions but can\u2019t facilitate them. Groups that try to coordinate entirely through docs end up with organized information and disorganized people.",
      hylo: [
        { t: 'A living community, not a filing cabinet.', d: 'Hylo is where your people actually interact — conversations, events, requests, offers, proposals, projects. The human coordination layer that docs can\u2019t provide.' },
        { t: 'Documents still have a home.', d: 'Hylo supports resource posts where you can share files, links, and reference materials. Use Hylo for coordination and keep Notion or Google Docs for the documents that need them.' },
        { t: 'Governance is participatory, not just documented.', d: 'Instead of writing governance rules in a doc and hoping people follow them, Hylo\u2019s proposals, agreements, and roles make governance a living practice.' },
      ],
      migration: "You probably don\u2019t need to fully leave Notion or Google Docs — and shouldn\u2019t. Use Hylo as the community coordination layer and link to documents where needed. The shift is: your group\u2019s home moves from a collection of docs to a living social space, with docs attached where they\u2019re useful.",
    },
  };

  // ——————— Section 4 · What only Hylo does ———————
  function WhatOnlyHyloDoes() {
    const cards = [
      { t: 'Cross-group coordination',
        d: 'Groups on Hylo can nest inside each other, form peer relationships, and share posts across boundaries. A single request can reach three groups at once. A coalition can see itself. No other community platform has it.' },
      { t: 'Place-based organizing',
        d: 'Hylo organizes people around the places they share — neighborhoods, cities, watersheds, bioregions. A geographic map shows members, events, and activity near you. This is how coordination connects to the land.' },
      { t: 'Governance & decisions',
        d: 'Proposals, participatory budgets, collective moderation, community agreements, role-based stewardship. Built for groups evolving from conversation into self-governance — without concentrating power.' },
      { t: 'Mutual support infrastructure',
        d: 'Requests and offers aren\u2019t just posts — they\u2019re the engine of trust. Every fulfilled exchange strengthens the community\u2019s fabric. AI matching helps scale what would otherwise depend on someone knowing exactly who to ask.' },
      { t: 'A technology commons',
        d: 'Open source, non-profit, and community-governed. No ads. No data sales. No enshittification. Your community\u2019s home isn\u2019t subject to quarterly earnings targets. The code is public. Your data is portable.' },
    ];
    return (
      <section style={{ background: RHINO, padding: '100px 40px', fontFamily: T.sans, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: -0.8, margin: 0, color: '#fff' }}>
            What only Hylo enables.
          </h2>
          <p style={{
            marginTop: 16, fontSize: 17, lineHeight: 1.55,
            color: 'rgba(255,255,255,0.72)', maxWidth: 720, margin: '16px auto 0',
            textWrap: 'pretty',
          }}>
            These aren&rsquo;t feature advantages. They&rsquo;re structural capabilities
            that other platforms can&rsquo;t add with a plugin — because they require a
            fundamentally different architecture.
          </p>

          <div style={{
            marginTop: 48, display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)', gap: 20, textAlign: 'left',
          }}>
            {cards.map((c, i) => {
              // Top row: 3 cards across 6 cols (span 2 each). Bottom row: 2 cards, center them (cols 2-3, 4-5 via span 2 offset).
              let gridColumn;
              if (i < 3)        gridColumn = `${i * 2 + 1} / span 2`;
              else if (i === 3) gridColumn = '2 / span 2';
              else              gridColumn = '4 / span 2';
              return (
                <div key={c.t} style={{
                  gridColumn,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 4, padding: 24,
                  backdropFilter: 'blur(4px)',
                }}>
                  <div style={{ fontSize: 18, fontWeight: 500, color: '#fff', letterSpacing: -0.2 }}>
                    {c.t}
                  </div>
                  <p style={{ marginTop: 10, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', textWrap: 'pretty' }}>
                    {c.d}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // ——————— Section 5 · Getting started ———————
  function GettingStarted() {
    const steps = [
      { t: 'Create your group.',   d: 'Sign up, name your group, add a purpose statement and agreements. Choose your visibility and access settings. Done.' },
      { t: 'Invite your people.',  d: 'Share a link, send email invitations, or invite from your existing member list. Members can join from web or mobile.' },
      { t: 'Start where you are.', d: 'Begin with conversations and events. Add requests and offers when you\u2019re ready. Grow into proposals, governance, and cross-group coordination at your own pace. Hylo meets your group where you are.' },
    ];
    return (
      <section style={{ background: H.cream, padding: '100px 40px 120px', fontFamily: T.sans, color: RHINO }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 36, fontWeight: 700, letterSpacing: -0.8,
            margin: 0, color: RHINO, textAlign: 'center',
          }}>
            Getting started takes 15 minutes.
          </h2>

          <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column', gap: 40 }}>
            {steps.map((s, i) => (
              <div key={s.t} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 20, alignItems: 'start' }}>
                <div style={{
                  fontSize: 56, fontWeight: 700, color: `rgba(8,119,54,0.3)`,
                  lineHeight: 1, letterSpacing: -2,
                }}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 500, color: RHINO, letterSpacing: -0.3 }}>{s.t}</div>
                  <p style={{ marginTop: 6, fontSize: 15, lineHeight: 1.6, color: `rgba(${RHINO_RGB},0.72)`, textWrap: 'pretty' }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <div style={{ fontSize: 14, color: `rgba(${RHINO_RGB},0.62)` }}>
              Need help with your migration? We support groups making the switch — from
              setup to onboarding your members.{' '}
              <a style={{ color: FOREST, fontWeight: 500, cursor: 'pointer' }}>Get in touch →</a>
            </div>
            <button style={{
              marginTop: 24, height: 44, padding: '0 22px', borderRadius: 8, border: 'none',
              background: FOREST, color: '#fff', fontWeight: 600, fontSize: 15,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>Create your group — free</button>
          </div>
        </div>
      </section>
    );
  }

  // ——————— Footer (consistent with about) ———————
  function BYGFooter() {
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

  // ——————— Page composition ———————
  function BringYourGroupPage() {
    const Nav = window.VE_Nav;
    return (
      <div style={{ background: '#fff', color: RHINO, fontFamily: T.sans }}
           data-screen-label="v5 Bring your group">
        <Nav accent={FOREST} />
        <Hero />
        <CommonProblem />
        {PLATFORMS.map(p => (
          <Comparison key={p.id} platform={p} {...PLATFORM_CONTENT[p.id]} />
        ))}
        <WhatOnlyHyloDoes />
        <GettingStarted />
        <BYGFooter />
      </div>
    );
  }

  window.BringYourGroupPage = BringYourGroupPage;
})();
