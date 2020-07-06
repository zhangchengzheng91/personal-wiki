# CSS 问题解决办法

CSS 问题解决的核心方法为：模块化。CSS 模块化解决了以下两个问题：CSS 样式的导入和导出。

### CSS-in-JS
这种方案彻底抛弃CSS，使用 JavaScript 或 JSON 来写样式，能给 CSS 提供 JavaScript 同样强大的模块化能力。但缺点同样明显，Inline
Style 几乎不能利用 CSS 本身的特性，比如级联、媒体查询（media query）等，:hover 和 :active 等伪类处理起来比较复杂。另外，这种
方案需要依赖框架实现，其中与 React 相关的 Radium、jsxstyle 和 react-style.

### CSS Modules
通过 webpack 配置，为 class 生成唯一值，从而避免 class 全局污染问题，命名混乱问题。

[uncss](https://github.com/uncss/uncss) 移除未使用的 css，缩小 CSS 的体积.同时启用 webpack 样式表压缩。

### LESS、SASS 或者 PostCSS
使用预编译工具解决模块化和变量共享问题。

LESS 或者 SASS 提供了变量、混合、模块、继承等概念。同时支持嵌套等。

PostCSS 的内核并不会对 CSS 做任何转化，而是将原始的 CSS 代码转化为抽象语法树（abstract Syntax Tree，简称AST），并传递给各个
插件，插件根据用户配置对 AST 进行处理后还原为真正的 CSS。换句话说，你想对 CSS 做那些处理并不取决与 PostCSS 本身，而是取决于哪
些插件。"内核轻量化，功能插件化"的微内核架构令 PostCSS 具有高度的可定制性和可扩展性，减少了功能冗余，更利于开发团队制定统一的技
术规范和构建流程。
