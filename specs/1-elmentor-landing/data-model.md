# Data Model: Elmentor Landing Feature

This spec is not a database model but a lightweight data map of entities used in the frontend for content rendering and simple interactions.

## Entities

### Hero
- id: string
- title: string
- subtitle: string
- cta_label: string
- cta_anchor: string
- background_image: url

### Circle
- id: string
- name: string
- summary: string
- members: number
- image: url
- links: [url]

### Activity
- id: string
- title: string
- description: string
- date: string
- link: url

### FounderStory
- id: string
- name: string
- bio: markdown
- avatar: url

### NewsItem
- id: string
- title: string
- content: markdown
- date: string
- image: url

### ContactSubmission (client-side only)
- name: string
- email: string
- message: string
- source: string (e.g., CTA/hero)

## Notes
- The frontend will use these entities as simple JSON objects. If a backend becomes available, expose endpoints like `/news`, `/activities`, `/circles`, and `/contact`.
- For multilingual support, store UI strings in `i18n/*.json`. Content that requires editorial translations (news, founder story) should be part of the editorial workflow and synced via content pipeline.

***
