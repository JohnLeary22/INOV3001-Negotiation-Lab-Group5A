export type DefenceRevisionCard = {
  topic: string;
  keywords: readonly string[];
  points: readonly string[];
};

export const defenceQuestions: readonly DefenceRevisionCard[] = [
  {
    topic: 'Hofstede — Individualism and power distance',
    keywords: ['Hofstede', 'individualism', 'collectivism', 'power distance', 'hierarchy', 'hierarchical', 'authority', 'cultural dimensions', 'decision-making', 'cultural scores'],
    points: [
      'Individualism: France 74, Saudi Arabia 48.',
      'Power distance: France 68, Saudi Arabia 72.',
      'Both sides may value authority and defined responsibilities.',
      'Outcome: Al-Nour controls major expenditure; MaisonLuxe protects brand and operations.',
    ],
  },
  {
    topic: 'Hall — High- and low-context communication',
    keywords: ['Hall', 'high context', 'low context', 'indirect communication', 'direct communication', 'contextual cues', 'implicit meaning', 'misunderstandings', 'communication style', 'polite responses'],
    points: [
      'Hall distinguishes high-context and low-context communication.',
      'France is not necessarily entirely low-context.',
      'Politeness or positive language does not guarantee agreement.',
      'Clarify concerns, summarise decisions and confirm them in writing.',
    ],
  },
  {
    topic: 'Erin Meyer — Trust and disagreement',
    keywords: ['Erin Meyer', 'Culture Map', 'trust', 'relationship-based trust', 'task-based trust', 'disagreement', 'disagreeing', 'building relationships', 'professional competence', 'interpersonal trust'],
    points: [
      'Meyer examines trusting, disagreeing, deciding and communicating.',
      'Build trust through relationships and demonstrated competence.',
      'Explain disagreements respectfully rather than rejecting proposals outright.',
      'Joint decisions on adaptations; core brand and safety standards protected.',
    ],
  },
  {
    topic: 'Trompenaars — Universalism and particularism',
    keywords: ['Trompenaars', 'universalism', 'particularism', 'universal rules', 'specific circumstances', 'cultural adaptation', 'brand consistency', 'local flexibility', 'standardisation', 'exceptions'],
    points: [
      'Universalism: consistent standards and rules.',
      'Particularism: circumstances and relationships influence decisions.',
      'MaisonLuxe needs brand consistency; Al-Nour needs local flexibility.',
      'Joint review of adaptations without compromising core standards.',
      'Supplementary framework, not a central framework in the submitted report.',
    ],
  },
  {
    topic: 'Cultural intelligence — Framework limitations',
    keywords: ['cultural intelligence', 'CQ', 'stereotypes', 'generalisations', 'assumptions', 'contradictory evidence', 'cultural differences', 'actual behaviour', 'reliability', 'cultural frameworks'],
    points: [
      'Cultural frameworks guide preparation, not predictions.',
      'Observe actual partner behaviour and ask clarifying questions.',
      'Adapt communication rather than reinforce stereotypes.',
      'A student simulation cannot prove national cultural patterns.',
    ],
  },
  {
    topic: 'Financial concessions — Was the deal successful?',
    keywords: ['financial concessions', 'negotiation success', 'successful outcome', 'initial fee', 'management fee', '500000', '3 percent', 'financial targets', 'compromise', 'better deal'],
    points: [
      'Agreement does not automatically mean successful negotiation.',
      'Significant financial and timing concessions favoured Al-Nour.',
      "Portugal offered 3.25% versus Saudi Arabia's 3%.",
      'Smaller Portugal project could be more manageable for MaisonLuxe.',
      'Personal view: would have seriously considered walking away.',
    ],
  },
  {
    topic: 'Integrative negotiation — Creating mutual value',
    keywords: ['integrative negotiation', 'win-win', 'mutual benefit', 'trade-offs', 'concessions', 'bargaining', 'shared interests', 'package deal', 'value creation', 'negotiation strategy'],
    points: [
      'Integrative negotiation focuses on underlying interests.',
      'Negotiate fees, authority, timing and adaptation together.',
      'Al-Nour gains financial oversight; MaisonLuxe retains operational control.',
      'Potential mutual benefit does not necessarily mean equal concessions.',
    ],
  },
  {
    topic: 'Time — Opening date and acceleration payment',
    keywords: ['opening date', 'timeline', 'month 20', 'month 24', 'acceleration', 'accelerated opening', '300000', 'waived payment', 'deadlines', 'time pressure'],
    points: [
      'Preferred opening: month 24.',
      'Conditional concession: month 20 plus US$300,000.',
      'Actual outcome: month 20, acceleration fee waived.',
      'Improvement: negotiate reciprocal value and verify operational feasibility.',
    ],
  },
  {
    topic: 'BATNA — Portugal versus Saudi Arabia',
    keywords: ['BATNA', 'Portugal', 'alternative deal', 'fallback', 'walk away', 'reservation point', 'outside option', 'five-year contract', 'opportunity cost', 'Saudi versus Portugal'],
    points: [
      'Personal preference: Portugal over the final Saudi package.',
      'Portugal: five years, 35 rooms, 3.25% management fee.',
      'Saudi Arabia: ten years, 60 rooms, 3% management fee.',
      'Saudi agreement involved substantial concessions and greater operational commitments.',
      'A credible BATNA gives negotiators confidence to reject an unfavourable agreement.',
    ],
  },
  {
    topic: 'Brand control — Local adaptation',
    keywords: ['brand identity', 'brand standards', 'local adaptation', 'Saudi culture', 'operational control', 'joint committee', 'guest experience', 'brand protection', 'decision rights', 'localisation'],
    points: [
      'Protect brand identity, service quality, training and safety.',
      'Allow Saudi adaptations to food, interiors and guest services.',
      'Joint committee reviews proposed changes.',
      'Local flexibility must not override essential brand standards.',
    ],
  },
];
