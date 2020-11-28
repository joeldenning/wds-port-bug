

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    client: {
      // uncommenting this fixes the port, but doing so should be unnecessary,
      // since webpack-dev-server knows which port it is listening on
      // It is undesireable in some situations to hard code the port - preferring
      // to allow findPort to find one for you
      // port: 8080
    }
  }
}