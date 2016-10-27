
import React, { Component } from 'react'
import { match } from 'redux-routing'

// Failsafe for routes that don't match. 404.
import { Home } from 'screens/Home'

import { routes } from 'routes'

// Primary container component, sets state to the contents of the Socrates
// store on mount and when the store changes.
export class App extends Component {
  componentWillMount () {
    const getState = this.props.store.getState

    // Map redux dispatch as state.dispatch.
    this.setState({
      dispatch: this.props.store.dispatch
    })

    // Map store data to state. Don't assume there is a boot state.
    if (typeof getState() !== 'undefined') {
      this.setState(getState())
    }

    // Subscribe to store changes.
    this.props.store.subscribe(() => this.setState(getState()))
  }

  render () {
    const routeMatch = match(this.state.location.href, routes)
    const RouteComponent = routeMatch && routeMatch.handler() || Home
    return (<RouteComponent {...this.state} />)
  }
}
