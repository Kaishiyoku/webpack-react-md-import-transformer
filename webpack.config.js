const webpack = require('webpack');
const {resolve} = require('path');
const pkg = require('./package.json');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const ENV = process.env.NODE_ENV;
const libraryName = pkg.name;

const plugins = ENV === 'production' ? [new UglifyJsPlugin()] : [];
const filename = ENV === 'production' ? `${libraryName}.min.js` : `${libraryName}.js`;

console.info("==============================");
console.info(`ENV: ${ENV}`);
console.info("==============================");

module.exports = {
    entry: ['./index.js'],
    output: {
        path: resolve(__dirname, 'lib'),
        filename,
        library: 'reactMdTransformer',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.webpack.js', '.js'],
    },
    context: resolve(__dirname, 'src'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ],
    },
    plugins
};