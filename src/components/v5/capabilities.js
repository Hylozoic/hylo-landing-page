import { tokens } from './tokens.js';

// Source: design_handoff_v5/design/shared.jsx (CAPABILITIES) +
// variation-e.jsx (VE_Toolkit's extended caps with photoHint/shotHint and the
// added Funding Rounds + Tracks & Actions cards). The original shared.jsx had
// a copy/paste mistake on the 'event' entry (title was duplicated from chat
// and body was just a placeholder); fixed here.
export const CAPABILITIES = [
  { key: 'chat',
    title: 'Conversations & Chat',
    color: tokens.discussBlue,
    body: 'Threaded discussions for depth. Chat rooms for speed. Cross-post to multiple groups at once — Hylo’s superpower.',
    photoHint: 'Neighbors around a kitchen table, mugs, notebooks, warm lamp light',
    shotHint: 'Threaded discussion with cross-posted chip to sibling groups' },

  { key: 'event',
    title: 'Events & Gatherings',
    color: tokens.eventRed,
    body: 'Bring your group together — in person and online. RSVPs, calendar sync, and reminders that actually land.',
    photoHint: 'Outdoor community potluck, string lights, kids and elders mingling',
    shotHint: 'Event page with RSVPs, location map, and calendar sync' },

  { key: 'exchange',
    title: 'Requests & Offers',
    color: tokens.requestTeal,
    body: 'Post what you need. Share what you can give. Every completed exchange is a deposit in your community’s trust account.',
    photoHint: 'Hands exchanging a toolbox at a tool-library pickup window',
    shotHint: 'Offer/request feed with map-pinned local exchanges' },

  { key: 'project',
    title: 'Projects',
    color: tokens.projectOrange,
    body: 'Coordinate real work with tasks, roles and timelines. Make contribution visible so effort is recognized, not invisible.',
    photoHint: 'Volunteers building a trail bridge, tools laid out, crew planning',
    shotHint: 'Project board with tasks, roles and a timeline' },

  { key: 'vote',
    title: 'Proposals & Decisions',
    color: tokens.proposalPurple,
    body: 'Polls, proposals and structured decision-making. When your group is ready to govern together, the tools are here.',
    photoHint: 'Assembly meeting with hands raised, facilitator at the front',
    shotHint: 'Proposal page with ranked-choice vote and comment threads' },

  { key: 'funding',
    title: 'Funding Rounds & Collective Budgeting',
    color: tokens.forest,
    body: 'Decide together how to spend shared money. Pool funds, vet requests, and allocate transparently as a group.',
    photoHint: 'Group around a wall of proposals with stickers for votes',
    shotHint: 'Funding round view with pooled balance, proposals and allocations' },

  { key: 'pin',
    title: 'Map & Place',
    color: tokens.forest,
    body: 'See your community spatially. Find what’s near you. Organize around the landscapes, watersheds and neighborhoods you share.',
    photoHint: 'Aerial of a watershed at dawn, small town nestled in river valley',
    shotHint: 'Map view with groups, events and offers pinned to places' },

  { key: 'tracks',
    title: 'Tracks & Actions',
    color: tokens.chatCyan,
    body: 'Create learning journeys, skill shares and classes. Members progress through actions together, at their own pace.',
    photoHint: 'Outdoor skill-share workshop, teacher demonstrating to a circle',
    shotHint: 'Track view with ordered actions, progress bars and a cohort panel' },
];
