let webpack = require('webpack');
module.exports={
	entry: {
		'commonjs':'./src/commonjs.js'
	},
	output: {
		filename: 'bundle.js',
		path: './dist/'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common.js')
	]
}