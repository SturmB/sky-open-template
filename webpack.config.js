const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    'client/js/bundle': './client/js/index.ts',
    'host/bundle': './host/index.ts'
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
  }
};
