# Tasks: Elmentor Landing Website

**Input**: specs/1-elmentor-landing/spec.md

## Phase 1: Setup
## Phase 1: Setup (Shared Infrastructure)

- [ ] T001 Initialize project: Create Vite + React scaffold (`src/`, `index.html`, `main.jsx`).
- [ ] T002 [P] Set up `eslint`, `prettier`, `husky`, and `lint-staged` with pre-commit hooks (`.eslintrc`, `.prettierrc`, `.husky/`).
- [ ] T003 [P] Add CI workflow `/.github/workflows/ci.yml` with Node LTS matrix to run linters and unit tests (pins official actions e.g., `actions/checkout@v4`).

## Phase 2: Foundational (Blocks all stories)

- [ ] T004 Implement accessible `Navbar` in `src/components/Navbar.jsx` with anchor links to all sections and a language toggle (EN/AR). This is foundational (no story label).
- [ ] T005 [US1] Implement `Hero` in `src/components/Hero.jsx` including headline, subheadline, CTA that scrolls to `Contact/Join`.
- [ ] T006 [US2] Implement `About` component `src/components/About.jsx` and `Circles` in `src/components/Circles.jsx` with cards for each group.
- [ ] T007 [US2] Implement `Activities` and `Benefits` components in `src/components/Activities.jsx` with event cards and icons.
- [ ] T008 [US2] Implement `FounderStory` and `News` components in `src/components/Founder.jsx` and `src/components/News.jsx` including markdown rendering for long-form content.
- [ ] T009 [US1] Implement `Contact/Join` form in `src/components/ContactForm.jsx`; client-side validation, ARIA labels, and stub submission to Formspree/serverless endpoint.
- [ ] T010 [P] Add test harness: `tests/unit/` skeleton and visual regression harness `tests/visual/` (Playwright snapshot). Ensure tests run in CI.
- [ ] T008 Setup testing harness and visual regression test pipeline
## i18n & Translations (US3)

- [ ] T011 [US3] Add `i18n` loader in `src/i18n/index.js` and add `i18n/en.json` resource skeleton in `i18n/en.json`.
- [ ] T012 [US3] Add auto-translation script `scripts/auto-translate.js` to generate `i18n/ar.json` from `i18n/en.json` (`i18n: auto-translate - TODO: QA`).
- [ ] T013 [US3/P] Update `docs/i18n.md` with the editorial QA workflow and add `i18n-review` label automation for generated translations.
- [ ] T014 [US3] Add CI job `ci/i18n-check` in `/.github/workflows/ci.yml` to validate missing keys and warn if translations are incomplete.
- [ ] T011 Add editorial backlog label `i18n-review` for generated translations and document review protocol in `docs/i18n.md`
## Phase 3: Feature & QA

- [ ] T015 [P] [US1] Implement smooth scrolling and hash-based anchor routing in `src/lib/smoothScroll.js`, verify deep links with `/#section`.
- [ ] T016 [P] [US1] Add E2E test `tests/e2e/join.spec.js` for join flow and CTA paths; run in CI.
- [ ] T017 [P] [US2] Add E2E & visual regression tests for `News` and `Founder` flows `tests/e2e/news.spec.js` and `tests/visual/news.snapshot.js`.
- [ ] T018 [P] [US3] Add E2E tests for language toggle and RTL layout `tests/e2e/i18n.spec.js` and handle accessibility checks (axe-core or Playwright accessibility checks).
- [ ] T019 [P] Add Lighthouse smoke check job `/.github/workflows/lighthouse.yml` and include bundle-size reporting (`rollup-plugin-filesize` or vite plugin); set initial budgets.
- [ ] T020 Add GitHub Pages deployment workflow `/.github/workflows/pages-deploy.yml` with pinned, maintained Actions (Pages + Caching). This must include build → tests → lighthouse → deploy.

## Phase 4: Polish & Cross-Cutting

- [ ] T021 [P] [US1] Implement analytics / tracking for CTAs and submit events in `src/lib/analytics.js` (respect privacy; anonymous only until consent).
- [ ] T022 [P] [US3] Add accessibility improvements, keyboard traps fixes, and ARIA attributes; verify all sections are navigable by keyboard.
- [ ] T023 Update `docs/quickstart.md`, `docs/ci.md`, and `docs/i18n.md` with final setup and CI details.
- [ ] T014 Add performance budgets and Lighthouse smoke checks to CI
- [ ] T015 Add accessibility checks and keyboard navigation tests
- [ ] T016 Add final polish: deploy to GitHub Pages and verify bilingual flows

***
