import { assetUrl, routeUrl, SITE_URL } from '@/data/site'

export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Wok In',
    url: SITE_URL,
    telephone: '+32XXXXXXXXX',
    priceRange: '$$',
    servesCuisine: ['Asian', 'Japanese', 'Chinese', 'Thai'],
    hasMenu: routeUrl('/carte'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '[Adresse à compléter]',
      addressLocality: 'Rebecq',
      postalCode: '1430',
      addressRegion: 'Brabant wallon',
      addressCountry: 'BE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.6587342,
      longitude: 4.1669091,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday',   opens: '12:00', closes: '14:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday',   opens: '18:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '12:00', closes: '14:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '18:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday',  opens: '12:00', closes: '14:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday',  opens: '18:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday',    opens: '12:00', closes: '14:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday',    opens: '18:00', closes: '22:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday',  opens: '12:00', closes: '14:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday',  opens: '18:00', closes: '22:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday',    opens: '12:00', closes: '14:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday',    opens: '18:00', closes: '22:00' },
    ],
    image: assetUrl('/images/og-image.jpg'),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '124',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
