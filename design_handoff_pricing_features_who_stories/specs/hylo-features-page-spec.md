# Hylo Features Page Spec

**Version:** 1.0 — April 2026
**Companion to:** hylo-homepage-spec.md, hylo-products-pricing-spec.md
**Purpose:** A comprehensive, browsable reference of everything Hylo does today. This page serves people who've already decided to look closer and want the full picture — group stewards evaluating whether Hylo fits their needs, developers assessing the platform, or existing users discovering capabilities they didn't know existed.

---

## Design Philosophy

This is a reference page, not a sales page. The homepage tells the story. The pricing page explains the model. This page answers the question: "OK, but what does it actually do?"

The temptation is to make this a marketing feature grid with vague benefit statements. Resist that. Every feature listed here should be specific enough that someone can picture using it. "Governance tools" is meaningless. "Proposals with voting options, quorum settings, and outcome tracking" is useful.

Organization is by what people *do*, not by software architecture. Someone looking for "how do I run a vote" shouldn't need to know whether that's filed under "governance" or "post types" or "stewardship toolkit."

---

## Section 1 — Hero

### Layout

Full-width. Warm cream background (`hsl(39 20% 88%)`). Content centered, max-width 720px. Padding: 80px top, 48px bottom.

### Content

**Page title:**

> Everything Hylo can do.

Onest Bold, 36px, Rhino.

**Lead:**

> A full reference of the coordination tools available to every group on Hylo. All of these features are included in the free platform unless marked otherwise.

Onest Regular, 16px, Rhino at 70%. Max-width 560px. 16px below title.

### Category Quick Nav

A horizontal wrap of category anchor links. Each: Onest Medium, 13px, Rhino at 55%. Separated by middot (·). Hover: Caribbean Green. Clicking scrolls to the relevant section.

`Groups` · `Communication` · `Events` · `Mutual Support` · `Projects` · `Governance` · `Map & Place` · `Funding Rounds` · `Learning Tracks` · `Profiles & Directory` · `Customization` · `Moderation` · `Mobile` · `Coming Soon`

On mobile: horizontal scroll with scroll-snap.

### Spacing

- 80px top
- 16px between title and lead
- 32px between lead and category nav
- 48px bottom

---

## Section 2 — Feature Categories

### Layout Pattern (repeated for each category)

Each category is a full-width section. Backgrounds alternate (White / Athens Gray `#FAFBFC`). Content max-width 900px, centered.

Each category contains:
- **Category header** — Onest Bold, 24px, Rhino. Left-aligned.
- **Category intro** — Onest Regular, 15px, Rhino at 65%. 1–2 sentences. 8px below header.
- **Feature blocks** — arranged in a responsive grid (2 columns desktop, 1 column mobile). 16px gap.

Each feature block:
- **Feature name** — Onest Medium, 16px, Rhino.
- **Description** — Onest Regular, 14px, Rhino at 70%. 2–4 lines. 6px below name.
- **Status indicator** (only for non-live features):
  - "Coming soon" — small pill, 10px uppercase, Caribbean Green background, white text
  - "Pro" — small pill, 10px uppercase, Caribbean Green outline, Caribbean Green text

No icons per feature (too many features — icons would become noise). The category header can have an optional icon (24px, post-type color).

---

### Category 1 — Groups & Community Structure

Background: White.
Optional icon: People icon, Caribbean Green.

**Intro:** Hylo's group system is the structural foundation of everything else. Groups can nest inside each other, peer with other groups, and share content across boundaries.

**Features:**

**Create and manage groups**
Set up a group with a name, purpose statement, description, location, and banner image. Control visibility (public, protected, or private) and access (open, by request, or invite-only).

**Nested groups (subgroups)**
Create groups within groups to any depth. A bioregional hub can contain neighborhood groups. A network can contain working committees. Each subgroup has its own space, agreements, and stewards while remaining connected to the parent.

**Peer-to-peer group relationships**
Connect groups as peers — two independent groups that choose to share a relationship. Peer groups can see each other's public content and members, enabling coalition-building without hierarchy.

**Cross-group posting**
Post a single discussion, event, request, or offer to multiple groups at once. The post lives in all selected groups simultaneously — no duplication, no drift. This is how coordination crosses organizational boundaries.

**Group Explorer**
A public directory where anyone can browse and discover groups on Hylo. Groups can apply to be listed. Filter by location, topic, or purpose.

