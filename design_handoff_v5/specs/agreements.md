# Hylo Agreements Page Redesign Spec

**Version:** 1.0 — April 2026
**Companion to:** hylo-homepage-spec.md, hylo-about-page-spec.md, hylo-bring-your-group-spec.md
**Purpose:** A redesigned agreements page that communicates Hylo's values, platform agreements, and code of conduct in plain, warm language. The substance of the current page is strong — the values are real, the code of conduct is thorough, the enforcement structure is well-designed. The work here is primarily one of voice and structure: making the same commitments legible to someone who doesn't already share the vocabulary.

---

## What This Page Needs to Do

This is one of the few pages where Hylo *should* be explicit about values. The homepage earns trust through product. The About page earns trust through story. This page earns trust through clarity about how the community operates — what's expected, what's protected, and what happens when things go wrong.

The current page does this but wraps it in insider language ("prosocial coordination," "liberatory practices," "emergence") and structures the values as abstract philosophical positions with "related" concept lists. The result reads more like a values manifesto than a set of working agreements people can actually orient around.

The redesign keeps all six values but grounds each one in what it means *in practice on the platform*. It tightens the code of conduct into something someone would actually read before joining. And it preserves the graduated enforcement structure, which is genuinely well-designed.

### Key structural changes:
1. **Values section:** Shorter, plainer, practice-oriented. Drop the "Related:" keyword lists. Keep commitments but make them concrete.
2. **Platform agreements:** Simplify from six pledges to fewer, clearer commitments that feel like a genuine social contract, not a loyalty oath.
3. **Code of conduct:** Reorganize around what's encouraged vs. what's not allowed, with less philosophical framing and more behavioral specificity.
4. **Enforcement:** Keep the graduated structure (Correction → Warning → Temporary Ban → Permanent Ban). It's good. Just tighten the language.
5. **Public commons section:** Keep the examples of good vs. bad public posts — they're useful and concrete.

---

## Section 1 — Page Header

### Layout

Full-width. Warm cream background (`hsl(39 20% 88%)`). Content centered, max-width 720px. Padding: 100px top, 60px bottom.

### Content

**Page title:**

> How we agree to be together

Onest Bold, 36px, Rhino (`#2C4059`).

**Lead paragraph:**

> Hylo is a shared space. Like any shared space, it works because the people in it agree on a few things: how to treat each other, what to do when something goes wrong, and what kind of community we're building together. These are our values, our agreements, and our code of conduct. They apply to everyone — including us.

Onest Regular, 18px, Rhino at 80%. Line-height 1.6. Max-width 640px.

*Design note: "How we agree to be together" is warmer and more specific than "Clear agreements are essential to prosocial coordination." It says the same thing in language anyone would understand.*

### Spacing

- 100px top (below nav)
- 24px between title and lead paragraph
- 60px bottom

---

## Section 2 — Values

### Purpose

The six values are real and well-chosen. The redesign preserves all six but rewrites each to lead with plain-language meaning and follow with concrete platform behavior. The "Related:" keyword lists and the abstract framing are removed. The commitments are kept but tightened.

### Layout

Full-width. White background. Content max-width 800px, centered.

**Section header:**

> Our values

Onest Bold, 28px, Rhino.

**Section intro:**

> These values guide how we build Hylo and how we ask everyone on the platform to show up. They're not aspirational slogans — they're working principles we hold ourselves to and invite you to hold us to as well.

Onest Regular, 16px, Rhino at 75%. Max-width 640px. 16px below header.

### Value Cards

Each value is a distinct block. Stacked vertically, full content width. Separated by 40px vertical spacing. Each block has:

- **Value name** — Onest Bold, 20px, Rhino
- **Plain-language definition** — Onest Regular, 16px, Rhino at 80%. 1–2 sentences. 8px below name.
- **Our commitments** — A short list of 2–3 specific commitments. Onest Regular, 15px, Rhino at 70%. Each commitment preceded by a small Caribbean Green checkmark icon (12px). 16px below definition. 8px between commitments.

