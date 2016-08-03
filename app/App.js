
import React, { Component, PropTypes } from 'react';
import route from 'enroute';

import { routeMap } from 'routes';

// Primary container component, sets state to the contents of the Socrates
// store on mount and when the store changes.
export class App extends Component {
  componentWillMount () {
    const getState = this.props.store.getState;

    // Map redux dispatch as state.action.
    this.setState({
      action: this.props.store.dispatch,
    });

    // Map store data to state. Don't assume there is a boot state.
    if (typeof getState() !== 'undefined') {
      this.setState(getState());
    }

    // Subscribe to store changes.
    this.props.store.subscribe(() => this.setState(getState()));
  }

  render () {
    const RouteComponent = route(routeMap)(this.state.href);
    return (<RouteComponent { ...this.state } />);
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};
