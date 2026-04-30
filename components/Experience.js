'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(0)

  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-sm accent">03.</span>
          <h2 className="section-title">{t.experience.title}</h2>
          <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
        </div>

        <div className="flex flex-col gap-4">
          {t.experience.items.map((exp, i) => (
            <div
              key={exp.company}
              className="card overflow-hidden cursor-pointer"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 sm:p-6 select-none">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="font-semibold text-base">{exp.company}</span>
                  <span className="text-sm hidden sm:block" style={{ color: 'var(--color-grey-dim)' }}>·</span>
                  <span className="text-sm" style={{ color: 'var(--color-grey)' }}>{exp.role}</span>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span
                    className="text-xs font-mono hidden md:block"
                    style={{ color: 'var(--color-grey-dim)' }}
                  >
                    {exp.period}
                  </span>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{
                      background: open === i ? 'var(--color-green-dim)' : 'var(--color-surface-2)',
                    }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="w-3.5 h-3.5 transition-transform duration-200"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        color: open === i ? 'var(--color-green)' : 'var(--color-grey)',
                        transform: open === i ? 'rotate(180deg)' : 'none',
                      }}
                    >
                      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              {open === i && (
                <div
                  className="px-5 sm:px-6 pb-5 sm:pb-6 border-t"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 mb-5">
                    <span className="text-xs font-mono md:hidden" style={{ color: 'var(--color-grey-dim)' }}>
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono flex items-center gap-1" style={{ color: 'var(--color-grey-dim)' }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {exp.location}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2.5 mb-5">
                    {exp.tasks.map((task, j) => (
                      <li key={j} className="flex gap-3 text-sm" style={{ color: 'var(--color-grey)' }}>
                        <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: 'var(--color-green)' }} />
                        {task}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="tag text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
