import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import CounterHooks from './CounterHooks'

describe('CounterHooks test – React Testing Library', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<CounterHooks />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render valid initial number', () => {
    const { container } = render(<CounterHooks />)

    const numberDisplay = container.querySelector('[data-testid="counter__number-display"]')

    expect(numberDisplay.textContent).toBe('0')
  })

  it('should render valid number after button click', () => {
    const { getByTestId } = render(<CounterHooks />)

    const button = getByTestId('counter__button--inc')

    fireEvent.click(button)

    const numberDisplay = getByTestId('counter__number-display')

    expect(numberDisplay).toHaveTextContent('1')
  })
})
