'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

const SOCIAL = [
  {
    label: 'GitHub',
    href: 'https://github.com/anna-dominguez',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adomingu',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(78,225,160,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="section-container w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">

          {/* Text content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">

            {/* Available badge */}
            <div className="animate-fade-up opacity-0 delay-100 inline-flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: 'var(--color-green)' }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: 'var(--color-green)' }}
                />
              </span>
              <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--color-green)' }}>
                {t.hero.available}
              </span>
            </div>

            {/* Greeting */}
            <p
              className="animate-fade-up opacity-0 delay-200 text-lg mb-2 font-mono"
              style={{ color: 'var(--color-grey)' }}
            >
              {t.hero.greeting}
            </p>

            {/* Name */}
            <h1 className="animate-fade-up opacity-0 delay-300 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-2 leading-none">
              Anna{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4EE1A0 0%, #6dedb5 50%, #a8f5d5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Dominguez
              </span>
            </h1>

            {/* Role */}
            <h2
              className="animate-fade-up opacity-0 delay-400 text-2xl sm:text-3xl font-semibold mb-4 tracking-tight"
              style={{ color: 'var(--color-grey)' }}
            >
              {t.hero.role}
            </h2>

            {/* Subtitle */}
            <p
              className="animate-fade-up opacity-0 delay-500 text-sm font-mono mb-6 tracking-widest"
              style={{ color: 'var(--color-grey-dim)' }}
            >
              {t.hero.subtitle}
            </p>

            {/* Tagline */}
            <p
              className="animate-fade-up opacity-0 delay-500 text-base leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--color-grey)' }}
            >
              {t.hero.tagline}
            </p>

            {/* CTAs */}
            <div className="animate-fade-up opacity-0 delay-600 flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href="#projects" className="btn-primary">
                {t.hero.cta}
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">
                {t.hero.contactCta}
              </a>
            </div>

            {/* Social links */}
            <div className="animate-fade-up opacity-0 delay-700 flex gap-5 justify-center lg:justify-start">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200"
                  style={{ color: 'var(--color-grey-dim)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-green)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-dim)')}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
              <a
                href="mailto:ann4.dominguez@gmail.com"
                className="text-xs font-mono transition-colors duration-200 flex items-center"
                style={{ color: 'var(--color-grey-dim)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-green)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-dim)')}
              >
                ann4.dominguez@gmail.com
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="animate-fade-up opacity-0 delay-300 relative flex-shrink-0">
            <div
              className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(78, 225, 160, 0.2)',
                boxShadow: '0 0 60px rgba(78, 225, 160, 0.1)',
              }}
            >
              <Image
                src="/images/image-profile.jpeg"
                alt="Anna Dominguez"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACQQAAIBAwMEAwAAAAAAAAAAAAECAwQFERIhMUFRYXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Az9sWYxPqFNJLM7ytG7MScsSSSfefNeFh1Uxu2GKq2T7yM+NeB5FFABxoH//Z"
                priority
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(10,10,10,0.4) 100%)',
                }}
              />
            </div>
            {/* Decorative corner accent */}
            <div
              className="absolute -bottom-3 -right-3 w-24 h-24 rounded-xl -z-10"
              style={{ background: 'rgba(78, 225, 160, 0.08)', border: '1px solid rgba(78, 225, 160, 0.15)' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 delay-700">
        <div
          className="w-px h-12 origin-top"
          style={{
            background: 'linear-gradient(to bottom, var(--color-green), transparent)',
          }}
        />
      </div>
    </section>
  )
}
