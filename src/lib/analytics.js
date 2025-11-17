// Minimal analytics SDK — respects consent and provides a trackEvent API
const CONSENT_KEY = 'elmentor_analytics_consent'

export function hasConsent () {
  try {
    return localStorage.getItem(CONSENT_KEY) === '1'
  } catch (err) {
    return false
  }
}

export function setConsent (ok) {
  try {
    localStorage.setItem(CONSENT_KEY, ok ? '1' : '0')
  } catch (err) {
    // ignore
  }
}

export function trackEvent (name, payload = {}) {
  if (!hasConsent()) return
  // In a real app we would send to a backend or analytics provider.
  // For demo we log to the console so we can see events in CI artifacts.
  console.log('[analytics]', name, payload)
}

export default { hasConsent, setConsent, trackEvent }
