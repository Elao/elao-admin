const meta = require('./package.json');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const rules = [
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
      {
        loader: MiniCssExtractPlugin.loader,
        options: { publicPath: '' },
      },
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
];

const alias =  {
  '@elao/admin': `${__dirname}/`,
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return {
      target: 'web',
      mode: 'development',
      entry: './src/demo.js',
      output: {
        path: `${__dirname}/demo/build`,
        filename: 'demo.js',
      },
      module: { rules, },
      plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: 'demo.css' }),
        new CopyPlugin({ patterns: [{ from: "assets/images/*", to: `${__dirname}/demo/build` }] }),
      ],
      resolve: { alias },
      devServer: {
        contentBase: path.join(__dirname, 'demo'),
        publicPath: '/build/',
        port: 8093
      },
    };
  }

  return {
    target: 'web',
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: `${__dirname}/dist`,
      filename: 'elao-admin.js',
      library: 'elaoAdmin',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    module: { rules },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: 'elao-admin.css' }),
      new CopyPlugin({ patterns: [{ from: "assets/images/*", to: `${__dirname}/dist` }] }),
    ],
    resolve: { alias },
  };
};
