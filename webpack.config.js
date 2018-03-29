
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
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
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
              },
              {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                include: [Path.join(__dirname, "src/shared/assets")],
                loader: "file-loader?name=assets/[name].[ext]"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CopyWebpackPlugin([
            { from: 'src/shared/assets', to: 'assets' }
        ])
    ],
    devtool: '#inline-source-map'
}

