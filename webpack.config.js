
module.exports = {
    rules: [
        {
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
        },
    ],

}