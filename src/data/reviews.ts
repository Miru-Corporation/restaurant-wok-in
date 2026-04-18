export type Review = {
  id: string
  author: string
  rating: number
  date: string
  text: string
  source: 'Google' | 'TripAdvisor'
}

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Marie L.',
    rating: 5,
    date: '2024-12-10',
    text: 'Un vrai régal ! Le buffet est incroyablement varié, les sushis sont frais et le teppanyaki est un vrai spectacle. Le personnel est accueillant et le cadre est élégant. On reviendra sans hésiter !',
    source: 'Google',
  },
  {
    id: 'r2',
    author: 'Thomas V.',
    rating: 5,
    date: '2024-11-22',
    text: 'Meilleur restaurant asiatique de la région ! Le buffet à volonté est généreux et les plats sont renouvelés régulièrement. Le wok fait devant vous est délicieux. Cadre soigné, service souriant.',
    source: 'Google',
  },
  {
    id: 'r3',
    author: 'Sophie D.',
    rating: 5,
    date: '2024-11-05',
    text: 'Nous y sommes allés en famille pour un anniversaire. L\'accueil était chaleureux, les plats excellents et les enfants ont adoré. Le teppanyaki nous a tous émerveillés. Une adresse à retenir !',
    source: 'Google',
  },
  {
    id: 'r4',
    author: 'Jean-Marc R.',
    rating: 4,
    date: '2024-10-18',
    text: 'Très bonne expérience globale. Le buffet est large et de qualité, les produits sont frais. Quelques tables un peu proches les unes des autres, mais l\'ambiance reste agréable. Je recommande.',
    source: 'Google',
  },
  {
    id: 'r5',
    author: 'Amélie C.',
    rating: 5,
    date: '2024-10-02',
    text: 'Repas d\'entreprise organisé ici pour une vingtaine de personnes. Tout était parfait : accueil professionnel, salle spacieuse, cuisine généreuse et variée. Le wok à la carte est excellent.',
    source: 'Google',
  },
  {
    id: 'r6',
    author: 'Nicolas B.',
    rating: 5,
    date: '2024-09-15',
    text: 'Le rapport qualité-prix est imbattable pour la région. Buffet copieux, fraîcheur au rendez-vous, et le teppanyaki est vraiment un moment à part. Une vraie expérience culinaire. Bravo !',
    source: 'TripAdvisor',
  },
]

export const AGGREGATE_RATING = {
  score: 4.7,
  count: 124,
  max: 5,
}
