# eslint

eslint 的必要性: 即时暴露代码错误。

行业里面优秀的 ESlint 规范实践

[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)


制定团队的 ESlint 规范

1. 不重复造轮子，基于 eslint recommend 配置并改进
1. 能够帮助发现代码错误的规则，全部开启
1. 帮助保持团队的代码风格统一，而不是限制开发体验

形成文档，方便查看；进行 JS 培训

ESlint 如何执行落地？

和 CI/CD 系统集成

和 webpack 集成

本地开发阶段增加 precommit 钩子

安装 husky
```bash
npm install husky --save-dev
```
增加 npm script，通过 lint-staged 增量检查修改的文件
```json
{
  "script": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "linters": {
      "linters": {
        "*.{js,scss}": ["eslint --fix", "git add"]
      }
    }
  }
}
```

方案二：webpack 与 eslint 集成(只适合新项目接入)

使用 eslint-loader，构建时检查 JS 规范
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ]
      }
    ]
  }
}
```
