import type { Metadata } from 'next'
import PageHero from '@/components/pages/PageHero'
import MenuTabs from '@/components/pages/MenuTabs'
import { MENU_SECTIONS } from '@/data/menu'
import { routeUrl } from '@/data/site'

export const metadata: Metadata = {
  title: 'Carte & Buffet Asiatique – Formules & Tarifs',
  description:
    'Buffet asiatique à volonté 80+ plats, wok à la carte et teppanyaki spectaculaire à Rebecq. ' +
    'Formules midi dès 22,90€ · Soir & week-end 28,90€. Réservez chez Wok In, Brabant wallon.',
  alternates: { canonical: routeUrl('/carte') },
  openGraph: {
    title: 'Carte & Buffet | Wok In – Restaurant Asiatique Rebecq',
    images: ['/images/buffet.jpg'],
  },
}

export default function CartePage() {
  return (
    <>
      <PageHero
        eyebrow="Buffet · Wok · Teppanyaki"
        title="Notre Carte"
        subtitle="Une cuisine asiatique généreuse, fraîche et variée pour tous les goûts"
        image="/images/buffet.jpg"
        imageAlt="Grand buffet asiatique du restaurant Wok In à Rebecq"
      />

      <section className="section-py bg-primary" aria-labelledby="menu-title">
        <div className="section-container">
          <h2 id="menu-title" className="sr-only">Menu et formules du restaurant Wok In</h2>
          <MenuTabs sections={MENU_SECTIONS} />
        </div>
      </section>

      {/* Allergens notice */}
      <section className="py-10 bg-textDark/30 border-t border-warm/10">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-warm/50 text-sm leading-relaxed">
              <strong className="text-warm/70">Allergènes & régimes spéciaux :</strong>{' '}
              Notre équipe est à votre disposition pour vous informer sur la composition des plats
              et vous guider selon vos allergies ou intolérances alimentaires. N&apos;hésitez pas à
              nous en informer lors de votre réservation ou à votre arrivée.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
