export type ServiceStatus = 'verified' | 'owner-review';

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  purpose: string;
  method: string;
  bestFor: string[];
  duration: string;
  price: string;
  format: string;
  birthInfo: string;
  status: ServiceStatus;
  featured?: boolean;
}

export const services: Service[] = [
  {
    slug: 'natal-chart-consultation',
    name: 'Natal Chart Astrological Consultation',
    shortName: 'Natal chart consultation',
    purpose: 'A wide-angle view of your patterns, strengths, tensions, and emerging life themes.',
    method: 'Natal chart with current planetary context',
    bestFor: [
      'Broad self-understanding',
      'A first reading with Mo',
      'Questions across several life areas',
    ],
    duration: '90 minutes',
    price: 'Price awaiting owner confirmation',
    format: 'Format awaiting owner confirmation',
    birthInfo: 'Birth date, exact time when available, and birth location',
    status: 'verified',
    featured: true,
  },
  {
    slug: 'life-changes-consultation',
    name: 'Life Changes Astrological Consultation',
    shortName: 'Life changes consultation',
    purpose:
      'Perspective on a current transition involving work, family, home, direction, or timing.',
    method: 'Current and emerging chart themes',
    bestFor: [
      'A season of change',
      'A decision with timing questions',
      'Understanding what is being emphasized now',
    ],
    duration: 'Awaiting owner confirmation',
    price: 'Price awaiting owner confirmation',
    format: 'Format awaiting owner confirmation',
    birthInfo: 'Birth date, exact time when available, and birth location',
    status: 'verified',
    featured: true,
  },
  {
    slug: 'relationship-consultation',
    name: 'Relationship Astrological Consultation',
    shortName: 'Relationship consultation',
    purpose: 'A thoughtful look at the dynamics, points of ease, and tensions between two people.',
    method: 'Synastry and composite chart techniques',
    bestFor: ['Romantic relationships', 'Family or friendship dynamics', 'Working relationships'],
    duration: 'Awaiting owner confirmation',
    price: 'Price awaiting owner confirmation',
    format: 'Format awaiting owner confirmation',
    birthInfo: 'Birth information for both people',
    status: 'verified',
    featured: true,
  },
  {
    slug: 'solar-return-consultation',
    name: 'Solar Return Astrological Consultation',
    shortName: 'Solar return consultation',
    purpose:
      'A look at the areas of life receiving fresh emphasis in the year around your birthday.',
    method: 'Solar return chart in context with the natal chart',
    bestFor: ['A birthday-year overview', 'Annual reflection and planning', 'Returning clients'],
    duration: 'Awaiting owner confirmation',
    price: 'Price awaiting owner confirmation',
    format: 'Format awaiting owner confirmation',
    birthInfo: 'Birth date, exact time, birth location, and current location',
    status: 'verified',
  },
];
