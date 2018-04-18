// webpack.optimize.CommonsChunkPlugin 是webpack内置的插件，用于提取公共代码
// name(s)表示chunk名称，根据每一个name新建多少次插件的实例
// filename表示公用代码打包后的文件名
// minChunks 可以是数字，比如2表示出现2次以上就打包到公用模块，也可以是无穷大，也可以是函数来自定义
// chunks指定提取代码的范围
// children和deepChildren分别表示是不是在entry的子模块中或者所有模块中查找共同依赖
// async创建一个异步的公共代码块
var webpack = require('webpack')
var path = require('path')
module.exports = {
	entry: {
		'pageA': './src/pageA',
		'pageB': './src/pageB',
		'vendor': ['lodash']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './dist/', // 指定发布路径,告诉webpack动态加载的代码的路径
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			async: 'async-common', // 声明为异步
			children: true, // 需要查找children的共同子依赖
			minChunks: 2
		}),
		// 将第三方引用包和webpack生成的代码也区分开，新建两个插件，命名成不同的名字
		new webpack.optimize.CommonsChunkPlugin({
			names: [ 'vendor', 'manifest'], // 使用names效果等同于下面分开写的写法
			minChunks: Infinity
		})
	]
}