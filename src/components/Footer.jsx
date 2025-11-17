import React from 'react'
import { useI18n } from '../i18n'

export default function Footer () {
  const { t } = useI18n()
  return (
    <footer className="site-footer">
      <div className="container">
        <div>{t('footer.copy')}</div>
        <div className="social">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
