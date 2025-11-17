import React from 'react'
import { useI18n } from '../i18n'

export default function Navbar () {
  const { t, locale, setLocale } = useI18n()
  const sections = ['hero', 'about', 'circles', 'activities', 'founder', 'news', 'contact']
  return (
    <nav className="nav" aria-label="Main">
      <div className="container nav-inner">
        <div className="logo">Elmentor</div>
        <ul className="nav-list" role="menubar">
          {sections.map((s) => (
            <li role="none" key={s}><a role="menuitem" href={`#${s}`}>{t(`nav.${s}`)}</a></li>
          ))}
        </ul>
        <div className="lang-toggle">
          <button onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')} aria-pressed={locale === 'ar'}>{t('nav.lang')}</button>
        </div>
      </div>
    </nav>
  )
}
