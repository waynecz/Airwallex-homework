module.exports = {
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        includes: ['node_modules']
      }
    }
  }
}
