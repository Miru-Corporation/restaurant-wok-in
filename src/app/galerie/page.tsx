import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/pages/PageHero'
import Link from 'next/link'
import { assetPath, assetUrl, routeUrl } from '@/data/site'

export const metadata: Metadata = {
  title: 'Galerie Photos – Plats & Ambiance du Restaurant',
  description:
    'Découvrez la galerie photos de Wok In, restaurant asiatique à Rebecq-Quenast. ' +
    'Plats du buffet, wok, teppanyaki et ambiance chaleureuse en images. Brabant wallon.',
  alternates: { canonical: routeUrl('/galerie') },
  openGraph: {
    title: 'Galerie | Wok In – Restaurant Asiatique Rebecq',
    images: [assetUrl('/images/gallery/gallery-01.jpg')],
  },
}

const GALLERY_IMAGES = [
  { src: assetPath('/images/gallery/gallery-01.jpg'), alt: 'Assortiment de sushis et makis frais', category: 'Sushis' },
  { src: assetPath('/images/gallery/gallery-02.jpg'), alt: 'Buffet chaud avec plats asiatiques varies', category: 'Buffet' },
  { src: assetPath('/images/gallery/gallery-03.jpg'), alt: 'Chef en train de preparer un wok flambe', category: 'Wok' },
  { src: assetPath('/images/gallery/gallery-04.jpg'), alt: 'Spectacle du teppanyaki en direct', category: 'Teppanyaki' },
  { src: assetPath('/images/gallery/gallery-05.jpg'), alt: 'Salle elegante du restaurant Wok In', category: 'Ambiance' },
  { src: assetPath('/images/gallery/gallery-06.jpg'), alt: 'Desserts et douceurs asiatiques', category: 'Desserts' },
  { src: assetPath('/images/gallery/gallery-07.jpg'), alt: 'Table dressee avec vue sur la salle', category: 'Ambiance' },
  { src: assetPath('/images/gallery/gallery-08.jpg'), alt: 'Plats chauds presentes au buffet', category: 'Buffet' },
  { src: assetPath('/images/gallery/gallery-09.jpg'), alt: 'Crevettes sautees au wok avec legumes', category: 'Wok' },
  { src: assetPath('/images/gallery/gallery-10.jpg'), alt: 'Entrees froides et salades asiatiques', category: 'Entrees' },
  { src: assetPath('/images/gallery/gallery-11.jpg'), alt: 'Bar a sushis avec rolls varies', category: 'Sushis' },
  { src: assetPath('/images/gallery/gallery-12.jpg'), alt: 'Cadre chaleureux et lumineux du restaurant', category: 'Ambiance' },
]

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="En images"
        title="Galerie"
        subtitle="Un apercu de notre univers culinaire et de l'ambiance de Wok In"
        image={assetPath('/images/restaurant-salle.jpg')}
        imageAlt="Vue de la salle du restaurant Wok In Rebecq"
      />

      <section className="section-py bg-primary" aria-labelledby="gallery-title">
        <div className="section-container">
          <h2 id="gallery-title" className="sr-only">Galerie photos Wok In</h2>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="break-inside-avoid group relative overflow-hidden rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={i % 3 === 0 ? 800 : 500}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-300 flex items-end p-3">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 eyebrow text-xs bg-primary/80 px-3 py-1 rounded-sm">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-textDark/30 text-center">
        <div className="section-container">
          <p className="text-warm/60 mb-6 max-w-lg mx-auto">
            Ces images vous ont donne envie de vivre l&apos;experience ? Venez nous rendre visite
            a Rebecq-Quenast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+32XXXXXXXXX" className="btn-primary">
              Reserver une table
            </a>
            <Link href="/contact" className="btn-outline">
              Nous trouver
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
