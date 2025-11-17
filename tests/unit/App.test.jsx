import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../../src/App'

describe('App', () => {
  it('renders hero title', () => {
    render(<App />)
    const el = screen.getByRole('heading', { name: /Elmentor Program/i })
    expect(el).toBeTruthy()
  })
})
