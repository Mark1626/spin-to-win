const path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, './'),
  entry: './app/script.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js','.scss'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
					'style-loader',
					'css-loader',
					'sass-loader'
        ]
      }
    ],
  },
};
