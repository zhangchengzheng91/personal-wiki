# pm2 相关问题汇总

## 切换 node 版本，pm2 已经使用旧版本的 node

```bash
# 查看当前 pm2 使用的版本
head ~/.pm2/pm2.log

pm2 monit

pm2 show [server name]
```

这里会有一个问题：如果 log 文件和 pm2 monit 中的 node 版本不一致，应该以谁为主呢？

参考链接：[知乎-PM2 + nodenv 版本更换时的坑](https://zhuanlan.zhihu.com/p/28896850)

## 切换 node 版本，command not found: pm2

node 有一个命名空间的概念，每次 **npm install** 都是在当前版本下安装这个 package。所以切换空间会是 **command not found: pm2**

```bash
# 查看当前版本的 node 在全局安装了哪些 package
npm ls -g --depth=0

cd [process.execPath]
cd lib
tree -L
```
