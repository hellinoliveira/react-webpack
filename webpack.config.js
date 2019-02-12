'use strict'

const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),//diretório fisico
        filename: 'bundle.js',
        publicPath: '/static/'//diretório em memória
    },

    module: {
        loaders: [{
            test: /\.js$/, //find js files
            exclude: /node_modules/, //except node_modules folder
            include: /src/,
            loader: 'babel'
        }]
    }
}