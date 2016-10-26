
import { Home } from 'screens/Home'

import { mapReducers } from 'state/temp'

const assign = Object.assign

const initialState = {
  url: window.location.pathname + window.location.search
}

const reducerMap = {
  'CHANGED_ROUTE': (state, action) => assign({}, state, {
    href: action.href
  })
}

export const routingReducers = mapReducers(initialState, reducerMap)

// Map routes to the correct higher order components.
// @NOTE: '*' must be last. Route matches against first match found.
export const routeMap = {
  '*': () => Home
}

// import { store } from 'state/store'

// Keep our browser in-sync with latest url.
// if (this.props.url !== window.location.pathname + window.location.search) {
//   window.history.pushState(null, null, this.props.url)
// }

// const url = window.location.pathname + window.location.search
//
// window.onpopstate = () => store.dispatch({
//   type: 'UPDATE_URL',
//   payload: {
//     url: url
//   }
// })

// var viewState = {};
//
// // get url on app load
// viewState.url = window.location.pathname + window.location.search;
//
// // get url on back/forward
// window.onpopstate = function(e) {
//   viewState.url = window.location.pathname + window.location.search;
// };
