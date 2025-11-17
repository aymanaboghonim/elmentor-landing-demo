import React from 'react'
import { useI18n } from '../i18n'
import mock from '../data/mockData'

export default function Circles () {
  const { t } = useI18n()
  const sample = mock.circles
  return (
    <section id="circles" className="circles" aria-label={t('circles.title')}>
      <div className="container">
        <h2>{t('circles.title')}</h2>
        <div className="circle-list">
          {sample.map((c) => (
            <article key={c.id} className="circle">
              <h3>{c.title}</h3>
              <p>{c.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
