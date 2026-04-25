# Hylo Homepage Redesign Spec

**Version:** 1.0 — April 2026
**Purpose:** A complete design and content specification for the new Hylo homepage. Intended as a working document for design and development, covering story arc, copy direction, layout, imagery, and visual style.

---

## Design Philosophy

The homepage serves two audiences simultaneously without splitting its voice:

1. **The organizer evaluating tools.** A nonprofit director, mutual aid coordinator, or community builder who needs their people to stop using five different apps. They want to see what Hylo does, who else uses it, and whether it's worth the migration. They need concrete, functional language and product clarity.

2. **The values-aligned participant.** Someone who already senses the world needs different coordination infrastructure. They're looking for a home — a platform that reflects what they believe. They need to feel recognized without being pandered to.

The homepage speaks primarily in the first register (plain, warm, concrete) and makes the second register available as depth — rewarding those who scroll further or look closer, without filtering out those who came for a better group tool.

**Aesthetic direction:** Grounded warmth. Not corporate SaaS, not spiritual retreat. Think: a well-designed community space — clean enough to feel trustworthy, warm enough to feel human, alive enough to feel like something is happening here. The Hylo Default theme (warm cream backgrounds, Caribbean Green accents, Rhino text) is the visual foundation.

---

## Section 1 — Hero

### Layout

Full-width section. Warm cream background (`hsl(39 20% 88%)` / Default theme background). Generous vertical padding (120px top, 80px bottom on desktop; 80px/60px mobile).

Content centered, max-width 720px. Text stack: headline, subline, CTA group.

No hero image. The hero is language. Clean and confident. The visual richness comes in the sections below.

### Content

**Headline (h1, display size)**

> Hylo is where your group gets organized, stays connected, and grows together.

Set in Onest Bold, 36px desktop / 24px mobile. Color: Rhino (`#2C4059`). Line-height 1.2. Letter-spacing -0.5px.

**Subline (body large)**

> Unlock deeper trust, better coordination, and the capacity to tackle complex challenges — together.

Set in Onest Regular, 20px desktop / 17px mobile. Color: Rhino at 70% opacity. Max-width 600px. Line-height 1.5.

*Design note: The subline is a working draft. Aaron may want to revise — the word "unlock" is under review. An alternative direction: drop the subline entirely and let the group cards in Section 2 do the explanatory work. Test both.*

**CTA Group**

Two buttons, horizontally aligned (stacked on mobile):

- **Primary:** "Bring your group" — Caribbean Green (`#0DC39F`) background, white text, 40px height, 30px horizontal padding, 4px border-radius. Hover: Gossamer (`#0A9682`).
- **Secondary:** "Explore the map" — White background, Caribbean Green text, 1px border Ghost (`#CCD1D7`). Hover: Polar (`#F0FCF9`) background, green border.

16px gap between buttons. Centered beneath subline with 32px top margin.

### Spacing

- Top nav: standard 56px Hylo nav bar (logged-out variant with Sign In / Sign Up)
- Hero content begins 120px below nav on desktop
- 48px between headline and subline
- 32px between subline and CTA group
- 80px bottom padding before Section 2

---

## Section 2 — Social Proof Rail

### Purpose

Immediately show who's here. Real groups, real names, real purposes. This is the "you're not alone" beat — it answers "who else uses this?" before the visitor has to ask.

### Layout

Full-width section. Background: White (`#FFFFFF`).

**Section label** above the rail:

> Groups growing together on Hylo

Set in Onest Medium, 14px, uppercase, 0.6px letter-spacing. Color: Rhino at 60%. Left-aligned to the content grid (max-width 1200px, centered). 24px bottom margin.

**Horizontal scroll rail** of group cards. No arrows — pure horizontal scroll with scroll-snap on mobile. On desktop, subtle left/right fade masks (gradient to white) indicate overflow.

### Group Cards

Each card: 280px wide, auto height. White background on desktop (with subtle shadow: `0px 4px 15px rgba(0, 0, 0, 0.08)`). 4px border-radius. 20px internal padding.

