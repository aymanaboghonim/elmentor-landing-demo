import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'
import { initSmoothScroll } from './lib/smoothScroll'

// Initialize smooth-scroll on client
if (typeof window !== 'undefined') initSmoothScroll()

createRoot(document.getElementById('root')).render(<App />)
