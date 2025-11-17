import React, { createContext, useContext, useMemo, useEffect } from 'react'
import en from './en.json'
import ar from './ar.json'

const I18nContext = createContext()

export function I18nProvider ({ children, locale, setLocale }) {
  const resources = useMemo(() => ({ en, ar }), [])
  const t = (key) => {
    const keys = key.split('.')
    const val = keys.reduce((acc, k) => acc && acc[k], resources[locale] || {})
    return val || keys.reduce((acc, k) => acc && acc[k], resources.en)
  }
  useEffect(() => {
    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
  }, [locale])

  return <I18nContext.Provider value={{ t, locale, setLocale }}>{children}</I18nContext.Provider>
}
export const useI18n = () => useContext(I18nContext)
