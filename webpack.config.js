const path = require('path');

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: "./src/blizard.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "blizard.min.js",
    // library: "sl",
    libraryTarget: 'window',
    globalObject: 'this'
  },
}