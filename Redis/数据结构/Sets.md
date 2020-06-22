> Sets

Redis 的集合和列表都可以存储多个字符串，他们之间的不同在于，列表可以存储多个相同的字符串，而集合则通过使用散列表来保证自己存储的每个字符串都是各不相同的（这些散列表只是键，但没有与键相关联的值）


|命令|行为|示例|
|:---|:---|:---|
|sadd|将给定元素添加到集合|sadd set-key item
|smembers|返回集合包含的所有元素|smembers set-key
|sismember|检查给定元素是否在于集合中|sismember set-key item4
|srem|如果给定元素在于集合中，那么移除这个元素|srem set-key item

