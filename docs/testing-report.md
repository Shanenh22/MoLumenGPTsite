# Testing report

Date: 2026-08-02

## Completed

- Strict Astro/TypeScript diagnostics: 36 source files, no errors or warnings.
- Production static build: 33 routes generated successfully.
- Sitemap index, robots file, custom 404, redirects, canonical URLs, social metadata, and structured-data baseline generated.
- Responsive CSS includes single-column reflow and explicit 320–768-friendly navigation/tool layouts.
- Mobile menu implements labeled controls, dialog semantics, Escape, focus containment, focus restoration, scroll lock, and safe-area padding.
- Reading Finder implements Back, Restart, progress, focus movement, live status, keyboard-native controls, no account, and no persistence.
- Chart Explorer implements tabs, arrow/Home/End keyboard behavior, equivalent text, mobile reflow, and no birth-data input.
- Reduced-motion override and visible focus styles are present.

## Blocked until integrations/content exist

- Real Cal.com/Stripe booking, payment, confirmation, reminder, cancellation, and completion tracking.
- MailerLite form success/error/consent states.
- YouTube/Instagram facade keyboard behavior and transcript metadata.
- Current Sky filters with real reviewed events.
- Real-image alternative text and crop review.
- Final policy, testimonial, credential, service, and price verification.
- Field Core Web Vitals and production Lighthouse measurements.

## Manual pre-approval checklist

Test keyboard-only navigation, 200% and 400% zoom/reflow, common screen readers, 320/360/375/390/430/768 widths, reduced motion, high contrast, external embeds, 404s, redirects, social previews, structured-data validators, and console errors on the deployed staging URL.
