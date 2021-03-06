var webpack = require('webpack');
var nodeEnvironment = process.env.NODE_ENV;
var autoprefixer = require('autoprefixer');

var config = {
  context: __dirname + '/src',
  entry: './index.js',
  plugins: [  
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify(nodeEnvironment)
    })
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: {
    'angular': 'angular'
  },
  resolve: {
    root: __dirname + '/src'
  },
  jscs: {
    // JSCS errors are displayed by default as warnings.
    // Set `emitErrors` to `true` to display them as errors.
    emitErrors: false,

    // JSCS errors do not interrupt the compilation.
    // Set `failOnHint` to `true` if you want any file with
    // JSCS errors to fail.
    failOnHint: false
  },
  module: {
    preLoaders: [{
      test:    /\.js$/,
      exclude: /node_modules/,
      loader: 'jscs-loader'
    }],
    loaders: [
      {
        test: /\.js$/, 
        exclude: /(node_modules)/, 
        loader: 'babel',  
        query: {
          presets: ['es2015', 'stage-0']
        }       
      },
      {test: /\.s?css$/, loader: 'style!css!sass'},
      {test: /\.html/, exclude: /(node_modules)/, loader: 'html-loader'},
    ]
  },
  postcss: function() {
    return {
      defaults: [autoprefixer]
    }
  }
}

switch (nodeEnvironment) {
  case 'production':
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    
    config.output.filename = 'index.js';
    config.entry ='./index.js';
    config.devtool = 'source-map';
    break;

  case 'development':
    config.devtool = 'source-map';
    config.entry = {index:  './index.js'};
    break;
    
  default: 
    console.warn('Unknown or Undefigned Node Environment. Please refer to package.json for available build commands.');
}

module.exports = config; 
