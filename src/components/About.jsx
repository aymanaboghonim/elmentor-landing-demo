import React from 'react'
import { useI18n } from '../i18n'
import mock from '../data/mockData'

export default function About () {
  const { t } = useI18n()
  return (
    <section id="about" className="about" aria-label={t('about.title')}>
      <div className="container">
        <h2>{t('about.title')}</h2>
        <p>{t('about.description') || mock.about.description}</p>
      </div>
    </section>
  )
}
