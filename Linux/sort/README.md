# 对文本文件中所有行进行排序

## 补充说明

对文本文件中所有行进行排序。

## 语法

```bash
sort [OPTION]... [FILE]...
sort [OPTION]... --files0-from=F
```

## 主要用途

1. 将所有输入文件的内容排序后并输出。
1. 当没有文件或文件为-时，读取标准输入。

## options

|option| all| description| 其他|
|:---|:---|:---|:---|
|-r| --reverse| 将结果倒序排列|
|-n| --numeric-sort| 根据数字排序||
|-M| --month-sort| 按照非月份、一月、十二月的顺序排序||
|-g| --general-numeric-sort| 根据数字排序||
|||||
## 示例

1. 读出当前目录下的所有文件，并排序
```bash
du -sh * | sort -rn
```
