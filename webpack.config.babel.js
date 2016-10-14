
import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Map } from 'immutable'

const app = path.resolve(__dirname, 'app')
const nodeModules = path.resolve(__dirname, 'node_modules')

// Vendors for concatenating into the vendors.js file.
const vendors = [
  'classnames',
  'enroute',
  'react',
  'react-dom',
  'redux',
  'redux-logger',
  'redux-routing'
]

const configParts = {
  // SHARED ACROSS ALL WEBPACK CONFIGS
  global: Map({
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
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
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
    },
    plugins: [
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
      // Seperate out vendor libraries into a separate file.
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

      // Reference: https://www.npmjs.com/package/html-webpack-plugin
      // Create our HTML on the fly.
      new HtmlWebpackPlugin({
        title: 'React Boilerplate'
      })
    ]
  }),
  // USED ONLY BY PRODUCTION BUILD
  build: Map({
    devtool: 'cheap-module-source-map',
    publicPath: './',
    plugins: [
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
  }),
  // USED ONLY IN DEVELOPMENT
  dev: Map({
    devTool: 'eval',
    publicPath: 'http://localhost:8080/',
    devServer: {
      contentBase: './dist',
      stats: {
        modules: false,
        cached: false
      }
    }
  })
}

// Return the correct config for webpack. Fails gracefully to a production build if
// we are not running the development server.
const configFactory = (parts) => {
  // Using Immutable lib for simple recursive merging, primarily thanks to
  // plugins being a nested array.
  return process.env.npm_lifecycle_event === 'dev'
    ? parts.global.merge(parts.dev).toJS()
    : parts.global.merge(parts.build).toJS()
}

// Get our config.
const config = configFactory(configParts)

module.exports = config
