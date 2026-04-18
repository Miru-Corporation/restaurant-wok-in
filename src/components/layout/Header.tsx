'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { href: '/',            label: 'Accueil' },
  { href: '/restaurant',  label: 'Restaurant' },
  { href: '/carte',       label: 'Carte' },
  { href: '/galerie',     label: 'Galerie' },
  { href: '/avis',        label: 'Avis' },
  { href: '/contact',     label: 'Contact' },
  { href: '/reservation', label: 'Reservation' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,168,76,0.2)]'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="section-container flex items-center justify-between h-16 lg:h-20"
          role="navigation"
          aria-label="Navigation principale"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Wok In – Retour à l'accueil"
            className="flex flex-col leading-none group"
          >
            <span className="font-display text-2xl text-gold tracking-[0.2em] group-hover:opacity-80 transition-opacity">
              WOK IN
            </span>
            <span className="text-warm/50 text-[9px] tracking-[0.35em] uppercase mt-0.5">
              Restaurant Asiatique
            </span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-semibold text-warm/70 hover:text-gold
                             transition-colors duration-200 uppercase tracking-[0.15em]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="tel:+32XXXXXXXXX"
            className="hidden lg:inline-flex btn-primary text-xs py-2.5 px-5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Réserver
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-warm p-2 -mr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </>
  )
}
