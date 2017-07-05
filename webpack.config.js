var path = require('path'),
    webpack = require('webpack');

//Production config
// var output = {
//     filename: 'debug.bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   };

// var plugins = [
//     new webpack.DefinePlugin({
//     'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"',
//   }),
//   ]

// if(process.env.NODE_ENV == 'production'){
//   var uglify = new webpack.optimize.UglifyJsPlugin({
//       compress: { warnings: false }
//     })
//   plugins.push(uglify);
//   output.filename = "bundle.js";
// }

module.exports = {
  entry: {
    dist: './app/index.js',
    site: './app/index.js'
  },
  output: {
    filename: './[name]/tag.js',
    path: path.resolve(__dirname)
  },
  plugins: [
  // new webpack.optimize.UglifyJsPlugin({
  //     compress: { warnings: false }
  //   })
  ],
  watch: true,
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