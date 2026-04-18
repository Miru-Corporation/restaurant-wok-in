'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

type NavLink = { href: string; label: string }

type Props = {
  open: boolean
  onClose: () => void
  links: NavLink[]
}

export default function MobileMenu({ open, onClose, links }: Props) {
  const pathname = usePathname()

  useEffect(() => {
    onClose()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween', duration: 0.35 }}
          className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          {/* Decorative gold line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gold/30" />

          {links.map(({ href, label }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
            >
              <Link
                href={href}
                className="font-display text-3xl text-warm hover:text-gold transition-colors duration-200"
                onClick={onClose}
              >
                {label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <a href="tel:+32XXXXXXXXX" className="btn-primary text-base px-10 py-4">
              Réserver une table
            </a>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
