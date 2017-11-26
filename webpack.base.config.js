import webpack from 'webpack';
import path from 'path';

export default {
  target: 'web',
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  module: {
    rules: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=5000'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.(woff|woff2)$/, options: {prefix: 'font/', limit: 5000}, loader: 'url-loader'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, options: {limit: 10000, mimetype: 'application/octet-stream'}, loader: 'url-loader'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, options: {limit: 10000, mimetype: 'image/svg+xml' }, loader: 'url-loader'}
    ]
  }
};
