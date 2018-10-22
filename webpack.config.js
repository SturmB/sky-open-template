const path = require('path');

module.exports = {
  mode: "development",
  target: "node-webkit",
  entry: {
    'dom_html/src/js/main': './dom_html/src/js/main.ts'
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.join(__dirname, './dom_html/src/js')],
        loader: 'ts-loader',
        options: {
          instance: 'dom_html/src/js/main',
          configFile: path.join(path.join(__dirname, './dom_html'), 'tsconfig.json'),
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

console.log(module.exports.module.rules);