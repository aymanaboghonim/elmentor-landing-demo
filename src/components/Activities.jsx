import React from 'react'
import { useI18n } from '../i18n'
import mock from '../data/mockData'

export default function Activities () {
  const { t } = useI18n()
  const items = mock.activities
  return (
    <section id="activities" className="activities" aria-label={t('activities.title')}>
      <div className="container">
        <h2>{t('activities.title')}</h2>
        <ul>
          {items.map(i => (
            <li key={i.id}>
              <strong>{i.title}</strong><span> — {i.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
