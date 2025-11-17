# CI Guidelines

This project uses GitHub Actions. The constitution requires pinned Actions and LTS toolchains.

- Use Node LTS (e.g., 20) in `actions/setup-node@v4`.
- Pin official Actions to their major versions (e.g., `actions/checkout@v4`).
- CI jobs:
  - lint + unit tests
  - i18n key coverage check (optional or warning only for generated i18n)
  - Lighthouse smoke test
  - pages deploy (main branch only)

Lighthouse is configured in `/.github/workflows/ci.yml` as a smoke check. If you want to change thresholds, update `budget` in the action step.

 Pages deployment uses the modern upload/deploy pattern — `actions/upload-pages-artifact@v4` + `actions/deploy-pages@v4` (stable notes: v4 is the latest major release as of 2025-11-17). Pin the major release, and update when new majors are released.
 DO NOT use branch-based deploys (e.g., `peaceiris/actions-gh-pages@v*` or `JamesIves/github-pages-deploy-action`) — the modern upload/deploy pattern is preferred.

- Use Dependabot to keep pinned Actions and npm dependencies up-to-date; see `.github/dependabot.yml` (runs weekly for Actions and npm).
- OPTIONAL: Configure Dependabot to auto-merge small non-major upgrades; prefer manual review for new major releases of pinned Actions.
