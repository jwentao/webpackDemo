// 如果不使用webpack配置文件，可以直接用命令webpack entry output 打包
module.exports = {
    // 入口
    entry: {
        app: './app.js'
    },
    // 出口
    output: {
        // 指定的name.hash.js
        filename: '[name].[hash:5].js'
    }
}