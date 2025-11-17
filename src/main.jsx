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
  // Initialize animations after a short delay to ensure DOM is ready
  setTimeout(initScrollAnimations, 100)
}

createRoot(document.getElementById('root')).render(<App />)
