import React, { useState, useEffect } from 'react'
import { useI18n } from '../i18n'

export default function ContactForm () {
  const { t } = useI18n()
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  // Auto-dismiss success toast after 5 seconds
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const validateForm = (formData) => {
    const newErrors = {}
    const name = formData.get('name') || ''
    const email = formData.get('email') || ''
    const message = formData.get('message') || ''
    
    if (name.trim().length < 2) {
      newErrors.name = t('contact.errors.name') || 'Name must be at least 2 characters'
    }
    
    // More robust email validation regex
    // Validates: user@domain.tld format with proper TLD
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      newErrors.email = t('contact.errors.email') || 'Please enter a valid email address'
    }
    
    if (message.trim().length < 5) {
      newErrors.message = t('contact.errors.message') || 'Message is too short.'
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    // Validate form
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setErrors({})
    setSubmitting(true)
    setStatus(null)
    
    try {
      // Use Formspree endpoint - users should replace with their own form ID
      // To get a form ID: Sign up at https://formspree.io and create a new form
      const formId = 'your-form-id' // TODO: Replace with actual Formspree form ID
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
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
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="contact-name">
            {t('contact.name')}
            <input 
              id="contact-name"
              name="name" 
              type="text"
              required 
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <span id="name-error" className="field-error" role="alert">{errors.name}</span>}
          </label>
          
          <label htmlFor="contact-email">
            {t('contact.email')}
            <input 
              id="contact-email"
              name="email" 
              type="email" 
              required 
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <span id="email-error" className="field-error" role="alert">{errors.email}</span>}
          </label>
          
          <label htmlFor="contact-message">
            {t('contact.message')} (optional)
            <textarea 
              id="contact-message"
              name="message"
              rows="5"
              aria-required="false"
              required
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <span id="message-error" className="field-error" role="alert">{errors.message}</span>}
          </label>
          
          <button type="submit" disabled={submitting} aria-busy={submitting}>
            {submitting && <span className="loading" aria-hidden="true"></span>}
            {submitting ? (t('contact.sending') || 'Sending...') : t('contact.submit')}
          </button>
        </form>
        
        <noscript>
          <div className="noscript-warning">
            {t('contact.nojs') || 'JavaScript is disabled — please enable it or email us at hello@elmentor.org'}
          </div>
        </noscript>
        
        {status === 'success' && (
          <div className="toast" role="status" aria-live="polite">
            {t('contact.success')}
          </div>
        )}
        {status === 'error' && (
          <div className="error" role="alert">
            {t('contact.error')}
          </div>
        )}
      </div>
    </section>
  )
}
