# 从一个数组中找打不重复的值

```javascript
// 从一个数组中，找出唯一不重复的值，其他的值都是成对出现
var a = [1, 3, 2, 17, 3, 1, 2]

// 解法1：
function singleNumber1(nums) {
    for (let i = 0; i < nums.length; i++) {
        let found = false;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i] && i != j) {
                found = true;
                break;
            }
        }
        if (!found) return nums[i];
    }
};

// 解法2：
function findUniqueNumber(nums) {
    let memo = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!memo[num]) {
            memo[num] = 1;
        } else {
            memo[num] += 1;
        }
    }
    return Object.keys(memo).reduce((unique,num) => {
        return memo[num] === 1 ? Number(num) : unique;
    }, NaN);
};

/*
* 解法3：位运算符
* 将十进制数字转化为 32bit 整数，再运算，再返回十进制整数
* 1 and 1 => 0
* 0 and 0 => 0
* 0 and 1 => 1
* 将原数组转化为 32bit 形式比较直观
*     1
*    11
*    10
* 10001
*    11
*     1
*    10
*/
function findUniqueNumber3(nums) {
  return nums.reduce((val, num) => val ^ num); 
}
```

参考链接：

1. [HOW TO FIND A UNIQUE NUMBER IN A LIST CONTAINING PAIRS?](https://yonatankra.com/how-to-find-a-unique-number-in-a-list-of-pairs/)
1. [表达式与运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators)
