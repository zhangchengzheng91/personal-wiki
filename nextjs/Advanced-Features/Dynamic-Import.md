# Dynamic Import

## 作用及意义

1. 实现代码分割
    1. <font color=red>如果不实现代码分割，如果项目特别大或者机器内存比较小，将会出现内存溢出的问题</font>
1. 按需加载
1. 对于一些只能运行在浏览器的 library 等，在浏览器端加载

## 用法

1. import
    ```jsx
    import { useState } from 'react'
    
    const names = ['Tim', 'Joe', 'Bel', 'Max', 'Lee']
    
    export default function Page() {
      const [results, setResults] = useState()
    
      return (
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={async (e) => {
              const { value } = e.currentTarget
              // **Dynamically load fuse.js**
              const Fuse = (await import('fuse.js')).default
              const fuse = new Fuse(names)
    
              setResults(fuse.search(value))
            }}
          />
          <pre>Results: {JSON.stringify(results, null, 2)}</pre>
        </div>
      )
    }
    ```
1. next/dynamic

    1. next/dynamic 已经内置了 import()
    1. 支持 preload
    1. next/dynamic 不能在 React render 中使用，需要在模块顶部声明，与 React.lazy 相似

    ```jsx
    // default export
    const DynamicComponent = dynamic(() => import('../components/hello'))
       
    // with name export
    const DynamicComponent = dynamic(() =>
         import('../components/hello').then((mod) => mod.Hello)
    )
   
    // with loading
   const DynamicComponentWithCustomLoading = dynamic(
         () => import('../components/hello'),
         { loading: () => <p>loading Component</p> }
   )
   
   // with no SSR
   const DynamicComponentWithNoSSR = dynamic(
         () => import('../components/hello3'),
         { ssr: false }
   )
    ```
