const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // {
            //     test: /\.html$/i,
            //     loader: 'html-loader',
            //     include: /src/,
            //     exclude: /node_modules/,
            // },
            // {
            //     test: /\.css$/i,
            //     use: ['css-loader'],
            //     exclude: /node_modules/,
            // },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //         },
            //     ],
            // },
            {
                test: /\.json$/,
                loader: 'json-loader',
                type: 'javascript/auto'
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        port: 80,
        inline: true,
        hot: true,
        host: "localhost",
        // historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
    mode: 'none',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@libs': path.resolve(__dirname, 'src/libs'),
            '@src': path.resolve(__dirname, 'src'),
        },
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
};