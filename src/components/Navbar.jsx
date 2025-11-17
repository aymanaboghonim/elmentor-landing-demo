import React, { useState, useEffect } from 'react'
import { useI18n } from '../i18n'

export default function Navbar () {
  const { t, locale, setLocale } = useI18n()
  const sections = ['hero', 'about', 'circles', 'activities', 'founder', 'news', 'contact']
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Toggle mobile menu
  const onToggle = () => setOpen((v) => !v)

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false) // Close mobile menu after click
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="nav" aria-label="Main">
      <div className="nav-inner">
        <div className="logo">Elmentor</div>
        <ul className={`nav-list ${open ? 'open' : ''}`} role="menubar" id="main-menu" aria-hidden={!open && undefined}>
          {sections.map((s) => (
            <li role="none" key={s}>
              <a 
                role="menuitem" 
                href={`#${s}`}
                className={activeSection === s ? 'active' : ''}
                onClick={(e) => scrollToSection(e, s)}
              >
                {t(`nav.${s}`)}
              </a>
            </li>
          ))}
        </ul>
        <button aria-controls="main-menu" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="menu-toggle" onClick={onToggle}>
          <span aria-hidden>☰</span>
        </button>
        <div className="lang-toggle">
          <button onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')} aria-pressed={locale === 'ar'}>{t('nav.lang')}</button>
        </div>
      </div>
    </nav>
  )
}
