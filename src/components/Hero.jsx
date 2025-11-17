import React from 'react'
import { useI18n } from '../i18n'
import analytics from '../lib/analytics'

export default function Hero () {
  const { t } = useI18n()
  return (
    <section id="hero" className="hero" role="region" aria-label={t('hero.title')}>
      <div className="hero-inner container">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <a className="cta" href="#contact" onClick={() => analytics.trackEvent('cta_click', { from: 'hero' })}>{t('hero.cta')}</a>
      </div>
    </section>
  )
}
