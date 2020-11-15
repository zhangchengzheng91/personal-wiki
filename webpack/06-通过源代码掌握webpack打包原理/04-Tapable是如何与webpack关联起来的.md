# Tapable 是如何与 webpack 关联起来的

## 模拟 Compiler.js

```js
const { SyncHook, AsyncSeriesHook } = require('tapable')

module.exports = class Car {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(['newspeed']),
      brake: new SyncHook(),
      calculateRoutes: new AsyncSeriesHook(["source", "target", "routesList"])
    }
  }

  run() {
    this.accelerate(10)
    this.brake()
    this.calculateRoutes('Async', 'hook', 'demo')
  }

  accelerate(newspeed) {
    car.hooks.accelerate.call(newspeed)
  }

  brake() {
    car.hooks.brake.call()
  }

  calculateRoutes() {
    this.hooks.calculateRoutes.promise(...arguments).then(res => {

    }, err => {

    })
  }
}

```

## 插件 my-plugin.js
```js
const Compiler = require('./compiler')

class MyPlugin {
  apply(compiler) {
    compiler.hooks.brake.tap('WarningLampPlugin', () => {
      console.log('WarningLampPlugin')
    })
    compiler.hooks.accelerate.tap('LoggerPlugin', newspeed => {
      console.log(`Accelerate to ${newspeed}`)
    })
    compiler.hooks.calculateRoutes.tapPromise('calculateRoutes tapPromise', (source, target, routeslist, callback) => {
      console.log('source', source)

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`tapPromise to ${source} ${target} ${routeslist}`)
          resolve('resolve')
        }, 1000 * 2)
      })
    })
  }
}

```

## 插件模拟执行

```js
const myPlugin = new MyPlugin()

const options = {
  plugins: [myPlugin]
}

const compiler = new Compiler()

for (let plugin of options.plugins) {
  if (typeof plugin === 'function') {
    plugin.call(compiler, compiler)
  } else {
    plugin.apply(compiler)
  }
}

compiler.run()
```
