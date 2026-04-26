// Shared design tokens — Hylo homepage redesign
// Updated primary: #087736 (forest green, replaces Caribbean Green)

const HYLO = {
  // Backgrounds
  cream: '#F1EBDE',         // warm cream (hero, invitation)
  creamSoft: '#F7F2E8',
  white: '#FFFFFF',
  athensGray: '#FAFBFC',
  athensDark: '#E1E5EA',
  rhino: '#2C4059',         // text / dark sections
  rhinoSoft: '#3A4D65',

  // Primary accent (UPDATED)
  forest: '#087736',        // new primary green
  forestDeep: '#065F2B',
  forestLight: '#E8F3EC',
  forestTint: '#D6EADE',

  // Legacy accent options (kept for tweaks)
  caribbean: '#0DC39F',
  gossamer: '#0A9682',

  // Post-type colors
  discussBlue: '#00A3E3',
  discussBlueSoft: '#D6EEF8',
  eventRed: '#FE4850',
  eventRedSoft: '#FDE1E2',
  requestTeal: '#00C79D',
  requestTealSoft: '#D1F1E8',
  projectOrange: '#FC8000',
  projectOrangeSoft: '#FEE4CC',
  proposalPurple: '#664BA5',
  proposalPurpleSoft: '#E1DBEF',
  chatCyan: '#5FD2FF',

  ghost: '#CCD1D7',
  smoke: '#6B7280',
};

// Make available globally for other babel scripts
window.HYLO = HYLO;
