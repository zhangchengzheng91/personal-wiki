# webpack 知识体系

webpack 知识体系

webpack 常用指令参数：
```bash
webpack --config=[配置文件] #如果默认文件名称为 webpack.config.js 且在根目录，则直接运行 webpack
```

- webpack与构建发展简史

  - [课程介绍](webpack/webpack与构建发展简史/1.课程介绍.md)
  - [内容综述](webpack/webpack与构建发展简史/2.内容综述.md)
  - [为什么需要构建工具](webpack/webpack与构建发展简史/3.为什么需要构建工具.md)
  - [前端构建演变之路](webpack/webpack与构建发展简史/4.前端构建演变之路.md)
  - [为什么选择webpack](webpack/webpack与构建发展简史/5.为什么选择webpack.md)
  - [初识webpack](webpack/webpack与构建发展简史/6.初识webpack.md)

- webpack 基础用法

  - [entry](webpack/02webpack基础用法/01-entry.md)
  - [output](webpack/02webpack基础用法/02-output.md)
  - [loaders](webpack/02webpack基础用法/03-loaders.md)
  - [plugins](webpack/02webpack基础用法/04-plugins.md)
  - [mode](webpack/02webpack基础用法/05-mode.md)
  - [解析 ES6](webpack/02webpack基础用法/06-解析ES6.md)
  - [解析 css 和 less](webpack/02webpack基础用法/07-解析css和less.md)
  - [解析图片和字体资源](webpack/02webpack基础用法/08-解析图片和字体资源.md)
  - [webpack 中的文件监听](webpack/02webpack基础用法/09-webpack中的文件监听.md)
  - [webpack 中的热更新及原理分析](webpack/02webpack基础用法/10-webpack中的热更新及原理分析.md)
  - [文件指纹策略](webpack/02webpack基础用法/11-文件指纹策略.md)
  - [代码压缩](webpack/02webpack基础用法/12-代码压缩.md)

- [webpack 进阶用法](webpack/03-webpack进阶用法/)

  - [自动清理构建目录产物](webpack/03-webpack进阶用法/01-自动清理构建目录产物.md)
  - [postcss](webpack/03-webpack进阶用法/02-postcss.md)
  - [移动端CSS-px自动转换成rem](webpack/03-webpack进阶用法/03-移动端CSS-px自动转换成rem.md)
  - [静态资源内联](webpack/03-webpack进阶用法/04-静态资源内联.md)
  - [多页面应用打包](webpack/03-webpack进阶用法/05-多页面应用打包.md)
  - [使用source-map](webpack/03-webpack进阶用法/06-使用source-map.md)
  - [提取页面公共资源](webpack/03-webpack进阶用法/07-提取页面公共资源.md)
  - [tree shaking](webpack/03-webpack进阶用法/08-tree-shaking.md)
  - [scope hoisting](webpack/03-webpack进阶用法/09-Scope-hositing.md)
  - [code split](webpack/03-webpack进阶用法/10-code-split.md)
  - [eslint](webpack/03-webpack进阶用法/11-eslint.md)
  - [webpack打包库和组件](webpack/03-webpack进阶用法/12-webpack打包库和组件.md)
  - [SSR](webpack/03-webpack进阶用法/13-SSR.md)
  - [日志](webpack/03-webpack进阶用法/14-优化构建时命令行显示日志.md)
  - [构建异常和终端处理](webpack/03-webpack进阶用法/15-构建异常和终端处理.md)

- [编写可维护的 webapck 配置](webpack/04-编写可维护的webpack配置/)

  - [构建配置包设计](webpack/04-编写可维护的webpack配置/01-构建配置包设计.md)
  - [功能模块设计和目录结构](webpack/04-编写可维护的webpack配置/02-功能模块设计和目录结构.md)
  - [使用ESLint规范构建脚本](webpack/04-编写可维护的webpack配置/03-使用ESLint规范构建脚本.md)
  - [冒烟测试](webpack/04-编写可维护的webpack配置/04-冒烟测试介绍和实际运用.md)
  - [单元测试与测试覆盖率](webpack/04-编写可维护的webpack配置/05-单元测试与测试覆盖率.md)
  - [持续集成](webpack/04-编写可维护的webpack配置/06-持续集成.md)
  - [发布构建包到npm](webpack/04-编写可维护的webpack配置/07-发布构建包到npm.md)
  - [git commit 规范与changeLog](webpack/04-编写可维护的webpack配置/08-git-commit规范与changeLog.md)
  - [语义化版本（Semantic Versioning）规范格式](webpack/04-编写可维护的webpack配置/09-语义化版本规范格式.md)