**Join questions**
When someone requests to join a group, stewards can ask custom questions to understand who's joining and why. Answers are visible to stewards during the approval process.

**Group types and presets**
Groups can be configured for different purposes: mutual aid networks, learning communities, project teams, bioregional hubs, civic groups. Same underlying structure, different default views and suggested features.

---

### Category 2 — Communication

Background: Athens Gray.
Optional icon: Chat bubble, Discussions blue (`rgba(0, 163, 227, 1)`).

**Intro:** Hylo supports three modes of communication — persistent posts for depth, real-time chat for speed, and direct messages for privacy — all within a unified system.

**Posts (Discussions)**
Threaded, persistent posts with rich text, media, file attachments, geographic location, and topic tags. Posts support reactions and nested comment threads. Discussions are the backbone of deeper coordination — they don't disappear after a day of scrolling.

**Chat rooms**
Real-time, topic-based chat within any group. Chat rooms sit alongside the post stream — fast conversation and structured discussion coexist without competing. Groups can create multiple rooms for different topics or working teams.

**Direct messages**
Private 1:1 or small-group conversations. Invite-only, end-to-end within Hylo.

**Cross-group posting**
A single post can belong to multiple groups or chat rooms simultaneously, creating living nodes of coordination across the network.

**Rich media**
Posts and comments support images, files, links with previews, embedded video, and location data. Drag and drop to attach.

**Topic tags**
Tag posts with topics to organize content thematically. Topics work across groups — follow a topic to see related posts everywhere you're a member.

**Mentions**
@mention members or groups in posts and comments. Mentioned people receive notifications. The inbox collects all posts where you've been mentioned.

**Reactions**
React to posts and comments with emoji. Lightweight feedback without requiring a full reply.

**Multiple view types**
View shared content as a stream, list, grid, calendar, or map. Groups can customize which views appear in their navigation and which is the default.

**Search**
Full-text search across posts, comments, members, and topics within your groups.

---

### Category 3 — Events & Gatherings

Background: White.
Optional icon: Calendar, Events red (`rgba(254, 72, 80, 1)`).

**Intro:** In-person and virtual events with the tools groups actually need — RSVPs, calendar integration, and geographic location.

**Create events**
Events are a post type with start/end times, location (physical or virtual), timezone support, and description. They appear in the stream and on the calendar view.

**RSVPs**
Members can indicate whether they're attending. Stewards can see the guest list and count.

**Calendar view**
See all upcoming events for a group displayed on a calendar. Filter by group or view across all your groups.

**Calendar integration**
Export events to external calendars (Google Calendar, iCal, etc.) via calendar invite emails.

**Location and map**
Events can include a physical location that appears on the group's map. Helpful for in-person gatherings where people need to find the place.

**Live indicator**
Events currently in progress are marked as live in the stream and calendar.

---

### Category 4 — Mutual Support

Background: Athens Gray.
Optional icon: Exchange arrows, Teal (`rgba(0, 199, 157, 1)`).

**Intro:** Requests and offers are the trust-building engine of Hylo. Every fulfilled exchange is a deposit in the community's social fabric.

**Requests**
Post what you need — skills, tools, time, knowledge, labor, rides, advice. Set scope, timing, and location. Visible to your group and, if cross-posted, to connected groups.

**Offers**
Share what you can give. Same structure as requests — searchable, taggable, locatable.

**Completion tracking**
Mark requests and offers as fulfilled. Select the people who helped complete them. This creates a visible record of mutual support within the community.

**Geographic relevance**
Requests and offers include location data. Members can browse what's needed or available near them.

**Topic categorization**
Tag requests and offers by topic — tools, food, transportation, skills, childcare — so members can browse by category.

**Expiration and reminders**
Requests and offers can have expiration dates. Notifications remind creators to update or close out posts that are no longer active.

**AI-assisted matching** `Coming soon`
The AI matchmaker will surface relevant requests and offers to members whose skills, interests, location, and history suggest they can help — reducing the gap between need and response.

---

### Category 5 — Projects & Coordination

Background: White.
Optional icon: Clipboard, Projects orange (`rgba(252, 128, 0, 1)`).

**Intro:** For work that goes beyond a single post — ongoing efforts with tasks, contributors, and timelines.

**Projects**
Create a project post with a description, members, and linked content. Projects provide a persistent home for coordinated work within a group.

