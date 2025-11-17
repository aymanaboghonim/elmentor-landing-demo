import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'
import './styles/contact.css'
import { initSmoothScroll } from './lib/smoothScroll'
import { initScrollAnimations } from './lib/scrollAnimations'

// Initialize smooth-scroll and animations on client
if (typeof window !== 'undefined') {
  initSmoothScroll()
  // Initialize animations after React render completes
  requestAnimationFrame(() => {
    setTimeout(initScrollAnimations, 0)
  })
}

createRoot(document.getElementById('root')).render(<App />)
