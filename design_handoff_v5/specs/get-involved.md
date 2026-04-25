# Hylo Get Involved Page Redesign Spec

**Version:** 1.0 — April 2026
**Companion to:** hylo-homepage-spec.md, hylo-about-page-spec.md, hylo-bring-your-group-spec.md, hylo-agreements-page-spec.md
**Purpose:** A redesigned participation page that gives people clear, specific paths into the Hylo ecosystem based on what they want to do and how much time they have. The current page has the right content — the actions are concrete and real. The redesign tightens the structure, sharpens the voice, and makes it faster to find the right entry point.

---

## What This Page Needs to Do

Someone lands here because they clicked "Get Involved" from the nav or a CTA elsewhere on the site. They're already interested. They don't need to be sold on the vision — they need to know what they can *do*, right now, at a level of commitment that matches where they are.

The current page opens with "A public good technology commons co-created by you" and "There is a place for you at our table" — warm but vague. By the time someone finds the actual actions, they've read through philosophical framing they didn't need. The redesign puts the actions first and lets the philosophy show through the structure rather than the preamble.

### Key structural changes:
1. **Lead with actions, not philosophy.** The first thing visible below the hero should be something someone can click and do.
2. **Tier by commitment level.** Not everyone wants to contribute code. Some people want to attend a call. Some want to donate $5/month. Some want a deep partnership. Organize by depth, not by category.
3. **Separate the audiences.** A community organizer looking for stewardship support has different needs from a developer looking to contribute code. The page should serve both without either having to wade through the other's content.
4. **Make the Hylo groups legible.** Building Hylo, Community Organizers, and the CTA are three different groups for three different audiences. The current page presents them as a flat list. Give each a clearer identity.

---

## Section 1 — Hero

### Layout

Full-width. Warm cream background (`hsl(39 20% 88%)`). Content centered, max-width 720px. Padding: 100px top, 60px bottom.

### Content

**Page title:**

> Get involved

Onest Bold, 36px, Rhino (`#2C4059`).

**Lead paragraph:**

> Hylo is built in the open by a small team and a growing community. Whether you have five minutes or five hours a month, there's a real way to contribute — and everything you put in makes the platform better for everyone.

Onest Regular, 18px, Rhino at 80%. Line-height 1.6. Max-width 640px.

### Spacing

- 100px top
- 24px between title and lead paragraph
- 60px bottom

---

## Section 2 — Quick Actions

### Purpose

Immediate, low-friction entry points. Someone scanning this page should find something they can do in the next 30 seconds. This section catches the "I have a few minutes, what can I do?" energy.

### Layout

Full-width. White background. Content max-width 900px, centered.

**Section header:**

> Start here

Onest Medium, 14px, uppercase, 0.6px letter-spacing, Rhino at 50%. Left-aligned.

### Three Action Cards

Horizontal row on desktop (3 columns). Stacked on mobile. 20px gap.

Each card: Athens Gray background (`#FAFBFC`), 4px border-radius, 24px padding. Equal height (flexbox stretch).

Card contents:
- **Icon** — 28px, post-type color. Centered above text.
- **Title** — Onest Medium, 17px, Rhino. Centered. 12px below icon.
- **Description** — Onest Regular, 14px, Rhino at 70%. Centered. 2–3 lines. 8px below title.
- **Link** — text-button style, Caribbean Green, 14px. Centered. 16px below description.

**Card 1 — Join the community**
- Icon: People icon, Caribbean Green
- Title: "Join Building Hylo"
- Description: "Our open community for everyone shaping Hylo's future. Product news, upcoming designs, feature discussions, and direct access to the team."
- Link: "Join on Hylo →"

**Card 2 — Attend a call**
- Icon: Calendar icon, Events red (`rgba(254, 72, 80, 1)`)
- Title: "Come to a community call"
- Description: "Monthly open calls to connect, ask questions, and share input with the team and wider community. No preparation needed."
- Link: "See upcoming calls →"

