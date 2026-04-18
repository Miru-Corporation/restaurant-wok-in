import Image from 'next/image'
import Link from 'next/link'

export default function IntroSection() {
  return (
    <section className="section-py bg-primary" aria-labelledby="intro-title">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="eyebrow mb-4">Le Restaurant</p>
            <h2
              id="intro-title"
              className="font-display text-4xl sm:text-5xl text-warm mb-2 leading-tight"
            >
              Une expérience<br />
              <span className="text-gold">culinaire unique</span>
            </h2>
            <div className="gold-rule-left" />
            <p className="text-warm/75 leading-relaxed mb-5">
              Niché au cœur de Rebecq-Quenast, <strong className="text-warm">Wok In</strong> vous
              invite à un voyage culinaire au cœur de l&apos;Asie. Dans un cadre élégant et
              chaleureux, nous célébrons les meilleures saveurs d&apos;Asie : fraîcheur des
              ingrédients, générosité des portions, authenticité des recettes.
            </p>
            <p className="text-warm/75 leading-relaxed mb-8">
              Que vous veniez pour notre <strong className="text-warm">buffet à volonté</strong> de
              plus de 80 plats renouvelés en continu, pour un <strong className="text-warm">wok
              préparé devant vous</strong> ou pour l&apos;expérience spectaculaire du{' '}
              <strong className="text-warm">teppanyaki</strong>, vous trouverez chez nous une
              cuisine sincère, généreuse et mémorable.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/restaurant" className="btn-primary">
                Notre histoire
              </Link>
              <Link href="/reservation" className="btn-outline">
                Réserver une table
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/restaurant-ambiance.jpg"
                alt="Salle du restaurant Wok In, ambiance chaleureuse et cadre élégant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold frame accent */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 rounded-sm pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent text-warm py-5 px-7 rounded-sm shadow-2xl">
              <p className="font-display text-3xl text-gold font-bold">80+</p>
              <p className="text-xs uppercase tracking-wider mt-1 text-warm/80">Plats au buffet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
