const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const jsLoaders = () => {
  const loaders = ['babel-loader'];

  if (isProd) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

module.exports = {
  target: isDev ? 'web' : 'browserslist',
  mode,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@scss': path.resolve(__dirname, 'src/app/scss'),
      '@components': path.resolve(__dirname, 'src/app/components/'),
      '@hooks': path.resolve(__dirname, 'src/app/hooks/'),
      '@pages': path.resolve(__dirname, 'src/app/pages/'),
      '@store': path.resolve(__dirname, 'src/app/store/'),
      '@containers': path.resolve(__dirname, 'src/app/containers/'),
      '@utils': path.resolve(__dirname, 'src/app/utils/'),
      '@locales': path.resolve(__dirname, 'src/locales/'),
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isDev ? 'main.js' : 'main.[contenthash:8].js',
    clean: true,
  },
  devServer: {
    open: true,
    compress: true,
    port: 5000,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'assets'),
    watchContentBase: isDev,
  },
  devtool: isDev ? 'source-map' : undefined,
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDev ? 'main.css' : 'main.[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      title: 'My Pokedex App',
      template: path.join(__dirname, 'src/template/index.pug'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],
  optimization: {
    minimize: isProd,
    minimizer: [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
