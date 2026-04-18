import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/pages/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import { assetPath, assetUrl, routeUrl } from '@/data/site'

export const metadata: Metadata = {
  title: 'Le Restaurant – Notre Histoire & Nos Valeurs',
  description:
    'Découvrez l\'histoire et les valeurs de Wok In, restaurant asiatique à Rebecq-Quenast. ' +
    'Cadre élégant, cuisine généreuse, accueil chaleureux. Un restaurant à découvrir en Brabant wallon.',
  alternates: { canonical: routeUrl('/restaurant') },
  openGraph: {
    title: 'Le Restaurant | Wok In – Restaurant Asiatique Rebecq',
    images: [assetUrl('/images/restaurant-ambiance.jpg')],
  },
}

const VALUES = [
  {
    icon: '🌿',
    title: 'Fraîcheur',
    description: 'Approvisionnements quotidiens, produits sélectionnés avec soin pour garantir la meilleure qualité dans chaque assiette.',
  },
  {
    icon: '🍜',
    title: 'Authenticité',
    description: 'Des recettes fidèles aux traditions culinaires asiatiques, revisitées avec finesse pour plaire à tous les palais.',
  },
  {
    icon: '🤝',
    title: 'Convivialité',
    description: 'Un accueil chaleureux et un service attentif pour que chaque repas chez Wok In soit un moment de partage.',
  },
  {
    icon: '⭐',
    title: 'Excellence',
    description: 'Un engagement constant pour la qualité : cadre soigné, propreté irréprochable, plats renouvelés en permanence.',
  },
]

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        eyebrow="Découvrez Wok In"
        title="Le Restaurant"
        subtitle="Une adresse de référence pour la cuisine asiatique en Brabant wallon"
        image={assetPath('/images/restaurant-ambiance.jpg')}
        imageAlt="Salle du restaurant Wok In à Rebecq, cadre élégant et chaleureux"
      />

      {/* Story */}
      <section className="section-py bg-primary" aria-labelledby="story-title">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Notre histoire</p>
              <h2
                id="story-title"
                className="font-display text-4xl text-warm mb-2 leading-tight"
              >
                Né d&apos;une passion<br />
                <span className="text-gold">pour l&apos;Asie</span>
              </h2>
              <div className="gold-rule-left" />
              <p className="text-warm/75 leading-relaxed mb-5">
                Wok In est né d&apos;une passion profonde pour les cuisines asiatiques et d&apos;une
                envie de partager cette richesse culinaire avec les habitants de Rebecq et de la
                région. Depuis notre ouverture, nous avons à cœur de proposer une expérience
                authentique, généreuse et mémorable.
              </p>
              <p className="text-warm/75 leading-relaxed mb-5">
                Notre restaurant est pensé comme un lieu de vie et de partage. Ici, on vient pour
                savourer des plats asiatiques préparés avec soin, mais aussi pour profiter d&apos;un
                cadre agréable, d&apos;une atmosphère chaleureuse et d&apos;un service attentionné.
              </p>
              <p className="text-warm/75 leading-relaxed">
                Familles, couples, groupes d&apos;amis, collègues d&apos;entreprise : Wok In
                accueille tous ses clients avec la même générosité, la même passion et le même
                souci du détail.
              </p>
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src={assetPath('/images/restaurant-story.jpg')}
                alt="Équipe et ambiance du restaurant Wok In Rebecq"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-textDark/30" aria-labelledby="values-title">
        <div className="section-container">
          <SectionTitle
            eyebrow="Nos valeurs"
            title="Ce qui nous anime chaque jour"
            id="values-title"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="text-center p-8 card-dark">
                <div className="text-4xl mb-5" aria-hidden="true">{v.icon}</div>
                <h3 className="font-display text-xl text-warm mb-3">{v.title}</h3>
                <p className="text-warm/65 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance full-width */}
      <section className="relative h-80 overflow-hidden" aria-hidden="true">
        <Image
          src={assetPath('/images/restaurant-salle.jpg')}
          alt="Vue panoramique de la salle du restaurant Wok In"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
          <blockquote className="text-center px-4">
            <p className="font-display text-2xl sm:text-3xl text-warm italic max-w-2xl">
              &ldquo;Un voyage culinaire au cœur de l&apos;Asie, à deux pas de chez vous.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-primary">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl text-warm mb-4">Venez nous rendre visite</h2>
          <p className="text-warm/65 mb-8 max-w-lg mx-auto">
            Réservez votre table dès maintenant et découvrez ce qui fait la réputation de Wok In
            en Brabant wallon.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+32XXXXXXXXX" className="btn-primary">
              Réserver par téléphone
            </a>
            <Link href="/reservation" className="btn-outline">
              Formulaire de réservation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
