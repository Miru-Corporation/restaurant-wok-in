export type MenuItem = {
  name: string
  description?: string
  badge?: 'Populaire' | 'Nouveau' | 'Végétarien' | 'Sans gluten'
}

export type MenuCategory = {
  id: string
  title: string
  items: MenuItem[]
}

export type Formula = {
  label: string
  price: string
  note?: string
}

export type MenuSection = {
  id: string
  title: string
  subtitle: string
  description: string
  formulas: Formula[]
  categories: MenuCategory[]
}

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'buffet',
    title: 'Le Grand Buffet',
    subtitle: 'À volonté',
    description:
      'Plus de 80 plats chauds et froids renouvelés en permanence tout au long de votre repas. ' +
      'Entrées froides, sushis, makis, plats asiatiques variés, et desserts gourmands. ' +
      'Une expérience culinaire illimitée pour satisfaire toutes les envies.',
    formulas: [
      { label: 'Déjeuner (mar–ven)', price: '22,90 €', note: 'Boissons non comprises' },
      { label: 'Dîner & Week-end', price: '28,90 €', note: 'Boissons non comprises' },
      { label: 'Enfants (6–12 ans)', price: '14,90 €' },
      { label: 'Enfants (–6 ans)', price: 'Gratuit' },
    ],
    categories: [
      {
        id: 'entrees-froides',
        title: 'Entrées froides',
        items: [
          { name: 'Salade de vermicelles', badge: 'Végétarien' },
          { name: 'Rouleaux de printemps frais', badge: 'Populaire' },
          { name: 'Salade de chou aigre-douce', badge: 'Végétarien' },
          { name: 'Crevettes marinées' },
          { name: 'Salades composées asiatiques' },
        ],
      },
      {
        id: 'sushi',
        title: 'Sushis & Makis',
        items: [
          { name: 'Nigiri saumon', badge: 'Populaire' },
          { name: 'Nigiri thon' },
          { name: 'Maki concombre', badge: 'Végétarien' },
          { name: 'Maki saumon', badge: 'Populaire' },
          { name: 'California rolls avocat-crabe' },
          { name: 'Temaki saumon-avocat' },
        ],
      },
      {
        id: 'plats-chauds',
        title: 'Plats chauds',
        items: [
          { name: 'Poulet au curry rouge', badge: 'Populaire' },
          { name: 'Bœuf au gingembre et citronnelle' },
          { name: 'Crevettes sautées aux légumes', badge: 'Populaire' },
          { name: 'Canard laqué façon pékinoise' },
          { name: 'Nouilles sautées aux légumes', badge: 'Végétarien' },
          { name: 'Riz frit aux œufs', badge: 'Végétarien' },
          { name: 'Porc au caramel asiatique' },
          { name: 'Tofu sauté aux légumes', badge: 'Végétarien' },
          { name: 'Dim sum vapeur variés' },
          { name: 'Soupe miso', badge: 'Sans gluten' },
        ],
      },
      {
        id: 'desserts',
        title: 'Desserts',
        items: [
          { name: 'Beignets de banane', badge: 'Populaire' },
          { name: 'Crème brûlée à la citronnelle' },
          { name: 'Mochi glacés variés' },
          { name: 'Fruits frais de saison', badge: 'Végétarien' },
          { name: 'Gâteau de riz gluant à la noix de coco' },
          { name: 'Glaces et sorbets asiatiques' },
        ],
      },
    ],
  },
  {
    id: 'wok',
    title: 'Wok à la carte',
    subtitle: 'Fait devant vous',
    description:
      'Composez votre wok sur mesure : choisissez vos protéines, vos légumes et votre sauce. ' +
      'Notre chef prépare votre plat à la flamme dans un wok brûlant, sous vos yeux. ' +
      'Un repas personnalisé, savoureux et préparé à la minute.',
    formulas: [
      { label: 'Wok protéine + légumes + sauce', price: '14,50 €' },
      { label: 'Wok double protéine', price: '17,50 €' },
    ],
    categories: [
      {
        id: 'wok-proteines',
        title: 'Protéines au choix',
        items: [
          { name: 'Poulet' },
          { name: 'Bœuf' },
          { name: 'Crevettes', badge: 'Populaire' },
          { name: 'Saumon' },
          { name: 'Tofu', badge: 'Végétarien' },
          { name: 'Porc' },
        ],
      },
      {
        id: 'wok-sauces',
        title: 'Sauces au choix',
        items: [
          { name: 'Sauce soja classique' },
          { name: 'Sauce teriyaki', badge: 'Populaire' },
          { name: 'Sauce curry rouge' },
          { name: 'Sauce huître' },
          { name: 'Sauce aigre-douce', badge: 'Populaire' },
          { name: 'Sauce coco-lait de coco' },
        ],
      },
    ],
  },
  {
    id: 'teppanyaki',
    title: 'Teppanyaki',
    subtitle: 'Spectacle & saveurs',
    description:
      'Vivez une expérience culinaire unique : viandes, poissons et légumes grillés en direct ' +
      'sur une plaque teppan chauffée à haute température. Un vrai spectacle gastronomique dans ' +
      'une ambiance festive et conviviale. Idéal pour les occasions spéciales.',
    formulas: [
      { label: 'Formule Découverte (poulet + légumes)', price: '19,90 €' },
      { label: 'Formule Premium (filet de bœuf + fruits de mer)', price: '29,90 €' },
      { label: 'Formule Duo (à partager)', price: '49,90 €' },
    ],
    categories: [
      {
        id: 'teppanyaki-viandes',
        title: 'Viandes & Poissons',
        items: [
          { name: 'Filet de bœuf', badge: 'Populaire' },
          { name: 'Magret de canard' },
          { name: 'Crevettes géantes', badge: 'Populaire' },
          { name: 'Saint-Jacques' },
          { name: 'Saumon en pavé' },
          { name: 'Poulet mariné' },
        ],
      },
    ],
  },
]
