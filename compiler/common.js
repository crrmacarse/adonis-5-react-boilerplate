import { join } from 'path'
import DotEnv from 'dotenv-webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export const entry = join(process.cwd(), '/resources/react/index.tsx')

export const output = {
  path: join(process.cwd(), '/public/dist'),
  filename: 'main.bundle.js',
  chunkFilename: '[name].[contenthash].bundle.js',
  publicPath: '/dist/',
}

export const moduleResolver = {
  modules: [
    'node_modules',
    join(process.cwd(), '/resources/react/'),
  ],
  extensions: ['.ts', '.tsx', '.js'],
}

export const rules = [
  {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    enforce: 'pre',
    use: 'eslint-loader',
  },
  {
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader',
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|ico|pdf)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[contentHash].[hash].[ext]',
          outputPath: 'assets',
          publicPath: 'assets',
        },
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65,
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4,
          },
          gifsicle: {
            interlaced: false,
          },
          // the webp option will enable WEBP
          webp: {
            quality: 80,
            enabled: true,
          },
        },
      },
    ],
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  },
]

export const plugins = [
  new DotEnv(),
  new CleanWebpackPlugin(),
]

export const optimization = {
  moduleIds: 'hashed',
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/](react|react-dom|lodash|@material-ui)[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
}
