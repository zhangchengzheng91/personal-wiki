# webpack流程篇:准备阶段

## webpack 流程篇

1. entry-option：初始化 option
1. run: 开始编译
1. make: 从 entry 开始递归的分析依赖，对每个依赖模块进行 build
1. before-resolve：对模块位置进行解析
1. build-module：开始构建某个模块
1. normal-module-loader: 将 loader 加载完成的 module 进行编译，生成 AST 树
1. program：遍历 AST，当遇到 require 等一些调用表达式时，收集依赖
1. seal：所有依赖 build 完成，开始优化
1. emit：输出到 dist 目录


## 例外情况

thisCompilation 走的是单独的构建流程，例如 html-webpack-plugin

## 准备阶段的工作内容

将内部插件挂载到 Compiler 实例上，同时做 entryPlugin 的初始化，接下来进入到
compiler 里面，会做一个 compilation 调用  ,ModuleFactory(NormalModuleFactory, ContextModuleFactory 两个工厂函数的创建),最终 Compiler.run()

1. WebpackOptionsDefaulter 进行一些初始化操作，设置默认参数
1. NodeEnviromentPlugin 清理构建缓存
1. WebpackOptionsApply
    1. 将所有的配置 options 参数转换成 webpack 内部插件
    1. 使用默认插件列表，例如 mode 参数
        1. output.library -> LibraryTemplatePlugin 
        1. extarnals -> ExtarnalsPlugin
        1. devtool -> EvalDevtoolModulePlugin, SourceMapDevToolPlugin
        1. AMDPlugin, CommonJSPlugin
        1. RemoveEmptyChunksPlugin
1. EntryOptionPlugin 入口处理
        
## tips 

```bash
grep 'entryOption' -rn ./node_modules/webpack
```

