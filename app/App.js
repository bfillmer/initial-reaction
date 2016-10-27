
import React, { Component } from 'react'
import { match } from 'redux-routing'

// Failsafe for routes that don't match. 404.
import { Home } from 'views/Home'

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
    // Match current route.
    const routeMatch = match(this.state.location.href, routes)

    // Get correct component or default to Home.
    const RouteComponent = routeMatch && routeMatch.handler() || Home

    // If our route has params we'll pass that as props to the component as well.
    const props = routeMatch && routeMatch.params
      ? Object.assign({}, this.state, routeMatch.params)
      : this.state

    return (<RouteComponent {...props} />)
  }
}
