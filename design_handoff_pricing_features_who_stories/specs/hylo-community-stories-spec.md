# Community Stories — Page Spec

**Version:** 1.0 — April 2026
**Companion to:** hylo-homepage-spec.md, hylo-who-is-it-for-spec.md
**Purpose:** A page of real stories from real groups — the single highest-trust piece of content on the site. Every other page describes what Hylo does or could do. This page shows what actually happened when communities used it.

---

## Why This Is the Most Important Page on the Site

A funder considering a grant reads this page. A nonprofit director comparing platforms reads this page. A community organizer wondering "has anyone actually done this?" reads this page.

The homepage tells a story. The features page lists capabilities. This page answers the only question that ultimately matters: **did it work?**

The current site has zero dedicated case studies. Real proof points — Common Good Missoula, Float, Planetary Health Alliance, Millennium Fellowship — are mentioned in passing across other pages but none have their own story. The result: every reference is a tease with no payoff. This page is the payoff.

---

## Design Philosophy

Each story follows a simple narrative structure: **who they are, what they were trying to do, what they did on Hylo, and what happened.** Not a testimonial. Not a marketing writeup. A short, honest story with specific details and, wherever possible, measurable outcomes.

The voice should be the community's, not Hylo's. We're not the hero of these stories. The communities are. Hylo is the infrastructure that made something possible — the plumbing, not the building.

Stories should demonstrate range. If every case study is from a bioregional hub, the page reinforces the cultural filter. The ideal mix includes at least one civic/governance story, one mutual aid story, one learning community, one global network, and one that reads as "mainstream" enough that a PTA president could relate.

---

## Section 1 — Hero

### Layout

Full-width. Warm cream background (`hsl(39 20% 88%)`). Content centered, max-width 720px. Padding: 80px top, 48px bottom.

### Content

**Page title:**

> Community stories

Onest Bold, 36px, Rhino.

**Lead:**

> Real groups using Hylo to coordinate, support each other, and make decisions together. These are their stories — what they were trying to do, how they used the platform, and what happened.

Onest Regular, 17px, Rhino at 75%. Max-width 600px. Line-height 1.6.

### Spacing

- 80px top
- 24px between title and lead
- 48px bottom

---

## Section 2 — Story Index Cards

### Purpose

A visual overview of all case studies at the top of the page, allowing visitors to jump to the story that's most relevant to them.

### Layout

Full-width. White background. Content max-width 1000px, centered.

Horizontal row of cards on desktop (scroll if more than fit), stacked on mobile. 16px gap.

Each card: Athens Gray background, 4px border-radius, 20px padding. Min-width 240px.

Card contents:
- **Group name** — Onest Medium, 16px, Rhino
- **One-line description** — Onest Regular, 13px, Rhino at 60%. 4px below name.
- **Tag** — Small pill, 10px uppercase. Categorizes the type: `Civic` `Mutual Aid` `Global Network` `Learning` `Participatory Funding`. Colored by relevant post-type color at 20% opacity, text in full color. 8px below description.

Clicking a card scrolls to that case study.

### Spacing

- 32px top
- 32px bottom

---

## Section 3 — Full Case Studies

### Layout Pattern (repeated per story)

Each case study is a full-width section. Backgrounds alternate White / Athens Gray. Content max-width 800px, centered.

Each story contains:

**Header block:**
- **Group name** — Onest Bold, 24px, Rhino
- **Tagline** — Onest Regular, 15px, Rhino at 60%. Italic. One sentence capturing the outcome. 8px below name.
- **Category tag** — Same pill as the index card. Inline with tagline or below it on mobile.

**Story body** — structured as labeled sections with a clean vertical flow. No cards or columns within the story — this should read like a well-structured article, not a feature comparison.

**Section labels** within each story: Onest Medium, 12px, uppercase, 0.6px tracking, Rhino at 40%. 32px above each section body.

