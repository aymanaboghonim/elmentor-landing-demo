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
        <div className="founder-grid">
          <figure className="founder-image">
            <img src={data.image} alt={t('founder.name') || data.name} width="220" height="220" />
          </figure>
          <div className="founder-info">
            <h3>{t('founder.name') || data.name}</h3>
            <p className="founder-role">{t('founder.role') || data.role}</p>
            <p>{t('founder.story') || data.story}</p>
            <p className="founder-links">
              <a href="https://elmentorprogram.github.io/#founder" target="_blank" rel="noopener noreferrer">View Profile</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
