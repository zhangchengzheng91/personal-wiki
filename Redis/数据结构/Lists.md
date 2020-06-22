> Lists

一个列表可以有序地存储多个字符串


|命令|行为|示例
|:---|:---|:---|
|rpush|将给定值推入列表的右端|rpush list-key item
|lrange|获取列表在给定范围上的所有值|lrange list-key 0 -1
|lindex|获取列表在给定位置上的单个值|lindex list-key 1
|lpop|从列表的左端弹出一个值，并返回弹出的值|lpop list-key
