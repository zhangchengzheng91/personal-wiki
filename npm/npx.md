> 参考链接 [阮一峰 npx 使用教程](https://www.ruanyifeng.com/blog/2019/02/npx.html)

1. 方便调用项目内部模块
```hash
./node_modules/.bin/eslint --init
npx eslint --init
```
1. 避免全局安装模块(如果本地没有，下载该模块，然后删除)
```bash
npx create-react-app my-react-app
npx uglify-js@3.1.0
```
1. --no-install

    强制使用本地模块，不下载远程。如果本地不存在该模块，就会报错。
1. --ignore-existing

    忽略本地同名模块，强制安装远程模块
1. 使用不同的版本
```bash
npx node@0.12.8 -v
```
1. -p

    -p 参数对于需要安装多个模块的场景很有用
    ```bash
    npx -p lolcatjs -p cowsay [command]
    ```
1. -c

    如果 npx 安装多个模块，默认情况下，所执行的命令中，只有第一个可执行项会使用 npx 安装的模块，后面的执行还是会交给 shell 解释
    ```bash
    npx -p lolcatjs -p cowsay 'cowsay hello | lolcatjs'
    # 报错
    ```
    上面代码中，** cowsay hello | lolcatjs ** 执行时会报错，原因是第一项 ** cowsay ** 由 npx 解释，而第二项命令 *lolcatjs* 由 shell 解释，但是 lolcatjs 没有全局安装，所以报错。
    -c 参数可以将所有的命令都用 npx 解释。
    ```hash
    npx -p lolcatjs -p cowsay -c 'cowsay hello | lolcatjs'
    ```
    -c 参数的另一个作用，是将环境变量带入所要执行的命令。
    ```bash
    npm run env | grep npm_
    ```

    -c参数可以把这些 npm 的环境变量带入 npx 命令。
    ```bash
    npx -c 'echo "$npm_package_name"'
    ```
1. 执行 GitHub 源码
```bash
# 执行 Gist 上面代码中
npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
# 执行仓库代码
npx github:piuccio/cowsay hello
```
