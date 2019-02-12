'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ],
    
    output: {
        path: path.join(__dirname, 'dist'),//diretório fisico
        filename: 'bundle.js',
        publicPath: '/static/'//diretório em memória
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [{
            test: /\.js$/, //find js files
            exclude: /node_modules/, //except node_modules folder
            include: /src/,
            loader: 'babel-loader'
        }]
    }
}