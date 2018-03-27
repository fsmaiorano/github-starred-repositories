module.exports = {
    entry: [
        '@babel/polyfill',
        './src/app.js',
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
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                }]
            }
        ]
    },
}

