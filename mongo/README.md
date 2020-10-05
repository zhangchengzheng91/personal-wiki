# mongo

以守护进程【Daemon】的方式启动 mongo

```bash
bin/mongod --dbpath=[数据文件路径] --logpath=[错误日志路径] --fork

./mongod --dbpath=/Users/zhangchengzheng/mongo/data --logpath=/Users/zhangchengzheng/mongo/logs/mongo.logs --fork

ps aux|grep mongod
```

--dbpath: 数据文件存放路径，每个数据库会在其中创建一个子目录，用于防止同一个实例多次运行的 mongod.lock 也保存在此目录中。

--logpath: 错误日志文件

--logappend: 错误日志采用追加模式(默认是覆写模式)

--bind_ip: 对外服务的绑定 ip，一般设置为空，及绑定在本机所有可用 ip 上，如有需要可以单独 指定

--port: 对外服务端口。Web 管理端口在这个 port 的基础上+1000

--fork: 以后台 Daemon 形式运行服务

--journal: 开启日志功能，通过保存操作日志来降低单机故障的恢复时间，在 1.8 版本后正式加入， 取代在 1.7.5 版本中的 dur 参数。

--syncdelay: 系统同步刷新磁盘的时间，单位为秒，默认是 60 秒。

--directoryperdb: 每个 db 存放在单独的目录中，建议设置该参数。与 MySQL 的独立表空间类似

--maxConns: 最大连接数

--repairpath: 执行 repair 时的临时目录。在如果没有开启 journal，异常 down 机后重启，必须执行 repair 操作


databases -> collections -> documents

```bash
show databases;
db; 当前数据库
use [database]; 创建数据库
```

