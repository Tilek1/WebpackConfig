const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: "./public/index.html",
		filename: "./index.html"
	})]
};

module.exports = config;