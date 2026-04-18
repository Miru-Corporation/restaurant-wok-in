import Image from 'next/image'
import Link from 'next/link'
import { assetPath } from '@/data/site'

export default function IntroSection() {
  return (
    <section className="section-py bg-primary" aria-labelledby="intro-title">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">Le Restaurant</p>
            <h2
              id="intro-title"
              className="font-display text-4xl sm:text-5xl text-warm mb-2 leading-tight"
            >
              Une experience
              <br />
              <span className="text-gold">culinaire unique</span>
            </h2>
            <div className="gold-rule-left" />
            <p className="text-warm/75 leading-relaxed mb-5">
              Niche au coeur de Rebecq-Quenast, <strong className="text-warm">Wok In</strong> vous
              invite a un voyage culinaire au coeur de l&apos;Asie. Dans un cadre elegant et
              chaleureux, nous celebrons les meilleures saveurs d&apos;Asie : fraicheur des
              ingredients, generosite des portions, authenticite des recettes.
            </p>
            <p className="text-warm/75 leading-relaxed mb-8">
              Que vous veniez pour notre <strong className="text-warm">buffet a volonte</strong> de
              plus de 80 plats renouveles en continu, pour un <strong className="text-warm">wok
              prepare devant vous</strong> ou pour l&apos;experience spectaculaire du{' '}
              <strong className="text-warm">teppanyaki</strong>, vous trouverez chez nous une
              cuisine sincere, genereuse et memorable.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/restaurant" className="btn-primary">
                Notre histoire
              </Link>
              <Link href="/reservation" className="btn-outline">
                Reserver une table
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src={assetPath('/images/restaurant-ambiance.jpg')}
                alt="Salle du restaurant Wok In, ambiance chaleureuse et cadre elegant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 rounded-sm pointer-events-none"
                aria-hidden="true"
              />
            </div>

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
