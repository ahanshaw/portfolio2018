module.exports = {
    presets: [
        '@vue/app'
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader?limit=10000000"
            },
        ]
    }
}
