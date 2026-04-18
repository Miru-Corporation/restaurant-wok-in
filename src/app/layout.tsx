import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SchemaOrg from '@/components/shared/SchemaOrg'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wokin-rebecq.be'),
  title: {
    default: 'Wok In – Restaurant Asiatique Rebecq | Buffet · Wok · Teppanyaki',
    template: '%s | Wok In – Restaurant Asiatique Rebecq',
  },
  description:
    'Wok In, votre restaurant asiatique à Rebecq-Quenast (Brabant wallon). ' +
    'Buffet à volonté 80+ plats, wok sur commande et teppanyaki spectaculaire. ' +
    'Idéal pour familles, groupes et entreprises.',
  keywords: [
    'restaurant asiatique Rebecq',
    'buffet asiatique Quenast',
    'wok Rebecq',
    'teppanyaki Rebecq',
    'buffet à volonté Brabant wallon',
    'restaurant groupe Rebecq',
    'restaurant familial Quenast',
    'sushi Rebecq',
    'plats à emporter Rebecq',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    siteName: 'Wok In',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wok In – Restaurant Asiatique Rebecq',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://wokin-rebecq.be/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-primary text-warm font-body antialiased">
        <SchemaOrg />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
