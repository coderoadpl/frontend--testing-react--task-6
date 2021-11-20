import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from './Button'

describe('Button test – React Testing Library', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Button />)
    expect(asFragment()).toMatchSnapshot()
  })
})
