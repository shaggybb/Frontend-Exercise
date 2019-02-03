// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js',
        filename: '[name].[hash].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /.test.js$/],
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist', {
            exclude: '.gitkeep'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new WebpackMd5Hash(),
        new StyleLintPlugin({
            configFile: './stylelint.config.js',
            files: './src/scss/*.scss',
            syntax: 'scss'
        })
    ]
};