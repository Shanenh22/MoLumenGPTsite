# Google Analytics 4

The site must work when `PUBLIC_GA_MEASUREMENT_ID` is blank. Add the Google tag in one layout-level adapter only after consent and privacy review.

Approved event-name plan: `reading_finder_start`, `reading_finder_complete`, `reading_recommendation_view`, `service_view`, `booking_start`, `booking_embed_open`, `booking_external_fallback`, `newsletter_signup`, `lead_magnet_request`, `video_play`, `video_platform_open`, `chart_explorer_start`, `chart_explorer_interaction`, `current_sky_filter`, and `contact_submit`.

Allowed parameters are short non-personal identifiers such as service slug, content category, tool step, placement, and platform. Never send names, emails, phone numbers, birth dates/times/locations, time zones tied to a person, intake answers, accessibility needs, or free-text questions.

After activation, verify events in GA4 Realtime and DebugView, register needed custom dimensions, test consent behavior, and document data retention.
