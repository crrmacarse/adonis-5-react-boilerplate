import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {
  entry, output, moduleResolver,
  rules, plugins, optimization,
} from './common'

export default {
  mode: 'development',
  devtool: 'source-map',
  entry,
  output,
  resolve: moduleResolver,
  module: {
    rules: [
      ...rules,
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
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
  ],
  optimization,
}
