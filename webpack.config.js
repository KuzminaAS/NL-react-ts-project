const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Режим сборки development или production
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let config = {
       // Директория с исходным кодом приложения
    context: path.join(__dirname, '/src'),
    entry: 'index.tsx',
    module: {
        rules: [
        {
            test: /\.(ts|tsx|jsx|js)?$/i,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        // {
        //   test: /.(ts|tsx)$/,
        //   exclude: /node_modules/,
        //   loader: 'babel-loader'
        // },
        // {
        //   test: /\.svg$/,
        //   type: 'asset',
        // },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
          { loader: process.env.NODE_ENV === 'development' ? "style-loader" : MiniCssExtractPlugin.loader, options: {} },
          { loader: 'css-loader', options: { url: true, import: true, sourceMap: true,} },
          {loader: 'sass-loader',
            options: {
              sourceMap: true,
              // additionalData: `@import "src/styles/base.scss";`,
          }},
        ],
        }
      ],
    },
    resolve: {
         // Расширения по умолчанию, если не указаны в import
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss'],
         // Где искать файлы подключаемых модулей, в том числе главный index.js
        modules: ['./', 'node_modules'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
          // Очистить ./dist от предыдущей сборки
        clean: true,
    },
  plugins: [
    new MiniCssExtractPlugin(),
    // Создание dist/index.html с подключенной сборкой
    new HtmlWebPackPlugin({
      template: './index.html',
    })
    ],
    stats: {
    colors: true,
    hash: false,
    version: false,
    timings: false,
    assets: true,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: false,
  },
}
if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map';
  config.devServer = {
    static: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
    open: true,
  };
}
module.exports = config;

  