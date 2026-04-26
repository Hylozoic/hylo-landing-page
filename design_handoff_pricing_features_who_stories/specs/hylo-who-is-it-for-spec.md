# Who Is Hylo For — Page Spec

**Version:** 1.0 — April 2026
**Companion to:** hylo-homepage-spec.md, hylo-features-page-spec.md
**Purpose:** A page that answers "is this for me?" by showing the full range of groups that use or could use Hylo — organized by what they're trying to do, not by what movement they belong to. This is the page that deliberately breaks the cultural filter. If someone lands here from a Google search for "HOA management platform" or "civic engagement tool," they should be able to see themselves.

---

## The Problem This Page Solves

Hylo's current audience reads as a specific cultural register: West Coast, regenerative, bioregional, spiritually eclectic. The people who built the platform and the groups who use it most visibly share a worldview. That's genuine, not performative — but it creates an invisible filter. A volunteer fire department coordinator, an HOA board member, or a local chamber of commerce director who could benefit enormously from Hylo's tools will bounce off the front page because nothing speaks their language.

This page doesn't pretend Hylo is something it isn't. It shows that what Hylo does — group coordination, mutual support, place-based organizing, collective decision-making — is needed by far more groups than those who currently know about it. The use cases are organized by the *type of coordination challenge*, not by the identity of the group. A mutual aid network and a tool lending library have the same coordination problem. A bioregional hub and a city council's civic engagement portal need the same infrastructure.

---

## Section 1 — Hero

### Layout

Full-width. Warm cream background (`hsl(39 20% 88%)`). Content centered, max-width 720px. Padding: 100px top, 60px bottom.

### Content

**Page title:**

> Hylo works for groups that need to do more than talk.

Onest Bold, 36px desktop / 24px mobile. Rhino.

**Lead:**

> If your group needs to coordinate across people, share resources, make decisions together, or organize around a shared place — Hylo was built for you. Here's how groups like yours are using it.

Onest Regular, 18px, Rhino at 80%. Max-width 640px. Line-height 1.6.

### Spacing

- 100px top
- 24px between title and lead
- 60px bottom

---

## Section 2 — Use Case Grid

### Purpose

Each use case is a *type of coordination challenge*, not a type of organization. Under each, we name 3–5 specific kinds of groups that face this challenge — mixing the expected (bioregional hubs, mutual aid networks) with the unexpected (HOAs, PTAs, volunteer fire departments). This is where the page earns its range.

### Layout Pattern

Each use case is a full-width section. Backgrounds alternate White / Athens Gray. Content max-width 900px, centered.

Each use case section contains:
- **Use case name** — Onest Bold, 24px, Rhino.
- **The challenge** — Onest Regular, 16px, Rhino at 80%. 2–3 sentences describing the coordination problem. 12px below name.
- **How Hylo helps** — Onest Regular, 15px, Rhino at 70%. 2–3 sentences naming the specific features that address it. 16px below challenge.
- **Who this looks like** — A horizontal row of group-type tags. Small pills, Athens Gray background (on white sections) or White background (on gray sections), Rhino at 60% text, 10px uppercase, 0.6px tracking. 16px below "how Hylo helps."
- **Example** (where available) — A brief, specific story from a real group. Onest Regular, 14px, Rhino at 55%. Italic. 16px below tags.

32px between the bottom of one use case and the category divider. Each section has a thin left accent bar (4px, using the relevant post-type color at 30%) running the height of the content.

---

### Use Case 1 — Neighborhood and Place-Based Organizing

Background: White.
Accent color: Caribbean Green.

**The challenge:**

> You want to connect people who share a place — a neighborhood, a town, a watershed. The challenge isn't distance; it's that people who live near each other often have no way to coordinate, share resources, or make decisions about the things they share. Existing tools are either social media (designed for attention, not action) or government portals (designed for broadcast, not participation).

**How Hylo helps:**

