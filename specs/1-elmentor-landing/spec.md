# Feature Specification: Elmentor Landing Website

**Feature Branch**: `1-elmentor-landing`  
**Created**: 2025-11-17  
**Status**: Draft  
**Input**: Build a single-page landing website for the Elmentor Program mentorship community.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover & Join (Priority: P1)
As a prospective member I should be able to land on the site, understand the mission, view member circles and benefits, and join the program via a clear CTA so I can quickly become a member.

Why this priority: This is the core conversion flow; users must immediately understand value and be able to join.  
Independent Test: Navigate to page ➜ click CTA ➜ complete contact/join form ➜ confirmation page or toast shows success.

Acceptance Scenarios:
1. Given a first-time visitor, When they open the page, Then the hero section with the main message must be visible and the CTA must be present.
2. Given the visitor scrolls or clicks nav, When they select 'Circles' or 'Activities', Then the page must scroll smoothly to the relevant section.
3. Given a user fills the 'join' form with valid entries, When they submit, Then the system shows a success confirmation and sends an email to the admin.

---

### User Story 2 - Explore Content (Priority: P2)
As an interested user I should be able to read founder story, view news updates, and see details about activities and benefits so I can evaluate whether Elmentor fits my needs.

Independent Test: Navigate to founder story and news sections; validate content and visual layout across mobile/tablet/desktop and confirm images and links load.

Acceptance Scenarios:
1. Given the user is viewing the news section, When new items are posted, Then the timeline updates and is reachable via anchor links.

---

### User Story 3 - Bilingual Support & Accessibility (Priority: P1)
As a bilingual user (English / Arabic) I want to toggle language and experience the layout and copy in my selected language, including proper RTL layout for Arabic, so the site is inclusive.

Why: Accessibility and bilingual coverage are core to the community's audience.  
Independent Test: Toggle the language control and confirm text updates and RTL is applied on the fly (or page reload) for Arabic with no layout regressions.

Acceptance Scenarios:
1. Given a visitor in Arabic locale or who selects Arabic, When the page displays, Then text should read in Arabic and the UI should use RTL layout, including mirrored icons/positions where appropriate.
2. Given a visitor selects English, When toggled, Then the interface is LTR and copy is in English.

---

### Edge Cases
- What happens when translations are missing? Fallback to English copy and log missing translation for later editorial work.
- How does the page behave with JS disabled? Provide server-rendered content where possible and ensure CTAs still function via HTML forms.

## Requirements *(mandatory)*

### Functional Requirements
- FR-001: The site MUST be a single-page application with semantic sections for: hero, about, circles, activities/benefits, founder story, news/updates, contact/join, footer.
- FR-002: The nav bar MUST include anchor links for every section and reveal a language toggle for English/Arabic.
- FR-003: Smooth scrolling MUST be implemented for internal navigation; anchor links MUST provide hash-based routing for direct linking.
- FR-004: The hero MUST include a headline, sub-headline and a prominent CTA that scrolls to the contact/join section.
- FR-005: The contact/join form MUST validate inputs and store submissions (controlled via mock or backend when available); show success confirmation.
- FR-006: The site MUST support bilingual copy with language toggle and proper RTL layout for Arabic.
- FR-007: All UI elements MUST be accessible (WCAG AA baseline): keyboard navigable, ARIA labels, sufficient contrast.
- FR-008: The site MUST be responsive, optimized for mobile-first, and tested across a set of breakpoints.
- FR-009: The build MUST be optimized for performance; images must be responsive; preconnect/prefetch used where helpful.
- FR-010: SEO & metadata MUST be included (title, meta description, OpenGraph, canonical link), and structured data for events/news where appropriate.

*Possible clarification*:
- FR-011: (RESOLVED: Option C) Auto-translate first (machine translation) + manual QA later. This will provide fast initial bilingual coverage with a planned editorial workflow to improve quality and cultural nuances.

### Key Entities
- Hero: {title, subtitle, action_label, background_image}
- Circle: {id, title, summary, member_count, link}
- Activity: {id, title, description, date, type}
- FounderStory: {id, name, bio, image}
- NewsItem: {id, title, content, date, image}
- ContactSubmission: {name, email, message, source}

## Success Criteria *(mandatory)*
### Measurable Outcomes
- SC-001: Primary CTA click-to-complete join flow success rate >= 95% for valid forms.
- SC-002: Lighthouse Performance score ≥ 60 for mobile and desktop smoke tests in CI; accessibility score ≥ 80.
- SC-003: Page load (First Contentful Paint) ≤ 3s on regular mobile networks with optimized assets.
- SC-004: Language toggle switches and displays content within 200ms for client-side load or after page reload for server-side.
- SC-005: Navigation anchor links work with hash-based routing for deep linking; 100% of nav anchors map to sections.

## Assumptions
- A minimal content set (text and hero image) will be provided to fill sections; if not, placeholder copy will be used.
- Backend for form submission may be replaced with a static stub (Formspree/Netlify forms) until an API is available.

## Security & Performance Constraints
- Avoid third-party scripts that block rendering or contribute to high LCP.
- Track bundle sizes in CI and set budgets; use tree-shaking and code-splitting for non-critical components.

## Accessibility & Right-to-Left Considerations
- RTL must mirror layout rules and adjust alignment, navigation order, and iconography when Arabic is selected.
- Provide screenreader labels and landmarks for all sections.

## Internationalization Strategy
- Use resource files (key-value pairs) per language (e.g., `i18n/en.json` and `i18n/ar.json`).
- Preload the user's known locale and enable manual override via language control.

## Testing Plan
- Unit tests for components (hero, nav, contacts, language toggle).
- Integration/E2E tests that simulate joining flow and language toggling using an automated end-to-end test framework.
- Visual regression tests for responsive breakpoints and RTL layout.

## Translation Source & Editorial Workflow (CHOICE: C)
**Context**: Implementation requires translations for all copy.  
**What we need to know**: Who will supply translations and what format/ownership will the editorial content follow?  
**Suggested Answers**:

| Option | Answer | Implications |
|---|---|---|
| A | The team provides translations in `i18n/*.json` | Simple to implement; requires editor time to maintain files |
| B | A translation agency manages canonical Arabic copy | Requires a small budget and an editorial pipeline for updates |
| C | Use auto-translation + manual QA later (SELECTED) | Faster initial release; translations are machine-generated and added to `i18n/ar.json` automatically; follow-up PRs for editorial QA are required |
| Custom | Provide an alternate plan | Implementation will follow custom plan |

**Selected**: Option C — Auto-translate first with manual QA on an editorial backlog.

### Implementation notes for Option C

1. Auto-generate `i18n/ar.json` by using a machine translation step that converts English resource keys to Arabic strings. Commit generated files under `i18n/` with a `TODO: QA` note in the commit message.
2. Create an editorial backlog labeled `i18n-review` and assign items for native-speaker QA. PRs from editorial work must update `i18n/ar.json` and include a short QA note.
3. The site will fallback to English copy for any missing translations. Log or track missing translations to the editorial backlog.
4. Add a small CI job in the Pages pipeline to detect changes in `i18n/` and flag any auto-generated commits so reviewers can prioritize QA.

### Acceptance scenario for Option C
1. Given the site is deployed with machine-generated Arabic copy, When the user toggles to Arabic, Then content is readable (machine-translated) and a `TODO: QA` label appears in the editorial backlog for later review.

*** End of spec ***
