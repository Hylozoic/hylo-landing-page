# Hylo About Page Redesign Spec

**Version:** 1.0 — April 2026
**Companion to:** hylo-homepage-spec.md
**Purpose:** A complete design and content spec for the new Hylo About page. This page carries the deeper story that the homepage intentionally keeps brief. People who arrive here are already curious — they clicked through. The About page rewards that curiosity with honesty, specificity, and warmth.

---

## What This Page Needs to Do

The current About page tries to do everything at once: manifesto, theory of change, participatory design philosophy, governance explainer, team bios, land acknowledgment, and invitation. The result is a single long scroll that speaks powerfully to people who already share the worldview and reads as opaque to everyone else.

The new About page splits these into clear sections with distinct purposes:

1. **Who we are and why we're here** — the short version
2. **What we believe** — the longer version, earned by the short one
3. **How we build** — participatory design, briefly
4. **How we're governed** — the commons structure
5. **The team** — human, concise, credible
6. **Recognition & partners** — proof points
7. **Get involved** — specific entry points

The voice matches the homepage: plain first, deeper available. A nonprofit director evaluating Hylo should finish this page thinking "these are serious people building something real." A bioregional organizer should finish thinking "these are my people." Both should be right.

---

## Section 1 — Who We Are

### Layout

Full-width. Warm cream background (matches homepage hero: `hsl(39 20% 88%)`). Generous vertical padding (100px top, 60px bottom). Content centered, max-width 720px.

### Content

**Page title:**

> About Hylo

Onest Bold, 36px, Rhino (`#2C4059`). Left-aligned or centered (match homepage alignment decision).

**Lead paragraph:**

> Hylo is a coordination platform for groups that are trying to do something together — and need better tools to do it. We build software for communities that want to organize, support each other, make decisions, and take collective action. We're open source, non-profit, and community-governed.

Onest Regular, 18px, Rhino at 80%. Line-height 1.6. Max-width 640px.

This is the entire "what is Hylo" answer in four sentences. No jargon. No world-saving. A person reading this should know exactly what kind of thing they're looking at.

**Second paragraph:**

> Hylo is maintained by Terran Collective, a small team based in the San Francisco Bay Area. We've been building this since 2012 — first as a tool for connecting purpose-driven people, now as coordination infrastructure for communities organizing around shared places, resources, and goals. Hundreds of groups use Hylo today, from neighborhood mutual aid networks to global learning communities to bioregional organizing hubs.

Onest Regular, 16px, Rhino at 70%. Line-height 1.6. 24px below lead paragraph.

This grounds the origin, the timeline, and the current reality in a single readable block.

### Spacing

- 100px top (below nav)
- 24px between title and lead paragraph
- 24px between paragraphs
- 60px bottom

---

## Section 2 — What We Believe

### Purpose

This is where the deeper vision lives. The homepage doesn't have room for it, and shouldn't. The About page does. But it arrives *after* the plain introduction, so the reader already understands what Hylo is before being asked to engage with why.

### Layout

Full-width. White background. Content centered, max-width 720px.

### Content

**Section header:**

> Why we build this

Onest Bold, 24px, Rhino. 

**The core argument, in plain prose:**

> The biggest challenges facing communities today — climate disruption, economic precarity, eroding trust — are coordination problems at their root. People want to help. Organizations are trying. But the tools we have either fragment our efforts across a dozen apps or lock us into platforms designed to extract attention rather than support action.
>
> We believe that when people can actually see each other, support each other, and make decisions together, they become capable of things that no top-down program or market incentive can replicate. A neighborhood that knows how to coordinate mutual aid before a disaster hits. A watershed where land stewards talk to each other across property lines. A city where residents have a real voice in how shared resources are allocated.
>
> This doesn't happen automatically. It requires trust, and trust requires practice. Hylo is designed to support that practice — starting with simple conversation and mutual support, and growing with groups as they develop the capacity for more complex coordination, collective governance, and shared stewardship.
>
> If Hylo works, a watershed can govern itself.

