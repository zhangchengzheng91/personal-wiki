# mermaid 流程图实例

图表方向： TopBottom、BottomTop、RightLeft、LeftRight

``` mermaid
graph TB
		Top --> Bottom
```

``` mermaid
graph BT
		Top --> Bottom
```

## 示例

``` mermaid
%%{init: {'themeVariables': { 'primaryColor': 'yellowgreen', 'fontFamily': 'arial,sans-serif', 'fontSize': '16px'}}}%%
graph LR
		idl("这个节点是圆角")--"这是线上的文字描述"---id["自定义节点样式"]
		idl("这个节点是圆角")---|"这是线上的文字描述"|id2(("这是一个圆圈"))
		idl("这个节点是圆角")---id3>"这是一个飘带节点"]
		idl("这个节点是圆角")---id4{"这是一个菱形节点"}
		idl("这个节点是圆角")-- "这是线上的文字描述" -->id5["这是一个带箭头的线"]
		idl("这个节点是圆角")-->|"这是线上的文字描述"|id7["这条连线上有文字描述，第二种语法"]
		idl("这个节点是圆角")-.->id8["连线是 dash"]
		idl("这个节点是圆角")==>id9["连线加粗"]
		idl("这个节点是圆角")== "文字描述" ==>id10["连线是 dash"]
		
		style id fill:#f9f,stroke:#333,stroke-width:4px
		style id10 fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5
```



