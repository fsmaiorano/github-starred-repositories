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
        ]
    },
}

