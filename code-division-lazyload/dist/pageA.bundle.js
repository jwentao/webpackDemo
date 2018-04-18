webpackJsonp([4],{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
// subpageA B中都依赖moduleA，可以用require.include提前引入进来，但并不执行,这样可以减少subpageA B这两个chunk的体积
// require.include('./moduleA')

let page = 'subPageA'
// 可以写一些判断语句来判断什么时候加载什么代码
if (page === 'subPageA') {
	// 使用webpack内置的方法 require.ensure
	// require.ensure(['./subPageA'], function() {
	// 	var subPageA = require('./subPageA')
	// }, 'subPageA')
	// 使用动态import,通过注释的形式指定chunk名
	__webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 1)).then(function (subPageA) {
		console.log(subPageA)
	})
} else if (page === 'subPageB')  {
	// require.ensure(['./subPageB'], function() {
	// 	var subPageB = require('./subPageB')
	// }, 'subPageB')
	__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 2)).then(function (subPageB) {
		console.log(subPageB)
	})
}
// 引入一个第三方包做测试
// 通过webpack提供的方法异步引入模块
// loadsh为模块名，通过ensure引入时并不会执行,需要在后面的回调中引用才会执行(异步加载)
// vendor为指定的chunk名
// require.ensure(['lodash'], function() {
// 	var _ = require('lodash')
// 	_.join(['1', '2'], '3') // 调用第三方包的方法
// }, 'vendor')

/* harmony default export */ __webpack_exports__["default"] = ('pageA');

/***/ })

},[3]);