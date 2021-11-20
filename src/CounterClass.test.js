import React from 'react'
import ReactDOM from 'react-dom'

import CounterClass from './CounterClass'

describe('CounterClass test', () => {
  it('should render valid initial number', () => {
    const div = document.createElement('div')

    ReactDOM.render(<CounterClass />, div)

    const h1 = div.querySelector('h1')

    expect(h1.textContent).toBe('0')

    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render valid number after button click', () => {
    const div = document.createElement('div')

    ReactDOM.render(<CounterClass />, div)

    const h1 = div.querySelector('h1')
    const button = div.querySelector('button')

    button.click()

    expect(h1.textContent).toBe('1')

    ReactDOM.unmountComponentAtNode(div)
  })
})
