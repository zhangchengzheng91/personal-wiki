const promise = new Promise((resolve, reject) => {
  console.log('new Promise')
  setTimeout(() => {
    console.log('resolve before')
    resolve('resolve')
    //reject('reject')
    console.log('resolve after')
  }, 2000)
})

//promise.then(res => {
//  console.log('res=', res)
//}).catch(err => {
//  console.log('err=', err)
//})

console.log('hello')

promise.then(res => {
  //console.log('res=', res)
  console.log('then resolved')
}, err => {
  console.log('err=', err)
})

console.log('world')

// new Promise Promise 一旦声明，立即执行
// hello
// world
// resolve before
// resolve after
// then resolved