**Tasks and actions** `Coming soon`
Assign tasks with statuses and due dates within projects. Contribution visibility over time — see who's doing what. Kanban and other visualizations planned.

**Linked content**
Connect posts, events, requests, and offers to a project. Everything related to an effort lives in one place.

**Project membership**
Members can join projects to indicate their involvement. Project contributors are visible to the group.

---

### Category 6 — Governance & Decision-Making

Background: Athens Gray.
Optional icon: Vote/check, Proposals purple (`rgba(102, 75, 165, 1)`).

**Intro:** Hylo's governance tools support groups at every stage — from simple polls to structured decision-making processes with quorum, consent-based voting, and formal outcome tracking.

**Proposals**
Create a proposal with a question, description, and voting options. Proposals progress through discussion, voting, and completed phases with visible outcomes.

**Flexible voting options**
Configure voting with custom options or use presets: Agree/Disagree, Consent/Block/Abstain, Sense Check, or Gradients of Agreement (from whole-hearted endorsement to veto). Choose what fits your group's decision-making culture.

**Quorum settings**
Set a minimum participation threshold for a vote to be valid. Adjustable percentage. If quorum isn't reached, stewards are notified.

**Voting timeline**
Set start and end times for voting periods. Proposals move through phases automatically, or stewards can manage timing manually.

**Outcome tracking**
Completed proposals display vote tallies, quorum status, and an outcome summary field where the author can document what was decided and what happens next.

**Governance view**
A dedicated view showing active and past proposals. Active proposals at the top, completed proposals (now "decisions") below with their outcomes. Also displays the group's purpose, values, and agreements.

**Agreements**
Groups can establish written agreements — commitments, norms, decision-making protocols, codes of conduct. Agreements are displayed on the group's About page and presented to new members for consent before joining.

**Agreement consent tracking**
Track whether members have consented to current agreements. If agreements change, members are prompted to review and re-consent. Backend tracking of each person's consent to each agreement.

**Roles and responsibilities**
Assign roles to members with specific platform responsibilities. Three common roles come with every group: Coordinator (administration), Moderator (content management), and Host (welcoming and inviting). Each role carries defined powers.

**Custom roles**
Create roles specific to your group — equipment manager, garden coordinator, childcare lead, outreach coordinator. Custom roles can carry platform responsibilities or simply denote real-world functions. Roles display as badges on member profiles.

**Custom responsibilities**
Beyond platform responsibilities, create custom ones that represent work members do outside of Hylo. Assign responsibilities to roles so everyone can see who does what.

**Collective moderation**
Any member can flag a post as violating group agreements. Flagged content is blurred for other members. Others can agree or disagree with the flag. Moderators review and make final decisions. See the Moderation category below.

---

### Category 7 — Map & Place

Background: White.
Optional icon: Map pin, Caribbean Green.

**Intro:** Hylo organizes people around the places they share. The map is not a feature bolted on — it's a fundamental part of how the platform thinks about community.

**Geographic map**
An interactive map showing members, groups, events, requests, offers, and other activity spatially. See what's happening near you, discover nearby groups, and understand the geographic fabric of your community.

**Group locations**
Groups have geographic locations that appear on the map. A neighborhood group, a regional network, and a global alliance all have different spatial footprints.

**Member locations**
Members can share their location (at whatever precision they choose) to be discoverable on the map. Location obfuscation protects privacy while still enabling proximity-based discovery.

**Watershed and ecological layers**
Map layers showing watersheds, catchment basins, and other ecological boundaries. These help communities understand and organize around their landscape rather than arbitrary political boundaries.

**Location on posts**
Any post — discussion, event, request, offer — can include a location. Content appears on the map where it's relevant.

**Embed via iframe**
Groups can embed a Hylo map view on their own website using a custom iframe code block — bringing the living map to wherever their community already gathers online.

---

### Category 8 — Funding Rounds

Background: Athens Gray.
Optional icon: Resource/funding icon, Gold (`rgba(255, 212, 3, 1)`).

**Intro:** Participatory funding rounds let groups pool resources and collectively decide where to direct them. This is governance made real — communities allocating actual money through democratic process.

**Create a funding round**
Set up a round with a total amount, timeline, submission criteria, and voting method. Guide your community through each phase from submission to allocation.

**Submission phase**
Members submit proposals for funding. Stewards define criteria that submissions need to address. Submissions can be visible during the submission period or hidden until voting begins.

