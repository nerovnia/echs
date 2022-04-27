const path = require('path');
const VueLoaderPlugin = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './assets/js/vue/app.js',
  output: {
    path: path.resolve("../www/assets/js/vue"),
    publicPath: "assets/vue/js",
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