> Hylo organizes groups around geography. The map shows what's happening near you. Requests and offers connect neighbors. Events bring people together in person. As trust builds, groups can move into collective decision-making — proposals about shared resources, participatory budgets, community agreements. Subgroups let neighborhoods coordinate within a city, blocks within a neighborhood.

**Who this looks like:**

`Neighborhood associations` · `HOAs` · `Block clubs` · `Town councils` · `Civic engagement initiatives` · `Bioregional hubs` · `Watershed stewardship groups` · `Community land trusts`

**Example:**

> Common Good Missoula used Hylo to coordinate a zoning and land use reform campaign — bringing together diverse stakeholders across the city around shared goals for housing access. Cross-group posting let organizers share updates across neighborhood groups simultaneously.

---

### Use Case 2 — Mutual Aid and Resource Sharing

Background: Athens Gray.
Accent color: Teal (`rgba(0, 199, 157, 1)`).

**The challenge:**

> People in your community have needs and others have the capacity to meet them — skills, tools, food, time, rides, childcare. But there's no system for connecting them. WhatsApp threads get buried. Facebook groups drown in noise. Spreadsheets go stale. And no one is tracking whether requests actually get fulfilled.

**How Hylo helps:**

> Requests and offers are first-class post types with location, timing, topic tags, and completion tracking. When someone helps, it's recorded. Over time, the group builds a visible record of reciprocal support — the trust infrastructure that makes more complex coordination possible later. The map shows what's needed and offered nearby. AI matching (coming soon) will accelerate connections.

**Who this looks like:**

`Mutual aid networks` · `Buy Nothing groups` · `Tool lending libraries` · `Community fridges` · `Timebanks` · `Volunteer coordination groups` · `Disaster relief networks` · `Parent co-ops` · `Neighbor-to-neighbor support groups`

**Example:**

> When a community faces a crisis — wildfire, flood, economic disruption — mutual aid groups on Hylo can spin up rapidly, coordinate offers and needs geographically, and track who's been helped and who still needs support. The map becomes the coordination surface.

---

### Use Case 3 — Disaster Preparedness and Emergency Response

Background: White.
Accent color: Events red (`rgba(254, 72, 80, 1)`).

**The challenge:**

> When disaster hits, the communities that respond fastest are the ones that already know each other. But most neighborhoods have no pre-existing coordination infrastructure. Emergency management agencies can broadcast, but they can't facilitate neighbor-to-neighbor support at scale. After the initial crisis, long-term recovery requires sustained coordination that emergency systems aren't designed for.

**How Hylo helps:**

> Hylo gives communities the coordination infrastructure *before* they need it — and the same tools work during and after a crisis. Place-based groups connect neighbors. Requests and offers match needs to resources in real time, geographically. The map shows where help is needed and where it's available. Cross-group posting lets mutual aid networks coordinate with official response agencies. Events organize work parties, supply distributions, check-in meetings. And because the infrastructure was built during calm times, trust is already in place when the storm hits.

**Who this looks like:**

`CERT teams` · `Firewise communities` · `Neighborhood emergency preparedness groups` · `Volunteer fire departments` · `Community resilience networks` · `Red Cross chapters` · `Local emergency management agencies` · `Faith-based disaster response teams`

---

### Use Case 4 — Civic Participation and Governance

Background: Athens Gray.
Accent color: Proposals purple (`rgba(102, 75, 165, 1)`).

**The challenge:**

> You want your community to make decisions together — real decisions about real resources — but the tools for democratic participation at the local level are terrible. Town halls are inaccessible. Email comment periods are performative. There's no infrastructure for ongoing civic participation between elections. And every governance experiment reinvents the wheel because there's no shared toolkit.

**How Hylo helps:**

> Proposals with flexible voting options (consent, consensus, ranked choice, gradients of agreement), quorum settings, and outcome tracking. Agreements that members consent to and that anchor moderation. Roles with distributed responsibilities. Funding rounds for participatory budgeting. All within a place-based group structure where participants share a geography, not just an opinion. Hylo makes governance participatory rather than performative.

