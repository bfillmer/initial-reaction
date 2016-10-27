
// PRESENTATIONAL
import React from 'react'
import { navigate } from 'redux-routing'

import { Button } from 'views/Atoms'

export const Blog = ({ dispatch }) => (
  <div className='ph5'>
    <h1 className='f4'>Blog</h1>
    <Button onClick={() => dispatch(navigate('/'))}>Home</Button>
  </div>
)
