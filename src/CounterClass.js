import React from 'react'

import Button from './Button'

export class CounterClass extends React.Component {
  state ={
    number: 0
  }

  inc = () => this.setState((prevState) => ({
    number: prevState.number + 1
  }))

  render () {
    const { number } = this.state
    return (
      <div>
        <h1>
          {number}
        </h1>
        <Button
          onClick={this.inc}
        >
          +
        </Button>
      </div>
    )
  }
}

export default CounterClass
