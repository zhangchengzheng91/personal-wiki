> Sorted sets

有序集合和散列一样，都用于存储键值对：有序集合的键（zset-key）被称为成员（member），每个成员都是各不相同的；而有序集合的值（z-set）被称为分值（score），分值必须为浮点数。

|命令|行为|示例
|:---|:---|:---|
|zadd|将一个带有给定分值的成员添加到有序集合里面|zadd zset-key 728 member1
|zrange|根据元素在有序排列中所处的位置，从有序集合里面获取多个元素|zrange zset-key 0 -1 withscores
|zrangebyscore|获取有序集合在给定分值范围内的所有元素|zrangebyscore zset-key 0 800 withscores
|zrem|如果给定元素存在于有序集合，那么移除这个元素|zrem zset-key member1
