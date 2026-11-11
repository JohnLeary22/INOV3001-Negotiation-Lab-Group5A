export type PresentationSlide = {
  title: string;
  label: string;
  points: string[];
  graphic: 'partnership' | 'tradeoffs' | 'frameworks' | 'timeline' | 'success' | 'challenges' | 'improvements' | 'learning';
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
      'MaisonLuxe brings its brand, management expertise, training and service standards.',
      'Al-Nour contributes investment, property ownership and local market knowledge.',
      'Both parties depend on each other to deliver the retreat.',
      'The proposal is a 10-year partnership for a 60-room Saudi luxury retreat.'
    ],
    graphic: 'partnership',
    evidence: 'Group 5A report, §1, printed p. 1; official Assessment 3 brief, Component 3, printed p. 3. Fictional teaching case.',
    cue: 'Name the shared opportunity before describing the disagreement.',
    seconds: 75,
    script: `Good morning. We represent MaisonLuxe Hospitality, a French boutique-hotel company. We negotiated with Al-Nour Ventures, a Saudi property owner and financier, over a proposed ten-year brand and management partnership for a 60-room luxury retreat in Saudi Arabia. MaisonLuxe would bring its brand, operating expertise, training and service standards. Al-Nour would finance and own the property and bring local project knowledge.\n\nOur interests were different, but not incompatible. We wanted MaisonLuxe’s first Middle East hotel, reasonable returns and protection of its luxury service and brand. Al-Nour wanted cost discipline, influence over the project and a retreat that fits Saudi guests. Our goal was to find a workable balance, not simply the highest fee. We needed to resolve five linked issues: the upfront payment, annual management fee, decision rights, local adaptation, and opening timing. That shared problem shaped our plan, which we will explain next.`,
  },
  {
    title: 'A package, not five arguments', label: '02 · PLAN BEFORE WEEK 11',
    points: [
      'We prepared fee proposals and preferred targets before the simulation.',
      'Month 24 was preferred; an earlier opening depended on resources and construction readiness.',
      'Five linked issues: initial fee, annual fee, authority, local adaptation and opening date.',
      'Trade selectively while protecting core brand and safety standards.'
    ],
    graphic: 'tradeoffs',
    evidence: 'Group 5A report, §§2–4 and 9, printed pp. 1–3, 6; Fisher, Ury & Patton (2011); Brett (2014).',
    cue: 'Make clear these are pre-simulation positions, not the final terms.',
    seconds: 105,
    script: `Before Week 11, our plan was integrative: understand interests, then discuss linked terms as a package. We had opening fee proposals and lower preferred targets for upfront and annual fees. Month 24 was preferred. An earlier opening depended on extra resources and construction readiness. Our internal fallback figures and alternative stayed private.\n\nWe planned to exchange some financial flexibility or owner oversight for clear operating authority and protected brand and safety standards. In negotiation terms, an interest is why a request matters; a position is the requested term. The five issues were linked: changing the opening date affected resources, while budget oversight connected with daily operating authority. Fisher, Ury and Patton, and Brett inform this approach. Next, we will show how our cultural frameworks shaped questions and decisions without treating culture as a fixed script.`,
  },
  {
    title: 'Frameworks as practical lenses', label: '03 · CULTURE',
    points: [
      'Hofstede prompted questions about authority and relationships—not assumptions about people.',
      'Hall encouraged clarification; France is not simply “low-context.”',
      'Meyer helped frame communication, trust and disagreement as choices to adapt.',
      'The frameworks informed preparation; the record—not nationality—supports our claims.'
    ],
    graphic: 'frameworks',
    evidence: 'Group 5A report, §§6–8, printed pp. 4–6; Hofstede et al. (2010); Hall (1976); Meyer (2014); RMIT, EURAXESS France, Tufts University and The Culture Factor.',
    cue: 'Distinguish what the frameworks suggested from what the simulation record says happened.',
    seconds: 90,
    script: `We used Hofstede, Hall and Erin Meyer as lenses for preparation, not as explanations of a person’s behaviour. Hofstede prompted us to check decision authority and relationships. In the actual terms, Al-Nour approved budgets, major expenditure and the general manager; MaisonLuxe led daily operations and retained final approval over core brand and safety standards. That is a negotiated allocation of responsibility. We cannot claim it happened because of national culture.\n\nHall reminded us to check meaning rather than assume that a positive or polite response was final. The summary records that Al-Nour read the final checklist aloud and MaisonLuxe affirmed it. Meyer’s work on trust and disagreement is relevant to the joint committee for Saudi food, design and guest-service adaptations. These are concrete choices and recorded outcomes. The summary also reports clarifying questions and respectful restatements, but it does not prove that a national framework caused them. The other participants were students role-playing a fictional company. We now turn from the plan to the actual negotiation.`,
  },
  {
    title: 'What happened: from opening positions to terms', label: '04 · WEEK 11 OUTCOME',
    points: [
      'Verbal agreement in principle — not a signed contract.',
      'Terms: US$500,000 upfront, 3% of annual hotel revenue and Month 20 target.',
      'Al-Nour approves budgets, major spend and GM; MaisonLuxe leads daily operations and core standards.',
      'Joint local-adaptation committee; reporting agreed in principle.'
    ],
    graphic: 'timeline',
    evidence: 'Week 11 Simulation Summary, §§1–3, 5 Nov 2026. Final checklist read aloud by Al-Nour and affirmed by MaisonLuxe; verbal, not signed.',
    cue: 'Not signed. Middle numbers were just discussed.',
    seconds: 120,
    script: `- starting points were far apart: MaisonLuxe asked higher fees / month 24; Al-Nour started lower / month 18\n- several fee and upfront options came up, not all final\n- end checklist read aloud by Al-Nour, we affirmed it\n- final verbal terms in principle: US$500k total upfront, 3% of total annual hotel revenue, Month 20\n- no separate acceleration charge. Not signed\n- Al-Nour: budgets, major spend, GM approval; MaisonLuxe recommends GM, runs day-to-day, staffing/training, final core brand + safety\n- joint committee local food/design/guest service; regular reports in principle\n- dates, remedies, KPIs, committee vote rules, contract wording still open`,
  },
  {
    title: 'What worked well', label: '05 · EVALUATION',
    points: [
      'Clarifying questions surfaced cost, brand and local-identity priorities.',
      'The teams shifted from fee positions to linked money, authority and timing.',
      'A joint committee created a process for reviewing local adaptation.',
      'Al-Nour read the final checklist; MaisonLuxe affirmed it.',
      'These are observed process outcomes, not proof of commercial success.'
    ],
    graphic: 'success',
    evidence: 'Week 11 Simulation Summary, §§3–5; Group 5A report, §§4 and 8, printed pp. 3 and 5–6; Fisher et al. (2011).',
    cue: 'Process worked in some ways; not proof the deal makes money.',
    seconds: 90,
    script: `- summary says both sides asked clarifying questions, recognised money pressure\n- moved off fee-by-fee arguing toward package: fees + who decides + ops + opening\n- joint committee for Saudi food, design, guest services — a way to handle local fit and brand standards together\n- Al-Nour read final checklist; MaisonLuxe affirmed. helped leave same record\n- useful process, clearer understanding maybe; doesnt prove profit or that every mix-up avoided`,
  },
  {
    title: 'What did not work well', label: '06 · CRITICAL REFLECTION',
    points: [
      'Fee terms moved below preferred targets; the opening shifted from Month 24 to Month 20.',
      'We waived the planned acceleration charge, departing from our conditional plan.',
      'Staffing and acceleration costs were not quantified in the summary.',
      'Milestones, KPIs, delay remedies and committee rules remained open.'
    ],
    graphic: 'challenges',
    evidence: 'Week 11 Simulation Summary, §§3–4; compare Group 5A report, §§2–4 and 9, printed pp. 1–3, 6. The summary does not quantify acceleration costs or establish motive.',
    cue: 'Say it straight: waived fee was a weakness. Dont guess the reason.',
    seconds: 105,
    script: `- biggest miss: Month 20, but we waived the planned acceleration charge\n- fee terms moved below our target; preferred opening moved from Month 24 to 20\n- protected core brand + safety, but that doesnt cancel the waived condition\n- faster prep might squeeze staff, training, ops; no cost numbers in summary\n- could be we wanted agreement too much? maybe weakened our limits — reason not recorded\n- milestones, KPIs, delay plan, committee voting/deadlock, contract words not nailed down`,
  },
  {
    title: 'What we would change', label: '07 · NEXT TIME',
    points: [
      'Original: discuss the earlier opening with resources and readiness conditions.',
      'Next time: cost acceleration and secure authority before discussing a waiver.',
      'Exchange any waiver only for a defined, valued reciprocal commitment.',
      'Write readiness gates, approvals, committee rules, KPIs and remedies.'
    ],
    graphic: 'improvements',
    evidence: 'Recommendation based on Week 11 Simulation Summary, §4 and open items in §4; Group 5A report, §§3–4 and 8–10, printed pp. 2–7.',
    cue: 'Next-time ideas only, they werent agreed terms.',
    seconds: 90,
    script: `- cost the faster opening before talking about the charge\n- keep a simple authorised give/get list + walk-away line; compare full fallback, not one fee\n- fee waiver only for something real in return, check value first\n- pause / get internal OK if outside our mandate\n- write term sheet: readiness gates, dates, budget limits, GM steps, committee votes + escalation, KPIs, delay remedies\n- none of these details were settled in this simulation`,
  },
  {
    title: 'What we learned', label: '08 · LEARNING',
    points: [
      'Initial assumption: different interests can be balanced through a package.',
      'Experience: package bargaining supported governance and local-review options.',
      'Revised view: cultural frameworks help us ask and listen, not stereotype.',
      'Future application: cost, authorise and document conditions before agreeing.',
      'A verbal agreement is not evidence of a commercially sound deal.'
    ],
    graphic: 'learning',
    evidence: 'Official Assessment 3 brief, Component 3 and simulation-evaluation rubric, printed pp. 3 and 6; Week 11 Simulation Summary, §4; Group 5A report, §§6–10, printed pp. 4–7.',
    cue: 'Main takeaways; then questions.',
    seconds: 45,
    script: `- package bargaining got us a governance set-up + joint local review\n- frameworks = questions/listening, not “they acted that way cos Saudi/French”\n- agreement isnt same as a good commercial deal; condition needs discipline\n- close: verbal deal in principle, core standards protected, but waived acceleration fee shows we need better costed give/get limits`,
  },
];
