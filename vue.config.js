module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: "vue-template-loader",
          exclude: /index.html/
        }
      ]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/gyuha/jjal'
  : '/'
};