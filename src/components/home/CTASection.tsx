import Link from 'next/link'

export default function CTASection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      aria-labelledby="cta-title"
      style={{
        background: 'linear-gradient(135deg, #8B1A1A 0%, #1A0A00 50%, #2D1B0E 100%)',
      }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 section-container text-center">
        <p className="eyebrow mb-4">Prêt à vous régaler ?</p>
        <h2
          id="cta-title"
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-warm mb-4"
        >
          Réservez votre table
          <br />
          <span className="text-gold">dès maintenant</span>
        </h2>
        <div className="gold-rule" />
        <p className="text-warm/75 max-w-xl mx-auto mt-4 mb-10 leading-relaxed">
          Que ce soit pour un repas en famille, un dîner romantique ou un événement d&apos;entreprise,
          Wok In vous accueille avec générosité et passion.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a href="tel:+32XXXXXXXXX" className="btn-gold px-10 py-4 text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appeler pour réserver
          </a>
          <Link href="/reservation" className="btn-outline border-warm/60 px-10 py-4 text-base hover:border-gold">
            Formulaire de réservation
          </Link>
        </div>

        {/* Quick info bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-warm/10">
          <div className="text-center">
            <p className="font-display text-2xl text-gold">Mar – Dim</p>
            <p className="text-warm/50 text-xs uppercase tracking-wider mt-1">Ouvert</p>
          </div>
          <div className="w-px h-10 bg-warm/20 hidden sm:block" aria-hidden="true" />
          <div className="text-center">
            <p className="font-display text-2xl text-gold">12h – 22h30</p>
            <p className="text-warm/50 text-xs uppercase tracking-wider mt-1">Horaires</p>
          </div>
          <div className="w-px h-10 bg-warm/20 hidden sm:block" aria-hidden="true" />
          <div className="text-center">
            <p className="font-display text-2xl text-gold">Rebecq</p>
            <p className="text-warm/50 text-xs uppercase tracking-wider mt-1">Brabant wallon</p>
          </div>
        </div>
      </div>
    </section>
  )
}
