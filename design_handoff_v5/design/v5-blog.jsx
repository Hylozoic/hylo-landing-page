// v5-blog.jsx — Hylo Blog index page (V5 system)
// Companion: v5-blog-post.jsx (article detail)
// Reuses VE_Nav, VE_THEME, HYLO tokens. Footer mirrored from v5-get-involved.

(function () {
  const H = window.HYLO;
  const T = window.VE_THEME;
  const RHINO = H.rhino;
  const RHINO_RGB = '44,64,89';
  const FOREST = H.forest;
  const ATHENS = H.athensGray;
  const ATHENS_DARK = H.athensDark;

  // ——————— Categories ———————
  const CATEGORIES = {
    announcements: { label: 'Announcements',     color: FOREST },
    product:       { label: 'Product',           color: '#40A1DD' },
    stories:       { label: 'Community stories', color: '#BB60A8' },
    notes:         { label: 'Field notes',       color: '#23CC80' },
    essays:        { label: 'Essays',            color: '#9883E5' },
  };

  // ——————— Dummy posts ———————
  // Rich fake posts — enough variety to show the system working.
  const POSTS = [
    {
      slug: 'coordination-tool-already-exists',
      title: 'The coordination tool your community needs already exists',
      excerpt:
        'We didn\u2019t build Hylo to compete with Slack or Discord. We built it because groups working on real things in the real world kept telling us the same thing: we don\u2019t need another chat app, we need a place to actually coordinate.',
      category: 'essays',
      author: { name: 'Clare Politano', role: 'Co-founder, Hylo' },
      date: 'April 18, 2026',
      readTime: '8 min read',
      cover: {
        caption: 'Hands around a shared map with sticky notes, morning light through windows',
        palette: ['#F1EBDE', '#E6D9C0', '#DEC9A6'],
        accent: '#087736',
      },
      featured: true,
      body: [
        { type: 'p', content:
          'For years we\u2019ve watched groups of people \u2014 watershed councils, cooperatives, climate coalitions, neighborhood associations, cohort-based learning groups \u2014 try to run their work across a patchwork of tools that were never designed to hold the whole picture. Slack for chat, Google Docs for writing, Airtable for tracking, Eventbrite for events, Mailchimp for newsletters, Zoom for calls. Each one optimized for something specific. None of them optimized for a group.' },
        { type: 'p', content:
          'The result is familiar. New members can\u2019t find anything. Decisions made in a thread disappear. Requests go unanswered because nobody can tell who\u2019s supposed to respond. The group feels busy but doesn\u2019t feel coherent. And eventually, energy that should go into the work goes into maintaining the scaffolding instead.' },
        { type: 'h2', content: 'What coordination actually needs' },
        { type: 'p', content:
          'Coordination is not the same as communication. Communication is people exchanging messages. Coordination is people aligning action \u2014 knowing what\u2019s happening, who\u2019s doing what, where the commitments are, where the gaps are, and what needs attention. Most tools we use for "coordinating" are actually just communication channels with slightly better formatting.' },
        { type: 'quote', content:
          'The difference between a thriving community and an empty one is almost always stewardship \u2014 and stewardship needs a place that holds the whole group in view.',
          attribution: 'From our work with 1,000+ communities' },
        { type: 'p', content:
          'Hylo holds conversations, events, requests and offers, projects, proposals, and place \u2014 all in one view. Not because we want to build a monolith, but because real coordination happens when these threads can reference each other. A proposal that points to a conversation. An event tied to a project. A request that turns into an offer that turns into a completed task.' },
        { type: 'h2', content: 'The thing about infrastructure' },
        { type: 'p', content:
          'Good coordination infrastructure should be boring. It should recede. You shouldn\u2019t think about the tool when you\u2019re doing the work. You should think about the work. And at the end of a week, you should be able to see what your group did together and feel like it added up to something.' },
        { type: 'p', content:
          'That\u2019s what we\u2019re building. It\u2019s open source, non-profit, and growing. If your group is ready to stop juggling tools, we\u2019d love to have you.' },
      ],
    },
    {
      slug: 'funding-rounds-launch',
      title: 'Funding Rounds are here: decide together how to spend',
      excerpt:
        'Groups can now pool money on Hylo and allocate it transparently through proposals, ranked voting, and visible ledgers. One of our most-requested features is live.',
      category: 'announcements',
      author: { name: 'Loren Johnson', role: 'Product lead' },
      date: 'April 10, 2026',
      readTime: '4 min read',
      cover: {
        caption: 'Hands around a table with printed proposal sheets and stickers marking votes',
        palette: ['#E8F3EC', '#D6EADE', '#087736'],
        accent: '#087736',
      },
      featured: false,
      body: [
        { type: 'p', content:
          'For years, groups on Hylo have asked us for the same thing: a way to collectively decide how to spend shared money. Mutual aid funds, scholarship pools, small grant programs, participatory budgeting rounds \u2014 the shapes vary, but the need is the same. People want to decide together, transparently, with a record they can point to.' },
        { type: 'p', content:
          'Starting today, Funding Rounds are available to all groups on Hylo. Here\u2019s what they do.' },
        { type: 'h2', content: 'How it works' },
        { type: 'list', items: [
          'Create a round with a total amount, an open window, and a short brief.',
          'Members submit proposals \u2014 each is a full Hylo post with discussion threads attached.',
          'When submissions close, the group votes with ranked-choice or pro-rata allocation.',
          'Allocations and disbursements are visible in a shared ledger.',
          'When the round closes, proposals become projects and the work begins.',
        ] },
        { type: 'h2', content: 'Built with our partners' },
        { type: 'p', content:
          'This feature was designed in partnership with three groups running real participatory budgeting processes: a neighborhood council in Oakland, a regional mutual-aid network, and a cohort of climate funders. We shipped in their rounds, broke things, fixed them, shipped again. Thank you to everyone who put work into this.' },
        { type: 'p', content:
          'Funding Rounds are free for all groups. Read the Steward Guide for the full how-to.' },
      ],
    },
    {
      slug: 'watershed-council-case-study',
      title: 'How a watershed council built trust in six months',
      excerpt:
        'The Ventura River Watershed Council had stewards from 14 organizations, two decades of history, and a coordination problem nobody had solved. Here\u2019s what changed.',
      category: 'stories',
      author: { name: 'Maya Castillo', role: 'Community team' },
      date: 'March 28, 2026',
      readTime: '12 min read',
      cover: {
        caption: 'Aerial of a watershed at dawn \u2014 green hills, meandering river, small town in the valley',
        palette: ['#D1E9DE', '#9FC7B6', '#4F8A7B'],
        accent: '#23CC80',
      },
      featured: false,
      body: [
        { type: 'p', content:
          'When Pilar Ocampo took over as coordinator of the Ventura River Watershed Council in fall 2025, she inherited a council that had been meeting for twenty-three years and had accomplished a lot \u2014 but its coordination infrastructure was a folder of email threads, a shared drive nobody maintained, and a quarterly meeting where decisions got lost. Fourteen organizations. Three counties. One river.' },
        { type: 'p', content:
          'Six months later, the council runs on Hylo. Here\u2019s the story of how that happened, what worked, and what didn\u2019t.' },
        { type: 'h2', content: 'The problem before Hylo' },
        { type: 'p', content:
          'The council\u2019s real work happened between meetings. Field crews coordinated restoration projects. Hydrologists shared data. Policy people tracked permits. Stewards from each partner organization brought their own priorities \u2014 and their own inboxes, calendars, and tools. Nothing held the whole picture.' },
        { type: 'quote', content:
          'We had twenty people in our network who all cared deeply about the same river and no way for them to see what each other were doing.',
          attribution: 'Pilar Ocampo, Coordinator' },
        { type: 'h2', content: 'What changed' },
        { type: 'p', content:
          'Over three months, we worked with Pilar and the council\u2019s core stewards to migrate. We started with a Pollination engagement \u2014 mapping the council\u2019s agreements onto Hylo\u2019s structure, building a custom onboarding flow for each partner organization, and training a cohort of six stewards to tend the space. Then we stayed close through Blossom for the first six months while culture took root.' },
        { type: 'h2', content: 'Six months later' },
        { type: 'list', items: [
          '127 active members across 14 partner organizations',
          '40+ projects coordinated in the open, from habitat restoration to water-quality monitoring',
          'A monthly coordination call that runs on an agenda built collaboratively in Hylo the week before',
          'Three new partner organizations joined after finding the council through its public presence',
        ] },
        { type: 'p', content:
          'The infrastructure isn\u2019t the story. The story is twenty-three years of accumulated trust finally having a place to compound instead of dissipate. That\u2019s what good coordination does \u2014 it lets existing relationships do more.' },
      ],
    },
    {
      slug: 'participatory-design-practice',
      title: 'Participatory design isn\u2019t a workshop, it\u2019s a practice',
      excerpt:
        'We get asked often how we build Hylo with the community. The honest answer is that "with the community" isn\u2019t a phase of the work. It\u2019s the work.',
      category: 'essays',
      author: { name: 'Tibet Sprague', role: 'Co-founder, Hylo' },
      date: 'March 18, 2026',
      readTime: '10 min read',
      cover: {
        caption: 'Whiteboard covered in post-its and hand-drawn flow diagrams, three people standing back from it',
        palette: ['#EFE9F7', '#D6C9EC', '#9883E5'],
        accent: '#9883E5',
      },
      featured: false,
      body: [
        { type: 'p', content:
          'There\u2019s a version of participatory design that shows up as a workshop. A facilitator runs a session. Participants generate sticky notes. A designer takes the sticky notes back to the studio and designs the thing. It\u2019s a better process than not asking anyone at all. But it\u2019s not what we mean by participatory.' },
        { type: 'p', content:
          'What we mean is that the people who use Hylo are co-authors of it. Not in a ceremonial sense \u2014 in a concrete one. Features we ship start as conversations in the group that uses Hylo to build Hylo. That group has over a thousand members now, and when something doesn\u2019t work, we hear about it directly, often within the hour. When something should exist, people describe it \u2014 and sometimes design it \u2014 before we start building.' },
        { type: 'h2', content: 'Why it\u2019s hard' },
        { type: 'p', content:
          'Participatory design is slower. It\u2019s uncomfortable when what people want doesn\u2019t match what you think they need. It requires actually changing your mind, sometimes mid-sprint. It\u2019s easier to hold a workshop, produce a design, and call it collaborative than it is to stay in real dialogue with a community over the lifetime of a product.' },
        { type: 'p', content:
          'But it\u2019s the only way we know to build something that genuinely belongs to the people who use it. And belonging is the whole point.' },
      ],
    },
    {
      slug: 'spring-release-notes',
      title: 'Spring 2026 release notes: Tracks, Funding Rounds, and a faster map',
      excerpt:
        'A roundup of everything shipped this quarter, including two new feature sets, a handful of accessibility improvements, and a map that now loads five times faster.',
      category: 'product',
      author: { name: 'Tibet Sprague', role: 'Co-founder, Hylo' },
      date: 'March 14, 2026',
      readTime: '6 min read',
      cover: {
        caption: 'Stack of new feature cards in the Hylo color palette, arranged on a warm wood desk',
        palette: ['#E5EEF5', '#BFD5E5', '#40A1DD'],
        accent: '#40A1DD',
      },
      featured: false,
      body: [
        { type: 'p', content:
          'A lot shipped this quarter. Here\u2019s a roundup of the things we think you\u2019ll care most about.' },
        { type: 'h2', content: 'Tracks & Actions' },
        { type: 'p', content:
          'Create learning journeys, skill shares, and classes. Members progress through an ordered sequence of actions together, at their own pace. Great for cohort-based programs and structured onboarding flows.' },
        { type: 'h2', content: 'Funding Rounds & Collective Budgeting' },
        { type: 'p', content:
          'Decide together how to spend shared money. Pool funds, vet requests, and allocate transparently. See the full announcement for the detailed how-to.' },
        { type: 'h2', content: 'A faster map' },
        { type: 'p', content:
          'The global map now loads 5\u00d7 faster on slow connections, clusters pins more cleanly, and supports offline caching for groups working in the field. Thanks to the OpenTEAM team for stress-testing this one.' },
        { type: 'h2', content: 'Accessibility' },
        { type: 'list', items: [
          'All modal dialogs now trap focus correctly and return focus on close.',
          'Contrast bumped across a dozen badges and chips after an audit with Fable.',
          'A new high-contrast theme \u2014 toggleable in Settings.',
        ] },
      ],
    },
    {
      slug: 'prosocial-at-hylo',
      title: 'Why we train our team in Prosocial facilitation',
      excerpt:
        'It\u2019s one thing to build tools for collaboration. It\u2019s another to show up skilled enough to actually help groups use them well. Our stewardship team trains deeply \u2014 here\u2019s why.',
      category: 'notes',
      author: { name: 'Simone Poutnik', role: 'Community team' },
      date: 'February 28, 2026',
      readTime: '7 min read',
      cover: {
        caption: 'Small circle of people in folding chairs outdoors under a shade tree, taking notes',
        palette: ['#DCF0E4', '#A8D6BC', '#23CC80'],
        accent: '#23CC80',
      },
      featured: false,
      body: [
        { type: 'p', content:
          'A few years ago, we realized something: we were shipping good tools to groups that were still struggling to work together, and our conclusion was always "the tools aren\u2019t enough." They weren\u2019t. Software doesn\u2019t resolve conflict. It doesn\u2019t help a group notice its own dynamics. It doesn\u2019t help stewards hold space when things get hard.' },
        { type: 'p', content:
          'So we started training. Everyone on our community team now has working fluency in Prosocial facilitation \u2014 a framework grounded in Elinor Ostrom\u2019s work on how groups manage shared resources \u2014 and sociocratic governance. When we show up in a group to help, we\u2019re not just answering product questions. We\u2019re paying attention to how the group is functioning.' },
        { type: 'quote', content:
          'The tools are the easy part. Helping a group actually use them well is skilled work.',
          attribution: 'Simone Poutnik' },
        { type: 'p', content:
          'This is the ground beneath our stewardship support offerings. When you hire us, you\u2019re getting people who think carefully about how groups work, not just people who know the UI.' },
      ],
    },
    {
      slug: 'hylo-alliance-launch',
      title: 'Announcing the Hylo Alliance',
      excerpt:
        'A private space for partner organizations, advisors, and funders to coordinate, share learnings, and shape the platform\u2019s direction together.',
      category: 'announcements',
      author: { name: 'Clare Politano', role: 'Co-founder, Hylo' },
      date: 'February 14, 2026',
      readTime: '3 min read',
      cover: {
        caption: 'Overhead view of many hands meeting in the middle of a long wooden table',
        palette: ['#EDE7DC', '#D3C7B0', '#A38E6C'],
        accent: '#087736',
      },
      featured: false,
      body: [
        { type: 'p', content:
          'Starting today, organizations that support Hylo financially \u2014 whether through a Seed, Blossom, or Flourish engagement \u2014 get access to a private group called the Hylo Alliance. It\u2019s a place for partners to share what they\u2019re learning, get direct input from our team, and help shape where the platform goes next.' },
        { type: 'p', content:
          'The Alliance includes a monthly coordination call, a private chat space, first look at upcoming features, and a voice in our quarterly roadmap review.' },
        { type: 'p', content:
          'If you\u2019re already a partner, you\u2019ve been invited. If you\u2019d like to become one, reach out.' },
      ],
    },
    {
      slug: 'open-source-stewardship',
      title: 'What it means to steward an open-source commons',
      excerpt:
        'Hylo is MIT-licensed, developed in public, and sustained by people who believe the coordination layer of a thriving civilization shouldn\u2019t be privately owned.',
      category: 'essays',
      author: { name: 'The Hylo team', role: null },
      date: 'January 30, 2026',
      readTime: '5 min read',
      cover: {
        caption: 'Seedling growing from the middle of an open book, soft light',
        palette: ['#E6F0DD', '#C6DCA9', '#88A958'],
        accent: '#23CC80',
      },
      featured: false,
      body: [
        { type: 'p', content:
          'Open source isn\u2019t only a license. It\u2019s a stance about who owns what. We release everything we build under MIT because we don\u2019t think the coordination layer of civil society should be a product. It should be infrastructure \u2014 maintained in the open, governed in the open, improved by many hands.' },
        { type: 'p', content:
          'That doesn\u2019t mean it\u2019s free to build. Paying people to do skilled work is how you get skilled work done. Hylo is sustained by our non-profit\u2019s fiscal sponsorship, by grants from aligned funders, and by the stewardship support partnerships we offer to groups that want a deeper relationship with the team.' },
        { type: 'p', content:
          'Every line of code and every feature ships to the commons. If you want to read it, fork it, or contribute \u2014 the repo is on GitHub, and the welcome mat is out.' },
      ],
    },
  ];

  // Expose for the post-detail page.
  window.BLOG_POSTS = POSTS;
  window.BLOG_CATEGORIES = CATEGORIES;

  // ——————— Placeholder cover ———————
  function CoverPlaceholder({ cover, label, height = 240 }) {
    // Soft diagonal gradient + caption. No generated imagery.
    const [a, b, c] = cover.palette;
    return (
      <div style={{
        position: 'relative', width: '100%', height,
        borderRadius: 10, overflow: 'hidden',
        background: `linear-gradient(135deg, ${a} 0%, ${b} 55%, ${c} 100%)`,
      }}>
        {/* subtle contour rings */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.22 }} preserveAspectRatio="none" viewBox="0 0 400 240">
          <defs>
            <pattern id={`p-${label.length}`} width="36" height="36" patternUnits="userSpaceOnUse">
              <circle cx="18" cy="18" r="16" fill="none" stroke={cover.accent} strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="400" height="240" fill={`url(#p-${label.length})`} />
        </svg>
        {/* caption chip */}
        <div style={{
          position: 'absolute', left: 14, bottom: 14,
          padding: '6px 10px', borderRadius: 999,
          background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(6px)',
          fontSize: 11, color: `rgba(${RHINO_RGB},0.72)`,
          maxWidth: '75%', lineHeight: 1.35,
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          letterSpacing: 0.1,
        }}>
          {cover.caption}
        </div>
      </div>
    );
  }
  window.BLOG_CoverPlaceholder = CoverPlaceholder;

  // ——————— Category chip ———————
  function CategoryChip({ slug, size = 'sm' }) {
    const cat = CATEGORIES[slug];
    if (!cat) return null;
    const pad = size === 'lg' ? '5px 12px' : '4px 10px';
    const fz = size === 'lg' ? 12 : 11.5;
    return (
      <span style={{
        display: 'inline-block',
        padding: pad, borderRadius: 999,
        fontSize: fz, fontWeight: 600, letterSpacing: 0.2,
        color: cat.color,
        background: `${cat.color}18`,
      }}>{cat.label}</span>
    );
  }
  window.BLOG_CategoryChip = CategoryChip;

  // ——————— Hero (featured post) ———————
  function FeaturedHero({ post }) {
    const href = `v5-blog-post.html?slug=${encodeURIComponent(post.slug)}`;
    return (
      <section style={{
        background: H.cream, padding: '160px 40px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: 1.2, color: FOREST, marginBottom: 16,
          }}>The Hylo blog</div>
          <h1 style={{
            fontSize: 44, fontWeight: 700, letterSpacing: -1.1,
            lineHeight: 1.05, margin: 0, color: RHINO,
            maxWidth: 820, textWrap: 'balance',
          }}>
            Dispatches from the people building, stewarding, and using Hylo.
          </h1>
          <p style={{
            marginTop: 16, fontSize: 17, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.70)`, maxWidth: 640,
            textWrap: 'pretty',
          }}>
            Essays, field notes, community stories, and product updates —
            written by the team and the communities we work with.
          </p>

          {/* Featured post card */}
          <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              marginTop: 48,
              display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48,
              alignItems: 'center',
            }}>
              <CoverPlaceholder cover={post.cover} label={post.title} height={360} />
              <div>
                <CategoryChip slug={post.category} size="lg" />
                <h2 style={{
                  marginTop: 16,
                  fontSize: 36, fontWeight: 700, letterSpacing: -0.9,
                  lineHeight: 1.1, color: RHINO, textWrap: 'balance',
                }}>{post.title}</h2>
                <p style={{
                  marginTop: 14, fontSize: 16, lineHeight: 1.6,
                  color: `rgba(${RHINO_RGB},0.72)`, textWrap: 'pretty',
                }}>{post.excerpt}</p>
                <div style={{
                  marginTop: 20, display: 'flex', alignItems: 'center', gap: 12,
                  fontSize: 13, color: `rgba(${RHINO_RGB},0.55)`,
                }}>
                  <span style={{ fontWeight: 500, color: RHINO }}>{post.author.name}</span>
                  <span style={{ width: 3, height: 3, borderRadius: 999, background: `rgba(${RHINO_RGB},0.25)` }} />
                  <span>{post.date}</span>
                  <span style={{ width: 3, height: 3, borderRadius: 999, background: `rgba(${RHINO_RGB},0.25)` }} />
                  <span>{post.readTime}</span>
                </div>
                <div style={{ marginTop: 24, color: FOREST, fontSize: 14, fontWeight: 600 }}>
                  Read the essay <span style={{ marginLeft: 4 }}>→</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    );
  }

  // ——————— Filter row ———————
  function FilterRow({ active, onChange, counts }) {
    const opts = [
      { key: 'all', label: 'All posts' },
      ...Object.entries(CATEGORIES).map(([k, v]) => ({ key: k, label: v.label })),
    ];
    return (
      <div style={{
        display: 'flex', gap: 8, flexWrap: 'wrap',
        padding: '36px 0 28px',
      }}>
        {opts.map(o => {
          const isActive = active === o.key;
          const color = o.key === 'all' ? RHINO : CATEGORIES[o.key].color;
          return (
            <button
              key={o.key}
              onClick={() => onChange(o.key)}
              style={{
                padding: '8px 14px', borderRadius: 999,
                border: `1px solid ${isActive ? color : `rgba(${RHINO_RGB},0.18)`}`,
                background: isActive ? color : '#fff',
                color: isActive ? '#fff' : RHINO,
                fontSize: 13, fontWeight: 500, letterSpacing: 0.1,
                cursor: 'pointer', fontFamily: 'inherit',
                transition: 'background .15s, color .15s, border-color .15s',
              }}
            >
              {o.label}
              <span style={{
                marginLeft: 8, fontSize: 11,
                color: isActive ? 'rgba(255,255,255,0.75)' : `rgba(${RHINO_RGB},0.45)`,
              }}>{counts[o.key] ?? 0}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // ——————— Post card (grid) ———————
  function PostCard({ post }) {
    const [hover, setHover] = React.useState(false);
    const href = `v5-blog-post.html?slug=${encodeURIComponent(post.slug)}`;
    return (
      <a
        href={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          textDecoration: 'none', color: 'inherit', display: 'block',
          transition: 'transform .2s ease',
          transform: hover ? 'translateY(-2px)' : 'none',
        }}
      >
        <CoverPlaceholder cover={post.cover} label={post.title} height={200} />
        <div style={{ padding: '18px 2px 0' }}>
          <CategoryChip slug={post.category} />
          <h3 style={{
            marginTop: 12, fontSize: 22, fontWeight: 700,
            letterSpacing: -0.5, lineHeight: 1.2, color: RHINO,
            textWrap: 'balance',
          }}>{post.title}</h3>
          <p style={{
            marginTop: 8, fontSize: 14.5, lineHeight: 1.55,
            color: `rgba(${RHINO_RGB},0.65)`, textWrap: 'pretty',
          }}>{post.excerpt.length > 140 ? post.excerpt.slice(0, 140) + '\u2026' : post.excerpt}</p>
          <div style={{
            marginTop: 14, display: 'flex', alignItems: 'center', gap: 10,
            fontSize: 12.5, color: `rgba(${RHINO_RGB},0.55)`,
          }}>
            <span style={{ fontWeight: 500, color: `rgba(${RHINO_RGB},0.75)` }}>{post.author.name}</span>
            <span style={{ width: 3, height: 3, borderRadius: 999, background: `rgba(${RHINO_RGB},0.25)` }} />
            <span>{post.date}</span>
            <span style={{ width: 3, height: 3, borderRadius: 999, background: `rgba(${RHINO_RGB},0.25)` }} />
            <span>{post.readTime}</span>
          </div>
        </div>
      </a>
    );
  }

  // ——————— Grid section ———————
  function Grid() {
    const [filter, setFilter] = React.useState('all');
    const counts = React.useMemo(() => {
      const c = { all: POSTS.length };
      for (const k of Object.keys(CATEGORIES)) c[k] = 0;
      POSTS.forEach(p => { c[p.category] = (c[p.category] ?? 0) + 1; });
      return c;
    }, []);
    const rest = POSTS.filter(p => !p.featured);
    const shown = filter === 'all' ? rest : rest.filter(p => p.category === filter);
    return (
      <section style={{
        background: '#fff', padding: '8px 40px 96px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            borderTop: `1px solid ${ATHENS_DARK}`,
            paddingTop: 8,
          }}>
            <FilterRow active={filter} onChange={setFilter} counts={counts} />
          </div>
          {shown.length === 0 ? (
            <div style={{
              padding: '40px 0', textAlign: 'center',
              color: `rgba(${RHINO_RGB},0.55)`, fontSize: 15,
            }}>No posts in this category yet.</div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 40,
            }}>
              {shown.map(p => <PostCard key={p.slug} post={p} />)}
            </div>
          )}
        </div>
      </section>
    );
  }

  // ——————— Newsletter band ———————
  function Newsletter() {
    return (
      <section style={{
        background: ATHENS, padding: '60px 40px',
        fontFamily: T.sans, color: RHINO,
      }}>
        <div style={{
          maxWidth: 720, margin: '0 auto', textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: 24, fontWeight: 700, letterSpacing: -0.4,
            color: RHINO, margin: 0, lineHeight: 1.2,
          }}>Get the monthly dispatch</h2>
          <p style={{
            marginTop: 14, fontSize: 15, lineHeight: 1.6,
            color: `rgba(${RHINO_RGB},0.68)`, textWrap: 'pretty',
            margin: '14px 0 0',
          }}>
            One email a month. Essays, product notes, community stories, and
            the occasional invitation. No marketing copy, no tracking, no spam.
          </p>
          <form
            onSubmit={e => { e.preventDefault(); }}
            style={{
              marginTop: 24,
              display: 'flex', gap: 8, justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <input
              type="email"
              required
              placeholder="you@yourgroup.org"
              style={{
                minWidth: 280,
                height: 44, padding: '0 16px',
                borderRadius: 6,
                border: `1px solid rgba(${RHINO_RGB},0.22)`,
                background: '#fff',
                fontSize: 14, color: RHINO, fontFamily: 'inherit',
                outline: 'none',
              }}
            />
            <button type="submit" style={{
              height: 44, padding: '0 22px',
              borderRadius: 6, border: 'none',
              background: FOREST, color: '#fff',
              fontSize: 14, fontWeight: 600, letterSpacing: 0.2,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>Subscribe</button>
          </form>
          <div style={{
            marginTop: 12, fontSize: 12, color: `rgba(${RHINO_RGB},0.48)`,
          }}>Unsubscribe anytime. We store your email and that’s it.</div>
        </div>
      </section>
    );
  }

  // ——————— Footer (mirrored) ———————
  function BlogFooter() {
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
    return (
      <footer style={{
        background: '#fff', borderTop: `1px solid ${ATHENS_DARK}`,
        padding: '64px 40px 40px', fontFamily: T.sans, color: RHINO,
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
                      fontSize: 13.5, marginBottom: 10, color: RHINO, cursor: 'pointer',
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
        </div>
      </footer>
    );
  }
  window.BLOG_Footer = BlogFooter;

  // ——————— Page composition ———————
  function BlogIndexPage() {
    const Nav = window.VE_Nav;
    const featured = POSTS.find(p => p.featured) || POSTS[0];
    return (
      <div style={{ background: '#fff', color: RHINO, fontFamily: T.sans }}
           data-screen-label="v5 Blog">
        <Nav accent={FOREST} />
        <FeaturedHero post={featured} />
        <Grid />
        <Newsletter />
        <BlogFooter />
      </div>
    );
  }

  window.BlogIndexPage = BlogIndexPage;
})();
