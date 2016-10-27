
import React from 'react'
import { render } from 'react-dom'
import { navigate } from 'redux-routing'

import 'normalize.css/normalize.css'
import 'tachyons'
import 'assets/css/root.css'

import { store } from 'state/store'

import { App } from 'App'

// Create app DOM node.
const appNode = document.createElement('div')
appNode.id = 'app'
document.body.appendChild(appNode)

store.dispatch(navigate(window.location.href))

// Render our application.
render(
  <App store={store} />,
  appNode
)
