var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        './src/react-automatic-width.jsx'
    ],
    output: {
        path: __dirname + '/dist/',
        filename: 'react-automatic-width.js',
        library: 'react-automatic-width',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.BannerPlugin(require('./banner'))
        // new webpack.optimize.UglifyJsPlugin()
    ],
    externals: {
        'React': 'react'
    },
    resolve: {
        extensions: ['', '.jsx']
    },
    eslint: {
        configFile: '.eslintrc'
    },
    module: {
        preLoaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'eslint' },
        ],
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel' },
        ]
    }
};