const array = ['a', 'b', 'd', 'b','c', 'c', 'a', 'b']

// => ['a', 'a', 'b', 'b', 'c', 'c']

function mapArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let tmp
      if (arr[i].charCodeAt() < arr[j].charCodeAt()) {
        tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
      }
    }
  }

  return arr
}

console.log('mapArray(array)=', mapArray(array))