**Who this looks like:**

`City and town civic engagement portals` · `Participatory budgeting initiatives` · `Citizen assemblies` · `Community planning processes` · `Cooperative governance boards` · `Municipal advisory committees` · `Tribal governance bodies` · `Community development corporations`

**Example:**

> Float, the Funding Lab for Agroecological Technology, used Hylo's funding rounds to distribute over $700,000 through participatory processes — community members reviewed proposals, discussed priorities, and collectively allocated real resources.

---

### Use Case 5 — Nonprofit and Mission-Driven Organizations

Background: White.
Accent color: Discussions blue (`rgba(0, 163, 227, 1)`).

**The challenge:**

> Your organization has staff, volunteers, board members, partners, and community members — all in different apps. Internal communication happens on Slack. Community engagement happens on Facebook. Events go through Eventbrite. Board decisions happen in email. Nobody can see the whole picture. And the platforms you're using are either designed for companies (Slack) or designed to monetize your community's attention (Facebook).

**How Hylo helps:**

> One platform for all of it: internal team coordination, community engagement, events, volunteer coordination, proposals and decisions, and cross-organization partnerships. Nested groups mean your board, your staff, your volunteer corps, and your public community all have their own spaces while staying connected. No ads, no data extraction, and open-source governance mean your organization's home won't be rug-pulled by a platform's quarterly earnings call.

**Who this looks like:**

`Environmental nonprofits` · `Community foundations` · `Advocacy organizations` · `Civic associations` · `Faith communities` · `Service clubs (Rotary, Lions, Kiwanis)` · `Cultural organizations` · `Health and wellness nonprofits` · `Social justice organizations`

---

### Use Case 6 — Networks and Coalitions

Background: Athens Gray.
Accent color: Caribbean Green.

**The challenge:**

> You're trying to coordinate across multiple organizations that each have their own leadership, culture, and tools. Coalition meetings happen quarterly. Information silos are persistent. Nobody can see what the other groups are doing. Shared projects fall through the cracks between organizations. And every coalition platform you've tried is either another walled garden or a glorified mailing list.

**How Hylo helps:**

> Cross-group coordination is Hylo's most distinctive capability. Groups can peer with other groups, share content across boundaries, and post to multiple groups simultaneously. A regional coalition can see itself — all the member organizations, their activities, and their people — on a single map. Network-level coordination becomes visible without requiring every organization to merge into one space. Parent groups can contain sub-organizations while respecting their autonomy.

**Who this looks like:**

`Regional health networks` · `Farm-to-table coalitions` · `Watershed councils` · `Interfaith alliances` · `Housing advocacy coalitions` · `Climate action networks` · `Impact networks` · `Professional associations` · `Chambers of commerce` · `Arts and culture collaboratives`

---

### Use Case 7 — Learning Communities and Cohort Programs

Background: White.
Accent color: Picton Blue (`#40A1DD`).

**The challenge:**

> You run a program — a cohort, a fellowship, a course, a professional development track — and the learning experience lives in a dozen places. Content in an LMS. Discussion on Slack. Events on Luma. Assignments in Google Docs. Alumni scattered to the wind. There's no persistent community that holds the learning, the relationships, and the ongoing connection after the program ends.

**How Hylo helps:**

> Learning tracks guide members through structured content with actions and completion tracking. Discussion posts create space for reflection and peer exchange. The community persists after the program ends — alumni stay connected, share resources, and continue learning together. Groups can nest program cohorts within a broader community. Badges earned through track completion signal expertise and unlock access. Paid tracks enable financially sustainable programming.

**Who this looks like:**

`Fellowship programs` · `Leadership development cohorts` · `Professional development communities` · `Online course communities` · `Continuing education programs` · `Mentorship networks` · `University program alumni groups` · `Trade and craft learning circles`

**Example:**

