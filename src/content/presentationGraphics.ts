export type PresentationGraphic = 'partnership' | 'tradeoffs' | 'frameworks' | 'timeline' | 'success' | 'challenges' | 'improvements' | 'learning';

// Slide-specific SVG copy lives here, independently of navigation, timer, and slide layout.
export const presentationGraphicLabels: Record<PresentationGraphic, string> = {
  partnership: 'MaisonLuxe and Al-Nour combine complementary contributions to create a 60-room retreat',
  tradeoffs: 'Five linked negotiation issues and the planned conditional exchanges between them',
  frameworks: 'Three cultural frameworks connected to practical negotiation actions and recorded decisions',
  timeline: 'Simulation timeline from opening positions through discussion to the final verbal checklist',
  success: 'Observed negotiation actions, recorded results, and cautious interpretations',
  challenges: 'Documented negotiation challenges, consequences, and underlying issues',
  improvements: 'Comparison of the original approach with practical next-time improvements',
  learning: 'Learning pathway from initial assumptions to future application',
};

export const presentationGraphicData = {
  partnership: {
    maisonLuxe: ['Brand + management expertise', 'Training + service standards'],
    alNour: ['Investment + property ownership', 'Local market knowledge'],
    outcome: '60-ROOM LUXURY RETREAT · 10 YEARS',
  },
  tradeoffs: {
    issues: ['Initial fee', 'Annual fee', 'Decision rights', 'Local adaptation', 'Opening date'],
    exchanges: [['Financial flexibility', '↔ timing / resources'], ['Owner oversight', '↔ daily authority']],
    guardrail: 'Earlier opening: only with readiness + resources · Core brand and safety remain protected',
  },
  frameworks: [
    ['Hofstede', 'Ask who approves key decisions', 'Al-Nour: budgets, spend + GM'],
    ['Hall', 'Clarify meaning; read back terms', 'Checklist read aloud + affirmed'],
    ['Erin Meyer', 'Adapt trust + disagreement approach', 'Joint review: food, design + service'],
  ],
  timeline: [
    { title: 'OPENING POSITIONS', lines: ['MaisonLuxe: Month 24;', 'higher fee request', 'Al-Nour: Month 18;', 'lower fee proposal'] },
    { title: 'DISCUSSION', lines: ['Fee + upfront options', 'Timing + governance trades', 'No interim figures treated as final'] },
    { title: 'VERBAL CHECKLIST', lines: ['$500k · 3% · Month 20', 'Milestones + delay process;', 'no acceleration charge', 'IN PRINCIPLE · NOT SIGNED'] },
  ],
  success: [
    ['Clarifying questions', 'Priorities surfaced', 'Cost, brand + local fit named'],
    ['Linked issue discussion', 'Broader package considered', 'Moved beyond fee-only positions'],
    ['Checklist read-back', 'Shared checklist affirmed', 'Shared record; ambiguity may remain'],
  ],
  challenges: [
    ['Acceleration charge waived', 'Month 20 accepted without planned fee', 'Conditional plan not maintained'],
    ['Opening moved 24 → 20', 'Earlier target; costs not quantified', 'Readiness + resource exposure'],
    ['Terms remained open', 'Milestones, KPIs, remedies, rules', 'Implementation detail unresolved'],
  ],
  improvements: {
    leftTitle: 'ORIGINAL APPROACH', rightTitle: 'NEXT TIME',
    left: ['Earlier opening depended on', 'resources + readiness.', 'Acceleration charge was waived;', 'details stayed partly open.'],
    right: ['Cost + authorise acceleration', 'before negotiating a waiver.', 'Trade only for valued commitments;', 'write gates, rules + remedies.'],
    footer: 'PRACTICAL RECOMMENDATIONS · NOT AGREED TERMS',
  },
  learning: [
    [100, 215, 'ASSUMPTION', 'Package bargaining', 'can balance interests'],
    [380, 108, 'EXPERIENCE', 'Governance + local', 'review options emerged'],
    [670, 215, 'REVISED VIEW', 'Frameworks guide', 'questions, not labels'],
    [900, 70, 'APPLICATION', 'Cost, authorise', '+ document conditions'],
  ],
} as const;
