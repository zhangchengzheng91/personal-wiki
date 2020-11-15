# webpack-cli源码阅读

## webpack-cli 做的事情

### 引入 yargs，对命令进行定制

#### 命令行工具包 yargs 介绍

生成动态 help 帮助信息

提供命令和分组参数（config/config-args.js），将命令划分为 9 类

1. Config options
    配置相关参数（--config 文件名称、--env 运行环境）
1. Basic options
    基础参数（entry 设置、debug 设置、watch 监听设置、devtool 设置
1. Module options
    模块参数，给 loader 设置扩展
1. Output options
    输出参数（输出路径、输出文件名称）
1. Advanced options
    高级用法（记录设置、缓存设置、监听频率、bail等）
1. Resolving options
    解析参数：（alias 和 解析的文件后缀设置）
1. Optimizing options:
    优化参数
1. Stats options
    统计参数
    
在 convert-args.js 文件中，将命令行 options 和 webpack config 文件转化为一
个对象，方便之后与webpack配置文件合并

options 转换完成之后，再 processOptions，主要是增强 options.stats，做一些
类似日志输出方面的配置。

实例化 webpack 对象，将组装的参数 options 转化为 compiler。之后再分析 argv
参数，强化 compiler。

之后运行 compiler.run 执行构建。compilerCallback 做最后的结果日志的输出。

### 分析命令行参数，对各个参数进行转换，组成编译项配置

### 引用 webpack，根据配置项进行编译和构建

## 过滤 webpack 命令

webpack-cli 处理不需要经过编译的命令.从 NON_COMPILATION_CMD 分析出不需要编
译的命令

```js
const NON_COMPILATION_ARGS = [
  "init",             // 创建一份 webpack 配置文件
  "migrate",          // 进行 webpack 版本迁移
  "add",              // 往 webpack 配置中增加属性
  "remove",           // 往 webpack 配置中删除属性
  "serve",            // 运行 webpack serve 
  "generate-loader",  // 生成 webpack loader 代码
  "generate-plugin",  // 生成 webpack plugin 代码
  "info"              // 返回与本地文件相关的一些信息
]

const NON_COMPILATION_CMD = process.argv.find(arg => {
    if (arg === "serve") {
        global.process.argv = global.process.argv.filter(a => a !== "serve");
        process.argv = global.process.argv;
    }
    return NON_COMPILATION_ARGS.find(a => a === arg);
});

if (NON_COMPILATION_CMD) {
    return require("./utils/prompt-command")(NON_COMPILATION_CMD, ...process.argv);
}
```

## webpack-cli 执行的结果

webpack-cli 对配置文件和命令行参数进行转换最终生成配置选项参数 options

最终会根据参数实例化 webpack 对象，然后执行构建流程。

