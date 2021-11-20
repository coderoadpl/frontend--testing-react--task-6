import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import CounterClass from './CounterClass'

Enzyme.configure({ adapter: new Adapter() })

describe('CounterClass test – Enzyme', () => {
  it('should render valid initial number', () => {
    const wrapper = shallow(<CounterClass />)

    const h1 = wrapper.find('h1')

    expect(h1.text()).toBe('0')
  })

  it('should render valid number after button click', () => {
    const wrapper = shallow(<CounterClass />)
    const instance = wrapper.instance()

    instance.setState({ number: 5 })

    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('5')
  })
})
