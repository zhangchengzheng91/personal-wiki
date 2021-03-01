const promise1 = new Promise((resolve, reject) => {
  resolve('promise1')
})

const promise2 = new Promise((resolve, reject) => {
  resolve(promise1)
})

promise2.then(res2 => {
  console.log('res2=', res2) // promise1
})

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2
.then(result => console.log(result))
.catch(error => console.log(error))


// then 和 finally 的执行顺序
var p = new Promise(resolve => resolve(2))

p
  .then(e => console.log(e))
  .finally(() => console.log('finally'))

// 2
// finally

var p = new Promise(() => console.log('this=', this))

var p = Promise.any([
  Promise.reject(0),
  Promise.reject(1),
  Promise.reject(2),
  Promise.reject(3),
])

p.then(
  res => console.log('res=', res),
  err => console.log('err=', err)
)
