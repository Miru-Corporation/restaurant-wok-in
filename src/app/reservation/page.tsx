import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/pages/PageHero'
import { assetPath, assetUrl, BUSINESS, SITE_URL } from '@/data/site'

export const metadata: Metadata = {
  title: 'Reservation & A emporter - Wok In Rebecq',
  description:
    'Reservez votre table chez Wok In ou contactez le restaurant pour l emporter, les groupes et les repas d entreprise a Rebecq-Quenast.',
  alternates: { canonical: `${SITE_URL}/reservation/` },
  openGraph: {
    title: 'Reservation | Wok In - Restaurant Asiatique Rebecq',
    images: [assetUrl('/images/buffet.jpg')],
  },
}

const RESERVATION_OPTIONS = [
  {
    title: 'Reservation rapide',
    body:
      'Pour un repas en couple, en famille ou entre amis, le téléphone reste la solution la plus simple pour confirmer votre table.',
    ctaLabel: 'Appeler maintenant',
    href: BUSINESS.phoneHref,
  },
  {
    title: 'Groupes & banquets',
    body:
      'Pour un anniversaire, un repas d entreprise ou un groupe plus important, l e-mail permet de préciser le nombre de personnes et vos besoins.',
    ctaLabel: 'Envoyer un e-mail',
    href: BUSINESS.emailHref,
  },
  {
    title: 'A emporter',
    body:
      'Contactez le restaurant avant de vous déplacer afin de vérifier les disponibilités, les horaires et la préparation de votre commande.',
    ctaLabel: 'Voir le contact',
    href: '/contact',
  },
]

const RESERVATION_GUIDELINES = [
  'Indiquez la date, l heure souhaitée et le nombre de personnes.',
  'Précisez si vous venez avec des enfants, une poussette ou une demande particulière.',
  'Pour les groupes, mentionnez si vous souhaitez un repas d anniversaire, d entreprise ou de célébration.',
  'En cas d allergie ou de régime spécifique, avertissez l équipe lors de la réservation.',
]

export default function ReservationPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservation & a emporter"
        title="Choisissez la formule la plus simple"
        subtitle="Un parcours clair, sans backend complexe, pour reserver une table ou preparer votre commande a emporter."
        image={assetPath('/images/buffet.jpg')}
        imageAlt="Buffet asiatique premium du restaurant Wok In"
      />

      <section className="section-py bg-primary" aria-labelledby="reservation-options-title">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">Organisation simplifiée</p>
            <h2 id="reservation-options-title" className="font-display text-4xl text-warm leading-tight">
              Une page pensée pour un vrai site vitrine : rapide, claire et facile à maintenir
            </h2>
            <div className="gold-rule-left" />
            <p className="text-warm/70 leading-relaxed">
              Plutôt qu un système complexe, Wok In peut s appuyer sur des prises de contact
              directes. Cela réduit la maintenance, évite les frictions et reste parfaitement
              adapté à un restaurant local.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {RESERVATION_OPTIONS.map((option) => {
              const isInternal = option.href.startsWith('/')

              return isInternal ? (
                <Link key={option.title} href={option.href} className="card-dark p-8 hover:border-gold/40 transition-colors">
                  <p className="eyebrow mb-3">Option</p>
                  <h3 className="font-display text-2xl text-warm mb-4">{option.title}</h3>
                  <p className="text-warm/65 leading-relaxed mb-6">{option.body}</p>
                  <span className="text-gold text-sm uppercase tracking-[0.15em]">{option.ctaLabel}</span>
                </Link>
              ) : (
                <a key={option.title} href={option.href} className="card-dark p-8 hover:border-gold/40 transition-colors">
                  <p className="eyebrow mb-3">Option</p>
                  <h3 className="font-display text-2xl text-warm mb-4">{option.title}</h3>
                  <p className="text-warm/65 leading-relaxed mb-6">{option.body}</p>
                  <span className="text-gold text-sm uppercase tracking-[0.15em]">{option.ctaLabel}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-py bg-textDark/30" aria-labelledby="how-to-reserve-title">
        <div className="section-container grid lg:grid-cols-[0.95fr_1.05fr] gap-10">
          <div className="card-dark p-8 lg:p-10">
            <p className="eyebrow mb-4">Ce qu il faut prévoir</p>
            <h2 id="how-to-reserve-title" className="font-display text-3xl text-warm mb-6">
              Les bonnes informations a transmettre
            </h2>
            <div className="space-y-4 text-warm/65 leading-relaxed">
              {RESERVATION_GUIDELINES.map((item) => (
                <p key={item} className="border-b border-warm/10 pb-4">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="card-dark p-8 lg:p-10">
            <p className="eyebrow mb-4">Solution vitrine</p>
            <h2 className="font-display text-3xl text-warm mb-6">Fonctionnement recommandé</h2>
            <div className="space-y-5 text-warm/65 leading-relaxed">
              <p>
                Cette page privilégie volontairement des actions sans backend propriétaire :
                appel, e-mail et lien vers Google Maps. C est plus fiable, plus économique et plus
                simple à garder à jour pour une petite structure.
              </p>
              <p>
                Si tu veux aller plus loin ensuite, on pourra brancher un service tiers comme
                Formspree, Tally, Google Forms ou une plateforme de réservation externe, sans
                refondre le site.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={BUSINESS.phoneHref} className="btn-primary justify-center">
                Appeler pour reserver
              </a>
              <a href={BUSINESS.emailHref} className="btn-outline justify-center">
                Ecrire au restaurant
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-primary" aria-labelledby="group-meals-title">
        <div className="section-container">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-4">Repas de groupe</p>
            <h2 id="group-meals-title" className="font-display text-4xl text-warm leading-tight">
              Une solution adaptée aux familles, groupes d amis et entreprises
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-dark p-7">
              <h3 className="font-display text-2xl text-warm mb-3">Familles</h3>
              <p className="text-warm/65 leading-relaxed">
                Buffet varié, ambiance conviviale et expérience pensée pour tous les âges.
              </p>
            </div>
            <div className="card-dark p-7">
              <h3 className="font-display text-2xl text-warm mb-3">Événements</h3>
              <p className="text-warm/65 leading-relaxed">
                Anniversaires, réunions ou repas festifs profitent d un cadre généreux et chaleureux.
              </p>
            </div>
            <div className="card-dark p-7">
              <h3 className="font-display text-2xl text-warm mb-3">Entreprises</h3>
              <p className="text-warm/65 leading-relaxed">
                Une option pratique pour organiser un déjeuner ou un dîner d équipe à Rebecq.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
