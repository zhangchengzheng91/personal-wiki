# 使用 source map

作用: 通过 source map 定位到源码

[JavaScript Source Map 详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)

开发环境开启，线上环境关闭【防止暴露业务逻辑】

线上排查问题的时候可以将 sourcemap 上传到错误监控系统

source map 关键字

eval: 使用 eval 包裹模块代码
source map: 产生 .map 文件。js 文件和 map 文件分离
cheap: 不包含列信息。错误信息只能定位到行，定位不到列
inline: 将 .map 作为 DateURL 嵌入，不单独生成 .map 文件
module: 包含 loader 的 sourcemap。即包含代码的 map 信息，也包含 loader 的 map 信息。

source map 类型

| devtool | 首次构建 | 二次构建 | 是否适合生产环境 | 可以定位的代码 |
|:---|:---|:---|:---|:---|
| (none) | +++ | +++ | yes | 最终输出的代码 |
| eval | +++ | +++ | no | webpack 生成的代码（一个个的模块）|
| cheap-eval-source-map | + | ++ | no| 经过 loader 转换后的代码（只能看到行）|
| cheap-module-eval-source-map | 0 | ++ | no | 源代码只能看到行 |
| eval-source-map | -- | + | no | 源代码 |
| cheap-source-map | + | 0 | yes | 经过 loader 转换后的代码，只能看到行 |
| cheap-module-source-map | 0 | - | yes | 源代码只能看到行 |
| inline-cheap-source-map | + | 0 | no | 经过loader 转换后的代码，只能看到行 |
| inline-cheap-module-source-map | 0 | - | no | 源代码只能看到行 |
| source-map | --| -- | yes | 源代码 |
| inline-source-map | --| -- | no | 源代码 |
| hidden-source-map | --| -- | yes | 源代码 |

基本上，开发环境直接用 source-map

production 环境将 source-map 添加到 Error Reporting Tool(e.g. Sentry) 这样
既不直接暴露源码，也能方便解决production 环境遇到的 bug。

 一般情况下公司内应该是有前端监控系统的，一旦报错，可以把 sourcemap 上传到这个监控系统里面。但是不要把 sourcemap 文件和静态资源的 cdn 一起发布到线上就好了。


