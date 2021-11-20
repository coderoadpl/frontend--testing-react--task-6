import React from 'react'

export const CounterHooks = () => {
  const [number, setNumber] = React.useState(0)

  const inc = React.useCallback(() => setNumber((prevNumber) => prevNumber + 1), [])

  return (
    <div>
      <h1>
        {number}
      </h1>
      <button
        onClick={inc}
      >
        +
      </button>
    </div>
  )
}

export default CounterHooks