- [webpack 构建速度和构建体积优化策略](webpack/05-webapck构建速度和构建体积优化策略/)

  - [stats](webpack/05-webapck构建速度和构建体积优化策略/01-stats.md)
  - [速度分析](webpack/05-webapck构建速度和构建体积优化策略/02-速度分析.md)
  - [体积分析](webpack/05-webapck构建速度和构建体积优化策略/03-体积分析.md)
  - [使用高版本的 webpack 和 Node.js](webpack/05-webapck构建速度和构建体积优化策略/04-使用高版本.md)
  - [多进程/多实例构建](webpack/05-webapck构建速度和构建体积优化策略/05-多进程-多实例构建.md)
  - [多进程并行压缩代码](webpack/05-webapck构建速度和构建体积优化策略/06-多进程并行压缩代码.md)
  - [预编译资源模块](webpack/05-webapck构建速度和构建体积优化策略/07-预编译资源模块.md)
  - [利用缓存提升二次构建速度](webpack/05-webapck构建速度和构建体积优化策略/08-利用缓存提升二次构建速度.md)
  - [缩小构建目标](webpack/05-webapck构建速度和构建体积优化策略/09-缩小构建目标.md)
  - [tree-shaking](webpack/05-webapck构建速度和构建体积优化策略/10-tree-shaking.md)
  - [图片压缩](webpack/05-webapck构建速度和构建体积优化策略/11-图片压缩.md)
  - [使用动态Polyfill服务](webpack/05-webapck构建速度和构建体积优化策略/12-使用动态Polyfill服务.md)

- [webpack 构建速度和构建体积优化策略](webpack/06-通过源代码掌握webpack打包原理/)

  - [webpack启动过程分析](webpack/06-通过源代码掌握webpack打包原理/01-webpack启动过程分析.md)
  - [webpack-cli源码阅读](webpack/06-通过源代码掌握webpack打包原理/02-webpack-cli源码阅读.md)
  - [Tapable插件架构与Hooks设计](webpack/06-通过源代码掌握webpack打包原理/03-Tapable插件架构与Hooks设计.md)
  - [Tapable是如何与webpack关联起来的](webpack/06-通过源代码掌握webpack打包原理/04-Tapable是如何与webpack关联起来的.md)
  - [准备阶段](webpack/06-通过源代码掌握webpack打包原理/05-webpack流程篇-准备阶段.md)
  - [模块构建和chunk生成阶段](webpack/06-通过源代码掌握webpack打包原理/06-webpack流程篇-模块构建和chunk生成阶段.md)
  - [文件生成](webpack/06-通过源代码掌握webpack打包原理/07-webpack流程篇-文件生成.md)
  - [编写一个简易的webpack准备工作](webpack/06-通过源代码掌握webpack打包原理/08-编写一个简易的webpack.md)

- [编写 loader 和插件](webpack/07-编写loader和插件)

    - [loader的链式调用和执行顺序](webpack/07-编写loader和插件/01-loader的链式调用和执行顺序.md)
    - [loader调试](webpack/07-编写loader和插件/02-loader调试.md)
    - [更复杂loader的开发](webpack/07-编写loader和插件/03-更复杂loader的开发.md)
    - [开发一个自动合成雪碧图的loader](webpack/07-编写loader和插件/04-开发一个自动合成雪碧图的loader.md)
    - [插件基本结构介绍](webpack/07-编写loader和插件/05-插件基本结构介绍.md)
    - [更复杂的插件场景开发](webpack/07-编写loader和插件/06-更复杂的插件场景开发.md)
    - [实战开发一个插件](webpack/07-编写loader和插件/07-实战开发一个插件.md)
