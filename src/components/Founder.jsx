import React from 'react'
import { useI18n } from '../i18n'
import mock from '../data/mockData'

export default function Founder () {
  const { t } = useI18n()
  const data = mock.founder
  return (
    <section id="founder" className="founder" aria-label={t('founder.title')}>
      <div className="container">
        <h2>{t('founder.title')}</h2>
        <p>{t('founder.story') || data.story}</p>
      </div>
    </section>
  )
}
