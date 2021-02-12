const path = require('path');
module.exports = {
    webpack: {
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            Pages: path.resolve(__dirname, 'src/pages'),
            Api: path.resolve(__dirname, 'src/api')
        }
    }
};
