
import { route } from 'redux-routing'

import { Home } from 'views/Home'
import { Blog } from 'views/Blog'

// Define our routes.
export const routes = [
  route('/', () => Home),
  route('/blog', () => Blog)
]
