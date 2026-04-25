# Bring Your Group to Hylo — Page Spec

**Version:** 1.0 — April 2026
**Companion to:** hylo-homepage-spec.md, hylo-about-page-spec.md
**Purpose:** A migration-oriented landing page that meets groups where they are — on another platform — and makes a clear, honest case for why Hylo is a better home. Each section addresses a specific platform, acknowledges what it does well, names what breaks, and shows what Hylo adds. The page ends with practical migration guidance.

---

## Design Philosophy for This Page

This is a decision page. People arrive here because they're evaluating tools. They may be frustrated with their current platform or simply curious. Either way, they want straight answers: what does Hylo do that my current tool doesn't, and what does the switch look like?

The tone should be confident without being combative. We're not trashing other platforms — we're naming structural differences that matter for groups trying to coordinate, not just communicate. The key message isn't "those platforms are bad." It's "those platforms weren't built for what you're trying to do."

**Voice:** Direct, specific, respectful. Name concrete features and structural differences. No vague superiority claims. No jargon. Every comparison should pass the test: would someone currently on that platform nod and say "yeah, that's true"?

---

## Section 1 — Hero

### Layout

Full-width. Warm cream background (`hsl(39 20% 88%)`). Content centered, max-width 720px. Generous vertical padding (100px top, 60px bottom desktop).

### Content

**Headline:**

> Bring your group to Hylo.

Onest Bold, 36px desktop / 24px mobile. Rhino (`#2C4059`).

**Subline:**

> Your community deserves a platform built for coordination, not just conversation. Here's what changes when you move to Hylo — and how to make the switch.

Onest Regular, 18px desktop / 16px mobile. Rhino at 75%. Max-width 600px. Line-height 1.5.

**CTA:**

- Primary: "Get started — it's free" — Caribbean Green button
- Secondary: "Jump to your platform" — text link, Caribbean Green, scrolls to platform nav

### Platform Quick Nav

A horizontal row of platform icons/names just below the subline. These act as anchor links that scroll to the relevant section below. Users can jump straight to the comparison that matters to them.

Horizontally centered. Each item: platform icon (24px, grayscale) + name (Onest Regular, 14px, Rhino at 60%). 24px gap between items. Hover: Caribbean Green text.

Platforms listed:
`Facebook Groups` · `WhatsApp & Signal` · `Slack & Discord` · `Mighty Networks` · `Circle` · `Notion & Docs`

On mobile: horizontal scroll with scroll-snap.

### Spacing

- 100px top
- 32px between headline and subline
- 24px between subline and CTA
- 32px between CTA and platform nav
- 60px bottom

---

## Section 2 — The Common Problem

### Purpose

Before diving into platform-by-platform comparisons, name the shared frustration. This bridges all the platforms into a single insight: none of them were designed for what purpose-driven groups actually need to do.

### Layout

Full-width. White background. Content centered, max-width 720px.

### Content

**Section headline:**

> Good tools for the wrong job.

Onest Bold, 28px. Rhino.

**Body:**

> Most groups end up scattered across three or four platforms: a chat app for quick messages, a social network for updates, a doc tool for notes, a spreadsheet for tracking, and email for everything else. It works — until it doesn't. Things get lost. Decisions happen in side channels. Nobody can see the whole picture. New members have no idea where to start.
>
> The problem isn't that these tools are bad. It's that none of them were built for groups that need to coordinate — to make decisions together, share resources, organize across subgroups, and grow their capacity over time. They were built for companies, for consumers, or for audiences. Not for communities.
>
> Hylo was built for communities. Here's what that means, depending on where you're coming from.

Onest Regular, 16px. Rhino at 80%. Line-height 1.7. Paragraph spacing: 20px.

### Spacing

- 60px top
- 16px between headline and body
- 60px bottom

---

## Section 3 — Platform Comparisons

### Layout Structure (repeated for each platform)

Each platform comparison is a full-width section. Backgrounds alternate between Athens Gray (`#FAFBFC`) and White for visual rhythm. Content max-width 900px, centered.

Each section contains:

1. **Platform header** — icon + name + one-line characterization
2. **Two-column layout** (desktop) / stacked (mobile):
   - Left: "What works / What breaks" — honest acknowledgment
   - Right: "What Hylo adds" — the structural differences
3. **Migration note** — a brief, practical line about what the transition looks like

---

