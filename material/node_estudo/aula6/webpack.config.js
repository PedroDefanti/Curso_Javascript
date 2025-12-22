const path = require('path');

module.exports = {
    mode: 'production',
    entry: './frontend/main.js',  // ✅ CORRIGIDO
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,  // ✅ CORRIGIDO: node_modules (com "s")
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']  // ✅ CORRIGIDO: @babel/preset-env
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map'
};