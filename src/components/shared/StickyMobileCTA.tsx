'use client'

import { useState, useEffect } from 'react'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-primary/95 backdrop-blur-md
                 border-t border-gold/20 p-3 flex gap-3"
      role="complementary"
      aria-label="Actions rapides"
    >
      <a
        href="tel:+32XXXXXXXXX"
        className="flex-1 btn-primary justify-center py-3 text-sm"
        aria-label="Appeler Wok In pour réserver"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Réserver
      </a>
      <a
        href="https://www.google.com/maps/place/Wok+In/@50.6587342,4.1669091,17z"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 btn-outline justify-center py-3 text-sm"
        aria-label="Voir l'itinéraire vers Wok In"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        Itinéraire
      </a>
    </div>
  )
}