### 3a — Facebook Groups

**Background:** Athens Gray

**Platform header:**

Facebook icon (grayscale, 32px) + "Facebook Groups" (Onest Bold, 22px, Rhino)

**One-liner below name:**

> The group platform everyone already has — and everyone knows the problems with.

Onest Regular, 15px, Rhino at 60%. Italic.

**Left column — "What you get"**

Column header: "What works on Facebook" — Onest Medium, 14px, uppercase, Rhino at 50%.

> Everyone is already there. The barrier to joining is zero. Facebook Groups have real reach — your posts can pull in new people, events get visibility, and notifications actually land. For casual community building, the network effect is hard to beat.

Onest Regular, 15px, Rhino at 75%. Line-height 1.6.

Column header: "What breaks" — Onest Medium, 14px, uppercase, Rhino at 50%. 24px below.

> Your group's attention is monetized. Facebook's algorithm decides what members see, and it optimizes for engagement, not for what matters to your group. You can't structure conversations, can't run proposals or decisions, can't connect with other groups, and can't control your data. Members are constantly pulled away by ads and algorithmic distractions. Important posts get buried. There's no governance, no mutual aid infrastructure, no map, no memory. You're building on rented land — and the landlord is selling your community's attention to advertisers.

**Right column — "What Hylo adds"**

Column header: "On Hylo" — Onest Medium, 14px, uppercase, Caribbean Green.

Feature list (not bullets — short paired statements):

> **No ads, no algorithm.** Every member sees every post. You decide what's important, not a feed algorithm.
>
> **Structured conversations.** Discussions, events, requests, offers, projects, proposals — each with its own purpose, not all jammed into one feed.
>
> **Governance tools.** Proposals, polls, roles, shared agreements. Your group can make decisions together, not just talk.
>
> **Cross-group coordination.** Connect with other groups, share posts across networks, see the bigger picture. Facebook Groups are islands. Hylo groups are a network.
>
> **Your data stays yours.** No tracking, no selling, no surveillance. Open source and community-governed.

Each feature: title in Onest Medium, 15px, Rhino. Description in Onest Regular, 14px, Rhino at 70%. 16px gap between features.

**Migration note:**

> **Making the switch:** Invite your members by email or shareable link. Most groups run both platforms in parallel for a few weeks while members transition. Your Facebook Group's content can't be exported automatically, but Hylo's fresh start is often a feature, not a bug — it's a chance to set clear agreements and build a healthier group culture from day one.

Onest Regular, 14px, Rhino at 60%. Top border: 1px solid Athens Gray Dark (`#E1E5EA`). 24px top padding.

### Spacing per platform section

- 60px top padding
- 12px between platform name and one-liner
- 32px between one-liner and columns
- 32px column gap
- 24px between column content and migration note
- 60px bottom padding

---

### 3b — WhatsApp & Signal

**Background:** White

**Platform header:**

WhatsApp icon (grayscale, 32px) + "WhatsApp & Signal" (Onest Bold, 22px, Rhino)

**One-liner:**

> Fast and intimate — until your group outgrows a chat thread.

**What works:**

> Messaging apps are unbeatable for small, tight groups. Messages land instantly. Everyone has the app. For a handful of people coordinating something simple, nothing is faster. Signal adds real privacy.

**What breaks:**

> Once a group passes about 20 active people, chat becomes overwhelming. Important messages get buried in minutes. There's no way to organize conversations by topic, find a decision that was made last month, or onboard a new member without them drowning in scroll. You can't run events, share structured requests and offers, create projects, or make group decisions. Everything is ephemeral — nothing persists, nothing is findable, nothing builds on itself. And when your group needs subgroups or working teams, you end up managing five separate chats with overlapping membership and no shared view.

**On Hylo:**

> **Chat when you want it, structure when you need it.** Hylo has real-time chat rooms alongside persistent, threaded discussions. Quick conversation and deep coordination live in the same place.
>
> **Everything is findable.** Posts are tagged by topic, searchable, and organized by type. Three months from now, you can find the decision your group made about the garden project.
>
> **Subgroups without chaos.** Create working groups, committees, or neighborhood pods — each with their own space, all connected to the parent group. No more managing a dozen separate chats.
>
> **Requests and offers.** Members can post what they need and what they can give. This is how mutual aid actually scales beyond "does anyone have a truck?"
>
> **A map.** See your members, events, and activity geographically. For place-based groups, this changes everything.

