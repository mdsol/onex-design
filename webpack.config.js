const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resourceQuery: { not: [/raw/] },
                use: ['babel-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: [/\.styles.scss$/, /node_modules/],
                resourceQuery: { not: [/raw/] },
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.styles.scss$/,
                exclude: /node_modules/,
                resourceQuery: { not: [/raw/] },
                use: [
                    'sass-to-string',
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                resourceQuery: /raw/,
                type: 'asset/source',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        fallback: { path: false },
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
        hot: true,
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            template: path.join('./src', 'index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};
