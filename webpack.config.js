module.exports = {
	entry:'./src/index.js',
	devtool: "none",
  mode: "development",
  output: {
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  externals: [
    {
      react: "React",
      "react-dom": "ReactDOM",
    },
  ],
}