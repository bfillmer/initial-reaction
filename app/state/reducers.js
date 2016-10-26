
import { combineReducers } from 'redux'
import { routingReducers } from 'state/routing'

export const reducers = combineReducers({
  routes: routingReducers
})
