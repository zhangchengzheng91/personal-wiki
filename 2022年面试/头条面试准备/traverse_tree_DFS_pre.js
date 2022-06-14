const { root } = require('./root')

console.log('深度优先 -> 先序 -> 遍历一棵树')

function traverseTree(node) {
  if (node == null) {
    return
  }
  const stack = [node]
  while(stack.length) {
    const last = stack.pop()
    console.log('last.value=', last.value)
    if (last.right) {
      stack.push(last.right)
    }
    if (last.left) {
      stack.push(last.left)
    }
  }
}

traverseTree(root)
