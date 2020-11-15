# webpack 流程篇:模块构建和chunk生成阶段

## Compiler hooks

流程相关：
1. (before-)run
1. (before-/after-)compile
1. make
1. (after-)emit
1. done

监听相关：
1. watch-run
1. watch-close

## Compilation

Compiler 调用 Compilation 生命周期方法

1. addEntry -> addModuleChain
1. finish(上报模块错误)
1. seal

## ModuleFactory

NormalModuleFactory import, require 直接导入一个模块名

ContextModuleFactory 模块名称包含路径的模块

## 支持的 Module

1. NormalModule  普通模块
    1. 使用 loader-runner 运行 loaders：生产 js
    1. 通过 Parser 解析（内部是 acron）：解析 js 当中的 require 依赖
    1. ParserPlugins 添加依赖
1. ContextModule ./src/a ./src/b
1. ExtarnalModule module.exports = jQuery
1. DelegateModule manifest
1. MultiModule entry: ['a', 'b']

## Compilation hooks

1. 模块相关
    1. build-module
    1. failed-module
    1. succeed-moudle
1. 资源生产相关
    1. module-asset
    1. chunk-asset
1. 优化和 seal 相关
    1. (after-)seal
    1. optimize
    1. optimize-modules(-basic/advanced)
    1. after-optimize-modules
    1. after-optimize-chunks
    1. after-optimize-tree
    1. optimize-chunk-modules(-basic/advanced)
    1. after-optimize-chunk-modules
    1. optimize-module/chunk-order
    1. before-muduld/chunk-ids
    1. (after-)optimize-module/chunk-ids
    1. before/after-hash
    
## chunk 生成算法

1. webpack 先将 entry 中对应的 module 都生成一个新的 chunk
1. 遍历 module 的依赖列表，将依赖的 module 也加入到 chunk 中
1. 如果一个依赖 module 是动态引入的模块【require.ensure 或 dynamicImport】，
那么就会根据这个 module 创建一个新的 chunk，继续遍历依赖
1. 重复上面过程，直至得到所有的 chunks
