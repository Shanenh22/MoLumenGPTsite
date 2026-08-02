# Mo Lumen Astrology website

Research-first rebuild of [molumen.com](https://molumen.com/) for a separate Cloudflare Pages staging deployment. The live domain and its DNS are out of scope until staging is reviewed and explicitly approved.

## Current status

Phase 1 research and Phase 2 architecture are initialized. Production implementation has intentionally not started because prices, current services, policies, booking configuration, testimonial permissions, and several biography claims require owner confirmation.

Start with:

- `docs/research/content-inventory.md`
- `docs/research/service-inventory.md`
- `docs/architecture/sitemap.md`
- `docs/technical-plan.md`
- `docs/unresolved-questions.md`

## Non-negotiable content rules

- Do not invent services, prices, credentials, policies, testimonials, outcomes, or biographical facts.
- Treat `molumen.com` as the primary voice source.
- Treat the Mo1 reference as design/content hypotheses until facts are verified.
- Keep birth data out of the repository, analytics, local storage, and URLs.
- Deploy to staging first; never change `molumen.com` DNS without explicit approval.

## Planned stack

Astro, TypeScript, static HTML by default, Astro content collections, Markdown/MDX, centralized typed data, minimal client JavaScript, Cloudflare Pages, Cal.com with Stripe, MailerLite, and optional GA4.