**Discussion phase**
Community reviews and discusses submitted proposals before voting. Comments, questions, and feedback help the group make informed decisions.

**Voting phase**
Members vote to allocate the pool across proposals. Results determine distribution. Notifications guide members through each stage of the process.

**Outcome and allocation**
Results are displayed transparently. The group can see exactly how funds were allocated and why. Completed rounds become part of the group's decision history.

*Note: Float, the Funding Lab for Agroecological Technology, used funding rounds on Hylo to distribute over $700,000 USD in 2025.*

---

### Category 9 — Learning Tracks

Background: White.
Optional icon: Path/steps icon, Picton Blue (`#40A1DD`).

**Intro:** Tracks are structured sequences of content and actions that guide members through a learning journey, onboarding process, or program curriculum.

**Create tracks**
Build a track with ordered steps — each step can include content, media, discussion prompts, and actions for the member to complete.

**Track actions**
Individual tasks or checkpoints within a track that members complete as they progress. Completion is tracked per member.

**Track membership and progress**
See who has started a track, where they are in it, and who has completed it. Stewards get visibility into participation without micromanaging.

**Badges on completion**
Members who complete a track can receive a badge — visible on their profile. Badges can also unlock specific roles, permissions, or access to certain content or chat rooms within the group.

**Track-gated access**
Require completion of a track before accessing certain areas of a group. Useful for onboarding sequences where you want members to have context before participating fully.

**Paid tracks** `Pro`
Tracks can be gated behind a payment. Stripe integration handles transactions. Stewards manage subscriptions and access.

---

### Category 10 — Profiles & Directory

Background: Athens Gray.

**Intro:** Member profiles are how people find each other and understand what each person brings to the community.

**Member profiles**
Each member has a profile with name, photo, bio, location, skills, interests, and affiliated groups. Profiles are visible to co-members and (for public groups) to anyone browsing the platform.

**Skills and interests**
Members list their skills and areas of interest. These are used for discovery, matching, and helping stewards understand what capacity exists within the group.

**Member directory**
Browse all members of a group with search, filtering, and sorting. See roles, badges, and location at a glance.

**Group affiliations**
A member's profile shows which groups they belong to (respecting visibility settings — private group memberships aren't exposed to non-members).

**Role and badge display**
Roles and badges earned through tracks or assigned by stewards are displayed on profiles and next to member names throughout the platform. Hover/tap to see the role description and responsibilities.

---

### Category 11 — Customization

Background: White.

**Intro:** Groups and individuals can customize their Hylo experience — from navigation layout to visual themes.

**Custom navigation**
Group stewards can choose which views appear in the group's navigation menu and in what order. Show only what's relevant to your community — hide views you don't use.

**Custom views**
Create custom filtered views of content — by topic, post type, or other criteria. Pin them to the group's navigation for quick access.

**Nine visual themes**
Choose from nine visual themes (Default, Stone, Forest, Ocean, Desert, Snow, Jungle, Blossom, Fall), each with light and dark variants. Themes apply to the entire interface.

**Group branding**
Each group has its own avatar, banner image, purpose statement, and description. Groups look and feel distinct even within a shared platform.

**Notification customization**
Members control their own notification preferences: email, push, in-app, and digest frequency. Per-group settings let you stay on top of active groups without being overwhelmed by quieter ones.

**Stream and feed controls**
Members can customize how content is ranked and aggregated in their stream. No algorithmic manipulation — you choose what's surfaced.

---

### Category 12 — Moderation & Safety

Background: Athens Gray.

**Intro:** Community safety without centralized surveillance. Hylo's moderation tools distribute responsibility to the people closest to the community while providing clear escalation paths.

**Community flagging**
Any member can flag a post that they believe violates group agreements. They select which specific agreement is being violated. Flagged content is blurred for other members while under review.

**Collective review**
Other members can agree or disagree with a flag, creating community input on moderation decisions before stewards act.

**Steward moderation powers**
Moderators can remove content, remove members, and manage topics. Actions are logged and can be communicated to the community.

**Group agreements as moderation anchor**
Moderation is tied to the group's stated agreements — not arbitrary judgment. When content is flagged, the specific agreement at issue is identified. This grounds moderation in shared commitments rather than individual discretion.

**Platform-level enforcement**
Hylo's platform stewards monitor the public commons and handle cross-group or platform-level violations. The code of conduct applies everywhere. See the [Agreements page] for the full code of conduct and graduated enforcement process.