**Card 3 — Support financially**
- Icon: Heart icon, Medium Purple (`#9883E5`)
- Title: "Make a contribution"
- Description: "Hylo is funded by the people who use it. A small recurring contribution — any amount — helps keep the platform free for everyone."
- Link: "Contribute →"

### Spacing

- 40px top
- 16px between section header and cards
- 20px gap between cards
- 60px bottom

---

## Section 3 — For Community Organizers

### Purpose

This section speaks directly to people who are running or building a community on Hylo and want support doing it well. It covers the Community Organizers group, stewardship documentation, and paid support services. On the current page these are scattered across different sections. Grouping them makes the audience feel specifically served.

### Layout

Full-width. Athens Gray background (`#FAFBFC`). Content max-width 800px, centered.

**Section header:**

> For community organizers

Onest Bold, 24px, Rhino.

**Intro:**

> Running a community is real work — and doing it well online takes practice. Whether you're just getting started or you've been at it for years, here's how Hylo supports you.

Onest Regular, 16px, Rhino at 75%. Max-width 640px. 16px below header.

### Three Offerings (stacked vertically)

Each offering is a horizontal pair: left text block + right visual/link area. On mobile: stacked, text above link.

Separated by a thin divider: 1px solid Athens Gray Dark (`#E1E5EA`), full width, 32px vertical margin.

**Offering 1 — Community Organizers Group**

Left text:
- **Title:** "Hylo Community Organizers" — Onest Medium, 18px, Rhino
- **Body:** "A community of practice for group stewards to connect, share what's working, and learn from each other. Access resources, best practices, and direct conversation with Hylo's community team." — Onest Regular, 15px, Rhino at 70%

Right: "Join the group →" — text-button, Caribbean Green. Optionally: a small group avatar pulled from the actual Hylo group.

**Offering 2 — Documentation and Guides**

Left text:
- **Title:** "Guides and documentation" — Onest Medium, 18px, Rhino
- **Body:** "Our documentation covers everything from setting up your first group to advanced stewardship practices — agreements, moderation, engagement strategies, and how to help your community grow." — Onest Regular, 15px, Rhino at 70%

Right: "Read the guides →" — text-button, Caribbean Green. Links to docs.

**Offering 3 — Stewardship Support Services**

Left text:
- **Title:** "Hands-on stewardship support" — Onest Medium, 18px, Rhino
- **Body:** "Need more than documentation? The Hylo team offers direct support: onboarding help, governance design, facilitation guidance, and ongoing coaching for groups navigating complex coordination. We've spent years learning what makes online communities thrive." — Onest Regular, 15px, Rhino at 70%

Right: "Learn about support options →" — text-button, Caribbean Green.

### Spacing

- 60px top
- 16px between header and intro
- 32px between intro and first offering
- 32px between offerings (with divider)
- 60px bottom

---

## Section 4 — For Builders and Contributors

### Purpose

Developers, designers, researchers, and other contributors who want to work on the platform itself. The current page mentions "700+ open source contributors" which is a strong number — lean into it.

### Layout

Full-width. White background. Content max-width 800px, centered.

**Section header:**

> For builders

Onest Bold, 24px, Rhino.

**Intro:**

> Hylo is open source and always looking for contributors. Over 700 people have contributed to the codebase. Whether you write code, design interfaces, research communities, or write documentation, there's a way to plug in.

Onest Regular, 16px, Rhino at 75%. Max-width 640px. 16px below header.

### Contribution Paths

A 2×2 grid on desktop, stacked on mobile. 16px gap.

Each card: White background with 1px border Athens Gray Dark (`#E1E5EA`). 4px border-radius. 20px padding.

- **Title** — Onest Medium, 16px, Rhino
- **Description** — Onest Regular, 14px, Rhino at 70%. 2 lines. 8px below title.
- **Link** — text-button, Caribbean Green, 14px. 12px below description.

**Card 1 — Code**
- Title: "Contribute code"
- Description: "Browse the codebase, pick up issues, or submit pull requests. Hylo is built with React, React Native, Node.js, and GraphQL."
- Link: "View on GitHub →"

