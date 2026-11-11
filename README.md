# The Negotiation Lab — INOV3001 Group 5A

A modular React, TypeScript and Vite learning application for the fictional MaisonLuxe × Al-Nour negotiation case. The app uses hash-based routes, browser-local progress, accessible controls and responsive layouts.

## Run locally

Requirements: Node.js 18+ and npm.

1. Open this folder in VS Code.
2. In the integrated terminal, run `npm install` once.
3. Run `npm run dev` and open the local URL printed by Vite.
4. Run `npm run build` to verify the production build. `npm run preview` serves that build locally.

## Maintain content

Most ordinary text edits belong in one content file. Keep facts, report positions, external theory and hypothetical examples clearly distinguished.

- **Change a lesson:** edit the matching entry in `src/content/lessons.ts`. Each entry contains the explanation, report points, application, dialogue, exercise options and feedback, report page, sources and speaker note. The reusable `src/pages/Lesson.tsx` renders all ten.
- **Modify a quiz:** edit `prompt`, `options`, `answer` (zero-based option index) and `feedback` on that lesson in `src/content/lessons.ts`.
- **Add a source:** add a record in `src/content/sources.ts` and cite it in the relevant lesson’s `sources` array. Use a URL only when verified. Source links open in a new tab.
- **Change colours / fonts:** edit the variables in `src/styles/tokens.css`; global layout and responsive styles are in `src/styles/global.css`. Google Fonts are optional; system fallbacks are defined.
- **Update Week 11 debrief:** edit the field list and summary template in `src/pages/Debrief.tsx`. User-entered notes are saved in browser local storage through `src/hooks.ts`.
- **Edit Week 12 presentation:** update the eight `slides` records in `src/content/presentation.ts`; the page renderer is `src/pages/Presentation.tsx`. Update oral-defence answer guides in `src/content/defenceQuestions.ts`.
- **Edit rehearsal prompts:** update `src/content/practiceScenarios.ts`.
- **Change shared page layout/navigation:** `src/App.tsx` and `src/components/Navigation.tsx`.

## Local progress and transfer

Completed lessons, selected quiz answers, rehearsal notes, role assignments and debrief entries are saved in this browser’s local storage. This is device- and browser-specific; it does not synchronise with other group members. Use **Export notes** in the sidebar to download a JSON file and **Import JSON** on another device. Imported data replaces current local progress.

## Original report PDFs and evidence

The authoritative submitted report, official Assessment 3 instructions, simulation summary and fictional MaisonLuxe/Al-Nour role brief are local-only references. The project-root `reference/` folder and the source-pack archive are excluded by `.gitignore`, are not inside `public/`, and are not copied into Vite's production output. Do not copy private source documents to `public/docs/`, lesson content or a deployment artifact. Page references use printed report pages.

## GitHub Pages

This repository deploys under `/INOV3001-Negotiation-Lab-Group5A/` at `https://johnleary22.github.io/INOV3001-Negotiation-Lab-Group5A/`. Hash-based routes avoid server-side route rewrites. The `Deploy to GitHub Pages` workflow builds the app and publishes `dist/` on pushes to `main`.

## Confidentiality — read before publishing

The public application omits confidential reservation figures, the private fallback-project details and source documents. Private source packs remain in the ignored local `reference/` folder and are not part of the production output. A display toggle, hidden panel or local storage is **not security**; never add confidential material to client-side code or public assets.

## Academic integrity and limitations

- MaisonLuxe and Al-Nour are fictional companies in this teaching case.
- Simulator dialogue is hypothetical and is not evidence about the counterpart student group.
- Week 11 presentation content reflects the recorded verbal outcome; outstanding implementation details remain identified as unresolved.
- Market claims and report page references must be checked against the original PDFs. The HVS link is contextual, not validation of the case’s fee figures.
- Country frameworks describe broad patterns and must not be used to predict individual behaviour.
- Browser storage is not encrypted, synced or backed up. Export notes when needed and treat the device accordingly.
