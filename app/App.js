
// CONTAINER
import React from 'react'
import { match } from 'redux-routing'
import { Provider, connect } from 'react-redux'

import { store } from 'state/store'

import { Home } from 'views/Home'

import { routes } from 'routes'

const mapStateToProps = (state) => ({
  href: state.location.href
})

const Container = ({ dispatch, href }) => {
  // Match current route.
  const routeMatch = match(href, routes)

  // Get correct component or default to Home.
  const RouteComponent = routeMatch && routeMatch.handler() || Home

  return <RouteComponent />
}

const RouteComponent = connect(mapStateToProps)(Container)

export const App = () => (
  <Provider store={store}>
    <RouteComponent />
  </Provider>
)
