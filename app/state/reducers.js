
import { combineReducers } from 'redux'
const { reducer: location } = require('redux-routing')

export const reducers = combineReducers({
  location
})