The sections:
- `THE GROUP` — Who they are, in 2–3 sentences.
- `THE CHALLENGE` — What they were trying to do, why existing tools weren't working.
- `WHAT THEY DID ON HYLO` — Specific features used, how they set up their group, what coordination happened.
- `WHAT HAPPENED` — Outcomes. As specific and measurable as possible.
- `IN THEIR WORDS` — A direct quote from a community leader. If available.

Body text: Onest Regular, 16px, Rhino at 80%. Line-height 1.7.

**Optional image area:** Between the header and story body. Full content width, max-height 300px, 4px border-radius. A screenshot of the group on Hylo, a photo from an event, or a map view of their community. Image should feel real, not staged.

### Spacing per story

- 60px top
- 16px between header and image
- 24px between image and first section
- 24px between sections
- 60px bottom

---

### Story 1 — Common Good Missoula

Background: White.
Category: `Civic`

**Tagline:** A city that organized itself around housing — and won.

`THE GROUP`

> Common Good Missoula is a civic organization that works to strengthen community engagement and participatory democracy in Missoula, Montana. They bring together residents, organizations, and local government around shared challenges — housing, land use, economic development — through assemblies, working groups, and collaborative processes.

`THE CHALLENGE`

> Missoula was facing a housing affordability crisis. Zoning reform was needed, but the standard approach — public comment periods, town hall meetings, advocacy campaigns — was fragmented. Different stakeholder groups were working in isolation. Residents felt excluded from planning processes. The city needed a way to bring diverse voices together, sustain coordination over months, and make the outcome feel legitimate to everyone involved.

`WHAT THEY DID ON HYLO`

> Common Good Missoula set up Hylo as their coordination hub for a sustained zoning and land use reform campaign. They used cross-group posting to share updates across neighborhood groups simultaneously, so different parts of the city stayed informed without anyone having to attend every meeting. The map grounded the conversation in geography — people could see which neighborhoods were engaged and where the gaps were. Discussions let residents weigh in asynchronously between assemblies. Events organized the assemblies themselves.

`WHAT HAPPENED`

> The campaign succeeded. Missoula passed zoning and land use reforms that increased housing access. The process brought together stakeholders who would not have coordinated through traditional channels — renters and developers, longtime residents and newcomers, neighborhood associations and city staff. The group continues to use Hylo for ongoing civic engagement beyond the original campaign.

*Note for the team: This story needs specific metrics. How many residents participated? How many neighborhood groups were involved? What was the timeline from launch to passage? What did the reforms actually change? These details transform a good story into a compelling one. Talk to the Common Good Missoula team and get numbers.*

`IN THEIR WORDS`

