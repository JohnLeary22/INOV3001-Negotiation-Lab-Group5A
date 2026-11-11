export type Source = { id: string; title: string; detail: string; url?: string };

// Bibliographic details and links below are taken from the submitted report's reference list.
// Book records have no link where a stable original publication URL was not confirmed.
export const sources: Source[] = [
  { id: 'case-brief', title: 'Group 5A Negotiation Brief (2026)', detail: 'Fictional shared case facts supplied to students: company roles, property, five issues and MaisonLuxe private negotiation instructions.' },
  { id: 'fisher-2011', title: 'Fisher, Ury & Patton (2011), Getting to Yes, 3rd ed.', detail: 'Interests over fixed positions, options, objective criteria and alternatives.' },
  { id: 'brett-2014', title: 'Brett (2014), Negotiating Globally, 3rd ed.', detail: 'Cross-cultural negotiation and conditional trade-offs, as cited in the submitted report.' },
  { id: 'hofstede-2010', title: 'Hofstede, Hofstede & Minkov (2010), Cultures and Organizations, 3rd ed.', detail: 'Cultural dimensions as broad comparative tendencies, not predictors of individuals.' },
  { id: 'hall-1976', title: 'Hall (1976), Beyond Culture', detail: 'Context in communication; the report also cites RMIT’s accessible explanatory resource.' },
  { id: 'meyer-2014', title: 'Meyer (2014), The Culture Map', detail: 'Workplace approaches to communicating, trusting, disagreeing and deciding.' },
  { id: 'culture-factor', title: 'The Culture Factor — Country comparison tool', detail: 'France/Saudi comparison scores cited in the report; country averages cannot predict the student role-players.', url: 'https://www.theculturefactor.com/country-comparison-tool' },
  { id: 'hvs-lee-2024', title: 'Lee (2024), “A New Approach to Hotel Management Fees,” HVS', detail: 'The report cites a commonly observed 2%–4% base-fee range. This is context only, not a valuation or proof of a fair fee for this case.', url: 'https://publications.hvs.com/article/9912-A-New-Approach-to-Hotel-Management-Fees' },
  { id: 'kslaw-2026', title: 'King & Spalding (2026), “Mastering Hotel Deals in the Kingdom of Saudi Arabia: Approval Rights in Hotel Management Agreements”', detail: 'Industry discussion cited in the report for separating owner approval rights from hotel-operator authority.', url: 'https://www.kslaw.com/insights/articles/mastering-hotel-deals-in-the-kingdom-of-saudi-arabia-approval-rights-in-hotel-management-agreements' },
  { id: 'spa-2025', title: 'Saudi Press Agency (2025, October 1), “Tourism Ministry approves policies and rules for registering workers and localizing activities in licensed tourism facilities”', detail: 'Institutional source cited by the report in relation to workforce requirements; verify applicable rules for any real project.', url: 'https://www.spa.gov.sa/en/N2412096' },
  { id: 'rmit-context', title: 'RMIT University — “High vs low context”', detail: 'Accessible overview of explicit wording and contextual communication.', url: 'https://emedia.rmit.edu.au/businessedge/high-vs-low-context.html' },
  { id: 'euraxess-france', title: 'EURAXESS France — “French culture”', detail: 'The report uses this source to avoid reducing French professional communication to a single low-context label.', url: 'https://www.euraxess.fr/france/information-assistance/french-culture' },
  { id: 'tufts-france', title: 'Tufts University — “France and French culture”', detail: 'Additional French cultural context cited in the submitted report.', url: 'https://europeancenter.tufts.edu/france-and-french-culture/' },
  { id: 'ita-saudi', title: 'U.S. International Trade Administration (2026) — “Saudi Arabia—Business travel”', detail: 'Practical business relationship and travel guidance cited in the report. Check the current page before presentation.', url: 'https://www.trade.gov/country-commercial-guides/saudi-arabia-business-travel' }
];

// Each annotation explains why the report evidence matters for a Week 11 action.
export const lessonEvidence: Record<number, string> = {
  1: 'The shared case establishes each company’s contribution and the five linked issues. Use this evidence to open with the mutual opportunity and agree the agenda before bargaining.',
  2: 'The report separates the long-term goal, opening requests, targets and conditional Month 20 option. State the goal first; label every number and condition accurately during the meeting.',
  3: 'The report ranks brand/service/safety protection first and financial returns second. Its two minimum fees require different offsetting terms and must not be accepted together by default. Make any movement conditional.',
  4: 'The report proposes cross-issue package bargaining: a lower initial fee may be exchanged for annual-fee value and brand rights; major budget approval can be paired with operator autonomy. Ask about priorities before offering a trade.',
  5: 'The shared case establishes ownership, financing, local guest fit and cost control; Al-Nour’s private thresholds are unknown. Treat fee levels, approval demands and accelerated timing as hypotheses to test with questions.',
  6: 'The report uses country comparisons and business guidance to prepare for possible differences, while warning that scores are not individual predictions. Build rapport, check authority and expectations, and adapt to the people present.',
  7: 'Hofstede, Hall and Meyer are used as complementary lenses. The report explicitly cautions against labelling France as purely low-context or treating role-playing students as a cultural sample. Translate a framework into a question, then verify.',
  8: 'The report’s sequence is rapport, guest-experience priorities, open questions, listening, respectful disagreement and written confirmation. One person guides the agenda while another records offers and conditions.',
  9: 'The report identifies a confidential alternative to agreement. Compare full economics, capacity and risk using verified information; do not disclose fallback details or internal limits.',
  10: 'The report identifies risks around ambiguous commitments, authority, time, costs and brand/local adaptation. Use written decision rights, readiness conditions and shared criteria; clarify whether each statement is a proposal, conditional point or agreement.'
};
