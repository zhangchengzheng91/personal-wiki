# code split

## 代码分割的意义：

对于大的 web 应用来讲，将所有的代码都放在一个文件中显然是不够有效的，特别是当你的某些
代码块是在某些特殊的时候才会被使用到。webpack 有一个功能就是将你的代码库分割成 chunks
当代码运行到需要他们的时候再进行加载。

适用场景：
1. 抽离相同代码到一个共享块
1. 脚本懒加载，使得初始下载的代码体积更小

## 懒加载脚本的方式

CommonJS: require.ensure

ES6: 动态 import (目前还没有原生支持，需要 babel 转换)

## 如何适用动态 import

安装 babel 插件
```bash
npm install --save-dev @babel/plugin-syntax-dynamic-import
```

配置 .babelrc：
```json
{
  "plugins": [
    "@babel/plugin-syntax-dynamic-import"
  ]
}
```

懒加载组件的加载方式？

 下载同等大小的一个大文件和若干个小文件的效率对比，得看使用哪个版本的HTTP协议，HTTP1.0
 是大文件要快，因为不是持久连接；HTTP1.1默认开启持久连接，浏览器并发6个下载，显然小文件
 比较快，；HTTP2是小文件比较快，因为采用了二进制分帧实现了应用层的多路复用。现在最低也
 是HTTP1.1，理论上你说的情况不会出现的，除非这4个js文件都是使用同一个连接下载的，这样就
 多除了3次请求的时间。