Onest Regular, 16px, Rhino at 80%. Line-height 1.7. Paragraph spacing: 20px.

The final line — "If Hylo works, a watershed can govern itself" — set in Onest Medium, 18px, Rhino. It should feel like a quiet arrival, not a slogan. It earns its weight because the paragraphs above it built the case in concrete language.

*Design note: This section replaces the current page's "Our Vision & Theory of Change" and "Bioregions are key to a Just Transition" sections. It carries the same intellectual content in roughly a quarter of the words, without any vocabulary that requires prior alignment to parse.*

### Spacing

- 60px top
- 16px between header and body
- 20px between paragraphs
- 60px bottom

---

## Section 3 — How We Build

### Purpose

Participatory design is a genuine differentiator — Hylo is shaped by the communities that use it. But the current page over-explains the philosophy and under-shows the practice. This section should be short and demonstrate the process rather than argue for it.

### Layout

Full-width. Athens Gray background (`#FAFBFC`). Content: two-column on desktop (text left, visual right). Stacked on mobile (text above visual). Max-width 1000px, centered.

### Content — Left Column (text, max-width 480px)

**Section header:**

> Built with the communities who use it

Onest Bold, 24px, Rhino.

**Body:**

> Every major feature in Hylo was designed in partnership with real groups working on real problems. We don't build what we think communities need — we listen, co-design, and build what they tell us they need. Then we make it available to everyone on the platform.
>
> Our design partners have included the Planetary Health Alliance, Prosocial World, Salmon Nation, and dozens of local organizing groups. Monthly community calls, co-creation sessions, and the Building Hylo group on Hylo itself keep our roadmap accountable to the people who depend on it.

Onest Regular, 16px, Rhino at 80%. Line-height 1.6.

**Small proof point:**

> 2026 Pizzigati Prize winner — NTEN's award for open-source public interest technology.

Onest Regular, 14px, Rhino at 60%. 24px below body. Optional: NTEN logo mark (small, inline).

### Content — Right Column (visual, max-width 440px)

A single image or screenshot showing the participatory process in action. Options:

- A screenshot of the Building Hylo group on Hylo (meta-recursive and genuine)
- A photo from a community call or co-creation session (must be real, not stock)
- A screenshot of the public roadmap or Canny board showing community-driven feature requests

Image: border-radius 4px, subtle shadow (`0px 4px 15px rgba(0, 0, 0, 0.08)`). No device mockup — just the image.

*Image direction: The best option is a screenshot of the Building Hylo group with visible posts, member avatars, and activity. This demonstrates the recursive quality — the platform used to build the platform — without needing to explain it.*

### Spacing

- 60px top
- 32px gap between columns
- 60px bottom

---

## Section 4 — How We're Governed

### Purpose

The governance structure is one of Hylo's most unusual qualities. Most platforms are owned by their founders or investors. Hylo is actively transitioning toward community governance. This section should make that legible without drowning in structural detail.

### Layout

Full-width. White background. Content centered, max-width 720px.

### Content

**Section header:**

> A technology commons

Onest Bold, 24px, Rhino.

**Lead paragraph:**

> Hylo is not owned by investors and never will be. It's a fiscally sponsored non-profit, built on open-source code under the Apache 2.0 license. We're working toward a permanent structure — likely a purpose-locked nonprofit with cooperative governance — that ensures Hylo can never be captured, sold, or repurposed against the communities it serves.

Onest Regular, 16px, Rhino at 80%. Line-height 1.6.

**Governance overview:**

> We govern ourselves using sociocracy — a system of distributed authority where decisions are made by the people closest to the work, through consent rather than top-down control. Our team operates through interconnected circles, each with a clear domain.

Onest Regular, 16px, Rhino at 80%. 20px below lead paragraph.

### Governance Circles — Visual

A simple horizontal row of circle badges (desktop) or vertical stack (mobile). Each circle is a small card:

Card: 160px wide, auto height. Border: 1px solid Athens Gray Dark (`#E1E5EA`). 4px border-radius. 16px padding. Centered text.