Card contents, top to bottom:
- **Group avatar** — 48px circle (or square with 10px radius for orgs that use square avatars). Pulled from actual Hylo group data.
- **Group name** — Onest Medium, 16px, Rhino. 8px below avatar.
- **Group purpose / tagline** — Onest Regular, 14px, Rhino at 70%. 2 lines max, ellipsis overflow. 4px below name.
- **Member count + location** — Onest Regular, 12px, Rhino at 50%. Icon + text. 12px below purpose.
- **Category tag** — Small pill badge. Background: relevant post-type color at 20% opacity. Text: post-type color at full. Examples: "Mutual Aid," "Bioregional," "Food Systems," "Climate Action," "Learning Community," "Civic." 12px below member count.

16px gap between cards. Rail padding: 24px left/right on the content grid.

### Curated Group Selection

Choose 8–12 groups that demonstrate range. Must include:
- At least one civic/governance group (Common Good Missoula)
- At least one mutual aid network
- At least one learning community
- At least one bioregional group
- At least one climate/ecological group
- At least one that reads as "mainstream" — a neighborhood group, a food co-op, a local nonprofit

Avoid: all groups reading as the same cultural register. The selection itself is a design decision about who feels welcome.

### Spacing

- 40px top padding
- 24px below section label
- Rail height determined by card content
- 60px bottom padding

---

## Section 3 — The Group Journey

### Purpose

This is Hylo's actual differentiator: groups evolve. The platform grows with them. This section tells that story as a narrative progression, not a feature list.

### Layout

Full-width section. Background: Athens Gray (`#FAFBFC`).

Content in a centered column, max-width 800px.

**Section headline:**

> Start with conversation. End up changing your world.

Onest Bold, 28px desktop / 22px mobile. Rhino. Centered. 

**Subline:**

> Hylo meets your group where you are and grows with you. The more you do together, the more becomes possible.

Onest Regular, 17px. Rhino at 70%. Centered. Max-width 600px. 16px below headline.

### Journey Steps

Below the subline, a vertical stepped progression. Each step is a horizontal pair: left icon/illustration area (120px wide) + right text block.

On mobile: stacked vertically, icon above text.

A thin vertical line (1px, Caribbean Green at 30%) connects the steps on the left side, running through the icon area. This is the "growth" line.

