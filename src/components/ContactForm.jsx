import React, { useState } from 'react'
import { useI18n } from '../i18n'

export default function ContactForm () {
  const { t } = useI18n()
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = (formData) => {
    const newErrors = {}
    const name = formData.get('name')
    const email = formData.get('email')
    
    if (!name || name.trim().length < 2) {
      newErrors.name = t('contact.errors.name') || 'Name must be at least 2 characters'
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      newErrors.email = t('contact.errors.email') || 'Please enter a valid email'
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
    setLoading(true)
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
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    } finally {
      setLoading(false)
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
            {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
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
            {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
          </label>
          
          <label htmlFor="contact-message">
            {t('contact.message')}
            <textarea 
              id="contact-message"
              name="message"
              rows="5"
            />
          </label>
          
          <button type="submit" disabled={loading}>
            {loading && <span className="loading" aria-hidden="true"></span>}
            {loading ? (t('contact.sending') || 'Sending...') : t('contact.submit')}
          </button>
        </form>
        
        <noscript>
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#fef3c7', borderRadius: '8px' }}>
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
