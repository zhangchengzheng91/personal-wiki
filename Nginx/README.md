# Nginx 基本命令

### 停止 Nginx
快速关闭： nginx -s stop || kill -TREM 主进程号 || kill -INI 主进程号
```bash
nginx -s stop

ps -ef |grep nginx|grep master

kill -INI [主进程号]
```

优雅关闭（不接受新的连接请求，等待旧的连接请求结束再关闭）: nginx -s quit 或者 kill -QUIT 主进程号。
```bash
nginx -s quit

ps -ef |grep nginx
kill -QIUT [主进程号]
```

### 重新加载配置文件

Nginx 配置平滑更新

为了让主进程重新读取配置文件，应该向主进程发送一个 HUP 信号，主进程一答案接收到重新加载配置的信号，它就
检查配置文件语法的有效性，然后试图应用新的配置，即打开新的日志文件和新的 socket 监听，如果失败，它将回滚
配置更改并继续使用旧的配置，如果成功了，它开启新的工作进程，并给旧的工作进程发消息让它优雅的关闭，旧的工
作进程接收到关闭信号后，不再接收新的请求，如果已有请求正在处理，等当前请求处理完毕后关闭，如果没有正在处
理，则直接关闭。
```bash
nginx -s reload

ps -ef |grep nginx

kill -HUP [主进程号]
```

### 测试配置文件的语法是否正确，查看 nginx 配置文件位置
```bash
nginx -t
```

### 查看 nginx 版本信息，编译版本，和配置配置参数：
```bash
nginx -V
```

### 重启日志文件，备份日志文件时常用
```bash
nginx -s reopen

kill -USR1 [主进程号]
```

参考连接：  
[nginx启动、重启、重新加载配置文件和平滑升级](https://blog.csdn.net/gnail_oug/article/details/52754491)
