const DEFAULT_SITE_URL = 'https://wokin-rebecq.be'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')
export const SITE_BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '')

export function routeUrl(path = '/') {
  if (path === '/' || path === '') {
    return `${SITE_URL}/`
  }

  const normalized = path.replace(/^\/+|\/+$/g, '')
  return `${SITE_URL}/${normalized}/`
}

export function assetUrl(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

export const BUSINESS = {
  name: 'Wok In',
  shortDescription:
    'Restaurant asiatique premium à Rebecq-Quenast avec buffet à volonté, wok, teppanyaki et solutions pour groupes.',
  phoneHref: 'tel:+32XXXXXXXXX',
  phoneLabel: '+32 XX XX XX XX',
  email: 'info@wokin-rebecq.be',
  emailHref: 'mailto:info@wokin-rebecq.be',
  streetAddress: '[Adresse à confirmer]',
  postalCode: '1430',
  locality: 'Rebecq (Quenast)',
  region: 'Brabant wallon',
  country: 'Belgique',
  mapsUrl:
    'https://www.google.com/maps/place/Wok+In/@50.6587342,4.1669091,17z',
  reviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJZfS6t5mzw0cRI7JJBBvv_l0',
  coordinates: {
    latitude: 50.6587342,
    longitude: 4.1669091,
  },
} as const

export const SITE_ROUTES = [
  '',
  '/restaurant',
  '/carte',
  '/galerie',
  '/avis',
  '/contact',
  '/reservation',
] as const
