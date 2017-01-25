
import React from 'react'
import { render } from 'react-dom'
import { navigate } from 'redux-routing'

import 'normalize.css/normalize.css'
import 'tachyons'
import 'assets/css/root.css'

import { store } from 'state/store'

import { App } from 'App'

store.dispatch(navigate(window.location.href))

// Render our application.
render(
  <App />,
  document.getElementById('app')
)
