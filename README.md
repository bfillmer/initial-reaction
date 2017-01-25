
# Initial Reaction
## Basic React Boilerplate

React, Redux, Simple Routing, and Sagas. Handles most use cases for a small or mid-sized web application.

## Quick Start

**Note**: Requires `yarn` (https://yarnpkg.com/en/docs/install) installed globally.

```shell
git clone https://github.com/bfillmer/initial-reaction.git
cd initial-reaction
yarn
yarn run dev # Point browser to: http://localhost:8080
```

## Available Commands

```shell
yarn # Installs npm dependencies.
yarn upgrade # Clears node_modules and reinstalls.
yarn test # tape test against any *.test.js file.
yarn run lint # standard --fix
yarn run dev # Dev server running at: http://localhost:8080
yarn run build # Minimized build in dist/
```

## Change Log
* Streamlined connecting to Redux, gave in to using `<Provider>` and context.
* Cleaned up the build process, removed unnecessary Immutable library.
* Added tape (https://github.com/substack/tape) and testing template.
* Using all of redux-routing (https://github.com/callum/redux-routing) to simplify routing.
* Swapped to tachyons (http://tachyons.io/) and away from SASS in general.
* Swapping over to Yarn (https://yarnpkg.com).
* Updated the `webpack.config.babel.js` to be a little DRY-er and better organized.
* Swapped to Javascript Standard Style (http://standardjs.com/) from custom eslint rules.

## Development Notes

* Any paths leveraged within the codebase are relative to the `app/` directory.
* Any additional node modules needed by the application should be added to the `vendors` array in `webpack.config.babel.js` so they are concatenated into `vendors.js` on build.
