商品数据表设计：

品类一张表
商品一张表
    品类ID
    商品ID
        商品价格
            会员价，正常价格
    
    订单类型
        会员单，正常单
    
    订单列表（总表）
        订单商品
        订单物流 每个物流对应的商品
        订单历史 每次订单状态的变更，不仅要更新订单总表，还要在订单历史中插入一条数据，系统崩溃，有迹可循
        订单折扣表 如果多个商品使用一张折扣券，每个商品按比例分摊折扣券金额，退款使用
        
        订单中，商品价格，快照当前商品价格，防止商品价格变更
    
