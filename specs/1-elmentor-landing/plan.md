# Implementation Plan: Elmentor Landing Website

**Branch**: `1-elmentor-landing` | **Date**: 2025-11-17 | **Spec**: `spec.md`

## Summary

Create a modern single-page landing site for the Elmentor Program using Vite + React and minimal libraries. The site will be accessible, bilingual (English/Arabic with RTL handling), fast, and deployed to GitHub Pages. The technical approach emphasizes: vanilla HTML/CSS/JS for markup and styling, minimal third-party dependencies, a small i18n loader for translations, pre-commit linting, CI gates that enforce constitution checks (docs, LTS runtimes, tests), and Lighthouse smoke tests.

## Technical Context

**Language/Version**: Node LTS (latest) for local dev and CI - Node 20+ recommended | JavaScript (ES2022) + optional TypeScript if team prefers
**Primary Dependencies**: React (latest stable), Vite (latest stable), small i18n (custom loader) — avoid heavy frameworks like i18next unless needed
**Storage**: No backend required for initial site; form submissions via Formspree or a lightweight serverless endpoint; optional backend for admin via API
**Testing**: Unit tests with Testing Library and Jest; E2E tests via Playwright or Cypress (prefer Playwright for speed); Visual regression with Playwright snapshot or other light tool
**Target Platform**: Modern browsers (mobile-first), GitHub Pages for static hosting
**Project Type**: Web single-page (frontend only)
**Performance Goals**: Lighthouse score (Mobile) >= 60; FCP <= 3s on 3G emulation; bundle size < 200 KB gzipped for critical assets
**Constraints**: Minimal libraries, no deprecated APIs; LTS versions only; small CSS footprint (use CSS variables and BEM or utility classes) and image optimizations.

## Constitution Check

- Documentation: `docs/quickstart.md` and `docs/i18n.md` must be updated. PRs that change UI must update docs.
- CI & Deployment: Use GitHub Actions with `actions/checkout@v4`, Node LTS, and a maintained pages/deploy action pinned to a major release.
- Tests: Unit and E2E tests must run in CI and pass; include a Lighthouse smoke check.
- Dependencies: Only actively maintained libs; prefer vanilla JS or small helpers.
- Performance: Add Lighthouse and bundle-size checks to CI; include performance budgets.

## Project Structure

```text
specs/1-elmentor-landing/
├── plan.md             # This file
├── research.md         # Phase 0 output (if needed)
├── data-model.md       # Entities
├── quickstart.md       # Phase 1 quickstart for devs
├── tasks.md            # Implementation tasks
└── tasks/              # Optional task-specific scripts

src/
├── index.html          # Vite entry
├── main.jsx            # React root
├── App.jsx             # App container and layout
├── components/         # UI components (Navbar, Hero, Circles, Footer...)
├── i18n/               # `en.json` and `ar.json` + loader `i18n.js`
├── styles/             # CSS/SCSS (minimal; prefer CSS variables)
└── lib/                # small helper functions (smooth scroll, form, analytics)

tests/
├── unit/               # unit tests
└── e2e/                # Playwright/Cypress tests
```

### Design decisions
- Keep dependency list small: React, Vite, `@testing-library/react` for unit tests, Playwright for E2E, and `@sentry/browser` only if needed for production error reporting.
- Prefer local i18n file loader (`i18n/en.json`, `i18n/ar.json`), with auto-translate script and editorial backlog for Arabic.
- Accessibility-first: use semantic HTML first and add ARIA attributes where needed; keyboard-first nav.

## Complexity Tracking

> Fill ONLY if Constitution Check has violations that must be justified

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Use LTS toolchains | Constitution requires stable LTS in CI | Running on older/newer unsupported versions risks churn. |

## Tasks & Timeline

1 - Setup and Scaffolding
- T001: Create Vite + React app using minimal templates (no heavy UI framework). (1d)
- T002: Configure `eslint`, `prettier`, and `pre-commit` hooks (husky + lint-staged) to satisfy constitution. (0.5d)
- T003: Add `i18n/en.json` resource skeleton with keys for all UI strings. (0.5d)

2 - Core Implementation
- T004: Implement `Navbar` with language toggle and anchor links. (1d)
- T005: Implement `Hero` with CTA, `About` with program summary, `Circles`, `Activities/Benefits`, `Founder story`, `News/Updates`, `Contact/Join` sections, and `Footer`. (3d)
- T006: Smooth scrolling + hash-based routing support for deep linking. (0.5d)
- T007: Implement contact form (Formspree/ serverless stub) + simple submission integration. (1d)

3 - i18n & RTL
- T008: Add `i18n` loader that loads JSON resources by language; support fallback to English. (0.5d)
- T009: Auto-translate script to create `i18n/ar.json` from `i18n/en.json` with `TODO: QA` commit header. (0.5d)
- T010: Implement RTL layout switch and CSS mirroring. (0.5d)

4 - Quality & CI
- T011: Add unit tests for critical components, add E2E tests for join flow and language toggle. (1.5d)
- T012: Add visual snapshot tests for RTL and responsive breakpoints. (1d)
- T013: Add Lighthouse smoke test and bundle-size reporting in CI. (0.5d)
- T014: Add GitHub Pages deploy workflow and constitution check job. (0.5d)

5 - Polish & Accessibility
- T015: Accessibility audit fixes, keyboard interactions, and aria labels. (0.5d)
- T016: Pre-release checklist and `docs/` updates (i18n, quickstart, CI workflows). (0.5d)

## Deliverables
- `src/` with complete SPA and components
- `i18n/` with `en.json` and `ar.json` generator
- `docs/` updated (`quickstart.md`, `i18n.md`, `ci.md`)
- `specs/1-elmentor-landing` with `plan.md`, `tasks.md`, `checklist.md`
- GitHub Actions workflow for build + test + lighthouse + pages deploy

## Quickstart & Local Run (for devs)

Use Node LTS and one of the following package managers (npm, pnpm, yarn).

1. Install dependencies

```pwsh
npm install
```

2. Start development server

```pwsh
npm run dev
```

3. Build for production

```pwsh
npm run build
```

4. Preview production build locally (helpful for Lighthouse testing)

```pwsh
npm run preview
``` 

## Project Handover Notes
- Keep `i18n/en.json` as canonical source of truth. The `i18n/ar.json` is auto-generated; editorial PRs are required to mark the Arabic copy as canonical.
- Use semantic HTML and minimal custom JS for layout to keep Lighthouse and accessibility scores high.
- Re-check the `Constitution` check in `plan.md` whenever a major dependency is added.

***
