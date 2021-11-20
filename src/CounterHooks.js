import React from 'react'

import Button from './Button'

export const CounterHooks = () => {
  const [number, setNumber] = React.useState(0)

  const inc = React.useCallback(() => setNumber((prevNumber) => prevNumber + 1), [])

  return (
    <div>
      <h1
        data-testid={'counter__number-display'}
      >
        {number}
      </h1>
      <Button
        data-testid={'counter__button--inc'}
        onClick={inc}
      >
        +
      </Button>
    </div>
  )
}

export default CounterHooks
