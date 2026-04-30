'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

const LANGS = ['fr', 'en', 'es']

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="font-bold text-lg tracking-tight flex items-center gap-1">
          <span className="accent">&lt;</span>
          <span>AD</span>
          <span className="accent">/&gt;</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right: lang switcher + mobile menu */}
        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center gap-1 text-xs font-semibold tracking-widest">
            {LANGS.map((l, i) => (
              <span key={l} className="flex items-center">
                <button
                  onClick={() => setLang(l)}
                  className="px-1 py-0.5 rounded transition-colors duration-150 cursor-pointer"
                  style={{
                    color: lang === l ? 'var(--color-green)' : 'var(--color-grey-dim)',
                    textTransform: 'uppercase',
                  }}
                >
                  {l}
                </button>
                {i < LANGS.length - 1 && (
                  <span style={{ color: 'var(--color-grey-dim)' }}>/</span>
                )}
              </span>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className="block h-px w-6 transition-all duration-200"
              style={{
                background: 'white',
                transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              }}
            />
            <span
              className="block h-px w-6 transition-all duration-200"
              style={{
                background: 'white',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px w-6 transition-all duration-200"
              style={{
                background: 'white',
                transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: 'rgba(10, 10, 10, 0.97)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium py-1 transition-colors duration-150"
              style={{ color: 'var(--color-grey)' }}
              onClick={handleLinkClick}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
