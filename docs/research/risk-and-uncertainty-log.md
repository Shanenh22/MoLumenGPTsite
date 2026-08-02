# Risk and uncertainty log

| Priority | Risk or uncertainty | Impact | Required mitigation |
|---|---|---|---|
| Critical | No verified price list | Cannot meet transparency goal or build accurate booking | Owner supplies current USD prices and tax/payment details |
| Critical | Current booking embed resolves to demo | Lost bookings and misleading implementation assumptions | Confirm current booking account; configure Cal.com events in staging |
| Critical | Service catalog conflicts across live and Mo1 | Risk of inventing or omitting offerings | Owner approves canonical service inventory |
| Critical | Terms page contains placeholder/template content | Legal/trust risk | Replace with professionally reviewed drafts before launch |
| High | Credentials and offices may be outdated | Misrepresentation risk | Owner verifies each claim and supplies preferred wording/evidence |
| High | Photo and stock-asset rights are unclear | Copyright and brand risk | Obtain original files, licenses, photographer credits, and consent |
| High | No approved testimonials were found in surfaced core pages | Trust section cannot launch as specified | Owner supplies approved testimonials and attribution permissions |
| High | Lead magnet file does not exist in supplied materials | Cannot promise delivery | Create outline/template only; gate publication until approved PDF exists |
| High | Current Sky archive is stale | “Current” content can mislead | Date every item, use display windows, verification dates, and archive rules |
| Medium | Privacy policy is Squarespace-specific and dated | Vendor/data description may be inaccurate | Map actual Cal.com, Stripe, MailerLite, Cloudflare, analytics, and embeds |
| Medium | Mo1 contains unverified claims and deliverables | Potential factual invention | Treat as hypotheses until explicit approval |
| Medium | Root homepage absent from live sitemap | Discoverability signal weakness | Generate complete canonical sitemap in Astro |
| Medium | Staging could be indexed prematurely | Duplicate/canonical confusion | Password/access-control where practical plus `noindex` until approval |

