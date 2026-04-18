import type { Review } from '@/data/reviews'

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} étoiles sur 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-gold' : 'text-warm/20'}`}
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

export default function ReviewCard({ review }: { review: Review }) {
  const formattedDate = new Date(review.date).toLocaleDateString('fr-BE', {
    year: 'numeric',
    month: 'long',
  })

  return (
    <article className="card-dark p-6 flex flex-col gap-4">
      <Stars rating={review.rating} />
      <blockquote className="text-warm/80 text-sm leading-relaxed italic flex-1">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <footer className="flex items-center justify-between pt-2 border-t border-warm/10">
        <cite className="not-italic text-gold font-semibold text-sm">{review.author}</cite>
        <div className="text-right">
          <span className="block text-warm/40 text-xs">{review.source}</span>
          <time dateTime={review.date} className="text-warm/30 text-xs">
            {formattedDate}
          </time>
        </div>
      </footer>
    </article>
  )
}
