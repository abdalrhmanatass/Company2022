const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/js/index.js",

  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    //compress: true,
    port: 9001,
    devMiddleware: {
      writeToDisk: true,
    },
    hot: false,
    liveReload: true,
    open: true,
  },

  output: {
    publicPath: "/img",
    path: path.resolve(__dirname, "build"),
    filename: "js/bundle.js",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/projects.html",
      filename: "projects.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/project-details.html",
      filename: "project-details.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/project-details-course.html",
      filename: "project-details-course.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/blog.html",
      filename: "blog.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/blog-details.html",
      filename: "blog-details.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/add-blog.html",
      filename: "add-blog.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "about.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "contact.html",
    }),

    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],

  module: {
    rules: [
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      {
        test: /\.(sass|css|scss)$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/img",
            },
          },
        ],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/fonts",
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
