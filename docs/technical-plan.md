# Technical plan

## Architecture

Astro with TypeScript and static output. Use content collections for editorial sets, typed data for navigation/integrations, semantic Astro components, and a small number of framework-free client scripts for disclosures, dialog navigation, filters, facades, and tools. No database or paid CMS dependency.

## Quality tooling

- Type checking: `astro check` and strict TypeScript.
- Formatting/linting: Prettier, ESLint, Stylelint where signal justifies it.
- Tests: Vitest for pure decision/data logic; Playwright for keyboard/mobile flows and broken links; axe for automated accessibility checks.
- Build checks: production build, HTML validation, internal-link scan, structured-data fixtures, Lighthouse CI on representative routes.
- Manual matrices: keyboard, screen reader spot checks, reduced motion, zoom/reflow, 320/360/375/390/430/768 widths, focus not obscured, safe areas, 404/redirects, embeds disabled.

## Performance budget

Static HTML; route-level CSS/JS; no general UI framework; self-hosted licensed WOFF2 subset if available; responsive AVIF/WebP; declared image dimensions; one eager hero image; lazy below-fold media; facade YouTube embeds; third parties load after intent/consent where appropriate.

## Security and privacy

Only public IDs belong in `PUBLIC_` environment variables. Cal.com and MailerLite integrations use public embed/form configuration; any future secret token must be server-side. Birth information never enters source control, analytics, localStorage, sessionStorage, or URL parameters. Analytics has an explicit event/parameter allowlist.

## Hosting and environments

Cloudflare Pages preview/staging first: build command `pnpm build`, output `dist`. Keep staging out of search via access controls where available plus `noindex`. Production deployment and DNS migration remain a separate approval gate with backup, rollback, redirects, verification, and post-launch checks.

## Implementation gates

1. Owner approves service catalog, prices, policies, credentials, and content rights.
2. Implement design system and global shell.
3. Implement verified service/content models and core pages.
4. Implement tools from approved service mappings/definitions.
5. Configure real integrations in staging.
6. Complete automated and manual QA.
7. Stakeholder review; only then prepare production migration.

