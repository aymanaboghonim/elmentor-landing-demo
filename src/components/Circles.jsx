import React from 'react'
import { useI18n } from '../i18n'

export default function Circles () {
  const { t } = useI18n()
  const sample = [
    { id: 'design', title: t('circles.design.title'), summary: t('circles.design.summary') },
    { id: 'dev', title: t('circles.dev.title'), summary: t('circles.dev.summary') }
  ]
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