**Card 2 — Design**
- Title: "Design"
- Description: "Help improve the user experience. Review upcoming designs in the Building Hylo group and share feedback or propose improvements."
- Link: "Join Building Hylo →"

**Card 3 — Research and Writing**
- Title: "Research and writing"
- Description: "Help with user research, case studies, documentation, or content. Good writing makes the whole project more accessible."
- Link: "Get in touch →"

**Card 4 — Report Bugs**
- Title: "Report issues"
- Description: "Found a bug or something confusing? Report it through the in-app Feedback menu or file an issue on GitHub."
- Link: "File an issue →"

### Spacing

- 60px top
- 16px between header and intro
- 32px between intro and card grid
- 16px card gap
- 60px bottom

---

## Section 5 — Partner with Hylo

### Purpose

This is for organizations with budgets, needs, and a potential partnership relationship. The current page handles this well — the pitch is clear and the value proposition (co-design features that then benefit everyone) is genuinely compelling. The redesign tightens the language and makes the ask more specific.

### Layout

Full-width. Athens Gray background (`#FAFBFC`). Content: two-column on desktop (text left 55%, visual/CTA right 40%). Stacked on mobile. Max-width 900px, centered.

### Left Column — Text

**Section header:**

> Partner with us

Onest Bold, 24px, Rhino.

**Body:**

> Hylo's strongest features were built in partnership with organizations that needed them. Every partnership starts with a real coordination challenge — a group that needs tools their current platform can't provide. We co-design the solution together, and then make it available to every group on Hylo.
>
> Past partners include the Planetary Health Alliance, Prosocial World, Salmon Nation, and many others. Their work shaped Hylo's nested groups, cross-group coordination, map features, and governance tools.
>
> If your organization has a coordination challenge and the resources to address it together, we'd like to hear from you.

Onest Regular, 16px, Rhino at 80%. Line-height 1.6. Paragraph spacing: 16px.

### Right Column — CTA

A single centered card. White background, 4px border-radius, 24px padding, subtle shadow.

> **Let's build together.**
>
> Reach out to explore what a partnership could look like for your organization.
>
> [hello@hylo.com]

Title: Onest Medium, 18px, Rhino. Body: 14px, Rhino at 70%. Email: Caribbean Green, 15px, underline on hover.

Alternatively, if there's a partner inquiry form: "Start a conversation →" button, Caribbean Green primary.

### Spacing

- 60px top
- 32px gap between columns
- 60px bottom

---

## Section 6 — The Ecosystem

### Purpose

A brief mention of the Collaborative Technology Alliance and Hylo's broader ecosystem positioning. This doesn't need a full section on the current page — it's a niche audience — but deserves a clear entry point for people who care about interoperability and the prosocial tech commons.

### Layout

Full-width. White background. Content centered, max-width 720px. This is a compact section — not a full spread.

### Content

**Section header:**

> The wider ecosystem

Onest Bold, 20px, Rhino.

**Body:**

> Hylo is part of a growing ecosystem of tools and platforms building toward an interoperable, values-aligned technology commons. The Collaborative Technology Alliance, which Hylo co-stewards, brings together builders working on social technology in service to a thriving world. If you're building aligned tools and want to explore interoperability, collaboration, or shared standards, this is the place.

Onest Regular, 15px, Rhino at 75%. Line-height 1.6.

**Link:**

> "Join the Collaborative Technology Alliance →" — text-button, Caribbean Green, 14px.

### Spacing

- 40px top
- 12px between header and body
- 16px between body and link
- 40px bottom

---

## Section 7 — Closing

### Layout

Full-width. Warm cream background (`hsl(39 20% 88%)`). Content centered, max-width 600px. Padding: 60px top, 80px bottom.

### Content

**Headline:**

> Every contribution makes the commons stronger.

Onest Bold, 24px, Rhino. Centered.

**Body:**

> Hylo is sustained by the people who use it and care about it. Whether you join a call, file a bug, share your skills, or contribute a dollar a month — it all matters. Thank you for being here.

