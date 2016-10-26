
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
yarn test # Runs linting (@TODO and tape tests).
yarn run dev # Dev server running at: http://localhost:8080
yarn run build # Minimized build in dist/
```

## Change Log
* Swapping over to Yarn (https://yarnpkg.com). Leaving script commands as npm based for now.
* Updated the `webpack.config.babel.js` to be a little DRY-er and better organized.
* Swapped to Javascript Standard Style (http://standardjs.com/) from custom eslint rules.

## Development Notes

* Any paths leveraged within the codebase are relative to the `app/` directory.
* Any additional node modules needed by the application should be added to the `vendors` array in `webpack.config.babel.js` so they are concatenated into `vendors.js` on build.
* Assets leveraged within the `scss` files are relative to `appearance/scss/main.scss`. Thus most of the time to access anything within `appearance/img` you would use the following: `url('../img/an-image.png')`.

## Credits

* David Huff [davidryanhuff@gmail.com](davidryanhuff@gmail.com): For the Atomic CSS structure, and generally being a badass.
