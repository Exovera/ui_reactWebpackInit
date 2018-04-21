const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Visualizer = require("webpack-visualizer-plugin");

module.exports = {
	mode: "production",
	resolve: {
		modules: [path.resolve("./src"), path.resolve("./node_modules")],
	},
	entry: { main: "./src/index.js" },
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[chunkhash].js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: true },
					},
				],
			},
			{
				test: /\.css$/,
				use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader", // creates style nodes from JS strings
					},
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader", // translates CSS into CommonJS
					},
					{
						loader: "postcss-loader",
						options: {
							plugins() {
								return [require("autoprefixer")];
							},
						},
					},
					{
						loader: "less-loader", // compiles LESS to CSS
					},
				],
			},
			{
				test: /\.(?:png|jpg|svg)$/,
				loader: "url-loader",
				query: {
					// Inline images smaller than 10kb as data URIs
					limit: 10000,
				},
			},
		],
	},
	optimization: {
		splitChunks: {
			automaticNameDelimiter: "-",
			chunks: "initial",
			minSize: 10,
		},
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]), // removes dist/ before each build
		new MiniCssExtractPlugin({
			filename: "style.[chunkhash].css",
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
			// favicon: "./src/assets/images/favicon.ico",
		}),
		// statically copies files to dist/
		new CopyWebpackPlugin([{ from: "src/static/", to: "src/static/" }]),
		new Visualizer(),
	],
};
