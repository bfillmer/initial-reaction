
import { Home } from 'screens/Home';
import { Blog } from 'screens/Blog';

// Map routes to the correct higher order components.
// @NOTE: '*' must be last. Route matches against first match found.
export const routeMap = {
  '/blog': () => Blog,
  '*': () => Home,
};
