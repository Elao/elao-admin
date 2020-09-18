const meta = require('./package.json');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildConfig = {
  target: 'web',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'elao-admin.js',
    library: 'elao-admin',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  devServer: {
    contentBase: __dirname,
    index: 'index.html',
    port: 8093
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'elao-admin.css',
    }),
  ],
  resolve: {
    alias: {
      '@elao/admin': `${__dirname}/src/`,
    }
  }
};

const demoConfig = {
  target: 'web',
  entry: './src/demo.js',
  output: {
    path: `${__dirname}/demo`,
    filename: 'demo.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'demo.css',
    }),
  ],
  resolve: {
    alias: {
      '@elao/admin': `${__dirname}/src/`,
    }
  },
};

module.exports = [buildConfig, demoConfig];