- **Circle name** — Onest Medium, 14px, Rhino
- **Domain** — Onest Regular, 12px, Rhino at 60%. 1 line.

The five circles:

| Circle | Domain |
|--------|--------|
| General | Strategy and coherence |
| Product | Direction and design |
| Development | Technical implementation |
| Community | Relationships and care |
| Fundraising | Resourcing and sustainability |

12px gap between circle cards. Centered in the content column. 32px below the governance overview text.

### Commitments

Below the circles, a brief list of structural commitments. Not a bulleted manifesto — a set of quiet, factual statements.

> **What this means in practice:** Your data belongs to you. Our code is public. Our finances are transparent. Communities can leave Hylo and take their data with them. And we're building toward a future where the people who use Hylo have real governance authority over how it's built and run — not just advisory input.

Onest Regular, 15px, Rhino at 75%. 32px below circles. Max-width 640px.

### Spacing

- 60px top
- 16px between header and lead paragraph
- 20px between paragraphs
- 32px between text and circle cards
- 32px between circles and commitments
- 60px bottom

---

## Section 5 — The Team

### Purpose

Show the humans. The current bios are long, personal, and written in a specific spiritual/activist register. The new bios should be shorter, lead with competence, and let personality come through in a line or two rather than a paragraph. The goal: "these are skilled, committed people I'd trust to build something important."

### Layout

Full-width. Athens Gray background (`#FAFBFC`). Content: max-width 1000px, centered.

**Section header:**

> The team

Onest Bold, 24px, Rhino.

**Section intro:**

> Hylo is built by Terran Collective — a small, distributed team that practices the same coordination principles we build into the platform. We operate on shared governance, mutual support, and a commitment to building technology that outlasts any one of us.

Onest Regular, 16px, Rhino at 80%. Max-width 640px. 16px below header.

### Team Grid

3 columns on desktop, 2 on tablet, 1 on mobile. 24px gap.

Each team member card:

- **Photo** — 80px circle (avatar XL size), border-radius 50%. Real photo, not illustrated. Consistent quality and framing across the team.
- **Name** — Onest Medium, 16px, Rhino. 12px below photo.
- **Role** — Onest Regular, 13px, Caribbean Green. 2px below name.
- **Bio** — Onest Regular, 14px, Rhino at 70%. 8px below role. 3–4 lines max.

Card: no background change from section (Athens Gray). No border. Clean and open.

### Revised Bios

*These are draft bios — the team should review and adjust voice. The goal is: one sentence of professional credibility, one sentence of what they do at Hylo, one sentence of human texture. Max ~40 words each.*

**Tibet Sprague — Director of Technology**
Co-founder of Terran Collective and Hylo's technical architect. Tibet has been building tools for cooperative coordination for over a decade. He also stewards the Collaborative Technology Alliance. Brown University CS.

**Clare Brodeur — Director of Product**
A technologist and community organizer with a decade of experience mobilizing communities through technology. Clare leads Hylo's participatory design process, working directly with groups to co-create the tools they need. ProSocial facilitator. UVA Political Science.

**Aaron Brodeur — Director of Design**
Systems designer and entrepreneur whose work in social technology, solar energy, and distributed governance has reached millions. Aaron leads Hylo's interface and experience design, and contributes to the Holochain ecosystem through Lightningrod Labs.

**Krisha Subramanian — Community Lead**
Background in business development with deep roots in regenerative living and social justice. Krisha manages Hylo's community relationships and stewards a 50-hectare regenerative land project in Costa Rica's cloud forest.

**Tom Watson — Senior Software Engineer**
Based in Canberra, Australia. Tom leads Hylo's mobile development and thinks seriously about what "regenerative culture" means when it stops being a slogan and starts being a design constraint.

**Yasmine El Baggari — Community Steward**
Originally from Morocco, now in San Francisco. Yasmine has worked with the World Bank, the US State Department, and launched Voyaj to foster cross-cultural connection. Harvard Graduate School of Education. She brings global perspective to Hylo's community work.

