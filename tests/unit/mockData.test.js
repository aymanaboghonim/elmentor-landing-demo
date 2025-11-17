import mock from '../../src/data/mockData'
import { describe, it, expect } from 'vitest'

describe('mockData', () => {
  it('contains sections', () => {
    expect(mock.hero).toBeDefined()
    expect(mock.circles.length).toBeGreaterThan(0)
    expect(mock.news.length).toBeGreaterThan(0)
  })
})
