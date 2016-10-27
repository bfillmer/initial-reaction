
import React from 'react'

export const Button = ({ children, onClick }) => (
  <button className='pointer dim ba br2 bg-light-blue b--dark-blue ph2 pv1 mv1' onClick={onClick}>{children}</button>
)
