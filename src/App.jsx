import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Circles from './components/Circles'
import Activities from './components/Activities'
import Founder from './components/Founder'
import News from './components/News'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { I18nProvider } from './i18n'

export default function App () {
  const [locale, setLocale] = useState('en')

  return (
    <I18nProvider locale={locale} setLocale={setLocale}>
      <div>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Circles />
          <Activities />
          <Founder />
          <News />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
