var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

require("dotenv").config();

let { mode } = process.env;

const VENDOR_LIBS = [];

module.exports = {
    mode,
    devtool: "source-map",
    entry: {
        bundle: {
            import: "./src/index.ts",
            // dependOn: "vendor",
        },
        // vendor: VENDOR_LIBS,
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[chunkhash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: path.join(__dirname, "node_modules"),
            },

            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new MiniCssExtractPlugin({ filename: "style.[chunkhash].css" }),
    ],
    optimization: {
        minimizer: [new TerserPlugin(), new HtmlMinimizerPlugin()],
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
            watch: true,
        },
        compress: true,
        port: 9000,
        liveReload: true,
        hot: false,
        // open: true,
    },
};
