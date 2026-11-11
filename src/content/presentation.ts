export type DealColumn = { title: string; lines: string[] };
export type PresentationSlide = {
  title: string;
  label: string;
  points: string[];
  visual: string;
  comparison?: DealColumn[];
  evidence: string;
  script: string;
  cue: string;
  seconds: number;
};

// The submitted report documents the plan; the Week 11 summary documents the actual outcome.
// Keep internal reservation figures and fallback-project details out of the public deck.
export const presentationSlides: PresentationSlide[] = [
  {
    title: 'The opportunity & our goal', label: '01 · SCENARIO',
    points: [
      'MaisonLuxe: first Middle East hotel, sustainable returns, protected luxury service.',
      'Al-Nour: local guest fit, project control and disciplined costs.',
      'A proposed 10-year partnership for a 60-room Saudi luxury retreat.'
    ],
    visual: 'FRANCE  +  SAUDI ARABIA  →  SHARED HOTEL',
    evidence: 'Group 5A report, §1, printed p. 1; official Assessment 3 brief, Component 3, printed p. 3. Fictional teaching case.',
    cue: 'Name the shared opportunity before describing the disagreement.',
    seconds: 75,
    script: `Good morning. We represent MaisonLuxe Hospitality, a French boutique-hotel company. We negotiated with Al-Nour Ventures, a Saudi property owner and financier, over a proposed ten-year brand and management partnership for a 60-room luxury retreat in Saudi Arabia. MaisonLuxe would bring its brand, operating expertise, training and service standards. Al-Nour would finance and own the property and bring local project knowledge.\n\nOur interests were different, but not incompatible. We wanted MaisonLuxe’s first Middle East hotel, reasonable returns and protection of its luxury service and brand. Al-Nour wanted cost discipline, influence over the project and a retreat that fits Saudi guests. Our goal was to find a workable balance, not simply the highest fee. We needed to resolve five linked issues: the upfront payment, annual management fee, decision rights, local adaptation, and opening timing. That shared problem shaped our plan, which we will explain next.`,
  },
  {
    title: 'A package, not five arguments', label: '02 · PLAN BEFORE WEEK 11',
    points: [
      'Our plan set opening proposals and preferred fee targets before the simulation.',
      'Month 24 preferred; an earlier opening depended on extra resources and construction readiness.',
      'Trade across fees, authority, adaptation and timing; protect core brand and safety.'
    ],
    visual: 'INTERESTS  →  OPTIONS  →  CONDITIONAL PACKAGE',
    evidence: 'Group 5A report, §§2–4 and 9, printed pp. 1–3, 6; Fisher, Ury & Patton (2011); Brett (2014).',
    cue: 'Make clear these are pre-simulation positions, not the final terms.',
    seconds: 105,
    script: `Before Week 11, our plan was integrative: understand interests, then discuss linked terms as a package. We had opening fee proposals and lower preferred targets for upfront and annual fees. Month 24 was preferred. An earlier opening depended on extra resources and construction readiness. Our internal fallback figures and alternative stayed private.\n\nWe planned to exchange some financial flexibility or owner oversight for clear operating authority and protected brand and safety standards. In negotiation terms, an interest is why a request matters; a position is the requested term. The five issues were linked: changing the opening date affected resources, while budget oversight connected with daily operating authority. Fisher, Ury and Patton, and Brett inform this approach. Next, we will show how our cultural frameworks shaped questions and decisions without treating culture as a fixed script.`,
  },
  {
    title: 'Frameworks as practical lenses', label: '03 · CULTURE',
    points: [
      'Hofstede: check authority, relationships and process; do not infer individual behaviour.',
      'Hall: clarify words and context; France is not simply “low-context.”',
      'Meyer: adapt communication, trust and disagreement to the people in the room.'
    ],
    visual: 'ASK ABOUT AUTHORITY  ·  LISTEN TO LOCAL PRIORITIES  ·  READ BACK TERMS',
    evidence: 'Group 5A report, §§6–8, printed pp. 4–6; Hofstede et al. (2010); Hall (1976); Meyer (2014); RMIT, EURAXESS France, Tufts University and The Culture Factor.',
    cue: 'Distinguish what the frameworks suggested from what the simulation record says happened.',
    seconds: 90,
    script: `We used Hofstede, Hall and Erin Meyer as lenses for preparation, not as explanations of a person’s behaviour. Hofstede prompted us to check decision authority and relationships. In the actual terms, Al-Nour approved budgets, major expenditure and the general manager; MaisonLuxe led daily operations and retained final approval over core brand and safety standards. That is a negotiated allocation of responsibility. We cannot claim it happened because of national culture.\n\nHall reminded us to check meaning rather than assume that a positive or polite response was final. The summary records that Al-Nour read the final checklist aloud and MaisonLuxe affirmed it. Meyer’s work on trust and disagreement is relevant to the joint committee for Saudi food, design and guest-service adaptations. These are concrete choices and recorded outcomes. The summary also reports clarifying questions and respectful restatements, but it does not prove that a national framework caused them. The other participants were students role-playing a fictional company. We now turn from the plan to the actual negotiation.`,
  },
  {
    title: 'What happened: from opening positions to terms', label: '04 · WEEK 11 OUTCOME',
    points: [
      'Verbal agreement in principle — not a signed contract.',
      'Governance: Al-Nour approves budgets, major spend and GM; MaisonLuxe leads daily operations, staffing/training and core brand/safety.',
      'Joint committee for local adaptation; reporting agreed in principle.'
    ],
    visual: 'OPENING POSITIONS  →  DISCUSSION  →  VERBAL TERMS IN PRINCIPLE',
    comparison: [
      { title: 'Opening positions', lines: ['MaisonLuxe: higher fee request · Month 24', 'Al-Nour: lower fee proposal · Month 18'] },
      { title: 'Discussed', lines: ['Several fee and upfront options were considered', 'Teams explored timing and governance trades'] },
      { title: 'Final verbal checklist', lines: ['US$500k total upfront · 3% of total annual revenue', 'Month 20 subject to construction milestones and a delay-resolution process', 'No separate acceleration charge'] },
    ],
    evidence: 'Week 11 Simulation Summary, §§1–3, 5 Nov 2026. Final checklist read aloud by Al-Nour and affirmed by MaisonLuxe; verbal, not signed.',
    cue: 'Not signed. Middle numbers were just discussed.',
    seconds: 120,
    script: `- starting points were far apart: MaisonLuxe asked higher fees / month 24; Al-Nour started lower / month 18\n- several fee and upfront options came up, not all final\n- end checklist read aloud by Al-Nour, we affirmed it\n- final verbal terms in principle: US$500k total upfront, 3% of total annual hotel revenue, Month 20\n- no separate acceleration charge. Not signed\n- Al-Nour: budgets, major spend, GM approval; MaisonLuxe recommends GM, runs day-to-day, staffing/training, final core brand + safety\n- joint committee local food/design/guest service; regular reports in principle\n- dates, remedies, KPIs, committee vote rules, contract wording still open`,
  },
  {
    title: 'What worked well', label: '05 · EVALUATION',
    points: [
      'Clarifying questions surfaced cost, brand and local-identity priorities.',
      'The teams moved from single fee positions to a package of money, authority and timing.',
      'Joint adaptation review and a read-back checklist supported shared understanding.'
    ],
    visual: 'CLARIFY  →  LINK ISSUES  →  CONFIRM',
    evidence: 'Week 11 Simulation Summary, §§3–5; Group 5A report, §§4 and 8, printed pp. 3 and 5–6; Fisher et al. (2011).',
    cue: 'Process worked in some ways; not proof the deal makes money.',
    seconds: 90,
    script: `- summary says both sides asked clarifying questions, recognised money pressure\n- moved off fee-by-fee arguing toward package: fees + who decides + ops + opening\n- joint committee for Saudi food, design, guest services — a way to handle local fit and brand standards together\n- Al-Nour read final checklist; MaisonLuxe affirmed. helped leave same record\n- useful process, clearer understanding maybe; doesnt prove profit or that every mix-up avoided`,
  },
  {
    title: 'What did not work well', label: '06 · CRITICAL REFLECTION',
    points: [
      'Our fee terms moved below our preferred targets; opening moved from Month 24 to Month 20.',
      'We waived the planned acceleration charge — a departure from our conditional plan.',
      'Staffing costs were not quantified; milestones, KPIs, delay remedies and committee rules remain open.'
    ],
    visual: 'MONTH 20 ACCEPTED  ·  EXTRA ACCELERATION FEE WAIVED',
    evidence: 'Week 11 Simulation Summary, §§3–4; compare Group 5A report, §§2–4 and 9, printed pp. 1–3, 6. The summary does not quantify acceleration costs or establish motive.',
    cue: 'Say it straight: waived fee was a weakness. Dont guess the reason.',
    seconds: 105,
    script: `- biggest miss: Month 20, but we waived the planned acceleration charge\n- fee terms moved below our target; preferred opening moved from Month 24 to 20\n- protected core brand + safety, but that doesnt cancel the waived condition\n- faster prep might squeeze staff, training, ops; no cost numbers in summary\n- could be we wanted agreement too much? maybe weakened our limits — reason not recorded\n- milestones, KPIs, delay plan, committee voting/deadlock, contract words not nailed down`,
  },
  {
    title: 'What we would change', label: '07 · NEXT TIME',
    points: [
      'Cost and authorise acceleration before discussing a waiver; keep a concession and stop-loss matrix.',
      'Trade a fee waiver only for defined, valued reciprocal commitments; pause if outside mandate.',
      'Write readiness gates, approval thresholds, committee rules, KPIs, milestones and remedies.'
    ],
    visual: 'COST IT  →  AUTHORISE IT  →  TRADE IT  →  WRITE IT',
    evidence: 'Recommendation based on Week 11 Simulation Summary, §4 and open items in §4; Group 5A report, §§3–4 and 8–10, printed pp. 2–7.',
    cue: 'Next-time ideas only, they werent agreed terms.',
    seconds: 90,
    script: `- cost the faster opening before talking about the charge\n- keep a simple authorised give/get list + walk-away line; compare full fallback, not one fee\n- fee waiver only for something real in return, check value first\n- pause / get internal OK if outside our mandate\n- write term sheet: readiness gates, dates, budget limits, GM steps, committee votes + escalation, KPIs, delay remedies\n- none of these details were settled in this simulation`,
  },
  {
    title: 'What we learned', label: '08 · LEARNING',
    points: [
      'Package bargaining can create workable governance and local-adaptation options.',
      'Cultural frameworks help us ask and listen; they do not explain people by nationality.',
      'Agreement is not the same as a sound deal: conditions need costed, authorised discipline.'
    ],
    visual: 'WE REACHED TERMS — AND WE CAN NAME THE TRADE-OFF',
    evidence: 'Official Assessment 3 brief, Component 3 and simulation-evaluation rubric, printed pp. 3 and 6; Week 11 Simulation Summary, §4; Group 5A report, §§6–10, printed pp. 4–7.',
    cue: 'Main takeaways; then questions.',
    seconds: 45,
    script: `- package bargaining got us a governance set-up + joint local review\n- frameworks = questions/listening, not “they acted that way cos Saudi/French”\n- agreement isnt same as a good commercial deal; condition needs discipline\n- close: verbal deal in principle, core standards protected, but waived acceleration fee shows we need better costed give/get limits`,
  },
];
