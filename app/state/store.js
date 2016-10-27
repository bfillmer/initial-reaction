
import { createStore, applyMiddleware, compose } from 'redux'
import { createMiddleware, History } from 'redux-routing'
import createSagaMiddleware from 'redux-saga'

import { reducers } from 'state/reducers'

// Define middleware.
const historyMiddleware = createMiddleware(History)
const sagaMiddleware = createSagaMiddleware()

// Use Redux DevTools Extension if available and not in production.
const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// If we aren't in production and we have redux devtools let's add that as middleware.
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(
    historyMiddleware,
    sagaMiddleware
  ))
)
