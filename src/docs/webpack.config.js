'use strict';

var autoprefixer = require('autoprefixer');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var rootFolder = process.cwd();

module.exports = {
    entry: {
        app: ['babel-polyfill', path.join(rootFolder, 'src/docs/index.js')],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(rootFolder, 'docs'),
        publicPath: path.resolve(rootFolder, 'docs'),
    },
    module: {
        loaders: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env'],
                    plugins: [require('babel-plugin-transform-custom-element-classes')],
                    cacheDirectory: true,
                },
            },
        }, {
            test: /\.html$/,
            loader: 'html-loader',
        }, {
            test: /\.s*css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, './node_modules')],
                        },
                    },
                ],
            }),
        }, {
            test: /\.svg$/,
            use: [{
                loader: 'svg-sprite-loader',
                options: {
                    name: 'icon-[name]',
                },
            }],
        }],
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
    ],
    resolve: {
        modules: [__dirname, 'node_modules'],
    },
};
