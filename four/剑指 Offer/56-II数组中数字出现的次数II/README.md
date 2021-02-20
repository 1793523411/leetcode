# 数组中数字出现的次数 II

```
在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

 

示例 1：

输入：nums = [3,4,3,3]
输出：4
示例 2：

输入：nums = [9,1,7,9,7,9,7]
输出：1
 

限制：

1 <= nums.length <= 10000
1 <= nums[i] < 2^31
```

## 位运算

```js
var singleNumber = function (nums) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    let cnt = 0; //记录当前 bit 有多少个1
    let bit = 1 << i; //记录当前要操作的 bit
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] & bit) cnt++;
    }
    //不等于0说明唯一出现的数字在这个 bit 上是1
    if (cnt % 3 != 0) res = res | bit;
  }
  return res;
};
```

## Set

```js
var singleNumber = function(nums) {
    var s = new Set();
    var again = new Set();  // 用来存放重复元素的集合

    // 遍历数组
    nums.forEach((item) => {
        if(s.has(item)) {
            // 集合s中已有该元素
            again.add(item);
        } else {
            // 集合s中没有该元素
            s.add(item)
        }
    });
    // 将两个集合作差集
    var r = new Set([...s].filter(x => !again.has(x)));
    return [...r][0]
};
```

## object

```js
var singleNumber = function(nums) {
    let obj = {}
    for(let i = 0;i<nums.length;++i){
        obj[nums[i]]?obj[nums[i]]++:obj[nums[i]]=1
    }
    for(let k in obj){
        if(obj[k] == 1) return k
    }
};
```

或者这样

```js
var singleNumber = function(nums) {
    const obj = {};
    for (let num of nums) {
        obj[num] ? obj[num]++ : obj[num] = 1
    }
    for (let o in obj) {
        if(obj[o] == 1) {
            return o
        }
    }
};
```