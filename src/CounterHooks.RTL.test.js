import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import CounterHooks from './CounterHooks'

describe('CounterHooks test – React Testing Library', () => {
  it('should render valid initial number', () => {
    const { container } = render(<CounterHooks />)

    const h1 = container.querySelector('h1')

    expect(h1.textContent).toBe('0')
  })

  it('should render valid number after button click', () => {
    const { getByText } = render(<CounterHooks />)

    const button = getByText('+')

    fireEvent.click(button)

    expect(getByText('1')).toBeInTheDocument()
  })
})
