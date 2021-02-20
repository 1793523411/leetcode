# 数组中数字出现的次数

```
一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

 

示例 1：

输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]
示例 2：

输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
 

限制：

2 <= nums.length <= 10000
```

## 去重

空间复杂度不满足

```js
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
```

```js
var singleNumbers = function(nums) {
  let map = new Map() 
  let key
  for(let i = 0; i < nums.length; i++){
    key = nums[i]
    if(map.has(key)){
      map.delete(key)
    } else {
      map.set(key, 1)
    }
  }
  return [...map.keys()]
};
```

## 位运算

+ 遍历数组，将所有的数据做异或运算，最后的结果记为num1,由于相同的数异或运算是0，所以最后的结果一定是那两个不同的数据异或出来的结果，而且一定不是0，不为0意味着转化为二进制一定有一个位置上为1。(核心))

+ 通过与(&)运算，选定一个位为1的位置i，再次遍历数组，当前数据二进制位i上为0的数据放在a组，当前数据二进制位i上为1的数据放在b组【思考：相同的数据，一定会被分在同一组，不同的两个数一定会在不同的组（因为异或计算为1表明当前位上的数据一个为0，一个为1）】

+ 最后将a组和b组分别做异或运算就会得到这两个不同的数

```js
const singleNumbers = (nums) => {
  // 计算异或值
  let num1 = 0
  for (let i = 0; i < nums.length; i++) {
    num1 = num1 ^ nums[i];
  }
  // 通过与(&)选定1的位置
  let count = 1
  while((num1&count) === 0) {
    count = count * 2
  }
  // 分组
  let num2 = 0
  let num3 = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if ((num & count) === 0) {
      num2 = num2^num
    } else {
      num3 = num3^num
    }
  }
  return [num2, num3]
}
```

>一些列位运算题：https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/solution/zhi-chu-xian-yi-ci-de-shu-xi-lie-wei-yun-suan-by-a/