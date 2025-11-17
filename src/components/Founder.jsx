import React from 'react'
import { useI18n } from '../i18n'

export default function Founder () {
  const { t } = useI18n()
  return (
    <section id="founder" className="founder" aria-label={t('founder.title')}>
      <div className="container">
        <h2>{t('founder.title')}</h2>
        <p>{t('founder.story')}</p>
      </div>
    </section>
  )
}
