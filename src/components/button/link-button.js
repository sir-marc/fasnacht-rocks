import React from 'react'
import './index.scss'

const LinkButton = ({ children, ...props}) => (
  <a className="button" { ...props }>{children}</a>
)

export default LinkButton