**Migration note:**

> **Making the switch:** WhatsApp and Signal groups can't be migrated, but that's actually fine — the value of a chat app is the conversation, not the archive. Invite members to Hylo and let the chat group wind down naturally. Many groups keep a WhatsApp thread for quick/casual messages while using Hylo for everything that needs to persist, be found later, or involve more than simple chat.

---

### 3c — Slack & Discord

**Background:** Athens Gray

**Platform header:**

Slack icon (grayscale, 32px) + "Slack & Discord" (Onest Bold, 22px, Rhino)

**One-liner:**

> Built for companies and gaming communities. Adapted for everything else — awkwardly.

**What works:**

> Slack and Discord are great at real-time team communication. Channels, threads, integrations, bots, search — for a company or a tight-knit team with a shared work context, they're powerful. Discord's voice channels and role systems add flexibility for more social communities.

**What breaks:**

> Both platforms assume a single organizational context — one company, one server. They have no concept of groups connecting to other groups, no place-based logic, no governance or decision-making tools, and no mutual aid infrastructure. Slack hides your message history behind a paywall on the free tier. Discord's complexity and gamer-centric culture alienates many community members. Neither platform supports events with RSVPs, structured proposals, project coordination, or community agreements. And neither is designed for groups that need to grow into self-governance — they assume someone is always in charge.

**On Hylo:**

> **Chat plus everything else.** Hylo has topic-based chat rooms like Slack, but they exist alongside discussions, events, projects, proposals, and requests and offers. You don't need a separate tool for each.
>
> **Cross-group coordination.** Slack workspaces and Discord servers are walled off from each other. Hylo groups can connect, share posts, and coordinate across organizational boundaries — which is how real-world coalitions actually work.
>
> **No message paywall.** Your full history is always available. Conversations, decisions, and context persist without a paid tier.
>
> **Built for communities, not companies.** Hylo's role system, agreements, and governance tools are designed for shared stewardship — not top-down org charts.
>
> **Place-based organizing.** Map view, geographic groups, watershed layers. If your work is rooted in a place, Hylo understands that. Slack and Discord don't.

**Migration note:**

> **Making the switch:** Slack and Discord histories can be exported (Slack: workspace export for paid plans; Discord: third-party tools). Many groups transition channel by channel, starting with the channels that need more structure — events, decisions, projects — while keeping Slack/Discord for pure chat until members are settled. Hylo's chat rooms will feel familiar; the rest will feel like an upgrade.

---

### 3d — Mighty Networks

**Background:** White

**Platform header:**

Mighty Networks icon (grayscale, 32px) + "Mighty Networks" (Onest Bold, 22px, Rhino)

**One-liner:**

> The closest thing to Hylo in the commercial space — but built for a fundamentally different purpose.

**What works:**

> Mighty Networks is a real community platform, not an adapted chat tool. It has groups, courses, events, member directories, and native mobile apps. If you're a creator building a paid community around your content, Mighty is well-designed for that. The mobile experience is strong.

**What breaks:**

> Mighty Networks is built for creators monetizing audiences, not for communities coordinating together. Every network is a silo — your group can't connect to, share with, or coordinate alongside other groups. There's no mutual aid infrastructure, no governance or decision-making tools, no map or place-based logic, no proposals, no resource allocation, and no commons orientation. Pricing scales steeply, with transaction fees on every plan. And the platform is proprietary — your community's data and relationships live inside Mighty's walled garden. If you leave, you leave with nothing.

**On Hylo:**

> **Groups that connect.** On Mighty, each network is an island. On Hylo, groups can nest inside each other, peer with neighboring groups, and share content across a network. A mutual aid group can coordinate with a food co-op can coordinate with a neighborhood association — all visible to each other without merging.
>
> **Mutual support tools.** Requests and offers, completion tracking, and AI-assisted matching. This is how trust gets built through action, not just conversation.
>
> **Governance and decisions.** Proposals, polls, roles, agreements, and participatory funding rounds. Hylo is built for groups that want to make decisions together, not just consume content together.
>
> **Place-based organizing.** Map views, geographic groups, watershed layers. If your community is rooted in a place, Hylo was designed for you. Mighty wasn't.
>
> **Open source, no lock-in.** Hylo's code is public. Your data is portable. There's no exit penalty because the platform is built as a commons, not a business extracting from your community.
>
> **Free to start, fair to grow.** Hylo's core platform is free. Paid features exist for groups that need them, with no per-transaction fees on your community's exchanges.

