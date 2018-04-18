###代码分割和懒加载不是在webpack中进行配置实现的，然后通过改变写代码的方式
####有以下两种方式
* webpack内置的方法，require.ensure

* ES 2015的loader规范 stage3状态中，webpack根据这个规范实现了动态import. import().then()
#### 常用的使用场景有
* 分离业务代码 和 第三方依赖
* 分离业务代码 和 业务公共代码 和第三方依赖
* 分离首次加载 和 访问后加载的代码