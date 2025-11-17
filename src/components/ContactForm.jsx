import React, { useState } from 'react'
import { useI18n } from '../i18n'

export default function ContactForm () {
  const { t } = useI18n()
  const [status, setStatus] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    try {
      // Frontend-only submission: Formspree endpoint (replace id) — keeps site static
      const res = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: data
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }
  return (
    <section id="contact" className="contact" aria-label={t('contact.title')}>
      <div className="container">
        <h2>{t('contact.title')}</h2>
        <form onSubmit={handleSubmit} name="join-form" action="https://formspree.io/f/your-form-id" method="POST">
          <label>{t('contact.name')}<input name="name" required /></label>
          <label>{t('contact.email')}<input name="email" type="email" required /></label>
          <label>{t('contact.message')}<textarea name="message" /></label>
          <button type="submit">{t('contact.submit')}</button>
        </form>
        <noscript>
          <div>
            {t('contact.nojs') || 'JavaScript disabled — please enable JS or email us.'}
          </div>
        </noscript>
        {status === 'success' && <div className="toast" role="status" aria-live="polite">{t('contact.success')}</div>}
        {status === 'error' && <div className="error" role="alert">{t('contact.error')}</div>}
      </div>
    </section>
  )
}