> [Quote needed — reach out to Common Good Missoula leadership for a statement about what Hylo made possible that wouldn't have happened otherwise.]

---

### Story 2 — Float (Funding Lab for Agroecological Technology)

Background: Athens Gray.
Category: `Participatory Funding`

**Tagline:** $700,000 allocated by the community, not a committee.

`THE GROUP`

> Float is a participatory funding initiative for agroecological technology. Rather than having a small panel of experts decide where money goes, Float distributes decision-making power to the community — the farmers, technologists, and land stewards who understand what's needed on the ground.

`THE CHALLENGE`

> Traditional grantmaking concentrates decisions in the hands of program officers. The people closest to the work — who understand which technologies would actually help farmers, which projects have community support, which interventions would be most effective — rarely have a say in where the money flows. Float wanted to invert this: real participatory funding where the community reviews proposals, discusses priorities, and collectively allocates resources.

`WHAT THEY DID ON HYLO`

> Float used Hylo's funding rounds to run their entire participatory allocation process. Community members submitted proposals for projects and technologies. During the discussion phase, the community reviewed and debated proposals — asking questions, challenging assumptions, and building shared understanding. During the voting phase, the community voted to allocate the funding pool across proposals. The entire process — submission, deliberation, decision — happened transparently within the Hylo group. Everyone could see the reasoning, the tradeoffs, and the outcomes.

`WHAT HAPPENED`

> Float distributed over $700,000 USD through participatory funding rounds on Hylo in 2025. Resources flowed to projects that had genuine community support rather than institutional backing. The process demonstrated that communities can allocate significant resources through democratic processes when they have the infrastructure to do it well.

*Note for the team: Flesh this out with specifics. How many proposals were submitted? How many community members voted? What was the average funding amount per project? How did the community feel about the outcomes? Were there any projects funded that wouldn't have been under a traditional panel model? A quote from a funded project or from Float leadership would be powerful.*

`IN THEIR WORDS`

> [Quote needed — from Float leadership or a community member about the experience of participatory funding.]

---

### Story 3 — Planetary Health Alliance

Background: White.
Category: `Global Network`

**Tagline:** 210 organizations across 47 countries, coordinating in one place.

`THE GROUP`

> The Planetary Health Alliance is a global consortium of over 210 organizations committed to understanding and addressing the human health impacts of environmental change. Based out of the Harvard T.H. Chan School of Public Health, PHA connects researchers, educators, practitioners, and policymakers across 47 countries.

`THE CHALLENGE`

> A global network of 210+ organizations with 5,000+ newsletter subscribers needed more than email blasts and annual conferences. Members wanted to find each other, collaborate on projects, join affinity groups, and share resources — but there was no persistent community infrastructure. Communications went one-way from HQ. Regional connections were invisible. People who might collaborate didn't know each other existed.

`WHAT THEY DID ON HYLO`

> PHA built their community on Hylo with nested groups for regional hubs, thematic working groups, and special initiatives. The member directory helped researchers find collaborators across disciplines and geographies. Cross-group posting connected regional hubs to the global conversation. Events organized webinars, regional meetups, and the annual conference community. The platform became the persistent space where the network's relationships lived between conferences.

`WHAT HAPPENED`

> PHA moved from one-way communication to genuine multi-directional coordination. Regional hubs became active spaces for local collaboration. Members across countries discovered shared research interests and launched joint projects. The annual conference community on Hylo gave attendees a place to continue conversations and collaborations year-round rather than losing momentum after the event.

*Note for the team: PHA is the most institutionally credible name on the platform. This story needs hard metrics: how many active members on Hylo, how many regional hubs are active, any research collaborations or projects that originated through connections made on the platform. A quote from PHA leadership (Marie, Max, or another leader) would carry enormous weight for funders and institutional partners.*

`IN THEIR WORDS`

> [Quote needed — from PHA leadership about the shift from one-way communication to community coordination.]

---

### Story 4 — Millennium Fellowship

Background: Athens Gray.
Category: `Learning`

**Tagline:** 5,000 fellows across 170 nations, learning together on Hylo.

`THE GROUP`

> The Millennium Fellowship is a UN-funded leadership development program run by the Millennium Campus Network. Each semester, thousands of fellows across hundreds of campuses worldwide go through a structured program focused on the Sustainable Development Goals. Each fellow completes a capstone project tied to their community's needs.

`THE CHALLENGE`

> Coordinating a leadership program across 218 campuses in 48 nations, with content delivered weekly, progress tracked per student, and campus directors managing local teams — while keeping the whole cohort connected across borders. They needed structured learning (tracks), community discussion, cross-campus connection, and program administration in a single platform. Their previous tools couldn't handle the scale or the structure.

`WHAT THEY DID ON HYLO`

> The Millennium Fellowship uses Hylo's learning tracks extensively. Weekly tracks deliver program content with actions that fellows complete as they progress. Campus directors manage their local teams within campus-level subgroups, all nested under the global program group. Training-the-trainers tracks onboard new campus directors. Discussion posts create cross-campus dialogue. The platform holds both the structured curriculum and the organic community that forms around it.

`WHAT HAPPENED`

> The program runs at scale on Hylo — 5,000 accepted fellows each semester, across 170 nations. Learning tracks structure the weekly program. The community persists across cohorts, building an alumni network that grows with each semester. Campus directors manage their local programs within the platform rather than juggling email, WhatsApp, and Google Docs.

*Note for the team: The Millennium Fellowship is Hylo's strongest "mainstream" case study — a UN-affiliated program at global scale. Metrics to gather: how many fellows have used the platform total, track completion rates, any measurable outcomes from capstone projects. A quote from a campus director or program leader would demonstrate that Hylo works for large, structured institutions, not just small values-aligned groups.*

`IN THEIR WORDS`

> [Quote needed — from a campus director or Millennium Campus Network leader about why Hylo works for their program.]

---

### Story 5 — The Great Simplification

Background: White.
Category: `Community of Practice`

**Tagline:** Turning a global audience into local communities of action.

`THE GROUP`

> The Great Simplification is a media platform and community centered around Nate Hagens' work on energy, ecology, economics, and human behavior. The community includes thousands of people worldwide who are engaged with the ideas and looking for ways to act on them — locally, practically, in their own lives and communities.

`THE CHALLENGE`

> The Great Simplification had a large, engaged audience — people watching videos, attending events, sharing ideas — but the community existed primarily as a passive audience consuming content. There was no infrastructure for members to connect with each other, find people near them, or organize local action. People in the same city who shared the same concerns had no way to discover each other through the platform.

`WHAT THEY DID ON HYLO`

> The community moved to Hylo as a space where audience becomes community. Discussion posts replaced passive consumption with active exchange. The map revealed that people who felt isolated in their concerns had neighbors who shared them. Topic-based discussions let members go deeper on specific themes. Events organized local meetups and study groups. The platform became the place where ideas about the great simplification translated into local relationships and action.

`WHAT HAPPENED`

> Members transitioned from audience to community — posting discussions, organizing local meetups, and connecting with people in their own regions who share their concerns. The platform provided the infrastructure for a global intellectual community to develop local roots.

*Note for the team: This story is important because it demonstrates Hylo's value for "culture creator" communities — a large audience built around ideas that wants to become a participatory community. Metrics needed: active member count, number of local meetups organized, geographic spread of activity. A quote from Nate Hagens or Jeff (who has expressed interest in supporting Hylo financially) would be particularly valuable.*

`IN THEIR WORDS`

> [Quote needed — from community leadership about the transition from audience to participatory community.]

---

## Section 4 — Story Template (Internal Use)

### Purpose

A template for gathering and writing future case studies. This section is for the team, not for the published page — it provides the questions to ask when interviewing community leaders.

### Interview Guide

**About the group (2 min):**
1. What does your group do? Who's involved?
2. How big is the community? How geographically spread?

**Before Hylo (5 min):**
3. What were you using before? What wasn't working?
4. What specific coordination challenges were you facing?
5. Was there a moment when you realized you needed something different?

**Using Hylo (10 min):**
6. How did you set up your group? Walk me through the structure.
7. Which features do you use most? Which surprised you?
8. How did you onboard your members? What worked? What was hard?
9. Can you describe a specific moment or project where Hylo made something possible that wouldn't have happened otherwise?

**Outcomes (5 min):**
10. What changed? Be as specific as you can — numbers, events, decisions, connections.
11. What would you tell someone considering Hylo for their group?
12. What could be better? (Include this in the internal version — honest feedback makes the story credible.)

**The quote (1 min):**
13. If you could say one sentence about what Hylo made possible for your community, what would it be?

### Writing the Story

- Lead with the outcome in the tagline. "A city that organized itself around housing — and won." Not: "A civic organization that uses Hylo."
- Keep each section to 2–4 sentences. These are short stories, not reports.
- Include at least one specific, concrete detail per section. Numbers, place names, feature names.
- The quote should be about what happened, not about how much they like Hylo.
- Total length per story: 400–600 words.

---

## Section 5 — Closing CTA

### Layout

Full-width. Warm cream background. Content centered, max-width 600px. Padding: 60px top, 80px bottom.

### Content

**Headline:**

> Your group's story could be here.

Onest Bold, 24px, Rhino. Centered.

**Body:**

> Every community on Hylo started with a few people deciding to coordinate differently. Create your group and start building something worth writing about.

Onest Regular, 16px, Rhino at 70%. Centered. 16px below headline.

**Two CTAs:**

- Primary: "Create your group — free" — Caribbean Green button, 40px height
- Secondary: "Share your story →" — text-button, Caribbean Green. Links to a contact form or the Building Hylo group.

24px below body. 12px between CTAs.

---

## Page-Level Design Notes

### Color Flow

| Section | Background |
|---------|-----------|
| Hero | Warm cream |
| Index cards | White |
| Story 1 (Missoula) | White |
| Story 2 (Float) | Athens Gray |
| Story 3 (PHA) | White |
| Story 4 (Millennium) | Athens Gray |
| Story 5 (Great Simp) | White |
| CTA | Warm cream |

### Story Selection Criteria

The five stories above were chosen for range:

| Story | Type | Scale | Geography | Signal |
|-------|------|-------|-----------|--------|
| Common Good Missoula | Civic governance | City-wide | US Mountain West | Place-based, mainstream |
| Float | Participatory funding | Global | Global | Financial governance at scale |
| PHA | Global health network | 210 orgs, 47 countries | Global | Institutional credibility |
| Millennium Fellowship | Learning/cohort | 5,000 fellows, 170 nations | Global | Scale, structured programs |
| Great Simplification | Community of practice | Thousands | Global | Audience-to-community transition |

### What's Missing from This Mix

- A **mutual aid** story — a local network using requests and offers to build trust and resilience
- A **disaster response** story — a community that coordinated during or after a crisis
- A **cooperative** story — a worker co-op or housing cooperative using governance tools
- A **"mainstream"** story — a group that doesn't identify as regen, bioregional, or movement-adjacent

As Hylo's community diversifies, the case studies page should grow to include these. The first three to add should prioritize groups that broaden the audience range.

### Photography and Visuals

The most powerful version of this page includes real photos from each community — a Missoula assembly, a Float funding round screen, a PHA regional gathering, Millennium fellows on campus. If real photos aren't available, a screenshot of the group's Hylo space (with the community's permission) is the next best option.

Do not use stock photos. A stock photo of "diverse people collaborating" next to a specific community's name is immediately dishonest.

### Maintenance

This page should grow. Target: at least one new story per quarter. Every new partnership or stewardship engagement is a potential case study. Build story-gathering into the partnership process — at the three-month check-in (included in the Pollination package), ask the interview questions and write the draft.

### SEO

Each case study should be individually addressable (anchor links at minimum, separate URLs if the CMS supports it). Titles like "How Common Good Missoula Coordinated Citywide Zoning Reform" are search-friendly and shareable.

---

## Open Questions

1. **Getting the stories written.** Every story above has "[Quote needed]" and "[Metrics needed]" notes. This page cannot launch without at least 3 of the 5 stories having real quotes and at least some specific outcomes. The team needs to do outreach and interviews. Budget 30 minutes per community leader.
2. **Permissions.** Confirm that each community is willing to be featured publicly. PHA and Millennium Fellowship may require institutional approval. Common Good Missoula leadership should review the framing of the zoning campaign.
3. **Which three to launch with?** If the team can only fully develop three stories before launch, prioritize: Float (the $700K number is genuinely compelling), Common Good Missoula (the most "mainstream" story), and Millennium Fellowship (the most impressive scale). PHA and Great Simplification can be added in v2.
4. **Video?** Short video testimonials (60–90 seconds each) from community leaders would be more powerful than written quotes. If the team has capacity, one or two video stories would transform the page. Even a simple Zoom recording with good audio works.
5. **Future pipeline.** Who are the next 3–5 communities to feature? Look for stories from groups that are NOT in the regen/bioregional space — a cooperative, a civic group, a PTA, a professional association. These broaden the page's persuasive range.
6. **"Share your story" CTA.** The secondary CTA invites communities to submit their own stories. Is there a process for receiving and reviewing these? If not, either build one or change the CTA to "Tell us what Hylo made possible for your group" and route it to the community team's inbox.
