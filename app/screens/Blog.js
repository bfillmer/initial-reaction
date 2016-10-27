
import React from 'react'
import { navigate } from 'redux-routing'

import { Button } from 'common/Atoms'

export const Blog = ({ dispatch }) => {
  return (
    <div className='ph5'>
      <h1 className='f4'>BLOG</h1>
      <Button onClick={() => dispatch(navigate('/'))}>Home</Button>
    </div>
  )
}
