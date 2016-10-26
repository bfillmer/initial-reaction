
import React from 'react'
import { render } from 'react-dom'

import 'normalize.css/normalize.css'
import 'tachyons'
import 'appearance/css/root.css'

import { store } from 'state/store'

import { App } from 'App'

// Create app DOM node.
const appNode = document.createElement('div')
appNode.id = 'app'
document.body.appendChild(appNode)

// Render our application.
render(
  <App store={store} />,
  appNode
)
