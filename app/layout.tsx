import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AutoFlow — Génère 5 000€/mois en automatique',
  description: 'Automatisez votre contenu, prospection et facturation avec l\'IA. Plans à partir de 59€/mois.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