### Spacing

- 60px top
- 16px between header and intro
- 40px between intro and team grid
- 24px gap in grid
- 60px bottom

---

## Section 6 — Recognition & Partners

### Purpose

Third-party validation. Who funds this, who partners with it, and what outside recognition has it received. Brief and visual.

### Layout

Full-width. White background. Content: max-width 900px, centered.

### Content

**Section header:**

> Partners and recognition

Onest Bold, 24px, Rhino. Centered.

### Awards Row

A centered callout card. White background, 1px border Caribbean Green at 30%, 4px border-radius, 24px padding. Max-width 500px, centered.

> **2026 Pizzigati Prize** — NTEN's award for open-source technology serving the public interest.

Onest Regular, 15px, Rhino. Optional NTEN logo beside text.

### Current Partners & Funders

**Subheader:**

> Current partners and funders

Onest Medium, 14px, uppercase, 0.6px letter-spacing, Rhino at 60%. Left-aligned. 40px below award card.

A row of partner logos (grayscale, hover to color). Max height 40px per logo. 32px horizontal gap. Wrap on mobile.

- NoVo Foundation / Regional Futures Fund
- 11th Hour Foundation
- Jeff Parrett / Rising Foundation

If logos aren't available, use text with consistent styling: Onest Regular, 15px, Rhino at 70%.

### Ecosystem Partners

**Subheader:**

> Ecosystem

Onest Medium, 14px, uppercase, 0.6px letter-spacing, Rhino at 60%. 32px below funders.

Smaller logo row or text list of ecosystem partners. These are the groups Hylo has been built alongside:

Planetary Health Alliance · Prosocial World · Salmon Nation · OpenTEAM · Regen Network · Bloom Network · Collaborative Technology Alliance · Holomovement · Common Good Missoula

Onest Regular, 13px, Rhino at 50%. Separated by middot (`·`). Centered. Links on each name where available.

### Spacing

- 60px top
- 24px between header and award
- 40px between award and funders
- 32px between funders and ecosystem
- 60px bottom

---

## Section 7 — Get Involved

### Purpose

The current page ends with "There is a place set for you at our table" — beautiful language, but no specific action. This section replaces warmth-without-direction with specific paths in.

### Layout

Full-width. Warm cream background (matches hero/opening: `hsl(39 20% 88%)`). Content: max-width 800px, centered.

### Content

**Section header:**

> There's a place for you here.

Onest Bold, 28px, Rhino. Centered.

*This preserves the spirit of the current closing line while sounding more direct and less ceremonial.*

**Body:**

> Hylo is built in the open. Whether you want to bring your community, contribute code, attend a call, or just explore — here's where to start.

Onest Regular, 16px, Rhino at 70%. Centered. Max-width 560px. 16px below header.

### Action Cards

4 cards in a 2×2 grid (desktop). Stacked on mobile. 20px gap.

Each card: White background, 4px border-radius, 24px padding, subtle shadow. Left-aligned content.

**Card 1 — Bring Your Group**
- Icon: People icon, 24px, Caribbean Green
- Title: "Bring your group" — Onest Medium, 16px, Rhino
- Body: "Set up your community on Hylo. It's free to start." — Onest Regular, 14px, Rhino 70%
- Link: "Get started →" — text-button style, Caribbean Green, 14px

**Card 2 — Join a Community Call**
- Icon: Calendar icon, 24px, Events red
- Title: "Attend a community call" — Onest Medium, 16px, Rhino
- Body: "Monthly calls open to everyone. See what's being built, share what you need." — 14px, Rhino 70%
- Link: "See upcoming calls →"

**Card 3 — Contribute**
- Icon: Code/wrench icon, 24px, Projects orange
- Title: "Contribute to the codebase" — Onest Medium, 16px, Rhino
- Body: "Hylo is open source. Browse the code, file issues, submit PRs." — 14px, Rhino 70%
- Link: "View on GitHub →"

