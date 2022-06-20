// 题目链接：https://zhuanlan.zhihu.com/p/531297086
// 二进制加法
function add(x, y) {
  const a = x.toString(2)
  const b = y.toString(2)
  let total = ''
  let long = a
  let short = b

  if (b.length > a.length) {
    long = b
    short = a
  }

  // 算法性能优化：过长部分不做累加
  for (let i = short.length - 1; i >= 0; i--) {
    const s = parseInt(short[i])
    const l = parseInt(long[i + long.length - short.length])
    total = `${s + l == 1 ? '1' : '0'}${total}`
  }

  const pre = long.slice(0, long.length - short.length) || ''
  const sum = `${pre}${total}`

  return parseInt(sum, 2)
}


// 获取苹果总重量和最小重量的苹果
function getTotal(weights) {
  return weights.reduce((acc, item) => {
    const { ATotal, BTotal, min } = acc
    return {
      ATotal: add(ATotal, item),
      BTotal: BTotal + item,
      min: min < item ? min : item
    }
  }, {
    ATotal: 0,
    BTotal: 0,
    min: weights[0]
  })
}

function getResult(nums, weights) {
  const {ATotal, BTotal, min} = getTotal(weights)
  if (ATotal !== 0) {
    return -1
  }
  return BTotal - min
}

const nums1 = 3
const weights1 = [3, 5, 6]

const nums2 = 8
const weights2 = [7258, 6579, 2602, 6716, 3050, 3564, 5396, 1773]

console.log('getResult(3, [3, 5, 6])=', getResult(nums1, weights1))
console.log('getResult(8, [7258, 6579, 2602, 6716, 3050, 3564, 5396, 1773])=', getResult(nums2, weights2))

