'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
      <div className="section-container">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-sm accent">02.</span>
          <h2 className="section-title">{t.skills.title}</h2>
          <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skills.categories.map((cat) => (
            <div key={cat.name} className="card p-6">
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-1.5 h-5 rounded-full"
                  style={{ background: 'var(--color-green)' }}
                />
                <h3 className="text-sm font-semibold tracking-wide">{cat.name}</h3>
              </div>
              <div className="flex flex-col gap-2.5">
                {cat.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 group">
                    <div
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-200"
                      style={{ background: 'var(--color-grey-dim)' }}
                    />
                    <span
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--color-grey)' }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--color-grey-dim)' }}>
            Certifications
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Apprenez à apprendre',
              'Comprendre le web',
              'NameCheap — Make a Website',
              'Learn Responsive Design',
              'Learn Redux',
            ].map((cert) => (
              <span key={cert} className="tag">{cert}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
