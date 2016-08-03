
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import { createMiddleware, History } from 'redux-routing';

import * as reducers from 'reducers';

const history = createMiddleware(History);
const logger = createLogger();

const createReducers = (initialState, reducerMap) => (state = initialState, action) => {
  const reducer = reducerMap[action.type];
  if (typeof reducer === 'undefined') return state;
  return reducer(state, action);
};

const initialState = {
  href: document.location.pathname,
  text: {
    greeting: 'Welcome to the website, friend!',
    blogTitle: 'This is the blog!',
  },
};

const reducerMap = {
  '@@redux-routing/navigate': reducers.routeReducer,
  '@@redux-routing/replace': reducers.routeReducer,
};

const applyReducers = createReducers(initialState, reducerMap);

export const store = createStore(applyReducers, applyMiddleware(
  history,
  logger
));