---

### Category 13 — Mobile

Background: White.

**Intro:** Hylo is available on iOS and Android with full-featured mobile apps.

**Native iOS and Android apps**
Download from the App Store or Google Play. The mobile experience covers the core platform — groups, posts, chat, events, map, profiles, notifications.

**Push notifications**
Real-time push notifications for mentions, replies, new posts, and events. Configurable per group and per notification type.

**Mobile map**
The full geographic map on mobile — browse nearby activity, find groups, and see your community spatially.

**Responsive web**
Hylo's web interface is fully responsive. Access from any browser on any device.

---

### Category 14 — Platform & Infrastructure

Background: Athens Gray.

**Intro:** The structural commitments that make Hylo different from every other community platform.

**Open source**
Hylo's entire codebase is public under the Apache 2.0 license. Inspect it, contribute to it, fork it. [View on GitHub →]

**No ads, no data sales**
Hylo does not display advertising and does not sell user data. Ever. Revenue comes from paid products and community contributions.

**No algorithmic manipulation**
There is no black-box algorithm deciding what you see. Members control their own feed ranking and notification preferences.

**Data portability**
Groups can export their data. If you leave Hylo, you leave with your information. No lock-in.

**Community-governed**
Hylo is a fiscally sponsored 501(c)(3) non-profit moving toward participatory governance. The platform's direction is shaped by the communities that use it through participatory design, community calls, and the Building Hylo group.

**Privacy controls**
Groups control their own visibility and access settings. Members control their own location precision and profile visibility. Hylo never shares personal data without informed consent.

**Internationalization**
Hylo supports multiple languages and is working toward broader accessibility across ability, culture, and bandwidth.

---

## Section 3 — Coming Soon

### Purpose

A brief, honest look at what's actively being built. Only items that are committed and in development — not a wishlist.

### Layout

Full-width. White background. Content max-width 800px, centered.

**Section header:**

> What's coming next

Onest Bold, 24px, Rhino.

**Intro:**

> Hylo is actively developed by a small team alongside our open-source community. Here's what's in progress. Timelines are estimates, not promises — we move at the speed of trust.

Onest Regular, 15px, Rhino at 65%. 12px below header.

### Roadmap Items

Each item: a simple block with name, description, and timeline estimate.

- **Name** — Onest Medium, 16px, Rhino.
- **Description** — Onest Regular, 14px, Rhino at 70%. 2 lines. 6px below name.
- **Timeline** — Onest Regular, 12px, Caribbean Green. Inline after description or below.

Separated by 24px. No cards or heavy styling — this should read like an honest update, not a marketing roadmap.

**AI-Assisted Matching**
Intelligent matching of requests, offers, and potential collaborators based on skills, interests, location, and group history. Opt-in per group.

**Hylo Assistant**
A group-level AI assistant with full context across your group's history, documents, and decisions. Helps stewards with community health, growth guidance, and moderation awareness. $20/month per group.

**Project Management Upgrades**
Tasks with assignments, statuses, and due dates within projects. Kanban visualization. Contribution tracking over time.

**Recurring Events**
Events that repeat on a schedule — weekly meetings, monthly gatherings. Appear automatically on the calendar and in digests.

**Audio and Video Integration**
Open-source conferencing built into Hylo. Voice notes for posts and comments. No external platform required for group calls.

**Hylo Pro**
Expanded storage, video streaming, priority support, and API access for groups that need more capacity. $60/month per group. Launching Summer 2026.

**Hylo Whitelabel**
A dedicated Hylo deployment under your organization's brand, domain, and visual identity. $100/month. Launching Summer 2026.

**Ecosystem Interoperability**
Federation and data exchange with aligned platforms using AT Protocol and other open standards. Requests and offers visible across platforms. Shared identity and portable communities.

**Member-Led Groups**
A governance model where stewardship roles are earned through cumulative trust rather than granted to whoever created the group. Time-bound, scoped leadership designed for shared stewardship.

**Hylo Local**
Distributed, peer-to-peer infrastructure built on Holochain for communities that need coordination tools resistant to institutional surveillance.

### Spacing

- 60px top
- 12px between header and intro
- 32px between intro and first item
- 24px between items
- 60px bottom

---

## Section 4 — Closing CTA

### Layout

