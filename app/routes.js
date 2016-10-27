
import { route } from 'redux-routing'

import { Home } from 'screens/Home'
import { Blog } from 'screens/Blog'

// Define our routes.
export const routes = [
  route('/', () => Home),
  route('/blog', () => Blog)
]
