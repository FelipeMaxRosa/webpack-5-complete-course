const path = require('path');

// 4 Types of Asset Modules
// - asset/resource - to large files,
// - asset/inline - to small files, increase the bundle
// - asset - combination of two above, and use
//           parser.dataUrlCondition.maxSize
// - asset/source

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: 'dist/',
	},
	mode: 'none',
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 3 * 1024, // 3 kilobytes
					},
				},
			},
			{
				test: /\.txt/,
				type: 'asset/source',
			},
		],
	},
};
