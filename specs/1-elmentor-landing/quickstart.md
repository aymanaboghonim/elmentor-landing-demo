# Quickstart: Elmentor Landing (Vite + React)

Use Node LTS and `npm` (or `pnpm`/`yarn` as you prefer). This quickstart uses JavaScript + Vite with React.

## Setup
```pwsh
npm create vite@latest elmentor-landing -- --template react
cd elmentor-landing
npm install
```

## Recommended dev steps
1. Create a lightweight `i18n` loader (see `docs/i18n.md` for details).
2. Scaffold: `components/` for `Navbar`, `Hero`, `Footer`, `Circles`, `Activities`, `Founder` and `News`.
3. Use `src/styles/` for global CSS. Prefer CSS variables and small utility classes.

## Linting & pre-commit
```pwsh
npm install --save-dev eslint prettier husky lint-staged
npx husky install
# Add lint-staged configuration and pre-commit hooks to run ESLint + Prettier
```

## CI (local run)
```pwsh
# Run tests
npm test
# Run Lighthouse smoke locally in the preview server
npm run build
npm run preview &
# then run a Lighthouse script or `lighthouse-ci` against preview URL
```

## Build & Deploy
- Build: `npm run build`
- Deploy: Use the modern `actions/upload-pages-artifact@v{MAJOR}` + `actions/deploy-pages@v{MAJOR}` workflow (pin to a major release, e.g., `@v1`). This avoids branch-based deploys and is recommended for GitHub Pages.

Notes:
- Keep the code accessible and minimal; avoid heavy CSS frameworks. If quick prototyping is needed, use a small utility like `clsx` for className conditional rendering.
- Add `i18n` tasks to automate Arabic generation per `docs/i18n.md`.

***
