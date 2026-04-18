import SectionTitle from '@/components/ui/SectionTitle'

const WHY_US = [
  {
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fraîcheur garantie',
    description:
      'Nos produits sont sélectionnés chaque jour avec soin. Poissons, légumes et viandes ' +
      'livrés frais quotidiennement pour vous offrir la meilleure qualité.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: 'Variété exceptionnelle',
    description:
      'Plus de 80 plats renouvelés en permanence au buffet, sans compter le wok et le ' +
      'teppanyaki. Chaque visite est une nouvelle découverte culinaire.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Idéal en groupe',
    description:
      'Familles, anniversaires, repas d&apos;entreprise, banquets… Notre salle spacieuse ' +
      'accueille jusqu&apos;à [X] convives. Nous adaptons nos services à vos besoins.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Accueil chaleureux',
    description:
      'Notre équipe passionnée vous accueille avec le sourire dans un cadre soigné et ' +
      'confortable. Chez Wok In, chaque client est reçu comme un hôte de marque.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="section-py bg-primary" aria-labelledby="why-title">
      <div className="section-container">
        <SectionTitle
          eyebrow="Pourquoi nous choisir"
          title="L'excellence à votre service"
          subtitle="Chez Wok In, nous mettons tout en œuvre pour que votre repas soit une expérience mémorable."
          id="why-title"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center p-8 card-dark
                         hover:border-gold/30 transition-all duration-300"
            >
              <div className="mb-5 p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-display text-xl text-warm mb-3">{item.title}</h3>
              <p
                className="text-warm/65 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
