'use client'
import { useState } from 'react'
import Link from 'next/link'
import { PLANS } from '@/lib/stripe'

export default function Home() {
  const [annual, setAnnual] = useState(false)

  return (
    <main style={{background:'#080810',minHeight:'100vh',color:'#F0EEE9'}}>

      {/* NAV */}
      <nav style={{borderBottom:'1px solid #1E1E35',padding:'1rem 2rem',display:'flex',alignItems:'center',justifyContent:'space-between',maxWidth:'1100px',margin:'0 auto'}}>
        <span style={{fontWeight:700,fontSize:'20px',letterSpacing:'-0.5px'}}>Auto<span style={{color:'#7C3AED'}}>Flow</span></span>
        <div style={{display:'flex',alignItems:'center',gap:'2rem'}}>
          <a href="#features" style={{fontSize:'14px',color:'#8884A0',textDecoration:'none'}}>Fonctionnalités</a>
          <a href="#pricing" style={{fontSize:'14px',color:'#8884A0',textDecoration:'none'}}>Tarifs</a>
          <Link href="/pricing" style={{background:'#7C3AED',color:'#fff',fontSize:'14px',padding:'8px 20px',borderRadius:'8px',textDecoration:'none',fontWeight:500}}>
            Démarrer →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{maxWidth:'800px',margin:'0 auto',padding:'7rem 2rem 5rem',textAlign:'center'}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(124,58,237,0.12)',border:'1px solid rgba(124,58,237,0.3)',color:'#A78BFA',fontSize:'12px',fontWeight:500,padding:'5px 14px',borderRadius:'20px',marginBottom:'2rem',letterSpacing:'0.05em'}}>
          <span style={{width:'6px',height:'6px',background:'#10B981',borderRadius:'50%',display:'inline-block',animation:'pulse 1.5s ease-in-out infinite'}} />
          Automatisation IA · 24h/24 · 7j/7
        </div>
        <h1 style={{fontSize:'clamp(56px,10vw,96px)',fontWeight:700,lineHeight:1.0,marginBottom:'2rem',letterSpacing:'-3px'}}>
          Auto<span style={{color:'#7C3AED'}}>Flow</span>
        </h1>
        <h2 style={{fontSize:'22px',fontWeight:500,color:'#F0EEE9',marginBottom:'1.5rem',lineHeight:1.4}}>
          Comment fonctionne AutoFlow ?
        </h2>
        <p style={{fontSize:'16px',color:'#8884A0',maxWidth:'620px',margin:'0 auto 1rem',lineHeight:1.8}}>
          AutoFlow automatise les tâches les plus chronophages de ton activité pour te permettre de te concentrer sur ce qui compte vraiment : développer ton entreprise.
        </p>
        <p style={{fontSize:'16px',color:'#8884A0',maxWidth:'620px',margin:'0 auto 1rem',lineHeight:1.8}}>
          Une seule configuration suffit. Une fois connecté à tes outils, AutoFlow fonctionne en continu, 24h/24 et 7j/7. Il génère du contenu optimisé pour ta visibilité, identifie et qualifie de nouveaux prospects, lance des campagnes d'emails avec des relances intelligentes, et gère toute la partie administrative — devis, factures Stripe et suivi des paiements.
        </p>
        <p style={{fontSize:'16px',color:'#A78BFA',maxWidth:'620px',margin:'0 auto 2.5rem',lineHeight:1.8,fontWeight:500}}>
          Résultat : moins de tâches répétitives, un flux constant de nouveaux prospects, une communication régulière avec ton audience et une gestion commerciale entièrement automatisée. Tu gardes le contrôle à tout moment.
        </p>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'12px',flexWrap:'wrap'}}>
          <Link href="/pricing" style={{background:'#7C3AED',color:'#fff',padding:'14px 32px',borderRadius:'10px',fontSize:'15px',fontWeight:600,textDecoration:'none'}}>
            Commencer à 59€/mois
          </Link>
          <a href="#features" style={{color:'#8884A0',fontSize:'15px',textDecoration:'none',padding:'14px 20px'}}>
            Voir les fonctionnalités ↓
          </a>
        </div>
        <p style={{marginTop:'1.5rem',fontSize:'13px',color:'#8884A0'}}>Sans engagement · Annulable à tout moment</p>
      </section>


      {/* FEATURES */}
      <section id="features" style={{maxWidth:'1000px',margin:'0 auto',padding:'6rem 2rem'}}>
        <div style={{textAlign:'center',marginBottom:'4rem'}}>
          <h2 style={{fontSize:'36px',fontWeight:700,marginBottom:'1rem',letterSpacing:'-1px'}}>4 automatismes, 0 effort</h2>
          <p style={{color:'#8884A0',fontSize:'16px'}}>Tu configures une fois. AutoFlow tourne 24h/24.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'16px'}}>
          {[
            {icon:'✍️', title:'Génération de contenu', desc:'Articles SEO, posts LinkedIn et newsletters publiés automatiquement chaque jour sous ta marque.', badge:'Actif'},
            {icon:'🎯', title:'Prospection ciblée', desc:'Scraping + scoring de leads qualifiés selon ton profil client idéal. Aucune recherche manuelle.', badge:'Auto'},
            {icon:'📧', title:'Outreach personnalisé', desc:'Séquences d\'emails hyper-personnalisées avec suivi et relances automatiques.', badge:'Actif'},
            {icon:'💰', title:'Facturation automatique', desc:'Devis, factures Stripe et relances impayés gérés sans aucune intervention.', badge:'Auto'},
          ].map(f => (
            <div key={f.title} style={{background:'#10101A',border:'1px solid #1E1E35',borderRadius:'16px',padding:'2rem'}}>
              <div style={{fontSize:'28px',marginBottom:'1rem'}}>{f.icon}</div>
              <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}}>
                <h3 style={{fontSize:'16px',fontWeight:600,margin:0}}>{f.title}</h3>
                <span style={{fontSize:'10px',background:'rgba(16,185,129,0.15)',color:'#10B981',padding:'2px 10px',borderRadius:'20px',letterSpacing:'0.08em'}}>{f.badge}</span>
              </div>
              <p style={{color:'#8884A0',fontSize:'14px',lineHeight:1.6,margin:0}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{background:'#10101A',borderTop:'1px solid #1E1E35',borderBottom:'1px solid #1E1E35',padding:'6rem 2rem'}}>
        <div style={{maxWidth:'600px',margin:'0 auto'}}>
          <h2 style={{fontSize:'36px',fontWeight:700,textAlign:'center',marginBottom:'3rem',letterSpacing:'-1px'}}>Comment ça marche</h2>
          <div style={{display:'flex',flexDirection:'column',gap:'0'}}>
            {[
              {n:'1', t:'Tu définis ton offre une seule fois', d:'Prix, cible, positionnement — 15 minutes de setup, jamais à refaire.'},
              {n:'2', t:'L\'IA crée et distribue le contenu', d:'Articles SEO, posts réseaux sociaux, emails — publiés selon ton calendrier automatiquement.'},
              {n:'3', t:'Les leads entrent dans la séquence', d:'Détection d\'intérêt → email de contact → relance → offre → signature.'},
              {n:'4', t:'L\'argent arrive sur ton compte', d:'Paiement Stripe automatique, facture générée, client onboardé sans toi.'},
            ].map((s,i) => (
              <div key={s.n} style={{display:'flex',gap:'1.5rem',alignItems:'flex-start',padding:'1.5rem 0',borderBottom:i<3?'1px solid #1E1E35':'none'}}>
                <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'rgba(124,58,237,0.2)',border:'1px solid rgba(124,58,237,0.4)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'13px',fontWeight:700,color:'#A78BFA',flexShrink:0}}>{s.n}</div>
                <div>
                  <h3 style={{fontSize:'15px',fontWeight:600,marginBottom:'6px',margin:'0 0 6px'}}>{s.t}</h3>
                  <p style={{color:'#8884A0',fontSize:'14px',lineHeight:1.6,margin:0}}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{maxWidth:'1000px',margin:'0 auto',padding:'6rem 2rem',textAlign:'center'}}>
        <h2 style={{fontSize:'36px',fontWeight:700,marginBottom:'1rem',letterSpacing:'-1px'}}>Tarifs simples, sans surprise</h2>
        <p style={{color:'#8884A0',marginBottom:'2rem',fontSize:'16px'}}>Sans engagement · Change ou annule quand tu veux</p>

        {/* TOGGLE ANNUEL */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'12px',marginBottom:'3rem'}}>
          <span style={{fontSize:'14px',color:!annual?'#F0EEE9':'#8884A0',fontWeight:!annual?500:400}}>Mensuel</span>
          <button
            onClick={()=>setAnnual(!annual)}
            style={{width:'44px',height:'24px',borderRadius:'20px',background:annual?'#7C3AED':'#1E1E35',border:'none',cursor:'pointer',position:'relative',transition:'background .2s'}}
          >
            <span style={{position:'absolute',top:'3px',width:'18px',height:'18px',background:'#fff',borderRadius:'50%',transition:'left .2s',left:annual?'23px':'3px'}} />
          </button>
          <span style={{fontSize:'14px',color:annual?'#F0EEE9':'#8884A0',fontWeight:annual?500:400}}>Annuel</span>
          <span style={{fontSize:'11px',background:'rgba(16,185,129,0.15)',color:'#10B981',padding:'3px 10px',borderRadius:'20px',fontWeight:500}}>−20%</span>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px',marginBottom:'2rem'}}>
          {PLANS.map(plan => {
            const price = annual ? Math.round(plan.price * 0.8) : plan.price
            return (
              <div key={plan.name} style={{background:'#10101A',border:plan.popular?'2px solid #7C3AED':'1px solid #1E1E35',borderRadius:'16px',padding:'2rem',textAlign:'left',position:'relative'}}>
                {plan.popular && (
                  <span style={{position:'absolute',top:'-12px',left:'50%',transform:'translateX(-50%)',background:'#7C3AED',color:'#fff',fontSize:'11px',padding:'3px 14px',borderRadius:'20px',fontWeight:600,whiteSpace:'nowrap'}}>
                    Le plus populaire
                  </span>
                )}
                <div style={{fontSize:'12px',fontWeight:600,color:'#8884A0',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'8px'}}>{plan.name}</div>
                <div style={{fontSize:'42px',fontWeight:700,marginBottom:'4px',color:'#F0EEE9'}}>{price}<span style={{fontSize:'16px',color:'#8884A0',fontWeight:400}}> €/mois</span></div>
                {annual && <div style={{fontSize:'13px',color:'#8884A0',textDecoration:'line-through',marginBottom:'4px'}}>{plan.price}€/mois</div>}
                <p style={{fontSize:'13px',color:'#8884A0',marginBottom:'1.5rem',lineHeight:1.5}}>{plan.description}</p>
                <ul style={{listStyle:'none',padding:0,margin:'0 0 2rem',display:'flex',flexDirection:'column',gap:'8px'}}>
                  {plan.features.map(f => (
                    <li key={f} style={{display:'flex',alignItems:'flex-start',gap:'8px',fontSize:'13px',color:'#F0EEE9'}}>
                      <span style={{color:'#10B981',flexShrink:0}}>✓</span>{f}
                    </li>
                  ))}
                  {plan.notIncluded.map(f => (
                    <li key={f} style={{display:'flex',alignItems:'flex-start',gap:'8px',fontSize:'13px',color:'#8884A0'}}>
                      <span style={{flexShrink:0}}>✗</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href={`/pricing?plan=${plan.name.toLowerCase()}`} style={{display:'block',textAlign:'center',padding:'12px',borderRadius:'10px',fontSize:'14px',fontWeight:600,textDecoration:'none',background:plan.popular?'#7C3AED':'transparent',color:plan.popular?'#fff':'#F0EEE9',border:plan.popular?'none':'1px solid #1E1E35'}}>
                  Choisir {plan.name} →
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:'1px solid #1E1E35',padding:'2rem',textAlign:'center',fontSize:'13px',color:'#8884A0'}}>
        © 2024 AutoFlow · Contenu IA en marque blanche
      </footer>

      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
    </main>
  )
}
