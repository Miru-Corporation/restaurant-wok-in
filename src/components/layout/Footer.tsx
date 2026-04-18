import Link from 'next/link'

const NAV_LINKS = [
  { href: '/',           label: 'Accueil' },
  { href: '/restaurant', label: 'Le Restaurant' },
  { href: '/carte',      label: 'Buffet & Carte' },
  { href: '/galerie',    label: 'Galerie' },
  { href: '/avis',       label: 'Avis Clients' },
  { href: '/contact',    label: 'Contact & Accès' },
  { href: '/reservation',label: 'Réservation' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t border-warm/10" role="contentinfo">
      {/* Main footer */}
      <div className="section-container py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-4">
              <span className="font-display text-2xl text-gold tracking-[0.2em]">WOK IN</span>
              <span className="text-warm/40 text-[9px] tracking-[0.35em] uppercase mt-1">
                Restaurant Asiatique
              </span>
            </div>
            <p className="text-warm/60 text-sm leading-relaxed mb-6">
              Votre adresse de référence pour la cuisine asiatique à Rebecq-Quenast.
              Buffet à volonté, wok et teppanyaki.
            </p>
            {/* Social / Google Maps */}
            <a
              href="https://www.google.com/maps/place/Wok+In/@50.6587342,4.1669091,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-warm transition-colors text-sm"
              aria-label="Voir Wok In sur Google Maps"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Voir sur Google Maps
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation du pied de page">
            <h3 className="text-warm font-semibold mb-5 uppercase tracking-[0.2em] text-xs">
              Pages
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-warm/60 hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-warm font-semibold mb-5 uppercase tracking-[0.2em] text-xs">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm text-warm/60">
              <p className="leading-relaxed">
                [Adresse à compléter]<br />
                1430 Rebecq (Quenast)<br />
                Brabant wallon, Belgique
              </p>
              <p>
                <a
                  href="tel:+32XXXXXXXXX"
                  className="hover:text-gold transition-colors"
                >
                  +32 XX XX XX XX
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@wokin-rebecq.be"
                  className="hover:text-gold transition-colors"
                >
                  info@wokin-rebecq.be
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-warm font-semibold mb-5 uppercase tracking-[0.2em] text-xs">
              Horaires
            </h3>
            <div className="space-y-2 text-sm text-warm/60">
              <p className="text-warm/40 italic">Lundi : Fermé</p>
              <div>
                <p className="text-warm/80 font-medium">Mar – Jeu</p>
                <p>12h–14h30 · 18h–22h</p>
              </div>
              <div>
                <p className="text-warm/80 font-medium">Ven – Sam</p>
                <p>12h–14h30 · 18h–22h30</p>
              </div>
              <div>
                <p className="text-warm/80 font-medium">Dimanche</p>
                <p>12h–14h30 · 18h–22h</p>
              </div>
            </div>

            <a
              href="tel:+32XXXXXXXXX"
              className="inline-flex items-center gap-2 mt-6 btn-outline text-xs py-2 px-4"
            >
              Appeler pour réserver
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-warm/40 text-xs text-center">
            © {currentYear} Wok In – Restaurant Asiatique Rebecq-Quenast. Tous droits réservés.
          </p>
          <p className="text-warm/30 text-xs">
            Buffet · Wok · Teppanyaki · Brabant wallon
          </p>
        </div>
      </div>
    </footer>
  )
}
