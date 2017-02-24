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
        new webpack.BannerPlugin(require('./banner')),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify("production")
          }
        }),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    eslint: {
        formatter: require('eslint-formatter-pretty')
    },
    externals: {
        'react': 'react'
    },
    module: {
        preLoaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'eslint'
        }],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
};
