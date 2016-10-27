
// CONTAINER
import React from 'react'
import { match } from 'redux-routing'

import { store } from 'state/store'
import { connectWithStore } from 'state/utils'

import { Home } from 'views/Home'

import { routes } from 'routes'

const mapStateToProps = (state) => ({
  href: state.location.href
})

const View = ({ dispatch, href }) => {
  // Match current route.
  const routeMatch = match(href, routes)

  // Get correct component or default to Home.
  const RouteComponent = routeMatch && routeMatch.handler() || Home

  return <RouteComponent dispatch={dispatch} />
}

export const App = connectWithStore(store, View, mapStateToProps)
