import Link from 'next/link'
import { REVIEWS, AGGREGATE_RATING } from '@/data/reviews'
import ReviewCard from '@/components/ui/ReviewCard'
import SectionTitle from '@/components/ui/SectionTitle'

function AggregateStars({ score }: { score: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`Note moyenne ${score} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 ${i < Math.floor(score) ? 'text-gold' : 'text-warm/20'}`}
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

export default function ReviewsSection() {
  const featured = REVIEWS.slice(0, 3)

  return (
    <section className="section-py bg-primary" aria-labelledby="reviews-title">
      <div className="section-container">
        <SectionTitle
          eyebrow="Avis clients"
          title="Ce que disent nos clients"
          id="reviews-title"
        />

        {/* Aggregate rating */}
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-center gap-4 mb-2">
            <AggregateStars score={AGGREGATE_RATING.score} />
            <span className="font-display text-4xl text-gold font-bold">
              {AGGREGATE_RATING.score}
            </span>
          </div>
          <p className="text-warm/50 text-sm">
            Basé sur {AGGREGATE_RATING.count} avis Google
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featured.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="text-center flex flex-wrap items-center justify-center gap-4">
          <Link href="/avis" className="btn-outline">
            Lire tous les avis
          </Link>
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJZfS6t5mzw0cRI7JJBBvv_l0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Laisser un avis Google pour Wok In"
          >
            Laisser un avis Google
          </a>
        </div>
      </div>
    </section>
  )
}
