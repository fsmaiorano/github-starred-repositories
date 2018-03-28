
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: [
        '@babel/polyfill',
        './index.js',
    ],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        contentBase: __dirname + '/public',
        port: 3000,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // {
            //     test: /\.scss$/,
            //     use: [{
            //         loader: "style-loader"
            //     }, {
            //         loader: "css-loader"
            //     }, {
            //         loader: "sass-loader",
            //     }]
            // },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
    ]
}