Left accent: 4px solid line in Caribbean Green at 30%, running the full height of each value block. 16px left padding from the line.

---

### Value 1 — Stewardship

**Name:** Stewardship

**Definition:**

> We treat Hylo — and the communities, data, and relationships on it — as shared resources to be cared for, not owned or exploited. We build for the long term, not for quick returns.

**Commitments:**

> ✓ Hylo's development is guided by its purpose, not profit. We will never sell user data or optimize for addictive engagement.

> ✓ We are building toward a governance structure where the people who use Hylo have real authority over how it's run.

> ✓ We communicate openly and honestly with our users about decisions that affect them.

---

### Value 2 — Co-Creation

**Name:** Co-Creation

**Definition:**

> Hylo is built in partnership with the communities that use it. We listen first, design together, and make what we build available to everyone on the platform.

**Commitments:**

> ✓ Every major feature is designed through participatory processes with real groups working on real problems.

> ✓ Our code is open source. We use open standards and protocols wherever possible so Hylo can work alongside other tools.

> ✓ Before building something new, we look for existing solutions that already work and integrate them.

---

### Value 3 — Wellbeing

**Name:** Wellbeing

**Definition:**

> Technology shapes behavior. Hylo is designed to support the health of its members and their communities — not to capture attention, generate anxiety, or optimize for engagement at the expense of people's time and peace of mind.

**Commitments:**

> ✓ We design for meaningful interaction, not compulsive use. No dark patterns, no infinite scroll, no manufactured urgency.

> ✓ We take responsibility for the impact our technology has on the people and communities using it.

> ✓ We treat the people on Hylo as whole human beings, not "users" to be optimized.

---

### Value 4 — Justice

**Name:** Justice

**Definition:**

> Coordination infrastructure is never neutral. It either concentrates power or distributes it. We build Hylo to support equity, repair harm, and reduce structural injustice — in how the platform works, in who has voice, and in what kinds of organizing it makes possible.

**Commitments:**

