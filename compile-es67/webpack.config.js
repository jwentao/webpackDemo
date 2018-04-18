/**
 * Created by 38079 on 2018/4/18.
 */
// npm install babel-loader@8.0.0-beta.0 @babel/core 安装babel
// npm install @babel/preset-env --save-dev 安装presets，为babel-loader指定参数，用于指定规范

// babel polyfill 全局垫片，为应用准备，用于编译es6、7的函数等等（上面的loader只能编译语法）
// 使用polyfill先npm install babel-polyfill -save 安装，项目中import "babel-polyfill"

// babel runtime transform 局部垫片，为开发框架准备，不会污染全局
// npm install @babel/plugin-transform-runtime --save-dev
// npm install @babel/runtime -save,版本需要和babel统一
// 在项目根目录新建一个.babelrc文件，配置babel相关的东西
module.exports = {
	entry: {
		app: './app.js'
	},
	output: {
		filename: '[name].[hash:8].js'
	},
	// 通过module来指定loader
	module: {
		rules: [ // 数组每一项可以指定一个规则
			{
				test: /\.js$/,
				// use: 'babel-loader', // 符合这个正则的使用这个loader,可以是个单独的loader，也可以是对象
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								targets: {
									browsers: ['> 1%', 'last 2 versions'] // target中指定编译后兼容的版本
									// chrome: '52' // 直接指定为某个浏览器版本
								}
							}]
						]
					}
				},
				exclude: '/node_modules/' // 排除在外不需要编译的
			}
		]
	}
}