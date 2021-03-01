function deepCloneObject(target, map = new Map()) {
  console.log('target=', target)
  let cloneTarget
  console.log('map=', map)
  if (Object.getPrototypeOf(target) === Object.prototype) {
    cloneTarget = {}
    if (map.has(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    for (let key in target) {
      cloneTarget[key] = deepCloneObject(target[key], map)
    }
  } else if (Array.isArray(target)){
    cloneTarget = []
    if (map.has(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    for (let item of target) {
      cloneTarget.push(deepCloneObject(item), map)
    }
  } else {
    cloneTarget = target
  }
  return cloneTarget
}

var obj = {
  name: 'tom',
  age: 18,
  hobbies: ['football', 'basketball'],
  parents: {
    father: 'cat',
    mother: 'jane'
  },
  say: function() {
    return 'hello!'
  }
}

obj.other = obj

var a = deepCloneObject(obj)

function forEach(array, iteratee) {
  let index = -1
  const length = array.length
  while(++index < length){ iteratee(array[ index ], index) }
  return array
}

function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target)
    let cloneTarget = isArray ? [] : {}
    if (map.get(target)) { return map.get(target) }
    map.set(target, cloneTarget)
    const keys = isArray ? undefined : Object.keys(target)
    forEach(keys || target, (value, key) => {
      if (keys) { key = value }
      cloneTarget[ key ] = clone(target[ key ], map)
    })
    return cloneTarget
  } else { return target }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: { child: 'child' },
  field4: [2, 4, 8],
  f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
}
target.target = target
console.time()
const result = clone1(target)
console.timeEnd()
console.time()
const result2 = clone2(target)
console.timeEnd()
