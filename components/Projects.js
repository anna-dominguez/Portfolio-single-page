'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

function TechTags({ tech, limit = 3 }) {
  const [expanded, setExpanded] = useState(false)
  const visible = tech.slice(0, limit)
  const hidden = tech.slice(limit)

  return (
    <div className="flex flex-wrap gap-1.5">
      {visible.map((t) => (
        <span key={t} className="tag text-xs">{t}</span>
      ))}
      {hidden.length > 0 && (
        <div className="relative">
          <button
            className="tag text-xs cursor-pointer select-none"
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
          >
            +{hidden.length}
          </button>
          {expanded && (
            <div
              className="absolute bottom-full left-0 mb-2 flex flex-wrap gap-1.5 p-2 rounded-lg z-10 shadow-lg"
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid rgba(78,225,160,0.25)',
                minWidth: '120px',
              }}
            >
              {hidden.map((t) => (
                <span key={t} className="tag text-xs">{t}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const ICONS = {
  'Archi-Zen': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M3 21h18M3 10h18M5 21V10M19 21V10M12 3L3 10h18L12 3z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'IACrea': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .28 2.716-1.115 2.716H3.913c-1.395 0-2.116-1.716-1.115-2.716L4.2 15.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'AgroLeague': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'Viceversa 3D': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'Decathlon Digital': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'Gofer': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function Projects() {
  const { t } = useLanguage()
  const [featured, ...rest] = t.projects.items

  return (
    <section
      id="projects"
      className="py-24 lg:py-32"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="section-container">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-sm accent">04.</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
        </div>

        {/* Featured project */}
        <div
          className="card mb-6 p-7 lg:p-10 group"
          style={{ background: 'var(--color-bg)' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            {/* Icon */}
            <div
              className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ background: 'var(--color-green-dim)', color: 'var(--color-green)' }}
            >
              {ICONS[featured.title]}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-xl font-bold">{featured.title}</h3>
                <span className="tag">Featured</span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-grey)', maxWidth: '600px' }}>
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tech.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4">
                {featured.url && (
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    {t.projects.visit}
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2">
                      <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
                {featured.github && (
                  <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                    {t.projects.code}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Grid: remaining projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((project) => (
            <div key={project.title} className="card p-5 flex flex-col gap-4">
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--color-green-dim)', color: 'var(--color-green)' }}
              >
                {ICONS[project.title] ?? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-bold mb-2">{project.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-grey)' }}>
                  {project.description}
                </p>
              </div>

              <TechTags tech={project.tech} />

              <div className="flex gap-3 pt-1 border-t" style={{ borderColor: 'var(--color-border)' }}>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold flex items-center gap-1 transition-colors duration-150"
                    style={{ color: 'var(--color-green)' }}
                  >
                    {t.projects.visit}
                    <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth="2">
                      <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold flex items-center gap-1"
                    style={{ color: 'var(--color-grey)' }}
                  >
                    {t.projects.code}
                  </a>
                )}
                {!project.url && !project.github && (
                  <span className="text-xs italic" style={{ color: 'var(--color-grey-dim)' }}>
                    Projet privé
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
