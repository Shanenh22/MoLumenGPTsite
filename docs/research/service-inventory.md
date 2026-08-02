# Service inventory

Status labels: **verified-live** means named in current public copy; **reference-only** means present only in Mo1; **unclear** means terminology conflicts or scope cannot be established. No price is verified.

| Candidate service                      | Evidence                                      | Status         | Duration               | Price         | Required decision                                                                             |
| -------------------------------------- | --------------------------------------------- | -------------- | ---------------------- | ------------- | --------------------------------------------------------------------------------------------- |
| Natal Chart Astrological Consultation  | Live Services page                            | verified-live  | 90 min                 | Not published | Confirm exact name, price, format, inclusions, and whether first-time clients must begin here |
| Solar Return Astrological Consultation | Live Services page                            | verified-live  | Not published          | Not published | Confirm availability, prerequisites, duration, and deliverables                               |
| Life Changes Astrological Consultation | Live Services and homepage                    | verified-live  | Not published          | Not published | Confirm scope, current name, duration, and whether it subsumes transit work                   |
| Relationship Astrological Consultation | Live Services and homepage                    | verified-live  | Not published          | Not published | Confirm whether synastry and composite are always included and whose birth data is required   |
| Relocation/location consultation       | Live homepage “Focus on Where”                | unclear        | Not published          | Not published | Confirm whether this is a bookable service or explanatory theme within Life Changes           |
| Transit Reading                        | Mo1 only                                      | reference-only | “year ahead” only      | Not published | Confirm whether current and distinct from Life Changes/Solar Return                           |
| Horary — One Question                  | Mo1 only; About mentions a horary certificate | reference-only | Written answer claimed | Not published | Confirm current offering, delivery format, turnaround, boundaries, and price                  |
| Further Out in the Sky                 | Mo1 only                                      | reference-only | Not published          | Not published | Confirm whether it has ever been offered and define owner-approved scope                      |
| Gift a Reading                         | Mo1 navigation only                           | reference-only | N/A                    | Not published | Confirm availability, expiry/refund policy, and eligible services                             |

## Required structured fields after confirmation

`name`, `shortName`, `slug`, `purpose`, `method`, `bestFor`, `notFor`, `durationMinutes`, `price`, `currency`, `format`, `birthInformation`, `intake`, `included`, `deliverables`, `preparation`, `cancellationPolicy`, `reschedulingPolicy`, `bookingEventId`, `relatedServices`, `relatedEducation`, `featured`, `availability`, `reviewStatus`, and `source`.

## Safe implementation rule

Do not generate service routes or Reading Finder outcomes from reference-only records. Keep them in a non-published research fixture until the owner confirms them.
