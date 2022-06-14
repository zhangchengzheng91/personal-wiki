console.log('通过递归的方式去遍历一颗树')

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
    right: {
      value: 5,
      left: {
        value: 10,
        left: null,
        right: null,
      },
      right: {
        value: 11,
        left: null,
        right: null,
      }
    }
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

function traverseTree(node, direction) {
  if (node === null) {
    return
  }
  // 先序遍历
  if (direction == 'pre') {
    console.log('node.value=', node.value)
  }
  if (node.left) {
    traverseTree(node.left, direction)
  }
  // 中序遍历
  if (direction == 'in') {
    console.log('node.value=', node.value)
  }
  if (node.right) {
    traverseTree(node.right, direction)
  }
  // 中序遍历
  if (direction == 'post') {
    console.log('node.value=', node.value)
  }
}

console.log('-------开始前序遍历-------')
traverseTree(root, 'pre')
console.log('-------前序遍历结束-------')

console.log('-------开始中序遍历-------')
traverseTree(root, 'in')
console.log('-------中序遍历结束-------')

console.log('-------开始后序遍历-------')
traverseTree(root, 'post')
console.log('-------后序遍历结束-------')
