# 找出一个数组中，出现次数最多的元素

function getMost(arr) {
	const result = {}
    arr.forEach(item => {
    	if (!result[item]) {
			console.log('true')
            result[item] = 1
        } else {
            console.log('false')
            result[item] = result[item] + 1
        }
    })

    console.log(result)
    let most = arr[0]
    let mostCount = 1
    for (let key in result) {
        if (result[key] > mostCount) {
            mostCount = result[key]
            most = key
        }
    }

    return most
}
console.log(getMost([1,2,3,4,5,1,2,3,1,2,1]));
