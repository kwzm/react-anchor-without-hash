module.exports = {
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [/node_modules/, /dist/],
        use: ['babel-loader']
      }, {
        test: /.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ] 
      }
    ]
  }
}