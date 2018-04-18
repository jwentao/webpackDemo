import * as _ from 'lodash'
let page = 'subPageB'
// 可以写一些判断语句来判断什么时候加载什么代码
if (page === 'subPageA') {
	// 使用动态import,通过注释的形式指定chunk名
	import(/* webpackChunkName: 'subPageA' */'./subPageA')
		.then(function (subPageA) {
			console.log(subPageA)
		})
} else if (page === 'subPageB') {
	import(/* webpackChunkName: 'subPageB' */'./subPageB')
		.then(function (subPageB) {
			console.log(subPageB)
		})
}

export default 'pageB'