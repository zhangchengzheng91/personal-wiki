# 使用ESLint规范构建脚本

使用 eslint-config-airbnb-base

eslint --fix 可以自动处理空格

```javascript
module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true,
  }
}

function ignore() {
  var eslintDisableLine = true //eslint-disable-line 可以让 eslint 忽略本行的代码检查
}
```

