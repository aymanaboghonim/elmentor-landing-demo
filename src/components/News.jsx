import React from 'react'
import { useI18n } from '../i18n'

export default function News () {
  const { t } = useI18n()
  const news = [{ id: 'n1', title: t('news.sample.title'), date: '2025-11-10' }]
  return (
    <section id="news" className="news" aria-label={t('news.title')}>
      <div className="container">
        <h2>{t('news.title')}</h2>
        <ul>
          {news.map(n => (
            <li key={n.id}>{n.date} — {n.title}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
