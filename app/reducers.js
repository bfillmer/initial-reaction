
const assign = Object.assign;

// Update the state with the current route.
export const routeReducer = (state, action) => assign({}, state, {
  href: action.href,
});
