function f1(a) {
  return a + 1
}
function f2(b) {
  return b + 1
}
function f3(c) {
  return c + 1
}
function compose() {
  const composeArguments = arguments
  return function(name) {
    /*
    * Accumulator (acc) (累计器)
    * Current Value (cur) (当前值)
    * Current Index (idx) (当前索引)
    * Source Array (src) (源数组)
    * */
    return Array.prototype.reduce.call(composeArguments, (acc, cur, idx, src) => {
      return cur(acc)
    }, name)
  }
}

const newFun = compose(f1, f2, f3)

console.log('newFun(1)=', newFun(1))
