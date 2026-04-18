'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: 'easeOut' },
})

export default function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden"
      aria-label="Bienvenue chez Wok In"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Salle élégante du restaurant Wok In à Rebecq"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.2)}
          className="eyebrow mb-5"
        >
          Restaurant Asiatique — Rebecq, Brabant wallon
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-16 h-px bg-gold mx-auto mb-6"
          aria-hidden="true"
        />

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.4)}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-warm mb-4 leading-[1.1]"
        >
          L&apos;Asie<br />
          <span className="text-gold">à votre table</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.7)}
          className="font-display text-lg sm:text-xl text-warm/80 mb-10 tracking-wider"
        >
          Buffet à volonté &nbsp;·&nbsp; Wok &nbsp;·&nbsp; Teppanyaki
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="tel:+32XXXXXXXXX" className="btn-primary px-8 py-4 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Réserver une table
          </a>
          <Link href="/carte" className="btn-outline px-8 py-4 text-sm">
            Voir la carte
          </Link>
          <a
            href="https://www.google.com/maps/place/Wok+In/@50.6587342,4.1669091,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-8 py-4 text-sm"
            aria-label="Voir l'itinéraire vers Wok In sur Google Maps"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Itinéraire
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow"
        aria-hidden="true"
      >
        <div className="w-6 h-9 rounded-full border-2 border-warm/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
