# mode

mode 用来指定当前的构建环境：production | development | none

优点：设置 mode 可以使用 webpack 内置的函数，默认值为 production

mode 的内置功能函数

| 选项 | 描述 |
|:--|:--|
| development | 设置 process.env.NODE_ENV = 'development', 开启 NamedChunksPlugin 和 NamedModulesPulgin|
| production | 设置 process.env.NODE_ENV = 'production', 开启 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin, TerserPlugin |
| none | 不开启任何优化选项 |
