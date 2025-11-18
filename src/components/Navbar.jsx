import React, { useState, useRef, useEffect } from 'react'
import { useI18n } from '../i18n'
import ThemeToggle from './ThemeToggle'

export default function Navbar () {
  const { t, locale, setLocale } = useI18n()
  const sections = ['hero', 'about', 'circles', 'activities', 'founder', 'news', 'contact']
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const navRef = useRef(null)

  // Toggle mobile menu
  const onToggle = () => setOpen((v) => !v)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    })
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Add a shadow to nav when scrollY > 10
  useEffect(() => {
    function onScroll () {
      if (!navRef.current) return
      if (window.scrollY > 10) navRef.current.classList.add('nav--scrolled')
      else navRef.current.classList.remove('nav--scrolled')
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="nav" aria-label="Main" ref={navRef}>
      <div className="container nav-inner">
        <div className="logo">Elmentor</div>
        <ul className={`nav-list ${open ? 'open' : ''}`} role="menubar" id="main-menu" aria-hidden={!open && undefined}>
          {sections.map((s) => (
            <li role="none" key={s}>
              <a
                role="menuitem"
                href={`#${s}`}
                aria-current={active === s ? 'true' : undefined}
                className={active === s ? 'active' : ''}
                onClick={() => setOpen(false)}
              >{t(`nav.${s}`)}</a>
            </li>
          ))}
        </ul>
        <button aria-controls="main-menu" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="menu-toggle" onClick={onToggle}>
          <span aria-hidden>☰</span>
        </button>
        <div className="lang-toggle">
          <button onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')} aria-pressed={locale === 'ar'}>{t('nav.lang')}</button>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
