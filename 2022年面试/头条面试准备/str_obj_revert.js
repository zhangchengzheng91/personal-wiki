const str = 'a.b.c'
const str2 = 'a.b'
const str3 = 'a'
const str4 = 'ab...bc.xxx.....cdddd...'

const result = {
  a: {
    b: {
      c: null
    }
  }
}



function revert(str) {
  if (!/\./g.test(str)) {
    return {
      [str]: null
    }
  }
  const end = str.indexOf('.')
  const key = str.substring(0,end)
  const value = str.substring(end, str.length).replace(/^\.*/, '').replace(/\.*$/, '')
  return {
    [key]: revert(value)
  }
}

console.log('revert(str3)=', revert(str3))
console.log('revert(str2)=', revert(str2))
console.log('revert(str)=', revert(str))
console.log('revert(str4)=', JSON.stringify(revert(str4)))

const obj1 = { a: null }
const obj2 = { a: { b: null } }
const obj3 = { a: { b: { c: null } } }
const obj4 = { 'ab': { 'bc': { 'xxx': { 'cdddd': null } } } }

function transObjToStr(obj) {
  const key = Object.keys(obj)[0]
  const value = obj[key]
  if (value === null) {
    return key.toString()
  }
  return `${key}.${transObjToStr(value)}`
}

console.log(transObjToStr(obj1))
console.log(transObjToStr(obj2))
console.log(transObjToStr(obj3))
console.log(transObjToStr(obj4))


