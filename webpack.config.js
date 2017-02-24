var webpack = require("webpack");

module.exports = {
  devtool: "eval",
  entry: ["./src/react-automatic-width.jsx"],
  output: {
    path: __dirname + "/dist/",
    filename: "react-automatic-width.js",
    library: "react-automatic-width",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.BannerPlugin(require("./banner")),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        eslint: {
          formatter: require("eslint-formatter-pretty")
        }
      }
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: {
    react: "react"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
