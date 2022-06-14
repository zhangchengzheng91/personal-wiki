const { root } = require('./root')

console.log('深度优先 -> 先序 -> 遍历一棵树')

function traverseTree(node) {
  if (node === null) {
    return
  }
  
  const tmpStack = [root]
  const result = []
  
  while(tmpStack.length) {
    const last = tmpStack.pop()
    
    result.push(last)
    
    if (last.left) {
      tmpStack.push(last.left)
    }

    if (last.right) {
      tmpStack.push(last.right)
    }
  }
  
  return result.reverse()
}

console.log('traverseTree(root)=', traverseTree(root))
