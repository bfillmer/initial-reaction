
import React from 'react'
import { connect } from 'react-redux'

export const assign = Object.assign

/**
 * Connect a given Container Component to the store with or without
 * mapStateToProps or mapDispatchToProps.
 * @param  {object} store            Redux store
 * @param  {node}   WrappedComponent React Container Component
 * @param  {object} args             Destructured pass along of map functions.
 * @return {node}                    React Component
 */
export const connectWithStore = (store, WrappedComponent, ...args) => {
  var ConnectedWrappedComponent = connect(...args)(WrappedComponent)
  return function (props) {
    return <ConnectedWrappedComponent {...props} store={store} />
  }
}