> ✓ We build inclusive and accessible digital spaces. We follow [Design Justice principles](https://designjustice.org/principles-overview).

> ✓ We learn from Indigenous knowledge systems and historically marginalized communities, with respect and accountability, not extraction.

> ✓ We work toward equitable compensation and recognition among everyone who builds and maintains Hylo.

*Design note: Renamed from "Liberation" to "Justice." The substance is identical. "Liberation" is movement-specific vocabulary that carries a particular political charge for some audiences. "Justice" communicates the same commitment in language that's broadly legible. The team should discuss this rename — it's a real editorial choice, not a cosmetic one.*

---

### Value 5 — Adaptation

**Name:** Adaptation

**Definition:**

> We expect to get things wrong and learn from it. Hylo is a living system — we build in feedback loops, listen to what isn't working, and evolve in response to real use rather than rigid plans.

**Commitments:**

> ✓ We incorporate feedback from communities into every phase of our design process.

> ✓ We move at the speed of trust — making sure there's always time for care, relationship, and doing things well.

> ✓ We hold Hylo as something that grows and changes. Governance, features, and practices are all subject to revision when they need to be.

---

### Value 6 — Agency

**Name:** Agency

**Definition:**

> People and groups should control their own experience, their own data, and their own participation. Hylo doesn't use opaque algorithms, doesn't harvest attention, and doesn't lock communities in.

**Commitments:**

> ✓ No black-box algorithms. You control your notifications, your feed, and what you see.

> ✓ We never share personal data without informed consent. See our [Privacy Policy].

> ✓ We work to make Hylo usable across ability, language, culture, and bandwidth — because agency requires access.

---

### Spacing

- 60px top
- 16px between section header and intro
- 32px between intro and first value
- 40px between values
- 60px bottom

---

## Section 3 — Platform Agreements

### Purpose

The current page has six pledge-style agreements that each map to specific values. They're thoughtful but they read like a loyalty oath — which creates friction at exactly the moment you want to create welcome. The redesign consolidates to four clear, behavioral commitments and frames them as a mutual understanding rather than a pledge.

### Layout

Full-width. Athens Gray background (`#FAFBFC`). Content max-width 720px, centered.

### Content

**Section header:**

> When you join Hylo, here's what we agree on.

Onest Bold, 24px, Rhino.

**Intro:**

> These aren't terms buried in a legal document. They're a simple social contract between you and everyone else on the platform. By using Hylo, you're agreeing to these four things:

Onest Regular, 16px, Rhino at 75%. 16px below header.

### The Four Agreements

Each agreement is a card-style block. White background, 4px border-radius, 20px padding, subtle shadow (`0px 4px 15px rgba(0, 0, 0, 0.05)`). Full content width. 16px gap between cards.

Each card:
- **Number** — Onest Bold, 32px, Caribbean Green at 40%. Left-aligned.
- **Agreement text** — Onest Medium, 16px, Rhino. Right of number (or below on mobile).

**1.**

> **Contribute, don't just consume.** Hylo works because people show up for each other — sharing ideas, responding to requests, joining projects. Bring what you have. Ask for what you need.

**2.**

> **Be kind and constructive.** Talk to people the way you would face to face. Respect differing viewpoints. When you disagree, stay curious. When something goes wrong, take responsibility.

**3.**

> **Respect the space.** Follow the code of conduct below. Honor your group's agreements. Flag harmful content when you see it. Take care with other people's stories and information.

**4.**

> **Help make it better.** If something isn't working — in your group or on the platform — say so. Suggest improvements. Report bugs. This is a commons, and it gets better when everyone tends it.

### Spacing

- 60px top
- 16px between header and intro
- 24px between intro and first card
- 16px between cards
- 60px bottom

---

## Section 4 — Code of Conduct

### Purpose

The code of conduct is the most important section on this page. The current version is thorough and well-structured but buries practical guidance under philosophical framing ("Embodying Co-Creation on Hylo," "Liberatory Practices"). The redesign keeps the substance — all the behavioral examples are genuinely useful — but reorganizes it into two clear halves: what we encourage and what we don't allow.

### Layout

Full-width. White background. Content max-width 800px, centered.

**Section header:**

> Code of conduct

Onest Bold, 28px, Rhino.

**Intro:**

> This code of conduct applies everywhere on Hylo — in groups, in direct messages, in the public commons. Group stewards may add their own agreements on top of these, but these are the baseline.

Onest Regular, 16px, Rhino at 75%. 16px below header.

---

### Part A — What Good Looks Like

**Subheader:**

> How to be a good community member

Onest Medium, 20px, Rhino. 32px below intro.

**Intro line:**

> None of this is mandatory (except treating people with respect). But these are the kinds of behaviors that make Hylo communities thrive:

Onest Regular, 15px, Rhino at 70%. 12px below subheader.

### Behavior Categories

Each category is a block with a header and 3–5 concrete examples. Categories are separated by 32px. Examples are separated by 8px.

Category header: Onest Medium, 16px, Rhino. Left accent: 3px solid, colored by the associated post-type color at 40%.

Example text: Onest Regular, 14px, Rhino at 70%. Each preceded by a small dot (6px, matching accent color).

**Take care of each other**
Accent: Teal (Requests/Offers color)

> · Post requests when you need help. Post offers when you can give it.
> · Reach out to someone who might be struggling — a check-in goes a long way.
> · Communicate the way you would in person: kind, direct, and constructive.
> · Take breaks from screens. Move your body. This platform is a tool, not a destination.

**Build together**
Accent: Projects orange

> · Start or join a project in service to your group's goals.
> · Comment on others' posts — build on their ideas rather than just scrolling past.
> · Co-host an event. Organize a meetup. Move things into the real world when you can.
> · Connect your group with other aligned groups on Hylo for cross-group collaboration.

**Govern well**
Accent: Proposals purple

> · Follow through on commitments you make to your group.
> · Participate in proposals and decisions when they affect you.
> · If you see something that isn't working, name it constructively. Suggest a better approach.
> · If your group's purpose or agreements need to evolve, help make that happen through legitimate process.

**Help Hylo grow**
Accent: Caribbean Green

> · Report bugs through the Feedback & Support menu.
> · Join the [Building Hylo](https://www.hylo.com/public/groups/group/building-hylo) group and share ideas for the platform.
> · Contribute code, design, research, or writing if you're able.
> · Consider supporting Hylo financially — every contribution stays in the project.

---

### Part B — What's Not OK

**Subheader:**

> What is not allowed on Hylo

Onest Medium, 20px, Rhino. 48px below last behavior category.

**Intro line:**

> These rules apply everywhere on the platform. If you see content that violates them, flag it immediately. Group stewards and Hylo platform stewards will respond.

Onest Regular, 15px, Rhino at 70%. 12px below subheader.

### Violation Categories

Each category is a block with a header and specific rules. Category header: Onest Medium, 16px, Rhino. Left accent: 3px solid, Amaranth/Error red (`#EE4266`) at 40%.

Rules: Onest Regular, 14px, Rhino at 75%. Each preceded by a small × (12px, error red at 60%). 8px between rules.

**Harassment and abuse**

> × No threats, intimidation, pressure, stalking, or unwanted attention — public or private.
> × No characterizing or mocking people based on inherent traits: race, ethnicity, gender, gender identity, sexual orientation, disability, national origin, or medical condition.
> × No inciting, threatening, or glorifying violence against any person or group.
> × No promoting or encouraging suicide or self-harm.

**Privacy violations**

> × No publishing someone's private information (address, contact details, photos) without their explicit consent.
> × No sharing intimate images or videos of someone without their consent.
> × No threatening to expose private information.

**Manipulation and deception**

> × No impersonating individuals, groups, or organizations.
> × No using Hylo to manipulate elections or civic processes, suppress participation, or spread deliberate misinformation about how to participate.
> × No artificial amplification, spam, or platform manipulation.
> × No accessing other people's accounts or data without authorization.

**Illegal activity**

> × No facilitating illegal transactions or promoting illegal activities.
> × Zero tolerance for child sexual exploitation of any kind.
> × No violating copyright or trademark.

**Spam and promotion**

> × No advertising, promotion, or link-dropping without a genuine invitation for others to participate.
> × No cross-posting promotional content into groups or the public commons without adding real value.

---

### The Public Commons — Additional Standards

**Subheader:**

> Additional guidelines for public posts

Onest Medium, 16px, Rhino. 40px below last violation category.

**Body:**

> Hylo has a public stream and a Group Explorer where anyone can discover communities and conversations. To keep this space useful and collaborative, public posts should include a genuine invitation for others to participate. This space is for cross-pollination, not promotion.

Onest Regular, 15px, Rhino at 75%. 12px below subheader.

**Examples — side by side:**

Two-column layout (stacked on mobile). Left column: "Good examples." Right column: "Not OK."

Left column background: pale green tint (`rgba(0, 199, 157, 0.06)`). Right column background: pale red tint (`rgba(238, 66, 102, 0.06)`). Both: 4px border-radius, 16px padding.

Column header: Onest Medium, 14px, uppercase, 0.6px tracking. Left: Caribbean Green. Right: Amaranth (`#EE4266`).

**Good examples:**

> "I'm hosting a permaculture workshop — what topics are you most interested in learning about?"

> "Here's an article I found about watershed governance. What do you think about this approach?"

> "I'm offering a legal clinic for cooperatives. Can you share this with co-ops in your community?"

**Not OK:**

> "Rereve Health Family Healthcare is a patient-focused medical facility. Call now!"

> "Taxi service to Prague! Taxi service to Berlin!"

> [Video title] [Video link] [Hashtags] [No other commentary]

Each example: Onest Regular, 14px, Rhino at 70%. Italic. 12px between examples.

*Design note: These examples are borrowed directly from the current page because they're excellent — specific, funny, and immediately clarifying. Keep them.*

### Spacing for Section 4

- 60px top
- 16px between header and intro
- 32px between intro and Part A
- 32px between behavior categories
- 48px between Part A and Part B
- 32px between violation categories
- 40px between violations and public commons section
- 60px bottom

---

## Section 5 — Enforcement

### Purpose

The graduated enforcement structure on the current page is well-designed and draws from the Contributor Covenant, which is widely respected. Keep the structure, tighten the language, and make the escalation path immediately legible.

### Layout

Full-width. Athens Gray background (`#FAFBFC`). Content max-width 800px, centered.

### Content

**Section header:**

> What happens when agreements are broken

Onest Bold, 24px, Rhino.

**Intro:**

> We believe in graduated response — matching the consequence to the severity and pattern of the behavior. The goal is always to repair harm and restore trust, not to punish. But some behaviors require removal to protect the community.

Onest Regular, 16px, Rhino at 75%. 16px below header.

**Who enforces:**

> In groups, stewards are responsible for enforcing the code of conduct within their space. For the public commons and platform-level issues, Hylo's platform stewards handle enforcement. Anyone can flag content that violates these agreements, and all reports are reviewed promptly.

Onest Regular, 15px, Rhino at 70%. 16px below intro.

### Graduated Response Steps

Four steps, presented as a horizontal escalation bar on desktop (stacked on mobile). Each step is a card that gets progressively darker/more serious in visual weight.

Card layout: equal width within a 4-column grid. 12px gap. 4px border-radius. 20px padding.

**Step 1 — Correction**

- Top accent: 3px solid Warning Yellow (`#FFB949`)
- Background: White
- Title: "Correction" — Onest Medium, 16px, Rhino
- When: "Inappropriate language or behavior that's unwelcome but not severe." — Onest Regular, 13px, Rhino at 60%
- What happens: "A private message from a steward explaining what happened and why it's not OK. A public apology may be requested." — Onest Regular, 14px, Rhino at 75%

**Step 2 — Warning**

- Top accent: 3px solid Warning Yellow (`#FFB949`)
- Background: White
- Title: "Warning"
- When: "A single incident that's more serious, or a repeated minor issue."
- What happens: "A formal warning with clear consequences for continued behavior. The person is put on notice."

**Step 3 — Temporary Ban**

- Top accent: 3px solid Amaranth (`#EE4266`) at 60%
- Background: White
- Title: "Temporary Ban"
- When: "Serious violations or a sustained pattern of harmful behavior."
- What happens: "Temporary removal from the community or platform for a set period. A mediated conversation or conflict resolution process may be offered."

**Step 4 — Permanent Ban**

- Top accent: 3px solid Amaranth (`#EE4266`)
- Background: White
- Title: "Permanent Ban"
- When: "A pattern of violations, a single very serious violation, or refusal to participate in accountability."
- What happens: "Permanent removal from the community or platform."

### Attribution

> This enforcement structure is adapted from the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct.html), version 2.1.

Onest Regular, 13px, Rhino at 50%. 32px below the step cards.

### Contact

> If you experience or witness a violation, flag the content directly on the platform. You can also reach Hylo's stewardship team at [hello@hylo.com](mailto:hello@hylo.com).

Onest Regular, 14px, Rhino at 60%. 16px below attribution.

### Spacing

- 60px top
- 16px between header and intro
- 16px between intro and "who enforces"
- 32px between "who enforces" and step cards
- 32px between step cards and attribution
- 60px bottom

---

## Section 6 — Closing

### Layout

Full-width. Warm cream background (`hsl(39 20% 88%)`). Content centered, max-width 600px. Padding: 60px top, 80px bottom.

### Content

> These agreements are a living document. As Hylo grows and the communities on it evolve, so will these commitments. If you think something here should change, [tell us](mailto:hello@hylo.com) — or better yet, start a discussion in the [Building Hylo](https://www.hylo.com/public/groups/group/building-hylo) group.

Onest Regular, 16px, Rhino at 70%. Centered. Line-height 1.6.

*Design note: This replaces "There is a place set for you at our table" with something more concrete — an actual invitation to participate in evolving the agreements themselves, which is more consistent with the co-creation value than a warm but vague closing line.*

---

## Page-Level Design Notes

### Color Flow

| Section | Background | Tone |
|---------|-----------|------|
| Header | Warm cream | Welcome |
| Values | White | Clear, principled |
| Agreements | Athens Gray | Concrete, warm |
| Code of Conduct | White | Structured, legible |
| Enforcement | Athens Gray | Serious, fair |
| Closing | Warm cream | Full circle |

### What Changed from the Current Page

| Current | Redesign | Reason |
|---------|----------|--------|
| "Clear agreements are essential to prosocial coordination" | "How we agree to be together" | Plain language, same meaning |
| "Liberation" as value name | "Justice" | Broader legibility without losing substance. Team should discuss. |
| "Related: responsibility, respect, integrity..." keyword lists | Removed | Added complexity without clarity. The commitments say it better. |
| Six pledge-style platform agreements | Four plain behavioral agreements | Less performative, more actionable |
| "Embodying Co-Creation on Hylo" / "Liberatory Practices" as category names | "Build together" / behavior-specific headers | Plain, scannable, no jargon |
| Full cultural philosophy framing each section | Brief intro lines | The values section carries the philosophy. The code of conduct is for practical guidance. |
| "I pledge to..." language | "When you join Hylo, here's what we agree on" | Mutual agreement feels different from a pledge. Less ceremonial, more honest. |

### What Was Preserved

- All six values and their core substance
- All behavioral examples (both encouraged and prohibited)
- The public commons examples (they're great)
- The full graduated enforcement structure from Contributor Covenant
- The email contact path and flagging mechanism
- The emphasis on stewards as local enforcement
- The attribution to Contributor Covenant and related sources

### Typography Consistency

Same system as homepage and about page. All body text in Onest Regular/Medium. No decorative fonts. The page should feel clean and legible — this is reference material people may return to.

### Mobile Considerations

- Values: full-width stacked blocks, same as desktop
- Agreements: cards stack vertically
- Code of conduct examples: single column
- Good/Not OK comparison: stacks vertically (good above, not OK below)
- Enforcement steps: stack vertically with step number prominent

---

## Open Questions

1. **"Liberation" → "Justice" rename:** This is a substantive editorial choice. "Liberation" carries specific movement meaning that some team members may feel strongly about preserving. "Justice" communicates the same commitment in broader language. Both are defensible. The team should make this call explicitly.
2. **Number of platform agreements:** Consolidated from six to four. The current six each map to a specific value, which is elegant but creates a lot of text. Four feels more scannable while covering the same ground. Team should review whether anything essential was lost.
3. **Behavioral examples:** The current page has extensive behavioral guidance under each value ("Practicing Stewardship on Hylo," "Embodying Co-Creation on Hylo," etc.). The redesign reorganizes these by action type rather than by value. Some specific examples were trimmed. Team should verify that nothing critical was cut.
4. **The pledge language:** The current platform agreements use "I pledge to..." which feels ceremonial. The redesign frames it as mutual agreement ("here's what we agree on"). This is a real tonal choice. Some communities find pledge language empowering; others find it performative. The team should weigh this against how it reads to a newcomer arriving from Facebook Groups.
5. **Length of enforcement section:** Could be shorter — but enforcement clarity is important for community trust. Keeping it thorough is the right call even if the page is long.
6. **Legal relationship:** This page is separate from Terms of Use and Privacy Policy (which have their own pages). The intro should clarify that relationship — these are social agreements, not legal terms, though they inform moderation decisions.