> The Millennium Fellowship — a UN-funded leadership program with 5,000 accepted fellows across 170 nations — uses Hylo's tracks extensively for weekly programming, campus-level coordination, and cross-cohort connection.

---

### Use Case 8 — Food Systems and Local Economies

Background: Athens Gray.
Accent color: Mountain Meadow (`#23CC80`).

**The challenge:**

> Local food systems involve dozens of actors — farmers, markets, co-ops, restaurants, food banks, gleaning networks, community gardens — who all serve the same community but rarely coordinate. Information about what's available, what's needed, and who's doing what stays locked in individual organizations. Seasonal coordination (harvest schedules, market logistics, surplus distribution) depends on phone calls and personal relationships that don't scale.

**How Hylo helps:**

> A food systems group on Hylo becomes the coordination hub: requests and offers flow between producers and consumers, events announce markets and workshops, the map shows where food is grown, distributed, and needed. Subgroups organize by function (growers, distributors, kitchens). Cross-group posting connects a CSA's announcement to the neighborhood groups it serves. Resource posts build a shared knowledge base of seasonal guides, preservation techniques, and supply chain contacts.

**Who this looks like:**

`CSAs and farm shares` · `Farmers' markets` · `Food co-ops` · `Gleaning networks` · `Community gardens` · `Food policy councils` · `Farm-to-school programs` · `Seed libraries` · `Community kitchens` · `Food banks and pantries`

---

### Use Case 9 — Events, Conferences, and Gatherings

Background: White.
Accent color: Events red.

**The challenge:**

> You run events — conferences, retreats, summits, festivals — and the community energy dissipates immediately after. Attendees connect intensely for three days and then scatter back to their inboxes. You want the relationships and momentum to persist, but a post-event Slack goes silent within a week. The next gathering starts from scratch.

**How Hylo helps:**

> Create a group for your event community that lives year-round — not just during the gathering. Between events, members discuss, share resources, collaborate on projects, and stay connected. When the next event approaches, the community is already warm. Cross-group posting lets you share across related event communities. The map helps attendees find each other geographically for local meetups between main events.

**Who this looks like:**

`Annual conferences` · `Unconferences and summits` · `Retreats and intensives` · `Festival communities` · `Professional meetup networks` · `Community gathering series` · `Camp and reunion communities`

---

### Use Case 10 — Land Stewardship and Shared Resources

Background: Athens Gray.
Accent color: Projects orange (`rgba(252, 128, 0, 1)`).

**The challenge:**

> You share resources with other people — land, water, equipment, commons, buildings — and you need to coordinate how those resources are managed, maintained, and governed. Cohousing communities need to make decisions about shared spaces. Farm collectives need to coordinate equipment schedules. Land trusts need to engage the community in stewardship decisions. The governance challenge is real: how do you make fair, transparent decisions about things you share?

**How Hylo helps:**

> Proposals and voting for shared decisions. Agreements that everyone consents to. Roles that distribute responsibility. Requests and offers for equipment sharing, work trade, and mutual support. Events for work parties and governance meetings. Funding rounds for capital improvements. The governance infrastructure grows with the group — start with simple decisions, build toward complex resource allocation as trust deepens.

**Who this looks like:**

`Cohousing and intentional communities` · `Community land trusts` · `Conservation easements` · `Cooperative farms` · `Makerspaces and workshops` · `Community centers` · `Shared office spaces` · `Water districts` · `Irrigation cooperatives` · `Grazing associations`

---

### Use Case 11 — Cooperatives and Worker-Owned Organizations

Background: White.
Accent color: Medium Purple (`#9883E5`).

**The challenge:**

> Cooperatives need democratic governance baked into daily operations, not bolted on as an annual meeting. Member-owners need to participate in decisions, understand what's happening, and hold leadership accountable — but the tools designed for top-down companies don't support distributed authority. And most co-ops are too small to build custom tools.

**How Hylo helps:**

