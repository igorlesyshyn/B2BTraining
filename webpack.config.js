const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		app: './frontend/assets/js/index.js'
	},
	output: {
		path: path.resolve(__dirname, './force-app/main/default/staticresources/Cutom_Theme/js'),
		filename: 'main.js'
	},
	mode: 'development',
	watch: true,
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['babel-preset-env']
				}
			}
		},
		{
			test: /\.s[ac]ss$/i,
			exclude: path.resolve(__dirname, './node_modules'),
			use: [
				{
					loader: MiniCssExtractPlugin.loader,
					options: {
						publicPath: '../',
						hmr: process.env.NODE_ENV === 'development',
					},
				},
				'css-loader',
				'sass-loader'
			],
		}
		]
	},

	plugins: [
        new MiniCssExtractPlugin({
            filename: '../css3/training.css',
            chunkFilename: 'adv.css',
            ignoreOrder: false
        })
    ]
}
