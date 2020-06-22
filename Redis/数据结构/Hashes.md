> Hashes

Redis 的散列可以存储多个键值对之间的映射。和字符串一样，散列存储的值即可以是字符串又可以是数字值，并且用户同样可以对散列存储的数字值执行自增或者自减操作。

|命令|行为|示例|
|:---|:---|:---|
|hset|在散列里面关联起给定的键值对|hset hash-key sub-key1 value1
|hget|获取指定散列键的值|hget hash-key sub-key1
|hgetall|获取散列包含的所有键值对|hgetall hash-key
|hdel|如果给定键存在于散列里，那么移除这个键|hdel hash-key sub-key1
