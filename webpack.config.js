var path = require('path'),
    webpack = require('webpack');

console.log("Env: ", process.env.NODE_ENV);

//Production config
var output = {
    filename: 'debug.bundle.js',
    path: path.resolve(__dirname, 'dist')
  };

var plugins = [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"',
  }),
  ]

if(process.env.NODE_ENV == 'production'){
  var uglify = new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  plugins.push(uglify);
  output.filename = "bundle.js";
}

module.exports = {
  entry: './app/index.js',
  output,
  plugins,
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]],
          plugins: ['syntax-dynamic-import']
        }
      }]
    }]
  }
};
