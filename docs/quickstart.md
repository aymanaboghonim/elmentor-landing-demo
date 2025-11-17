# Quickstart — Elmentor Landing

This quickstart shows how to run the app locally.

Requirements: Node LTS (20.x+)

Install dependencies:

```pwsh
npm install
```

Start dev server:

```pwsh
npm run dev
```

Build for production:

```pwsh
npm run build
```

Preview production build:

```pwsh
npm run preview
```

Add docs and change log updates when you change public-facing copy.

## Contact Form (static integration)

This site uses a static form integration for minimal hosting. Example: Formspree.

1. Sign up at https://formspree.io and create a form; copy your form id.
2. Update `src/components/ContactForm.jsx` `action` attribute and the fetch endpoint to use your `https://formspree.io/f/{formId}`.
3. The form will work both with JavaScript (fetch) and when JS is disabled (native form POST), making it suitable for GitHub Pages.
