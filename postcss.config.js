module.exports = {
    "modules": true,
    "map": true,
    "plugins": {  
        "autoprefixer": {
            "grid": true
        },
        "postcss-modules": {
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        }
    }
};