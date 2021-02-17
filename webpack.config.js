const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
        include: [path.resolve(__dirname, 'src')],
      }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['index']
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/model', to: 'model' },
        { from: 'live2dcubismcore*', to: 'lib', context: 'src/lib/live2d/Core' },
      ],
    }),
    new WriteFilePlugin()
  ],
  devServer: {
    contentBase: 'dist',
    hot: false
  },
  performance: { hints: false }
}