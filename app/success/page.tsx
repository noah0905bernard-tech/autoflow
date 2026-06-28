import Link from 'next/link'

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { plan?: string; session_id?: string }
}) {
  const plan = searchParams.plan || 'Pro'

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
          🎉
        </div>
        <h1 className="text-2xl font-bold mb-3">Bienvenue sur AutoFlow !</h1>
        <p className="text-gray-500 mb-2">
          Ton abonnement <strong>{plan}</strong> est actif.
        </p>
        <p className="text-gray-500 mb-8">
          Tu vas recevoir un email de confirmation avec les accès à ton dashboard.
          Les automatismes démarrent dans les prochaines 24h.
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 text-left">
          <h2 className="font-semibold mb-4 text-sm text-gray-700">Prochaines étapes :</h2>
          <ul className="space-y-3">
            {[
              'Vérifie ton email pour accéder au dashboard',
              'Configure ton profil et ton offre (15 min)',
              'Les premiers contenus sont générés sous 24h',
              'Première prospection lancée sous 48h',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-5 h-5 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/"
          className="text-sm text-indigo-600 hover:underline"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </main>
  )
}
