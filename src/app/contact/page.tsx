import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/pages/PageHero'
import { HOURS } from '@/data/hours'
import { BUSINESS, SITE_URL } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact & Acces - Wok In Rebecq',
  description:
    'Preparez votre visite chez Wok In a Rebecq-Quenast. Retrouvez les horaires, les coordonnees, les informations pratiques et les acces pour venir au restaurant.',
  alternates: { canonical: `${SITE_URL}/contact/` },
  openGraph: {
    title: 'Contact & Acces | Wok In - Restaurant Asiatique Rebecq',
    images: ['/images/restaurant-salle.jpg'],
  },
}

const ACCESS_POINTS = [
  {
    title: 'Reserver par telephone',
    description:
      'Le moyen le plus direct pour confirmer une table, poser une question rapide ou verifier les disponibilites du jour.',
    href: BUSINESS.phoneHref,
    label: BUSINESS.phoneLabel,
  },
  {
    title: 'Nous ecrire',
    description:
      'Pour les groupes, demandes specifiques, privatisations partielles ou informations complementaires.',
    href: BUSINESS.emailHref,
    label: BUSINESS.email,
  },
  {
    title: 'Voir l itineraire',
    description:
      'Ouvrez directement Google Maps pour rejoindre facilement Wok In depuis Rebecq, Quenast et le Brabant wallon.',
    href: BUSINESS.mapsUrl,
    label: 'Ouvrir Google Maps',
  },
]

const FAQ = [
  {
    question: 'Faut-il reserver a l avance ?',
    answer:
      'La reservation est conseillee le soir, le week-end et pour les groupes. Un simple appel permet de confirmer rapidement la disponibilite.',
  },
  {
    question: 'Peut-on venir en groupe ?',
    answer:
      'Oui, Wok In accueille volontiers les repas de famille, anniversaires, sorties entre amis et repas d entreprise. Le mieux est de nous contacter en amont.',
  },
  {
    question: 'Proposez-vous des plats a emporter ?',
    answer:
      'Oui, une offre a emporter est disponible. La page reservation detaille la marche a suivre pour commander simplement.',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & acces"
        title="Organisez votre visite"
        subtitle="Toutes les informations utiles pour reserver, nous joindre et venir facilement chez Wok In."
        image="/images/restaurant-salle.jpg"
        imageAlt="Facade et acces du restaurant Wok In a Rebecq"
      />

      <section className="section-py bg-primary" aria-labelledby="contact-actions-title">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">Venir chez Wok In</p>
            <h2 id="contact-actions-title" className="font-display text-4xl text-warm leading-tight">
              Un acces simple, des informations claires, une experience sereine des la reservation
            </h2>
            <div className="gold-rule-left" />
            <p className="text-warm/70 leading-relaxed">
              Cette page rassemble l essentiel pour preparer votre venue a Rebecq-Quenast :
              horaires du restaurant, coordonnees, lien d itineraire et reponses aux questions les
              plus frequentes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {ACCESS_POINTS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-dark p-8 hover:border-gold/40 transition-colors"
              >
                <p className="eyebrow mb-3">Acces direct</p>
                <h3 className="font-display text-2xl text-warm mb-3">{item.title}</h3>
                <p className="text-warm/65 leading-relaxed mb-6">{item.description}</p>
                <span className="text-gold text-sm uppercase tracking-[0.15em]">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-textDark/30" aria-labelledby="practical-info-title">
        <div className="section-container grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
          <div className="card-dark p-8 lg:p-10">
            <p className="eyebrow mb-4">Informations pratiques</p>
            <h2 id="practical-info-title" className="font-display text-3xl text-warm mb-6">
              Coordonnees et horaires
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-warm font-semibold mb-3 uppercase tracking-[0.15em] text-xs">
                  Adresse
                </h3>
                <p className="text-warm/70 leading-relaxed">
                  {BUSINESS.streetAddress}
                  <br />
                  {BUSINESS.postalCode} {BUSINESS.locality}
                  <br />
                  {BUSINESS.region}, {BUSINESS.country}
                </p>
              </div>

              <div>
                <h3 className="text-warm font-semibold mb-3 uppercase tracking-[0.15em] text-xs">
                  Contact
                </h3>
                <div className="space-y-2 text-warm/70">
                  <p>
                    <a href={BUSINESS.phoneHref} className="hover:text-gold transition-colors">
                      {BUSINESS.phoneLabel}
                    </a>
                  </p>
                  <p>
                    <a href={BUSINESS.emailHref} className="hover:text-gold transition-colors">
                      {BUSINESS.email}
                    </a>
                  </p>
                  <p className="text-warm/45 text-sm">
                    L adresse de rue precise peut etre ajoutee ici des que tu veux remplacer le
                    placeholder actuel.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-warm font-semibold mb-4 uppercase tracking-[0.15em] text-xs">
                Horaires
              </h3>
              <div className="space-y-3">
                {HOURS.map((entry) => (
                  <div
                    key={entry.day}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-warm/10 pb-3"
                  >
                    <p className="text-warm font-medium">{entry.day}</p>
                    <p className="text-warm/65 text-sm">
                      {entry.lunch && entry.dinner
                        ? `${entry.lunch} · ${entry.dinner}`
                        : 'Fermé'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-dark p-8 lg:p-10">
            <p className="eyebrow mb-4">Conseils de visite</p>
            <h2 className="font-display text-3xl text-warm mb-6">Avant de venir</h2>
            <ul className="space-y-4 text-warm/65 leading-relaxed">
              <li>Pour les soirées, week-ends et jours fériés, il est recommandé de réserver.</li>
              <li>Les repas de groupe et événements sont plus simples à organiser par téléphone ou par e-mail.</li>
              <li>Pour l emporter, la page réservation centralise les consignes et les options de contact.</li>
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                Voir l itineraire
              </a>
              <Link href="/reservation" className="btn-outline justify-center">
                Aller a la page reservation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-primary" aria-labelledby="faq-title">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">FAQ locale</p>
            <h2 id="faq-title" className="font-display text-4xl text-warm leading-tight mb-10">
              Questions frequentes avant votre venue
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {FAQ.map((item) => (
              <div key={item.question} className="card-dark p-7">
                <h3 className="font-display text-2xl text-warm mb-3">{item.question}</h3>
                <p className="text-warm/65 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