**Card 4 — Support Hylo**
- Icon: Heart icon, 24px, Medium Purple
- Title: "Support the commons" — Onest Medium, 16px, Rhino
- Body: "Join Hylo Commons or make a contribution. Every dollar stays in the project." — 14px, Rhino 70%
- Link: "Learn more →"

### Spacing

- 60px top
- 32px between header block and cards
- 20px card grid gap
- 80px bottom before footer

---

## Footer

Same as homepage footer — consistent across all pages.

- Logo, nav links, social links
- "Built with care by Terran Collective"
- Land acknowledgment as a brief, single-line note at the very bottom: "Hylo emerged from unceded Chochenyo Ohlone territory and now receives contributions from around the world." — Onest Regular, 12px, Rhino at 40%.

*Design note: The current land acknowledgment is long and deeply personal. For the website footer, a brief acknowledgment is appropriate — respectful without being performative. The full text could live on a dedicated page if the team wants to preserve it.*

---

## Page-Level Design Notes

### Color Flow

| Section | Background | Tone |
|---------|-----------|------|
| Who We Are | Warm cream | Welcoming, grounded |
| What We Believe | White | Clear, open |
| How We Build | Athens Gray | Quiet, credible |
| How We're Governed | White | Structural, trustworthy |
| The Team | Athens Gray | Human, warm |
| Recognition | White | Validated |
| Get Involved | Warm cream | Full circle |

Same alternating rhythm as the homepage — no two adjacent sections share a background.

### What Was Cut (and Where It Lives Now)

| Current page content | New location |
|---------------------|-------------|
| Full theory of change | Whitepaper (linked from About) |
| "More beautiful world our hearts know is possible" | Removed from public-facing pages |
| Detailed bioregionalism explanation | Whitepaper |
| Extended team bios (spiritual/personal) | Team members can link to personal sites |
| "Spirit-led, heart-centered, Two Spirit Cherokee citizen..." | Personal site or internal bio |
| Full participatory design philosophy | Whitepaper / blog post |
| Detailed governance structure | Whitepaper / dedicated governance page |
| Holochain partnership details | Whitepaper / partners page |
| Hylozoism etymology and full land acknowledgment | Footer (brief) + dedicated page |

### The Voice Shift

The current page speaks to the already-converted. Lines like "We offer this work for our ancestors and the ones yet to come" and "the more beautiful world our hearts know is possible" are meaningful to people inside the movement. They are opaque or alienating to people outside it.

The new page does not abandon these values. It expresses them through what Hylo *does* and how it's *structured* rather than through poetic declaration. The values are present in every sentence — they just don't require a shared vocabulary to receive.

**The test remains:** Read every line aloud. If it sounds like a manifesto, rewrite it until it sounds like a person explaining their work to a smart, curious stranger who doesn't share their background.

### Link to Whitepaper

Somewhere on this page (likely in Section 2 or Section 4), include a clear link:

> Want the full picture? Read the Hylo Whitepaper — our complete vision, theory of change, and strategic plan.

Onest Regular, 14px, Caribbean Green. Links to the whitepaper PDF or page.

This gives the deep thinkers somewhere to go without burdening the About page with everything the whitepaper contains.

---

## Open Questions

1. **Team photos:** Do all team members have consistent, high-quality headshots? If not, this needs a photo session or agreement on style (casual but clear, consistent lighting/framing).
2. **Tree Willard:** Listed on the current page as Director of Development. Not listed in the whitepaper's current core stewards section. Confirm current team roster before publishing.
3. **Bio voice:** The draft bios above are significantly shorter and less personal than the originals. The team should review and adjust — the goal is credibility and warmth in ~40 words, not comprehensive personal history.
4. **Land acknowledgment:** The current version is long and heartfelt. A brief footer version is proposed. Does the team want to preserve the full version on a separate page?
5. **Partner logos:** Do we have permission and assets (SVG/PNG, grayscale variants) for all listed partners?
6. **Whitepaper link:** Is the whitepaper published in a linkable format, or does it need a dedicated page/PDF?