Full-width. Warm cream background (`hsl(39 20% 88%)`). Content centered, max-width 600px. Padding: 60px top, 80px bottom.

### Content

**Headline:**

> Ready to try it?

Onest Bold, 24px, Rhino. Centered.

**Body:**

> All of these features are available right now, free, for every group. Create your group and start coordinating.

Onest Regular, 16px, Rhino at 70%. Centered. 16px below headline.

**CTA:**

Primary button: "Create your group — free" — Caribbean Green, 40px height. Centered. 24px below body.

**Secondary link:**

"Compare plans →" — text-button, Caribbean Green, 14px. Links to products/pricing page. 12px below primary button.

---

## Page-Level Design Notes

### Color Flow

| Section | Background |
|---------|-----------|
| Hero | Warm cream |
| Groups | White |
| Communication | Athens Gray |
| Events | White |
| Mutual Support | Athens Gray |
| Projects | White |
| Governance | Athens Gray |
| Map & Place | White |
| Funding Rounds | Athens Gray |
| Learning Tracks | White |
| Profiles | Athens Gray |
| Customization | White |
| Moderation | Athens Gray |
| Mobile | White |
| Platform | Athens Gray |
| Coming Soon | White |
| CTA | Warm cream |

### Visual Treatment

This page is text-heavy by nature. A few things to keep it scannable:

- **Category headers are the primary navigation.** They should be visually strong — the quick nav at the top links to them, and someone scrolling should always know which category they're in.
- **Feature names are scannable without reading descriptions.** Someone should be able to skim the bold feature names and get a sense of what's available.
- **Descriptions are optional reading.** Short enough to skim, specific enough to be useful if read.
- **No screenshots per feature.** This many screenshots would be overwhelming. The homepage and product pages carry the visual load. This page is a reference document.
- **"Pro" and "Coming soon" badges are small and subtle.** They mark exceptions to the default (free and live). The visual weight should be on the features that are available now — the vast majority.

### Mobile

- Category quick nav: horizontal scroll
- Feature grid: single column
- Feature blocks: full width, stacked
- Category headers: sticky on scroll (so the user always knows which section they're in)

### Relationship to Other Pages

- **Homepage** tells the story (7 sections, narrative arc)
- **Products/Pricing** explains the model (free, Pro, Assistant, Whitelabel)
- **This page** is the full reference (every feature, organized by action)
- **Bring Your Group** is the migration argument (comparative, platform-by-platform)

No content should be duplicated word-for-word across these pages. The same feature can appear in multiple contexts with different framing — the homepage might mention "proposals and decisions" in one line; this page describes proposals with voting options, quorum settings, and outcome tracking in a full block.

### Maintenance

This page needs to be updated when features ship. Assign ownership. A stale features page is worse than no features page — it signals abandonment. The "Coming Soon" section in particular should be reviewed quarterly and items moved to the main feature list as they launch.

---

## Open Questions

1. **Feature audit:** Every feature listed here needs to be verified against current production. The product spec and meeting notes describe both shipped and planned features — some items in this spec may be based on product spec descriptions of features that are designed but not yet live. The team should do a line-by-line audit before publishing.
2. **Funding rounds detail level:** The funding rounds section describes the feature as it was designed. Confirm that all phases (submission, discussion, voting, outcome) are fully implemented and working as described.
3. **Track-gated access:** The product meeting notes discuss this as a desired feature. Confirm it's shipped before listing.
4. **Paid tracks:** Listed as a Pro feature. Confirm this is live and working with Stripe integration.
5. **Coming Soon accuracy:** The roadmap items are drawn from the whitepaper, strategic plan, and meeting notes. Some (like Hylo Local / Holochain) may be longer-term vision rather than active development. Only list items that are genuinely in progress or committed for the near term.
6. **Feature count:** There are roughly 70+ features described here. Is that the right level of granularity? Could some be consolidated without losing useful information? The test: would a prospective group steward find each listed item independently useful to know about?
7. **Screenshots or product visuals:** The spec currently recommends no screenshots on this page to avoid visual overload. But a single "product overview" screenshot or short video at the top (before the feature list) could help ground the reference in something visual. Consider a short embedded demo video (60–90 seconds) in the hero section.
8. **Search/filter:** If the page gets long enough, consider adding a simple client-side search or filter bar in the hero section — type "proposals" and the page scrolls to or highlights the relevant feature blocks. Progressive enhancement, not required for v1.
