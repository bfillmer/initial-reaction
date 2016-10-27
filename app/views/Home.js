
import React from 'react'
import { navigate } from 'redux-routing'

import { Button } from 'views/Atoms'

export const Home = ({ dispatch }) => {
  return (
    <div className='ph5'>
      <h1 className='f4'>Home</h1>
      <Button onClick={() => dispatch(navigate('/blog'))}>Blog</Button>
    </div>
  )
}
