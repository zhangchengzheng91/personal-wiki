> 参考链接：[sass 官方文档](https://www.html.cn/doc/sass/#features)

less、sass 相关的知识点：嵌套、变量、模块化

Tips: 注意@include 与 @extend 的区别

1.  变量， **them.scss，定义全局基本样式变量**
    ```scss
    $width: 5em;
    #main {
      width: $width;
    }
    ```

1.  @mixin，结合默认参数(关键字参数)，可变参数
    ```scss
    @mixin sexy-border($color, $width: 1px) {
        border: {
            color: $color;
            width: $width;
            style: dashed;
        }
    }
    p {
        @include sexy-border(blue);
    }
    h1 {
        @include sexy-border(blue, 2px)
    }
    ```
    编译结果
    ```css
    p {
        border-color: blue;
        border-width: 1px;
        border-style: dashed;
    }
    h1 {
        border-color: blue;
        border-width: 2in;
        border-style: dashed;
    }
    ```

1.  嵌套
    ```scss
    #main p {
        color: #00ff00;
        width: 97%;
        .redbox {
            background-color: #ff0000;
            color: #000000;
        }
    }
    ```

1.  引用父选择器: &
    ```scss
    a {
        font-weight: bold;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
        body.firefox & {
            font-weight: normal;
        }
    }
    ```
    
1.  @extend
    ```scss
    .error {
        border: 1px #f00;
        background-color: #fdd;
    }
    .seriousError {
        @extend .error;
        border-width: 3px;
    }
    ```
    编译结果：
    ```css
    .error, .seriousError {
        border: 1px #f00;
        background-color: #fdd;
    }
    .seriousError {
        border-width: 3px;
    }
    ```

1.  @import，模块化
    ```scss
    @import "foo.css";
    @import "foo" screen;
    @import "http://foo.com/bar";
    @import url(foo);
    ```

1.  @media
    ```scss
    .sidebar {
        width: 300px;
        @media screen and (orientation: landscape) {
          width: 500px;
        }
    }
    ```
