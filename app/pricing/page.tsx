'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { PLANS } from '@/lib/stripe'
import { Suspense } from 'react'

function PricingContent() {
  const searchParams = useSearchParams()
  const defaultPlan = searchParams.get('plan') || 'pro'
  const [selected, setSelected] = useState(defaultPlan)
  const [loading, setLoading] = useState(false)
  const [annual, setAnnual] = useState(false)

  const handleCheckout = async () => {
    const plan = PLANS.find((p) => p.name.toLowerCase() === selected)
    if (!plan) return
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: plan.priceId, planName: plan.name }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch (e) {
      alert('Erreur lors du paiement. Réessaie.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* NAV */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <a href="/" className="font-bold text-xl tracking-tight">Auto<span className="text-indigo-600">Flow</span></a>
        <span className="text-sm text-gray-500">Choix du plan</span>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-3">Choisis ton plan</h1>
          <p className="text-gray-500">Sans engagement · Annulable à tout moment</p>

          {/* Toggle annuel */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className={`text-sm ${!annual ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>Mensuel</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full transition-colors ${annual ? 'bg-indigo-600' : 'bg-gray-300'} relative`}
            >
              <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${annual ? 'left-7' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
              Annuel <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full ml-1">−20%</span>
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {PLANS.map((plan) => {
            const price = annual ? Math.round(plan.price * 0.8) : plan.price
            const isSelected = selected === plan.name.toLowerCase()
            return (
              <div
                key={plan.name}
                onClick={() => setSelected(plan.name.toLowerCase())}
                className={`rounded-2xl p-8 border-2 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-indigo-500 bg-white shadow-lg shadow-indigo-100'
                    : 'border-gray-200 bg-white hover:border-indigo-200'
                }`}
              >
                {plan.popular && (
                  <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full font-medium mb-4 inline-block">
                    Le plus populaire
                  </span>
                )}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{plan.name}</span>
                  {isSelected && <span className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs">✓</span>}
                </div>
                <div className="text-4xl font-bold mb-1">
                  {price}<span className="text-base text-gray-400 font-normal">€/mois</span>
                </div>
                {annual && <div className="text-xs text-gray-400 line-through mb-1">{plan.price}€/mois</div>}
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-0.5 flex-shrink-0">✗</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="bg-indigo-600 text-white px-12 py-4 rounded-xl text-base font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Redirection vers Stripe...' : `Commencer avec ${PLANS.find(p => p.name.toLowerCase() === selected)?.name} →`}
          </button>
          <p className="text-xs text-gray-400 mt-3">Paiement sécurisé via Stripe · SSL</p>
        </div>
      </div>
    </main>
  )
}

export default function PricingPage() {
  return (
    <Suspense>
      <PricingContent />
    </Suspense>
  )
}
