const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
	resolve: {
		modules: [path.resolve("./src"), path.resolve("./node_modules")],
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
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader", // creates style nodes from JS strings
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
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
			// favicon: "./src/assets/images/favicon.ico",
		}),
		// statically copies files to dist/
		new CopyWebpackPlugin([{ from: "src/static/", to: "src/static/" }]),
	],
};
