1. 修改 .gitignore 文件之后不生效问题解决方式

移除 git 缓存

|语法| 含义| 示例|
|:---|:---|:---|
|git rm --cached [filepath]| 移除单个文件| git rm --cached logs/err/log|
|git rm --cached -f [dirpath]| 移除某个目录| git rm --cached -r logs|
|git rm --cached .| 移除所有文件| git rm --cached .|
|git rm --cached -r [filepath dirpath .]| 强制移除| git rm --cached -r .|

参考链接：[使用.gitignore忽略文件或者文件夹及其失效解决方法](https://blog.csdn.net/toopoo/article/details/88660806)
