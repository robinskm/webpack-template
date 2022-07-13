const host = 'webpack-template.local'; // vhost URL

const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [{
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './assets'),
    filename: './js/index.min.js',
  },
  module: {
    rules: [
      {
      test: /\.m?js$/,
      exclude: '/node_modules/',
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      },{
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: "css/index.min.css",
    }),
    new BrowserSyncPlugin({
      host: host,
      port: 3000,
      proxy: 'https://' + host,
      // Open browser on start
      open: true,
      https: true,
      reload:false
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: {
                removeAll: true
              },
            },
          ],
        },
      }),
    ],
  },
  devtool: 'source-map',
  watch: true
}];