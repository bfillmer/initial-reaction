
import React from 'react'
import { connect } from 'react-redux'

export const assign = Object.assign

/**
 * Map reducers to their action types. Alternative to using a switch statement,
 * still returns the default state if nothing matches.
 * @param  {object} initialState Initial state for this reducer tree.
 * @param  {object} reducerMap   Map of action types to reducer functions.
 * @return {object}              New state after reducer is run.
 */
export const mapReducers = (initialState, reducerMap) => (state = initialState, action) => {
  const reducer = reducerMap[action.type]
  if (typeof reducer === 'undefined') return state
  return reducer(state, action)
}

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
