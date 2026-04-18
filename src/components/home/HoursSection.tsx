'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HOURS, isOpenNow } from '@/data/hours'
import SectionTitle from '@/components/ui/SectionTitle'

export default function HoursSection() {
  const [open, setOpen] = useState<boolean | null>(null)

  useEffect(() => {
    setOpen(isOpenNow())
  }, [])

  return (
    <section className="section-py bg-textDark/40" aria-labelledby="hours-title">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Hours */}
          <div>
            <SectionTitle
              eyebrow="Horaires d'ouverture"
              title="Quand nous rendre visite"
              center={false}
            />

            {open !== null && (
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 ${
                  open
                    ? 'bg-green-900/40 text-green-300 border border-green-800'
                    : 'bg-red-900/40 text-red-300 border border-red-800/50'
                }`}
                role="status"
                aria-live="polite"
              >
                <span
                  className={`w-2 h-2 rounded-full ${open ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}
                  aria-hidden="true"
                />
                {open ? 'Ouvert actuellement' : 'Fermé actuellement'}
              </div>
            )}

            <div className="divide-y divide-warm/10">
              {HOURS.map(({ day, lunch, dinner }) => {
                const isToday = new Date().toLocaleDateString('fr-BE', { weekday: 'long' })
                  .toLowerCase()
                  .startsWith(day.toLowerCase().slice(0, 3))
                const isClosed = !lunch && !dinner

                return (
                  <div
                    key={day}
                    className={`flex items-center justify-between py-4 ${
                      isToday ? 'text-gold' : ''
                    }`}
                  >
                    <span className={`font-medium ${isClosed ? 'text-warm/40' : isToday ? 'text-gold' : 'text-warm'}`}>
                      {day}
                      {isToday && (
                        <span className="ml-2 text-xs font-normal text-gold/70">(aujourd&apos;hui)</span>
                      )}
                    </span>
                    {isClosed ? (
                      <span className="text-warm/40 italic text-sm">Fermé</span>
                    ) : (
                      <div className="text-right text-sm">
                        {lunch && <div className={isToday ? 'text-gold/80' : 'text-warm/70'}>Midi : {lunch}</div>}
                        {dinner && <div className={isToday ? 'text-gold/80' : 'text-warm/70'}>Soir : {dinner}</div>}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Access info */}
          <div>
            <SectionTitle
              eyebrow="Comment nous trouver"
              title="Accès & Contact"
              center={false}
            />

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-warm font-semibold mb-1">Adresse</p>
                  <address className="not-italic text-warm/65 text-sm leading-relaxed">
                    [Adresse à compléter]<br />
                    1430 Rebecq (Quenast)<br />
                    Brabant wallon, Belgique
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-warm font-semibold mb-1">Téléphone</p>
                  <a href="tel:+32XXXXXXXXX" className="text-gold hover:text-warm transition-colors text-sm">
                    +32 XX XX XX XX
                  </a>
                  <p className="text-warm/50 text-xs mt-1">Réservations & renseignements</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-warm font-semibold mb-1">Email</p>
                  <a href="mailto:info@wokin-rebecq.be" className="text-gold hover:text-warm transition-colors text-sm">
                    info@wokin-rebecq.be
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://www.google.com/maps/place/Wok+In/@50.6587342,4.1669091,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Voir l&apos;itinéraire
              </a>
              <Link href="/reservation" className="btn-primary">
                Réserver une table
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
