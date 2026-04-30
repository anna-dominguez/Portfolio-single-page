'use client'

import { useLanguage } from '@/lib/LanguageContext'

const LEVEL_DOTS = { Native: 5, Natif: 5, Nativo: 5, 'Full Professional': 4, 'Professionnel complet': 4, 'Profesional completo': 4, Professional: 3, Professionnel: 3, Elementary: 1, Élémentaire: 1, Elemental: 1 }

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="section-container">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left: text + location */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-sm accent">01.</span>
              <h2 className="section-title">{t.about.title}</h2>
              <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
            </div>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: 'var(--color-grey)', maxWidth: '540px' }}
            >
              {t.about.text}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 mb-10">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 flex-shrink-0" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
              </svg>
              <span className="text-sm font-mono" style={{ color: 'var(--color-grey-dim)' }}>
                {t.about.location}
              </span>
            </div>

            {/* Languages */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-grey-dim)' }}>
                {t.about.languages}
              </p>
              <div className="flex flex-col gap-3">
                {t.about.languagesList.map((lang) => {
                  const dots = LEVEL_DOTS[lang.level] ?? 3
                  return (
                    <div key={lang.name} className="flex items-center justify-between max-w-xs">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">{lang.name}</span>
                        <span className="text-xs" style={{ color: 'var(--color-grey-dim)' }}>{lang.level}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: i < dots ? 'var(--color-green)' : 'var(--color-surface-2)' }}
                          />
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: education */}
          <div className="lg:w-80">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-grey-dim)' }}>
              Formation
            </p>
            <div className="flex flex-col gap-4">
              {[
                { school: 'École O\'clock', diploma: 'BAC +4 — Concepteur Développeur d\'Application', period: '2024 – 2025' },
                { school: '42', diploma: 'Digital Technologies Architect', period: '2015 – 2018' },
                { school: 'OpenClassrooms', diploma: 'Développeur web', period: '2021' },
                { school: 'Université Paris X Nanterre', diploma: 'Droit', period: '2012 – 2014' },
              ].map((edu) => (
                <div
                  key={edu.school}
                  className="card p-4"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-sm font-semibold">{edu.school}</span>
                    <span className="text-xs font-mono flex-shrink-0" style={{ color: 'var(--color-grey-dim)' }}>
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: 'var(--color-grey)' }}>{edu.diploma}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
