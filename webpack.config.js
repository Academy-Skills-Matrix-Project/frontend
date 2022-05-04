const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  './src/index.js',
    
    output:{
        path: path.resolve(__dirname + '/public'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.js$/,  use: ['babel-loader']},
            {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    Plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html '
        })
    ]
};