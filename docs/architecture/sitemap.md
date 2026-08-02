# Proposed sitemap and navigation

## Primary navigation

- Readings
- Explore Astrology
- Current Sky
- Videos
- About Mo
- Book a Reading (persistent action)

## Launch sitemap

```text
/
├── readings/
│   └── [verified-service-slug]/
├── reading-finder/
├── book/
├── how-readings-work/
├── prepare-for-your-reading/
├── frequently-asked-questions/
├── about/
├── approach/
├── credentials/
├── testimonials/                 [publish only with approved material]
├── explore/
│   ├── birth-chart-basics/
│   ├── planets/
│   ├── signs/
│   ├── houses/
│   ├── aspects/
│   ├── transits/
│   ├── relationships/
│   ├── personal-purpose/
│   └── glossary/
├── tools/explore-your-chart/
├── current-sky/
│   ├── events/
│   └── archive/
├── articles/
│   └── [slug]/
├── videos/
├── newsletter/
├── resources/
├── courses/                      [interest page only if approved]
├── guides/                       [interest page only if approved]
├── contact/
├── privacy/
├── terms/
├── disclaimer/
├── accessibility/
├── booking-policy/
└── 404.html
```

`/horoscopes/` should launch only when there is a sustainable, reviewed editorial plan. Empty category and product routes must not be published.

## Navigation behavior

Desktop uses two concise disclosures—Readings and Explore Astrology—while other items remain direct links. Mobile uses one level of expandable grouping, a visible booking action, 44×44 CSS-pixel minimum controls where practical, focus trap/restoration, Escape close, scroll lock, safe-area padding, and no nested flyouts.

## Footer groups

Readings; Learn; Current Sky & Media; About & Contact; Policies; newsletter. All labels and URLs come from centralized configuration.
