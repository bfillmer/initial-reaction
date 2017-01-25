
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const app = path.resolve(__dirname, 'app')
const nodeModules = path.resolve(__dirname, 'node_modules')

// Vendors for concatenating into the vendors.js file.
const vendors = [
  'classnames',
  'react',
  'react-dom',
  'react-redux',
  'redux',
  'redux-routing',
  'redux-saga'
]

// SHARED ACROSS ALL WEBPACK CONFIGS
const globalConfig = {
  resolve: {
    root: app,
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
  entry: {
    app: path.resolve(app, 'index.js'),
    vendors
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js||jsx)$/,
        loaders: ['babel-loader'],
        exclude: nodeModules
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      }
    ]
  }
}

const globalPlugins = [
  // Reference: http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
  // Seperate out vendor libraries into a separate file.
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

  // Reference: https://www.npmjs.com/package/html-webpack-plugin
  // Create our HTML on the fly.
  new HtmlWebpackPlugin({
    template: 'app/index.tpl.html',
    filename: 'index.html'
  })
]

// USED ONLY IN DEVELOPMENT
const devConfig = {
  devTool: 'eval',
  publicPath: 'http://localhost:8080/',
  devServer: {
    historyApiFallback: true,
    stats: {
      modules: false,
      cached: false
    }
  }
}

// USED ONLY BY PRODUCTION BUILD
const buildConfig = {
  devtool: 'cheap-module-source-map',
  publicPath: '/'
}

const buildPlugins = [
  // Setting NODE_ENV to production causes React to remove PropType checking as well
  // as extra code related to debug messaging.
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
  // Only emit files when there are no errors
  new webpack.NoErrorsPlugin(),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
  // Dedupe modules in the output
  new webpack.optimize.DedupePlugin(),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  // Minify all javascript, switch loaders to minimizing mode
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true
    },
    comments: false,
    sourceMap: false
  })
]

// Return the correct config for webpack. Fails gracefully to a production build if
// we are not running the development server.
const configFactory = (type = 'build') => {
  switch (type) {
    case 'dev':
      return Object.assign(globalConfig, devConfig, {
        plugins: globalPlugins
      })
    default:
      return Object.assign(globalConfig, buildConfig, {
        plugins: globalPlugins.concat(buildPlugins)
      })
  }
}

// Get our config.
const config = configFactory(process.env.npm_lifecycle_event)

module.exports = config
