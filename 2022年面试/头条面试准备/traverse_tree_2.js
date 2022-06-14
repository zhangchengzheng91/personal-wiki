console.log('通过广度遍历的方式去遍历一颗树')

const root = {
  value: 1,
  left: {
    value: 2,
    left : {
      value: 4,
      left: {
        value: 8,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      }
    },
    right: null,
    //right: {
    //  value: 5,
    //  left: {
    //    value: 10,
    //    left: null,
    //    right: null,
    //  },
    //  right: {
    //    value: 11,
    //    left: null,
    //    right: null,
    //  }
    //}
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: {
        value: 12,
        left: null,
        right: null,
      },
      right: {
        value: 13,
        left: null,
        right: null,
      }
    },
    right: {
      value: 7,
      left: {
        value: 14,
        left: null,
        right: null,
      },
      right: {
        value: 15,
        left: null,
        right: null,
      }
    }
  }
}

function traverseTree(node) {
  const queue = [node]
  while(queue.length) {
    const item = queue.shift()
    console.log(item.value)
    if (item.left) {
      queue.push(item.left)
    }
    if (item.right) {
      queue.push(item.right)
    }
  }
}

traverseTree(root)
console.log('-------------')

function traverseTree2(node) {
  const queue = [node]
  const levels = []
  while(queue.length) {
    let length = queue.length
    console.log('length=', length)
    const level = []
    // key code: 在 while 的单次循环中，将当前层遍历尽
    for (let i = 0; i < length; i++) {
      const item = queue.shift()
      console.log(item.value)
      level.push(item.value)
      if (item.left) {
        queue.push(item.left)
      }
      if (item.right) {
        queue.push(item.right)
      }
    }
    levels.push(level)
  }
  console.log('levels=', levels)
  return levels
}

traverseTree2(root)
