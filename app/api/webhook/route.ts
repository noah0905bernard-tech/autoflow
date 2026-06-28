import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      // ✅ Nouveau client payant — à connecter à ta BDD ou envoyer un email
      console.log('✅ Nouveau paiement:', session.customer_email, session.metadata?.planName)
      break
    }
    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      // ❌ Abonnement annulé
      console.log('❌ Abonnement annulé:', sub.customer)
      break
    }
    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      // ⚠️ Paiement échoué — relance automatique
      console.log('⚠️ Paiement échoué:', invoice.customer_email)
      break
    }
  }

  return NextResponse.json({ received: true })
}
