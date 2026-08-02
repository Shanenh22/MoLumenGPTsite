# URL inventory and preliminary migration disposition

Accessed: 2026-08-02. The live Squarespace sitemap returned 55 URLs. The root homepage is crawlable but omitted from that sitemap. Category/tag pages are listed here as groups to keep the inventory readable.

## Core and utility pages

| Current URL          | Finding                                    | Preliminary disposition                              |
| -------------------- | ------------------------------------------ | ---------------------------------------------------- |
| `/`                  | Main brand/service homepage                | Rewrite at `/`                                       |
| `/about`             | Biography, credentials, philosophy         | Split to `/about/`, `/approach/`, `/credentials/`    |
| `/services-2`        | Current service overview                   | Redirect to `/readings/` after service confirmation  |
| `/appointments`      | Broken/unverified Acuity demo embed        | Redirect to `/book/` after Cal.com setup             |
| `/contact`           | Newsletter-led contact page                | Rewrite at `/contact/`                               |
| `/privacy`           | Dated policy                               | Replace at `/privacy/` after professional review     |
| `/terms`, `/terms-1` | Conflicting terms; one template/lorem page | Consolidate to `/terms/`; remove template content    |
| `/cookies-2`         | Squarespace-specific cookie copy           | Redirect to reviewed cookie information section/page |
| `/404`               | Existing utility page                      | Replace with static `/404.html` behavior             |
| `/thank-you`         | Generic confirmation                       | Keep only if tied to a real form state; noindex      |

## Editorial pages

| Current URL                                 | Finding             | Preliminary disposition                                                  |
| ------------------------------------------- | ------------------- | ------------------------------------------------------------------------ |
| `/blog`                                     | Six-article archive | Redirect to `/articles/` or retain `/blog/` via final migration decision |
| `/blog/new-moon-in-pisces-3knsx-ty3bb`      | Dated article       | Migrate with clean slug after editorial review                           |
| `/blog/new-moon-in-aqaurius-3knsx`          | Typo in slug        | Migrate with corrected Aquarius slug and 301                             |
| `/blog/new-moon-in-sagittarius`             | Dated article       | Migrate with date/context preserved                                      |
| `/blog/scorpio-new-moon-november-2024`      | Dated article       | Migrate after review                                                     |
| `/blog/libra-new-moon-october-2024-eclipse` | Dated article       | Migrate after review                                                     |
| `/blog/virgo-new-moon-september-2024`       | Dated article       | Migrate after review                                                     |

## Archive URLs

The sitemap exposes 7 category pages and 16 tag pages. Categories: `Lunations`, `Writing Tips`, `Freelance`, `Entrepreneurship`, `New Moon`, `Copywriting`, `Astrological Transits`. Tags: `October 2024`, `February 2025`, `Astrology`, `December 2024`, `New Moon`, `New Moon Intentions`, `Kite Pattern`, `November 2024`, `Eclipse Season`, `Transits`, `January 2025`, `Year of the Wood Snake`, `September 2024`, `LunarNewYear2025`, `New Moon in Pisces`, plus archive variants surfaced by Squarespace.

Astrology-relevant archive URLs should redirect to a curated topic or article archive only when there is a useful equivalent. Unrelated template categories should return 410 or redirect only if a genuinely equivalent destination exists; do not blanket-redirect everything to the homepage.

## Template, funnel, and duplicate pages

`/bonus-pages`, `/waitlist`, `/courses`, `/sales-page`, `/lead-generation`, `/newsletter-landing`, `/instagram-landing`, `/coming-soon-copy`, `/instagram-landing-copy`, `/newsletter-landing-copy`, `/404-copy`, `/privacy-copy`, `/terms-copy`, `/site-credit-copy`, and `/home-copy-of-mo-lumen` are template, funnel, duplicate, or staging-like pages. Review any unique owner content; otherwise remove from the index and map only to a meaningful replacement.

## Mo1 reference

The reference exposes one confirmed public document: `https://shanenh22.github.io/Mo1/`. Its navigation proposes many routes but points them at currently missing `molumen.com` URLs. These links are architecture hypotheses, not evidence of published pages or approved services.
