const meta = require('./package.json');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
];

const alias =  {
  '@elao/admin': `${__dirname}/`,
};

const plugins = filename => [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({ filename }),
];

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return {
      target: 'web',
      entry: './src/demo.js',
      output: {
        path: `${__dirname}/demo/build`,
        filename: 'demo.js',
      },
      module: { rules, },
      plugins: plugins('demo.css'),
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
    entry: './src/index.js',
    output: {
      path: `${__dirname}/dist`,
      filename: 'elao-admin.js',
      library: 'elaoAdmin',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    module: { rules },
    plugins: plugins('elao-admin.css'),
    resolve: { alias },
  };
};
