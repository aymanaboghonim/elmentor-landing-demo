/**
 * Scroll-based animations using Intersection Observer
 * Adds fade-in and slide-up effects to elements as they enter viewport
 */

export function initScrollAnimations() {
  if (typeof window === 'undefined') return

  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  // Create observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          // Optionally unobserve after animation
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  // Observe sections and cards
  const animateElements = document.querySelectorAll(
    'section, .circle, .activities li, .news li, .contact form'
  )
  
  animateElements.forEach((el, index) => {
    // Add delay based on index for staggered effect
    el.style.setProperty('--animation-delay', `${index * 0.1}s`)
    el.classList.add('animate-on-scroll')
    observer.observe(el)
  })
}
