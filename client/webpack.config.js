const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
const WorkboxPlugin = require('workbox-webpack-plugin');

// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        title: 'Jate',

      }),

      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'sw.js',
      }),

      new WebpackPwaManifest({
        name: 'Jate',
        short_name: 'Jate',
        description: 'A simple text editor',
        background_color: '#ffffff',
        theme_color: '#2196f3',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512]
          },
        ],
      }),

      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
      }),
    ],

    module: {
      rules: [
        
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
