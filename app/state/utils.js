export const mapReducers = (initialState, reducerMap) => (state = initialState, action) => {
  const reducer = reducerMap[action.type]
  if (typeof reducer === 'undefined') return state
  return reducer(state, action)
}
