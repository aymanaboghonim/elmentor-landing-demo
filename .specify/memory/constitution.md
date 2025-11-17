<!--
Sync Impact Report:
- Version change: none → 1.0.0
- Modified principles: Documentation standards, CI/deployment, Testing & Linting, Deprecated libraries, Code Quality & UX, Performance
- Added sections: Deployment & CI Constraints; Development Workflow & Quality Gates
-- Templates requiring updates: 
  - .specify/templates/plan-template.md ✅ updated
  - .specify/templates/spec-template.md ✅ updated
  - .specify/templates/tasks-template.md ✅ updated
  - .specify/templates/checklist-template.md ✅ updated
  - .specify/templates/agent-file-template.md ✅ updated
-- Follow-up TODOs:
  - Create/verify `.specify/templates/commands/*` files for automation gates (if the project uses command templates)
-->

# Elmentor Landing Demo Constitution

## Core Principles

### Principle I. Clear, Living Documentation (MANDATORY)
All public-facing documentation MUST be written in Markdown, stored in `docs/`, and include a concise quickstart, API surface, architecture decisions, and a changelog. Every functional change that impacts behavior or UX MUST update docs in the same PR.

### Principle II. Reproducible Deployments via GitHub Pages (MANDATORY)
The canonical public website is deployed to GitHub Pages. Every merge to `main` MUST run a GitHub Actions workflow that builds, validates, and deploys to Pages. The workflow MUST use actively maintained actions (pin to major versions) and only stable LTS toolchains.

### Principle III. Test-First and Linted (NON-NEGOTIABLE)
All code and scripts MUST include automated tests. PRs must add or update unit and/or integration tests; the CI pipeline MUST run tests and fail the PR when coverage thresholds or linters fail. Use the latest LTS versions for runtimes in CI.

### Principle IV. No Deprecated or Unmaintained Dependencies (MANDATORY)
Dependencies MUST be actively maintained and non-deprecated. CI MUST include dependency auditing; any deprecated/abandoned dependency flagged by this check MUST be removed or replaced before merge with an explicit migration plan.

### Principle V. Strong Code Quality, Consistent UX (MANDATORY)
Code must follow team conventions for structure, naming, and componentization. Shared UI components MUST be documented and include accessibility (a11y) checks. PRs must include a short UX note showing how changes fit visual/interaction patterns.

### Principle VI. Performance & Build Health (NON-NEGOTIABLE)
Production builds MUST meet clearly defined performance budgets and Lighthouse baselines; CI must run a lightweight Lighthouse smoke test and fail when thresholds are breached. Assets must be optimized and cache-friendly; CI artifacts should include build size reports.

## Deployment & CI Constraints

1. GitHub Actions is the official CI. All workflows MUST be declarative and pinned by major release (e.g., `actions/checkout@v4`). Avoid archived or unmaintained actions.
2. Deploy static sites to GitHub Pages from `main`. The Pages workflow MUST include build validation, test runs, and a Lighthouse smoke check (CLI or Action).
3. Tooling in CI MUST use stable LTS versions (Node, Python, etc.). Matrix testing across LTS versions is encouraged where relevant, but final gate MUST succeed on the latest LTS.
4. The build MUST be reproducible: commit lock files and document LTS pinning strategy in `docs/ci.md`.
5. Security and license checks MUST be part of the pipeline; high severity issues require approval and remediation steps in the PR.

## Development Workflow & Quality Gates

1. Tests are mandatory. Each PR must pass unit & integration tests. Add a short test plan to the PR description summarizing new coverage.
2. Linting/formatting are mandatory: use `pre-commit` hooks or equivalent. PRs with linter errors are blocked until fixed.
3. No use of deprecated APIs. Any planned upgrade or removal of a widely-used API requires a migration plan and a MINOR or MAJOR version bump depending on impact.
4. UX and accessibility checks are required for UI changes: include a11y checks and visual validation screenshots when relevant.
5. CI MUST provide a constitution check job that verifies docs updated (if code/UX changes), tests exist, and the workflow uses LTS toolchains.

## Governance

1. The Constitution is the authoritative cross‑cutting set of rules. Amendments must be made via PR and documented in the change log (`docs/CHANGELOG.md`) with a clear migration plan.
2. Versioning: PATCH for clarifications/typo fixes, MINOR for adding principles or non-breaking requirements, MAJOR for removing or changing core principles.
3. Ratification and amendments MUST include tests showing the new/changed gates in CI and an explicit plan to fix prior non-compliant artefacts.
4. Security or performance remediation PRs require at least two reviewers and a passing CI pipeline before merge.

**Version**: 1.0.0 | **Ratified**: 2025-11-17 | **Last Amended**: 2025-11-17
 
