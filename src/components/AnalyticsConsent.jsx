import React, { useState, useEffect } from 'react'
import analytics, { setConsent, hasConsent } from '../lib/analytics'

export default function AnalyticsConsent () {
  const [granted, setGranted] = useState(false)
  useEffect(() => {
    setGranted(hasConsent())
  }, [])

  if (granted) return null

  return (
    <div className="analytics-consent" role="dialog" aria-live="polite">
      <div className="container">
        <p>We use anonymous analytics to improve the site. Do you accept?</p>
        <button onClick={() => { setConsent(true); setGranted(true) }}>Accept</button>
        <button onClick={() => { setConsent(false); setGranted(false) }}>Decline</button>
      </div>
    </div>
  )
}
