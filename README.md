# AutoFlow — Site SaaS complet

Landing page + pricing + checkout Stripe en Next.js 14.

## 🚀 Lancer en local (5 minutes)

### 1. Installer les dépendances
```bash
npm install
```

### 2. Configurer Stripe
Copie le fichier d'exemple :
```bash
cp .env.local.example .env.local
```

Puis va sur [dashboard.stripe.com](https://dashboard.stripe.com) :
- **API keys** → copie `Publishable key` et `Secret key`
- **Products** → crée 3 produits récurrents :
  - Starter · 59€/mois
  - Pro · 119€/mois
  - Agency · 249€/mois
- Copie les **Price IDs** (commencent par `price_...`) dans `.env.local`

### 3. Lancer
```bash
npm run dev
```
→ Ouvre [http://localhost:3000](http://localhost:3000)

---

## 🌐 Déployer sur Vercel (2 minutes)

```bash
npm install -g vercel
vercel
```

Puis dans le dashboard Vercel → **Environment Variables** → colle les mêmes variables que `.env.local`.

---

## 🔗 Structure du projet

```
autoflow/
├── app/
│   ├── page.tsx              ← Landing page
│   ├── pricing/page.tsx      ← Page de choix du plan
│   ├── success/page.tsx      ← Page après paiement
│   ├── api/
│   │   ├── checkout/route.ts ← API Stripe checkout
│   │   └── webhook/route.ts  ← Webhook Stripe (paiements)
├── lib/
│   └── stripe.ts             ← Config Stripe + plans
└── .env.local.example        ← Variables à remplir
```

---

## 💳 Tester les paiements

En mode test Stripe, utilise la carte : `4242 4242 4242 4242`
- Date : n'importe quelle date future
- CVC : n'importe quel nombre à 3 chiffres

---

## 📦 Prochaines étapes

- [ ] Ajouter une base de données (Supabase ou PlanetScale)
- [ ] Ajouter l'authentification (NextAuth ou Clerk)
- [ ] Créer le dashboard client après connexion
- [ ] Connecter l'API Anthropic pour générer le contenu
- [ ] Configurer les webhooks Stripe en production
