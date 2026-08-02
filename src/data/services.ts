export interface Service {
  slug: string;
  name: string;
  shortName: string;
  purpose: string;
  description: string;
  method: string;
  bestFor: string[];
  duration: string;
  durationMinutes: number;
  price: string;
  priceAmount: number;
  currency: 'USD';
  format: string;
  birthInfo: string;
  eligibility: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    slug: 'new-client-natal-chart-reading-90',
    name: 'New Client Natal Chart Reading — 90 Minutes',
    shortName: 'New Client Natal Reading — 90 min',
    purpose:
      'A spacious first reading for exploring your birth chart, current influences, and the life areas that matter most to you.',
    description:
      'Mo interprets the positions and connections of the planets in your birth chart. She also explores how the current sky interacts with your natal chart and influences different areas of your life. After booking, you can direct the focus through the intake form and choose how interactive you would like the conversation to be.',
    method: 'Natal chart with current planetary influences',
    bestFor: [
      'New clients who want a comprehensive first reading',
      'Questions spanning several areas of life',
      'Time for deeper discussion and interaction',
    ],
    duration: '90 minutes',
    durationMinutes: 90,
    price: '$200',
    priceAmount: 200,
    currency: 'USD',
    format: 'Live consultation; final meeting format confirmed during booking',
    birthInfo: 'Birth date, exact time when available, and birth location',
    eligibility: 'Available to new clients.',
    featured: true,
  },
  {
    slug: 'new-client-natal-chart-reading-60',
    name: 'New Client Natal Chart Reading — 60 Minutes',
    shortName: 'New Client Natal Reading — 60 min',
    purpose:
      'A focused first reading of your natal chart and the current planetary influences most relevant to your questions.',
    description:
      'Mo interprets the positions and connections of the planets in your birth chart. She also explores how the current sky interacts with your natal chart and influences different areas of your life. After booking, you can direct the focus through the intake form and choose how interactive you would like the conversation to be.',
    method: 'Natal chart with current planetary influences',
    bestFor: [
      'New clients with a defined focus',
      'A concise introduction to your natal chart',
      'One or two primary areas of life',
    ],
    duration: '60 minutes',
    durationMinutes: 60,
    price: '$150',
    priceAmount: 150,
    currency: 'USD',
    format: 'Live consultation; final meeting format confirmed during booking',
    birthInfo: 'Birth date, exact time when available, and birth location',
    eligibility: 'Available to new clients.',
    featured: true,
  },
  {
    slug: 'more-clarity-within-three-months',
    name: 'Want More Clarity — Established Client Within 3 Months',
    shortName: 'More Clarity — within 3 months',
    purpose:
      'Go deeper into part of your chart or future planetary influences soon after your initial natal consultation.',
    description:
      'Within three months of your initial natal consultation with Mo, you may want to explore part of your chart or upcoming aspects in greater depth. This session gives you a full hour to continue the conversation wherever it feels most useful.',
    method: 'Focused natal and transit follow-up',
    bestFor: [
      'A question that emerged after your first reading',
      'Deeper exploration of one chart theme',
      'A closer look at upcoming influences',
    ],
    duration: '60 minutes',
    durationMinutes: 60,
    price: '$100',
    priceAmount: 100,
    currency: 'USD',
    format: 'Live follow-up consultation',
    birthInfo: 'Existing chart information and any updated context',
    eligibility: 'For established clients within three months of an initial natal consultation.',
  },
  {
    slug: 'more-clarity-established-client',
    name: 'Want More Clarity — Established Client',
    shortName: 'More Clarity — established client',
    purpose:
      'Return to your chart for deeper discussion of a specific theme, question, or future planetary influence.',
    description:
      'After your initial natal consultation with Mo, you may want to explore part of your chart or upcoming aspects in greater depth. This session gives you a full hour to focus on what you would most like to discuss.',
    method: 'Focused natal and transit follow-up',
    bestFor: [
      'Returning clients with a defined focus',
      'Deeper exploration of a chart theme',
      'Questions about future influences',
    ],
    duration: '60 minutes',
    durationMinutes: 60,
    price: '$130',
    priceAmount: 130,
    currency: 'USD',
    format: 'Live follow-up consultation',
    birthInfo: 'Existing chart information and any updated context',
    eligibility: 'For established clients who have completed an initial natal consultation.',
  },
  {
    slug: 'life-changes-consultation',
    name: 'Life Changes Astrological Consultation',
    shortName: 'Life Changes Consultation',
    purpose:
      'Explore the emerging themes around a new job, move, change in direction, or another meaningful transition.',
    description:
      'Life continues to change after a natal reading. Mo examines how the current sky interacts with your natal chart to illuminate the themes surrounding transitions such as a new job, changing homes, or a desired change in direction. You can direct the focus through the intake form after booking.',
    method: 'Natal chart with current planetary transits',
    bestFor: [
      'A new job, move, or change in direction',
      'A developing life transition',
      'Understanding the themes influencing your present season',
    ],
    duration: '60 minutes',
    durationMinutes: 60,
    price: '$130',
    priceAmount: 130,
    currency: 'USD',
    format: 'Live consultation',
    birthInfo: 'Existing chart information and updated life context',
    eligibility: 'For established clients who have completed a natal chart reading.',
    featured: true,
  },
  {
    slug: 'solar-return-reading',
    name: 'Solar Return Reading',
    shortName: 'Solar Return Reading',
    purpose: 'Explore the themes and changing patterns of the year beginning around your birthday.',
    description:
      'Near your birthday, the Sun returns to its original position in your natal chart while the other planets occupy new positions. Mo reads the resulting patterns and relationships to explore the emerging themes of the year. You can direct the focus through the intake form after booking.',
    method: 'Solar return chart in relationship with the natal chart',
    bestFor: [
      'A yearly birthday-season review',
      'Reflection and preparation for the coming year',
      'Returning clients who want an annual perspective',
    ],
    duration: '60 minutes',
    durationMinutes: 60,
    price: '$130',
    priceAmount: 130,
    currency: 'USD',
    format: 'Live consultation',
    birthInfo: 'Existing natal information and the location relevant to the solar return',
    eligibility: 'For established clients who have completed a natal chart reading.',
    featured: true,
  },
  {
    slug: 'monthly-personal-transits',
    name: '1-on-1 Individualized Monthly Personal Transits',
    shortName: 'Monthly Personal Transits',
    purpose:
      'A personalized monthly conversation about how current planetary movements interact with your chart.',
    description:
      'After a natal chart reading, meet with Mo monthly via Zoom to discuss how the month’s planetary movements resonate with your personal chart. This is individualized to your chart rather than a general list of transits from a podcast or blog.',
    method: 'Monthly personalized transit review',
    bestFor: [
      'Ongoing awareness of current influences',
      'A regular reflective astrology practice',
      'Returning clients who prefer shorter monthly conversations',
    ],
    duration: '30 minutes',
    durationMinutes: 30,
    price: '$75',
    priceAmount: 75,
    currency: 'USD',
    format: 'Monthly one-to-one Zoom consultation',
    birthInfo: 'Existing natal chart information',
    eligibility: 'For established clients who have completed a natal chart reading with Mo.',
  },
  {
    slug: 'relationship-astrology-consultation',
    name: 'Relationship Astrology Consultation',
    shortName: 'Relationship Consultation',
    purpose:
      'Explore communication, affinity, friction, and the patterns that shape a relationship between two people.',
    description:
      'Mo examines the interaction between both natal charts. Areas of affinity and potential disharmony are highlighted and discussed, including preferred communication styles and what helps each person feel cared for and secure. The goal is insight that can support a more constructive bond—not a deterministic compatibility verdict.',
    method: 'Comparison of two natal charts',
    bestFor: [
      'Romantic partners',
      'Family, friendship, or working relationships',
      'Two people seeking to understand recurring dynamics',
    ],
    duration: '90 minutes',
    durationMinutes: 90,
    price: '$275',
    priceAmount: 275,
    currency: 'USD',
    format: 'Live consultation; both people are preferably present',
    birthInfo: 'Birth date, time when available, and location for both people',
    eligibility: 'Both parties’ participation is preferred.',
    featured: true,
  },
  {
    slug: 'quick-check-in-one-topic',
    name: 'Quick Check-In Astrological Consultation — One Topic Only',
    shortName: 'Quick Check-In — one topic',
    purpose:
      'A short, focused look at one suddenly chaotic situation or one specific area of personal growth.',
    description:
      'Use the appointment form to describe one area you want to explore. Mo examines and discusses the astrological influences affecting that situation, with an emphasis on perspective and more conscious choices.',
    method: 'Focused natal and transit check-in',
    bestFor: [
      'One clearly defined topic',
      'A sudden change or chaotic situation',
      'Focused reflection on growth in one area of life',
    ],
    duration: '30 minutes',
    durationMinutes: 30,
    price: '$60',
    priceAmount: 60,
    currency: 'USD',
    format: 'Live focused consultation',
    birthInfo: 'Existing natal chart information and one topic submitted after booking',
    eligibility: 'For existing clients only. Limited to one topic.',
  },
];