**Step 1 — Connect**
- Icon area: Chat bubble cluster (use Hylo's chat post-type color, cyan `rgba(95, 210, 255, 1)` at 40%)
- Title: "Connect" — Onest Medium, 18px, Rhino
- Body: "Your group starts with the basics: conversations, shared events, and a place to find each other. Familiar tools, one home." — Onest Regular, 15px, Rhino at 70%. 3 lines max.

**Step 2 — Support**
- Icon area: Interlocking hands or request/offer arrows (Teal `rgba(0, 199, 157, 1)` at 40%)
- Title: "Support each other"
- Body: "Members post what they need and what they can offer — skills, tools, time, knowledge. Every fulfilled exchange builds trust."

**Step 3 — Organize**
- Icon area: Project/kanban board abstraction (Orange `rgba(252, 128, 0, 1)` at 40%)
- Title: "Organize together"
- Body: "Projects, working groups, events with real follow-through. Your group builds the muscle to coordinate complex work across people and time."

**Step 4 — Decide**
- Icon area: Proposal/vote abstraction (Purple `rgba(102, 75, 165, 1)` at 40%)
- Title: "Make decisions together"
- Body: "Proposals, participatory budgets, collective funding rounds. When trust is deep enough, your group can govern shared resources — and it works."

**Step 5 — Weave**
- Icon area: Network/mycelium web (Caribbean Green at 40%)
- Title: "Weave across groups"
- Body: "Connect with neighboring groups, share across networks, coordinate at the scale of a watershed or a movement. No group is an island."

Each step: 48px vertical gap between them. The vertical connecting line implies continuity.

### Animated Treatment (stretch goal)

On scroll, each step fades/slides in sequentially (200ms stagger, ease-out). The connecting line "draws" downward as the user scrolls. This mirrors the progressive unlocking — you see it build.

If animation is out of scope for v1, the static version works fine. The vertical line and step structure carry the narrative without motion.

### Spacing

- 80px top padding
- 40px between headline block and first step
- 48px between steps
- 80px bottom padding

---

## Section 4 — The Map

### Purpose

Ground everything in place. This is the most visually distinctive section on the page and the moment Hylo stops feeling like "another app" and starts feeling like a living network.

### Layout

Full-width section. No horizontal padding — the map bleeds to the edges.

Two-layer composition:

**Background layer:** The live Hylo public map (or a high-fidelity screenshot/embed of it), showing real group locations, member dots, watershed layers. Full width, ~500px tall on desktop, ~350px on mobile. Slight dark overlay gradient from the left side (rgba(0,0,0,0.4) to transparent at 50%) to ensure text readability.

**Foreground layer — left-aligned text block:**

Positioned over the map, left side. White or near-white text. Max-width 400px. Padding: 60px left, vertically centered in the map area.

**Headline:**

> Real change happens in real places.

Onest Bold, 28px. White. 

**Body:**

> Hylo is built for the places you live — your neighborhood, your watershed, your bioregion. Tune in to what's happening around you.

Onest Regular, 16px. White at 90%. 16px below headline.

**Discovery tags** — a row of small pill tags suggesting what you'll find on the map:

`Local mutual aid` · `Tool libraries` · `Community gardens` · `Local orgs` · `Neighbors`

Each tag: White background at 20% opacity, white text, 10px font, uppercase, 0.6px tracking. 4px border-radius. 8px horizontal padding, 4px vertical. 8px gaps. 24px below body text.

**CTA beneath tags:**

"Explore the map →" — text-button style, white, 14px. Links to /map or the public commons map view.

### Map Treatment

If embedding the live map: use the Hylo public map component in a non-interactive (view-only, no click events) mode for performance. Preload with a static image that swaps to interactive on scroll-into-view.

If using a static image: screenshot the map at a global zoom level showing decent cluster density. Ensure it's current (refresh monthly). Apply a very subtle warm color grade to match the site's cream palette — the map shouldn't feel like a cold Google Maps embed.

The watershed/hydro basin layer should be visible if available — it's one of Hylo's most distinctive visual elements and immediately communicates "this isn't a normal platform."

### Spacing

- 0px horizontal padding (full bleed)
- Map area: 500px height desktop, 350px mobile
- Text block: vertically centered within map area
- 0px gap between this section and adjacent sections (the map itself is the visual break)

---

## Section 5 — The Toolkit

### Purpose

Show what your group actually does on Hylo. Organized by action type, not feature name. This is the "oh, we currently do this in three different apps" moment.

### Layout

Full-width section. Background: White. Content: centered, max-width 1100px.

**Section headline:**

> Everything your group needs, in one place.

Onest Bold, 28px, Rhino. Centered.

**Subline:**

> No more juggling Slack, Google Docs, Eventbrite, and email chains. Hylo brings it together.

Onest Regular, 16px, Rhino at 70%. Centered. Max-width 560px. 16px below headline.

### Capability Cards

A 2×3 grid on desktop (3 columns, 2 rows). On tablet: 2 columns. On mobile: single column stack.

Each card: flexible width within the grid. Athens Gray (`#FAFBFC`) background. 4px border-radius. 24px padding. Left border: 4px solid, colored by the relevant post-type color at 40% opacity.

Card contents:
- **Icon** — small, 24px, in the post-type color. Use Hylo's existing icon set where possible.
- **Title** — Onest Medium, 16px, Rhino. 8px below icon.
- **Description** — Onest Regular, 14px, Rhino at 70%. 2–3 lines. 4px below title.

**The six cards:**

1. **Conversations & Chat**
   - Color: Discussions blue (`rgba(0, 163, 227, 1)`)
   - Icon: Chat bubble
   - "Threaded discussions for depth. Chat rooms for speed. Cross-post to multiple groups at once — Hylo's superpower."

2. **Events & Gatherings**
   - Color: Events red (`rgba(254, 72, 80, 1)`)
   - Icon: Calendar
   - "In-person and virtual events with RSVPs, calendar sync, and location. The trust that matters most gets built face to face."

3. **Requests & Offers**
   - Color: Requests/Offers teal (`rgba(0, 199, 157, 1)`)
   - Icon: Arrows (exchange)
   - "Post what you need. Share what you can give. Every completed exchange is a deposit in your community's trust account."

4. **Projects**
   - Color: Projects orange (`rgba(252, 128, 0, 1)`)
   - Icon: Clipboard/tasks
   - "Coordinate real work with tasks, roles, and timelines. Make contribution visible so effort is recognized, not invisible."

5. **Proposals & Decisions**
   - Color: Proposals purple (`rgba(102, 75, 165, 1)`)
   - Icon: Vote/check
   - "Polls, proposals, and structured decision-making. When your group is ready to govern together, the tools are here."

6. **Map & Place**
   - Color: Caribbean Green (`#0DC39F`)
   - Icon: Map pin
   - "See your community spatially. Find what's near you. Organize around the landscapes, watersheds, and neighborhoods you share."

### Product Screenshot

Below the card grid: a single, large product screenshot (max-width 900px, centered). Shows a real Hylo group in use — the stream view or the map view, with visible posts, member avatars, and group structure. 

Framed in a subtle browser/device mockup (not a heavy skeuomorphic frame — just enough to say "this is the product"). Slight shadow: `0px 4px 15px rgba(0, 0, 0, 0.1)`.

*Image direction: capture a screenshot of an active, visually rich Hylo group. Ideal: a bioregional group with map visible, several post types in the stream, and member avatars showing. Must feel alive — not a demo account with placeholder content.*

### Spacing

- 80px top padding
- 40px between headline block and card grid
- 20px gap between cards (grid gap)
- 48px between card grid and product screenshot
- 80px bottom padding

---

## Section 6 — Values & Trust

### Purpose

Now that the visitor has seen what Hylo does and who uses it, tell them how it's built. This is the "quiet flex" — brief, factual, and powerful because it follows concrete product value rather than leading with ideology.

### Layout

Full-width section. Background: Rhino (`#2C4059`) — this is the first dark section, creating a strong visual break and signaling a tonal shift. All text: white or white at varying opacity.

Content: centered, max-width 900px. 

**Section headline:**

> Built as a commons. Owned by no one. Stewarded by everyone.

Onest Bold, 28px, White. Centered.

**Body paragraph:**

> Hylo is open source, community-governed, and funded by the people who use it — not by ads, data sales, or venture capital. Your data belongs to you. Your community belongs to itself. We're building technology that serves coordination, not extraction.

Onest Regular, 16px, White at 85%. Centered. Max-width 640px. Line-height 1.6. 24px below headline.

### Trust Signals

Below the body text, a horizontal row of trust markers. Centered. 40px below body.

Each marker: icon (24px, Caribbean Green) + text (14px, white at 70%). Inline, separated by a subtle divider (1px vertical line, white at 20%, 20px tall). On mobile: 2×2 grid.

- 🔓 Open source
- 🚫 No ads, ever
- 🔒 Your data stays yours
- 🏆 Pizzigati Prize 2026 winner

*Design note: The Pizzigati Prize is from NTEN — it's a recognized award for open-source public interest software. Include the NTEN logo mark (small, white, beside the prize mention) if permission is available.*

### Optional: Brief Quote

If a strong testimonial exists from a community leader, place it here:

> "Quote from a community organizer about what Hylo made possible for their group."
> — Name, Role, Group Name

Onest Regular italic, 18px, white at 80%. Centered. Max-width 560px. Attribution: 14px, Caribbean Green.

*Sourcing note: prioritize a quote from Common Good Missoula, Float, or another group with a concrete outcome story. Not a quote about values — a quote about what happened.*

### Spacing

- 80px top padding
- 24px between headline and body
- 40px between body and trust signals
- 32px between trust signals and quote (if present)
- 80px bottom padding

---

## Section 7 — The Invitation

### Purpose

Close with specific, actionable entry points. Three paths for three levels of readiness. Warm but not pushy.

### Layout

Full-width section. Background: warm cream (same as hero — `hsl(39 20% 88%)`). Bookending the page with the same warmth it opened with.

Content: centered, max-width 800px.

**Section headline:**

> The coordination your community needs already exists. Come build with us.

Onest Bold, 28px, Rhino. Centered.

**Body:**

> Whether you're running a neighborhood mutual aid network or a global movement, Hylo grows with you. Start where you are.

Onest Regular, 16px, Rhino at 70%. Centered. Max-width 560px. 16px below headline.

### Three CTA Cards

Horizontally arranged (3 columns desktop, stacked mobile). 24px gap between cards.

Each card: White background, 4px border-radius, 24px padding, subtle shadow (`0px 4px 15px rgba(0, 0, 0, 0.08)`). Text centered within card.

**Card 1 — Bring Your Group**
- Icon: Group/people icon, 32px, Caribbean Green
- Title: "Bring your group" — Onest Medium, 18px, Rhino
- Body: "Set up your community on Hylo. Free to start, powerful to grow." — 14px, Rhino at 70%
- Button: "Get started" — Caribbean Green primary button, full card width

**Card 2 — Explore the Commons**
- Icon: Map/compass icon, 32px, Picton Blue (`#40A1DD`)
- Title: "Explore the commons" — Onest Medium, 18px, Rhino
- Body: "Browse the map. Find groups near you. See what's already happening." — 14px, Rhino at 70%
- Button: "Open the map" — Green-White variant button (white bg, green text, gray border)

**Card 3 — Join Hylo Commons**
- Icon: Heart/hands icon, 32px, Medium Purple (`#9883E5`)
- Title: "Support the commons" — Onest Medium, 18px, Rhino
- Body: "Join Hylo Commons. Starting at $1/month — or contribute your time and skills." — 14px, Rhino at 70%
- Button: "Join" — Green-White variant button

### Spacing

- 80px top padding
- 40px between headline block and CTA cards
- 80px bottom padding before footer

---

## Footer

Standard Hylo footer. Include:
- Logo (Hylo wordmark, Rhino color)
- Navigation links: About, Blog, Open Source (GitHub), Contact, Privacy, Terms
- Social links: appropriate platform icons
- "Built with care by Terran Collective" — small, warm, human

Background: White. Separator: 1px Athens Gray Dark (`#E1E5EA`) top border.

---

## Page-Level Design Notes

### Color Flow Through the Page

The page should feel like a journey through warmth → light → depth → warmth:

| Section | Background | Feeling |
|---------|-----------|---------|
| Hero | Warm cream `hsl(39 20% 88%)` | Welcome |
| Social Proof | White | Clean, trustworthy |
| Group Journey | Athens Gray `#FAFBFC` | Quiet, reflective |
| Map | Map imagery (blues/greens) with dark overlay | Grounded, alive |
| Toolkit | White | Clear, functional |
| Values | Rhino dark `#2C4059` | Serious, trustworthy |
| Invitation | Warm cream (matches hero) | Full circle, warm |

This alternation creates visual rhythm without jarring transitions. No two adjacent sections share the same background.

### Typography Hierarchy

| Element | Font | Size (desktop) | Size (mobile) | Weight | Color |
|---------|------|----------------|---------------|--------|-------|
| Section headline | Onest | 28px | 22px | Bold (700) | Rhino / White |
| Hero headline | Onest | 36px | 24px | Bold (700) | Rhino |
| Sublines | Onest | 16–20px | 15–17px | Regular (300) | Rhino 70% |
| Card titles | Onest | 16–18px | 16px | Medium (700) | Rhino |
| Card body | Onest | 14–15px | 14px | Regular (300) | Rhino 70% |
| Section labels | Onest | 14px | 12px | Medium, uppercase | Rhino 60% |
| Tags | Onest | 10px | 10px | Regular, uppercase | Varies |

### Responsive Strategy

- **Desktop (1024px+):** Full grid layouts, horizontal card rails, side-by-side map text
- **Tablet (768–1023px):** 2-column grids, map text still overlaid
- **Mobile (< 768px):** Single column stacks, map text above map (not overlaid), horizontal scroll on group cards rail, stacked CTAs

### Image Requirements

| Location | Type | Direction |
|----------|------|-----------|
| Group cards (Section 2) | Live data | Pull from Hylo API — real group avatars and metadata |
| Journey steps (Section 3) | Illustration or icon | Abstract, geometric, using post-type colors. Not stock photo. Not emoji. Custom illustration or clean SVG. |
| Map (Section 4) | Live embed or screenshot | The actual Hylo public map with watershed layers. Refresh screenshot monthly if static. |
| Product screenshot (Section 5) | Screenshot | A real, active Hylo group. Must show: stream with multiple post types, member avatars, group identity. Not a demo. |
| Trust section (Section 6) | Logo marks | Pizzigati/NTEN logo if available. Otherwise text only. |

### Animations (Progressive Enhancement)

All animations are optional and should degrade gracefully. No animation should block content visibility.

- **Hero:** Headline fades in on load (300ms, ease-out). CTA buttons slide up slightly (200ms delay, 300ms duration).
- **Group rail:** Smooth horizontal scroll with scroll-snap-type: x mandatory.
- **Journey steps:** Each step fades in as it enters viewport (IntersectionObserver, 200ms stagger). Connecting line draws downward on scroll.
- **Map:** Static image loads immediately; interactive map lazy-loads on scroll-into-view.
- **Toolkit cards:** Subtle fade-in on viewport entry (100ms stagger across grid).

### Performance Notes

- Above the fold (Hero + beginning of Social Proof) must load in < 1.5s on 3G
- Map section is the heaviest — lazy load aggressively
- Group card data can be cached and refreshed daily (not real-time)
- Product screenshot: optimize to < 200kb, serve WebP with JPEG fallback
- Total page weight target: < 1.5MB including map assets

---

## Copy Voice Guide (for this page)

**Do:**
- Use plain, warm language that a neighborhood organizer would nod at
- Name concrete actions (post, decide, fund, gather) over abstract nouns (coordination, infrastructure)
- Let the values show through what Hylo *does*, not through what Hylo *believes*
- Write sentences a person would actually say out loud

**Don't:**
- Use: polycrisis, metacrisis, prosocial, biomimetic, holonic, cosmolocal, ontological
- Use: unlock (under review), empower, revolutionize, reimagine, disrupt
- Use: "we believe" as a sentence opener more than once on the entire page
- Use: jargon that requires prior ideological alignment to parse

**The test:** Read every line aloud. If it sounds like a manifesto, rewrite it until it sounds like a person talking to a neighbor about something they built together.

---

## What This Page Does NOT Cover

The following deserve their own pages, linked from the homepage or navigation, but should not be on the homepage itself:

- Full competitive comparison (Slack, Discord, Mighty, etc.)
- The whitepaper / theory of change (link to it)
- Detailed AI roadmap
- Governance documentation
- Pricing / Pro tier details
- Team bios
- Full use case studies (Common Good Missoula, Float, etc. — tease on homepage, full story elsewhere)

---

## Open Questions for the Team

1. **Subline copy:** Keep "Unlock deeper trust..." or drop the subline entirely and let the group cards speak? Or a third option?
2. **Map embed vs. screenshot:** Technical feasibility of embedding the live public map in a performant, non-interactive mode?
3. **Group selection for the rail:** Who curates? How often does it refresh? Should it be hand-picked or algorithmically surfaced (most active, most members)?
4. **Product screenshot:** Which group is the best candidate to screenshot? Needs to look alive without exposing private content.
5. **Testimonial:** Do we have a strong, concrete quote from a community leader about outcomes (not values)?
6. **Pizzigati Prize logo:** Do we have permission to use the NTEN/Pizzigati mark?
7. **"Join Hylo Commons" CTA:** Is the commons membership product ready enough to link to, or should this be a waitlist/interest form for now?
