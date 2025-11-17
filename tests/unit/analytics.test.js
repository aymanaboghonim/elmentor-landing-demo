import { describe, it, expect, beforeEach, vi } from 'vitest'
import { hasConsent, setConsent, trackEvent } from '../../src/lib/analytics'

describe('analytics', () => {
  beforeEach(() => {
    localStorage.clear()
    // stub console.log
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  it('stores consent in localStorage', () => {
    expect(hasConsent()).toBe(false)
    setConsent(true)
    expect(hasConsent()).toBe(true)
    setConsent(false)
    expect(hasConsent()).toBe(false)
  })

  it('tracks only when consent given', () => {
    setConsent(false)
    trackEvent('foo', { a: 1 })
    expect(console.log).not.toHaveBeenCalled()
    setConsent(true)
    trackEvent('foo', { a: 1 })
    expect(console.log).toHaveBeenCalledWith('[analytics]', 'foo', { a: 1 })
  })
})
