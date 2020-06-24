const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "./src/index.js")],
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
        type:'javascript/auto',
        test: /\.json$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "./dist/admin/collections/How-tos/[name].[ext]"
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
