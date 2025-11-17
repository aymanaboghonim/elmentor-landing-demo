import React from 'react'
import { useI18n } from '../i18n'
import mock from '../data/mockData'

export default function News () {
  const { t } = useI18n()
  const news = mock.news
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
