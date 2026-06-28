import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export const PLANS = [
  {
    name: 'Starter',
    price: 59,
    description: 'Pour les freelances qui veulent automatiser leur contenu.',
    priceId: process.env.STRIPE_PRICE_STARTER!,
    features: [
      '10 articles SEO / mois',
      '20 posts LinkedIn / mois',
      '1 newsletter / semaine',
      'Marque blanche incluse',
      'Dashboard revenus',
    ],
    notIncluded: ['Outreach email auto', 'Facturation Stripe'],
    popular: false,
  },
  {
    name: 'Pro',
    price: 119,
    description: 'Pour les agences qui veulent prospecter et facturer en automatique.',
    priceId: process.env.STRIPE_PRICE_PRO!,
    features: [
      '30 articles SEO / mois',
      'Posts LinkedIn illimités',
      '3 newsletters / semaine',
      'Marque blanche incluse',
      'Outreach email 500 leads/mois',
      'Facturation Stripe auto',
    ],
    notIncluded: ['Support prioritaire'],
    popular: true,
  },
  {
    name: 'Agency',
    price: 249,
    description: 'Pour les agences en croissance gérant plusieurs clients.',
    priceId: process.env.STRIPE_PRICE_AGENCY!,
    features: [
      'Contenu illimité',
      'Posts LinkedIn illimités',
      'Newsletters illimitées',
      'Marque blanche multi-clients',
      'Outreach 2 000 leads/mois',
      'Facturation Stripe auto',
      'Support prioritaire 24h',
    ],
    notIncluded: [],
    popular: false,
  },
]
