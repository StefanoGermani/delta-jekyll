const path = require('path');

module.exports = {
    mode: 'production',
    entry: './_scripts/index.js',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'assets', 'js')
    }
};
