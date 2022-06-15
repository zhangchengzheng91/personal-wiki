const { root } = require('./root')

console.log('获取一棵树的所有路径')

function getTreePaths(node) {
  if (node === null) {
    return []
  }

  if (node.left === null && node.right === null) {
    return [node.value]
  }

  let left = getTreePaths(node.left)
  let right = getTreePaths(node.right)

  return left.concat(right).map(value => `${node.value}->${value}`)
}

console.log('getTreePaths=', getTreePaths(root))
