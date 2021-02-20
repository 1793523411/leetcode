const singleNumbers = (nums) => {
    // 计算异或值
    let num1 = 0
    for (let i = 0; i < nums.length; i++) {
        num1 = num1 ^ nums[i];
    }
    // 通过与(&)选定1的位置
    let count = 1
    while ((num1 & count) === 0) {
        count = count * 2
    }
    // 分组
    let num2 = 0
    let num3 = 0
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if ((num & count) === 0) {
            num2 = num2 ^ num
        } else {
            num3 = num3 ^ num
        }
    }
    return [num2, num3]
}



const singleNumbers = (nums) => {
    const obj = {}
    nums.forEach(item => {
        if (obj[item]) {
            delete obj[item]
        } else {
            obj[item] = true
        }
    })
    return Object.keys(obj)
}