import React from 'react'
import './index.scss'

const Button = ({ children, ...props}) => (
  <a className="button" { ...props }>{children}</a>
)

export default Button