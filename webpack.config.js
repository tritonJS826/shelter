const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === !isDev;
// cool theme bundle-analyze-plugin

const optimization = () => {
  const config = {};

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin(),
    ];
    config.splitChunks = {
      chunks: 'all',
    };
  }
  return config;
};

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  optimization: optimization(),
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'eslint-loader',
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader'],
      }),
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      }),
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
          },
        },
      ],
    },
    {
      test: /\.(ttf|woff|woff2|eot)$/,
      use: ['file-loader'],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'movieSearch',
      favicon: './favicon.ico',
      minify: {
        collapseWhitespace: isProd,
      },
      myPageHeader: 'movieSearch',
      template: './src/index.html',
    }),
    new ExtractTextPlugin({
      filename: '[name].style.[hash].css',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'favicon.ico'),
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
  ],
  devServer: {
    contentBase: './src',
    port: 7700,
    hot: isDev,
  },
};
