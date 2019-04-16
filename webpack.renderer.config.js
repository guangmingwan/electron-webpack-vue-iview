'use strict'
const path = require('path')
process.env.BABEL_ENV = 'renderer'
const HtmlWebpackPlugin = require('html-webpack-plugin')
let rendererConfig = {
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.ejs',
            appModules: process.env.NODE_ENV !== 'production'
              ? path.resolve(__dirname, 'app/node_modules')
              : false
          }),
    ]
}
module.exports = rendererConfig