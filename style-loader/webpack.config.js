// style-loader
// style-loader/url 通过link引入
// style-loader/useable 可以控制样式什么时候可用

// 首先需要通过npm下载style-loader和css-loader
var path = require('path')
module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: './dist/', // 修改项目中引用资源的路径
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						// loader: 'style-loader/url'
						// loader: 'style-loader/useable'
						options: {
							insertInto: '#app',
							singleton: true,
							transform: './css.transform.js' // 通过这个js暴露出来的方法处理css语句
						}
					},
					// 这个顺序不是随意的，放在后面的会先解析
					// style-loader/url + 'file-loader的方式比较少用，它通过link引入样式
					{
						loader: 'css-loader'
						// loader: 'file-loader'
					}
				]
			}
		]
	}
}