> Hylo's governance tools were designed for exactly this: proposals with consent-based voting, roles with clearly scoped authority, agreements that bind, and moderation that's accountable to the community. Working groups and committees each get their own subgroup. Cross-group posting keeps the whole membership informed without drowning them. The developmental progression — from conversation to mutual support to collective governance — mirrors how healthy cooperatives grow.

**Who this looks like:**

`Worker cooperatives` · `Housing cooperatives` · `Consumer co-ops` · `Credit unions and community finance` · `Platform cooperatives` · `Cooperative groceries` · `Energy cooperatives` · `Cooperative childcare` · `Cooperative land management`

---

## Section 3 — For Individuals

### Purpose

A brief section acknowledging that behind every group are individuals looking for purpose, connection, and a place to contribute. Lighter in weight than the use case sections above.

### Layout

Full-width. Athens Gray background. Content max-width 720px, centered.

### Content

**Section header:**

> Not sure where to start?

Onest Bold, 24px, Rhino.

**Body:**

> You don't need to bring a group to get value from Hylo. Browse the map. Find communities near you. Explore the public commons. See what's happening in your watershed, your city, your bioregion. Join a group that resonates. Ask for help. Offer what you can. Hylo is a good place to find out where you fit.

Onest Regular, 16px, Rhino at 80%. Max-width 640px. Line-height 1.6.

**CTA:**

"Explore the commons →" — text-button, Caribbean Green, 14px.

### Spacing

- 60px top
- 16px between header and body
- 24px between body and CTA
- 60px bottom

---

## Section 4 — The Pattern

### Purpose

After the use case parade, step back and name what all these groups have in common. This is where Hylo gets to be itself — to say what it believes — but having earned the right by first showing concrete, diverse utility.

### Layout

Full-width. Rhino dark background (`#2C4059`). White text. Content centered, max-width 720px.

### Content

**Section header:**

> What these groups have in common

Onest Bold, 28px, White. Centered.

**Body:**

> Every group listed above faces the same underlying challenge: they need to coordinate real action among real people, in ways that build trust over time and distribute power rather than concentrating it. They don't need a better chat app. They don't need a content platform. They need coordination infrastructure — tools for mutual support, collective decision-making, and shared stewardship.
>
> That's what Hylo is. Not a social network. Not a project management tool. Not a governance app. A coordination platform that grows with your group as trust deepens and complexity increases.
>
> It starts with conversation. It builds through mutual support. It matures into self-governance. Every group does this in its own way, at its own pace. Hylo just makes the infrastructure available.

Onest Regular, 16px, White at 85%. Line-height 1.7. Paragraph spacing: 16px.

### Spacing

- 80px top
- 16px between header and body
- 80px bottom

---

## Section 5 — Closing CTA

### Layout

Full-width. Warm cream background. Content centered, max-width 600px. Padding: 60px top, 80px bottom.

### Content

**Headline:**

> See yourself here?

Onest Bold, 24px, Rhino. Centered.

**Body:**

> Hylo is free for every group. Set up your community in about 15 minutes and start coordinating.

Onest Regular, 16px, Rhino at 70%. Centered. 16px below headline.

**Two CTAs:**

- Primary: "Create your group — free" — Caribbean Green button, 40px height
- Secondary: "Explore features →" — text-button, Caribbean Green. Links to features page.

24px below body. 12px between CTAs.

---

## Page-Level Design Notes

### Color Flow

| Section | Background |
|---------|-----------|
| Hero | Warm cream |
| Use cases 1, 3, 5, 7, 9, 11 | White |
| Use cases 2, 4, 6, 8, 10 | Athens Gray |
| Individuals | Athens Gray |
| The Pattern | Rhino dark |
| CTA | Warm cream |

### The Group-Type Tags Are the Key Design Element

The tags under "Who this looks like" are the most important visual element on this page. They need to be scannable — someone scrolling quickly should be able to spot their group type in the tags even if they don't read the surrounding text. This is how the page earns range: a fire chief scanning the page sees `Volunteer fire departments` and `CERT teams`. An HOA board member sees `HOAs` and `Neighborhood associations`. A food co-op manager sees `Cooperative groceries` and `Food co-ops`.

