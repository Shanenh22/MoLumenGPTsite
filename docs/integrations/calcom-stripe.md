# Cal.com and Stripe staging setup

1. Confirm the approved service catalog, prices, durations, formats, intake fields, and policies.
2. Create one Cal.com event type per approved service and connect Stripe in Cal.com. Never place a Stripe secret key in this repository or a `PUBLIC_` variable.
3. Require explicit acceptance of the booking policy. Keep optional marketing consent separate and unselected.
4. Ask only for necessary birth data and explain its purpose. Cal.com—not this static site—handles submission and storage.
5. Add the public username/base URL and event identifiers through deployment environment settings.
6. Replace the disabled staging panel with the reusable embed/facade and retain a visible hosted Cal.com fallback.
7. Verify time-zone display, payment, confirmation, calendar addition, reminders, preparation, cancellation/rescheduling links, and meeting location.
8. Fire `booking_start` on intentional entry. Fire completion only from a reliable Cal.com success event or confirmed return page.

TidyCal is a lower-complexity fallback if its payment, intake, time-zone, reminder, policy, and accessibility behavior meets the approved workflow. Re-test every requirement before choosing it.
