'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/ui/SectionTitle'

const FEATURES = [
  {
    id: 'buffet',
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Le Grand Buffet',
    subtitle: 'À volonté · 80+ plats',
    description:
      'Plus de 80 plats chauds et froids renouvelés en permanence. Sushis frais, makis, ' +
      'entrées asiatiques, plats chauds variés et desserts gourmands. Une expérience ' +
      'culinaire illimitée pour toute la famille.',
    image: '/images/buffet.jpg',
    href: '/carte#buffet',
    cta: 'Voir le buffet',
  },
  {
    id: 'wok',
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Wok à la carte',
    subtitle: 'Fait devant vous · Sur commande',
    description:
      'Composez votre plat sur mesure : choisissez vos protéines, vos légumes et votre sauce. ' +
      'Notre chef prépare votre wok à la flamme vive, sous vos yeux. ' +
      'Fraîcheur absolue, cuisson parfaite.',
    image: '/images/wok.jpg',
    href: '/carte#wok',
    cta: 'Voir les woks',
  },
  {
    id: 'teppanyaki',
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Teppanyaki',
    subtitle: 'Spectacle & Gastronomie',
    description:
      'Vivez une expérience unique : viandes nobles, poissons et légumes grillés sur plaque ' +
      'teppan chauffée à blanc. Un vrai spectacle culinaire dans une atmosphère festive. ' +
      'Parfait pour les occasions spéciales.',
    image: '/images/teppanyaki.jpg',
    href: '/carte#teppanyaki',
    cta: 'Voir le teppanyaki',
  },
]

export default function FeaturesSection() {
  return (
    <section
      className="section-py bg-textDark/40"
      aria-labelledby="features-title"
    >
      <div className="section-container">
        <SectionTitle
          eyebrow="Nos spécialités"
          title="Une expérience, trois univers"
          subtitle="Du buffet généreux au spectacle du teppanyaki, Wok In vous offre une cuisine asiatique authentique sous toutes ses formes."
          id="features-title"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
            >
              <Link
                href={feature.href}
                className="group block card-dark overflow-hidden hover:border-gold/40 transition-all duration-400 h-full"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={`${feature.title} chez Wok In Rebecq`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="mb-4">{feature.icon}</div>
                  <p className="eyebrow mb-2">{feature.subtitle}</p>
                  <h3 className="font-display text-2xl text-warm mb-3 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-warm/65 text-sm leading-relaxed mb-5">
                    {feature.description}
                  </p>
                  <span className="text-gold text-xs font-semibold uppercase tracking-widest
                                   group-hover:underline underline-offset-4">
                    {feature.cta} →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
