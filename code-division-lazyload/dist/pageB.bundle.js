webpackJsonp([3],{

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

let page = 'subPageB'
// 可以写一些判断语句来判断什么时候加载什么代码
if (page === 'subPageA') {
	// 使用动态import,通过注释的形式指定chunk名
	__webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 1))
		.then(function (subPageA) {
			console.log(subPageA)
		})
} else if (page === 'subPageB') {
	__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 2))
		.then(function (subPageB) {
			console.log(subPageB)
		})
}

/* harmony default export */ __webpack_exports__["default"] = ('pageB');

/***/ })

},[6]);