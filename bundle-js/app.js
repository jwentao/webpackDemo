// 打包入口文件
// webpack支持es module,common js, amd 混用
// es module
import sum from './sum'
// common js
let minus = require('./minus')

// AMD
// 因为amd是异步加载模块，所以webpack给muti单独生成了要给chunk
require(['./muti'], function (muti) {
    console.log('muti(3, 5) = ', muti(2 ,3))
})
console.log('sum(23, 24) = ', sum(23, 24))
console.log('minus(22, 11) = ', minus(22, 11))