**Migration note:**

> **Making the switch:** Mighty Networks allows you to export member email lists from your network settings. Invite your members to Hylo, rebuild your group structure (Hylo's setup takes about 15 minutes), and re-upload any key resources or content. If you're running paid courses, Hylo's paid content and learning tracks offer similar functionality. The biggest gain: your group stops being an island and becomes part of a living network.

---

### 3e — Circle

**Background:** Athens Gray

**Platform header:**

Circle icon (grayscale, 32px) + "Circle" (Onest Bold, 22px, Rhino)

**One-liner:**

> A polished all-in-one for creators and course builders. Less suited for communities that aren't centered on a single brand.

**What works:**

> Circle is well-built and full-featured: spaces, courses, events, live streaming, automations, payments, custom branding, and a native mobile app. If you're a solo creator or small business building a branded membership community, Circle is one of the best options on the market. The design is clean and the product moves fast.

**What breaks:**

> Circle is built for creators monetizing an audience — one brand, one community, one revenue stream. Like Mighty, each community is a silo with no ability to connect to or coordinate with other communities. There's no mutual aid, no governance, no decision-making tools, no place-based logic, and no commons orientation. Pricing starts at $89/month and climbs, with transaction fees on every plan. The platform is closed-source — Circle controls the infrastructure, the roadmap, and ultimately the terms under which your community exists. If Circle's incentives shift, your community has no recourse.

**On Hylo:**

> **Multi-group coordination.** Circle communities are self-contained. Hylo groups can nest, peer, and coordinate — essential for coalitions, networks, and place-based organizing where multiple groups need to work together.
>
> **Community governance.** Proposals, agreements, roles, collective moderation, participatory budgeting. Hylo is for groups learning to govern themselves, not audiences organized around a creator.
>
> **Requests and offers.** Built-in mutual support tools that build trust through reciprocal exchange. Circle has no equivalent.
>
> **Place and map.** Geographic groups, map views, watershed layers. For any community rooted in a physical place, this is a structural difference.
>
> **Commons, not commerce.** Hylo is open source, non-profit, and community-governed. No transaction fees on community exchanges. No platform capturing your data. If Hylo ever stops serving your community, you can fork the code and leave. That's a structural guarantee Circle can't match.
>
> **Free core platform.** Circle starts at $89/month. Hylo's core is free — because we believe coordination infrastructure shouldn't be paywalled.

**Migration note:**

> **Making the switch:** Circle allows member CSV exports. Invite your community by email, set up your Hylo group (free, takes about 15 minutes), and migrate key content. If you're running paid courses, Hylo's learning tracks and paid content features cover most use cases. The transition is straightforward for members — Hylo's interface will feel familiar but the added depth of governance and cross-group tools will quickly become apparent.

---

### 3f — Notion, Google Docs & Spreadsheets

**Background:** White

**Platform header:**

Notion icon (grayscale, 32px) + "Notion & Google Workspace" (Onest Bold, 22px, Rhino)

**One-liner:**

> Excellent for documents. Not a living community.

**What works:**

> Notion is beautiful for documentation, project planning, and knowledge management. Google Workspace is the default for shared docs and spreadsheets. For internal team coordination where everyone already has context, these tools are powerful.

**What breaks:**

> Documents are not relationships. Notion and Google Docs have no social layer — no member profiles, no events, no conversations, no mutual aid, no governance, no sense of community. A shared doc can track decisions but can't facilitate them. A spreadsheet can list volunteers but can't match needs to offers or build trust through reciprocal exchange. Groups that try to coordinate entirely through docs and spreadsheets end up with organized information and disorganized people.

**On Hylo:**

> **A living community, not a filing cabinet.** Hylo is where your people actually interact — conversations, events, requests, offers, proposals, projects. The human coordination layer that docs can't provide.
>
> **Documents still have a home.** Hylo supports resource posts where you can share files, links, and reference materials. Use Hylo for coordination and keep Notion or Google Docs for the documents that need them — they complement each other.
>
> **Governance is participatory, not just documented.** Instead of writing governance rules in a doc and hoping people follow them, Hylo's proposals, agreements, and roles make governance a living practice embedded in how your group operates.

**Migration note:**

> **Making the switch:** You probably don't need to fully leave Notion or Google Docs — and shouldn't. Use Hylo as the community coordination layer and link to documents where needed. The shift is: your group's home moves from a collection of docs to a living social space, with docs attached where they're useful rather than being the entire infrastructure.

---

## Section 4 — What Only Hylo Does

### Purpose

After the platform-by-platform comparisons, this section consolidates the structural differences that cut across all of them. These are the things no combination of other tools provides.

### Layout

Full-width. Rhino background (`#2C4059`) — the dark section, consistent with the values section on the homepage. White text. Content max-width 800px, centered.

### Content

**Section headline:**

> What only Hylo enables.

Onest Bold, 28px. White. Centered.

**Subline:**

> These aren't feature advantages. They're structural capabilities that other platforms can't add with a plugin — because they require a fundamentally different architecture.

Onest Regular, 16px. White at 75%. Centered. 16px below headline.

### Capability Cards

3 cards across on desktop, stacked on mobile. Each card: semi-transparent white background (`rgba(255,255,255,0.08)`), 4px border-radius, 24px padding. 20px gap.

**Card 1 — Cross-Group Coordination**

> Groups on Hylo can nest inside each other, form peer relationships, and share posts across boundaries. A single request can reach three groups at once. A coalition can see itself. This is the thing that makes network-level coordination possible — and no other community platform has it.

Title: Onest Medium, 18px, White. Body: 14px, White at 80%.

**Card 2 — Place-Based Organizing**

> Hylo organizes people around the places they share — neighborhoods, cities, watersheds, bioregions. A geographic map shows members, events, and activity near you. Layered ecological data helps communities understand their landscape. This is how coordination connects to the land.

**Card 3 — Governance & Collective Decision-Making**

> Proposals, participatory budgets, collective moderation, community agreements, role-based stewardship. Hylo is built for groups that want to evolve from conversation into self-governance — and provides the tools to do it without concentrating power.

**Card 4 — Mutual Support Infrastructure**

> Requests and offers aren't just posts — they're the engine of trust. Every fulfilled exchange strengthens the community's fabric. AI matching helps scale what would otherwise depend entirely on someone knowing exactly who to ask.

**Card 5 — A Technology Commons**

> Hylo is open source, non-profit, and community-governed. No ads. No data sales. No enshittification. Your community's home is not subject to a company's quarterly earnings targets. The code is public. Your data is portable. The platform is accountable to its users, not its investors — because it doesn't have investors.

5 cards: 3-column grid on desktop (top row 3, bottom row 2 centered), stacked on mobile. Or if 5 feels like too many: collapse Mutual Support into the Governance card and run a clean 2×2.

### Spacing

- 80px top
- 32px between subline and cards
- 20px card gap
- 80px bottom

---

## Section 5 — Getting Started

### Purpose

Practical, brief, warm. Remove the last bit of friction. Show that the switch is simple and that help is available.

### Layout

Full-width. Warm cream background (`hsl(39 20% 88%)`). Content centered, max-width 720px.

### Content

**Section headline:**

> Getting started takes 15 minutes.

Onest Bold, 28px. Rhino. Centered.

### Three Steps

A simple vertical sequence (not cards — just numbered steps with generous spacing).

**1. Create your group.**

> Sign up, name your group, add a purpose statement and agreements. Choose your visibility and access settings. Done.

**2. Invite your people.**

> Share a link, send email invitations, or invite from your existing member list. Members can join from web or mobile.

**3. Start where you are.**

> Begin with conversations and events. Add requests and offers when you're ready. Grow into proposals, governance, and cross-group coordination at your own pace. Hylo meets your group where you are.

Step number: Onest Bold, 48px, Caribbean Green at 30%. Title: Onest Medium, 18px, Rhino. Body: Onest Regular, 15px, Rhino at 70%. 40px between steps.

### Support line

> Need help with your migration? We support groups making the switch — from setup to onboarding your members. [Get in touch →]

Onest Regular, 14px, Rhino at 60%. Centered. 40px below last step. Link in Caribbean Green.

### CTA

Primary button, centered: "Create your group — free" — Caribbean Green, 40px height.

24px below support line.

### Spacing

- 80px top
- 40px between headline and first step
- 40px between steps
- 40px between last step and support line
- 80px bottom

---

## Page-Level Design Notes

### Color Flow

| Section | Background | Tone |
|---------|-----------|------|
| Hero | Warm cream | Welcoming |
| Common Problem | White | Clear, honest |
| Facebook Groups | Athens Gray | Comparison |
| WhatsApp & Signal | White | Comparison |
| Slack & Discord | Athens Gray | Comparison |
| Mighty Networks | White | Comparison |
| Circle | Athens Gray | Comparison |
| Notion & Docs | White | Comparison |
| What Only Hylo Does | Rhino dark | Confident, distinctive |
| Getting Started | Warm cream | Warm, practical |

### Platform Icons

Source grayscale versions of each platform's logo mark. Use at 32px in section headers, 24px in the quick nav. Consistent opacity and weight. Do not use full-color brand logos — grayscale keeps the visual focus on the content and avoids implying endorsement or partnership.

If logo licensing is a concern for any platform, use a generic icon (chat bubble, document, grid) with the platform name in text. The name is what matters, not the icon.

### Comparison Column Styling

Left column ("What works / What breaks"):
- Column width: 45% of content area
- Headers: Onest Medium, 14px, uppercase, 0.6px tracking
- "What works" header: Rhino at 50%
- "What breaks" header: Rhino at 50%
- Body: Onest Regular, 15px, Rhino at 75%

Right column ("On Hylo"):
- Column width: 50% of content area (slightly wider — the Hylo side gets more room)
- Header: Onest Medium, 14px, uppercase, Caribbean Green
- Feature titles: Onest Medium, 15px, Rhino
- Feature descriptions: Onest Regular, 14px, Rhino at 70%
- Left accent line: 3px solid Caribbean Green at 30%, running the full height of the column

Migration note:
- Full width (spans both columns)
- Top border: 1px solid Athens Gray Dark
- 24px top padding
- Text: Onest Regular, 14px, Rhino at 60%
- "Making the switch:" label in Onest Medium

### Responsive

- Desktop (1024px+): two-column comparisons, 3-column capability cards
- Tablet (768–1023px): two-column comparisons (narrower), 2-column capability cards
- Mobile (< 768px): single column stack for everything. Platform quick nav becomes horizontal scroll. Comparison sections flow: "What works" → "What breaks" → "On Hylo" → migration note.

### Copy Voice (specific to this page)

**Do:**
- Acknowledge what other platforms do well. Don't pretend they're useless — the reader uses them and knows better.
- Name structural differences, not feature checklists. "No concept of groups connecting to other groups" is stronger than "no cross-posting feature."
- Be specific about what Hylo offers. "Proposals with quorum settings, anonymous voting, and due dates" is more credible than "governance tools."
- Use the migration notes to be practical and honest about friction. Don't pretend switching is effortless.

**Don't:**
- Trash other platforms. The reader chose them for reasons. Respect that while showing them something better.
- Promise things that aren't built yet. Every feature mentioned in the "On Hylo" columns must be live. No 🌱 items on this page.
- Use Hylo-internal vocabulary (prosocial, holonic, cosmolocal, biomimetic) — this is a migration page, not a philosophy seminar.
- Oversell the switching ease. If something is genuinely hard about migrating (e.g., no Facebook export), say so and frame why a fresh start has value.

---

## Open Questions

1. **Platform selection:** Are these six the right set? Should Nextdoor be included (relevant for place-based groups)? Luma (for events-heavy groups)? Skool (growing fast in the creator economy)?
2. **Feature accuracy check:** The "On Hylo" sections should only include features that are live today, not roadmap items. Team should audit each claim against current production.
3. **Migration support:** The page promises "we support groups making the switch." Is there a defined process for this? A contact form? A human who responds? If not, either build it or soften the claim to "we're here to help — reach out."
4. **Pricing comparison:** The spec mentions Circle's $89/month and Mighty's $49–$360/month. Should Hylo's pricing (free core, paid Pro) be stated explicitly on this page, or left for a dedicated pricing page?
5. **Testimonials:** Are there groups that migrated *from* a specific platform to Hylo and can speak to the experience? Even one per platform section would be powerful. Prioritize sourcing these.
6. **Legal review:** Using other platform names and making comparison claims is standard practice but worth a brief legal check to ensure nothing is stated as fact that's actually opinion — particularly around data practices and pricing, which change.
