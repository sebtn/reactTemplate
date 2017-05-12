var path = require('path')
var webpack = require('webpack')


module.exports = {
	//file we want to put thru process into webpack 
	//is value to the key entry
	entry: './src/main.js',
	//where do we want the bundle file to go
	//is defined in output
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: 
		[
			{
				test:/\.js$/,
				exclude:/(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},	
			{
				test: /\.scss$/,
				loader:'style-loader!css-loader!sass-loader'
			}
		]
	}
}