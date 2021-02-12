const plugins = [
    [
        'babel-plugin-import',
        {
            'libraryName': 'antd',
            // Use "'libraryDirectory': ''," if your bundler does not support ES modules
            'style': 'true'
        }
    ]
];

module.exports = { plugins };