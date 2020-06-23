> Strings 字符串

Redis 的字符串和其他编程语言或者其他键值存储提供的字符串非常相似。

值类型： 字符串 ｜ 整数 ｜ 浮点数

整数的取值范围和系统的长整数（long integer）的取值范围相同（在 32 位的系统上，整数就是32位有符号整数。在 64 位系统上，整数就是 64 位有符号。

|命令|行为|示例
|:---|:---|:---|
|get| 获取存储在给定键中的值|get hello // world
|set|设置存储在给定键中的值|set hello world
|del|删除存储在给定键中的值|del hello
|incr|将存储的值加上1，存储值必须位整数|incr \<redis-key\>
|decr|将存储的值减去1，存储之必须位整数|decr \<redis-key\>
|incrby|将存储值加上 amount(整数)，存储值必须为整数|incrby \<redis-key\> \<amount\>
|decrby|将存储值减去 amount(整数)，存储值必须为整数|decrby \<redis-key\> \<amount\>
|incrbyfloat|将存储值加上浮点数 amount(redis version >= 2.6)| incrbyfloat \<redis-key\> \<amount\>
|append|将value追加到给定键当前存储值的末尾|append \<redis-key\> \<value\>
|getrange|获取给定范围的值|getrange \<redis-key\> \<start\> \<end\>
|setrange|设置偏移量的值|setrange \<redis-key\> \<offset\> \<value\>
|getbit|将字符串看作是二进制位串，返回偏移量的值|getbit \<redis-key\> \<offset\>
|setbit|将字符串看作是二进制位串，并将位串中偏移量位 offset 的二进制位的值设置位 value|setbit \<redis-key\> \<offset\> \<value\> 
|bitcount|统计二进制位串里面值为 1 的二进制的数量，如果给定范围，则在给点范围寻找|bitcount \<redis-key\> [start end]
|bitop|对一个或多个二进制位串执行包括 ADD、OR XOR、NOT再内的任意一种位运算，并将计算得出的结果巴卜村在 dest-key 键里面|bitop operation dest-key key-name \[key-name...\]
