import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { DefinePlugin } from 'webpack'
import CompressionPlugin from 'compression-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import {
  entry, output, moduleResolver,
  rules, plugins, optimization,
} from './common'

export default {
  mode: 'production',
  devtool: 'source-map',
  entry,
  output,
  resolve: moduleResolver,
  module: {
    rules: [
      ...rules,
      {
        test: /\.(ts|js)x?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              ['react-remove-properties', { properties: ['data-test'] }],
            ],
          },
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    ...plugins,
    new HtmlWebpackPlugin({
      template: `!!raw-loader!${join(process.cwd(), '/compiler/templates/main.edge')}`,
      filename: join(process.cwd(), '/resources/views/layouts/main.edge'),
      inject: 'body',
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[contentHash].[hash].css',
      chunkFilename: '[contentHash].[hash].css',
    }),
  ],
  optimization: {
    ...optimization,
    minimizer: [new TerserPlugin({
      terserOptions: {
        safari10: true,
      },
    })],
  },
}
