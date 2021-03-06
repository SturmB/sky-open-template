const path = require('path');

module.exports = {
  mode: "development",
  target: "node-webkit",
  entry: {
    'js/main': './js/main.ts'
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.join(__dirname, './js')],
        loader: 'ts-loader',
        options: {
          instance: 'js/main',
          configFile: path.join(path.join(__dirname, './js'), 'tsconfig.json'),
        },
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
