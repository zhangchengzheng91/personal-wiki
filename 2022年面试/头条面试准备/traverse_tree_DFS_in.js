const { root } = require('./root')

console.log('深度优先 -> 中序 -> 遍历一棵树')

function traverseTree(node) {
  if (node === null) {
    return
  }

  const stack = []
  let current = root
  while (stack.length || current) {
    while(current) {
      stack.push(current)
      current = current.left
    }

    const last = stack.pop()

    console.log('last.value=', last.value)

    current = last.right
  }
}

traverseTree(root)
