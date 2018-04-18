/**
 * Created by 38079 on 2018/4/18.
 */
// import 'babel-polyfill'
let func = () => {}
const NUM = 45
let arr = [1, 2, 4]
let newArr = arr.map(item => item + NUM)

console.log(newArr)
console.log(new Set(newArr))

function* funca() {}
