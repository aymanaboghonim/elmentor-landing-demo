# Elmentor Landing Demo

This repository is a minimal Vite + React site that follows the project Constitution requiring modern docs, GitHub Pages deployment, LTS-only toolchains, tests & lint gates, no deprecated libs, and performance thresholds.

Local Quickstart:

```pwsh
npm install
npm run dev
```

Build & Preview:

```pwsh
npm run build
npm run preview
```

Auto-translation:

```pwsh
npm run i18n:generate
```

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io) for form submissions without requiring a backend server.

### Setup Instructions:

1. Sign up for a free account at [https://formspree.io](https://formspree.io)
2. Create a new form in your Formspree dashboard
3. Copy your form ID (it looks like `abc123xyz`)
4. Open `src/components/ContactForm.jsx`
5. Replace `'your-form-id'` with your actual Formspree form ID on line 40:
   ```javascript
   const formId = 'abc123xyz' // Replace with your Formspree form ID
   ```
6. Save the file and rebuild the project

### Features:

- ✅ Client-side form validation (name, email)
- ✅ Loading state during submission
- ✅ Success/error feedback messages
- ✅ Accessible form with ARIA attributes
- ✅ Bilingual support (English/Arabic)
- ✅ Responsive design
- ✅ Works without JavaScript (graceful degradation)

Note: This project aims for minimal dependencies, accessibility, and dual-language support (English/Arabic).
