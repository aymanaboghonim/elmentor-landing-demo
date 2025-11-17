import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { ThemeProvider, useTheme } from '../../src/lib/ThemeContext'
import ThemeToggle from '../../src/components/ThemeToggle'

// Test component that uses the theme context
function TestComponent () {
  const { theme } = useTheme()
  return <div data-testid="theme-display">{theme}</div>
}

describe('Dark Theme Feature', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    // Reset data-theme attribute
    document.documentElement.removeAttribute('data-theme')
  })

  afterEach(() => {
    cleanup()
  })

  it('defaults to light theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    const display = screen.getByTestId('theme-display')
    expect(display.textContent).toBe('light')
  })

  it('toggles theme when button is clicked', () => {
    render(
      <ThemeProvider>
        <TestComponent />
        <ThemeToggle />
      </ThemeProvider>
    )
    
    const display = screen.getByTestId('theme-display')
    const toggleButton = screen.getByRole('button', { name: /Switch to dark mode/i })
    
    // Initial state should be light
    expect(display.textContent).toBe('light')
    
    // Click to toggle to dark
    fireEvent.click(toggleButton)
    expect(display.textContent).toBe('dark')
    
    // Click to toggle back to light
    fireEvent.click(toggleButton)
    expect(display.textContent).toBe('light')
  })

  it('saves theme preference to localStorage', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    
    const toggleButton = screen.getByRole('button', { name: /Switch to dark mode/i })
    
    // Toggle to dark
    fireEvent.click(toggleButton)
    expect(localStorage.getItem('theme')).toBe('dark')
    
    // Toggle back to light
    fireEvent.click(toggleButton)
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('applies theme attribute to document', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    
    const toggleButton = screen.getByRole('button', { name: /Switch to dark mode/i })
    
    // Initial state
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    
    // Toggle to dark
    fireEvent.click(toggleButton)
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })

  it('loads theme from localStorage on mount', () => {
    // Set theme in localStorage before mount
    localStorage.setItem('theme', 'dark')
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    const display = screen.getByTestId('theme-display')
    expect(display.textContent).toBe('dark')
  })
})
