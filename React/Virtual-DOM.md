# Virtual DOM

## Virtual DOM 的优势

提升 DOM 操作的效率，推动了数据驱动式组件开发的形成与完善。

## Virtual DOM 的主要思想

模拟 DOM 的树状结构，在内存中创建保存映射 DOM 信息的节点数据，在由于交互等因素需要视图更新时，先通过节点数据进行 diff 后得到差异结果后，再一次性对 DOM 进行批量更新操作。这就好比在内存中创建了一个平行世界，浏览器中 DOM 树的每一个节点与属性都在这个平行世界中存在着另一个版本的虚拟 DOM 树，所有复杂曲折的逻辑都在平行世界中的 Virtual DOM 处理完成，只将最终的更新结果发送给浏览器中的 DOM 树执行，这样就避免了冗余琐碎的 DOM 树操作负担，进而有效提高了性能。

## diff 效率之争

diff 算法的复杂度与效率树决定 Virtual DOM 能够带来性能提升的关键。

比较典型的 diff 算法

1. 深度优先遍历 DFS 算法，复杂度 O(n^3)
1. cito.js，采用两端同时比较的算法
1. kivi.js，使用key实现移动追踪及基于key的编辑长度距离算法应用。算法复杂度 为O(n^2)
1. snabbdom
1. reconilation

## Diff 策略

* 按tree层级diff

    ![level by level](./assets/level%20by%20level)
    
* list

    当被 diff 的节点处于同一层级时，通过三种节点操作新旧节点进行更新：插入、移动、删除。同时提供给用户设置 key 属性的方式调整 diff 更新中默认的排序方式。在没有 key 值的列表 diff 中，只能通过按顺序进行每个元素对比。在数据量较大的情况下，diff 效率底下。

    ![list](./assets/list)
    
* Components

    为了提升 diff 效率，同一个子节点进行 diff 时，优先比较类型，如果类型不一致，则直接创建新类型的Virtual DOM，替换旧节点。 

    ![component](./assets/component)

diff 算法关注的 3 个核型：节点类型、属性数据、子节点对象

## Virtual DOM 的不同实现方式

### Vue snabbdom

### React reconcilation

## 参考链接
1. [百度外卖大前端技术团 - 探索Virtual DOM的前世今生](https://juejin.cn/post/6844903609667321863)
