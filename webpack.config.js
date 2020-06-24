const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "./src/index.js"),  path.join(__dirname, "./dist/admin/collections") ],
  mode:"production",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath:'/'
  },
  optimization: {
    minimize:true,
    noEmitOnErrors: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
       extensions: [".js", ".jsx"]
   },
   plugins: [
     new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  target: 'node',
  node: {
    fs: 'empty',
    __dirname: false,
  }
};
