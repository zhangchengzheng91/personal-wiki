# 修改 npm 源

### 临时使用
```bash
npm --registry https://registry.npm.taobao.org install express
```

### 持久使用
```bash
npm config set registry https://registry.npm.taobao.org

npm config get registry

npm info express
```

### 通过 cnpm 使用
```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm install express
``` 

### 恢复使用
```bash
npm config set registry https://registry.npmjs.org
```
