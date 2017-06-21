module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
            }
        ]
    },
}