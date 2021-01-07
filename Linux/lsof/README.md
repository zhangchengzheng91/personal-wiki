# lsof

显示 Linux 系统当前打已打开的所有文件列表

```bash
lsof [options]
```

lsof 用于查看你进程打开的文件，打开文件的进程，进程打开的端口（TCP、UDP）。找回/恢复删除的文件。

|option| 含义| 示例|
|:---|:---|:---|
|-i<条件>| 列出符合条件的进程（4、6、协议、:端口、 @ip ）|lsof -i 4 <br/> lsof -i 6 <br/> lsof -i:3060 <br/> losf -i@localhost|
|-p <进程号>| 列出指定进程打开的所有文件|lsof -p \<PID\>|

输出日志中比较重要的信息

|output| 含义| 示例|
|:---|:---|:---|
|FD| 文件描述符，应用程序通过文件描述符识别该文件| cwd: 应用程序的当前工作目录，即该应用程序启动的目录|

解决的问题：

如果在项目启动的过程中，遇到 **Error: listen EADDRINUSE: address already in use :::3060** 的错误，可以看到是那个程序占用了这个端口，以及启动这个端口的目录。

```bash
# 获取当前 port 的 PID
lsof -:<port>
# 获取 PID 对应的 cwd
lsof -p <PID>
```

参考链接：
[Linux 命令大全](https://wangchujiang.com/linux-command/c/lsof.html)
