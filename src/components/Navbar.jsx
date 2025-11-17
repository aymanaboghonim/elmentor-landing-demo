import React, { useState } from 'react'
import { useI18n } from '../i18n'
import ThemeToggle from './ThemeToggle'

export default function Navbar () {
  const { t, locale, setLocale } = useI18n()
  const sections = ['hero', 'about', 'circles', 'activities', 'founder', 'news', 'contact']
  const [open, setOpen] = useState(false)

  // Toggle mobile menu
  const onToggle = () => setOpen((v) => !v)

  return (
    <nav className="nav" aria-label="Main">
      <div className="container nav-inner">
        <div className="logo">Elmentor</div>
        <ul className={`nav-list ${open ? 'open' : ''}`} role="menubar" id="main-menu" aria-hidden={!open && undefined}>
          {sections.map((s) => (
            <li role="none" key={s}><a role="menuitem" href={`#${s}`}>{t(`nav.${s}`)}</a></li>
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
