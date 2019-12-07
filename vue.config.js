const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "./docs"),
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
  ? '/jjal'
  : '/'
};