Onest Regular, 16px, Rhino at 70%. Centered. Line-height 1.6.

### Spacing

- 60px top
- 16px between headline and body
- 80px bottom before footer

---

## Page-Level Design Notes

### Color Flow

| Section | Background | Tone |
|---------|-----------|------|
| Hero | Warm cream | Welcome |
| Quick Actions | White | Immediate, clear |
| For Organizers | Athens Gray | Supportive, practical |
| For Builders | White | Technical, open |
| Partner | Athens Gray | Professional, collaborative |
| Ecosystem | White | Brief, contextual |
| Closing | Warm cream | Warm, grateful |

### Audience Routing

The page is implicitly organized by audience, top to bottom:

1. **Everyone** (Quick Actions — join, attend, contribute)
2. **Community organizers** (support, guides, coaching)
3. **Developers and contributors** (code, design, research)
4. **Organizations with budgets** (partnership)
5. **Ecosystem builders** (interoperability, CTA)

This means someone can scroll until they find their section and stop. The quick actions at the top catch everyone regardless of audience.

### What Changed from the Current Page

| Current | Redesign | Reason |
|---------|----------|--------|
| "A public good technology commons co-created by you" | "Get involved" | Direct. The visitor already clicked a link to get here — they know what they're looking for. |
| "There is a place for you at our table" | Removed (spirit preserved in closing) | Ceremonial language before concrete actions creates friction. The closing line carries the warmth after the page has delivered value. |
| "Everyone says they're tired of social media business as usual" | Removed | Defensive framing. The page should stand on what Hylo offers, not what others fail at. |
| Three Hylo groups listed flat | Building Hylo promoted to Quick Actions; Community Organizers moved to organizer section; CTA moved to ecosystem section | Each group serves a different audience and belongs in a different context. |
| Stewardship support mixed with documentation | Separated into docs (free) and support services (paid/premium) | Different audiences, different value propositions. |
| "Our partners are purpose-driven groups at the leading edge of creating a culture that works for all" | "Hylo's strongest features were built in partnership with organizations that needed them." | Concrete value prop over values-signaling. |
| Financial contribution section at the bottom | Promoted to Quick Actions (card 3) | Giving money is the simplest form of participation. It shouldn't be buried. |

### What Was Preserved

- All three Hylo community groups (Building Hylo, Community Organizers, CTA) — just reorganized by audience
- Community calls promotion
- Stewardship support services mention
- Partnership pitch and email contact
- Financial contribution path
- Open source contributor count (700+)
- The genuine warmth — just delivered through structure and closing rather than opening ceremony

### Mobile Considerations

- Quick action cards: stack vertically, full width
- Organizer offerings: stack vertically, link below text
- Builder cards: stack vertically
- Partner section: stack (text above CTA card)
- All text-button links should have generous tap targets (44px minimum height)

---

## Open Questions

1. **Community call embedding:** Can upcoming community calls be pulled dynamically from Hylo or a calendar? The current page says "Upcoming Calls" but doesn't show dates. A live calendar widget or at minimum the next 2–3 dates would make this much more actionable.
2. **Stewardship support pricing:** The current page links to "community stewardship offerings" without naming a price or tier structure. If this is a paid service, should pricing be visible on this page or behind the link?
3. **GitHub accessibility:** "Browse the codebase" assumes technical comfort. Should there be a more guided onboarding for first-time contributors? A "good first issues" label or contributor guide link would lower the barrier.
4. **Partner inquiry form vs. email:** The current page uses hello@hylo.com. A structured intake form ("tell us about your organization, your coordination challenge, your timeline") would make the partnership pitch more professional and the team's response more efficient.
5. **Contribution amount:** "Any amount" is friendly but vague. Should the page suggest a specific starting amount ($5/month? $1/month as mentioned in the strategic plan?) to anchor expectations?
6. **"700+ open source contributors":** Is this number current? If it's grown, update it. If it's stale, either verify or remove the specific number.
