# Owner guide

## Before staging can accept bookings

- Approve the canonical service inventory, price, duration, format, birth requirements, inclusions, deliverables, and availability.
- Approve cancellation, rescheduling, refund, lateness, no-show, privacy, terms, disclaimer, and cookie language with a qualified professional.
- Reconfirm credentials and memberships.
- Supply original portrait files and usage rights.
- Supply approved testimonials and publication permissions.
- Supply Cal.com, Stripe, MailerLite, YouTube, and Instagram public configuration through deployment settings.
- Approve the Current Sky verification workflow and first events.

## Safe editorial rules

Use plain language before technique, date time-sensitive material, distinguish information from interpretation, and never promise certainty. Do not publish a record marked for owner review.

## Routine updates

Services live in `src/data/services.ts`, educational topics in `src/data/learn.ts`, Current Sky entries in `src/data/sky-events.ts`, and global navigation/contact settings in `src/data/site.ts`. Run the production build before publishing.
