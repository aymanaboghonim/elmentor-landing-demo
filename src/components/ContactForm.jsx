import React, { useState } from 'react'
import { useI18n } from '../i18n'

export default function ContactForm () {
  const { t } = useI18n()
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    setStatus(null)
    setErrors({})
    const newErrors = (function(){
      const errs = {}
      const name = data.get('name') || ''
      const email = data.get('email') || ''
      const message = data.get('message') || ''
      if (name.trim().length < 2) errs.name = t('contact.errors.name') || 'Please enter your name.'
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRe.test(email)) errs.email = t('contact.errors.email') || 'Enter a valid email address.'
      if (message.trim().length < 5) errs.message = t('contact.errors.message') || 'Message is too short.'
      return errs
    })()
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }
    setSubmitting(true)
    try {
      // Frontend-only submission: Formspree endpoint (replace id) — keeps site static
      const res = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: data
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
        setErrors({})
        setSubmitting(false)
        // Track event for successful submissions
        import('../lib/analytics').then(({ default: analytics }) => analytics.trackEvent('form_submit', { result: 'success' }))
      } else {
        setStatus('error')
        setSubmitting(false)
        import('../lib/analytics').then(({ default: analytics }) => analytics.trackEvent('form_submit', { result: 'error' }))
      }
    } catch (err) {
      setStatus('error')
      setSubmitting(false)
      import('../lib/analytics').then(({ default: analytics }) => analytics.trackEvent('form_submit', { result: 'error' }))
    }
  }
  return (
    <section id="contact" className="contact" aria-label={t('contact.title')}>
      <div className="container">
        <h2>{t('contact.title')}</h2>
        <form onSubmit={handleSubmit} name="join-form" action="https://formspree.io/f/your-form-id" method="POST" noValidate>
          <label htmlFor="name">{t('contact.name')}</label>
          <input id="name" name="name" aria-invalid={errors.name ? 'true' : 'false'} aria-describedby={errors.name ? 'err-name' : undefined} />
          {errors.name && <div id="err-name" className="field-error" role="alert">{errors.name}</div>}

          <label htmlFor="email">{t('contact.email')}</label>
          <input id="email" name="email" type="email" aria-invalid={errors.email ? 'true' : 'false'} aria-describedby={errors.email ? 'err-email' : undefined} />
          {errors.email && <div id="err-email" className="field-error" role="alert">{errors.email}</div>}

          <label htmlFor="message">{t('contact.message')}</label>
          <textarea id="message" name="message" aria-invalid={errors.message ? 'true' : 'false'} aria-describedby={errors.message ? 'err-message' : undefined} />
          {errors.message && <div id="err-message" className="field-error" role="alert">{errors.message}</div>}

          <button type="submit" disabled={submitting} aria-busy={submitting}>{submitting ? (t('contact.sending') || 'Sending...') : t('contact.submit')}</button>
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
