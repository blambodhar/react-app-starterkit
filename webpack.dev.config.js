import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import baseConfig from './webpack.base.config';


export default merge(baseConfig, {
  /**!=====================================================================
   * Step 1: Source Maps
   * devtool: 'cheap-module-source-map' | 'source-map'
   * More info:
   * https://webpack.github.io/docs/build-performance.html#sourcemaps and
   * https://webpack.github.io/docs/configuration.html#devtool
   **=======================================================================*/
  devtool: 'cheap-module-eval-source-map',

  /**!======================================================================
   * Step 2: Entry files
   * entry: [],
   **=======================================================================*/
  entry: [
    'eventsource-polyfill',    /*--- necessary for hot reloading with IE ---*/
    'webpack-hot-middleware/client',
    './src/index'
  ],

  /**!=====================================================================
   * Step 3: Output files
   * output: {},
   **======================================================================*/
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  /**!=====================================================================
   * Step 4: DevServer content base files
   * devServer: {},
   **======================================================================*/
  devServer: {
    contentBase: './src'
  },

  /**!=====================================================================
   * Step 5: Plugins - hot reloading, emit-no-errors etc.
   * plugins: [],
   **=====================================================================*/
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  /**!=====================================================================
   * Step 6: Modules - style-loader, css-loaders, sass-loaders, etc.
   * plugins: [],
   **=====================================================================*/
  module: {
    rules: [
      {test: /(\.css)$/, use: ['style-loader', { loader: 'css-loader', options: {sourcemap: true} }]},
      {test: /\.scss$/, use: ['style-loader', { loader: 'css-loader', options: {sourcemap: true} }, { loader: 'sass-loader', options: {sourcemap: true} } ]},
    ]
  }

});
