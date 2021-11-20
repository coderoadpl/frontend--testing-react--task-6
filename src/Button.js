import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <button
      {...otherProps}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node
}

export default Button
