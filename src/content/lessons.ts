export type Lesson = {
  id: number;
  title: string;
  short: string;
  what: string;
  report: string[];
  apply: string;
  dialogue: string;
  prompt: string;
  options: string[];
  answer: number;
  feedback: string;
  page: string;
  sources: string[];
  speaker: string;
  term: string;
};

// Lesson wording and source IDs are kept here so content edits do not affect page layout.
export const lessons: Lesson[] = [
  {
    id: 1, title: 'Business context & the problem', short: 'Why these businesses need a partnership',
    what: 'MaisonLuxe brings its name, service approach, staff training and hotel-management experience. Al-Nour will finance and own a possible 60-room Saudi property. They must agree how money, authority and responsibility will be shared.',
    report: ['MaisonLuxe is a French company founded in Lyon in 2020. It runs two small hotels and wants to expand without financing overseas construction.', 'Al-Nour is a Saudi company founded in Riyadh in 2021. It has a potential site and initial investor support and needs an international brand and management expertise.', 'The five connected issues are the initial fee, annual fee, decision rights, local adaptation, and opening date/acceleration costs.'],
    apply: 'Introduce both businesses and the shared opportunity. Agree an agenda for all five issues before bargaining. Ask which issue the other team wants to address first.',
    dialogue: '“You bring the site and local project knowledge; we bring our brand and hotel-management experience. Could we agree an agenda for the five connected issues?”',
    prompt: 'Al-Nour says project costs are a concern. Which response both listens and moves the discussion forward?',
    options: ['“That is your problem; our fees are fixed.”', '“Which costs concern you most? We can note them and compare options across the five issues.”', '“We will reduce both fees now.”'], answer: 1,
    feedback: 'This acknowledges the concern, asks for detail, and keeps options open across the full package without making an unconditional concession.',
    page: 'Section 1, printed p. 1', sources: ['case-brief'],
    speaker: 'The case gives the companies different but complementary contributions. Al-Nour owns and finances the property. MaisonLuxe provides the brand, service approach, training and management. Our problem is how to share money, authority and responsibility. Because the five issues connect, we should first agree an agenda and discover what matters most.',
    term: 'Agenda: the list of issues the parties agree to discuss.'
  },
  {
    id: 2, title: 'Negotiation goal', short: 'Protect the long-term partnership',
    what: 'The goal is the lasting result we want. An opening offer is our first proposal. A target is a preferred result—not the whole goal.',
    report: ['The goal is a ten-year partnership that supports MaisonLuxe’s first Middle East hotel, protects its brand and provides reasonable returns.', 'The report set opening proposals and preferred targets for upfront and annual fees to support expansion costs.', 'Month 24 is preferred. An earlier opening was conditional on additional funding and construction readiness; opening before Month 20 was not acceptable.'],
    apply: 'Explain the shared long-term goal before numbers. If an earlier opening is raised, confirm funding and readiness conditions. Do not treat the target as an unconditional commitment.',
    dialogue: '“We want a sustainable ten-year partnership and a strong guest experience. Month 24 is preferred; an earlier date needs agreed resources and construction readiness.”',
    prompt: 'Al-Nour asks for Month 20. What is the best next response?',
    options: ['Agree now to protect the relationship.', 'Explain Month 24 is preferred; ask about readiness and discuss an earlier date only with the agreed additional resources and construction readiness.', 'Reject any discussion of opening dates.'], answer: 1,
    feedback: 'This states the preference and checks the conditions before agreeing to accelerate.',
    page: 'Section 2, printed pp. 1–2', sources: ['case-brief'],
    speaker: 'The report distinguishes our goal from fee proposals and preferred targets. The goal is not simply to maximise fees. It is to grow internationally while protecting the brand and remaining within the team’s capacity. Month 24 was preferred; an earlier opening depended on resources and construction readiness.',
    term: 'Target: a preferred result; it is not the same as the opening offer or final limit.'
  },
  {
    id: 3, title: 'Interests, priorities & concessions', short: 'Trade terms with conditions',
    what: 'A position is what someone asks for. An interest is why it matters. A concession is movement from a position. A conditional concession links that movement to an acceptable return.',
    report: ['The highest priority is final approval over brand use, service standards, training and marketing claims; MaisonLuxe also prefers daily operations and general-manager selection.', 'Financial flexibility was conditional: each fee concession depended on favourable terms elsewhere in the package.', 'Do not combine all financial concessions by default. A joint committee may review major budgets and senior appointments, but cannot override core brand or safety standards.'],
    apply: 'Ask why a request matters. If considering a lower fee, state its condition and check the whole package. Keep limits private; do not offer both minimums as a starting package.',
    dialogue: '“We could discuss the initial fee if the annual fee and brand decision rights remain workable. What cost or investment concern is that request intended to address?”',
    prompt: 'Al-Nour requests a lower upfront fee. Which response uses a conditional concession?',
    options: ['“We can explore that if the annual fee and brand decision rights remain satisfactory. Let us discuss those terms together.”', '“We will lower every fee now.”', '“We will not discuss any fee changes.”'], answer: 0,
    feedback: 'The report links fee movement to favourable terms elsewhere. Do not trade away several interests without checking the full package.',
    page: 'Section 3, printed pp. 2–3', sources: ['case-brief', 'fisher-2011', 'brett-2014'],
    speaker: 'Our concessions were conditional. Movement on one fee depended on favourable terms elsewhere, including brand rights and management responsibilities. We could discuss a joint committee for major budgets and senior appointments, but it could not remove MaisonLuxe approval over core brand or safety standards.',
    term: 'Conditional concession: movement that depends on a clearly stated return or safeguard.'
  },
  {
    id: 4, title: 'Negotiation strategy', short: 'Build a package across issues',
    what: 'Integrative negotiation looks for options that address both sides’ interests. Package bargaining links issues instead of arguing over one term at a time.',
    report: ['The report proposed opening fee positions and preferred targets; it advised learning Al-Nour’s priorities before making concessions.', 'A lower initial fee could be exchanged for stronger annual-fee terms and brand protection. Major-budget oversight could be paired with MaisonLuxe’s daily operating autonomy.', 'A joint committee cannot waive essential brand or safety requirements. Month 20 was conditional on additional resources and construction readiness.'],
    apply: 'Ask what matters most, then offer a package with explicit conditions. For example, discuss major-spending approval alongside daily operating authority and protected brand standards.',
    dialogue: '“We can explore approval thresholds for major budgets. In return, could MaisonLuxe lead daily operations while we retain final approval over core brand and safety standards?”',
    prompt: 'The other team wants more control over major spending. Which package should you explore?',
    options: ['Give Al-Nour control over all daily operations and brand standards.', 'Discuss a joint budget committee with clear thresholds, while MaisonLuxe leads daily operations and protects core brand and safety standards.', 'Refuse any approval process.'], answer: 1,
    feedback: 'This reflects the report’s proposed exchange: financial oversight for the owner, operating autonomy for the operator, with core brand and safety protected.',
    page: 'Section 4, printed p. 3', sources: ['fisher-2011', 'brett-2014'],
    speaker: 'The report recommends an integrative, interest-based strategy. We should understand priorities before trading. A lower initial fee may be balanced by annual-fee value and stronger brand protection. Major budget approval can be paired with operating autonomy. Package terms must be conditional and must not weaken core brand or safety requirements.',
    term: 'Package bargaining: discussing linked terms together so a trade can meet different interests.'
  },
  {
    id: 5, title: 'Expected counterpart interests', short: 'Separate shared facts from hypotheses',
    what: 'Some Al-Nour interests are in the shared case. Other priorities are our hypotheses. Private financial limits and alternatives are unknown.',
    report: ['Shared case: Al-Nour will own and finance the hotel; it wants construction and operating costs controlled, local guest needs respected, and an international brand.', 'The report expects it may seek lower fees, budget controls and senior-appointment approval. These are likely interests, not confirmed demands.', 'An accelerated opening may interest investors, but the report says to ask. Al-Nour’s fee limits, revenue expectations and alternatives are unknown.'],
    apply: 'Name what is known, label what is a hypothesis, then ask a neutral question. Do not present a guess as the other team’s position.',
    dialogue: '“We understand local guest needs and project costs matter in the shared brief. Which adaptations or costs are most important to your team?”',
    prompt: 'Your notes say Al-Nour may want faster opening. What should you do before building a trade around that?',
    options: ['Treat it as confirmed and offer Month 20 immediately.', 'Ask whether the opening date is a priority and what milestones or investor needs shape it.', 'Assume there is no timing pressure.'], answer: 1,
    feedback: 'The report explicitly says accelerated opening is unconfirmed. Ask before offering the conditional Month 20 option.',
    page: 'Section 5, printed pp. 3–4', sources: ['case-brief', 'hvs-lee-2024', 'kslaw-2026', 'spa-2025'],
    speaker: 'The shared brief tells us that Al-Nour owns and funds the property and values cost control, local guest fit and an international brand. The report’s ideas about lower fees, approval requests and an earlier opening are expectations to test. Its private limits and revenue forecasts are unknown.',
    term: 'Hypothesis: a possible explanation or priority that must be checked with the other party.'
  },
  {
    id: 6, title: 'Cultural factors', short: 'Adapt respectfully, not stereotypically',
    what: 'Cultural research can suggest questions about trust, hierarchy, communication, time and decisions. It cannot tell us how an individual will behave.',
    report: ['The report cites France/Saudi scores: individualism 74/48; power distance 68/72; uncertainty avoidance 86/64.', 'It suggests respectful introductions, time to build trust, clear processes and written safeguards.', 'The report warns that national scores are broad tendencies. Confirm the actual team’s expectations and decision authority.'],
    apply: 'Begin respectfully. Ask who approves which decisions and what information is needed. Allow time for discussion; confirm meaning rather than interpreting a pause or polite response.',
    dialogue: '“We would like to understand how your team reviews decisions. Who should be involved, and what would help you feel ready to confirm a proposal?”',
    prompt: 'The other team pauses after your proposal. What is the best culturally aware response?',
    options: ['Assume the pause has a fixed cultural meaning and proceed.', 'Ask if they would like time, more information or input from another decision-maker.', 'Press for an immediate yes or no.'], answer: 1,
    feedback: 'This checks the individual’s actual needs instead of applying a national stereotype.',
    page: 'Section 6, printed pp. 4–5', sources: ['hofstede-2010', 'culture-factor', 'ita-saudi'],
    speaker: 'The report uses country comparisons as preparation, not prediction. It cites individualism, power-distance and uncertainty-avoidance scores. Its practical advice is to build rapport, clarify authority and make processes clear. In the simulation, we should observe the actual people and ask what they need rather than infer it from nationality.',
    term: 'Power distance: a framework dimension about how authority and hierarchy may be viewed.'
  },
  {
    id: 7, title: 'Cultural frameworks', short: 'Use a framework to choose a question',
    what: 'Hofstede compares broad cultural dimensions. Hall considers how meaning uses explicit words and context. Meyer examines workplace communication, trust, disagreement and decisions.',
    report: ['The report uses all three frameworks to prepare questions about authority, communication, trust and decision-making.', 'It says France should not be labelled purely low-context; communication can also be implicit and professional debate may be normal.', 'The role-playing students are not a measured cultural sample. Frameworks guide questions; observed behaviour should guide adaptation.'],
    apply: 'Choose a framework only as a starting lens. Ask a specific question, listen to the answer and adjust. Do not use a country score to predict an individual.',
    dialogue: '“Would it help if we summarised this proposal in writing, including what is agreed and what still needs approval?”',
    prompt: 'A polite response sounds positive, but the commitment is unclear. What is the best next step?',
    options: ['Use Hall as a prompt to check shared meaning, then ask what is agreed and confirm it in writing.', 'Use Hofstede to decide what the person meant from their nationality.', 'Assume Meyer’s framework predicts the person’s decision style.'], answer: 0,
    feedback: 'Hall can prompt a check about words and context. The report’s action is to clarify respectfully and confirm, not to infer meaning.',
    page: 'Section 7, printed p. 5', sources: ['hofstede-2010', 'culture-factor', 'hall-1976', 'rmit-context', 'euraxess-france', 'tufts-france', 'ita-saudi', 'meyer-2014'],
    speaker: 'Hofstede offers broad dimensions, Hall helps us consider context, and Meyer focuses on workplace interactions such as trust and disagreement. The report cautions against simple labels, especially calling France purely low-context. We use a framework to form a question, then rely on the counterpart’s actual answer.',
    term: 'High-/low-context: a way to discuss how much meaning comes from explicit words versus shared context.'
  },
  {
    id: 8, title: 'Communication approach', short: 'Listen, summarise, clarify, confirm',
    what: 'Active listening means showing attention, checking understanding and responding to the other person’s concern before proposing a solution.',
    report: ['Start with introductions and local expertise; ask about guest-experience priorities before detailed fees.', 'Identify who can approve decisions. Disagree respectfully and explain the reason instead of dismissing an idea.', 'One member guides the agenda while another records offers. Summarise provisional terms, conditions, owners and next steps in simple writing.'],
    apply: 'Use this sequence: rapport → open question → listen → summarise and check → offer a conditional response → confirm what is agreed or still open.',
    dialogue: '“You want more influence over operations. Which decisions matter most? Let me check that I understood before we look at options.”',
    prompt: 'The other team says, “We need more influence over operating decisions.” What do you say first?',
    options: ['“That is unacceptable.”', '“Which decisions matter most, and what concern does that address? Let me summarise what I heard.”', '“We agree to give you full control.”'], answer: 1,
    feedback: 'This listens and clarifies before responding. It avoids rejecting the concern or making a premature promise.',
    page: 'Section 8, printed pp. 5–6', sources: ['case-brief', 'meyer-2014', 'ita-saudi'],
    speaker: 'The report recommends rapport and open questions before detailed bargaining. We should identify decision-makers, listen, and explain disagreement respectfully. The agenda lead can guide the conversation while a teammate records offers. At each step, the team should distinguish a proposal from a provisional agreement or a point needing approval.',
    term: 'Active listening: checking the meaning of what someone said before answering.'
  },
  {
    id: 9, title: 'BATNA & fallback position', short: 'Know the alternative; protect its privacy',
    what: 'BATNA means Best Alternative to a Negotiated Agreement: the best option if this negotiation does not produce an acceptable agreement.',
    report: ['The submitted report identified a confidential alternative to agreement and internal negotiation limits.', 'The alternative’s value cannot be compared with the Saudi project without reliable revenue, cost and risk information.', 'Keep private alternatives and internal limits out of public discussion. Use them privately to assess the whole package and decide whether to continue.'],
    apply: 'Compare the full proposal with the best available alternative using reliable revenue, capacity and risk information. Do not disclose confidential fallback details.',
    dialogue: '“We need to assess the full economics, responsibilities and delivery risks before deciding whether a proposal is workable.”',
    prompt: 'The Saudi offer has a lower initial fee than expected, but no revenue forecast or final operating terms. What should you do?',
    options: ['Reject it based on the initial fee alone.', 'Ask for information needed to compare revenue, contract term, responsibilities and risks; then assess the whole package against the alternative.', 'Tell Al-Nour the confidential fallback details and internal limits.'], answer: 1,
    feedback: 'Initial fees alone do not show which option has greater value. Compare the full economics and terms privately.',
    page: 'Section 9, printed p. 6', sources: ['case-brief', 'fisher-2011'],
    speaker: 'A best alternative helps us decide whether to accept a proposal. Compare the complete economics, capacity and risks; an initial fee alone is not enough. Keep confidential fallback details and internal limits private.',
    term: 'BATNA: your best alternative if you do not reach an acceptable agreement.'
  },
  {
    id: 10, title: 'Risks & misunderstandings', short: 'Make commitments precise',
    what: 'Risk comes from unclear authority, financial disagreement, mistaken commitments, brand/local-adaptation conflict and unrealistic opening dates.',
    report: ['Identify decision-makers and write down who controls daily operations, major budgets, senior appointments, local changes and core brand/safety standards.', 'Ask about the opening date and investor reasons; do not assume there is pressure. Explain staffing and preparation costs before discussing acceleration.', 'Assess local proposals by guest needs, cost, brand quality and local requirements. Clarify whether each point is a proposal, condition or agreement.'],
    apply: 'For each issue, name the risk, check its importance, ask a clarifying question, agree a safeguard and record the owner and next step.',
    dialogue: '“Could we record this as a proposal pending construction-readiness checks, rather than a confirmed Month 20 opening? What evidence and approval would be needed?”',
    prompt: 'A proposed local design change may lower costs but could affect the guest experience and brand. How should you respond?',
    options: ['Reject it immediately because it differs from existing MaisonLuxe hotels.', 'Ask what guest need and cost it addresses; review it against brand quality and local requirements, then agree who approves and records the change.', 'Accept it verbally and let each team remember the details.'], answer: 1,
    feedback: 'This treats the issue as a shared problem, uses the report’s criteria and prevents an unclear verbal commitment.',
    page: 'Section 10, printed pp. 6–7', sources: ['case-brief', 'hall-1976', 'hofstede-2010', 'culture-factor'],
    speaker: 'The report advises against assuming investor pressure or treating positive words as final agreement. Ask for the reason behind a request. For local adaptation, assess guest needs, operating costs, brand quality and local requirements. Record who decides and what remains conditional, so neither team leaves with a different understanding.',
    term: 'Provisional: discussed but not final; it still needs confirmation or conditions.'
  }
];
