# Confirmed service inventory

Source: owner-supplied appointment listing, received 2026-08-02. Prices are displayed in USD.

| Service                                         | Eligibility                                                           |   Duration | Price |
| ----------------------------------------------- | --------------------------------------------------------------------- | ---------: | ----: |
| New Client Natal Chart Reading — 90 min         | New clients                                                           | 90 minutes |  $200 |
| New Client Natal Chart Reading — 60 min         | New clients                                                           | 60 minutes |  $150 |
| Want More Clarity — within 3 months             | Established clients within three months of initial natal consultation | 60 minutes |  $100 |
| Want More Clarity — Established Client          | Established clients                                                   | 60 minutes |  $130 |
| Life Changes Astrological Consultation          | Clients who have completed a natal chart reading                      | 60 minutes |  $130 |
| Solar Return Reading                            | Clients who have completed a natal chart reading                      | 60 minutes |  $130 |
| 1-on-1 Individualized Monthly Personal Transits | Clients who have completed a natal chart reading with Mo              | 30 minutes |   $75 |
| Relationship Astrology Consultation             | Both parties preferably present                                       | 90 minutes |  $275 |
| Quick Check-In — One Topic Only                 | Existing clients; one topic                                           | 30 minutes |   $60 |

## Implementation decisions

- The two new-client natal readings have separate routes because their durations, prices, and expected depth differ.
- Returning-client offerings clearly display their prerequisites before booking.
- The Reading Finder first establishes whether someone is new or returning, then considers focus, depth, and timing since the initial reading.
- “Accurate gauge of compatibility” was rewritten as an exploration of relationship dynamics. This preserves the service purpose without implying deterministic accuracy.
- “Positive choices” and planetary “influence” are framed as reflection and perspective, consistent with Mo’s nonfatalistic positioning.

## Structured fields

The implementation stores `name`, `shortName`, `slug`, `purpose`, `description`, `method`, `bestFor`, `duration`, `durationMinutes`, `price`, `priceAmount`, `currency`, `format`, `birthInfo`, `eligibility`, and `featured` in `src/data/services.ts`.

## Remaining operational confirmation

Cal.com event identifiers, exact meeting-format choices, deliverables, booking policy, cancellation/rescheduling terms, and intake wording still require owner configuration or approval before payment is enabled.
