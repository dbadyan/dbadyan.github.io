var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
};