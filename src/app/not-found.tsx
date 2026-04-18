import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-primary flex items-center">
      <div className="section-container w-full">
        <div className="max-w-3xl mx-auto text-center card-dark p-10 sm:p-14">
          <p className="eyebrow mb-4">Page introuvable</p>
          <h1 className="font-display text-5xl sm:text-6xl text-warm mb-5">404</h1>
          <p className="font-display text-3xl text-warm mb-4">
            Cette page n est plus disponible
          </p>
          <p className="text-warm/65 leading-relaxed max-w-xl mx-auto mb-8">
            La page demandée n existe pas, a été déplacée ou l adresse saisie n est pas correcte.
            Vous pouvez revenir à l accueil ou accéder directement aux pages essentielles du site.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Retour à l accueil
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact & accès
            </Link>
            <Link href="/reservation" className="btn-outline">
              Réservation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
