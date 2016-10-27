
import React from 'react'
import { navigate } from 'redux-routing'

import { Button } from 'views/Atoms'

export const Blog = ({ dispatch, name }) => (
  <div className='ph5'>
    <h1 className='f4'>{ name && name || 'Blog' }</h1>
    <Button onClick={() => dispatch(navigate('/blog/ParamTest'))}>URL Params</Button><br />
    <Button onClick={() => dispatch(navigate('/'))}>Home</Button>
  </div>
)
