const path = require('path');
// inject script and css into HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
// generates css file respective to its js and loads paralelly to save time
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack'); // env vars and platform specific vars

module.exports = {
    entry: './src/index.tsx', // entry point
    output: { // how and where webpack output bundle files
        path: path.resolve(__dirname, 'dist'), // build file directory {absolute path}
        filename: '[name].[contenthash].js', // build file - contenthashing
        clean: true, // cleans the output directory
        publicPath: '/' // where all the assets and js,css are loaded from prepend
    },
    devServer: { // how and where webpack load static assets like images,files etc
        static:{
            directory:path.join(__dirname, 'dist'), // any static assets to serve{removes trailing / and  .. and combines path}
        },
        historyApiFallback: true,//for SPAs hard refresh->index.html->react-router resp
        hot: true,//hot reload
        port: 3000//port
    },
    module: { // how webpack process different modules
        rules: [
            { // for typescript
                test: /\.(ts|tsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }, { // for css caches
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }, { // for scss
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: { // what files webpack should condider bundling
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [ // different plugins for HTML to inject scripts and CSS separation and caching and env variables handling
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin(),
        new DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0, //  Minimum size for a chunk to be generated.
            minChunks: 2 //Module must be shared at least between 2 chunks.
        }
    }
}