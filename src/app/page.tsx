import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import IntroSection from '@/components/home/IntroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import GalleryPreview from '@/components/home/GalleryPreview'
import ReviewsSection from '@/components/home/ReviewsSection'
import HoursSection from '@/components/home/HoursSection'
import CTASection from '@/components/home/CTASection'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { routeUrl } from '@/data/site'

export const metadata: Metadata = {
  title: 'Wok In – Restaurant Asiatique Rebecq | Buffet · Wok · Teppanyaki',
  description:
    'Découvrez Wok In, votre restaurant asiatique à Rebecq-Quenast (Brabant wallon). ' +
    'Buffet à volonté 80+ plats, wok sur commande, teppanyaki spectaculaire. ' +
    'Idéal pour familles, groupes & entreprises. Réservez dès maintenant.',
  alternates: {
    canonical: routeUrl('/'),
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <WhyUsSection />
      <GalleryPreview />
      <ReviewsSection />
      <HoursSection />
      <CTASection />
      <StickyMobileCTA />
    </>
  )
}
