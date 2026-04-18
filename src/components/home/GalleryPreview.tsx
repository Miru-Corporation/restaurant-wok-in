import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/ui/SectionTitle'

const PREVIEW_IMAGES = [
  { src: '/images/gallery/gallery-01.jpg', alt: 'Plats de sushis et makis frais', span: 'col-span-2 row-span-2' },
  { src: '/images/gallery/gallery-02.jpg', alt: 'Buffet chaud asiatique' },
  { src: '/images/gallery/gallery-03.jpg', alt: 'Wok flambé en direct' },
  { src: '/images/gallery/gallery-04.jpg', alt: 'Teppanyaki spectaculaire' },
  { src: '/images/gallery/gallery-05.jpg', alt: 'Salle du restaurant Wok In' },
]

export default function GalleryPreview() {
  return (
    <section className="section-py bg-textDark/20" aria-labelledby="gallery-preview-title">
      <div className="section-container">
        <SectionTitle
          eyebrow="Galerie"
          title="Un cadre soigné, des plats appétissants"
          subtitle="Laissez-vous inspirer par nos créations culinaires et l'ambiance chaleureuse de notre restaurant."
          id="gallery-preview-title"
        />

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3 mb-10">
          {PREVIEW_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm group ${img.span ?? ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/galerie" className="btn-outline">
            Voir toute la galerie
          </Link>
        </div>
      </div>
    </section>
  )
}
