# Content models

## Astro collections

- `services`: publish only verified offerings; typed operational and relationship fields.
- `articles`: title, description, author, published/updated dates, topics, hero, related services/content, review status, sources.
- `glossary`: term, short definition, full explanation, related terms/pages, review status.
- `videos`: platform, external ID/URL, title, description, category, thumbnail, published date, duration, featured, transcript status, related content.
- `skyEvents`: title, type, timestamps/time zone, end date, points, sign, short description, article, featured, display window, source note, verified date, interpretation label.
- `testimonials`: quote, approved attribution, permission status, source, production visibility.
- `courses` and `guides`: future-only models with availability gates; no product schema until real.

## Central TypeScript data

Navigation, footer, contact, social links, FAQs, integration settings, analytics event allowlist, SEO defaults, tool definitions, and design tokens.

## Review states

Every factual/editorial record supports `draft`, `owner-review`, `approved`, and `archived`. Production builds exclude unapproved testimonials, unavailable services, expired Current Sky entries, and unfinished products.

