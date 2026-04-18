import type { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import ReviewCard from '@/components/ui/ReviewCard'
import { REVIEWS, AGGREGATE_RATING } from '@/data/reviews'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avis Clients – Ce que disent nos visiteurs',
  description:
    'Lisez les avis clients de Wok In, restaurant asiatique à Rebecq-Quenast. ' +
    `Note Google ${AGGREGATE_RATING.score}/5 basée sur ${AGGREGATE_RATING.count} avis. Buffet · Wok · Teppanyaki.`,
  alternates: { canonical: 'https://wokin-rebecq.be/avis/' },
}

function StarRating({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="flex gap-1.5" role="img" aria-label={`${score} étoiles sur ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          className={`w-7 h-7 ${i < Math.floor(score) ? 'text-gold' : 'text-warm/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function AvisPage() {
  return (
    <>
      <PageHero
        eyebrow="Ils nous ont fait confiance"
        title="Avis Clients"
        subtitle="La satisfaction de nos clients est notre plus belle récompense"
        image="/images/restaurant-ambiance.jpg"
        imageAlt="Clients satisfaits au restaurant Wok In Rebecq"
      />

      {/* Aggregate */}
      <section className="py-16 bg-textDark/30" aria-label="Note globale">
        <div className="section-container">
          <div className="max-w-sm mx-auto text-center card-dark p-10">
            <p className="eyebrow mb-4">Notre note Google</p>
            <div className="font-display text-7xl text-gold font-bold mb-3">
              {AGGREGATE_RATING.score}
            </div>
            <StarRating score={AGGREGATE_RATING.score} />
            <p className="text-warm/50 text-sm mt-3">
              Basé sur <strong className="text-warm/70">{AGGREGATE_RATING.count} avis</strong> vérifiés
            </p>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJZfS6t5mzw0cRI7JJBBvv_l0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center mt-6"
            >
              Laisser un avis Google
            </a>
          </div>
        </div>
      </section>

      {/* All reviews */}
      <section className="section-py bg-primary" aria-labelledby="all-reviews-title">
        <div className="section-container">
          <h2 id="all-reviews-title" className="sr-only">Tous les avis clients</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-textDark/30 text-center">
        <div className="section-container">
          <h2 className="font-display text-3xl text-warm mb-4">
            Prêt à vivre l&apos;expérience ?
          </h2>
          <p className="text-warm/60 mb-8 max-w-md mx-auto">
            Rejoignez nos clients satisfaits et découvrez la cuisine asiatique à son meilleur
            à Rebecq-Quenast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+32XXXXXXXXX" className="btn-primary">Réserver une table</a>
            <Link href="/contact" className="btn-outline">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  )
}
