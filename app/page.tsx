import Link from 'next/link'
import { PLANS } from '@/lib/stripe'

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span className="font-bold text-xl tracking-tight">Auto<span className="text-indigo-600">Flow</span></span>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-500 hover:text-gray-900">Fonctionnalités</a>
          <a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900">Tarifs</a>
          <Link href="/pricing" className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Démarrer →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
          Automatisation IA · En pilote automatique
        </div>
        <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-900">
          Génère <span className="text-indigo-600">5 000€/mois</span><br />sans lever le petit doigt
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          AutoFlow génère ton contenu, prospecte tes clients et envoie les factures — automatiquement, chaque jour.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/pricing" className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-indigo-700 transition">
            Commencer à 59€/mois
          </Link>
          <a href="#features" className="text-gray-500 text-base px-6 py-4 hover:text-gray-900 transition">
            Voir comment ça marche ↓
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">Sans engagement · Annulable à tout moment</p>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          {[
            { n: '5 000€', l: 'Revenus/mois atteignables' },
            { n: '90 j', l: 'Pour atteindre l\'objectif' },
            { n: '83%', l: 'Marge nette estimée' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-bold text-gray-900 mb-1">{s.n}</div>
              <div className="text-sm text-gray-500">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">4 automatismes, 0 effort</h2>
          <p className="text-gray-500 text-lg">Tu configures une fois. AutoFlow tourne 24h/24.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              icon: '✍️',
              title: 'Génération de contenu',
              desc: 'Articles SEO, posts LinkedIn et newsletters publiés automatiquement chaque jour sous ta marque.',
            },
            {
              icon: '🎯',
              title: 'Prospection ciblée',
              desc: 'Scraping + scoring de leads qualifiés selon ton profil client idéal. Aucune recherche manuelle.',
            },
            {
              icon: '📧',
              title: 'Outreach personnalisé',
              desc: 'Séquences d\'emails hyper-personnalisées avec suivi et relances automatiques.',
            },
            {
              icon: '💰',
              title: 'Facturation automatique',
              desc: 'Devis, factures Stripe et relances impayés gérés sans aucune intervention.',
            },
          ].map((f) => (
            <div key={f.title} className="border border-gray-200 rounded-2xl p-8 hover:border-indigo-200 hover:bg-indigo-50/30 transition">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Comment ça marche</h2>
          <div className="space-y-8">
            {[
              { n: '1', title: 'Tu définis ton offre une seule fois', desc: 'Prix, cible, positionnement — 15 minutes de setup, jamais à refaire.' },
              { n: '2', title: 'L\'IA crée et distribue le contenu', desc: 'Articles SEO, posts réseaux sociaux, emails — publiés selon ton calendrier automatiquement.' },
              { n: '3', title: 'Les leads entrent dans la séquence', desc: 'Détection d\'intérêt → email de contact → relance → offre → signature.' },
              { n: '4', title: 'L\'argent arrive sur ton compte', desc: 'Paiement Stripe automatique, facture générée, client onboardé sans toi.' },
            ].map((s) => (
              <div key={s.n} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Tarifs simples, sans surprise</h2>
        <p className="text-gray-500 mb-12">Sans engagement. Change ou annule quand tu veux.</p>
        <div className="grid grid-cols-3 gap-6 mb-10">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border text-left ${plan.popular ? 'border-indigo-400 ring-2 ring-indigo-200 bg-indigo-50/40' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full font-medium mb-4 inline-block">
                  Le plus populaire
                </span>
              )}
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">{plan.name}</div>
              <div className="text-4xl font-bold mb-1">{plan.price}<span className="text-base text-gray-400 font-normal">€/mois</span></div>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">{plan.description}</p>
              <ul className="space-y-2 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">✓</span>{f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="mt-0.5">✗</span>{f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/pricing?plan=${plan.name.toLowerCase()}`}
                className={`block text-center py-3 rounded-xl text-sm font-semibold transition ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                Choisir {plan.name} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        © 2024 AutoFlow · Fait avec ❤️ pour générer 5 000€/mois
      </footer>
    </main>
  )
}
