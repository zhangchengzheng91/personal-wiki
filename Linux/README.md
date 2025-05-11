# 比较好用的 Linux 命令

> 所有命令都是基于 MacOS 运行的，所以会和 Liunx 的运行环境在 options 和输出结果上有所差异。

- [df 显示磁盘相关信息](Linux/df/README.md)
- [du 显示每个文件和目录的磁盘使用空间](Linux/du/README.md)
- [sort 对文本文件中所有行进行排序](Linux/sort/README.md)
- [head 只显示前几行的命令](Linux/head/README.md)
- [lsof 显示 Linux 系统当前打已打开的所有文件列表](Linux/lsof/README.md)

## 使用二进制命令安装 linux 命令行

1. 下载压缩包
   > 这里一定要注意 x86 架构
   例如：https://github.com/bootandy/dust/releases。

2. 解压压缩包

    ``` shell
    tar -xvf _downloaded_file.tar.gz
    ```

3. 将解压完的**二进制文件**移动到 bin 目录

    ```shell
    # xxx 指二进制文件名称
    cd xxx
    mv xxx /usr/local/bin/
    ```
