const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    'dom_html/src/index': './dom_html/src/index.ts',
    'dom_app/src/app': './dom_app/src/app.ts'
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.join(__dirname, './dom_html/src')],
        loader: 'ts-loader',
        options: {
          instance: 'dom_html/src/index',
          configFile: path.join(path.join(__dirname, './dom_html'), 'tsconfig.json'),
        },
      },
      {
        test: /\.tsx?$/,
        include: [path.join(__dirname, './dom_app/src')],
        loader: 'ts-loader',
        options: {
          instance: 'dom_app/src/app',
          configFile: path.join(path.join(__dirname, './dom_app'), 'tsconfig.json'),
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
