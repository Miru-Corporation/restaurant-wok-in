'use client'

import { useState } from 'react'
import type { MenuSection } from '@/data/menu'

const BADGE_COLORS: Record<string, string> = {
  'Populaire':    'bg-accent/20 text-accent border border-accent/30',
  'Nouveau':      'bg-gold/20 text-gold border border-gold/30',
  'Végétarien':   'bg-green-900/30 text-green-400 border border-green-800/40',
  'Sans gluten':  'bg-blue-900/30 text-blue-400 border border-blue-800/40',
}

type Props = {
  sections: MenuSection[]
  activeId?: string
}

export default function MenuTabs({ sections, activeId }: Props) {
  const [activeTab, setActiveTab] = useState(activeId ?? sections[0].id)
  const active = sections.find((s) => s.id === activeTab) ?? sections[0]

  return (
    <div>
      {/* Tab buttons */}
      <div
        className="flex flex-wrap justify-center gap-3 mb-14"
        role="tablist"
        aria-label="Sections du menu"
      >
        {sections.map((section) => (
          <button
            key={section.id}
            role="tab"
            aria-selected={activeTab === section.id}
            aria-controls={`panel-${section.id}`}
            id={`tab-${section.id}`}
            onClick={() => setActiveTab(section.id)}
            className={`px-7 py-3 text-sm font-semibold uppercase tracking-wider rounded-sm
                       border transition-all duration-300 ${
              activeTab === section.id
                ? 'bg-accent text-warm border-accent'
                : 'bg-transparent text-warm/60 border-warm/20 hover:border-gold hover:text-gold'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
      >
        {/* Description + formulas */}
        <div className="grid lg:grid-cols-2 gap-12 mb-14">
          <div>
            <p className="eyebrow mb-3">{active.subtitle}</p>
            <h2 className="font-display text-4xl text-warm mb-3">{active.title}</h2>
            <div className="gold-rule-left" />
            <p className="text-warm/70 leading-relaxed">{active.description}</p>
          </div>

          {active.formulas.length > 0 && (
            <div className="card-dark p-8 self-start">
              <h3 className="font-display text-xl text-gold mb-5">Formules & Tarifs</h3>
              <div className="divide-y divide-warm/10">
                {active.formulas.map((formula) => (
                  <div key={formula.label} className="flex items-center justify-between py-4">
                    <div>
                      <p className="text-warm font-medium text-sm">{formula.label}</p>
                      {formula.note && (
                        <p className="text-warm/40 text-xs mt-0.5">{formula.note}</p>
                      )}
                    </div>
                    <span className="font-display text-xl text-gold">{formula.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-warm/10">
                <a href="tel:+32XXXXXXXXX" className="btn-primary w-full justify-center">
                  Réserver une table
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Categories + items */}
        {active.categories.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {active.categories.map((category) => (
              <div key={category.id} className="card-dark p-7">
                <h3 className="font-display text-xl text-warm mb-5 pb-3 border-b border-warm/10">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <span className="text-warm/80 text-sm">{item.name}</span>
                        {item.description && (
                          <p className="text-warm/50 text-xs mt-0.5">{item.description}</p>
                        )}
                      </div>
                      {item.badge && (
                        <span
                          className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${
                            BADGE_COLORS[item.badge] ?? 'bg-warm/10 text-warm/60'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
