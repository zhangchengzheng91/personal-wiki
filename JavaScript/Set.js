// 基本用法
var s = new Set()
var arr = [2, 3, 5, 4, 5, 2, 2]
arr.forEach(value => s.add(value))
s // Set(4) {2, 3, 5, 4}

var set = new Set([1, 2, 3, 4, 4])

[...set] // [1, 2, 3, 4]