Tags should wrap naturally. No maximum per row — let them fill the available width. On mobile, they stack into 2–3 columns.

### Voice Guide for This Page

**Do:**
- Name specific, concrete group types. "Irrigation cooperatives" is better than "resource-sharing communities."
- Mix the expected with the unexpected. Every use case should include at least one group type that would surprise a current Hylo user.
- Describe challenges in plain operational language. "Your board decisions happen in email" not "your governance is extractive."
- Let the features speak practically. "Proposals with quorum settings" not "democratic infrastructure."

**Don't:**
- Use movement-specific language in the use case descriptions. Save that for Section 4 (The Pattern), where it's earned.
- Imply that some groups are more "real" Hylo users than others. The HOA and the bioregional hub get equal treatment.
- Write aspirationally about what groups could become. Write about what they're trying to do right now.
- Use the word "prosocial" anywhere on this page.

### Image Direction

Each use case could benefit from a small illustration or photograph, but only if the imagery shows range. If every photo is from a permaculture workshop, the tags lose their power. Options:

- **No images:** Clean, text-driven, tag-heavy. The tags ARE the visual story. This is the safest option.
- **Stock-free photos:** Real photos sourced from the diverse group types listed. A neighborhood meeting, a co-op storefront, a volunteer fire training, a community garden, a town hall. Hard to source well. Only pursue if the team can guarantee quality and diversity.
- **Abstract illustrations:** Simple, geometric, using post-type colors. One per use case. Safe but potentially generic.

Recommendation: no images for v1. The tags and text carry the page. Add imagery in v2 when real photos from diverse groups are available.

### Mobile

- Use case sections: full width, stacked
- Group-type tags: wrap naturally, generous padding for readability
- The Pattern (dark section): same treatment, centered text
- Category quick nav: not needed on this page (the use cases are browsable sequentially)

### SEO Value

This page has significant SEO potential. Each use case section should be structured so that search queries like "community platform for HOAs," "cooperative governance tools," "mutual aid coordination app," and "civic engagement platform" can land on or near the relevant section. Consider adding page-level meta descriptions and section-level anchors.

---

## Open Questions

1. **Number of use cases:** Eleven is a lot. Could some be merged? Neighborhood organizing and civic participation overlap. Food systems and land stewardship overlap. But merging loses the specificity of the tags, which is the whole point. The team should test: does the page feel exhaustive or exhausting?
2. **Real examples:** The spec includes two real examples (Common Good Missoula, Float). Ideally every use case would have one. The team should source 2–3 more from existing groups that represent non-regen use cases — a civic group, a learning program, a cooperative.
3. **Missing use cases:** Should the page include sections for faith communities, veteran organizations, alumni networks, parent groups/PTAs, or professional guilds? Each of these could use Hylo. The question is whether the page is better served by breadth (more use cases, more tags) or depth (fewer, richer sections). Consider adding a "More use cases" expandable section at the bottom.
4. **Tag linking:** Should the group-type tags link anywhere? Options: to a filtered search on the Group Explorer (if the tags match real groups on Hylo), to a "start a group like this" flow, or to nothing (just visual). Linking to real groups would be most powerful but requires that those groups actually exist on Hylo.
5. **The Pattern section language:** This is the one place on the page where Hylo speaks in its own voice about what it believes. The current draft avoids jargon but still makes a philosophical claim ("tools for mutual support, collective decision-making, and shared stewardship"). The team should review whether this lands for someone who scrolled through the HOA and volunteer fire department sections — or whether it feels like a bait-and-switch from practical to ideological.
6. **Competitive framing:** Several use cases mention "existing tools" failing (Facebook, Slack, spreadsheets). The Bring Your Group page handles competitive framing in detail. Should this page avoid it entirely, or does naming the pain point help each use case resonate?
